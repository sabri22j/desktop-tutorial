/* Moteur : XP, maîtrise, révision espacée, déblocage, série, badges. XP ≠ maîtrise. */
const E = (() => {
  const KEY = "islam-path-v1";
  const BOX_STRENGTH = [0, 0.8, 0.9, 0.96, 1];   // force d'une question selon sa « boîte »
  const BOX_DAYS = [0, 1, 3, 7, 14];              // délai avant la prochaine révision
  const UNLOCK = 0.6, EXAM_PASS = 0.65; // parcours souple
  const XP = { lesson: 10, check: 5, quiz: 20, exam: 50, review: 15, daily: 30, free: 10 };

  const dayStr = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const addDays = (s, n) => { const d = new Date(s + "T12:00:00"); d.setDate(d.getDate() + n); return dayStr(d); };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const fresh = () => ({ xp: 0, goal: 10, onboarded: false, settings: { music: true, vol: 0.5, sfx: true, style: "nature", click: true, free: false, voice: "", rate: 0.95, pitch: 1 }, profile: null, reminder: { on: false, time: "19:00", last: null }, streak: { count: 0, last: null }, log: {}, cards: {}, celebrated: {}, qs: {}, lessons: {}, exams: {}, badges: {},
    stats: { ok: 0, total: 0, quizzes: 0, reviews: 0, dailies: 0, exams: 0 }, day: { date: null, lessons: 0, questions: 0, xp: 0, daily: false } });
  let S;
  try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch { S = fresh(); }
  S.settings = Object.assign({ music: true, vol: 0.5, sfx: true, style: "nature", click: true, free: false, voice: "", rate: 0.95, pitch: 1 }, S.settings);
  if (S.settings.v !== 3) { S.settings.v = 3; S.settings.style = "nature"; } // v3 : sons sans instrument
  let saveHook = null;
  const save = () => { S.updatedAt = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} if (saveHook) saveHook(); };
  const reset = () => { const st = S.settings; S = fresh(); S.settings = st; save(); };
  /* Synchronisation de compte : l'état exporté exclut les réglages propres à l'appareil (sons, voix). */
  const exportState = () => { const o = JSON.parse(JSON.stringify(S)); delete o.settings; return o; };
  const importState = obj => { const st = S.settings; S = Object.assign(fresh(), obj); S.settings = st; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  const setSaveHook = f => { saveHook = f; };

  const dayState = () => { const t = dayStr(); if (S.day.date !== t) S.day = { date: t, lessons: 0, questions: 0, xp: 0, daily: false }; return S.day; };

  function touch() { // enregistre une activité : série quotidienne
    const t = dayStr(); dayState();
    if (S.streak.last === t) return;
    S.streak.count = S.streak.last === addDays(t, -1) ? S.streak.count + 1 : 1;
    S.streak.last = t;
  }
  const streak = () => { const t = dayStr(); return (S.streak.last === t || S.streak.last === addDays(t, -1)) ? S.streak.count : 0; };
  function logDay() { const t = dayStr(); return (S.log[t] = S.log[t] || { xp: 0, q: 0 }); }
  /* Rang d'XP : indépendant des 101 niveaux du parcours. Le rang n demande 100·n·(n−1) XP au total (200, 600, 1 200, 2 000…). */
  const RANKS = ["Curieux", "Apprenti", "Persévérant", "Studieux", "Assidu", "Passionné", "Érudit en herbe", "Lumière", "Gardien du savoir", "Sage"];
  const rankStart = n => 100 * n * (n - 1);
  function rank(xp = S.xp) { let n = 1; while (xp >= rankStart(n + 1)) n++; const a = rankStart(n), b = rankStart(n + 1); return { n, title: RANKS[Math.min(RANKS.length - 1, n - 1)], cur: xp - a, need: b - a, left: b - xp, pct: (xp - a) / (b - a) }; }
  let rankUp = null;
  const popRankUp = () => { const r = rankUp; rankUp = null; return r; };
  function addXP(n) { const before = rank().n; S.xp += n; dayState().xp += n; logDay().xp += n; const after = rank().n; if (after > before) rankUp = rank(); touch(); save(); return n; }

  /* Questions */
  function answer(qid, ok) { // première tentative uniquement
    const q = QINDEX[qid]; if (!q) return;
    const t = dayStr(), st = S.qs[qid] || { box: 0, due: t, wrong: 0, seen: 0 };
    st.seen++;
    if (ok) { if (st.due <= t) st.box = Math.min(4, st.box + 1); st.due = addDays(t, BOX_DAYS[st.box]); }
    else { st.box = Math.max(0, st.box - 1); st.wrong++; st.due = t; }
    S.qs[qid] = st; S.stats.total++; if (ok) S.stats.ok++;
    dayState().questions++; logDay().q++; touch(); save();
  }
  const mastery = id => { const c = CHAPTERS[id]; return c.quiz.reduce((s, q) => s + BOX_STRENGTH[(S.qs[q.id] || { box: 0 }).box], 0) / c.quiz.length; };
  const lessonsDone = id => CHAPTERS[id].lessons.filter((_, i) => S.lessons[id + ":" + i]).length;
  const quizAttempted = id => CHAPTERS[id].quiz.some(q => S.qs[q.id]);
  function completeLesson(id, i) { const k = id + ":" + i; if (S.lessons[k]) return 0; S.lessons[k] = true; dayState().lessons++; return addXP(XP.lesson); }

  /* Niveaux */
  const levelObj = n => LEVELS[n] || null;
  const levelComplete = n => { const L = LEVELS[n]; return !!L && L.chapters.every(c => mastery(c.id) >= UNLOCK); };
  const levelUnlocked = n => !!LEVELS[n] && (n === 0 || S.settings.free || levelComplete(n - 1));
  const currentLevel = () => { for (let i = 0; i < LEVELS.length; i++) if (!levelComplete(i)) return i; return LEVELS.length; };
  const levelsCompleted = () => LEVELS.filter((_, i) => levelComplete(i)).length;
  const progress = () => levelsCompleted() / LEVEL_COUNT;
  const chapterUnlocked = id => levelUnlocked(CHAPTERS[id].level); // ordre libre dans un niveau
  const examReady = n => needsExam(n) && !!LEVELS[n] && !S.exams[n] && levelComplete(n);
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
      return { label: "Consolider", sub: `${c.title} · maîtrise ${Math.round(mastery(c.id) * 100)} % (60 % pour continuer)`, href: dueQids().length ? "#/review" : `#/quiz/${c.id}` };
    }
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


  /* Semaine, étapes, cartes de révision */
  const LETTERS = ["D", "L", "M", "M", "J", "V", "S"];
  function weekLog() { const t = dayStr(), out = []; for (let i = 6; i >= 0; i--) { const d = addDays(t, -i), l = S.log[d] || { xp: 0, q: 0 }, dt = new Date(d + "T12:00:00"); out.push({ date: d, letter: LETTERS[dt.getDay()], xp: l.xp, active: l.xp > 0 || l.q > 0, today: i === 0 }); } return out; }
  const stageOf = n => n === 0 ? 0 : Math.ceil(n / 10);
  function stageProgress(s) { const a = s === 0 ? 0 : (s - 1) * 10 + 1, b = s === 0 ? 0 : s * 10; let done = 0, total = 0; for (let n = a; n <= b; n++) if (LEVELS[n]) { total++; if (levelComplete(n)) done++; } return { done, total, a, b }; }
  function newLevelsCompleted() { const out = []; LEVELS.forEach(L => { if (levelComplete(L.n) && !S.celebrated[L.n]) { S.celebrated[L.n] = true; out.push(L.n); } }); if (out.length) save(); return out; }
  const CARD_DAYS = [0, 1, 3, 7, 14];
  const cardsDue = (cat) => { const t = dayStr(), pool = LEXIQUE.filter(c => !cat || c.cat === cat), seen = pool.filter(c => S.cards[c.id] && S.cards[c.id].due <= t), fresh = pool.filter(c => !S.cards[c.id]); return { seen, fresh }; };
  function cardSession(cat, n = 10) { const { seen, fresh } = cardsDue(cat); return shuffle(seen).concat(shuffle(fresh)).slice(0, n); }
  function cardAnswer(id, ok) { const t = dayStr(), c = S.cards[id] || { box: 0, due: t }; c.box = ok ? Math.min(4, c.box + 1) : 0; c.due = addDays(t, CARD_DAYS[c.box]); S.cards[id] = c; touch(); save(); }
  const cardStats = () => { const known = LEXIQUE.filter(c => S.cards[c.id] && S.cards[c.id].box >= 3).length, seen = LEXIQUE.filter(c => S.cards[c.id]).length, due = cardsDue().seen.length; return { total: LEXIQUE.length, seen, known, due }; };

  return { get S() { return S; }, rank, popRankUp, save, reset, exportState, importState, setSaveHook, XP, UNLOCK, EXAM_PASS, BADGES, dayStr, shuffle, dayState, addXP, answer, mastery, lessonsDone, quizAttempted, completeLesson,
    levelObj, levelComplete, levelUnlocked, currentLevel, levelsCompleted, progress, chapterUnlocked, examReady, subjectMastery,
    planFor, estimate, weekLog, stageOf, stageProgress, newLevelsCompleted, cardSession, cardAnswer, cardStats, cardsDue, logDay, unlockedQids, dueQids, weakChapters, pick, buildDaily, buildExam, goalPlan, nextAction, streak, touch, evalBadges };
})();
