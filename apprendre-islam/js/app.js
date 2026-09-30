/* Interface : routage par hash, vues, sessions de questions. */
const $app = document.getElementById("app"), $nav = document.getElementById("nav"), $top = document.getElementById("top"), $toast = document.getElementById("toast");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pct = x => Math.round(x * 100);
const bar = (x, cls = "") => `<div class="bar ${cls}"><i style="width:${pct(x)}%"></i></div>`;
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
let toastT;
function toast(msg) { $toast.textContent = msg; $toast.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => $toast.classList.remove("show"), 3200); }
const go = h => { location.hash = h; };
const celebrate = () => E.evalBadges().forEach(b => toast("Nouveau badge : " + b));

/* ---------- Questions ---------- */
function renderQ(q, el) { // affiche la question, renvoie { evaluate(): true|false|null, answerText }
  let h = `<h3>${esc(q.q)}</h3>`, api;
  if (q.t === "mc" || q.t === "tf") {
    const opts = q.t === "tf" ? ["Vrai", "Faux"] : E.shuffle(q.o.map((t, i) => ({ t, i })));
    const list = q.t === "tf" ? opts.map((t, i) => ({ t, i })) : opts;
    let sel = null;
    el.innerHTML = h + list.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.t)}</button>`).join("");
    el.onclick = e => { const b = e.target.closest(".opt"); if (!b) return; sel = +b.dataset.k; el.querySelectorAll(".opt").forEach(x => x.classList.toggle("sel", x === b)); };
    api = { evaluate: () => sel === null ? null : (q.t === "tf" ? (sel === 0) === q.a : list[sel].i === q.a),
      reveal: ok => { el.querySelectorAll(".opt").forEach((b, k) => { const good = q.t === "tf" ? (k === 0) === q.a : list[k].i === q.a; if (good) b.classList.add("ok"); else if (b.classList.contains("sel")) b.classList.add("ko"); }); },
      answerText: q.t === "tf" ? (q.a ? "Vrai" : "Faux") : q.o[q.a] };
  } else if (q.t === "order") {
    let picked = []; const pool = E.shuffle(q.items.map((t, i) => ({ t, i })));
    const draw = () => { el.innerHTML = h + `<p class="muted">Touche les éléments dans le bon ordre.</p><div class="picked">${picked.map(i => `<button class="chip" data-un="${i}">${picked.indexOf(i) + 1}. ${esc(q.items[i])}</button>`).join("")}</div>
      <div>${pool.filter(o => !picked.includes(o.i)).map(o => `<button class="chip" data-add="${o.i}">${esc(o.t)}</button>`).join(" ")}</div>`; };
    draw();
    el.onclick = e => { const b = e.target.closest(".chip"); if (!b) return; if (b.dataset.add !== undefined) picked.push(+b.dataset.add); else picked = picked.filter(i => i !== +b.dataset.un); draw(); };
    api = { evaluate: () => picked.length < q.items.length ? null : picked.every((v, k) => v === k), reveal() {}, answerText: q.items.join(" → ") };
  } else if (q.t === "match") {
    const rights = E.shuffle(q.pairs.map(p => p[1]));
    el.onclick = null;
    el.innerHTML = h + q.pairs.map((p, i) => `<div class="pair"><b>${esc(p[0])}</b><select data-i="${i}"><option value="">…</option>${rights.map(r => `<option>${esc(r)}</option>`).join("")}</select></div>`).join("");
    api = { evaluate: () => { const s = [...el.querySelectorAll("select")]; return s.some(x => !x.value) ? null : s.every((x, i) => x.value === q.pairs[i][1]); }, reveal() {}, answerText: q.pairs.map(p => p.join(" = ")).join(" · ") };
  } else {
    el.onclick = null;
    el.innerHTML = h + `<input type="text" maxlength="40" autocomplete="off" autocapitalize="off" placeholder="Ta réponse">`;
    api = { evaluate: () => { const v = norm(el.querySelector("input").value); return v.length < 2 ? null : q.ok.some(k => v.includes(norm(k))); }, reveal() {}, answerText: q.e || q.ok[0] };
  }
  return api;
}

/* ---------- Session ---------- */
function runSession(cfg) { // cfg: {kind,title,questions,retry,back,onFinish(res)}
  const total = cfg.questions.length;
  if (!total) { $app.innerHTML = `<div class="card"><p>Rien à faire ici pour l'instant. 🎉</p><a class="btn" href="#/home">Retour</a></div>`; return; }
  let queue = cfg.questions.map(q => ({ q, retry: false })), answered = 0, correct = 0; const wrong = [];
  const step = () => {
    if (!queue.length) return finish();
    const item = queue.shift();
    $app.innerHTML = `<div class="top-s"><button class="x" id="quit">✕</button>${bar(answered / total, "gold")}</div><div class="muted">${esc(cfg.title)}${item.retry ? " · à refaire" : ""}</div><div class="card"><div id="q"></div></div><div id="fb"></div><button class="btn" id="go">Vérifier</button>`;
    const el = document.getElementById("q"), api = renderQ(item.q, el); let checked = false;
    document.getElementById("quit").onclick = () => { if (confirm("Quitter la session ? Ta progression sur cette session sera perdue.")) go(cfg.back || "#/home"); };
    const btn = document.getElementById("go");
    btn.onclick = () => {
      if (checked) return step();
      const ok = api.evaluate();
      if (ok === null) return toast("Choisis ou complète ta réponse d'abord.");
      checked = true; el.classList.add("locked-q"); el.querySelectorAll("select,input").forEach(x => x.disabled = true); api.reveal(ok);
      if (!item.retry) { answered++; if (ok) correct++; else wrong.push(item.q); if (item.q.id && QINDEX[item.q.id]) E.answer(item.q.id, ok); }
      if (!ok && cfg.retry !== false && !item.retry) queue.push({ q: item.q, retry: true });
      document.getElementById("fb").innerHTML = `<div class="fb ${ok ? "ok" : "ko"}"><b>${ok ? "✅ Correct !" : "❌ Pas tout à fait"}</b>${ok ? "" : `<div>Bonne réponse : ${esc(api.answerText)}</div>`}${item.q.e ? `<div class="muted">${esc(item.q.e)}</div>` : ""}</div>`;
      btn.textContent = "Continuer";
    };
  };
  const finish = () => {
    if (cfg.kind === "check") { if (correct) { E.addXP(E.XP.check); toast("+5 XP"); } return cfg.after(); }
    const score = correct / total, res = { score, correct, total, wrong, xp: 0, extra: "" };
    const S = E.S;
    if (cfg.kind === "quiz") { S.stats.quizzes++; res.xp = E.addXP(score >= 0.6 ? E.XP.quiz : 5); if (score === 1) S.perfect = true; }
    else if (cfg.kind === "review") { S.stats.reviews++; res.xp = E.addXP(E.XP.review); }
    else if (cfg.kind === "free") res.xp = E.addXP(E.XP.free);
    else if (cfg.kind === "daily") { if (!E.dayState().daily && score >= 0.6) { E.dayState().daily = true; S.stats.dailies++; res.xp = E.addXP(E.XP.daily); } else E.touch(); }
    else if (cfg.kind === "exam") {
      const pass = score >= E.EXAM_PASS; res.pass = pass; S.stats.exams += pass && !S.exams[cfg.level] ? 1 : 0;
      if (pass) S.exams[cfg.level] = true; res.xp = E.addXP(pass ? E.XP.exam : 10);
    }
    E.save(); celebrate();
    const m = cfg.chapter ? E.mastery(cfg.chapter) : null;
    $app.innerHTML = `<div class="card"><div class="score">${correct}/${total}</div><p style="text-align:center">${cfg.kind === "exam" ? (res.pass ? "🎓 Examen réussi !" : "Examen non validé (75 % requis). Révise puis réessaie.") : score >= 0.8 ? "🎉 Bravo !" : score >= 0.6 ? "👍 Bien, continue !" : "💪 Il faut réviser un peu."}</p>
      <p style="text-align:center">+${res.xp} XP</p>${m !== null ? `<p>Maîtrise du chapitre : <b>${pct(m)} %</b>${bar(m)}<span class="muted">${m >= E.UNLOCK ? "🔓 Suite débloquée" : "70 % requis pour débloquer la suite. Les questions ratées reviendront en révision."}</span></p>` : ""}
      ${wrong.length ? `<p class="muted">🔄 À revoir : ${wrong.length} question(s) ajoutée(s) à tes révisions.</p>` : ""}</div>
      <a class="btn" href="${E.nextAction().href}">Continuer</a><a class="btn sec" href="${cfg.back || "#/home"}">Retour</a>`;
  };
  step();
}

/* ---------- Vues ---------- */
const V = {};
V.home = () => {
  const S = E.S, n = E.currentLevel(), na = E.nextAction(), plan = E.goalPlan(), d = E.dayState(), due = E.dueQids().length, weak = E.weakChapters().slice(0, 3);
  const lv = n >= LEVELS.length ? "—" : n;
  return `<div class="card hero"><div class="stats"><div><b>🔥 ${E.streak()}</b>série</div><div><b>⭐ ${lv}</b>niveau</div><div><b>📊 ${pct(E.progress())} %</b>parcours</div></div></div>
  <div class="card"><h3>🎯 Objectif du jour · ${S.goal} min</h3>
    <div class="muted">Leçons ${Math.min(d.lessons, plan.lessons)}/${plan.lessons} · Questions ${Math.min(d.questions, plan.questions)}/${plan.questions}${due ? ` · ${due} à réviser` : ""}</div>
    ${bar(Math.min(1, (d.lessons / plan.lessons + d.questions / plan.questions) / 2))}
    <div class="muted">${na.sub}</div><a class="btn" href="${na.href}">${na.label} →</a></div>
  ${due ? `<a class="card ch" href="#/review"><div class="row"><div><h3>🔄 À revoir</h3><span class="muted">${due} question(s) à réviser. Cette notion demande une courte révision.</span></div><b>→</b></div></a>` : ""}
  <a class="card ch" href="#/daily"><div class="row"><div><h3>🎯 Défi quotidien</h3><span class="muted">${d.daily ? "Fait aujourd'hui ✅" : "5 questions · +30 XP"}</span></div><b>→</b></div></a>
  ${weak.length ? `<div class="card"><h3>À améliorer</h3>${weak.map(c => `<a class="ch" href="#/chapter/${c.id}"><div class="row"><span>${esc(c.title)}</span><b>${pct(E.mastery(c.id))} %</b></div></a>`).join("")}</div>` : ""}`;
};

V.path = () => {
  const cur = E.currentLevel(); let h = `<h2>Parcours 0 → 100</h2><p class="muted">Niveaux 0 à ${LEVELS.length - 1} disponibles. Les suivants arrivent avec le contenu.</p>`;
  for (let s = 0; s <= 10; s++) {
    const a = s === 0 ? 0 : (s - 1) * 10 + 1, b = s === 0 ? 0 : s * 10;
    if (s === 0) h += `<div class="stage">Niveau 0 · ${STAGES[0]}</div><div class="nodes">`; else h += `<div class="stage">Niveaux ${a}–${b} · 🎓 ${STAGES[s]}</div><div class="nodes">`;
    for (let n = a; n <= b; n++) {
      const impl = !!LEVELS[n], cls = !impl ? "soon" : E.levelComplete(n) ? "done" : n === cur ? "cur" : E.levelUnlocked(n) ? "open" : "";
      h += `<a class="node ${cls}" href="${impl ? "#/level/" + n : "#/path"}" title="Niveau ${n}">${E.levelComplete(n) ? "✓" : !impl ? "🚧" : (!E.levelUnlocked(n) ? "🔒" : n)}</a>`;
    }
    h += "</div>";
  }
  return h;
};

V.level = n => {
  const L = LEVELS[+n]; if (!L) return V.path();
  const lock = !E.levelUnlocked(+n);
  return `<a href="#/path" class="muted">← Parcours</a><h2>Niveau ${n} · ${esc(L.unit)}</h2>${lock ? `<div class="card">🔒 Termine le niveau précédent${needsExam(+n - 1) ? " et son examen" : ""} pour débloquer celui-ci.</div>` : ""}
  ${L.chapters.map(c => chapterCard(c)).join("")}
  ${needsExam(+n) ? `<div class="card"><h3>🏆 Examen des niveaux 0–${n}</h3><p class="muted">30 questions mixtes, 75 % requis pour débloquer la suite.</p>${E.S.exams[n] ? "<b>✅ Réussi</b>" : E.examReady(+n) ? `<a class="btn" href="#/exam/${n}">Passer l'examen</a>` : `<span class="muted">Disponible quand tous les chapitres sont maîtrisés à 70 %.</span>`}</div>` : ""}`;
};
function chapterCard(c) {
  const m = E.mastery(c.id), un = E.chapterUnlocked(c.id), sub = SUBJECTS.find(s => s.id === c.subject);
  return `<a class="card ch ${un ? "" : "locked"}" href="${un ? "#/chapter/" + c.id : "#/level/" + c.level}"><div class="row"><div><h3>${un ? "" : "🔒 "}${esc(c.title)}</h3><span class="tag">${sub.icon} ${esc(sub.name)}</span><span class="muted">${E.lessonsDone(c.id)}/${c.lessons.length} leçons</span></div><b>${pct(m)} %</b></div>${bar(m, m >= E.UNLOCK ? "" : "gold")}</a>`;
}

V.chapter = id => {
  const c = CHAPTERS[id]; if (!c) return V.path();
  if (!E.chapterUnlocked(id)) return `<div class="card">🔒 Chapitre verrouillé. Maîtrise d'abord le précédent (70 %).</div><a class="btn" href="#/path">Retour</a>`;
  const m = E.mastery(id);
  return `<a href="#/level/${c.level}" class="muted">← Niveau ${c.level}</a><h2>${esc(c.title)}</h2>
  <div class="card"><div class="row"><span>Maîtrise</span><b>${pct(m)} %</b></div>${bar(m)}<span class="muted">${m >= E.UNLOCK ? "🔓 Chapitre validé. Les révisions l'amèneront vers 100 %." : "70 % requis pour débloquer la suite."}</span></div>
  ${c.lessons.map((l, i) => `<a class="card ch" href="#/lesson/${id}/${i}"><div class="row"><div><h3>📖 Leçon ${i + 1} · ${esc(l.t)}</h3></div><b>${E.S.lessons[id + ":" + i] ? "✅" : "→"}</b></div></a>`).join("")}
  <a class="btn" href="#/quiz/${id}">📝 Quiz du chapitre</a>
  <div class="card" style="margin-top:12px"><h3>📚 Sources</h3>${c.sources.map(s => `<div class="src">• ${esc(s)}</div>`).join("")}</div>`;
};

V.lesson = (id, i) => {
  const c = CHAPTERS[id], l = c && c.lessons[+i]; if (!l) return V.path();
  $app.innerHTML = `<a href="#/chapter/${id}" class="muted">← ${esc(c.title)}</a><h2>${esc(l.t)}</h2><div class="card body">${l.body.split("\n\n").map(p => `<p>${esc(p)}</p>`).join("")}
    ${l.ar ? `<div class="ar">${esc(l.ar)}</div><div class="ph">${esc(l.ph)}</div>` : ""}</div>
    <button class="btn sec" id="speak">🎧 Écouter</button><button class="btn" id="cont">Continuer → question rapide</button>`;
  document.getElementById("speak").onclick = () => { if (!window.speechSynthesis) return toast("Audio non disponible sur cet appareil."); speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(l.body); u.lang = "fr-FR"; speechSynthesis.speak(u); };
  document.getElementById("cont").onclick = () => {
    if (window.speechSynthesis) speechSynthesis.cancel();
    const after = () => { const xp = E.completeLesson(id, +i); if (xp) toast("+10 XP"); celebrate(); go(+i + 1 < c.lessons.length ? `#/lesson/${id}/${+i + 1}` : `#/quiz/${id}`); };
    if (!l.check) return after();
    runSession({ kind: "check", title: "Question rapide", questions: [l.check], retry: false, back: `#/chapter/${id}`, after });
  };
};

V.quiz = id => {
  const c = CHAPTERS[id]; if (!c) return V.quizhub();
  if (!E.chapterUnlocked(id)) return V.chapter(id);
  runSession({ kind: "quiz", title: "Quiz · " + c.title, questions: c.quiz, chapter: id, back: "#/chapter/" + id });
};
V.review = () => runSession({ kind: "review", title: "🔄 Révision", questions: E.dueQids().slice(0, E.S.goal).map(q => QINDEX[q]), back: "#/home" });
V.daily = () => E.dayState().daily ? `<div class="card">🎯 Défi du jour déjà relevé. À demain !</div><a class="btn" href="#/home">Retour</a>` : runSession({ kind: "daily", title: "🎯 Défi quotidien", questions: E.buildDaily(), back: "#/home" });
V.exam = n => { if (!E.examReady(+n)) return `<div class="card">L'examen n'est pas disponible (chapitres à maîtriser à 70 % ou examen déjà réussi).</div><a class="btn" href="#/level/${n}">Retour</a>`; runSession({ kind: "exam", title: "🏆 Examen niveau " + n, questions: E.buildExam(+n), retry: false, level: +n, back: "#/level/" + n }); };

let quizSubject = "all";
V.quizhub = () => {
  const ex = LEVELS.filter(L => E.examReady(L.n));
  return `<h2>🧠 Quiz</h2><div class="chips">${[["all", "Toutes"], ...SUBJECTS.map(s => [s.id, s.icon + " " + s.name])].map(([id, n]) => `<button class="pill ${quizSubject === id ? "on" : ""}" data-sub="${id}">${esc(n)}</button>`).join("")}</div>
  <a class="btn" href="#/free/10">⚡ Quiz rapide (10 questions)</a><a class="btn sec" href="#/free/20">🔀 Quiz mixte (20 questions)</a><a class="btn sec" href="#/daily">🎯 Défi quotidien</a>
  <a class="btn sec" href="#/review">🔄 Révision (${E.dueQids().length})</a>
  ${ex.map(L => `<a class="btn" href="#/exam/${L.n}">🏆 Examen niveau ${L.n}</a>`).join("")}<p class="muted">Les quiz utilisent les chapitres que tu as débloqués. Ils comptent pour ta maîtrise.</p>`;
};
V.free = n => {
  const ids = E.unlockedQids().filter(id => quizSubject === "all" || CHAPTERS[QINDEX[id].chapter].subject === quizSubject);
  runSession({ kind: "free", title: "Quiz libre", questions: E.pick(ids, +n), back: "#/quiz" });
};

V.subjects = () => `<h2>Matières</h2>${SUBJECTS.map(s => { const m = E.subjectMastery(s.id); return `<a class="card ch" href="#/subject/${s.id}"><div class="row"><div><h3>${s.icon} ${esc(s.name)}</h3><span class="muted">${m === null ? "Contenu à venir" : Object.values(CHAPTERS).filter(c => c.subject === s.id).length + " chapitre(s) disponible(s)"}</span></div><b>${m === null ? "🚧" : pct(m) + " %"}</b></div>${m === null ? "" : bar(m)}</a>`; }).join("")}`;
V.subject = sid => {
  const s = SUBJECTS.find(x => x.id === sid), cs = Object.values(CHAPTERS).filter(c => c.subject === sid);
  return `<a href="#/subjects" class="muted">← Matières</a><h2>${s.icon} ${esc(s.name)}</h2>${cs.length ? cs.map(chapterCard).join("") : `<div class="card">🚧 Ce parcours est en préparation. Il sera développé avec des sources fiables.</div>`}`;
};

/* Carte historique (schématique) */
const PLACES = [
  { id: "mecque", n: "La Mecque", lon: 39.83, lat: 21.42, ev: ["Naissance du Prophète ﷺ (vers 570)", "Enfance et jeunesse", "Première révélation (grotte de Hira, près de La Mecque)", "La Kaaba"], ch: ["c6-arabie", "c6-naissance", "c7-enfance", "c7-jeunesse", "c8-revelation"], pers: "Abdallah, Amina, Abd al-Muttalib, Abu Talib, Khadija" },
  { id: "medine", n: "Médine", lon: 39.61, lat: 24.47, ev: ["Hégire (622) : arrivée du Prophète ﷺ", "Mort du Prophète ﷺ"], ch: ["c0-muhammad"], pers: "Le Prophète ﷺ, Abu Bakr", soon: "Le parcours de la période médinoise arrive bientôt." },
  { id: "taif", n: "Taïf", lon: 40.4, lat: 21.27, ev: ["Voyage du Prophète ﷺ à Taïf pour appeler à l'islam"], ch: [], soon: "Chapitre à venir." },
  { id: "badr", n: "Badr", lon: 38.79, lat: 23.78, ev: ["Bataille de Badr (2 H, Ramadan)"], ch: [], soon: "Chapitre à venir." },
  { id: "jerusalem", n: "Jérusalem", lon: 35.23, lat: 31.78, ev: ["Mentionnée avec Al-Aqsa dans le voyage nocturne (Coran 17:1)", "Première direction de prière avant la Kaaba"], ch: [], soon: "Chapitre à venir." },
  { id: "bosra", n: "Bosra (Syrie)", lon: 36.48, lat: 32.52, ev: ["Voyages de commerce vers la Syrie dans la jeunesse du Prophète ﷺ"], ch: ["c7-jeunesse"], pers: "Muhammad ﷺ, Abu Talib" },
];
let mapSel = "mecque";
V.map = () => {
  const X = lon => (lon - 33) / 13 * 400, Y = lat => (35 - lat) / 17 * 500, p = PLACES.find(x => x.id === mapSel);
  return `<h2>🗺️ Carte historique</h2><svg class="map" viewBox="0 0 400 500" role="img" aria-label="Carte schématique"><text x="10" y="20" font-size="10" fill="#6b766f">Carte schématique (positions approximatives)</text>
  ${PLACES.map(q => `<g class="pin ${q.id === mapSel ? "on" : ""}" data-pin="${q.id}"><circle cx="${X(q.lon)}" cy="${Y(q.lat)}" r="9"/><text x="${X(q.lon) + (["mecque", "badr"].includes(q.id) ? -12 : 12)}" y="${Y(q.lat) + 4}" text-anchor="${["mecque", "badr"].includes(q.id) ? "end" : "start"}">${esc(q.n)}</text></g>`).join("")}</svg>
  <div class="card" style="margin-top:12px"><h3>📍 ${esc(p.n)}</h3><b>📅 Événements</b>${p.ev.map(e => `<div>• ${esc(e)}</div>`).join("")}${p.pers ? `<p><b>👤 Personnages</b> : ${esc(p.pers)}</p>` : ""}
  ${p.ch.length ? `<b>📖 Histoire & quiz</b>${p.ch.map(id => `<a class="btn sec" href="#/chapter/${id}">${esc(CHAPTERS[id].title)}</a>`).join("")}` : ""}${p.soon ? `<p class="muted">🚧 ${esc(p.soon)}</p>` : ""}</div>`;
};

/* Assistant */
V.ai = () => `<h2>🤖 Assistant</h2><div class="card"><p class="muted">Mode hors ligne : je réponds uniquement à partir de réponses préparées et sourcées. Si je ne trouve pas de source, je le dis. Je ne remplace pas un savant ou un imam.</p>
  <form class="chat" id="askf"><input type="text" id="askq" placeholder="Ex. : Pourquoi l'Hégire ?" maxlength="120"><button class="btn">OK</button></form></div><div id="askout"></div>
  <div class="card"><b>Exemples</b><div class="chips" style="margin-top:8px">${KB.slice(0, 6).map(e => `<button class="pill" data-ask="${esc(e.title)}">${esc(e.title)}</button>`).join("")}</div></div>`;
function answer(qs) {
  const e = askAI(qs), out = document.getElementById("askout"); if (!out) return;
  out.innerHTML = e ? `<div class="card"><h3>${esc(e.title)}</h3><p>${esc(e.a)}</p>${e.nuance ? `<div class="fb ko" style="background:rgba(224,168,46,.2)"><b>⚠️ Nuance</b><br>${esc(e.nuance)}</div>` : ""}<b>📚 Sources</b>${e.src.map(s => `<div class="src"><span class="tag">${esc(s[0])}</span>${esc(s[1])}</div>`).join("")}</div>`
    : `<div class="card">Je n'ai pas de réponse sourcée à cette question pour l'instant, et je préfère ne rien inventer. Reformule, ou demande à une personne de confiance formée en sciences islamiques.</div>`;
}

V.profile = () => {
  const S = E.S, n = E.currentLevel();
  return `<h2>Profil</h2><div class="card"><div class="stats"><div><b>${n >= LEVELS.length ? "—" : n}</b>niveau</div><div><b>${S.xp}</b>XP</div><div><b>${pct(E.progress())} %</b>progression</div></div>
  <p>🔥 Série : <b>${E.streak()} jour(s)</b> · Quiz réussis : <b>${S.stats.total ? pct(S.stats.ok / S.stats.total) : 0} %</b></p><p class="muted">Niveau 100 = parcours de l'application terminé, pas « tout l'Islam ».</p></div>
  <div class="card"><h3>Maîtrise par matière</h3>${SUBJECTS.map(s => { const m = E.subjectMastery(s.id); return `<div class="row"><span>${s.icon} ${esc(s.name)}</span><b>${m === null ? "à venir" : pct(m) + " %"}</b></div>${m === null ? "" : bar(m)}`; }).join("")}</div>
  <div class="card"><h3>Objectif quotidien</h3><div class="chips">${[5, 10, 15, 20].map(m => `<button class="pill ${S.goal === m ? "on" : ""}" data-goal="${m}">${m} min</button>`).join("")}</div></div>
  <div class="card"><h3>🏆 Badges</h3>${E.BADGES.map(b => `<div>${S.badges[b[0]] ? b[1] : "🔒"} ${esc(b[2])}</div>`).join("")}</div>
  <button class="btn sec" id="rst">Réinitialiser ma progression</button>`;
};

/* ---------- Routage ---------- */
const NAV = [["home", "🏠", "Accueil"], ["path", "🛣️", "Parcours"], ["subjects", "📚", "Matières"], ["map", "🗺️", "Carte"], ["quiz", "🧠", "Quiz"], ["ai", "🤖", "IA"]];
function route() {
  const [r, a, b] = (location.hash.slice(2) || "home").split("/");
  const name = r === "quiz" && a ? "quiz" : r;
  const fn = { home: V.home, path: V.path, level: V.level, chapter: V.chapter, lesson: V.lesson, quiz: a ? V.quiz : V.quizhub, review: V.review, daily: V.daily, exam: V.exam, free: V.free, subjects: V.subjects, subject: V.subject, map: V.map, ai: V.ai, profile: V.profile }[r] || V.home;
  const html = fn(a, b);
  if (typeof html === "string") $app.innerHTML = html;
  const tab = { level: "path", chapter: "path", lesson: "path", subject: "subjects", free: "quiz", review: "quiz", daily: "quiz", exam: "quiz" }[r] || r;
  $nav.innerHTML = NAV.map(([id, ic, n]) => `<a href="#/${id}" class="${tab === id ? "on" : ""}"><span>${ic}</span>${n}</a>`).join("");
  $top.innerHTML = `<b>🕌 Sirat</b><span><a href="#/profile">🔥 ${E.streak()}</a><a href="#/profile">⭐ ${E.S.xp}</a></span>`;
  if (r !== "lesson" && window.speechSynthesis) speechSynthesis.cancel();
  window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
document.addEventListener("click", e => {
  const t = e.target.closest("[data-sub],[data-pin],[data-goal],[data-ask],#rst");
  if (!t) return;
  if (t.dataset.sub) { quizSubject = t.dataset.sub; route(); }
  else if (t.dataset.pin) { mapSel = t.dataset.pin; route(); }
  else if (t.dataset.goal) { E.S.goal = +t.dataset.goal; E.save(); route(); }
  else if (t.dataset.ask) { document.getElementById("askq").value = t.dataset.ask; answer(t.dataset.ask); }
  else if (t.id === "rst" && confirm("Effacer toute ta progression ?")) { E.reset(); route(); }
});
document.addEventListener("submit", e => { if (e.target.id === "askf") { e.preventDefault(); answer(document.getElementById("askq").value); } });
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});
route();
