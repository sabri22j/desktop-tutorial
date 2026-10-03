/* Parcours enfants : accueil, mondes, aventures (leçons + questions variées), défi du jour, « Mon Sirâj » (tenues, badges).
   Données : kdata*.js. Voix : audio/kids/<clé>.mp3 (sinon voix de l'appareil). */
const kd = () => { const D = E.S.kids = E.S.kids || {}; D.stars = D.stars || 0; D.adv = D.adv || {}; D.worn = D.worn || {}; return D; };
const kdStat = id => kd().adv[id] || { s: 0, n: 0 };
const kdWorldDone = w => w.adv.filter(a => kdStat(a.id).s > 0).length;
const kdAllAdv = () => KW.flatMap(w => w.adv);
const kdNext = () => { for (const w of KW) for (const a of w.adv) if (!kdStat(a.id).s) return { w, a }; return null; };
const kdToday = () => E.dayStr();
const kdMiss = () => { const D = kd(), out = []; KW.forEach(w => w.adv.forEach(a => a.q.forEach((q, i) => { if (D.miss && D.miss[a.id + ":" + i]) out.push({ a: a.id, i, q }); }))); return out; };
if (kd().size === "l") document.body.classList.add("kd-lg");

/* ---- Voix ---- */
const KA = (() => {
  let el = null, tm = 0;
  const stop = () => { if (el) { try { el.pause(); } catch {} el = null; } clearTimeout(tm); KC.talk(false); };
  const play = (key, text, cb) => {
    stop(); VOICE.stop();
    const fallback = () => { const ok = VOICE.play("none", 0, String(text).replace(/ﷺ/g, ", paix sur lui")); if (ok !== false) { KC.talk(true); tm = setTimeout(() => KC.talk(false), Math.min(14000, 700 + String(text).length * 62)); } if (cb) setTimeout(cb, 400); };
    try {
      const a = new Audio(`audio/kids/${key}.mp3`); el = a; a.volume = Math.min(1, .4 + (E.S.settings.vol || .5) * .6);
      a.onplaying = () => KC.talk(true); a.onended = () => { KC.talk(false); if (cb) cb(); }; a.onpause = () => KC.talk(false); a.onerror = () => { if (el === a) fallback(); };
      a.play().catch(() => { if (el === a) fallback(); });
    } catch { fallback(); }
  };
  return { play, stop };
})();
KC.setAudio((key, text) => KA.play(key, text));
addEventListener("hashchange", () => KA.stop());

const kdTips = (nx, done) => { const D = kd(), t = ["Touche-moi ! Je réagis 😄", "Appuie longtemps sur moi : un câlin !", nx ? `Prochaine aventure : ${nx.a.n} !` : "Tu as tout terminé, champion !", E.streak() > 1 ? `Déjà ${E.streak()} jours de suite, bravo !` : "Reviens chaque jour pour allumer ta série 🔥"];
  const seen = kdAllAdv().filter(a => kdStat(a.id).s > 0); if (seen.length) { const a = seen[Math.floor(Math.random() * seen.length)], c = a.cards[Math.floor(Math.random() * a.cards.length)]; t.push("Tu te souviens ? " + c.t + " !"); }
  if (kdMiss().length) t.push("Tu as " + kdMiss().length + " question(s) à revoir dans « Mes erreurs »."); return t; };
const kdSky = () => `<div class="kd-sky" aria-hidden="true"><i style="left:7%;top:9%">✨</i><i style="left:86%;top:5%">⭐</i><i style="left:72%;top:20%">✨</i><i style="left:16%;top:27%">🌙</i></div>`;
const kdHello = () => { const h = new Date().getHours(); return h < 12 ? ["sj-hello1", "Bonjour"] : h < 18 ? ["sj-hello2", "Bon après-midi"] : ["sj-hello3", "Bonsoir"]; };
const kdStars3 = n => [1, 2, 3].map(i => `<span class="${i <= n ? "on" : ""}">★</span>`).join("");

/* ---- Accueil ---- */
V.kids = (a, b) => {
  if (a === "adv") return kdAdventure(b);
  if (a) return kdWorld(a);
  return kdHome();
};

/* ---- Un monde ---- */
function kdWorld(id) {
  const w = KW.find(x => x.id === id); if (!w) return V.kids();
  const done = kdWorldDone(w), boss = kdStat(w.id + "x");
  return `<div class="kd">${kdSky()}<a class="back" href="#/kids">${ico("back", 18)} Mes mondes</a>
  <section class="kd-wh" style="--c:${w.c}"><span class="kd-whe">${w.e}</span><div><h2>${esc(w.n)}</h2><p>${esc(w.d)}</p><div class="kd-wbar big"><i style="width:${Math.round(done / w.adv.length * 100)}%"></i></div><small>${done}/${w.adv.length} aventures</small></div></section>
  <div class="kd-path" style="--c:${w.c}">${w.adv.map((a, i) => { const s = kdStat(a.id), x = Math.round(Math.sin(i * 1.15) * 62), cur = !s.s && (i === 0 || kdStat(w.adv[i - 1].id).s);
    return `<a class="kd-node${s.s ? " done" : ""}${cur ? " cur" : ""}" href="#/kids/adv/${a.id}" style="transform:translateX(${x}px)">${cur ? `<span class="kd-go-b">GO !</span><span class="kd-walker">${KC.html("happy", 60, { cls: "kd-mini", tap: false })}</span>` : ""}<span class="kd-ne">${a.e}</span><b>${esc(a.n)}</b><em>${kdStars3(s.s)}</em>${typeof srsBadge === "function" ? srsBadge(a.id) : ""}</a>`; }).join("")}
    <a class="kd-node boss${boss.s ? " done" : ""}" href="#/kids/adv/${w.id}x" style="transform:translateX(0)"><span class="kd-ne">🏆</span><b>Grand défi du monde</b><em>${kdStars3(boss.s)}</em></a></div></div>`;
}

/* ---- Aventures (leçons + questions) ---- */
let AS = null;
function kdBuild(id) {
  if (id === "daily") {
    const all = []; KW.forEach(w => w.adv.forEach(a => a.q.forEach((q, i) => all.push({ a: a.id, i, q }))));
    const D = kd(), miss = all.filter(x => D.miss && D.miss[x.a + ":" + x.i]), rest = all.filter(x => !(D.miss && D.miss[x.a + ":" + x.i]));
    const pick = K.shuffle(miss, K.hash(kdToday())).slice(0, 3).concat(K.shuffle(rest, K.hash(kdToday() + "r"))).slice(0, 5);
    return { id: "daily", n: "Défi du jour", e: "🎯", c: "#e08a1e", back: "#/kids", steps: pick.map(p => ({ k: "q", ak: p.a, i: p.i, q: K.prep(p.a, p.i, p.q) })), intro: "sj-daily" };
  }
  if (id.startsWith("rev:")) {
    const f = K.find(id.slice(4)); if (!f) return null; const idx = K.shuffle(f.a.q.map((_, i) => i), Math.floor(Math.random() * 1e9));
    return { id, rev: f.a.id, n: "Révision : " + f.a.n, e: "🧠", c: f.w.c, back: "#/kprog", w: f.w, a: f.a, steps: idx.map(i => ({ k: "q", ak: f.a.id, i, q: K.prep(f.a.id, i, f.a.q[i]) })) };
  }
  if (id === "miss") {
    const pick = K.shuffle(kdMiss(), Math.floor(Math.random() * 1e9)).slice(0, 8); if (!pick.length) return null;
    return { id: "miss", n: "Mes erreurs", e: "🔁", c: "#e5584a", back: "#/kgames", steps: pick.map(p => ({ k: "q", ak: p.a, i: p.i, q: K.prep(p.a, p.i, p.q) })) };
  }
  if (/^w\d+x$/.test(id)) {
    const w = KW.find(x => x.id === id.slice(0, -1)); if (!w) return null;
    const all = []; w.adv.forEach(a => a.q.forEach((q, i) => all.push({ a: a.id, i, q })));
    const pick = K.shuffle(all, K.hash(id + kdToday().slice(0, 7))).slice(0, 8);
    return { id, n: "Grand défi : " + w.n, e: "🏆", c: w.c, back: "#/kids/" + w.id, steps: pick.map(p => ({ k: "q", ak: p.a, i: p.i, q: K.prep(p.a, p.i, p.q) })), intro: "sj-boss" };
  }
  const f = K.find(id); if (!f) return null;
  return { id, n: f.a.n, e: f.a.e, c: f.w.c, back: "#/kids/" + f.w.id, w: f.w, a: f.a, steps: f.a.cards.map((c, i) => ({ k: "c", ak: id, i, c })).concat(f.a.q.map((q, i) => ({ k: "q", ak: id, i, q: K.prep(id, i, q) }))) };
}
function kdAdventure(id) {
  const A = kdBuild(id); if (!A) return V.kids();
  AS = { A, p: 0, mis: 0, wrong: false, ans: false, sel: null, ord: [], match: {}, done: 0 };
  setTimeout(() => kdStep(), 0);
  return `<div class="kd kd-play" style="--c:${A.c}"><div class="kd-bar"><a class="kd-x" href="${A.back}" aria-label="Quitter">✕</a><div class="kd-prog" id="kprog"><div class="kd-hfill" style="width:2%"></div></div><div class="kd-lives" id="klives">❤️❤️❤️</div></div><div id="kstage"></div><div id="kfbp" class="kd-fbp" style="display:none"></div></div>`;
}
const kdProg = () => {
  const A = AS.A, el = document.getElementById("kprog"), lv = document.getElementById("klives");
  if (el) { const pct = Math.round(AS.p / A.steps.length * 100), f = el.querySelector(".kd-hfill"); if (f) f.style.width = Math.max(2, pct) + "%"; }
  if (lv) { const lives = Math.max(0, 3 - AS.mis); lv.innerHTML = Array.from({ length: 3 }, (_, i) => `<span class="${i < lives ? "on" : ""}">${i < lives ? "❤️" : "🤍"}</span>`).join(""); }
};
function kdStep(auto = true) {
  const st = document.getElementById("kstage"); if (!st || !AS) return; const A = AS.A;
  if (AS.p >= A.steps.length) return kdFinish();
  const s = A.steps[AS.p]; AS.ans = false; AS.wrong = false; AS.wc = 0; AS.sel = null; AS.ord = []; AS.match = {}; AS.ml = null; kdProg(); window.scrollTo(0, 0);
  if (s.k === "c") {
    const c = s.c;
    st.innerHTML = `<div class="kd-pane kd-cs"><div class="kd-big">${c.e}</div><h2>${esc(c.t)}</h2>${c.ar ? `<div class="kd-ar" dir="rtl" lang="ar">${esc(c.ar)}<button class="kd-arb" data-kar="${esc(c.ar)}" aria-label="Écouter en arabe">🔊</button></div>` : ""}<p class="kd-text">${esc(c.x)}</p></div>
      <div class="kd-foot"><div class="kd-fc">${KC.html("happy", 92, { cls: "kd-mini" })}</div><div class="kd-fb2"><div class="kd-frow"><button class="kd-listen" data-kplay>🔊 Écouter</button>${AS.p > 0 && A.steps[AS.p - 1].k === "c" ? `<button class="kd-listen sm" data-kprev aria-label="Précédent">◀</button>` : ""}</div><button class="btn kd-next" data-knext>Suivant ▶</button></div></div>`;
    const sj0 = document.querySelector(".kd-foot .kc"); if (sj0 && AS.p === 0) { KC.animate(sj0, "wave"); }
    if (auto) KA.play(`${s.ak}-c${s.i}`, c.t + ". " + c.x);
  } else {
    const q = s.q; AS.sayKey = `${s.ak}-q${s.i}`; AS.sayText = K.say(q);
    let body = "";
    if (q.t === "mc") body = `<div class="kd-opts">${q.opts.map((o, k) => `<button class="kd-opt" data-kmc="${k}"><i>${"ABCD"[k]}</i><span>${esc(o)}</span></button>`).join("")}</div>`;
    else if (q.t === "tf") body = `<div class="kd-tf"><button class="kd-opt t" data-ktf="1"><span>✅ Vrai</span></button><button class="kd-opt f" data-ktf="0"><span>❌ Faux</span></button></div>`;
    else if (q.t === "order") body = `<div class="kd-slots">${q.items.map((_, k) => `<div class="kd-slot" data-slot="${k}"><i>${k + 1}</i><span></span></div>`).join("")}</div><div class="kd-chips">${q.shuf.map((o, k) => `<button class="kd-chip" data-kch="${k}">${esc(o)}</button>`).join("")}</div><button class="kd-reset" data-kreset>↺ Recommencer</button>`;
    else if (q.t === "match") body = `<div class="kd-match"><div class="kd-mcol">${q.pairs.map((p, k) => `<button class="kd-mit l" data-kml="${k}">${esc(p[0])}</button>`).join("")}</div><div class="kd-mcol">${q.rights.map((r, k) => `<button class="kd-mit r" data-kmr="${k}">${esc(r)}</button>`).join("")}</div></div>`;
    const qtL = { mc: "Choisis la bonne réponse", tf: "Vrai ou faux ?", order: "Remets dans l'ordre", match: "Associe les paires" };
    st.innerHTML = `<div class="kd-pane kd-qs"><div class="kd-qhead"><span class="kd-qlabel">${qtL[q.t] || ""}</span><div class="kd-qbtns"><button class="kd-listen sm" data-kplay aria-label="Écouter">🔊</button><button class="kd-listen sm" data-krev="${s.ak}" aria-label="Revoir">📖</button></div></div><div class="kd-qchar">${KC.html("think", 80, { cls: "kd-mini", tap: false })}</div><h2 class="kd-q">${esc(q.q)}</h2>${body}<div id="kfb" class="kd-fb kd-fb-inline"></div></div>`;
    if (auto) KA.play(AS.sayKey, AS.sayText);
  }
}
const kdOk = () => { const m = Math.floor(Math.random() * 4) + 1; return [`sj-ok${m}`, K.lines[`sj-ok${m}`]]; };
const kdKo = () => { const m = Math.floor(Math.random() * 3) + 1; return [`sj-ko${m}`, K.lines[`sj-ko${m}`]]; };
function kdMark(bad) { const s = AS.A.steps[AS.p], D = kd(); D.miss = D.miss || {}; const k = s.ak + ":" + s.i; if (bad) D.miss[k] = 1; else if (!AS.wrong && !s.rq) delete D.miss[k]; }
function kdFbPanel(ok, title, info, btnTxt) {
  const p = document.getElementById("kfbp"); if (!p) return;
  p.className = `kd-fbp ${ok ? "ok" : "ko"}`;
  p.innerHTML = `<div class="kd-fbp-t"><span class="kd-fbp-i">${ok ? "✓" : "✗"}</span><div><b>${title}</b>${info ? `<p>${info}</p>` : ""}</div></div><button class="btn kd-fbp-btn" data-knext>${btnTxt}</button>`;
  p.style.display = "";
}
function kdRight(extra = "") {
  AS.ans = true; kdMark(false); const [k, t] = kdOk(); SND.correct(); if (!AS.wrong && Math.random() < .5) confetti();
  const last = AS.p >= AS.A.steps.length - 1, again = AS.A.steps[AS.p].rq;
  kdFbPanel(true, t + (AS.wrong || again ? "" : " ⭐"), extra, last ? "Terminer 🎉" : "Continuer ▶");
  const h = document.querySelector(".kd-qchar .kc"); if (h) { h.querySelector(".kc-in").innerHTML = KC.svg("proud"); KC.animate(h, AS.wrong ? "wiggle" : "hop"); }
  KA.play(k, t);
}
function kdFail(info = "", key, spoken = "") {
  const s = AS.A.steps[AS.p]; AS.ans = true; if (!AS.wrong) { AS.wrong = true; AS.mis++; } kdMark(true);
  const again = (s.rq || 0) < 2; if (again) AS.A.steps.push({ k: "q", ak: s.ak, i: s.i, q: s.q, rq: (s.rq || 0) + 1 }); kdProg();
  const last = AS.p >= AS.A.steps.length - 1; SND.wrong(); const [k, t] = kdKo();
  const infoHtml = (info ? `<p>${info}</p>` : "") + (again ? `<p class="kd-again">Pas grave, je te la reposerai 😉</p>` : "");
  const p = document.getElementById("kfbp");
  if (p) {
    p.className = "kd-fbp ko";
    p.innerHTML = `<div class="kd-fbp-t"><span class="kd-fbp-i">✗</span><div><b>${t}</b>${infoHtml}</div></div><button class="btn sec sm kd-fbp-rev" data-krev="${s.ak}" style="margin-top:8px">📖 Revoir la leçon</button><button class="btn kd-fbp-btn" data-knext style="margin-top:8px">${last ? "Terminer 🎉" : "Continuer ▶"}</button>`;
    p.style.display = "";
  }
  KA.play(key || k, spoken || t); const h = document.querySelector(".kd-qchar .kc"); if (h) KC.animate(h, "wiggle");
}
function kdWrong(msg = "") {
  if (!AS.wrong) { AS.wrong = true; AS.mis++; } kdMark(true);
  SND.wrong(); const [k, t] = kdKo(), fb = document.getElementById("kfb"); AS.wc = (AS.wc || 0) + 1; fb.innerHTML = `<div class="kd-ko"><b>${t}</b>${msg ? `<p>${msg}</p>` : ""}${AS.wc >= 2 ? `<button class="btn sec sm" data-krev="${AS.A.steps[AS.p].ak}">📖 Revoir la leçon</button>` : ""}</div>`; KA.play(k, t);
  const h = document.querySelector(".kd-qchar .kc"); if (h) KC.animate(h, "wiggle");
}
function kdFinish() {
  if (AS.A.rev) return kdFinishReview();
  const A = AS.A, D = kd(), st = document.getElementById("kstage"), nq = A.steps.filter(s => s.k === "q" && !s.rq).length;
  const stars = AS.mis <= 1 ? 3 : AS.mis <= 3 ? 2 : 1, old = kdStat(A.id), before = KC.ITEMS.filter(i => KC.owned(i.id)).length;
  const gain = Math.max(0, stars - (old.s || 0)); const first = !old.s;
  D.adv[A.id] = { s: Math.max(old.s || 0, stars), n: (old.n || 0) + 1 }; D.stars += gain + (A.id === "daily" && D.daily !== kdToday() ? 2 : 0);
  if (A.id === "daily") D.daily = kdToday();
  const xp = first ? 15 + stars * 5 + (A.id === "daily" ? 10 : 0) : 5; E.addXP(xp); E.save();
  const srsMsg = typeof srsAfterAdventure === "function" && A.a && A.w ? srsAfterAdventure(A.id, first, AS.mis) : "";
  const after = KC.ITEMS.filter(i => KC.owned(i.id)), newItem = after.length > before ? after[after.length - 1] : null;
  const nx = A.w ? (() => { const i = A.w.adv.findIndex(x => x.id === A.id); return i >= 0 && i < A.w.adv.length - 1 ? A.w.adv[i + 1] : null; })() : null;
  const msg = stars === 3 ? ["sj-end3", K.lines["sj-end3"]] : stars === 2 ? ["sj-end2", K.lines["sj-end2"]] : ["sj-end1", K.lines["sj-end1"]];
  AS.p = A.steps.length; kdProg(); SND.win(); confetti(); window.scrollTo(0, 0);
  st.innerHTML = `<div class="kd-pane kd-end"><div class="kd-stars3">${[1, 2, 3].map(i => `<span class="${i <= stars ? "on" : ""}" style="animation-delay:${.25 * i}s">★</span>`).join("")}</div><h2>${stars === 3 ? "Parfait !" : stars === 2 ? "Très bien !" : "Bien joué !"}</h2><p class="kd-text">${esc(A.e)} ${esc(A.n)}<br><small class="muted">${nq - AS.mis}/${nq} réponses du premier coup · +${xp} XP${gain ? " · +" + gain + " ⭐" : ""}</small></p>
    ${srsMsg}
    <div class="kd-endc">${KC.html("proud", 150, { sparks: true, cls: "kd-celeb" })}</div>
    ${A.a ? `<div class="kd-recap"><b>Ce que j'ai appris</b>${A.a.cards.map(c => `<span>${c.e} ${esc(c.t)}</span>`).join("")}<button class="btn sec sm" data-krev="${A.id}">📖 Relire la leçon</button></div>` : ""}
    ${newItem ? `<div class="kd-unlock"><span>${newItem.e}</span><div><b>Nouvelle tenue débloquée !</b><small>${esc(newItem.n)} — va voir « Mon Sirâj »</small></div></div>` : ""}
    <div class="kd-endb">${nx ? `<a class="btn kd-next" href="#/kids/adv/${nx.id}">Aventure suivante ▶</a>` : `<a class="btn kd-next" href="${A.back}">Continuer ▶</a>`}<a class="btn sec" href="${A.back}">Retour</a></div></div>`;
  KA.play(newItem ? "sj-new" : msg[0], newItem ? K.lines["sj-new"] : msg[1]);
  const c = document.querySelector(".kd-endc .kc"); if (c) setTimeout(() => KC.animate(c, "dance"), 400);
}

/* ---- Événements ---- */
function kdReview(id) {
  const f = K.find(id); if (!f) return; document.getElementById("kdrev")?.remove();
  const d = document.createElement("div"); d.id = "kdrev"; d.className = "kd-rev";
  d.innerHTML = `<div class="bk" data-krevx></div><div class="pn" style="--c:${f.w.c}"><div class="grab"></div><h3>📖 ${esc(f.a.n)}</h3>${f.a.cards.map((c, i) => `<div class="kd-rc"><span>${c.e}</span><div><b>${esc(c.t)}</b><p>${esc(c.x)}</p></div><button class="kd-arb" data-krevp="${id}|${i}" aria-label="Écouter">🔊</button></div>`).join("")}<button class="btn kd-next" data-krevx>Fermer</button></div>`;
  document.body.appendChild(d);
}
document.addEventListener("click", e => {
  const x = e.target.closest("[data-krev],[data-krevx],[data-krevp],[data-khow],[data-ksize]");
  if (x) { if (x.matches("[data-krev]")) kdReview(x.dataset.krev); else if (x.matches("[data-krevx]")) document.getElementById("kdrev")?.remove(); else if (x.matches("[data-krevp]")) { const [a, i] = x.dataset.krevp.split("|"), c = K.find(a).a.cards[+i]; KA.play(`${a}-c${i}`, c.t + ". " + c.x); }
    else if (x.matches("[data-khow]")) { kd().tuto = 1; E.save(); x.closest(".kd-how")?.remove(); const sj = document.querySelector(".kd-hero .kc"); if (sj) { KC.animate(sj, "dance"); KC.say(sj, "Super ! On y va !", 2200); } }
    else if (x.matches("[data-ksize]")) { kd().size = x.dataset.ksize; E.save(); document.body.classList.toggle("kd-lg", kd().size === "l"); document.querySelectorAll("[data-ksize]").forEach(b => b.classList.toggle("on", b.dataset.ksize === kd().size)); }
    return; }
  const t = e.target.closest("[data-kplay],[data-kprev],[data-knext],[data-kmc],[data-ktf],[data-kch],[data-kreset],[data-kml],[data-kmr],[data-kar],[data-kwear],[data-kmode]"); if (!t) return;
  if (t.matches("[data-kar]")) { if (!VOICE.playAr(t.dataset.kar)) toast("Aucune voix arabe sur cet appareil."); return; }
  if (t.matches("[data-kwear]")) { const id = t.dataset.kwear, it = KC.ITEMS.find(x => x.id === id), cur = kd().worn[it.slot]; if (!KC.owned(id)) return toast(`Encore ${it.stars - kd().stars} ⭐ pour débloquer`); KC.wear(it.slot, cur === id ? "" : id); route(); const c = document.querySelector(".kd-me .kc"); if (c) { KC.animate(c, "dance"); KC.say(c, cur === id ? "Hop, je l'enlève !" : "Trop beau ! Merci !"); } return; }
  if (t.matches("[data-kmode]")) { E.S.settings.kid = false; E.save(); location.hash = "#/home"; route(); return; }
  if (!AS) return; const s = AS.A.steps[AS.p]; if (!s && !t.matches("[data-knext]")) return;
  if (t.matches("[data-kplay]")) { if (s.k === "c") KA.play(`${s.ak}-c${s.i}`, s.c.t + ". " + s.c.x); else KA.play(AS.sayKey, AS.sayText); return; }
  if (t.matches("[data-knext]")) { const fp = document.getElementById("kfbp"); if (fp) fp.style.display = "none"; AS.p++; kdStep(); return; }
  if (t.matches("[data-kprev]")) { if (AS.p > 0) { AS.p--; kdStep(); } return; }
  if (!s || s.k !== "q" || AS.ans) return; const q = s.q;
  if (t.matches("[data-kmc]")) {
    const k = +t.dataset.kmc; if (t.classList.contains("no")) return;
    if (k === q.ai) { t.classList.add("ok"); document.querySelectorAll(".kd-opt").forEach(b => { if (b !== t) b.classList.add("dim"); b.disabled = true; }); kdRight(); }
    else { t.classList.add("no"); document.querySelectorAll(".kd-opt").forEach(b => { b.disabled = true; if (+b.dataset.kmc === q.ai) b.classList.add("ok"); else if (b !== t) b.classList.add("dim"); }); kdFail(`La bonne réponse : <b>${esc(q.opts[q.ai])}</b>`); }
  } else if (t.matches("[data-ktf]")) {
    const v = t.dataset.ktf === "1"; AS.ans = true; document.querySelectorAll(".kd-opt").forEach(b => b.disabled = true);
    if (v === q.v) { t.classList.add("ok"); kdRight(esc(q.why || "")); } else { t.classList.add("no"); const good = document.querySelector(`[data-ktf="${q.v ? 1 : 0}"]`); if (good) good.classList.add("ok"); kdFail(esc(q.why || ""), `${AS.A.steps[AS.p].ak}-w${s.i}`, q.why || ""); }
  } else if (t.matches("[data-kch]")) {
    const k = +t.dataset.kch; if (t.classList.contains("used")) return; const n = AS.ord.length; AS.ord.push(k); t.classList.add("used"); t.disabled = true;
    const slot = document.querySelector(`.kd-slot[data-slot="${n}"]`); slot.classList.add("on"); slot.querySelector("span").textContent = q.shuf[k]; SND.select();
    if (AS.ord.length === q.items.length) { const okk = AS.ord.every((ki, pos) => q.shuf[ki] === q.items[pos]); if (okk) { document.querySelectorAll(".kd-slot").forEach(x => x.classList.add("ok")); kdRight(); } else { document.querySelectorAll(".kd-slot").forEach(x => x.classList.add("no")); kdFail("Le bon ordre : " + q.items.map((x, k) => `${k + 1}. ${esc(x)}`).join(" · ")); } }
  } else if (t.matches("[data-kreset]")) kdResetOrder();
  else if (t.matches("[data-kml]")) { document.querySelectorAll(".kd-mit.l").forEach(b => b.classList.remove("sel")); if (t.classList.contains("ok")) return; t.classList.add("sel"); AS.ml = +t.dataset.kml; SND.select(); }
  else if (t.matches("[data-kmr]")) {
    if (AS.ml == null || t.classList.contains("ok")) return; const l = AS.ml, rr = +t.dataset.kmr, L = document.querySelector(`.kd-mit.l[data-kml="${l}"]`);
    if (q.rights[rr] === q.pairs[l][1]) { L.classList.remove("sel"); L.classList.add("ok"); t.classList.add("ok"); AS.match[l] = true; AS.ml = null; SND.correct(); if (Object.keys(AS.match).length === q.pairs.length) kdRight(); }
    else { t.classList.add("no"); setTimeout(() => t.classList.remove("no"), 500); kdWrong("Ce n'est pas la bonne paire, essaie encore."); }
  }
});
function kdResetOrder() {
  if (!AS) return; AS.ord = []; document.querySelectorAll(".kd-chip").forEach(b => { b.classList.remove("used"); b.disabled = false; }); document.querySelectorAll(".kd-slot").forEach(x => { x.classList.remove("on", "ok", "no"); x.querySelector("span").textContent = ""; });
}

/* ---- Défi du jour ---- */
V.kdaily = () => {
  const D = kd(), dd = D.daily === kdToday();
  if (!dd) return kdAdventure("daily");
  return `<div class="kd">${kdSky()}<a class="back" href="#/kids">${ico("back", 18)} Accueil</a><div class="kd-pane kd-end"><div class="kd-big">✅</div><h2>Défi du jour réussi !</h2><p class="kd-text">Reviens demain pour un nouveau défi.</p><div class="kd-endc">${KC.html("proud", 150, { sparks: true })}</div><a class="btn kd-next" href="#/kids">Retour à l'accueil</a><button class="btn sec" id="kdreplay" style="margin-top:8px" onclick="location.hash='#/kids/adv/daily'">Rejouer pour le plaisir</button></div></div>`;
};

/* ---- Mon Sirâj : tenues, badges, parcours ---- */
V.album = () => {
  const D = kd(), done = kdAllAdv().filter(x => kdStat(x.id).s > 0).length, tot = K.count(), worn = D.worn;
  const slots = { face: "Visage", neck: "Cou", head: "Tête", back: "Dos", fx: "Magie" };
  return `<div class="kd">${kdSky()}<div class="kd-me"><div class="kd-mec">${KC.html("happy", 190, { sparks: true })}</div><p class="muted small" style="text-align:center">Touche Sirâj : il réagit !</p></div>
  <div class="kd-stats"><div><b>⭐ ${D.stars}</b><span>étoiles</span></div><div><b>🔥 ${E.streak()}</b><span>série</span></div><div><b>${done}/${tot}</b><span>aventures</span></div></div>
  <h3>Les tenues de Sirâj</h3><p class="muted small">Gagne des étoiles en terminant des aventures pour débloquer de nouvelles tenues.</p>
  <div class="kd-wardrobe">${KC.ITEMS.map(it => { const own = KC.owned(it.id), on = worn[it.slot] === it.id; return `<button class="kd-item${own ? "" : " lock"}${on ? " on" : ""}" data-kwear="${it.id}"><span>${own ? it.e : "🔒"}</span><b>${esc(it.n)}</b><small>${own ? (on ? "Portée ✓" : slots[it.slot]) : it.stars + " ⭐"}</small></button>`; }).join("")}</div>
  <h3>Mes badges</h3><div class="kd-badges">${KW.map(w => { const all = kdWorldDone(w) === w.adv.length, boss = kdStat(w.id + "x").s > 0; return `<a class="kd-badge${all ? " on" : ""}" href="#/kids/${w.id}" style="--c:${w.c}"><span>${all ? w.e : "❔"}</span><small>${esc(w.n)}</small>${boss ? `<em>🏆</em>` : ""}</a>`; }).join("")}</div>
  <div class="card" style="margin-top:16px"><h3>Taille du texte</h3><div><button class="pill ${kd().size === "l" ? "" : "on"}" data-ksize="n">Normal</button><button class="pill ${kd().size === "l" ? "on" : ""}" data-ksize="l">Grand</button></div></div>
  <div class="card" style="margin-top:12px"><h3>Pour les grands</h3><p class="muted small">Un parcours plus détaillé en 100 niveaux est disponible pour les adultes et les plus grands.</p><button class="btn sec" data-kmode>Ouvrir le parcours des grands</button></div></div>`;
};

/* ---- Accueil des nouveaux : version enfant ---- */
function renderKidOnb() {
  const s = ONB.step, dots = `<div class="dots">${[0, 1, 2, 3, 4].map(i => `<i class="${i <= s ? "on" : ""}"></i>`).join("")}</div>`, say = (mood, text, size = 150, o = {}) => `<div class="kd-onc">${KC.html(mood, size, o)}</div><div class="bubble c pop">${text}</div>`;
  const GL = [[5, "🐣 Petit explorateur", "5 minutes par jour"], [10, "🚀 Super explorateur", "10 minutes par jour"], [15, "🏆 Grand champion", "15 minutes par jour"]];
  let h = "";
  if (s === 0) h = `<div class="kd-onc">${KC.html("happy", 210, { sparks: true })}</div><div class="bubble c pop2">Salam ! Moi c'est <b>Sirâj</b>, ta lanterne-guide ! Je vais t'apprendre l'islam avec plein d'aventures.</div><button class="btn gold pop3" data-o="next">Salut Sirâj ! 👋</button>`;
  else if (s === 1) h = say("think", "Comment tu t'appelles ?", 130) + `<div class="card"><input type="text" id="kname" maxlength="24" placeholder="Ton prénom" value="${esc(ME().first || "")}" autocomplete="given-name" style="font-size:1.3rem;text-align:center"></div><button class="btn" data-o="next">Continuer</button><button class="btn sec" data-o="next" style="margin-top:8px">Passer</button>`;
  else if (s === 2) h = say("proud", `${ME().first ? "Enchanté " + esc(ME().first) + " !" : "Enchanté !"} Combien de temps veux-tu jouer chaque jour ?`, 120) + GL.map(g => `<button class="opt ${ONB.goal === g[0] ? "sel" : ""}" data-goal="${g[0]}">${g[1]} · ${g[2]}</button>`).join("") + `<button class="btn" data-o="next">Continuer</button>`;
  else if (s === 3) h = say("happy", "Un rappel chaque jour pour ne pas oublier ? <b>Demande à un adulte.</b>", 120) + `<div class="card"><input type="time" id="rtime" value="${ONB.time}"></div><button class="btn" data-o="remind">Activer mon rappel</button><button class="btn sec" data-o="next" style="margin-top:8px">Plus tard</button>${ONB.remind ? `<p class="muted" style="text-align:center">Rappel activé à ${ONB.time} ✓</p>` : ""}`;
  else h = say("proud", "C'est parti pour l'aventure ! 🎉", 170, { sparks: true }) + `<button class="btn gold" data-o="done">Allons-y !</button>`;
  $app.innerHTML = `<div class="onbw slide kd-onb">${dots}${h}</div>`;
  if (s === 4) confetti();
}
document.addEventListener("input", e => { if (e.target.id === "kname") { ME().first = e.target.value.trim().slice(0, 24); E.save(); } });
document.addEventListener("change", e => {
  if (e.target.id !== "set-kid") return;
  E.S.settings.kid = e.target.checked; E.save(); location.hash = e.target.checked ? "#/kids" : "#/home";
});
