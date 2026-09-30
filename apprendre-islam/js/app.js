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


/* ---------- Sirâj, le guide ---------- */
function sirajSVG(mood, o = {}) {
  const eyes = {
    happy: `<g class="eyes"><ellipse cx="80" cy="128" rx="12" ry="15" fill="#fff"/><ellipse cx="120" cy="128" rx="12" ry="15" fill="#fff"/><g class="pu"><ellipse cx="82" cy="130" rx="7" ry="9.5" fill="#23170a"/><ellipse cx="122" cy="130" rx="7" ry="9.5" fill="#23170a"/><circle cx="85" cy="125" r="3.2" fill="#fff"/><circle cx="125" cy="125" r="3.2" fill="#fff"/></g></g>`,
    think: `<g class="eyes"><ellipse cx="80" cy="128" rx="12" ry="15" fill="#fff"/><ellipse cx="120" cy="128" rx="12" ry="15" fill="#fff"/><ellipse cx="85" cy="124" rx="7" ry="9.5" fill="#23170a"/><ellipse cx="125" cy="124" rx="7" ry="9.5" fill="#23170a"/><circle cx="88" cy="119" r="3.2" fill="#fff"/><circle cx="128" cy="119" r="3.2" fill="#fff"/></g><path d="M64 106q16-10 32-2M104 104q16-8 32 2" stroke="#23170a" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
    proud: `<path d="M68 130q12-18 24 0M108 130q12-18 24 0" stroke="#23170a" stroke-width="6" fill="none" stroke-linecap="round"/>`,
    oops: `<g class="eyes"><ellipse cx="80" cy="130" rx="12" ry="15" fill="#fff"/><ellipse cx="120" cy="130" rx="12" ry="15" fill="#fff"/><ellipse cx="80" cy="134" rx="7" ry="9.5" fill="#23170a"/><ellipse cx="120" cy="134" rx="7" ry="9.5" fill="#23170a"/><circle cx="83" cy="130" r="3.2" fill="#fff"/><circle cx="123" cy="130" r="3.2" fill="#fff"/></g><path d="M66 116l26-8M134 116l-26-8" stroke="#23170a" stroke-width="4.5" stroke-linecap="round"/>`,
  }[mood];
  const mouth = {
    happy: `<path d="M84 154q16 18 32 0z" fill="#7a2b1e" stroke="#23170a" stroke-width="4" stroke-linejoin="round"/><path d="M90 158q10 7 20 0" fill="#ff8f7d"/>`,
    think: `<path d="M90 158q10 5 22-2" stroke="#23170a" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    proud: `<path d="M80 150q20 30 40 0z" fill="#7a2b1e" stroke="#23170a" stroke-width="4" stroke-linejoin="round"/><path d="M88 158q12 10 24 0" fill="#ff8f7d"/>`,
    oops: `<path d="M88 162q12-10 24 0" stroke="#23170a" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  }[mood];
  const hand = o.hand ? `<g class="hand"><path d="M140 158q22 4 28-22" stroke="#8a5f10" stroke-width="15" fill="none" stroke-linecap="round"/><path d="M140 158q22 4 28-22" stroke="url(#gBody)" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="170" cy="120" r="15" fill="url(#gBody)" stroke="#8a5f10" stroke-width="3"/><ellipse cx="184" cy="124" rx="6" ry="9" transform="rotate(-30 184 124)" fill="url(#gBody)" stroke="#8a5f10" stroke-width="3"/><ellipse cx="166" cy="114" rx="5" ry="7" fill="#fff" opacity=".5"/></g>` : "";
  const sparks = o.sparks ? `<g class="sparks"><path class="sp s1" d="M34 70l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#ffd54a"/><path class="sp s2" d="M166 36l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#fff3b0"/><path class="sp s3" d="M24 168l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#fff3b0"/></g>` : "";
  const inner = `<ellipse class="inner" cx="100" cy="132" rx="38" ry="54" fill="url(#gGlow)"/>`;
  const star = mood === "proud" ? `<path d="M166 64l5 12 13 2-10 9 3 13-11-7-11 7 3-13-10-9 13-2z" fill="#ffd54a" stroke="#c99a1a" stroke-width="2"/>` : "";
  return `<svg viewBox="0 0 200 250" aria-hidden="true"><ellipse cx="100" cy="240" rx="52" ry="8" fill="#000" opacity=".16"/>
  <circle class="glow" cx="100" cy="135" r="98" fill="url(#gGlow)"/>
  <path d="M100 16v24" stroke="#084a2f" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="14" r="9" fill="none" stroke="url(#gBase)" stroke-width="5"/>
  <path d="M58 72q42-56 84 0z" fill="url(#gCap)"/><path d="M72 62q16-22 40-22" stroke="#7be0b0" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>
  <rect x="52" y="68" width="96" height="13" rx="6.5" fill="url(#gBase)"/>
  <path d="M60 81h80q11 42 0 82q-7 32-40 32t-40-32q-11-40 0-82z" fill="url(#gBody)" stroke="#8a5f10" stroke-width="3"/>
  <path d="M132 86q9 40-2 78q-6 22-26 28q34 0 40-30q11-40-2-76z" fill="#8a5f10" opacity=".22"/>
  ${inner}<ellipse cx="74" cy="104" rx="10" ry="22" transform="rotate(14 74 104)" fill="#fff" opacity=".55"/>
  <rect x="62" y="190" width="76" height="15" rx="7" fill="url(#gBase)"/><path d="M70 205h60l-8 24H78z" fill="url(#gBase)"/><rect x="72" y="227" width="56" height="10" rx="5" fill="#084a2f"/>
  <ellipse cx="62" cy="152" rx="10" ry="6.5" fill="#ff8f7d" opacity=".55"/><ellipse cx="138" cy="152" rx="10" ry="6.5" fill="#ff8f7d" opacity=".55"/>
  ${eyes}${mouth}${star}${hand}${sparks}</svg>`;
}
const siraj = (mood = "happy", size = 110, anim = "float", o = {}) => `<span class="sj ${anim}" style="--s:${size}px">${sirajSVG(mood, o)}</span>`;
function confetti() {
  const cols = ["#f2c94c", "#0f7a4d", "#27b77c", "#ffffff", "#e0a82e"];
  for (let i = 0; i < 36; i++) { const d = document.createElement("i"); d.className = "confetti"; d.style.left = Math.random() * 100 + "vw"; d.style.background = cols[i % cols.length]; d.style.setProperty("--dx", (Math.random() * 120 - 60) + "px"); d.style.animationDelay = Math.random() * .4 + "s"; document.body.appendChild(d); setTimeout(() => d.remove(), 2600); }
}
const OK_MSG = ["Machallah, bravo !", "Excellent !", "Tu progresses bien !", "Exactement !"], KO_MSG = ["Pas grave, on apprend !", "Regarde la bonne réponse, tu la retiendras.", "Courage, ça reviendra en révision."];
const pickMsg = a => a[Math.floor(Math.random() * a.length)];
function dayMessage() {
  const S = E.S, t = E.dayStr();
  if (!S.stats.total && !S.xp) return "Salam ! Je suis Sirâj, ta lanterne. Je t'accompagne de 0 à 100. On commence ?";
  if (S.streak.count > 0 && S.streak.last !== t) return `Ta série de ${S.streak.count} jour(s) est en jeu : fais une activité aujourd'hui !`;
  if (E.dueQids().length) return "Quelques notions méritent une courte révision. Prêt ?";
  return pickMsg(["Chaque petite leçon compte. Bismillah !", "Un pas après l'autre, tu avances bien.", "Prêt pour la suite ?"]);
}

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
    document.getElementById("quit").onclick = () => go(cfg.back || "#/home");
    const btn = document.getElementById("go");
    btn.onclick = () => {
      if (checked) return step();
      const ok = api.evaluate();
      if (ok === null) return toast("Choisis ou complète ta réponse d'abord.");
      checked = true; el.classList.add("locked-q"); el.querySelectorAll("select,input").forEach(x => x.disabled = true); api.reveal(ok);
      if (!item.retry) { answered++; if (ok) correct++; else wrong.push(item.q); if (item.q.id && QINDEX[item.q.id]) E.answer(item.q.id, ok); }
      if (!ok && cfg.retry !== false && !item.retry) queue.push({ q: item.q, retry: true });
      ok ? SND.correct() : SND.wrong();
      const ch = CHAPTERS[item.q.chapter], srcs = ch ? `<div class="src">📚 <b>Sources</b> : ${ch.sources.map(esc).join(" · ")}</div>` : "";
      document.getElementById("fb").innerHTML = `<div class="fb ${ok ? "ok" : "ko"}"><div class="fbrow">${siraj(ok ? "proud" : "oops", 64, ok ? "jump" : "shake")}<div><b>${ok ? "✅ " + pickMsg(OK_MSG) : "❌ " + pickMsg(KO_MSG)}</b></div></div>${ok ? "" : `<div>Bonne réponse : <b>${esc(api.answerText)}</b></div>`}${item.q.e ? `<div class="muted">${esc(item.q.e)}</div>` : ""}${srcs}</div>`;
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
    if (score >= 0.8 || res.pass) { confetti(); SND.win(); }
    $app.innerHTML = `<div class="card"><div style="text-align:center">${siraj(score >= 0.8 ? "proud" : score >= 0.6 ? "happy" : "think", 120, score >= 0.8 ? "jump" : "float")}</div><div class="score">${correct}/${total}</div><p style="text-align:center">${cfg.kind === "exam" ? (res.pass ? "🎓 Examen réussi !" : "Examen non validé (65 % requis). Révise puis réessaie.") : score >= 0.8 ? "🎉 Bravo !" : score >= 0.6 ? "👍 Bien, continue !" : "💪 Il faut réviser un peu."}</p>
      <p style="text-align:center">+${res.xp} XP</p>${m !== null ? `<p>Maîtrise du chapitre : <b>${pct(m)} %</b>${bar(m)}<span class="muted">${m >= E.UNLOCK ? "🔓 Suite débloquée" : "60 % requis pour débloquer la suite. Les questions ratées reviendront en révision."}</span></p>` : ""}
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
  return `<div class="guide">${siraj(E.S.xp ? "happy" : "proud", 110, "float")}<div class="bubble">${esc(dayMessage())}</div></div>
  <div class="card hero" style="margin-top:12px"><div class="stats"><div><b>🔥 ${E.streak()}</b>série</div><div><b>⭐ ${lv}</b>niveau</div><div><b>📊 ${pct(E.progress())} %</b>parcours</div></div></div>
  <div class="card"><h3>🎯 Objectif du jour · ${S.goal} min</h3>
    <div class="muted">Leçons ${Math.min(d.lessons, plan.lessons)}/${plan.lessons} · Questions ${Math.min(d.questions, plan.questions)}/${plan.questions}${due ? ` · ${due} à réviser` : ""}</div>
    ${bar(Math.min(1, (d.lessons / plan.lessons + d.questions / plan.questions) / 2))}
    <div class="muted">${na.sub}</div><a class="btn" href="${na.href}">${na.label} →</a></div>
  ${LEVELS.filter(L => E.examReady(L.n)).map(L => `<a class="card ch" href="#/exam/${L.n}"><div class="row"><div><h3>🏆 Examen du niveau ${L.n}</h3><span class="muted">Facultatif · +50 XP · une grande étape à valider</span></div><b>→</b></div></a>`).join("")}
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
  return `<a href="#/path" class="muted">← Parcours</a><h2>Niveau ${n} · ${esc(L.unit)}</h2>${lock ? `<div class="card">🔒 Valide le niveau précédent (60 %) pour débloquer celui-ci, ou active « Tout débloquer » dans Profil → Paramètres.</div>` : ""}
  ${L.chapters.map(c => chapterCard(c)).join("")}
  ${needsExam(+n) ? `<div class="card"><h3>🏆 Examen des niveaux 0–${n}</h3><p class="muted">30 questions mixtes, 65 % pour réussir. Facultatif, repassable à volonté.</p>${E.S.exams[n] ? "<b>✅ Réussi</b>" : E.examReady(+n) ? `<a class="btn" href="#/exam/${n}">Passer l'examen</a>` : `<span class="muted">Disponible quand les chapitres du niveau sont validés (60 %). Facultatif : il ne bloque pas la suite.</span>`}</div>` : ""}`;
};
function chapterCard(c) {
  const m = E.mastery(c.id), un = E.chapterUnlocked(c.id), sub = SUBJECTS.find(s => s.id === c.subject);
  return `<a class="card ch ${un ? "" : "locked"}" href="${un ? "#/chapter/" + c.id : "#/level/" + c.level}"><div class="row"><div><h3>${un ? "" : "🔒 "}${esc(c.title)}</h3><span class="tag">${sub.icon} ${esc(sub.name)}</span><span class="muted">${E.lessonsDone(c.id)}/${c.lessons.length} leçons</span></div><b>${pct(m)} %</b></div>${bar(m, m >= E.UNLOCK ? "" : "gold")}</a>`;
}

V.chapter = id => {
  const c = CHAPTERS[id]; if (!c) return V.path();
  if (!E.chapterUnlocked(id)) return `<div class="card">🔒 Niveau verrouillé. Valide le niveau précédent (60 %) ou active « Tout débloquer » dans Profil → Paramètres.</div><a class="btn" href="#/path">Retour</a>`;
  const m = E.mastery(id);
  return `<a href="#/level/${c.level}" class="muted">← Niveau ${c.level}</a><h2>${esc(c.title)}</h2>
  <div class="card"><div class="row"><span>Maîtrise</span><b>${pct(m)} %</b></div>${bar(m)}<span class="muted">${m >= E.UNLOCK ? "🔓 Chapitre validé. Les révisions l'amèneront vers 100 %." : "60 % requis pour débloquer la suite."}</span></div>
  ${c.lessons.map((l, i) => `<a class="card ch" href="#/lesson/${id}/${i}"><div class="row"><div><h3>📖 Leçon ${i + 1} · ${esc(l.t)}</h3></div><b>${E.S.lessons[id + ":" + i] ? "✅" : "→"}</b></div></a>`).join("")}
  ${c.video ? `<a class="btn sec" href="${esc(c.video.url)}" target="_blank" rel="noopener">🎬 Vidéo : ${esc(c.video.title)}</a>` : ""}
  ${c.fun ? `<div class="card fun"><h3>💡 Le savais-tu ?</h3><p>${esc(c.fun)}</p></div>` : ""}
  <a class="btn" href="#/quiz/${id}">📝 Quiz du chapitre</a>
  <div class="card" style="margin-top:12px"><h3>📚 Sources</h3>${c.sources.map(s => `<div class="src">• ${esc(s)}</div>`).join("")}<p class="muted">Références issues de sources classiques, à faire valider par une personne qualifiée.</p></div>`;
};

V.lesson = (id, i) => {
  const c = CHAPTERS[id], l = c && c.lessons[+i]; if (!l) return V.path();
  $app.innerHTML = `<a href="#/chapter/${id}" class="muted">← ${esc(c.title)}</a><h2>${esc(l.t)}</h2><div class="card body">${l.body.split("\n\n").map(p => `<p>${esc(p)}</p>`).join("")}
    ${l.ar ? `<div class="ar">${esc(l.ar)}</div><div class="ph">${esc(l.ph)}</div>${l.fr ? `<p class="tr"><span class="muted">Traduction du sens :</span> ${esc(l.fr)}</p>` : ""}${l.ref ? `<div class="src">📖 <b>${esc(l.ref)}</b></div>` : ""}` : ""}</div>
    <div class="card"><div class="src">📚 <b>Sources du chapitre</b> : ${c.sources.map(esc).join(" · ")}</div></div>
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
V.exam = n => { if (!E.examReady(+n)) return `<div class="card">L'examen n'est pas disponible (chapitres à maîtriser à 60 % ou examen déjà réussi).</div><a class="btn" href="#/level/${n}">Retour</a>`; runSession({ kind: "exam", title: "🏆 Examen niveau " + n, questions: E.buildExam(+n), retry: false, level: +n, back: "#/level/" + n }); };

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

/* Carte historique : vrais contours (Natural Earth), zoom sur un lieu */
const PLACES = [
  { id: "mecque", n: "La Mecque", lon: 39.83, lat: 21.42, dx: -12, anchor: "end", ev: ["Naissance du Prophète ﷺ (vers 570)", "Enfance et jeunesse", "Première révélation (grotte de Hira, près de La Mecque)", "La Kaaba et le puits de Zamzam", "Traité de Hudaybiya (6 H, près de La Mecque)", "Conquête de La Mecque (8 H)", "Pèlerinage d'adieu (10 H)"], ch: ["c6-arabie", "c6-naissance", "c7-enfance", "c7-jeunesse", "c8-revelation", "c21-appel", "c37-hudaybiya", "c38-conquete", "c20-hajj"], pers: "Abdallah, Amina, Abd al-Muttalib, Abu Talib, Khadija, Abu Bakr" },
  { id: "taif", n: "Taïf", lon: 40.41, lat: 21.27, dy: 14, ev: ["Voyage du Prophète ﷺ à Taïf, après le décès d'Abu Talib et de Khadija"], ch: ["c27-taif"] },
  { id: "medine", n: "Médine", lon: 39.61, lat: 24.47, dx: -12, anchor: "end", ev: ["Hégire : arrivée du Prophète ﷺ (622)", "Construction de la Mosquée du Prophète", "Bataille d'Uhud (3 H, près de Médine)", "Bataille du Fossé (5 H)", "Mort du Prophète ﷺ (11 H)"], ch: ["c30-hijra", "c31-medine", "c32-fraternite", "c33-adhan", "c35-uhud", "c36-khandaq", "c39-adieu"], pers: "Le Prophète ﷺ, Abu Bakr, Bilal, les Ansar" },
  { id: "badr", n: "Badr", lon: 38.79, lat: 23.78, dx: -12, anchor: "end", ev: ["Bataille de Badr (2 H, 17 Ramadan)"], ch: ["c34-badr"] },
  { id: "khaybar", n: "Khaybar", lon: 39.3, lat: 25.7, dx: 12, ev: ["Expédition de Khaybar (7 H)"], ch: [] },
  { id: "tabuk", n: "Tabouk", lon: 36.57, lat: 28.38, dx: 12, ev: ["Expédition de Tabouk (9 H)"], ch: [] },
  { id: "jerusalem", n: "Jérusalem", lon: 35.23, lat: 31.78, dx: -12, anchor: "end", ev: ["Voyage nocturne (Isra) vers Al-Aqsa et ascension (Mi'raj), Coran 17:1", "Première direction de prière (qibla) avant la Kaaba"], ch: ["c28-isra", "c33-adhan"] },
  { id: "bosra", n: "Bosra", lon: 36.48, lat: 32.52, dx: 12, ev: ["Voyages de commerce vers la Syrie dans la jeunesse du Prophète ﷺ", "Rencontre avec le moine Bahira (récit de la Sîra)"], ch: ["c7-jeunesse"] },
  { id: "axoum", n: "Aksoum (Abyssinie)", lon: 38.72, lat: 14.13, dx: 12, ev: ["Émigration de musulmans en Abyssinie, sous la protection du Négus (an-Najashi)"], ch: ["c24-abyssinie"] },
];
const SEAS = [["Mer Méditerranée", 30.5, 34.6], ["Mer Rouge", 39, 18.7], ["Golfe Persique", 51.6, 27.2], ["Mer d'Arabie", 56, 14], ["Golfe d'Aden", 47, 12.2]];
const LANDS = [["ARABIE", 45, 23.5], ["ÉGYPTE", 30.5, 26.5], ["SYRIE (Sham)", 38.2, 35.6], ["YÉMEN", 45, 15.6], ["IRAK", 43.8, 32.6], ["ABYSSINIE", 39.8, 9.8]];
let mapSel = "mecque", mapZoom = false;
const mx = lon => (lon - MAP.lon0) * MAP.kx, my = lat => (MAP.lat1 - lat) * MAP.ky;
V.map = () => {
  const p = PLACES.find(x => x.id === mapSel), w = mapZoom ? 180 : MAP.W, h = mapZoom ? 180 : MAP.H;
  const cx = mx(p.lon), cy = my(p.lat), x0 = mapZoom ? Math.max(0, Math.min(MAP.W - w, cx - w / 2)) : 0, y0 = mapZoom ? Math.max(0, Math.min(MAP.H - h, cy - h / 2)) : 0, k = w / MAP.W;
  const fs = (mapZoom ? 5.2 : 11), r = mapZoom ? 2.6 : 7;
  const pins = PLACES.filter(q => !mapZoom || (Math.abs(mx(q.lon) - cx) < w && Math.abs(my(q.lat) - cy) < h)).map(q => `<g class="pin ${q.id === mapSel ? "on" : ""}" data-pin="${q.id}"><circle cx="${mx(q.lon)}" cy="${my(q.lat)}" r="${r}" stroke-width="${mapZoom ? .8 : 2}"/><text x="${mx(q.lon) + (q.dx || 12) * (mapZoom ? .4 : 1)}" y="${my(q.lat) + (q.dy || 4) * (mapZoom ? .4 : 1)}" text-anchor="${q.anchor || "start"}" font-size="${fs}">${esc(q.n)}</text></g>`).join("");
  return `<h2>🗺️ Carte historique</h2><div class="row" style="margin-bottom:8px"><span class="muted">Touche un lieu</span><button class="pill" id="mapz">${mapZoom ? "🌍 Vue d'ensemble" : "🔍 Zoom sur " + esc(p.n)}</button></div>
  <svg class="map" viewBox="${x0} ${y0} ${w} ${h}" role="img" aria-label="Carte de l'Arabie et des régions voisines"><rect x="0" y="0" width="${MAP.W}" height="${MAP.H}" fill="var(--sea)"/><path d="${MAP.land}" fill="var(--land)" stroke="var(--coast)" stroke-width="${mapZoom ? .5 : 1}" stroke-linejoin="round"/>
  ${LANDS.map(([n, lo, la]) => `<text x="${mx(lo)}" y="${my(la)}" text-anchor="middle" class="lbl-land" font-size="${mapZoom ? 6 : 13}">${esc(n)}</text>`).join("")}
  ${SEAS.map(([n, lo, la]) => `<text x="${mx(lo)}" y="${my(la)}" text-anchor="middle" class="lbl-sea" font-size="${mapZoom ? 4.5 : 10}">${esc(n)}</text>`).join("")}${pins}</svg>
  <p class="muted" style="margin:6px 0 0">Contours : Natural Earth (domaine public). Positions des lieux approximatives.</p>
  <div class="card" style="margin-top:12px"><h3>📍 ${esc(p.n)}</h3><b>📅 Événements</b>${p.ev.map(e => `<div>• ${esc(e)}</div>`).join("")}${p.pers ? `<p><b>👤 Personnages</b> : ${esc(p.pers)}</p>` : ""}
  ${p.ch.filter(id => CHAPTERS[id]).length ? `<b>📖 Histoire & quiz</b>${p.ch.filter(id => CHAPTERS[id]).map(id => `<a class="btn sec" href="#/chapter/${id}">${esc(CHAPTERS[id].title)}</a>`).join("")}` : `<p class="muted">🚧 Chapitre à venir pour ce lieu.</p>`}</div>`;
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
  <div class="card"><h3>⚙️ Paramètres</h3>
    <label class="sw"><span>🎵 Musique de fond apaisante</span><input type="checkbox" id="set-music" ${S.settings.music ? "checked" : ""}></label>
    <div class="chips" style="margin:8px 0">${[["voix", "🎙️ Voix (style nasheed)"], ["nature", "🌿 Eau et vent"], ["nuit", "🌙 Nuit étoilée"], ["desert", "🏜️ Désert calme"]].map(([id, n]) => `<button class="pill ${S.settings.style === id ? "on" : ""}" data-style="${id}">${n}</button>`).join("")}</div>
    <label class="sw"><span>🔊 Volume</span><input type="range" id="set-vol" min="0" max="1" step="0.05" value="${S.settings.vol}"></label>
    <label class="sw"><span>🔔 Sons juste / faux</span><input type="checkbox" id="set-sfx" ${S.settings.sfx ? "checked" : ""}></label>
    <label class="sw"><span>🔓 Tout débloquer (explorer librement)</span><input type="checkbox" id="set-free" ${S.settings.free ? "checked" : ""}></label>
    <div class="row" style="justify-content:flex-start"><button class="pill" id="t-ok">▶ Son « juste »</button><button class="pill" id="t-ko">▶ Son « faux »</button></div></div>
  <div class="card"><h3>🔔 Rappel quotidien</h3><div class="row"><input type="time" id="ptime" value="${S.reminder.time}" style="width:auto;padding:8px"><b>${S.reminder.on ? "Activé" : "Désactivé"}</b></div>
    <button class="btn sec" id="prem">🔔 Activer / mettre à jour</button><button class="btn sec" id="pics">📅 Ajouter à mon agenda</button><button class="btn sec" id="pintro">👋 Revoir l'introduction avec Sirâj</button></div>
  <div class="card"><h3>Objectif quotidien</h3><div class="chips">${[5, 10, 15, 20].map(m => `<button class="pill ${S.goal === m ? "on" : ""}" data-goal="${m}">${m} min</button>`).join("")}</div></div>
  <div class="card"><h3>🏆 Badges</h3>${E.BADGES.map(b => `<div>${S.badges[b[0]] ? b[1] : "🔒"} ${esc(b[2])}</div>`).join("")}</div>
  <button class="btn sec" id="rst">Réinitialiser ma progression</button>`;
};


/* ---------- Introduction avec Sirâj ---------- */
const ONB = { step: 0, know: null, reacted: false, reasons: [], goal: 10, time: "19:00", remind: false };
const KNOW = [["debut", "🌱 Je débute", "Wouah, c'est super de commencer ! On part de zéro, à ton rythme."], ["bases", "📗 J'ai quelques bases", "Wouah, c'est super ! On va consolider tout ça."], ["avance", "🎓 Je connais déjà pas mal", "Wouah, c'est super ! Les quiz vont tester tes connaissances."]];
const REASONS = ["Mieux comprendre ma religion", "Je découvre l'Islam", "Mieux pratiquer (prière, jeûne…)", "Apprendre le Coran", "Connaître l'histoire et la vie du Prophète ﷺ", "Transmettre à mes enfants ou à mes proches", "Par curiosité", "Autre raison"];
const GOALS = [[5, "🐢", "Tranquille"], [10, "🚶", "Normal"], [15, "🏃", "Intensif"], [20, "🚀", "Extrême"]];
const durText = d => d < 60 ? `${d} jours` : `environ ${Math.round(d / 30)} mois`;
function goalText(m) { const x = E.estimate(m); return `${m} min par jour = <b>${x.plan.lessons} leçon${x.plan.lessons > 1 ? "s" : ""}</b> + <b>${x.plan.questions} questions</b> par jour. Parcours terminé en <b>${durText(x.days)}</b> (estimation sur ~${x.total} leçons).`; }
const say = (mood, text, anim, size = 130, o = {}) => `<div class="hero-s">${siraj(mood, size, anim, o)}</div><div class="bubble c pop">${text}</div>`;
const dots = n => `<div class="dots">${[0, 1, 2, 3, 4, 5].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</div>`;

function renderOnb() {
  const s = ONB.step; let h = "";
  if (s === 0) h = `<div class="hero-s intro">${siraj("happy", 200, "intro", { hand: true, sparks: true })}</div><div class="bubble c pop2">Salut ! Moi c'est <b>Sirâj</b> 🏮</div><button class="btn pop3" data-o="next">Salut Sirâj ! 👋</button>`;
  else if (s === 1 && !ONB.reacted) h = say("think", "Petite question pour mieux te connaître : <b>tu as des bases en Islam ?</b>", "float") + KNOW.map(k => `<button class="opt" data-know="${k[0]}">${k[1]}</button>`).join("");
  else if (s === 1) { const k = KNOW.find(x => x[0] === ONB.know); h = say("proud", k[2], "jump", 150) + `<button class="btn" data-o="next">Continuer</button>`; }
  else if (s === 2) h = say("think", "<b>Pourquoi veux-tu apprendre l'Islam ?</b><br><span class='muted'>Coche tout ce qui te correspond.</span>", "float", 110) + REASONS.map((r, i) => `<button class="opt multi ${ONB.reasons.includes(i) ? "sel" : ""}" data-reason="${i}">${esc(r)}</button>`).join("") + `<button class="btn" data-o="next" ${ONB.reasons.length ? "" : "disabled"}>Continuer</button>`;
  else if (s === 3) h = say("happy", `Merci ! On va te créer une <b>routine d'apprentissage</b>.<br><b>Quel est ton objectif ?</b>`, "float", 110) + GOALS.map(g => `<button class="opt ${ONB.goal === g[0] ? "sel" : ""}" data-goal="${g[0]}">${g[1]} ${g[2]} · ${g[0]} min/jour</button>`).join("") + `<div class="card pop" id="gtxt">${goalText(ONB.goal)}</div><button class="btn" data-o="next">Continuer</button>`;
  else if (s === 4) h = say("proud", "<b>Avec moi, tu n'oublieras pas d'apprendre !</b><br>À quelle heure veux-tu que je te rappelle chaque jour ?", "jump", 130) + `<div class="card"><input type="time" id="rtime" value="${ONB.time}" style="width:100%;padding:11px;border-radius:10px;border:2px solid var(--line);background:var(--card);color:var(--text);font-size:1.1rem"></div>
      <button class="btn" data-o="remind">🔔 Activer mon rappel</button><button class="btn sec" data-o="ics">📅 Ajouter à mon agenda</button><p class="muted" style="text-align:center">Pour un rappel garanti même application fermée, ajoute-le aussi à ton agenda.</p><button class="btn sec" data-o="next">${ONB.remind ? "Continuer" : "Plus tard"}</button>`;
  else { const g = GOALS.find(x => x[0] === ONB.goal); h = say("proud", "Ta routine est prête ! 🎉", "jump", 150) + `<div class="card"><p>${g[1]} Objectif <b>${g[2]}</b> : ${goalText(ONB.goal)}</p><p>🔔 Rappel : <b>${ONB.remind ? ONB.time : "aucun pour l'instant"}</b></p></div><button class="btn" data-o="done">C'est parti !</button>`; }
  $app.innerHTML = `<div class="onbw slide">${dots(s)}${h}</div>`;
  if (s === 5) confetti();
}

/* ---------- Rappels ---------- */
async function enableReminder(time) {
  if (!("Notification" in window)) { toast("Les notifications ne sont pas disponibles ici. Utilise l'agenda."); return false; }
  const p = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
  if (p !== "granted") { toast("Notifications refusées. Tu peux utiliser l'agenda à la place."); return false; }
  E.S.reminder = { on: true, time, last: E.S.reminder.last }; E.save();
  notify("Sirâj 🏮", "Super, je te rappellerai chaque jour à " + time + " !"); return true;
}
function notify(title, body) {
  try { if (navigator.serviceWorker && navigator.serviceWorker.controller) navigator.serviceWorker.ready.then(r => r.showNotification(title, { body, icon: "icon.svg" })); else new Notification(title, { body, icon: "icon.svg" }); } catch {}
}
function checkReminder() {
  const r = E.S.reminder, t = E.dayStr(); if (!r || !r.on || !("Notification" in window) || Notification.permission !== "granted") return;
  const now = new Date(), [h, m] = r.time.split(":").map(Number);
  if (r.last !== t && E.S.streak.last !== t && (now.getHours() > h || (now.getHours() === h && now.getMinutes() >= m))) { r.last = t; E.save(); notify("Sirâj 🏮", "C'est l'heure de ta leçon ! Ta routine t'attend."); }
}
function downloadICS(time) {
  const [h, m] = time.split(":"), d = new Date(), ds = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`, st = `${ds}T${h}${m}00`;
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Sirat//FR", "BEGIN:VEVENT", "UID:sirat-rappel@sirat", `DTSTAMP:${ds}T000000`, `DTSTART:${st}`, "DURATION:PT10M", "RRULE:FREQ=DAILY", "SUMMARY:Ma leçon avec Sirâj 🏮", "DESCRIPTION:C'est l'heure d'apprendre !", "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:Leçon avec Sirâj", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" })); a.download = "rappel-sirat.ics"; document.body.appendChild(a); a.click(); a.remove();
}
document.addEventListener("click", async e => {
  const t = e.target.closest("[data-o],[data-know],[data-reason],[data-goal].opt"); if (!t || !document.querySelector(".onbw")) return;
  const tm = () => { const i = document.getElementById("rtime"); if (i && i.value) ONB.time = i.value; };
  if (t.dataset.know) { ONB.know = t.dataset.know; ONB.reacted = true; renderOnb(); }
  else if (t.dataset.reason !== undefined) { const i = +t.dataset.reason, k = ONB.reasons.indexOf(i); if (k >= 0) ONB.reasons.splice(k, 1); else ONB.reasons.push(i); renderOnb(); }
  else if (t.dataset.goal) { ONB.goal = +t.dataset.goal; renderOnb(); }
  else if (t.dataset.o === "next") { tm(); ONB.step++; ONB.reacted = false; renderOnb(); }
  else if (t.dataset.o === "remind") { tm(); ONB.remind = await enableReminder(ONB.time); renderOnb(); if (ONB.remind) toast("🔔 Rappel activé à " + ONB.time); }
  else if (t.dataset.o === "ics") { tm(); downloadICS(ONB.time); toast("Ouvre le fichier pour l'ajouter à ton agenda."); }
  else if (t.dataset.o === "done") { const S = E.S; ONB.force = false; S.onboarded = true; S.goal = ONB.goal; S.profile = { know: ONB.know, reasons: ONB.reasons.map(i => REASONS[i]) }; S.reminder = { on: ONB.remind, time: ONB.time, last: S.reminder.last }; E.save(); go("#/home"); }
});
setInterval(checkReminder, 60000);

/* ---------- Routage ---------- */
const NAV = [["home", "🏠", "Accueil"], ["path", "🛣️", "Parcours"], ["subjects", "📚", "Matières"], ["map", "🗺️", "Carte"], ["quiz", "🧠", "Quiz"], ["ai", "🤖", "IA"]];
function route() {
  let [r, a, b] = (location.hash.slice(2) || "home").split("/");
  if (!E.S.onboarded && r !== "welcome") { location.hash = "#/welcome"; return; }
  if (r === "welcome" && E.S.onboarded && !ONB.force) r = "home";
  document.body.classList.toggle("onb", r === "welcome");
  if (r === "welcome") { renderOnb(); return; }
  const name = r === "quiz" && a ? "quiz" : r;
  const fn = { home: V.home, path: V.path, level: V.level, chapter: V.chapter, lesson: V.lesson, quiz: a ? V.quiz : V.quizhub, review: V.review, daily: V.daily, exam: V.exam, free: V.free, subjects: V.subjects, subject: V.subject, map: V.map, ai: V.ai, profile: V.profile }[r] || V.home;
  const html = fn(a, b);
  if (typeof html === "string") $app.innerHTML = html;
  const tab = { level: "path", chapter: "path", lesson: "path", subject: "subjects", free: "quiz", review: "quiz", daily: "quiz", exam: "quiz" }[r] || r;
  $nav.innerHTML = NAV.map(([id, ic, n]) => `<a href="#/${id}" class="${tab === id ? "on" : ""}"><span>${ic}</span>${n}</a>`).join("");
  $top.innerHTML = `<b>🕌 Sirat</b><span><a href="#" id="mtog" onclick="return false">${E.S.settings.music ? "🎵" : "🔇"}</a><a href="#/profile">🔥 ${E.streak()}</a><a href="#/profile">⭐ ${E.S.xp}</a></span>`;
  if (r !== "lesson" && window.speechSynthesis) speechSynthesis.cancel();
  window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
document.addEventListener("click", e => {
  const t = e.target.closest("[data-sub],[data-pin],[data-goal]:not(.opt),[data-ask],#mapz,#rst,#prem,#pics,#pintro");
  if (!t) return;
  if (t.dataset.sub) { quizSubject = t.dataset.sub; route(); }
  else if (t.dataset.pin) { mapSel = t.dataset.pin; route(); }
  else if (t.id === "mapz") { mapZoom = !mapZoom; route(); }
  else if (t.dataset.goal) { E.S.goal = +t.dataset.goal; E.save(); route(); }
  else if (t.dataset.ask) { document.getElementById("askq").value = t.dataset.ask; answer(t.dataset.ask); }
  else if (t.id === "prem") enableReminder(document.getElementById("ptime").value).then(() => route());
  else if (t.id === "pics") downloadICS(document.getElementById("ptime").value);
  else if (t.id === "pintro") { Object.assign(ONB, { step: 0, know: null, reacted: false, reasons: [], force: true }); location.hash = "#/welcome"; route(); }
  else if (t.id === "rst") { if (t.dataset.sure) { E.reset(); location.hash = "#/welcome"; route(); } else { t.dataset.sure = 1; t.textContent = "⚠️ Touche encore pour tout effacer"; setTimeout(() => { delete t.dataset.sure; t.textContent = "Réinitialiser ma progression"; }, 4000); } }
});
document.addEventListener("change", e => {
  const S = E.S.settings;
  if (e.target.id === "set-music") { S.music = e.target.checked; E.save(); SND.apply(); }
  else if (e.target.id === "set-sfx") { S.sfx = e.target.checked; E.save(); }
  else if (e.target.id === "set-free") { S.free = e.target.checked; E.save(); route(); }
  else if (e.target.id === "set-vol") { S.vol = +e.target.value; E.save(); SND.apply(); }
});
document.addEventListener("input", e => { if (e.target.id === "set-vol") { E.S.settings.vol = +e.target.value; SND.apply(); } });
document.addEventListener("click", e => {
  if (e.target.id === "t-ok") { SND.unlock(); SND.correct(); } else if (e.target.id === "t-ko") { SND.unlock(); SND.wrong(); }
  const st = e.target.closest("[data-style]");
  if (st) { E.S.settings.style = st.dataset.style; E.S.settings.music = true; E.save(); SND.unlock(); SND.restart(); route(); }
  const m = e.target.closest("#mtog"); if (m) { E.S.settings.music = !E.S.settings.music; E.save(); SND.apply(); route(); }
});
document.addEventListener("submit", e => { if (e.target.id === "askf") { e.preventDefault(); answer(document.getElementById("askq").value); } });
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});
checkReminder();
route();
