/* Animations : gains d'XP, étincelles, montée de rang, compteurs, entrée en douceur des cartes et barres qui se remplissent. */
const FX = (() => {
  const still = () => matchMedia("(prefers-reduced-motion:reduce)").matches;
  const mk = (cls, html, css) => { const d = document.createElement("div"); d.className = cls; if (html) d.innerHTML = html; if (css) Object.assign(d.style, css); document.body.appendChild(d); return d; };
  /* « +10 XP » qui monte et s'efface, puis la pastille d'XP du haut qui rebondit */
  function gain(text, el) {
    if (still()) return; const r = el ? el.getBoundingClientRect() : { left: innerWidth / 2 - 40, top: innerHeight * 0.45, width: 80, height: 0 };
    const d = mk("fxgain", "💎 " + text, { left: r.left + r.width / 2 + "px", top: r.top + "px" }); setTimeout(() => d.remove(), 1500);
    const chip = document.querySelector(".tchip.gem"); if (chip) { chip.classList.remove("bump"); void chip.offsetWidth; chip.classList.add("bump"); }
  }
  /* Étincelles autour d'un élément (bonne réponse) */
  function burst(el, n = 14) {
    if (still() || !el) return; const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, cols = ["#f4b836", "#27b77c", "#ffd876", "#ffffff"];
    for (let i = 0; i < n; i++) { const a = (i / n) * 6.283 + Math.random() * 0.4, dist = 50 + Math.random() * 60, s = mk("fxstar", "✦", { left: cx + "px", top: cy + "px", color: cols[i % cols.length], fontSize: 12 + Math.random() * 14 + "px" });
      s.style.setProperty("--dx", Math.cos(a) * dist + "px"); s.style.setProperty("--dy", Math.sin(a) * dist + "px"); setTimeout(() => s.remove(), 900); }
  }
  /* Nouveau rang : plein écran, rayons qui tournent, Sirâj qui saute, chiffre qui apparaît */
  function rankUp(r) {
    if (!r) return; const o = mk("fxrank", `<div class="rays"></div><div class="box"><div class="duo">${siraj3d("proud", 130)}${siraj3d("happy", 90, "float", "gem")}</div><div class="small">Nouveau rang</div><div class="big">${r.n}</div><h2>${r.title}</h2><button class="btn gold" id="fxok">Continuer</button></div>`);
    H3D.scan(o); SND.win(); confetti(); const close = () => { o.classList.add("out"); setTimeout(() => o.remove(), 350); }; o.querySelector("#fxok").onclick = close; setTimeout(close, 6000);
  }
  /* Compteur qui défile jusqu'à la valeur */
  function count(el, to, suffix = "") { if (!el) return; if (still()) { el.textContent = to + suffix; return; } const t0 = performance.now(), d = 800; const f = t => { const k = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e) + suffix; if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }
  /* À chaque écran : cartes qui entrent l'une après l'autre, barres qui se remplissent depuis zéro */
  function enter(root) {
    if (still() || !root) return;
    root.querySelectorAll(".card, .stat, .tile, .stage, .chcard, .res").forEach((c, i) => { c.style.animationDelay = Math.min(i, 10) * 45 + "ms"; c.classList.add("rise"); });
    root.querySelectorAll(".bar i").forEach(b => { const w = b.style.width; b.style.width = "0"; requestAnimationFrame(() => requestAnimationFrame(() => { b.style.width = w; })); });
  }
  /* Inclinaison 3D des grandes cartes qui suit le doigt ou la souris */
  addEventListener("pointermove", e => { const c = e.target.closest && e.target.closest(".hero,.rkc,.card.next"); document.querySelectorAll(".tilt3d").forEach(x => { if (x !== c) { x.style.setProperty("--rx", "0deg"); x.style.setProperty("--ry", "0deg"); } });
    if (!c || still()) return; c.classList.add("tilt3d"); const b = c.getBoundingClientRect(); c.style.setProperty("--ry", ((e.clientX - b.left) / b.width - .5) * 8 + "deg"); c.style.setProperty("--rx", -((e.clientY - b.top) / b.height - .5) * 8 + "deg"); }, { passive: true });
  return { gain, burst, rankUp, count, enter };
})();
