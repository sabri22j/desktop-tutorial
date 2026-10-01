/* Interface Sirat, partie 2 : écrans. */
const V = {};
const artBox = (kind, seed, inner, cls = "") => `<div class="art ${cls}">${scene(kind, seed)}<div class="in">${inner}</div></div>`;
const greeting = () => { const h = new Date().getHours(); return h < 6 ? "Bonne nuit" : h < 12 ? "Bonne matinée" : h < 18 ? "Bon après-midi" : "Bonne soirée"; };
const nodeHtml = (n, cur, plain) => { const L = LEVELS[n], done = E.levelComplete(n), open = E.levelUnlocked(n), ex = needsExam(n);
  const cls = done ? "done" : n === cur ? "cur" : open ? "" : "lock", inner = done ? ico("check", 32) : !open ? ico("lock", 26) : ex ? ico("trophy", 30) : n;
  return plain ? `<span class="node ${cls} ${ex ? "exam" : ""}">${inner}</span>` : `<a class="node ${cls} ${ex ? "exam" : ""}" href="#/level/${n}" aria-label="Niveau ${n}">${inner}</a>`; };
const miniRing = (id, size = 46) => { const m = E.mastery(id); return ring(m, size, 6, pct(m) + "%", m >= E.UNLOCK ? "var(--green)" : "var(--gold)"); };

V.home = () => {
  const S = E.S, n = E.currentLevel(), na = E.nextAction(), plan = E.goalPlan(), d = E.dayState(), due = E.dueQids().length, weak = E.weakChapters().slice(0, 3), cs = E.cardStats();
  const lv = Math.min(n, LEVELS.length - 1), gp = Math.min(1, (Math.min(1, d.lessons / plan.lessons) + Math.min(1, d.questions / plan.questions)) / 2), v = verseOfDay(), h = hadithOfDay(), st = storyOfDay();
  const week = E.weekLog().map(w => `<div class="wd ${w.active ? "on" : ""} ${w.today ? "today" : ""}"><i>${w.active ? ico("flame", 16) : ""}</i>${w.letter}</div>`).join("");
  const exams = LEVELS.filter(L => E.examReady(L.n));
  return `${artBox("night", 3, `<div class="hello">Salam ! <small>${greeting()}. Prêt à apprendre ?</small></div>
    <div class="guide">${siraj3d(S.xp ? "happy" : "proud", 120)}<div class="bubble">${esc(dayMessage())}</div></div>
    <div class="week">${week}</div><a class="btn gold" href="${na.href}">${esc(na.label)}</a>${na.sub ? `<div class="small" style="text-align:center;margin-top:8px;opacity:.9">${esc(na.sub)}</div>` : ""}`, "hero")}
  ${(() => { const r = E.rank(); return `<a class="card rkc" href="#/profile"><div class="row"><b>${ico("gem", 18)} Rang ${r.n} · ${esc(r.title)}</b><span class="muted small">${r.left} XP avant le rang ${r.n + 1}</span></div>${bar(r.pct)}</a>`; })()}
  <div class="stat3"><div class="stat"><b style="color:#ef7b1a">${E.streak()}</b><span>Série</span></div><div class="stat"><b>${lv}</b><span>Niveau</span></div><div class="stat"><b style="color:var(--green)">${pct(E.progress())}%</b><span>Parcours</span></div></div>
  <div class="card goal">${ring(gp, 76, 9, pct(gp) + "%", "var(--gold)")}<div style="flex:1"><h3>Objectif du jour</h3><div class="muted small">${S.goal} min · Leçons ${Math.min(d.lessons, plan.lessons)}/${plan.lessons} · Questions ${Math.min(d.questions, plan.questions)}/${plan.questions}</div>${gp >= 1 ? `<div class="tag" style="margin-top:6px">Objectif atteint ✓</div>` : `<a class="tag gold" href="${na.href}" style="margin-top:6px">Continuer →</a>`}</div></div>
  ${exams.map(L => `<a class="card row" href="#/exam/${L.n}" style="background:var(--gold-l)"><div class="gap">${ico("trophy", 30)}<div><h3>Examen du niveau ${L.n}</h3><span class="muted small">Facultatif · +50 XP · grande étape</span></div></div>${ico("arrow", 22)}</a>`).join("")}
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0"><a class="pill" href="#/explore">${ico("explore", 14)} Explorer</a><a class="pill" href="#/map">Carte</a><a class="pill" href="#/cards">Cartes</a><a class="pill" href="#/lexique">Lexique</a><a class="pill" href="#/videos">Vidéos</a></div>
  <div class="sec-h"><h3>Aujourd'hui</h3><a href="#/today">Tout voir</a></div>
  <div class="rail">
    <a class="tile v" href="#/today"><h4>${ico("quote", 18)} Verset du jour</h4><div class="t-ar">${arText(v.ar.length > 90 ? v.ar.slice(0, 90) + "…" : v.ar)}</div><p>${esc(v.fr.length > 120 ? v.fr.slice(0, 120) + "…" : v.fr)}</p><div class="ref">${esc(v.ref)}</div></a>
    <a class="tile h" href="#/today"><h4>${ico("scroll", 18)} Hadith du jour</h4><p style="font-size:1rem">« ${esc(h.fr)} »</p><div class="ref">${esc(h.ref)}</div></a>
    <a class="tile s" href="#/chapter/${st.id}"><h4>${ico("bulb", 18)} Histoire du jour</h4><p><b>${esc(st.title)}</b></p><p>${esc(st.lessons[0].body.slice(0, 110))}…</p><div class="ref">Lire le chapitre →</div></a>
    <a class="tile c" href="#/cards"><h4>${ico("cards", 18)} Cartes de révision</h4><p><b>${cs.due ? cs.due + " à revoir" : "Apprends des mots arabes"}</b></p><p>${cs.known}/${cs.total} mots maîtrisés</p><div class="ref">Réviser →</div></a>
    <a class="tile d" href="#/daily"><h4>${ico("quiz", 18)} Défi du jour</h4><p><b>${d.daily ? "Relevé aujourd'hui ✓" : "5 questions · +30 XP"}</b></p><p>Teste-toi sur ce que tu as déjà appris.</p><div class="ref">${d.daily ? "À demain !" : "Relever le défi →"}</div></a>
  </div>
  ${due ? `<a class="card row" href="#/review"><div class="gap"><span class="tag gold">${ico("sparkle", 14)} À revoir</span><div><b>${due} question${due > 1 ? "s" : ""} à réviser</b><div class="muted small">Une courte révision aide à retenir.</div></div></div>${ico("arrow", 22)}</a>` : ""}
  <div class="sec-h"><h3>Ton prochain niveau</h3><a href="#/path">Parcours</a></div>
  <a class="card next" href="#/level/${lv}">${nodeHtml(lv, lv, true)}<div><div class="muted small">Niveau ${lv} · ${esc(STAGES[E.stageOf(lv)])}</div><h3>${esc(LEVELS[lv].unit)}</h3><div class="muted small">${LEVELS[lv].chapters.length} chapitre${LEVELS[lv].chapters.length > 1 ? "s" : ""}</div></div></a>
  ${weak.length ? `<div class="sec-h"><h3>À améliorer</h3></div><div class="card">${weak.map(c => `<a class="row" href="#/chapter/${c.id}" style="padding:8px 0"><span>${esc(c.title)}</span>${miniRing(c.id, 40)}</a>`).join("")}</div>` : ""}
  <div class="sec-h"><h3>Matières</h3><a href="#/subjects">Tout voir</a></div>
  <div class="subgrid">${SUBJECTS.map(s => { const m = E.subjectMastery(s.id); return `<a class="card subc" href="#/subject/${s.id}" style="margin:0"><div class="row"><span class="ic-b">${ico(LEVEL_ICON[s.id], 22)}</span>${ring(m || 0, 44, 6, pct(m || 0) + "%")}</div><div><b>${esc(s.name)}</b><div class="muted small">${Object.values(CHAPTERS).filter(c => c.subject === s.id).length} chapitres</div></div></a>`; }).join("")}</div>`;
};

V.today = () => { const v = verseOfDay(), h = hadithOfDay(), st = storyOfDay();
  return `<a class="back" href="#/home">${ico("back", 18)} Accueil</a><h2>Aujourd'hui</h2><div class="sp"></div>
  <div class="arcard"><div class="qkind" style="color:#7be0b0">Verset du jour · ${esc(v.theme)}</div><div class="ar">${arText(v.ar)}</div><p class="tr"><span style="opacity:.7">Traduction du sens :</span> ${esc(v.fr)}</p><div class="src"><b>${esc(v.ref)}</b></div><button class="btn gold sm" data-copy="${esc(v.ar + "\n" + v.fr + " (" + v.ref + ")")}" style="margin-top:12px">Copier</button></div>
  <div class="card fun"><h3>${ico("scroll", 22)} Hadith du jour · ${esc(h.theme)}</h3><p style="font-size:1.1rem">« ${esc(h.fr)} »</p><div class="src"><b>${esc(h.ref)}</b> · traduction du sens</div><button class="btn sec sm" data-copy="${esc(h.fr + " (" + h.ref + ")")}" style="margin-top:10px">Copier</button></div>
  <div class="card"><h3>${ico("bulb", 22)} Histoire du jour</h3><p><b>${esc(st.title)}</b></p><p class="muted">${esc(st.lessons[0].body)}</p><a class="btn sec" href="#/chapter/${st.id}">Lire le chapitre</a></div>
  <p class="muted small">Références issues de sources classiques ; traductions du sens à faire valider par une personne qualifiée.</p>`; };

V.path = () => {
  const cur = E.currentLevel(); let h = `<h2>Ton parcours</h2><p class="muted">Du niveau 0 au niveau 100. Avance à ton rythme : 60 % pour valider un niveau.</p>`;
  for (let s = 0; s <= 10; s++) {
    const p = E.stageProgress(s), kind = STAGE_SCENE[s];
    h += artBox(kind, s + 1, `<small>${s === 0 ? "Niveau 0" : `Niveaux ${p.a} à ${p.b}`} · ${p.done}/${p.total}</small><h3>${esc(STAGES[s])}</h3>`, "stageb");
    for (let n = p.a; n <= p.b; n++) { if (!LEVELS[n]) continue; const x = Math.round(Math.sin(n * 0.95) * 64);
      h += `<div class="lvl" style="transform:translateX(${x}px)">${n === cur ? `<span class="bub">Commencer</span>` : ""}${nodeHtml(n, cur)}<div class="lb">${esc(LEVELS[n].unit)}</div></div>`; }
  }
  return h + `<p class="muted" style="text-align:center">Le niveau 100 signifie que tu as terminé le parcours de l'application, pas que tu connais tout l'islam.</p>`;
};

V.level = n => {
  const L = LEVELS[+n]; if (!L) return V.path(); const lock = !E.levelUnlocked(+n), first = L.chapters[0], s = E.stageOf(+n);
  return `<a class="back" href="#/path">${ico("back", 18)} Parcours</a>${artBox(SUBJECT_SCENE[first.subject], +n + 2, `<small>${esc(STAGES[s])}</small><h2>Niveau ${n}</h2><div>${esc(L.unit)}</div>`, "lhero")}
  ${lock ? `<div class="card" style="background:var(--gold-l)">${ico("lock", 20)} Valide le niveau précédent (60 %) pour débloquer celui-ci, ou active « Tout débloquer » dans Profil → Paramètres.</div>` : ""}
  ${L.chapters.map(c => { const sb = subj(c.subject); return `<a class="card chcard ${lock ? "lockd" : ""}" href="#/chapter/${c.id}"><span class="ic-b">${ico(LEVEL_ICON[c.subject], 24)}</span><div style="flex:1"><h3>${esc(c.title)}</h3><span class="tag">${esc(sb.name)}</span><span class="muted small">${E.lessonsDone(c.id)}/${c.lessons.length} leçons</span></div>${miniRing(c.id)}</a>`; }).join("")}
  ${needsExam(+n) ? `<div class="card"><h3>${ico("trophy", 22)} Examen des niveaux 0 à ${n}</h3><p class="muted">30 questions mixtes, 65 % pour réussir. Facultatif et repassable à volonté.</p>${E.S.exams[n] ? `<span class="tag">Réussi ✓</span>` : E.examReady(+n) ? `<a class="btn gold" href="#/exam/${n}">Passer l'examen</a>` : `<span class="muted small">Disponible quand les chapitres du niveau sont validés (60 %). Il ne bloque pas la suite.</span>`}</div>` : ""}`;
};

V.chapter = id => {
  const c = CHAPTERS[id]; if (!c) return V.path();
  if (!E.chapterUnlocked(id)) return `<div class="card">${ico("lock", 20)} Niveau verrouillé. Valide le niveau précédent (60 %) ou active « Tout débloquer » dans Profil → Paramètres.</div><a class="btn" href="#/path">Retour</a>`;
  const m = E.mastery(id), done = E.lessonsDone(id), sb = subj(c.subject), nextI = Math.min(done, c.lessons.length - 1);
  return `<a class="back" href="#/level/${c.level}">${ico("back", 18)} Niveau ${c.level}</a>${artBox(SUBJECT_SCENE[c.subject], c.level + 5, `<span class="tag" style="background:rgba(255,255,255,.22);color:#fff">${esc(sb.name)}</span><h2>${esc(c.title)}</h2>`, "lhero")}
  <div class="card goal">${ring(m, 84, 10, pct(m) + "%", m >= E.UNLOCK ? "var(--green)" : "var(--gold)")}<div style="flex:1"><h3>Maîtrise</h3><div class="muted small">${m >= E.UNLOCK ? "Chapitre validé. Les révisions l'amèneront vers 100 %." : "60 % pour débloquer la suite."}</div><div class="muted small">${done}/${c.lessons.length} leçons · quiz de ${c.quiz.length} questions</div></div></div>
  <a class="btn gold" href="#/lesson/${id}/${nextI}">${done ? "Continuer" : "Commencer"}</a>
  <div class="sec-h"><h3>Leçons</h3></div><div class="steps">${c.lessons.map((l, i) => `<a class="card stp ${E.S.lessons[id + ":" + i] ? "dn" : ""}" href="#/lesson/${id}/${i}"><span class="n">${E.S.lessons[id + ":" + i] ? ico("check", 18) : i + 1}</span><div style="flex:1"><b>${esc(l.t)}</b></div>${ico("arrow", 18)}</a>`).join("")}
  <a class="card stp" href="#/quiz/${id}"><span class="n" style="background:var(--gold-l);color:var(--gold-d)">${ico("quiz", 18)}</span><div style="flex:1"><b>Quiz du chapitre</b><div class="muted small">${c.quiz.length} questions</div></div>${ico("arrow", 18)}</a></div>
  ${c.video ? `<a class="btn sec" href="${esc(c.video.url)}" target="_blank" rel="noopener">${ico("video", 20)} Vidéo : ${esc(c.video.title)}</a>` : ""}
  ${c.fun ? `<div class="card fun"><h3>${ico("bulb", 22)} Le savais-tu ?</h3><p>${esc(c.fun)}</p></div>` : ""}
  <details class="card srcs"><summary>Sources ${ico("dots", 18)}</summary>${c.sources.map(s => `<div class="src">• ${esc(s)}</div>`).join("")}<p class="muted small">Références issues de sources classiques, à faire valider par une personne qualifiée.</p></details>`;
};

V.lesson = (id, i) => {
  const c = CHAPTERS[id], l = c && c.lessons[+i]; if (!l) return V.path();
  $app.innerHTML = `<a class="back" href="#/chapter/${id}">${ico("back", 18)} ${esc(c.title)}</a><div class="lesson"><div class="dotsr">${c.lessons.map((_, k) => `<i class="${k <= +i ? "on" : ""}"></i>`).join("")}</div><h2>${esc(l.t)}</h2><div class="sp"></div>
    <div class="ltext">${l.body.split("\n\n").map(p => `<p>${esc(p)}</p>`).join("")}</div>
    ${l.ar ? `<div class="arcard"><div class="ar">${arText(l.ar)}</div><div class="ph">${esc(l.ph)}</div>${l.fr ? `<p class="tr"><span style="opacity:.7">Traduction du sens :</span> ${esc(l.fr)}</p>` : ""}${l.ref ? `<div class="src"><b>${esc(l.ref)}</b></div>` : ""}</div>` : ""}
    <button class="audio" id="speak"><span class="pb" id="pbi">${ico("play", 22)}</span><span><span id="plab">Écouter la leçon</span><small id="psub">Voix de l'appareil</small></span></button>
    <div class="card flat"><div class="src">📚 <b>Sources du chapitre</b> : ${c.sources.map(esc).join(" · ")}</div></div>
    <button class="btn gold" id="cont">Continuer</button></div>`;
  const btn = document.getElementById("speak"), pbi = document.getElementById("pbi"), plab = document.getElementById("plab"), psub = document.getElementById("psub");
  VOICE.onFail = () => toast("La lecture audio n'est pas disponible ici. Essaie dans le navigateur de ton téléphone, ou choisis une autre voix dans le Profil.");
  VOICE.probe(id, +i, rec => { if (rec && psub) psub.textContent = "Voix humaine enregistrée"; });
  VOICE.onState = (st, rec) => { if (!btn.isConnected) return; btn.classList.toggle("pl", st === "playing"); pbi.innerHTML = ico(st === "playing" ? "pause" : "play", 22); plab.textContent = st === "playing" ? "Pause" : st === "loading" ? "Chargement…" : "Écouter la leçon"; if (rec) psub.textContent = "Voix humaine enregistrée"; };
  btn.onclick = () => { if (btn.classList.contains("pl")) VOICE.stop(); else VOICE.play(id, +i, l.body + (l.fr ? " " + l.fr : "")); };
  document.getElementById("cont").onclick = () => {
    VOICE.stop();
    const after = () => { const xp = E.completeLesson(id, +i); if (xp) { SND.xp(); toast("+10 XP"); FX.gain("+10 XP"); } celebrate(); go(+i + 1 < c.lessons.length ? `#/lesson/${id}/${+i + 1}` : `#/quiz/${id}`); };
    if (!l.check) return after();
    runSession({ kind: "check", title: "Question rapide", questions: [l.check], retry: false, back: `#/chapter/${id}`, after });
  };
};

V.quiz = id => { const c = CHAPTERS[id]; if (!c) return V.quizhub(); if (!E.chapterUnlocked(id)) return V.chapter(id); runSession({ kind: "quiz", title: "Quiz · " + c.title, questions: c.quiz, chapter: id, back: "#/chapter/" + id }); };
V.review = () => runSession({ kind: "review", title: "Révision", questions: E.dueQids().slice(0, Math.max(5, E.S.goal)).map(q => QINDEX[q]), back: "#/home" });
V.daily = () => E.dayState().daily ? `<div class="card">${ico("quiz", 22)} Défi du jour déjà relevé. À demain !</div><a class="btn" href="#/home">Retour</a>` : runSession({ kind: "daily", title: "Défi du jour", questions: E.buildDaily(), back: "#/home" });
V.exam = n => { if (!E.examReady(+n)) return `<div class="card">L'examen n'est pas disponible (chapitres à valider à 60 % ou examen déjà réussi).</div><a class="btn" href="#/level/${n}">Retour</a>`; runSession({ kind: "exam", title: "Examen du niveau " + n, questions: E.buildExam(+n), retry: false, level: +n, back: "#/level/" + n }); };

let quizSubject = "all";
V.quizhub = () => { const ex = LEVELS.filter(L => E.examReady(L.n)), due = E.dueQids().length;
  return `<h2>Quiz</h2><p class="muted">Teste-toi sur ce que tu as débloqué. Les quiz comptent pour ta maîtrise.</p><div>${[["all", "Toutes"], ...SUBJECTS.map(s => [s.id, s.name])].map(([id, n]) => `<button class="pill ${quizSubject === id ? "on" : ""}" data-sub="${id}">${esc(n)}</button>`).join("")}</div><div class="sp"></div>
  <div class="tiles"><a class="xt" href="#/free/10" style="background:linear-gradient(150deg,#0f8a5f,#0a4f3a)"><span class="ico">${ico("quiz", 22)}</span><div><h3>Quiz rapide</h3><small>10 questions</small></div></a><a class="xt" href="#/free/20" style="background:linear-gradient(150deg,#1a5f73,#0a2f45)"><span class="ico">${ico("sparkle", 22)}</span><div><h3>Quiz mixte</h3><small>20 questions</small></div></a>
  <a class="xt" href="#/daily" style="background:linear-gradient(150deg,#e5584a,#9c2f27)"><span class="ico">${ico("flame", 22)}</span><div><h3>Défi du jour</h3><small>+30 XP</small></div></a><a class="xt" href="#/review" style="background:linear-gradient(150deg,#d99a1c,#8a5a0a)"><span class="ico">${ico("cards", 22)}</span><div><h3>Révision</h3><small>${due} à revoir</small></div></a></div>
  ${ex.length ? `<div class="sec-h"><h3>Examens disponibles</h3></div>${ex.map(L => `<a class="card row" href="#/exam/${L.n}"><div class="gap">${ico("trophy", 28)}<b>Examen du niveau ${L.n}</b></div>${ico("arrow", 22)}</a>`).join("")}` : ""}`; };
V.free = n => { const ids = E.unlockedQids().filter(id => quizSubject === "all" || CHAPTERS[QINDEX[id].chapter].subject === quizSubject); runSession({ kind: "free", title: "Quiz libre", questions: E.pick(ids, +n), back: "#/quiz" }); };

V.explore = () => `<h2>Explorer</h2><p class="muted">Matières, carte, cartes de révision et lexique.</p>
  <div class="tiles"><a class="xt" href="#/map" style="background:linear-gradient(150deg,#1a5f73,#0a2f45)"><span class="ico">${ico("map", 22)}</span><div><h3>Carte historique</h3><small>Lieux et événements</small></div></a>
  <a class="xt" href="#/cards" style="background:linear-gradient(150deg,#6b4bb5,#33206b)"><span class="ico">${ico("cards", 22)}</span><div><h3>Cartes de révision</h3><small>${E.cardStats().known}/${E.cardStats().total} mots</small></div></a>
  <a class="xt" href="#/lexique" style="background:linear-gradient(150deg,#d99a1c,#8a5a0a)"><span class="ico">${ico("book", 22)}</span><div><h3>Lexique</h3><small>Mots arabes</small></div></a>
  <a class="xt" href="#/videos" style="background:linear-gradient(150deg,#e5584a,#9c2f27)"><span class="ico">${ico("video", 22)}</span><div><h3>Vidéos</h3><small>Bientôt</small></div></a></div>
  <div class="sec-h"><h3>Matières</h3></div>${SUBJECTS.map(s => { const m = E.subjectMastery(s.id) || 0; return `<a class="card chcard" href="#/subject/${s.id}"><span class="ic-b">${ico(LEVEL_ICON[s.id], 24)}</span><div style="flex:1"><h3>${esc(s.name)}</h3><span class="muted small">${Object.values(CHAPTERS).filter(c => c.subject === s.id).length} chapitres</span></div>${ring(m, 46, 6, pct(m) + "%")}</a>`; }).join("")}`;
V.subjects = V.explore;
V.subject = sid => { const s = subj(sid), cs = Object.values(CHAPTERS).filter(c => c.subject === sid);
  return `<a class="back" href="#/explore">${ico("back", 18)} Explorer</a>${artBox(SUBJECT_SCENE[sid], 4, `<h2>${esc(s.name)}</h2><div>${cs.length} chapitres</div>`, "lhero")}${cs.map(c => `<a class="card chcard" href="#/chapter/${c.id}"><span class="ic-b" style="font-family:var(--fd);font-weight:800">${c.level}</span><div style="flex:1"><h3 style="font-size:1.05rem">${esc(c.title)}</h3><span class="muted small">Niveau ${c.level}</span></div>${miniRing(c.id, 42)}</a>`).join("")}`; };

/* Cartes de révision */
V.cards = () => { const cs = E.cardStats(), cats = [...new Set(LEXIQUE.map(c => c.cat))];
  return `<a class="back" href="#/explore">${ico("back", 18)} Explorer</a><h2>Cartes de révision</h2><p class="muted">Apprends le vocabulaire de l'islam : retourne la carte, dis si tu savais. Les mots difficiles reviennent plus souvent.</p>
  <div class="card goal">${ring(cs.known / cs.total, 84, 10, cs.known + "", "var(--green)")}<div><h3>${cs.known} mots maîtrisés</h3><div class="muted small">${cs.seen} vus sur ${cs.total} · ${cs.due} à revoir aujourd'hui</div></div></div>
  <a class="btn gold" href="#/cards/run/all">Réviser 10 cartes</a><div class="sec-h"><h3>Par thème</h3></div>
  ${cats.map(c => `<a class="card row" href="#/cards/run/${encodeURIComponent(c)}"><div><b>${esc(c)}</b><div class="muted small">${LEXIQUE.filter(w => w.cat === c).length} mots</div></div>${ico("arrow", 20)}</a>`).join("")}`; };
V.cardsrun = cat => { cat = decodeURIComponent(cat || "all"); const deck = E.cardSession(cat === "all" ? null : cat, 10); let i = 0, good = 0;
  if (!deck.length) return `<div class="card">Rien à réviser ici pour l'instant.</div><a class="btn" href="#/cards">Retour</a>`;
  document.body.classList.add("focus");
  const show = () => {
    if (i >= deck.length) { document.getElementById("dock")?.remove(); document.body.classList.remove("focus"); const xp = E.addXP(10); confetti(); SND.win(); celebrate();
      $app.innerHTML = `<div class="resc"><div class="sp"></div>${siraj("proud", 130, "jump")}<h2>Bravo !</h2><div class="sp"></div>${ring(good / deck.length, 120, 12, `${good}/${deck.length}`)}<div class="sp"></div><div class="xpchip">${ico("gem", 20)} +${xp} XP</div></div><a class="btn gold" href="#/cards/run/${encodeURIComponent(cat)}">Encore 10 cartes</a><a class="btn sec" href="#/cards">Retour</a>`; return; }
    const w = deck[i];
    $app.innerHTML = `<div class="stop"><button class="x" id="quit">${ico("close", 26)}</button>${bar(i / deck.length)}</div><div class="flip" id="fl"><div class="fi"><div class="fc f"><div class="big">${esc(w.ar)}</div><div class="hint">Touche pour retourner</div></div><div class="fc b"><div class="bigf">${esc(w.tr)}</div><div style="font-size:1.25rem;font-weight:800;margin-top:8px">${esc(w.fr)}</div><div class="tag" style="margin-top:14px">${esc(w.cat)}</div></div></div></div>`;
    const d = document.getElementById("dock") || Object.assign(document.body.appendChild(document.createElement("div")), { id: "dock", className: "dock" });
    d.className = "dock"; d.innerHTML = `<div class="in"><div class="gap"><button class="btn sec" id="kno" style="margin:0" disabled>À revoir</button><button class="btn" id="yes" style="margin:0" disabled>Je savais</button></div></div>`;
    const fl = document.getElementById("fl"), kno = document.getElementById("kno"), yes = document.getElementById("yes");
    fl.onclick = () => { fl.classList.toggle("fl"); kno.disabled = yes.disabled = !fl.classList.contains("fl"); };
    const next = ok => { E.cardAnswer(w.id, ok); if (ok) { good++; SND.correct(); } i++; show(); };
    kno.onclick = () => next(false); yes.onclick = () => next(true);
    document.getElementById("quit").onclick = () => go("#/cards");
  };
  show();
};
V.lexique = () => `<a class="back" href="#/explore">${ico("back", 18)} Explorer</a><h2>Lexique</h2><input type="text" id="lexq" placeholder="Rechercher un mot (arabe, phonétique ou français)" style="margin:10px 0"><div id="lexl"></div>`;
function lexList(q) { const n = norm(q || ""), list = LEXIQUE.filter(w => !n || norm(w.tr + w.fr + w.cat).includes(n) || w.ar.includes(q)); document.getElementById("lexl").innerHTML = list.map(w => `<div class="card lex"><div><b>${esc(w.tr)}</b><div class="muted small">${esc(w.fr)}</div><span class="tag" style="margin-top:4px">${esc(w.cat)}</span></div><div class="ar">${esc(w.ar)}</div></div>`).join("") || `<p class="muted">Aucun mot trouvé.</p>`; }
V.videos = () => { const withV = Object.values(CHAPTERS).filter(c => c.video);
  return `<a class="back" href="#/explore">${ico("back", 18)} Explorer</a><h2>Vidéos</h2>${withV.length ? withV.map(c => `<a class="card row" href="${esc(c.video.url)}" target="_blank" rel="noopener"><div class="gap">${ico("video", 26)}<div><b>${esc(c.video.title)}</b><div class="muted small">${esc(c.title)}</div></div></div>${ico("arrow", 20)}</a>`).join("") :
  `<div class="card" style="text-align:center">${siraj("think", 110, "float")}<h3>Bientôt des vidéos</h3><p class="muted">Des vidéos pour apprendre l'histoire seront ajoutées chapitre par chapitre, à partir de sources fiables.</p></div>`}`; };

/* Carte historique : vrais contours (Natural Earth), zoom sur un lieu */
const PLACES = [
  { id: "mecque", n: "La Mecque", lon: 39.83, lat: 21.42, dx: -12, anchor: "end", ev: ["Naissance du Prophète ﷺ (vers 570)", "Enfance et jeunesse", "Première révélation (grotte de Hira, près de La Mecque)", "La Kaaba et le puits de Zamzam", "Traité de Hudaybiya (6 H, près de La Mecque)", "Conquête de La Mecque (8 H)", "Pèlerinage d'adieu (10 H)"], ch: ["c6-arabie", "c6-naissance", "c7-enfance", "c7-jeunesse", "c8-revelation", "c21-appel", "c37-hudaybiya", "c38-conquete", "c20-hajj", "c78-hajj-pas-a-pas"], pers: "Abdallah, Amina, Abd al-Muttalib, Abu Talib, Khadija, Abu Bakr" },
  { id: "taif", n: "Taïf", lon: 40.41, lat: 21.27, dy: 14, ev: ["Voyage du Prophète ﷺ à Taïf, après le décès d'Abu Talib et de Khadija"], ch: ["c27-taif"] },
  { id: "medine", n: "Médine", lon: 39.61, lat: 24.47, dx: -12, anchor: "end", ev: ["Hégire : arrivée du Prophète ﷺ (622)", "Construction de la Mosquée du Prophète", "Bataille d'Uhud (3 H, près de Médine)", "Bataille du Fossé (5 H)", "Mort du Prophète ﷺ (11 H)"], ch: ["c30-hijra", "c31-medine", "c32-fraternite", "c33-adhan", "c35-uhud", "c36-khandaq", "c39-adieu", "c58-suffa"], pers: "Le Prophète ﷺ, Abu Bakr, Bilal, les Ansar" },
  { id: "badr", n: "Badr", lon: 38.79, lat: 23.78, dx: -12, anchor: "end", ev: ["Bataille de Badr (2 H, 17 Ramadan)"], ch: ["c34-badr"] },
  { id: "khaybar", n: "Khaybar", lon: 39.3, lat: 25.7, dx: 12, ev: ["Expédition de Khaybar (7 H)", "Ali porte l'étendard"], ch: ["c52-ali"] },
  { id: "tabuk", n: "Tabouk", lon: 36.57, lat: 28.38, dx: 12, ev: ["Expédition de Tabouk (9 H)", "Passage près d'Al-Hijr, les demeures des Thamud"], ch: ["c47-salih", "c51-uthman"] },
  { id: "jerusalem", n: "Jérusalem", lon: 35.23, lat: 31.78, dx: -12, anchor: "end", ev: ["Voyage nocturne (Isra) vers Al-Aqsa et ascension (Mi'raj), Coran 17:1", "Première direction de prière (qibla) avant la Kaaba", "Reprise par Salah ad-Din (1187)"], ch: ["c28-isra", "c33-adhan", "c69-saladin"] },
  { id: "bosra", n: "Bosra", lon: 36.48, lat: 32.52, dx: 12, ev: ["Voyages de commerce vers la Syrie dans la jeunesse du Prophète ﷺ", "Rencontre avec le moine Bahira (récit de la Sîra)"], ch: ["c7-jeunesse"] },
  { id: "damas", n: "Damas", lon: 36.3, lat: 33.51, dx: 12, dy: -6, ev: ["Capitale des Omeyyades", "Grande Mosquée de Damas"], ch: ["c65-omeyyades", "c64-hasan"] },
  { id: "axoum", n: "Aksoum (Abyssinie)", lon: 38.72, lat: 14.13, dx: 12, ev: ["Émigration de musulmans en Abyssinie, sous la protection du Négus (an-Najashi)"], ch: ["c24-abyssinie", "c23-bilal"] },
];
const SEAS = [["Mer Méditerranée", 30.5, 34.6], ["Mer Rouge", 39, 18.7], ["Golfe Persique", 51.6, 27.2], ["Mer d'Arabie", 56, 14], ["Golfe d'Aden", 47, 12.2]];
const LANDS = [["ARABIE", 45, 23.5], ["ÉGYPTE", 30.5, 26.5], ["SYRIE (Sham)", 38.2, 35.6], ["YÉMEN", 45, 15.6], ["IRAK", 43.8, 32.6], ["ABYSSINIE", 39.8, 9.8]];
let mapSel = "mecque", mapZoom = false;
const mx = lon => (lon - MAP.lon0) * MAP.kx, my = lat => (MAP.lat1 - lat) * MAP.ky;
V.map = () => {
  const p = PLACES.find(x => x.id === mapSel), w = mapZoom ? 180 : MAP.W, h = mapZoom ? 180 : MAP.H, cx = mx(p.lon), cy = my(p.lat);
  const x0 = mapZoom ? Math.max(0, Math.min(MAP.W - w, cx - w / 2)) : 0, y0 = mapZoom ? Math.max(0, Math.min(MAP.H - h, cy - h / 2)) : 0, fs = mapZoom ? 5.2 : 11, r = mapZoom ? 2.6 : 7;
  const pins = PLACES.filter(q => !mapZoom || (Math.abs(mx(q.lon) - cx) < w && Math.abs(my(q.lat) - cy) < h)).map(q => `<g class="pin ${q.id === mapSel ? "on" : ""}" data-pin="${q.id}"><circle cx="${mx(q.lon)}" cy="${my(q.lat)}" r="${r}" stroke-width="${mapZoom ? .8 : 2}"/><text x="${mx(q.lon) + (q.dx || 12) * (mapZoom ? .4 : 1)}" y="${my(q.lat) + (q.dy || 4) * (mapZoom ? .4 : 1)}" text-anchor="${q.anchor || "start"}" font-size="${fs}">${esc(q.n)}</text></g>`).join("");
  const chs = p.ch.filter(id => CHAPTERS[id]);
  return `<a class="back" href="#/explore">${ico("back", 18)} Explorer</a><div class="row" style="margin-bottom:10px"><h2>Carte historique</h2><button class="pill" id="mapz" style="margin:0">${mapZoom ? "Vue d'ensemble" : "Zoom : " + esc(p.n)}</button></div>
  <svg class="map" viewBox="${x0} ${y0} ${w} ${h}" role="img" aria-label="Carte de l'Arabie et des régions voisines"><rect x="0" y="0" width="${MAP.W}" height="${MAP.H}" fill="var(--sea)"/><path d="${MAP.land}" fill="var(--land)" stroke="var(--coast)" stroke-width="${mapZoom ? .5 : 1}" stroke-linejoin="round"/>
  ${LANDS.map(([n, lo, la]) => `<text x="${mx(lo)}" y="${my(la)}" text-anchor="middle" class="lbl-land" font-size="${mapZoom ? 6 : 13}">${esc(n)}</text>`).join("")}${SEAS.map(([n, lo, la]) => `<text x="${mx(lo)}" y="${my(la)}" text-anchor="middle" class="lbl-sea" font-size="${mapZoom ? 4.5 : 10}">${esc(n)}</text>`).join("")}${pins}</svg>
  <p class="muted small" style="margin:6px 2px 12px">Touche un lieu. Contours : Natural Earth (domaine public). Positions approximatives.</p>
  <div class="card"><h3>${esc(p.n)}</h3><div class="sp"></div>${p.ev.map(e => `<div class="row" style="justify-content:flex-start;align-items:flex-start"><span style="color:var(--green)">●</span><span>${esc(e)}</span></div>`).join("")}${p.pers ? `<p><b>Personnages</b> : ${esc(p.pers)}</p>` : ""}
  ${chs.length ? `<div class="sec-h" style="margin-top:14px"><h3>Chapitres liés</h3></div>${chs.map(id => `<a class="btn sec" href="#/chapter/${id}">${esc(CHAPTERS[id].title)}</a>`).join("")}` : `<p class="muted">Chapitre à venir pour ce lieu.</p>`}</div>`;
};

/* Assistant : IA ancrée dans les chapitres (Claude), sinon réponses préparées hors ligne */
let aiHist = [], aiBusy = false;
const paras = t => String(t).split(/\n{2,}|\n/).filter(Boolean).map(p => `<p style="margin:0 0 8px">${esc(p)}</p>`).join("");
const kbHtml = e => `<b>${esc(e.title)}</b><p>${esc(e.a)}</p>${e.nuance ? `<div class="nuance"><b>Nuance</b> : ${esc(e.nuance)}</div>` : ""}<b>Sources</b>${e.src.map(s => `<div class="src"><span class="tag">${esc(s[0])}</span>${esc(s[1])}</div>`).join("")}`;
const srcHtml = list => list.length ? `<div class="sec-h" style="margin:10px 0 4px"><b>Sources consultées dans l'application</b></div>${list.map(s => `<div class="src">${s.id ? `<a href="#/chapter/${s.id}" style="color:var(--green);font-weight:800">${esc(s.title)}</a>` : `<b>${esc(s.title)}</b>`} · ${s.refs.map(esc).join(" · ")}</div>`).join("")}` : "";
let aiSel = null;
const aiPanel = () => { const mine = AI.getMine(), sel = aiSel || (mine && mine.provider) || "claude", P = AI.PROVIDERS;
  return `<details class="card" id="aipanel" ${mine ? "" : "open"}><summary style="cursor:pointer;font-weight:800">${mine ? "Ton IA : " + esc(P[mine.provider].name) + " ✓" : "Connecte ton IA"}</summary>
  <p class="muted small" style="margin-top:8px">Pour que l'assistant réponde à toutes tes questions, branche ton propre compte d'IA. Tu paies seulement ce que tu utilises, chez ton fournisseur. Ta clé reste sur cet appareil : elle n'est ni envoyée à Sirat ni synchronisée. Ne la partage jamais.</p>
  <div>${Object.entries(P).map(([id, p]) => `<button class="pill ${sel === id ? "on" : ""}" data-aiprov="${id}">${esc(p.name)}</button>`).join("")}</div>
  <p class="muted small">Crée une clé sur <a href="${esc(P[sel].url)}" target="_blank" rel="noopener noreferrer" style="color:var(--green);font-weight:800">${esc(P[sel].url.replace("https://", ""))}</a>, puis colle-la ici.</p>
  <input type="password" id="ai-key" placeholder="Ta clé API" autocomplete="off" value="${mine && mine.provider === sel ? esc(mine.key) : ""}" style="margin-bottom:8px"><input type="text" id="ai-model" placeholder="Modèle (facultatif) : ${esc(P[sel].model)}" value="${mine && mine.provider === sel && mine.model ? esc(mine.model) : ""}">
  <div class="gap"><button class="btn" id="ai-save" style="margin:10px 0 0">Enregistrer</button>${mine ? `<button class="btn sec" id="ai-del" style="margin:10px 0 0">Retirer</button>` : ""}</div></details>`; };
V.ai = () => `<h2>Assistant</h2><div class="gap" style="margin:6px 0 10px"><span class="tag" id="aimode">…</span></div>${aiPanel()}<div class="chat" id="chat"><div class="msg">${siraj("happy", 54, "float")}<div class="mb">Pose-moi une question sur ce que tu apprends. Je réponds à partir des chapitres de l'application, avec leurs sources, et je ne réponds pas si je n'ai pas de source. Je ne remplace pas un savant.</div></div></div>
  <form class="askbar" id="askf"><input type="text" id="askq" placeholder="Ex. : Pourquoi l'Hégire ?" maxlength="160" autocomplete="off"><button class="btn">OK</button></form><div class="sp"></div>
  <div>${KB.slice(0, 10).map(e => `<button class="pill" data-ask="${esc(e.title)}">${esc(e.title)}</button>`).join("")}</div>`;
async function answer(qs) {
  const chat = document.getElementById("chat"); qs = (qs || "").trim(); if (!chat || !qs || aiBusy) return; aiBusy = true;
  const id = "m" + Date.now();
  chat.insertAdjacentHTML("beforeend", `<div class="msg me"><div class="mb">${esc(qs)}</div></div><div class="msg">${siraj("think", 54, "float")}<div class="mb" id="${id}">Je cherche dans les chapitres…</div></div>`);
  const el = document.getElementById(id); document.getElementById("askq").value = ""; el.scrollIntoView({ behavior: "smooth", block: "center" });
  const none = `Je n'ai pas de source dans l'application pour répondre à cette question, et je préfère ne rien inventer. Reformule, ou demande à une personne de confiance formée en sciences islamiques.`;
  try {
    const r = await AI.ask(qs, aiHist.slice(-4), t => { el.innerHTML = paras(t); });
    if (r.none) el.textContent = none;
    else if (r.offline) el.innerHTML = kbHtml(r.offline) + srcHtml(r.sources.filter(s => s.id));
    else if (r.mode === "offline") el.innerHTML = `Je n'ai pas de réponse préparée, mais ces chapitres peuvent t'aider :${srcHtml(r.sources)}`;
    else { el.innerHTML = paras(r.text) + srcHtml(r.sources) + `<div class="muted small" style="margin-top:8px">${r.general ? "Réponse générale de l'IA, hors des chapitres de l'application : les références sont à vérifier. " : "Réponse générée par IA à partir des chapitres de l'application. "}Vérifie auprès d'une personne qualifiée.</div>`; aiHist.push({ role: "user", text: qs }, { role: "assistant", text: r.text }); }
  } catch (e) {
    const k = askAI(qs);
    const why = { not_granted: "autorisation refusée", bad_key: "ta clé API n'est pas valide", rate_limited: "limite atteinte chez ton fournisseur", network: "pas de connexion à ton fournisseur" }[e && e.code] || "erreur du fournisseur";
    el.innerHTML = (k ? kbHtml(k) : none) + `<div class="muted small" style="margin-top:8px">L'IA n'est pas disponible (${why}) : réponse hors ligne.</div>`;
  }
  aiBusy = false; el.scrollIntoView({ behavior: "smooth", block: "end" });
}
