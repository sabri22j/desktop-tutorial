/* Moteur : XP, maîtrise, révision espacée, déblocage, série, badges. XP ≠ maîtrise. */
const E = (() => {
  const KEY = "islam-path-v1";
  const BOX_STRENGTH = [0, 0.8, 0.9, 0.96, 1];   // force d'une question selon sa « boîte »
  const BOX_DAYS = [0, 1, 3, 7, 14];              // délai avant la prochaine révision
  const UNLOCK = 0.7, EXAM_PASS = 0.75;
  const XP = { lesson: 10, check: 5, quiz: 20, exam: 50, review: 15, daily: 30, free: 10 };

  const dayStr = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const addDays = (s, n) => { const d = new Date(s + "T12:00:00"); d.setDate(d.getDate() + n); return dayStr(d); };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const fresh = () => ({ xp: 0, goal: 10, onboarded: false, settings: { music: true, vol: 0.5, sfx: true }, profile: null, reminder: { on: false, time: "19:00", last: null }, streak: { count: 0, last: null }, qs: {}, lessons: {}, exams: {}, badges: {},
    stats: { ok: 0, total: 0, quizzes: 0, reviews: 0, dailies: 0, exams: 0 }, day: { date: null, lessons: 0, questions: 0, xp: 0, daily: false } });
  let S;
  try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch { S = fresh(); }
  S.settings = Object.assign({ music: true, vol: 0.5, sfx: true }, S.settings);
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  const reset = () => { const st = S.settings; S = fresh(); S.settings = st; save(); };

  const dayState = () => { const t = dayStr(); if (S.day.date !== t) S.day = { date: t, lessons: 0, questions: 0, xp: 0, daily: false }; return S.day; };

  function touch() { // enregistre une activité : série quotidienne
    const t = dayStr(); dayState();
    if (S.streak.last === t) return;
    S.streak.count = S.streak.last === addDays(t, -1) ? S.streak.count + 1 : 1;
    S.streak.last = t;
  }
  const streak = () => { const t = dayStr(); return (S.streak.last === t || S.streak.last === addDays(t, -1)) ? S.streak.count : 0; };
  function addXP(n) { S.xp += n; dayState().xp += n; touch(); save(); return n; }

  /* Questions */
  function answer(qid, ok) { // première tentative uniquement
    const q = QINDEX[qid]; if (!q) return;
    const t = dayStr(), st = S.qs[qid] || { box: 0, due: t, wrong: 0, seen: 0 };
    st.seen++;
    if (ok) { if (st.due <= t) st.box = Math.min(4, st.box + 1); st.due = addDays(t, BOX_DAYS[st.box]); }
    else { st.box = Math.max(0, st.box - 1); st.wrong++; st.due = t; }
    S.qs[qid] = st; S.stats.total++; if (ok) S.stats.ok++;
    dayState().questions++; touch(); save();
  }
  const mastery = id => { const c = CHAPTERS[id]; return c.quiz.reduce((s, q) => s + BOX_STRENGTH[(S.qs[q.id] || { box: 0 }).box], 0) / c.quiz.length; };
  const lessonsDone = id => CHAPTERS[id].lessons.filter((_, i) => S.lessons[id + ":" + i]).length;
  const quizAttempted = id => CHAPTERS[id].quiz.some(q => S.qs[q.id]);
  function completeLesson(id, i) { const k = id + ":" + i; if (S.lessons[k]) return 0; S.lessons[k] = true; dayState().lessons++; return addXP(XP.lesson); }

  /* Niveaux */
  const levelObj = n => LEVELS[n] || null;
  const levelComplete = n => { const L = LEVELS[n]; return !!L && L.chapters.every(c => mastery(c.id) >= UNLOCK) && (!needsExam(n) || !!S.exams[n]); };
  const levelUnlocked = n => n === 0 || (!!LEVELS[n] && levelComplete(n - 1));
  const currentLevel = () => { for (let i = 0; i < LEVELS.length; i++) if (!levelComplete(i)) return i; return LEVELS.length; };
  const levelsCompleted = () => LEVELS.filter((_, i) => levelComplete(i)).length;
  const progress = () => levelsCompleted() / LEVEL_COUNT;
  const chapterUnlocked = id => { const c = CHAPTERS[id]; return levelUnlocked(c.level) && (c.idx === 0 || mastery(LEVELS[c.level].chapters[c.idx - 1].id) >= UNLOCK); };
  const examReady = n => needsExam(n) && !!LEVELS[n] && !S.exams[n] && LEVELS[n].chapters.every(c => mastery(c.id) >= UNLOCK);
  const subjectMastery = sid => { const cs = Object.values(CHAPTERS).filter(c => c.subject === sid); return cs.length ? cs.reduce((s, c) => s + mastery(c.id), 0) / cs.length : null; };

  /* Révisions, défis, examens */
  const unlockedQids = () => Object.values(CHAPTERS).filter(c => chapterUnlocked(c.id)).flatMap(c => c.quiz.map(q => q.id));
  const dueQids = () => { const t = dayStr(), ok = new Set(unlockedQids()); return Object.keys(S.qs).filter(id => ok.has(id) && S.qs[id].due <= t).sort((a, b) => S.qs[b].wrong - S.qs[a].wrong); };
  const weakChapters = () => Object.values(CHAPTERS).filter(c => quizAttempted(c.id) && mastery(c.id) < 0.85).sort((a, b) => mastery(a.id) - mastery(b.id));
  const pick = (ids, n) => shuffle(ids).slice(0, n).map(id => QINDEX[id]);
  const buildDaily = () => pick(unlockedQids(), 5);
  const buildExam = n => { const ids = []; LEVELS.slice(0, n + 1).forEach(L => L.chapters.forEach(c => c.quiz.forEach(q => ids.push(q.id)))); return pick(ids, 30); };
  const planFor = m => ({ 5: { lessons: 1, questions: 5 }, 10: { lessons: 2, questions: 10 }, 15: { lessons: 3, questions: 15 }, 20: { lessons: 4, questions: 20 } }[m] || { lessons: 2, questions: 10 });
  const goalPlan = () => planFor(S.goal);
  // Estimation : on extrapole le nombre de leçons par niveau rédigé aux 101 niveaux (contenu 11-100 encore à écrire).
  const estimate = m => { const per = Object.values(CHAPTERS).reduce((s, c) => s + c.lessons.length, 0) / LEVELS.length, total = Math.round(per * LEVEL_COUNT), p = planFor(m); return { plan: p, total, days: Math.ceil(total / p.lessons) }; };

  /* Que faire maintenant ? */
  function nextAction() {
    const n = currentLevel(), L = LEVELS[n];
    if (!L) return { label: "Révision", sub: "Tu as terminé tout le contenu disponible pour l'instant.", href: dueQids().length ? "#/review" : "#/quiz" };
    for (const c of L.chapters) {
      if (mastery(c.id) >= UNLOCK) continue;
      const done = lessonsDone(c.id);
      if (done < c.lessons.length) return { label: done ? "Continuer la leçon" : "Commencer", sub: `${c.title} · leçon ${done + 1}/${c.lessons.length}`, href: `#/lesson/${c.id}/${done}` };
      if (!quizAttempted(c.id)) return { label: "Faire le quiz", sub: c.title, href: `#/quiz/${c.id}` };
      return { label: "Consolider", sub: `${c.title} · maîtrise ${Math.round(mastery(c.id) * 100)} % (70 % requis)`, href: dueQids().length ? "#/review" : `#/quiz/${c.id}` };
    }
    if (examReady(n)) return { label: "Passer l'examen", sub: `Examen du niveau ${n}`, href: `#/exam/${n}` };
    return { label: "Continuer", sub: "", href: "#/path" };
  }

  /* Badges */
  const BADGES = [
    ["first", "🏆", "Premier chapitre terminé", s => Object.keys(CHAPTERS).some(id => mastery(id) >= UNLOCK)],
    ["ch10", "🏆", "10 chapitres maîtrisés", s => Object.keys(CHAPTERS).filter(id => mastery(id) >= UNLOCK).length >= 10],
    ["streak7", "🔥", "7 jours de série", s => s.streak.count >= 7],
    ["xp1000", "⭐", "1 000 XP", s => s.xp >= 1000],
    ["exam1", "🎓", "Premier examen réussi", s => s.stats.exams >= 1],
    ["perf", "💯", "Un quiz sans faute", s => !!s.perfect],
    ["daily", "🎯", "Premier défi quotidien", s => s.stats.dailies >= 1],
  ];
  function evalBadges() {
    const fresh = [];
    BADGES.forEach(([id, ic, name, f]) => { if (!S.badges[id] && f(S)) { S.badges[id] = dayStr(); fresh.push(ic + " " + name); } });
    if (fresh.length) save();
    return fresh;
  }

  return { get S() { return S; }, save, reset, XP, UNLOCK, EXAM_PASS, BADGES, dayStr, shuffle, dayState, addXP, answer, mastery, lessonsDone, quizAttempted, completeLesson,
    levelObj, levelComplete, levelUnlocked, currentLevel, levelsCompleted, progress, chapterUnlocked, examReady, subjectMastery,
    planFor, estimate, unlockedQids, dueQids, weakChapters, pick, buildDaily, buildExam, goalPlan, nextAction, streak, touch, evalBadges };
})();
