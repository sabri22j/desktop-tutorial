import re,json,sys,os,numpy as np,lameenc
shard,nsh=int(sys.argv[1]),int(sys.argv[2]);OUT=sys.argv[3] if len(sys.argv)>3 else "kids-out"
import numpy as np
from piper import PiperVoice
from piper.config import SynthesisConfig
MODEL = os.environ.get("PIPER_MODEL", "vits-piper-fr_FR-tom-medium/fr_FR-tom-medium")  # modèle Piper (sherpa-onnx tts-models)
pv = PiperVoice.load(MODEL + ".onnx", config_path=MODEL + ".onnx.json")
OUT = OUT
from sjfx import fx
OV={"allah":"ˈalla","allahou":"ˈallau","allâh":"ˈalla","muhammad":"muˈammad","muhammadan":"muˈammadan","ash-hadu":"aʃˈadu","ar-rahman":"arʁaˈman","ar-rahim":"arʁaˈim","al-khaliq":"alχaˈlik","ar-razzaq":"arʁazˈzak","al-ghaffar":"alɡaˈfaʁ","as-sami'":"assaˈmi","al-basir":"albaˈsiʁ","al-'alim":"alaˈlim","as-salam":"assaˈlam","al-amin":"alaˈmin","as-siddiq":"assidˈdik","al-farouq":"alfaˈʁuk","al-fatiha":"alfˈatia","an-nas":"anˈnas","al-ikhlas":"alikˈlas","al-falaq":"alfaˈlak","al-kawthar":"alˈkautaʁ","al-baqara":"albaˈkaʁa","al-aqsa":"alˈaksa","jibril":"dʒibˈʁil","mikaïl":"mikaˈil","israfil":"isʁafˈil","iblis":"ibˈlis","bismillah":"bismilˈla","bismillahi":"bismilˈlai","alhamdoulillah":"alamdulilˈla","soubhanallah":"subanalˈla","astaghfirullah":"astaɡfiʁulˈla","machaa":"maʃˈa","inchaa":"inʃˈa","akbar":"ˈakbaʁ","ismaïl":"ismaˈil","aïd":"ˈaid","kaaba":"kˈaaba","zamzam":"zamzˈam","qibla":"kˈibla","hira":"ˈiʁa","thawr":"tˈauʁ","quba":"kˈuba","hadj":"ˈadʒ","chahada":"ʃahˈada"}
KEYS="|".join(re.escape(k) for k in sorted(OV,key=len,reverse=True))
def phl(text):
    text=text.replace("’","'").replace("ﷺ",", paix sur lui").replace("«","").replace("»","").replace("Dhouhr","Zouhr").replace("Fajr","Fadjr")
    parts=re.split("(?i)(?<![\\w'-])("+KEYS+")(?![\\w'-])",text);out=[]
    for p in parts:
        if not p.strip():continue
        k=p.lower()
        if k in OV:out+=list(OV[k])+[" "]
        else:
            for sent in pv.phonemize(p.strip()):out+=sent+[" "]
    return out
def synth(text):
    ids=pv.phonemes_to_ids(phl(text));a=np.asarray(pv.phoneme_ids_to_audio(ids,SynthesisConfig(speaker_id=0,length_scale=0.92)),dtype=np.float32).reshape(-1)
    if np.abs(a).max()>2:a=a/32768.0
    o,fs=fx(a,pv.config.sample_rate,gain=1.7,shift=7,formant=1.18)
    rms=np.sqrt(np.mean(o**2))+1e-9;o=o*(0.1/rms);pk=np.abs(o).max()
    if pk>0.97:o=o*(0.97/pk)
    return o,fs
T=json.load(open("kidtexts.json"));os.makedirs(OUT,exist_ok=True)
for n,(key,txt) in enumerate(T.items()):
    if n%nsh!=shard or os.path.exists(f"{OUT}/{key}.mp3"):continue
    o,fs=synth(txt);pcm=(np.clip(o,-1,1)*32767).astype(np.int16)
    e=lameenc.Encoder();e.set_bit_rate(40);e.set_in_sample_rate(fs);e.set_channels(1);e.set_quality(2)
    open(f"{OUT}/{key}.mp3","wb").write(bytes(e.encode(pcm.tobytes()))+bytes(e.flush()));print(key,round(len(o)/fs,1),flush=True)
