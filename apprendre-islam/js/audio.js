/* Sons générés par le navigateur (Web Audio). AUCUN instrument ni mélodie, et pas de musique de fond :
   uniquement de petits bruits d'interaction (« tic » des boutons), des gouttes d'eau (juste) et un bruit sourd (faux). */
const SND = (() => {
  let ctx, master;
  const noiseBufs = {};
  const cfg = () => E.S.settings;
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      ctx = new AC(); master = ctx.createGain(); const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 10; comp.attack.value = 0.003; comp.release.value = 0.2; master.connect(comp); comp.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  }
  function noiseBuf(brown) {
    const k = brown ? "b" : "w"; if (noiseBufs[k]) return noiseBufs[k];
    const len = ctx.sampleRate * 4, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0); let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w; }
    return (noiseBufs[k] = buf);
  }
  function filt(type, f, q) { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; if (q) b.Q.value = q; return b; }
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
  /* Bruits : boutons, bonne / mauvaise réponse, victoire */
  const fxGain = () => 1.1 + cfg().vol * 0.6;
  const buzz = p => { try { if (cfg().sfx && navigator.vibrate) navigator.vibrate(p); } catch {} };
  /* Un bruit pour chaque geste. Les petits haut-parleurs de téléphone ne rendent pas les graves : les sons « faux » restent dans le médium. */
  function click() { if (!cfg().click || !ensure()) return; const t = ctx.currentTime, k = fxGain(); burst(t, 0.035, "bandpass", 2400, 1.2, 0.7 * k); burst(t, 0.06, "lowpass", 600, 0.7, 0.45 * k); }
  function select() { if (!cfg().click || !ensure()) return; const t = ctx.currentTime, k = fxGain(); drop(t, 700, 1100, 0.09, 0.6 * k); burst(t, 0.03, "bandpass", 3000, 1.5, 0.4 * k); }
  function nav() { if (!cfg().click || !ensure()) return; const t = ctx.currentTime, k = fxGain(); burst(t, 0.16, "bandpass", 1200, 0.6, 0.45 * k); drop(t + 0.04, 500, 900, 0.12, 0.35 * k); }
  function flip() { if (!cfg().click || !ensure()) return; const t = ctx.currentTime, k = fxGain(); burst(t, 0.09, "bandpass", 1800, 0.8, 0.6 * k); burst(t + 0.07, 0.05, "bandpass", 2800, 1.2, 0.45 * k); }
  function pop() { if (!cfg().click || !ensure()) return; const t = ctx.currentTime, k = fxGain(); drop(t, 900, 1500, 0.12, 0.55 * k); }
  function xp() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain(); [0, 0.07, 0.14].forEach((d, i) => drop(t + d, 1100 + i * 250, 2200 + i * 400, 0.14, 0.5 * k)); }
  function correct() { buzz(30); if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain(); drop(t, 600, 1300, 0.2, 1.1 * k); drop(t + 0.1, 800, 1700, 0.22, 1 * k); drop(t + 0.21, 1000, 2100, 0.3, 0.95 * k); }
  function wrong() { buzz([70, 50, 70]); if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain();
    [0, 0.17].forEach(d => { burst(t + d, 0.16, "bandpass", 420, 0.9, 1.8 * k); drop(t + d, 330, 150, 0.2, 1.3 * k); drop(t + d, 660, 300, 0.12, 0.5 * k); }); }
  /* Allumage de la série : souffle qui monte, gouttes qui s'élèvent, petits crépitements */
  function ignite() { buzz([30, 40, 60]); if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain();
    const s = ctx.createBufferSource(); s.buffer = noiseBuf(false); const f = filt("bandpass", 300, 1.2), g = ctx.createGain(); f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(3200, t + 0.7);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.9 * k, t + 0.35); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9); s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t + 1);
    [0.3, 0.42, 0.54, 0.66].forEach((d, i) => drop(t + d, 700 + i * 200, 1500 + i * 400, 0.2, 0.7 * k)); for (let i = 0; i < 6; i++) burst(t + 0.5 + Math.random() * 0.6, 0.03, "highpass", 3500, 1, 0.5 * k); }
  function win() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime, k = fxGain(); [0, 0.1, 0.2, 0.32, 0.46].forEach((d, i) => drop(t + d, 500 + i * 120, 1100 + i * 260, 0.22, 0.9 * k)); }
  /* Démarrage après le premier geste (exigé par les navigateurs) */
  function unlock() { ensure(); }
  document.addEventListener("pointerdown", function once() { unlock(); document.removeEventListener("pointerdown", once); }, { passive: true });
  document.addEventListener("visibilitychange", () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else ctx.resume(); });
  return { correct, wrong, win, ignite, click, select, nav, flip, pop, xp, unlock };
})();
