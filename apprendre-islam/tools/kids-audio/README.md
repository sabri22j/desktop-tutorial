# Voix de Sirâj (espace enfants)

Les fichiers `audio/kids/*.mp3` sont générés hors ligne : voix Piper française (« tom »), puis voix « cartoon » (hauteur +7 demi-tons,
timbre plus aigu, intonation accentuée) avec le vocodeur WORLD.

```
pip install piper-tts pyworld lameenc numpy
# modèle : https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-fr_FR-tom-medium.tar.bz2
node dump_texts.js
python3 gen_audio.py 0 1 ../../audio/kids      # (shard 0 sur 1)
```

Pour changer de voix, modifier `gain`, `shift`, `formant` dans `gen_audio.py` (fonction `synth`) ou le modèle (`PIPER_MODEL`).
La prononciation des mots arabes est réglée par le dictionnaire `OV` (notation phonétique) ; les enregistrements humains du même nom
(`<clé>.mp3`) peuvent remplacer n'importe quel fichier.

## Avec un service de voix IA (ElevenLabs, OpenAI…)

`gen_cloud.py` appelle le service avec **ta** clé API, depuis ton ordinateur, puis écrit les mêmes fichiers `audio/kids/*.mp3`.
La clé n'est jamais envoyée au site ni à GitHub. Les voix sont générées une fois, puis servies comme de simples fichiers (rapide, gratuit à l'usage, sans bug réseau).
