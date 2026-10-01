/* Sons générés par le navigateur (Web Audio). AUCUN instrument ni mélodie :
   - ambiances : sons de la nature (vent, eau, pluie, vagues, oiseaux) faits de bruit filtré ;
   - réponses : gouttes d'eau (juste) et bruit sourd (faux) ;
   - boutons : petit « tic » discret. */
const SND = (() => {
  let ctx, master, music, wet, started = false, timer = null, bus = null, nodes = [];
  const noiseBufs = {};
  const cfg = () => E.S.settings;
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      ctx = new AC(); master = ctx.createGain(); master.connect(ctx.destination);
      music = ctx.createGain(); music.gain.value = 0; wet = ctx.createGain(); wet.gain.value = .5;
      const conv = ctx.createConvolver(), len = ctx.sampleRate * 2, buf = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
      conv.buffer = buf; music.connect(master); music.connect(conv); conv.connect(wet); wet.connect(master);
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  }
  const vol = () => Math.max(0, Math.min(1, cfg().vol)) * 0.5;
  function noiseBuf(brown) {
    const k = brown ? "b" : "w"; if (noiseBufs[k]) return noiseBufs[k];
    const len = ctx.sampleRate * 4, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0); let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w; }
    return (noiseBufs[k] = buf);
  }
  function noiseSrc(brown) { const s = ctx.createBufferSource(); s.buffer = noiseBuf(brown); s.loop = true; s.start(); nodes.push(s); return s; }
  function lfo(rate, depth, param) { const l = ctx.createOscillator(), g = ctx.createGain(); l.frequency.value = rate; g.gain.value = depth; l.connect(g); g.connect(param); l.start(); nodes.push(l); }
  function filt(type, f, q) { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; if (q) b.Q.value = q; return b; }
  function chain(src, filters, gain, dest) { let n = src; filters.forEach(f => { n.connect(f); n = f; }); const g = ctx.createGain(); g.gain.value = gain; n.connect(g); g.connect(dest); return g; }
  /* Brève explosion de bruit filtré (bases des bruits de boutons et de réponses) */
  function burst(t0, dur, type, f, q, gain, dest) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf(false); const fl = filt(type, f, q), g = ctx.createGain();
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(fl); fl.connect(g); g.connect(dest || master); s.start(t0, Math.random() * 2); s.stop(t0 + dur + 0.05);
  }
  /* Goutte d'eau : glissando très bref, pas une note */
  function drop(t0, f0, f1, dur, gain, dest) {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine"; o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(f1, t0 + dur * 0.6);
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(dest || master); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  /* Ambiances naturelles */
  const wind = () => { const f = filt("lowpass", 500); const g = chain(noiseSrc(true), [f], 0.6, bus); lfo(0.08, 260, f.frequency); lfo(0.05, 0.2, g.gain); };
  const stream = (gain = 0.05) => { const f = filt("bandpass", 1800, 0.8); const g = chain(noiseSrc(false), [f], gain, bus); lfo(0.7, 600, f.frequency); lfo(0.23, gain * 0.4, g.gain); };
  const styles = {
    nature() { wind(); stream(0.05); },
    pluie() { const g = chain(noiseSrc(false), [filt("highpass", 1200), filt("lowpass", 7500)], 0.11, bus); lfo(0.12, 0.03, g.gain); chain(noiseSrc(true), [filt("lowpass", 250)], 0.35, bus);
      const tick = () => { if (!bus) return; burst(ctx.currentTime, 0.05, "bandpass", 2500 + Math.random() * 3000, 2, 0.05 + Math.random() * 0.05, bus); timer = setTimeout(tick, 80 + Math.random() * 220); }; tick(); },
    mer() { const f = filt("lowpass", 600), g = chain(noiseSrc(true), [f], 0.5, bus); lfo(0.11, 0.35, g.gain); lfo(0.11, 350, f.frequency);
      const h = chain(noiseSrc(false), [filt("highpass", 2500)], 0.03, bus); lfo(0.11, 0.03, h.gain); },
    oiseaux() { stream(0.06); wind();
      const chirp = () => { if (!bus) return; const now = ctx.currentTime, base = 2600 + Math.random() * 1800, n = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < n; i++) { const t = now + i * 0.11, o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine"; o.frequency.setValueAtTime(base, t); o.frequency.exponentialRampToValueAtTime(base * (1.25 + Math.random() * 0.3), t + 0.07);
          g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.03, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09); o.connect(g); g.connect(bus); o.start(t); o.stop(t + 0.12); }
        timer = setTimeout(chirp, 2500 + Math.random() * 5000); }; timer = setTimeout(chirp, 1500); },
  };
  function startMusic() {
    if (!ensure() || started) return; started = true; nodes = [];
    bus = ctx.createGain(); bus.gain.value = 0; bus.connect(music); bus.gain.setTargetAtTime(1, ctx.currentTime, 1.5);
    music.gain.cancelScheduledValues(ctx.currentTime); music.gain.setTargetAtTime(vol(), ctx.currentTime, 0.3);
    (styles[cfg().style] || styles.nature)();
  }
  function stopMusic() {
    if (!started) return; started = false; clearTimeout(timer);
    const b = bus, n = nodes; bus = null; nodes = []; b.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
    setTimeout(() => { n.forEach(o => { try { o.stop(); } catch {} }); try { b.disconnect(); } catch {} }, 2500);
  }
  function apply() { if (cfg().music) startMusic(); else stopMusic(); if (started) music.gain.setTargetAtTime(vol(), ctx.currentTime, 0.2); }
  function restart() { if (started) stopMusic(); if (cfg().music) { ensure(); setTimeout(startMusic, 50); } }
  /* Bruits : boutons, bonne / mauvaise réponse, victoire */
  const fxGain = () => 0.4 + cfg().vol * 0.6;
  function click() { if (!cfg().click || !ensure()) return; const t = ctx.currentTime, k = fxGain(); burst(t, 0.03, "bandpass", 2600, 1.2, 0.4 * k); burst(t, 0.05, "lowpass", 400, 0.7, 0.22 * k); }
  const buzz = p => { try { if (cfg().sfx && navigator.vibrate) navigator.vibrate(p); } catch {} };
  /* Juste : trois gouttes d'eau claires qui montent. Faux : deux coups sourds et graves. Plus forts qu'avant, pour s'entendre sur un téléphone. */
  function correct() { buzz(30); if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain(); drop(t, 600, 1300, 0.18, 0.75 * k); drop(t + 0.1, 800, 1700, 0.2, 0.7 * k); drop(t + 0.21, 1000, 2100, 0.28, 0.65 * k); }
  function wrong() { buzz([70, 50, 70]); if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain(); burst(t, 0.2, "lowpass", 220, 0.7, 1.1 * k); drop(t, 190, 60, 0.28, 0.9 * k); burst(t + 0.16, 0.2, "lowpass", 180, 0.7, 1 * k); drop(t + 0.16, 150, 50, 0.3, 0.8 * k); }
  function win() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain(); [0, 0.1, 0.2, 0.32].forEach((d, i) => drop(t + d, 500 + i * 120, 1100 + i * 260, 0.2, 0.26 * k)); }
  /* Démarrage après le premier geste (exigé par les navigateurs) */
  function unlock() { if (cfg().music) apply(); else ensure(); }
  document.addEventListener("pointerdown", function once() { unlock(); document.removeEventListener("pointerdown", once); }, { passive: true });
  document.addEventListener("visibilitychange", () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else ctx.resume(); });
  return { apply, restart, correct, wrong, win, click, unlock };
})();
