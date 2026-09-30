/* Sons générés par le navigateur (Web Audio) : aucune donnée ni fichier externe.
   Musique de fond : nappe douce sur le mode Rast (sans percussion). Sons des réponses : carillon (juste) / note grave douce (faux). */
const SND = (() => {
  let ctx, master, music, wet, started = false, timer = null;
  const cfg = () => E.S.settings;
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      ctx = new AC(); master = ctx.createGain(); master.connect(ctx.destination);
      music = ctx.createGain(); music.gain.value = 0; wet = ctx.createGain(); wet.gain.value = .7;
      const conv = ctx.createConvolver(), len = ctx.sampleRate * 3, buf = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5); }
      conv.buffer = buf; music.connect(master); music.connect(conv); conv.connect(wet); wet.connect(master);
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  }
  const vol = () => Math.max(0, Math.min(1, cfg().vol)) * 0.5;
  function tone(freq, t0, dur, type, gain, dest, attack = 0.01, rel) {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + (rel || 0));
    o.connect(g); g.connect(dest || master); o.start(t0); o.stop(t0 + dur + (rel || 0) + 0.05); return g;
  }
  /* Musique */
  const RAST = [293.66, 329.63, 359.5, 392, 440, 493.88, 538.6, 587.33]; // ré mi fa¼♯ sol la si do¼♯ ré
  function startMusic() {
    if (!ensure() || started) return; started = true;
    music.gain.cancelScheduledValues(ctx.currentTime); music.gain.setTargetAtTime(vol(), ctx.currentTime, 1.5);
    const t = ctx.currentTime;
    [[73.42, .5], [110, .35], [146.83, .18]].forEach(([f, g], i) => { // bourdon ré-la-ré
      const o = ctx.createOscillator(), gn = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain();
      o.type = "sine"; o.frequency.value = f * (1 + i * 0.0008); gn.gain.value = g * 0.22; lfo.frequency.value = 0.07 + i * 0.03; lg.gain.value = g * 0.1;
      lfo.connect(lg); lg.connect(gn.gain); o.connect(gn); gn.connect(music); o.start(t); lfo.start(t); (startMusic.nodes = startMusic.nodes || []).push(o, lfo);
    });
    let i = 3;
    const note = () => {
      if (!started) return; const now = ctx.currentTime; i = Math.max(0, Math.min(7, i + [-2, -1, -1, 0, 1, 1, 2][Math.floor(Math.random() * 7)]));
      tone(RAST[i], now, 3.2, "sine", .09, music, 0.9, 2.5);
      if (Math.random() < .35) tone(RAST[i] / 2, now + .1, 3.5, "triangle", .035, music, 1.2, 2.5);
      timer = setTimeout(note, 3500 + Math.random() * 3500);
    };
    timer = setTimeout(note, 1500);
  }
  function stopMusic() {
    if (!started) return; started = false; clearTimeout(timer);
    music.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
    const n = startMusic.nodes || []; startMusic.nodes = []; setTimeout(() => n.forEach(o => { try { o.stop(); } catch {} }), 1500);
  }
  function apply() { if (cfg().music) startMusic(); else stopMusic(); if (started) music.gain.setTargetAtTime(vol(), ctx.currentTime, 0.2); }
  /* Effets */
  function correct() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime; tone(659.25, t, .35, "sine", .22); tone(987.77, t + .12, .55, "sine", .2); tone(1318.5, t + .12, .4, "sine", .05); }
  function wrong() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime; tone(233.08, t, .28, "triangle", .2); tone(174.61, t + .18, .45, "triangle", .2); }
  function win() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime; [523.25, 659.25, 783.99, 1046.5].forEach((f, k) => tone(f, t + k * .12, .5, "sine", .18)); }
  /* Démarrage après le premier geste (exigé par les navigateurs) */
  function unlock() { if (cfg().music) apply(); else ensure(); }
  document.addEventListener("pointerdown", function once() { unlock(); document.removeEventListener("pointerdown", once); }, { passive: true });
  document.addEventListener("visibilitychange", () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else ctx.resume(); });
  return { apply, correct, wrong, win, unlock };
})();
