/* Parcours enfants, partie 2 : jeux (mémoire, vrai/faux éclair), sourates à apprendre, mots arabes, erreurs à revoir. */
const kd2Pool = () => { const tf = [], match = [], all = []; KW.forEach(w => w.adv.forEach(a => a.q.forEach((q, i) => { all.push({ a: a.id, i, q }); if (q.t === "tf") tf.push({ a: a.id, i, q }); if (q.t === "match") match.push({ a: a.id, i, q }); }))); return { tf, match, all }; };
const kd2Day = () => E.dayStr();
const kd2Reward = (key, stars) => { const D = kd(); D.games = D.games || {}; if (D.games[key] === kd2Day()) return 0; D.games[key] = kd2Day(); D.stars += stars; E.addXP(10); E.save(); return stars; };
const kd2Shuf = a => K.shuffle(a, Math.floor(Math.random() * 1e9));
const kd2Back = (to, label) => `<a class="back" href="${to}">${ico("back", 18)} ${label}</a>`;

/* ---- Jeux ---- */
V.kgames = () => { const D = kd(), g = D.games || {}, t = kd2Day();
  const card = (href, e, n, d, done) => `<a class="kd-game${done ? " done" : ""}" href="${href}"><span class="kd-ge">${e}</span><div><b>${n}</b><small>${d}</small></div>${done ? `<span class="kd-gd">✓</span>` : ""}</a>`;
  const nm = kdMiss().length;
  return `<div class="kd">${kdSky()}<section class="kd-gh"><div>${KC.html("wow", 110, { sparks: true })}</div><div><h2>Jeux</h2><p>Joue pour réviser, sans t'en rendre compte !</p></div></section>
  <div class="kd-games">
    ${card("#/kmem", "🃏", "Jeu de mémoire", "Retrouve les paires : mot et sens", g.mem === t)}
    ${card("#/kfast", "⚡", "Vrai ou faux éclair", "60 secondes, réponds vite !", g.fast === t)}
    ${card("#/ksoura", "📖", "Apprendre une sourate", "Verset par verset, avec le sens", false)}
    ${card("#/kdico", "🔤", "Mes mots arabes", "Le dico de Sirâj", false)}
    ${card("#/kids/adv/miss", "🔁", "Mes erreurs", nm ? `${nm} question${nm > 1 ? "s" : ""} à revoir` : "Rien à revoir, bravo !", !nm)}
  </div><p class="muted small" style="text-align:center">Chaque jeu rapporte une étoile bonus par jour.</p></div>`; };

/* Jeu de mémoire : paires issues des questions « Relie ». */
let MEM = null;
V.kmem = () => {
  const { match } = kd2Pool(); const pairs = kd2Shuf(match.flatMap(m => m.q.pairs.map(p => [p[0], p[1]]))); const seen = new Set(), pick = [];
  for (const p of pairs) { if (seen.has(p[0]) || seen.has(p[1])) continue; seen.add(p[0]); seen.add(p[1]); pick.push(p); if (pick.length === 6) break; }
  const cards = kd2Shuf(pick.flatMap((p, i) => [{ id: i, t: p[0] }, { id: i, t: p[1] }]));
  MEM = { cards, open: [], found: 0, moves: 0, lock: false, n: pick.length };
  return `<div class="kd">${kdSky()}${kd2Back("#/kgames", "Jeux")}<h2>🃏 Jeu de mémoire</h2><p class="muted">Retourne deux cartes : un mot et son sens vont ensemble.</p>
  <div class="kd-memhead"><span id="mmv">0 essai</span><span id="mmf">0/${pick.length}</span></div><div class="kd-mem">${cards.map((c, i) => `<button class="kd-mc" data-kmc2="${i}"><span class="f">❓</span><span class="b">${esc(c.t)}</span></button>`).join("")}</div>
  <div class="kd-gsj">${KC.html("think", 90, { cls: "kd-mini" })}</div></div>`;
};

/* Vrai ou faux éclair. */
let FAST = null;
V.kfast = () => {
  const { tf } = kd2Pool(); FAST = { qs: kd2Shuf(tf), i: 0, ok: 0, ko: 0, t: 60, run: false, done: false };
  return `<div class="kd">${kdSky()}${kd2Back("#/kgames", "Jeux")}<h2>⚡ Vrai ou faux éclair</h2><p class="muted">Réponds à un maximum d'affirmations en 60 secondes.</p>
  <div id="kfst" class="kd-fast"><div class="kd-fring"><b id="kft">60</b></div><div class="kd-fmid">${KC.html("happy", 120, { sparks: true })}</div><button class="btn gold kd-next" data-kfstart>▶ Commencer</button></div></div>`;
};
function kdFastNext() {
  const st = document.getElementById("kfst"); if (!st || !FAST) return; const q = FAST.qs[FAST.i % FAST.qs.length].q;
  st.innerHTML = `<div class="kd-fhead"><span class="kd-ftime" id="kft">${FAST.t}</span><span>✅ ${FAST.ok} · ❌ ${FAST.ko}</span></div><div class="kd-fq">${esc(q.q)}</div>
    <div class="kd-tf"><button class="kd-opt t" data-kfa="1"><span>✅ Vrai</span></button><button class="kd-opt f" data-kfa="0"><span>❌ Faux</span></button></div><div class="kd-ffb" id="kffb"></div><div class="kd-fc">${KC.html("think", 80, { cls: "kd-mini", tap: false })}</div>`;
}
function kdFastEnd() {
  const st = document.getElementById("kfst"); if (!st) return; clearInterval(FAST.tm); FAST.done = true;
  const bonus = FAST.ok >= 8 ? kd2Reward("fast", 1) : 0; SND.win(); if (FAST.ok >= 8) confetti();
  const best = Math.max(kd().fastBest || 0, FAST.ok); kd().fastBest = best; E.save();
  st.innerHTML = `<div class="kd-pane kd-end"><div class="kd-big">⚡</div><h2>${FAST.ok} bonne${FAST.ok > 1 ? "s" : ""} réponse${FAST.ok > 1 ? "s" : ""} !</h2><p class="kd-text">Ton record : ${best}${bonus ? " · +1 ⭐ bonus" : ""}</p><div class="kd-endc">${KC.html(FAST.ok >= 8 ? "proud" : "happy", 130, { sparks: true })}</div><a class="btn kd-next" href="#/kfast">Rejouer</a><a class="btn sec" href="#/kgames" style="margin-top:8px">Retour aux jeux</a></div>`;
}

/* ---- Mes mots arabes ---- */
V.kdico = () => {
  const items = []; KW.forEach(w => w.adv.forEach(a => a.cards.forEach((c, i) => { if (c.ar) items.push({ a, w, c, i }); })));
  const have = items.filter(x => kdStat(x.a.id).s > 0).length;
  return `<div class="kd">${kdSky()}${kd2Back("#/kgames", "Jeux")}<h2>🔤 Mes mots arabes</h2><p class="muted">Le dico de Sirâj : ${have}/${items.length} mots débloqués. Termine l'aventure d'un mot pour le débloquer. Touche un mot pour l'écouter.</p>
  <div class="kd-dico">${items.map(x => { const ok = kdStat(x.a.id).s > 0; return ok ? `<button class="kd-word" style="--c:${x.w.c}" data-kword="${x.a.id}|${x.i}"><span class="kd-wa" dir="rtl" lang="ar">${esc(x.c.ar)}</span><b>${esc(x.c.t)}</b><small>${esc(x.c.x.length > 90 ? x.c.x.slice(0, 88) + "…" : x.c.x)}</small><i>🔊</i></button>` : `<div class="kd-word lock"><span class="kd-wa">🔒</span><b>${esc(x.w.n)}</b><small>Termine « ${esc(x.a.n)} »</small></div>`; }).join("")}</div></div>`;
};

/* ---- Sourates ---- */
let SR = null;
V.ksoura = (id) => {
  const list = K.surahs; if (!list.length) return `<div class="kd">${kd2Back("#/kgames", "Jeux")}<p>Les sourates ne sont pas disponibles.</p></div>`;
  const D = kd(); D.sur = D.sur || {};
  if (!id) return `<div class="kd">${kdSky()}${kd2Back("#/kgames", "Jeux")}<h2>📖 Apprendre une sourate</h2><p class="muted">Lis chaque verset, écoute-le, comprends son sens, puis teste-toi.</p>
  <div class="kd-games">${list.map(s => { const d = D.sur[s.id] || 0; return `<a class="kd-game${d >= 3 ? " done" : ""}" href="#/ksoura/${s.id}"><span class="kd-ge">${s.e}</span><div><b>${esc(s.n)}</b><small>${s.v.length} versets · ${"★".repeat(d)}${"☆".repeat(3 - d)}</small></div>${d >= 3 ? `<span class="kd-gd">✓</span>` : ""}</a>`; }).join("")}</div><p class="muted small">Texte arabe et phonétique issus du parcours principal. Pour bien apprendre la récitation, écoute un récitant avec un adulte ou un enseignant.</p></div>`;
  const s = list.find(x => x.id === id); if (!s) return V.ksoura();
  SR = { s, mode: "read", i: 0, ok: 0 };
  return `<div class="kd">${kdSky()}${kd2Back("#/ksoura", "Sourates")}<h2>${s.e} ${esc(s.n)}</h2><div class="kd-tabs"><button class="on" data-ksm="read">📖 Lire</button><button data-ksm="quiz">🧩 Teste-toi</button></div><div id="ksb"></div></div>`;
};
function kdSrRender() {
  const box = document.getElementById("ksb"); if (!box || !SR) return; const s = SR.s;
  document.querySelectorAll(".kd-tabs button").forEach(b => b.classList.toggle("on", b.dataset.ksm === SR.mode));
  if (SR.mode === "read") {
    box.innerHTML = s.v.map((v, i) => `<div class="kd-verse"><div class="kd-vn">${i + 1}</div><div class="kd-vb"><div class="kd-var" dir="rtl" lang="ar">${esc(v.ar)}</div><div class="kd-vph">${esc(v.ph)}</div><div class="kd-vfr">${esc(v.fr)}</div></div><button class="kd-arb" data-ksay="${i}" aria-label="Écouter le verset">🔊</button></div>`).join("") + `<button class="btn kd-next" data-ksm="quiz">🧩 Je me teste</button>`;
  } else {
    if (SR.i >= s.v.length) { const D = kd(); D.sur = D.sur || {}; const sc = SR.ok >= s.v.length ? 3 : SR.ok >= s.v.length * .7 ? 2 : 1; const first = !D.sur[s.id]; D.sur[s.id] = Math.max(D.sur[s.id] || 0, sc); if (first) { D.stars += 1; E.addXP(15); } E.save(); SND.win(); confetti();
      box.innerHTML = `<div class="kd-pane kd-end"><div class="kd-stars3">${[1, 2, 3].map(i => `<span class="${i <= sc ? "on" : ""}" style="animation-delay:${.25 * i}s">★</span>`).join("")}</div><h2>${sc === 3 ? "Parfait !" : "Bien joué !"}</h2><p class="kd-text">${SR.ok}/${s.v.length} versets complétés du premier coup${first ? " · +1 ⭐" : ""}</p><div class="kd-endc">${KC.html("proud", 130, { sparks: true })}</div><a class="btn kd-next" href="#/ksoura">Autre sourate</a><button class="btn sec" data-ksm="read" style="margin-top:8px">Relire la sourate</button></div>`; return; }
    const v = s.v[SR.i], words = v.ar.split(/\s+/), hid = words.length > 1 ? (SR.i * 7 + words.length) % words.length : 0, miss = words[hid];
    const pool = [...new Set(s.v.flatMap(x => x.ar.split(/\s+/)))].filter(w => w !== miss), opts = kd2Shuf([miss, ...kd2Shuf(pool).slice(0, 2)]);
    SR.cur = { miss, hid };
    box.innerHTML = `<div class="kd-pane"><p class="muted">Verset ${SR.i + 1}/${s.v.length} : trouve le mot qui manque</p><div class="kd-var big" dir="rtl" lang="ar">${words.map((w, k) => k === hid ? `<span class="kd-blank" id="kblank">＿＿＿</span>` : esc(w)).join(" ")}</div><div class="kd-vph">${esc(v.ph)}</div><div class="kd-vfr">${esc(v.fr)}</div>
      <div class="kd-wopts">${opts.map(o => `<button class="kd-opt" data-kso="${esc(o)}"><span dir="rtl" lang="ar" style="text-align:center;font:400 1.8rem var(--far)">${esc(o)}</span></button>`).join("")}</div><div id="kfb" class="kd-fb"></div></div>`;
  }
}

/* ---- Événements des jeux ---- */
document.addEventListener("click", e => {
  const t = e.target.closest("[data-kmc2],[data-kfstart],[data-kfa],[data-kword],[data-ksm],[data-ksay],[data-kso],[data-ksnext]"); if (!t) return;
  if (t.matches("[data-kmc2]") && MEM) {
    if (MEM.lock) return; const i = +t.dataset.kmc2, c = MEM.cards[i]; if (t.classList.contains("up") || t.classList.contains("ok")) return;
    t.classList.add("up"); MEM.open.push(i); SND.flip();
    if (MEM.open.length === 2) {
      MEM.moves++; document.getElementById("mmv").textContent = MEM.moves + " essai" + (MEM.moves > 1 ? "s" : ""); const [a, b] = MEM.open, ca = MEM.cards[a], cb = MEM.cards[b], ea = document.querySelector(`[data-kmc2="${a}"]`), eb = document.querySelector(`[data-kmc2="${b}"]`);
      if (ca.id === cb.id) { ea.classList.add("ok"); eb.classList.add("ok"); MEM.found++; MEM.open = []; document.getElementById("mmf").textContent = MEM.found + "/" + MEM.n; SND.correct(); const sj = document.querySelector(".kd-gsj .kc"); if (sj) { KC.animate(sj, "hop"); KC.say(sj, ["Bravo !", "Bien vu !", "Super !"][MEM.found % 3], 1400); }
        if (MEM.found === MEM.n) { const bonus = kd2Reward("mem", 1); SND.win(); confetti(); const sj2 = document.querySelector(".kd-gsj .kc"); if (sj2) { KC.setMood(sj2, "proud"); KC.animate(sj2, "dance"); KC.say(sj2, `Gagné en ${MEM.moves} essais !${bonus ? " +1 ⭐" : ""}`, 3600); } } }
      else { MEM.lock = true; setTimeout(() => { ea.classList.remove("up"); eb.classList.remove("up"); MEM.open = []; MEM.lock = false; }, 900); }
    }
    return;
  }
  if (t.matches("[data-kfstart]") && FAST) { FAST.run = true; kdFastNext(); FAST.tm = setInterval(() => { if (!document.getElementById("kfst")) return clearInterval(FAST.tm); FAST.t--; const el = document.getElementById("kft"); if (el) { el.textContent = FAST.t; if (FAST.t <= 10) el.classList.add("hot"); } if (FAST.t <= 0) kdFastEnd(); }, 1000); return; }
  if (t.matches("[data-kfa]") && FAST && FAST.run && !FAST.done) {
    const q = FAST.qs[FAST.i % FAST.qs.length].q, v = t.dataset.kfa === "1", ok = v === q.v; if (ok) { FAST.ok++; SND.correct(); } else { FAST.ko++; SND.wrong(); }
    const fb = document.getElementById("kffb"); fb.className = "kd-ffb " + (ok ? "ok" : "ko"); fb.textContent = ok ? "Bravo !" : (q.why || "Oups !"); FAST.i++; FAST.run = false; document.querySelectorAll(".kd-opt").forEach(b => b.disabled = true);
    setTimeout(() => { if (FAST.done) return; FAST.run = true; kdFastNext(); }, ok ? 450 : 1400); return;
  }
  if (t.matches("[data-kword]")) { const [aid, i] = t.dataset.kword.split("|"), f = K.find(aid), c = f.a.cards[+i]; t.classList.add("on"); KA.play(`${aid}-c${i}`, c.t + ". " + c.x); return; }
  if (t.matches("[data-ksm]") && SR) { SR.mode = t.dataset.ksm; SR.i = 0; SR.ok = 0; kdSrRender(); window.scrollTo(0, 0); return; }
  if (t.matches("[data-ksay]") && SR) { const v = SR.s.v[+t.dataset.ksay]; if (!VOICE.playAr(v.ar)) toast("Aucune voix arabe sur cet appareil. Lis la phonétique avec un adulte."); return; }
  if (t.matches("[data-kso]") && SR && SR.cur) {
    if (t.classList.contains("ok") || t.disabled) return; const ok = t.dataset.kso === SR.cur.miss, fb = document.getElementById("kfb");
    if (ok) { document.querySelectorAll(".kd-opt").forEach(b => b.disabled = true); t.classList.add("ok"); const bl = document.getElementById("kblank"); if (bl) { bl.textContent = SR.cur.miss; bl.classList.add("ok"); } if (!SR.bad) SR.ok++; SR.bad = false; SND.correct();
      fb.innerHTML = `<div class="kd-ok"><b>Bravo !</b></div><button class="btn kd-next" data-ksnext>${SR.i + 1 >= SR.s.v.length ? "Terminer 🎉" : "Verset suivant ▶"}</button>`; }
    else { t.classList.add("no"); t.disabled = true; SR.bad = true; SND.wrong(); fb.innerHTML = `<div class="kd-ko"><b>Essaie encore !</b></div>`; }
    return;
  }
  if (t.matches("[data-ksnext]") && SR) { SR.i++; SR.bad = false; kdSrRender(); window.scrollTo(0, 0); }
});
/* Les pages « sourate » se remplissent après l'affichage. */
const kdAfterRoute = () => { if ((location.hash || "").startsWith("#/ksoura/") && document.getElementById("ksb")) kdSrRender(); };
addEventListener("hashchange", () => setTimeout(kdAfterRoute, 30)); setTimeout(kdAfterRoute, 80);
