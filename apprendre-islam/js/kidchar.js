/* Sirâj interactif : yeux qui suivent le doigt, clignements, regards, petits sauts, réactions au toucher, bouche qui parle, tenues à débloquer. */
const KC = (() => {
  const ITEMS = [
    { id: "glasses", slot: "face", n: "Lunettes cool", e: "🕶️", stars: 8 },
    { id: "scarf", slot: "neck", n: "Écharpe rouge", e: "🧣", stars: 20 },
    { id: "crown", slot: "head", n: "Couronne dorée", e: "👑", stars: 40 },
    { id: "phones", slot: "head", n: "Casque musique", e: "🎧", stars: 60 },
    { id: "cape", slot: "back", n: "Cape de héros", e: "🦸", stars: 90 },
    { id: "orbit", slot: "fx", n: "Étoiles magiques", e: "🌟", stars: 130 },
  ];
  const SLOTS = ["face", "neck", "head", "back", "fx"];
  const worn = () => { const D = E.S.kids || {}; return D.worn || {}; };
  const owned = id => { const it = ITEMS.find(x => x.id === id); return !!it && ((E.S.kids || {}).stars || 0) >= it.stars; };

  const ACC = {
    glasses: `<g class="a-glasses"><circle cx="80" cy="129" r="17" fill="#18222e" opacity=".92"/><circle cx="120" cy="129" r="17" fill="#18222e" opacity=".92"/><path d="M97 128h6" stroke="#18222e" stroke-width="4" stroke-linecap="round"/><path d="M63 126l-6-3M137 126l6-3" stroke="#18222e" stroke-width="4" stroke-linecap="round"/><path d="M70 121q6-6 14-4" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/><path d="M110 121q6-6 14-4" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/></g>`,
    scarf: `<g class="a-scarf"><path d="M58 184q42 18 84 0l2 14q-44 20-88 0z" fill="#e5584a"/><path d="M72 192v10M88 195v10M104 196v10M120 194v10" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/><path d="M128 194q16 4 12 30l-14 2q4-14-2-30z" fill="#c9443a"/></g>`,
    crown: `<g class="a-crown"><path d="M70 58l4-24 14 14 12-22 12 22 14-14 4 24z" fill="#ffd54a" stroke="#c99a1a" stroke-width="3" stroke-linejoin="round"/><circle cx="74" cy="34" r="4" fill="#e5584a"/><circle cx="100" cy="26" r="4.5" fill="#41c8ff"/><circle cx="126" cy="34" r="4" fill="#e5584a"/><path d="M72 58h56" stroke="#c99a1a" stroke-width="3"/></g>`,
    phones: `<g class="a-phones"><path d="M56 112q-6-58 44-62q50 4 44 62" fill="none" stroke="#2b3547" stroke-width="7" stroke-linecap="round"/><rect x="46" y="98" width="16" height="30" rx="8" fill="#e5584a"/><rect x="138" y="98" width="16" height="30" rx="8" fill="#e5584a"/><rect x="50" y="104" width="6" height="18" rx="3" fill="#ffb3ab"/><rect x="144" y="104" width="6" height="18" rx="3" fill="#ffb3ab"/></g>`,
    cape: `<g class="a-cape"><path d="M60 92q-34 60-26 140q66 22 132 0q8-80-26-140z" fill="#d4393b"/><path d="M60 92q-20 50-20 108q60 20 120 0q0-58-20-108z" fill="#ef5b52" opacity=".55"/></g>`,
    orbit: `<g class="a-orbit"><g class="o1"><path d="M0-12l3.5 8.5 9 .8-6.8 6 2 9-7.7-4.8-7.7 4.8 2-9-6.8-6 9-.8z" fill="#ffd54a" stroke="#c99a1a" stroke-width="1.4"/></g><g class="o2"><path d="M0-9l2.6 6.4 6.8.6-5.1 4.5 1.5 6.8-5.8-3.6-5.8 3.6 1.5-6.8-5.1-4.5 6.8-.6z" fill="#fff3b0"/></g></g>`,
  };

  /* SVG du personnage. mood : happy | think | proud | oops | wow | sleepy */
  function svg(mood = "happy", o = {}) {
    const w = Object.assign({}, worn(), o.worn || {});
    const brow = { think: `<path d="M64 106q16-10 32-2M104 104q16-8 32 2" stroke="#23170a" stroke-width="4.5" fill="none" stroke-linecap="round"/>`, oops: `<path d="M66 116l26-8M134 116l-26-8" stroke="#23170a" stroke-width="4.5" stroke-linecap="round"/>`, wow: `<path d="M66 108q14-9 28-4M106 104q14-5 28 4" stroke="#23170a" stroke-width="4" fill="none" stroke-linecap="round"/>` }[mood] || "";
    const joy = mood === "proud";
    const eyes = joy
      ? `<g class="eyes"><path class="joy" d="M68 132q12-18 24 0M108 132q12-18 24 0" stroke="#23170a" stroke-width="6" fill="none" stroke-linecap="round"/></g>`
      : `<g class="eyes"><ellipse cx="80" cy="128" rx="13" ry="16" fill="#fff"/><ellipse cx="120" cy="128" rx="13" ry="16" fill="#fff"/>
         <g class="pu pl"><ellipse cx="82" cy="130" rx="7.5" ry="10" fill="#23170a"/><circle cx="85" cy="125" r="3.4" fill="#fff"/></g><g class="pu pr"><ellipse cx="122" cy="130" rx="7.5" ry="10" fill="#23170a"/><circle cx="125" cy="125" r="3.4" fill="#fff"/></g>
         <ellipse class="lid" cx="80" cy="128" rx="14" ry="17" fill="url(#gBody)"/><ellipse class="lid" cx="120" cy="128" rx="14" ry="17" fill="url(#gBody)"/></g>`;
    const mouth = `<g class="mouth">
      <path class="m-smile" d="${mood === "oops" ? "M88 164q12-10 24 0" : "M84 154q16 18 32 0z"}" fill="${mood === "oops" ? "none" : "#7a2b1e"}" stroke="#23170a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
      ${mood === "oops" ? "" : `<path class="m-tongue" d="M90 158q10 7 20 0" fill="#ff8f7d"/>`}
      <ellipse class="m-open" cx="100" cy="160" rx="11" ry="12" fill="#7a2b1e" stroke="#23170a" stroke-width="4"/><ellipse class="m-open" cx="100" cy="166" rx="6" ry="4" fill="#ff8f7d"/></g>`;
    const cheeks = `<ellipse class="blush" cx="62" cy="152" rx="10" ry="6.5" fill="#ff8f7d" opacity=".55"/><ellipse class="blush" cx="138" cy="152" rx="10" ry="6.5" fill="#ff8f7d" opacity=".55"/>`;
    const star = joy ? `<path d="M166 64l5 12 13 2-10 9 3 13-11-7-11 7 3-13-10-9 13-2z" fill="#ffd54a" stroke="#c99a1a" stroke-width="2"/>` : "";
    const sparks = o.sparks ? `<g class="sparks"><path class="sp s1" d="M30 78l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#ffd54a"/><path class="sp s2" d="M172 40l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#fff3b0"/><path class="sp s3" d="M22 176l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#fff3b0"/></g>` : "";
    const arm = (side) => side === "r"
      ? `<g class="arm ar"><path d="M140 160q22 4 28-20" stroke="#8a5f10" stroke-width="15" fill="none" stroke-linecap="round"/><path d="M140 160q22 4 28-20" stroke="url(#gBody)" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="170" cy="124" r="15" fill="url(#gBody)" stroke="#8a5f10" stroke-width="3"/><ellipse cx="184" cy="128" rx="6" ry="9" transform="rotate(-30 184 128)" fill="url(#gBody)" stroke="#8a5f10" stroke-width="3"/></g>`
      : `<g class="arm al"><path d="M60 160q-22 4-28-14" stroke="#8a5f10" stroke-width="15" fill="none" stroke-linecap="round"/><path d="M60 160q-22 4-28-14" stroke="url(#gBody)" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="30" cy="136" r="14" fill="url(#gBody)" stroke="#8a5f10" stroke-width="3"/></g>`;
    return `<svg viewBox="0 0 200 250" aria-hidden="true" class="kcs">
  <ellipse class="shadow" cx="100" cy="240" rx="52" ry="8" fill="#000" opacity=".16"/>
  <circle class="glow" cx="100" cy="135" r="98" fill="url(#gGlow)"/>
  ${w.back ? ACC[w.back] || "" : ""}
  <g class="body">
  <path d="M100 16v24" stroke="#084a2f" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="14" r="9" fill="none" stroke="url(#gBase)" stroke-width="5"/>
  <path d="M58 72q42-56 84 0z" fill="url(#gCap)"/><path d="M72 62q16-22 40-22" stroke="#7be0b0" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>
  <rect x="52" y="68" width="96" height="13" rx="6.5" fill="url(#gBase)"/>
  <path d="M60 81h80q11 42 0 82q-7 32-40 32t-40-32q-11-40 0-82z" fill="url(#gBody)" stroke="#8a5f10" stroke-width="3"/>
  <path d="M132 86q9 40-2 78q-6 22-26 28q34 0 40-30q11-40-2-76z" fill="#8a5f10" opacity=".22"/>
  <ellipse class="inner" cx="100" cy="132" rx="38" ry="54" fill="url(#gGlow)"/><ellipse cx="74" cy="104" rx="10" ry="22" transform="rotate(14 74 104)" fill="#fff" opacity=".55"/>
  <rect x="62" y="190" width="76" height="15" rx="7" fill="url(#gBase)"/><path d="M70 205h60l-8 24H78z" fill="url(#gBase)"/><rect x="72" y="227" width="56" height="10" rx="5" fill="#084a2f"/>
  ${arm("l")}${cheeks}${brow}${eyes}${mouth}${star}${w.neck ? ACC[w.neck] || "" : ""}${w.face ? ACC[w.face] || "" : ""}${w.head ? ACC[w.head] || "" : ""}${arm("r")}
  </g>${w.fx ? ACC[w.fx] || "" : ""}${sparks}</svg>`;
  }

  /* Conteneur interactif. size en px (largeur). */
  const html = (mood = "happy", size = 150, o = {}) => `<div class="kc kc-${mood}${o.cls ? " " + o.cls : ""}" data-kc="${mood}" data-tap="${o.tap === false ? 0 : 1}" style="--s:${size}px"><div class="kc-in">${svg(mood, o)}</div><div class="kc-say" aria-live="polite"></div></div>`;

  const LINES = [
    ["Hihi, ça chatouille !", "sj-t0"], ["Salam ! Tu m'as trouvé !", "sj-t1"], ["Youhou, on joue ?", "sj-t2"], ["Oh là là, tu es rapide !", "sj-t3"],
    ["Allez, un petit saut !", "sj-t4"], ["Tu as de beaux yeux, toi !", "sj-t5"], ["Bismillah, on y va !", "sj-t6"], ["Je brille pour toi !", "sj-t7"],
    ["Chuut… je réfléchis.", "sj-t8"], ["Tu apprends vite, machaa Allah !", "sj-t9"], ["Et hop, une pirouette !", "sj-t10"], ["Waouh, quelle aventure !", "sj-t11"],
  ];
  const TRICKS = ["hop", "spin", "wiggle", "dance", "wave", "laugh", "shy", "flip"];
  let lineIdx = 0, audioCb = null;
  const setAudio = f => { audioCb = f; };

  function animate(el, trick) {
    const w = el.querySelector(".kc-in"); if (!w) return;
    const run = (kf, dur, ease = "ease-out") => { try { w.animate(kf, { duration: dur, easing: ease }); } catch {} };
    const cls = (c, ms) => { el.classList.add(c); setTimeout(() => el.classList.remove(c), ms); };
    if (trick === "hop") run([{ transform: "translateY(0) scaleY(1)" }, { transform: "translateY(6px) scaleY(.9)", offset: .2 }, { transform: "translateY(-34px) scaleY(1.06)", offset: .55 }, { transform: "translateY(0) scaleY(.94)", offset: .85 }, { transform: "translateY(0) scaleY(1)" }], 620);
    else if (trick === "spin") run([{ transform: "rotate(0) scale(1)" }, { transform: "rotate(180deg) scale(1.12)", offset: .5 }, { transform: "rotate(360deg) scale(1)" }], 760, "cubic-bezier(.3,.7,.3,1)");
    else if (trick === "wiggle") run([{ transform: "rotate(0)" }, { transform: "rotate(-9deg)", offset: .2 }, { transform: "rotate(8deg)", offset: .4 }, { transform: "rotate(-6deg)", offset: .6 }, { transform: "rotate(4deg)", offset: .8 }, { transform: "rotate(0)" }], 640);
    else if (trick === "dance") { run([{ transform: "translateX(0) rotate(0)" }, { transform: "translateX(-16px) rotate(-8deg)", offset: .15 }, { transform: "translateX(16px) rotate(8deg)", offset: .35 }, { transform: "translateX(-14px) rotate(-7deg) translateY(-12px)", offset: .55 }, { transform: "translateX(14px) rotate(7deg)", offset: .75 }, { transform: "translateX(0) rotate(0)" }], 1400, "ease-in-out"); cls("kc-dance", 1400); }
    else if (trick === "wave") cls("kc-wave", 1300);
    else if (trick === "laugh") { run([{ transform: "scale(1,1)" }, { transform: "scale(1.06,.94)", offset: .15 }, { transform: "scale(.96,1.05)", offset: .3 }, { transform: "scale(1.05,.95)", offset: .45 }, { transform: "scale(.97,1.04)", offset: .6 }, { transform: "scale(1,1)" }], 900); cls("kc-talk", 900); }
    else if (trick === "shy") { cls("kc-shy", 1500); run([{ transform: "rotate(0)" }, { transform: "rotate(-7deg) translateY(2px)", offset: .3 }, { transform: "rotate(-7deg) translateY(2px)", offset: .7 }, { transform: "rotate(0)" }], 1500, "ease-in-out"); }
    else if (trick === "flip") run([{ transform: "rotateY(0)" }, { transform: "rotateY(180deg) scale(1.08)", offset: .5 }, { transform: "rotateY(360deg)" }], 800, "ease-in-out");
  }
  function say(el, text, ms = 2600) {
    const b = el.querySelector(".kc-say"); if (!b) return; b.textContent = text; b.classList.add("on"); clearTimeout(b._t); b._t = setTimeout(() => b.classList.remove("on"), ms);
  }
  function react(el) {
    const [t, key] = LINES[lineIdx++ % LINES.length], trick = TRICKS[Math.floor(Math.random() * TRICKS.length)];
    animate(el, trick); say(el, t); if (typeof SND !== "undefined") SND.pop(); if (audioCb) audioCb(key, t);
  }
  /* Éléments vivants : on garde ceux qui sont dans la page. */
  const live = () => [...document.querySelectorAll(".kc[data-kc]")];
  let ptr = null, raf = 0;
  function look() {
    raf = 0; if (!ptr) return;
    live().forEach(el => { const r = el.getBoundingClientRect(); if (!r.width) return; const cx = r.left + r.width / 2, cy = r.top + r.height * .5, dx = ptr.x - cx, dy = ptr.y - cy, d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 160); el.style.setProperty("--px", (dx / d * 5.5 * k).toFixed(2) + "px"); el.style.setProperty("--py", (dy / d * 5 * k).toFixed(2) + "px"); });
  }
  addEventListener("pointermove", e => { ptr = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(look); }, { passive: true });
  addEventListener("pointerdown", e => { ptr = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(look); }, { passive: true });
  document.addEventListener("click", e => { const el = e.target.closest(".kc[data-kc]"); if (el && el.dataset.tap !== "0") react(el); });
  /* Vie propre : clignements, regards, petits sauts. */
  const nextIn = () => 1800 + Math.random() * 2600;
  let idleT = 0;
  function idle() {
    live().forEach(el => {
      if (el.classList.contains("kc-talk") && Math.random() < .5) return;
      const r = Math.random();
      if (r < .55) { el.classList.add("kc-blink"); setTimeout(() => el.classList.remove("kc-blink"), 180); }
      else if (r < .75) { el.style.setProperty("--px", (Math.random() * 8 - 4).toFixed(1) + "px"); el.style.setProperty("--py", (Math.random() * 3 - 1).toFixed(1) + "px"); }
      else if (r < .88 && el.dataset.kc !== "oops") animate(el, "wiggle");
      else if (r < .95) animate(el, "hop");
    });
    idleT = setTimeout(idle, nextIn());
  }
  idleT = setTimeout(idle, 1500);
  /* Parole : la bouche bouge pendant qu'une voix joue. */
  const talk = on => live().forEach(el => el.classList.toggle("kc-talking", !!on));
  const wear = (slot, id) => { const D = E.S.kids = E.S.kids || {}; D.worn = D.worn || {}; if (!id) delete D.worn[slot]; else { const it = ITEMS.find(x => x.id === id); if (!it || !owned(id)) return false; D.worn[slot] = id; } E.save(); return true; };
  return { html, svg, ITEMS, SLOTS, owned, worn, wear, react, animate, say, talk, setAudio, LINES };
})();
