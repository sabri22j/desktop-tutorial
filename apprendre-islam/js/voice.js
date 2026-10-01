/* Lecture des leçons.
   1) Voix humaine enregistrée si le fichier existe : audio/<chapitre>-<numéro de leçon>.mp3 (ou .m4a).
   2) Sinon synthèse vocale de l'appareil, en choisissant la voix la plus naturelle et en lisant phrase par phrase (plus humain). */
const VOICE = (() => {
  let audio = null, token = 0, onState = () => {}, onFail = () => {}; const recorded = {};
  const synth = window.speechSynthesis;
  const voices = () => synth ? synth.getVoices() : [];
  function score(v) {
    let s = 0; const n = v.name || "";
    if (/^fr/i.test(v.lang)) s += 20; if (/^fr[-_]FR/i.test(v.lang)) s += 2;
    if (/natural|neural|naturelle/i.test(n)) s += 14;
    if (/premium|enhanced|améliorée|siri/i.test(n)) s += 10;
    if (/google/i.test(n)) s += 6;
    if (/online|microsoft/i.test(n)) s += 4;
    if (/compact|espeak|eloquence|novelty/i.test(n)) s -= 12;
    if (v.localService === false) s += 1;
    return s;
  }
  const best = () => voices().filter(v => /^fr/i.test(v.lang)).sort((a, b) => score(b) - score(a))[0] || null;
  function pick() { const id = E.S.settings.voice, all = voices(); return all.find(v => v.voiceURI === id) || best(); }
  const isRobotic = v => !v || /compact|espeak|eloquence/i.test(v.name || "") || score(v) < 22;
  function chunks(text) { return (text.match(/[^.!?;:]+[.!?;:]?/g) || [text]).map(s => s.trim()).filter(Boolean); }
  function speakTTS(text) {
    if (!synth) return false;
    try {
      synth.cancel(); const my = ++token, v = pick(), s = E.S.settings, parts = chunks(text);
      parts.forEach((p, i) => { // toutes les phrases sont mises en file immédiatement : indispensable sur téléphone (geste de l'utilisateur)
        const u = new SpeechSynthesisUtterance(p); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "fr-FR"; u.rate = s.rate; u.pitch = s.pitch;
        if (i === parts.length - 1) u.onend = () => { if (my === token) onState("idle"); }; u.onerror = () => { if (my === token) onState("idle"); };
        synth.speak(u);
      });
      onState("playing");
      setTimeout(() => { if (my === token && !synth.speaking && !synth.pending) { onState("idle"); onFail(); } }, 1800);
      return true;
    } catch { return false; }
  }
  function stop() { token++; if (audio) { try { audio.pause(); } catch {} audio = null; } if (synth) { try { synth.cancel(); } catch {} } onState("idle"); }
  /* Joue l'enregistrement s'il est connu, sinon la synthèse (immédiatement, dans le geste de l'utilisateur). */
  function play(id, idx, text) {
    stop(); const my = token, key = `${id}-${idx}`;
    if (!recorded[key]) { if (!speakTTS(text)) { onState("idle"); onFail(); } return; }
    let tried = 0, done = false;
    const fallback = () => { if (done || my !== token) return; done = true; if (!speakTTS(text)) { onState("idle"); onFail(); } };
    const tryNext = () => {
      const ext = ["mp3", "m4a"][tried++]; if (!ext) return fallback();
      let adv = false; const again = () => { if (adv || done) return; adv = true; tryNext(); };
      const a = new Audio(`audio/${key}.${ext}`); audio = a; a.onerror = again; a.onended = () => onState("idle");
      a.play().then(() => { if (my === token) { done = true; onState("playing", true); } }).catch(again);
    };
    onState("loading"); tryNext();
  }
  /* Détecte si un enregistrement existe (pour l'afficher sur la page de leçon). */
  function probe(id, idx, cb) { const key = `${id}-${idx}`; try { const a = new Audio(); a.preload = "metadata"; a.onloadedmetadata = () => { recorded[key] = true; cb(true); }; a.onerror = () => { recorded[key] = false; cb(false); }; a.src = `audio/${key}.mp3`; } catch { cb(false); } }
  return { play, stop, probe, pick, best, isRobotic, voices, set onState(f) { onState = f; }, set onFail(f) { onFail = f; }, get synth() { return synth; } };
})();
