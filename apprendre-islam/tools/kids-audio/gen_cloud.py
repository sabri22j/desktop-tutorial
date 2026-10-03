"""Génère les voix de Sirâj avec un service de voix IA (ElevenLabs ou OpenAI), à lancer SUR TON ORDINATEUR.

La clé API reste dans une variable d'environnement : ne la mets jamais dans le site, ni dans GitHub.

  node dump_texts.js                       # écrit kidtexts.json
  # ElevenLabs :
  export ELEVENLABS_API_KEY=...            # + l'identifiant de la voix choisie
  python3 gen_cloud.py elevenlabs <voice_id> ../../audio/kids
  # OpenAI :
  export OPENAI_API_KEY=...
  python3 gen_cloud.py openai coral ../../audio/kids

Reprend là où il s'est arrêté (les fichiers déjà créés sont ignorés). Option : un seul clip, p. ex. `--only w1a1-c0`.
"""
import json, os, sys, time, urllib.request, urllib.error

# Prononciation : mots écrits comme la voix doit les dire (à ajuster à l'oreille).
REPLACE = {"ﷺ": ", sallallâhou 'alayhi wa sallam", "Dhouhr": "Zouhr", "Fajr": "Fadjr", "Allahou": "Allâhou",
           "dou'as": "dou'â", "dou'a": "dou'â", "doua": "dou'â", "Doua": "Dou'â"}
STYLE = "Voix chaleureuse et enjouée d'un petit personnage guide, qui parle à des enfants de 7 à 12 ans : claire, vivante, souriante, sans ton enfantin exagéré."

def fix(t):
    for a, b in REPLACE.items(): t = t.replace(a, b)
    return t.replace("«", "").replace("»", "")

def call(provider, voice, text):
    if provider == "elevenlabs":
        key = os.environ["ELEVENLABS_API_KEY"]
        req = urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{voice}?output_format=mp3_44100_64",
            data=json.dumps({"text": text, "model_id": "eleven_multilingual_v2", "voice_settings": {"stability": .7, "similarity_boost": .75, "style": 0.0, "use_speaker_boost": True}}).encode(),
            headers={"xi-api-key": key, "Content-Type": "application/json"})
    else:
        key = os.environ["OPENAI_API_KEY"]
        req = urllib.request.Request("https://api.openai.com/v1/audio/speech",
            data=json.dumps({"model": "gpt-4o-mini-tts", "voice": voice, "input": text, "instructions": STYLE, "response_format": "mp3"}).encode(),
            headers={"Authorization": "Bearer " + key, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r: return r.read()

def main():
    provider, voice, out = sys.argv[1], sys.argv[2], sys.argv[3]
    only = sys.argv[sys.argv.index("--only") + 1] if "--only" in sys.argv else None
    prefix = sys.argv[sys.argv.index("--prefix") + 1] if "--prefix" in sys.argv else None   # p. ex. w1a : monde 1 seulement
    keys = open(sys.argv[sys.argv.index("--file") + 1]).read().split() if "--file" in sys.argv else None   # liste de clips à refaire
    T = json.load(open("kidtexts.json")); os.makedirs(out, exist_ok=True)
    todo = {k: v for k, v in T.items() if (not only or k == only) and (not prefix or k.startswith(prefix)) and (not keys or k in keys) and (only or keys or not os.path.exists(os.path.join(out, k + ".mp3")))}
    print(f"{len(todo)} clips, {sum(len(fix(v)) for v in todo.values())} caractères à envoyer", flush=True)
    if "--dry-run" in sys.argv: return
    for key, text in todo.items():
        path = os.path.join(out, key + ".mp3")
        for attempt in range(4):
            try:
                open(path, "wb").write(call(provider, voice, fix(text))); print("ok", key, flush=True); break
            except urllib.error.HTTPError as e:
                print("erreur", key, e.code, e.read()[:200], flush=True)
                if e.code in (401, 403): sys.exit("Clé refusée : vérifie la clé API (et que la voix est dans « My Voices »).")
                if e.code == 402 or (e.code == 400 and "quota" in str(e.read()).lower()): sys.exit("Plus de crédits : relance plus tard, les fichiers déjà faits sont conservés.")
                time.sleep(2 ** attempt * 2)
            except Exception as e:
                print("erreur", key, e, flush=True); time.sleep(2 ** attempt * 2)

if __name__ == "__main__": main()
