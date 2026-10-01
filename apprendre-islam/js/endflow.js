/* Fin de séance : félicitations avec 3 cartes (XP, précision, temps) → allumage de la série (glisser vers le haut) → compteur de jours.
   Chaque écran est plein écran ; le dernier écran révèle le détail du résultat déjà affiché dessous. */
const ENDF = (() => {
  const still = () => matchMedia("(prefers-reduced-motion:reduce)").matches;
  let cur = null;
  const show = (cls, html) => { const old = cur; const d = document.createElement("div"); d.className = "endscr " + cls; d.innerHTML = html; document.body.appendChild(d); cur = d; if (old) { old.classList.add("out"); setTimeout(() => old.remove(), 300); } return d; };
  const hide = () => { if (!cur) return; const o = cur; cur = null; o.classList.add("out"); setTimeout(() => o.remove(), 300); };
  const fmt = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  const count = (el, to, suf = "") => FX.count(el, to, suf);
  const streakMsg = n => n >= 100 ? "Cent jours de suite. Quelle constance !" : n >= 30 ? "Un mois entier ! Ta régularité est belle à voir." : n >= 14 ? "Deux semaines de suite. Continue, un pas après l'autre." : n >= 7 ? "Une semaine complète ! Que Dieu te facilite la suite." : n >= 2 ? "Tu reviens chaque jour, bismillah. Continue comme ça !" : "Un premier pas ! Mieux vaut un peu chaque jour qu'un grand effort rare.";
  const flame = `<svg viewBox="0 0 120 150" class="flm"><defs><linearGradient id="fg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ff7a18"/><stop offset=".6" stop-color="#ffb02e"/><stop offset="1" stop-color="#ffe27a"/></linearGradient></defs><path class="fb" d="M60 6c6 22 34 34 40 66 5 28-12 70-40 70S12 112 18 80c3-18 14-22 18-40 10 8 14 14 16 22 4-20 2-40 8-56z"/><path class="fi" d="M60 70c4 14 22 22 22 44 0 16-10 26-22 26s-22-10-22-26c0-14 8-18 12-30 4 6 6 10 8 14 2-10 0-20 2-28z"/><circle class="fc" cx="60" cy="112" r="10"/></svg>`;

  function run(o) { // {xp, score, secs, up, streakNew, streak, onDone}
    const great = o.score >= 0.8, perfect = o.score === 1, pc = Math.round(o.score * 100);
    const title = perfect ? "Parfait, machallah !" : great ? "Bravo !" : o.score >= 0.6 ? "Bien joué !" : "Courage !";
    const sub = perfect ? "Aucune erreur. Tu as tout juste." : great ? "Tu progresses vite." : o.score >= 0.6 ? "Continue comme ça." : "Les questions ratées reviendront en révision.";
    const A = show("light", `<div class="eh">${siraj3d(great ? "proud" : "happy", 190)}</div><h1 class="et">${title}</h1><p class="es">${sub}</p>
      <div class="stats3"><div class="sc gold" style="--d:.15s"><div class="sh">XP GAGNÉS</div><div class="sb">${ico("bolt", 26)}<span id="e1">0</span></div></div>
      <div class="sc green" style="--d:.35s"><div class="sh">${perfect ? "INCROYABLE" : "PRÉCISION"}</div><div class="sb">${ico("target", 26)}<span id="e2">0%</span></div></div>
      <div class="sc blue" style="--d:.55s"><div class="sh">TEMPS</div><div class="sb">${ico("timer", 26)}<span id="e3">0:00</span></div></div></div>
      <div class="ebar"><button class="sharebtn" id="esh" aria-label="Partager">${ico("share", 22)}</button><button class="btn" id="eok">${o.xp ? "Récupérer mes XP" : "Continuer"}</button></div>`);
    if (great) setTimeout(confetti, 200); SND.win();
    [150, 350, 550].forEach(t => setTimeout(SND.pop, t + 250));
    setTimeout(() => { count(A.querySelector("#e1"), o.xp); count(A.querySelector("#e2"), pc, "%"); const el = A.querySelector("#e3"), t0 = performance.now(); const f = t => { const k = Math.min(1, (t - t0) / 900); el.textContent = fmt(Math.round(o.secs * k)); if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }, 500);
    A.querySelector("#esh").onclick = () => { const txt = `J'ai gagné ${o.xp} XP sur Sirat (${pc} % de réussite) !`; if (navigator.share) navigator.share({ text: txt, url: location.origin }).catch(() => {}); else try { navigator.clipboard.writeText(txt + " " + location.origin).then(() => toast("Copié")); } catch { toast("Copie impossible"); } };
    A.querySelector("#eok").onclick = () => { if (o.xp) { SND.xp(); FX.gain("+" + o.xp + " XP"); } setTimeout(() => (o.streakNew ? streak() : done()), o.xp ? 650 : 0); };

    function streak() {
      const B = show("dark", `<div class="flwrap" id="flw"><div class="glow"></div>${flame}</div><p class="et2">Fais glisser vers le haut pour allumer ta série !</p><button class="btn gold" id="lit">Allumer</button>`);
      const w = B.querySelector("#flw"); let y0 = null, dy = 0, lit = false;
      const ignite = () => { if (lit) return; lit = true; B.classList.add("lit"); w.style.transform = ""; SND.ignite(); try { navigator.vibrate && navigator.vibrate([30, 40, 60]); } catch {}
        if (!still()) for (let i = 0; i < 16; i++) { const r = w.getBoundingClientRect(), a = Math.random() * 6.28, d = 80 + Math.random() * 120, s = document.createElement("i"); s.className = "fxstar"; s.textContent = "✦"; s.style.cssText = `left:${r.left + r.width / 2}px;top:${r.top + r.height / 2}px;color:${["#ffb02e", "#ffe27a", "#ff7a18"][i % 3]};font-size:${12 + Math.random() * 16}px;z-index:90`; s.style.setProperty("--dx", Math.cos(a) * d + "px"); s.style.setProperty("--dy", Math.sin(a) * d - 40 + "px"); document.body.appendChild(s); setTimeout(() => s.remove(), 900); }
        setTimeout(days, 1300); };
      B.addEventListener("pointerdown", e => { y0 = e.clientY; }); B.addEventListener("pointermove", e => { if (y0 === null || lit) return; dy = Math.min(0, e.clientY - y0); w.style.transform = `translateY(${dy * 0.6}px) scale(${1 + Math.min(.25, -dy / 500)})`; if (dy < -90) ignite(); });
      B.addEventListener("pointerup", () => { y0 = null; if (!lit) { dy = 0; w.style.transform = ""; } }); B.querySelector("#lit").onclick = ignite;
    }
    function days() {
      const n = o.streak, wk = E.weekLog();
      const C = show("light", `<div class="bub" id="bt"></div><div class="eh">${siraj3d("happy", 150)}</div><div class="daysn"><span id="dn">${Math.max(0, n - 1)}</span></div><div class="daysl">${n > 1 ? "jours" : "jour"} !</div>
        <div class="week wk2">${wk.map(d => `<div class="wd ${d.active ? "on" : ""} ${d.today ? "today" : ""}"><i>${d.active ? ico("flame", 16) : ""}</i>${d.letter}</div>`).join("")}</div><div class="ebar"><button class="btn" id="eok2">Continuer</button></div>`);
      SND.xp(); setTimeout(() => count(C.querySelector("#dn"), n), 350);
      const msg = streakMsg(n), bt = C.querySelector("#bt"); let i = 0; const typ = () => { bt.textContent = msg.slice(0, ++i); if (i < msg.length) setTimeout(typ, 28); }; setTimeout(typ, 300);
      C.querySelector("#eok2").onclick = done;
    }
    function done() { hide(); if (o.up) setTimeout(() => FX.rankUp(o.up), 350); if (o.onDone) o.onDone(); }
  }
  return { run };
})();
