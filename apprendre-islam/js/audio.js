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
    const o = ctx.createOscillator(), g = ctx.createGain(), len = dur + (rel || 0); o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + attack); g.gain.setTargetAtTime(0, t0 + attack, len / 4);
    o.connect(g); g.connect(dest || master); o.start(t0); o.stop(t0 + attack + len * 1.6); return g;
  }
  /* Musique : trois ambiances, toutes sans percussion */
  const RAST = [293.66, 329.63, 359.5, 392, 440, 493.88, 538.6, 587.33]; // ré mi fa¼♯ sol la si do¼♯ ré
  const PENTA = [293.66, 329.63, 369.99, 440, 493.88, 587.33, 659.25, 739.99];
  let bus = null, nodes = [];
  function noiseSrc(brown) {
    const len = ctx.sampleRate * 4, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0); let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w; }
    const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; nodes.push(s); return s;
  }
  function osc(type, f, dest, g) { const o = ctx.createOscillator(), gn = ctx.createGain(); o.type = type; o.frequency.value = f; gn.gain.value = g; o.connect(gn); gn.connect(dest); o.start(); nodes.push(o); return gn; }
  function lfo(rate, depth, param) { const l = ctx.createOscillator(), g = ctx.createGain(); l.frequency.value = rate; g.gain.value = depth; l.connect(g); g.connect(param); l.start(); nodes.push(l); }
  function pad(freqs, g) { freqs.forEach((f, i) => { const gn = osc("sine", f * (1 + i * 0.0007), bus, g); lfo(0.05 + i * 0.03, g * 0.4, gn.gain); }); }
  const styles = {
    voix() { // chœur a cappella : voix tenues, mode Nahawand (ré mi fa sol la si♭ do ré), sans instrument
      const NAH = [146.83, 164.81, 174.61, 196, 220, 233.08, 261.63, 293.66], VOW = { a: [800, 1150], o: [450, 800], u: [325, 700] };
      const voice = (f, t0, dur, g, vow, slideFrom) => {
        const out = ctx.createGain(), [f1, f2] = VOW[vow], vib = ctx.createOscillator(), vg = ctx.createGain();
        out.gain.setValueAtTime(0, t0); out.gain.linearRampToValueAtTime(g, t0 + 0.6); out.gain.setValueAtTime(g, t0 + Math.max(0.7, dur - 0.9)); out.gain.linearRampToValueAtTime(0, t0 + dur + 0.6);
        vib.frequency.value = 5.2; vg.gain.value = f * 0.006; vib.connect(vg);
        [f1, f2].forEach((fc, k) => { const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = fc; bp.Q.value = 4; const fg = ctx.createGain(); fg.gain.value = (k ? 0.5 : 1) * 5; bp.connect(fg); fg.connect(out);
          [-7, 0, 7].forEach(c => { const o = ctx.createOscillator(); o.type = "sawtooth"; o.detune.value = c;
            if (slideFrom) { o.frequency.setValueAtTime(slideFrom, t0); o.frequency.linearRampToValueAtTime(f, t0 + 0.18); } else o.frequency.value = f;
            vg.connect(o.frequency); o.connect(bp); o.start(t0); o.stop(t0 + dur + 0.8); }); });
        vib.start(t0); vib.stop(t0 + dur + 0.8); out.connect(bus);
      };
      const PH = [[[4, 3, 2, 3, 1, 0], [2.2, 1.6, 1.6, 1.8, 2, 4]], [[0, 2, 3, 4, 3, 2, 0], [2, 1.6, 1.6, 2.4, 1.6, 1.8, 4]], [[4, 5, 4, 3, 2, 1, 0], [2.2, 1.6, 1.6, 1.6, 1.6, 2, 4.5]], [[2, 3, 4, 7, 6, 4, 2, 0], [1.8, 1.4, 1.8, 2.6, 1.6, 1.6, 1.8, 4.5]]];
      const drone = (f, g) => voice(f, ctx.currentTime, 600, g, "u");
      drone(73.42, 0.05); drone(110, 0.03);
      const sing = () => { if (!bus) return; const [deg, dur] = PH[Math.floor(Math.random() * PH.length)]; let t = ctx.currentTime + 0.3, prev = null;
        deg.forEach((d, k) => { const f = NAH[d], vow = ["a", "o", "a", "u"][k % 4]; voice(f, t, dur[k], 0.09, vow, prev); voice(f * 1.5, t + 0.25, dur[k] - 0.2, 0.03, "o"); voice(f * 2, t + 0.45, dur[k] - 0.4, 0.02, "u"); prev = f; t += dur[k] - 0.3; });
        timer = setTimeout(sing, (t - ctx.currentTime + 2 + Math.random() * 3) * 1000); };
      sing();
    },
    desert() { // bourdon et mélodie lente (mode Rast)
      pad([73.42, 110, 146.83], 0.1); let i = 3;
      const note = () => { if (!bus) return; const now = ctx.currentTime; i = Math.max(0, Math.min(7, i + [-2, -1, -1, 0, 1, 1, 2][Math.floor(Math.random() * 7)]));
        tone(RAST[i], now, 3.2, "sine", .09, bus, 0.9, 2.5); if (Math.random() < .35) tone(RAST[i] / 2, now + .1, 3.5, "triangle", .035, bus, 1.2, 2.5);
        timer = setTimeout(note, 3500 + Math.random() * 3500); }; timer = setTimeout(note, 1500);
    },
    nature() { // vent doux, ruisseau et nappe chaude
      const wind = noiseSrc(true), wf = ctx.createBiquadFilter(), wg = ctx.createGain(); wf.type = "lowpass"; wf.frequency.value = 500; wg.gain.value = 0.55;
      wind.connect(wf); wf.connect(wg); wg.connect(bus); wind.start(); lfo(0.08, 260, wf.frequency); lfo(0.05, 0.2, wg.gain);
      const wat = noiseSrc(false), bp = ctx.createBiquadFilter(), wag = ctx.createGain(); bp.type = "bandpass"; bp.frequency.value = 1800; bp.Q.value = 0.8; wag.gain.value = 0.05;
      wat.connect(bp); bp.connect(wag); wag.connect(bus); wat.start(); lfo(0.7, 600, bp.frequency); lfo(0.23, 0.02, wag.gain);
      pad([146.83, 220, 369.99], 0.035);
    },
    nuit() { // pincements doux sur gamme pentatonique, nappe grave
      pad([73.42, 110], 0.08); let i = 2;
      const pluck = () => { if (!bus) return; const now = ctx.currentTime; i = Math.max(0, Math.min(7, i + [-2, -1, 0, 1, 2, 3][Math.floor(Math.random() * 6)]));
        tone(PENTA[i], now, 4.5, "sine", .13, bus, 0.01); tone(PENTA[i] * 2, now, 2.2, "sine", .03, bus, 0.01);
        timer = setTimeout(pluck, 1600 + Math.random() * 2600); }; timer = setTimeout(pluck, 800);
    },
  };
  function startMusic() {
    if (!ensure() || started) return; started = true; nodes = [];
    bus = ctx.createGain(); bus.gain.value = 0; bus.connect(music); bus.gain.setTargetAtTime(1, ctx.currentTime, 1.5);
    music.gain.cancelScheduledValues(ctx.currentTime); music.gain.setTargetAtTime(vol(), ctx.currentTime, 0.3);
    (styles[cfg().style] || styles.voix)();
  }
  function stopMusic() {
    if (!started) return; started = false; clearTimeout(timer);
    const b = bus, n = nodes; bus = null; nodes = []; b.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
    setTimeout(() => { n.forEach(o => { try { o.stop(); } catch {} }); try { b.disconnect(); } catch {} }, 2500);
  }
  function restart() { if (started) { stopMusic(); } if (cfg().music) { ensure(); setTimeout(startMusic, 50); } }
  function apply() { if (cfg().music) startMusic(); else stopMusic(); if (started) music.gain.setTargetAtTime(vol(), ctx.currentTime, 0.2); }
  /* Effets */
  function correct() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime; tone(659.25, t, .35, "sine", .22); tone(987.77, t + .12, .55, "sine", .2); tone(1318.5, t + .12, .4, "sine", .05); }
  function wrong() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime; tone(233.08, t, .35, "triangle", .22); tone(174.61, t + .2, .55, "triangle", .22); }
  function win() { if (!cfg().sfx || !ensure()) return; const t = ctx.currentTime; [523.25, 659.25, 783.99, 1046.5].forEach((f, k) => tone(f, t + k * .12, .5, "sine", .18)); }
  /* Démarrage après le premier geste (exigé par les navigateurs) */
  function unlock() { if (cfg().music) apply(); else ensure(); }
  document.addEventListener("pointerdown", function once() { unlock(); document.removeEventListener("pointerdown", once); }, { passive: true });
  document.addEventListener("visibilitychange", () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else ctx.resume(); });
  return { apply, restart, correct, wrong, win, unlock };
})();
