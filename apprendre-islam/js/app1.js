/* Interface Sirat, partie 1 : utilitaires, guide Sirâj, questions, sessions. */
const $app = document.getElementById("app"), $nav = document.getElementById("nav"), $top = document.getElementById("top"), $toast = document.getElementById("toast");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pct = x => Math.round(x * 100);
const bar = (x, cls = "") => `<div class="bar ${cls}"><i style="width:${pct(x)}%"></i></div>`;
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
let toastT;
function toast(msg) { SND.pop(); $toast.textContent = msg; $toast.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => $toast.classList.remove("show"), 3000); }
const go = h => { location.hash = h; };
const celebrate = () => { E.evalBadges().forEach(b => toast("Nouveau badge : " + b)); const r = E.popRankUp(); if (r) FX.rankUp(r); };
const ring = (p, size = 64, st = 8, label = "", col = "var(--green)") => { const r = (size - st) / 2, c = 2 * Math.PI * r;
  return `<span class="ring" style="width:${size}px;height:${size}px"><svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${st}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${col}" stroke-width="${st}" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - Math.max(0, Math.min(1, p)))).toFixed(1)}"/></svg><span class="rt" style="font-size:${(size * .26).toFixed(0)}px">${label}</span></span>`; };
const arText = s => esc(s).replace(/\s*۝\s*/g, " • ");
const subj = id => SUBJECTS.find(s => s.id === id);

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
const siraj3d = (mood = "happy", size = 110, anim = "float", kind = "lantern") => `<span class="s3d" data-k="${kind}" style="--s:${size}px">${siraj(mood, size, anim)}</span>`;
const siraj = (mood = "happy", size = 110, anim = "float", o = {}) => `<span class="sj ${anim}" style="--s:${size}px">${sirajSVG(mood, o)}</span>`;
function confetti() {
  const cols = ["#f4b836", "#0f8a5f", "#27b77c", "#ffffff", "#e0a82e", "#e5584a"];
  for (let i = 0; i < 44; i++) { const d = document.createElement("i"); d.className = "confetti"; d.style.left = Math.random() * 100 + "vw"; d.style.background = cols[i % cols.length]; d.style.setProperty("--dx", (Math.random() * 140 - 70) + "px"); d.style.animationDelay = Math.random() * .4 + "s"; document.body.appendChild(d); setTimeout(() => d.remove(), 2700); }
}
const OK_MSG = ["Machallah, bravo !", "Excellent !", "Tu progresses bien !", "Exactement !", "Super !"], KO_MSG = ["Pas grave, on apprend !", "Regarde la bonne réponse.", "Courage, ça reviendra en révision.", "Tu vas y arriver !"];
const pickMsg = a => a[Math.floor(Math.random() * a.length)];
function dayMessage() {
  const S = E.S, t = E.dayStr();
  if (!S.stats.total && !S.xp) return "Salam ! Je suis Sirâj. On commence ensemble ?";
  if (S.streak.count > 0 && S.streak.last !== t) return `Ta série de ${S.streak.count} jour${S.streak.count > 1 ? "s" : ""} est en jeu : fais une petite activité !`;
  if (E.dueQids().length) return "Quelques notions méritent une courte révision. Prêt ?";
  return pickMsg(["Chaque petite leçon compte. Bismillah !", "Un pas après l'autre, tu avances bien.", "Prêt pour la suite ?", "Belle journée pour apprendre !"]);
}

/* ---------- Questions ---------- */
const KIND = { mc: "Choisis la bonne réponse", tf: "Vrai ou faux ?", order: "Remets dans l'ordre", match: "Associe", text: "Écris la réponse" };
function renderQ(q, el) { // affiche la question, renvoie { evaluate(): true|false|null, reveal, answerText }
  const head = `<div class="qkind">${KIND[q.t]}</div><h3>${esc(q.q)}</h3>`; let api;
  if (q.t === "mc" || q.t === "tf") {
    const list = q.t === "tf" ? ["Vrai", "Faux"].map((t, i) => ({ t, i })) : E.shuffle(q.o.map((t, i) => ({ t, i }))); let sel = null;
    el.innerHTML = head + list.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${q.t === "tf" ? (k ? "✗" : "✓") : k + 1}</span>${esc(o.t)}</button>`).join("");
    el.onclick = e => { const b = e.target.closest(".opt"); if (!b) return; sel = +b.dataset.k; el.querySelectorAll(".opt").forEach(x => x.classList.toggle("sel", x === b)); };
    api = { evaluate: () => sel === null ? null : (q.t === "tf" ? (sel === 0) === q.a : list[sel].i === q.a),
      reveal: () => { el.querySelectorAll(".opt").forEach((b, k) => { const good = q.t === "tf" ? (k === 0) === q.a : list[k].i === q.a; if (good) b.classList.add("ok"); else if (b.classList.contains("sel")) b.classList.add("ko"); }); },
      answerText: q.t === "tf" ? (q.a ? "Vrai" : "Faux") : q.o[q.a] };
  } else if (q.t === "order") {
    let picked = []; const pool = E.shuffle(q.items.map((t, i) => ({ t, i })));
    const draw = () => { el.innerHTML = head + `<p class="muted">Touche les éléments dans le bon ordre. Touche un élément placé pour le retirer.</p><div class="picked">${picked.map(i => `<button class="chip" data-un="${i}">${picked.indexOf(i) + 1}. ${esc(q.items[i])}</button>`).join("")}</div><div>${pool.filter(o => !picked.includes(o.i)).map(o => `<button class="chip" data-add="${o.i}">${esc(o.t)}</button>`).join(" ")}</div>`; };
    draw();
    el.onclick = e => { const b = e.target.closest(".chip"); if (!b) return; if (b.dataset.add !== undefined) picked.push(+b.dataset.add); else picked = picked.filter(i => i !== +b.dataset.un); draw(); };
    api = { evaluate: () => picked.length < q.items.length ? null : picked.every((v, k) => v === k), reveal() {}, answerText: q.items.join(" → ") };
  } else if (q.t === "match") {
    const rights = [...new Set(E.shuffle(q.pairs.map(p => p[1])))]; el.onclick = null;
    el.innerHTML = head + q.pairs.map((p, i) => `<div class="pair"><b>${esc(p[0])}</b><select data-i="${i}"><option value="">…</option>${rights.map(r => `<option>${esc(r)}</option>`).join("")}</select></div>`).join("");
    api = { evaluate: () => { const s = [...el.querySelectorAll("select")]; return s.some(x => !x.value) ? null : s.every((x, i) => x.value === q.pairs[i][1]); }, reveal() {}, answerText: q.pairs.map(p => p.join(" = ")).join(" · ") };
  } else {
    el.onclick = null; el.innerHTML = head + `<input type="text" maxlength="40" autocomplete="off" autocapitalize="off" placeholder="Ta réponse">`;
    api = { evaluate: () => { const v = norm(el.querySelector("input").value); return v.length < 2 ? null : q.ok.some(k => v.includes(norm(k))); }, reveal() {}, answerText: q.e || q.ok[0] };
  }
  return api;
}

/* ---------- Session de questions (style « dock » en bas) ---------- */
function runSession(cfg) { // cfg: {kind,title,questions,retry,back,chapter,level,after}
  const total = cfg.questions.length;
  document.body.classList.add("focus");
  if (!total) { $app.innerHTML = `<div class="card"><p>Rien à faire ici pour l'instant. 🎉</p><a class="btn" href="#/home">Retour</a></div>`; return; }
  let queue = cfg.questions.map(q => ({ q, retry: false })), answered = 0, correct = 0; const wrong = [];
  const dockEl = () => { let d = document.getElementById("dock"); if (!d) { d = document.createElement("div"); d.id = "dock"; d.className = "dock"; document.body.appendChild(d); } return d; };
  const hint = (item, n, t) => item.retry ? "On réessaie cette question, tu vas y arriver !" : n === 0 ? "C'est parti ! Prends ton temps." : n === t - 1 ? "Dernière question, courage !" : pickMsg(["Réfléchis bien !", "Tu peux le faire !", "Question " + (n + 1) + " sur " + t + ".", "Bismillah, on continue !"]);
  const react = ok => { // Sirâj réagit : saut + étincelles si juste, secousse + goutte si faux
    const mas = document.getElementById("mas"), qc = document.getElementById("qc"); if (!mas) return;
    const h3 = document.getElementById("mas3"), msg = esc(ok ? pickMsg(OK_MSG) : pickMsg(KO_MSG));
    if (h3 && h3.classList.contains("on3d") && h3.__h3) { h3.__h3.react(ok); document.getElementById("mb").outerHTML = `<div class="bubble pop" id="mb">${msg}</div>`; }
    else mas.innerHTML = siraj(ok ? "proud" : "oops", 88, ok ? "jump" : "shake") + `<div class="bubble pop" id="mb">${msg}</div>`;
    if (ok) { for (let k = 0; k < 10; k++) { const s = document.createElement("i"); s.className = "spk"; const ang = (k / 10) * 6.28; s.style.setProperty("--dx", Math.cos(ang) * (50 + Math.random() * 30) + "px"); s.style.setProperty("--dy", Math.sin(ang) * (40 + Math.random() * 30) + "px"); s.style.animationDelay = (k % 3) * 40 + "ms"; mas.appendChild(s); setTimeout(() => s.remove(), 1100); } }
    else { const d = document.createElement("i"); d.className = "sweat"; mas.appendChild(d); setTimeout(() => d.remove(), 1300); if (qc) { qc.classList.add("shk"); setTimeout(() => qc.classList.remove("shk"), 600); } }
  };
  const step = () => {
    if (!queue.length) return finish();
    const item = queue.shift(), dock = dockEl(); dock.className = "dock";
    $app.innerHTML = `<div class="stop"><button class="x" id="quit" aria-label="Quitter">${ico("close", 26)}</button>${bar(answered / total, "")}</div><div class="mascot" id="mas"><span class="s3d" id="mas3" data-k="lantern" style="--s:88px">${siraj("think", 76, "float")}</span><div class="bubble" id="mb">${esc(hint(item, answered, total))}</div></div><div class="card qcard" id="qc"><div id="q"></div></div>`;
    dock.innerHTML = `<div class="in"><button class="btn" id="go" disabled>Vérifier</button></div>`;
    H3D.scan($app);
    const el = document.getElementById("q"), api = renderQ(item.q, el), btn = document.getElementById("go"); let checked = false;
    const refresh = () => { if (!checked) btn.disabled = api.evaluate() === null; };
    el.addEventListener("click", () => setTimeout(refresh, 0)); el.addEventListener("input", refresh); el.addEventListener("change", refresh);
    document.getElementById("quit").onclick = () => go(cfg.back || "#/home");
    btn.onclick = () => {
      if (checked) return step();
      const ok = api.evaluate(); if (ok === null) return;
      checked = true; el.classList.add("locked-q"); el.querySelectorAll("select,input").forEach(x => x.disabled = true); api.reveal(ok);
      if (!item.retry) { answered++; if (ok) correct++; else wrong.push(item.q); if (item.q.id && QINDEX[item.q.id]) E.answer(item.q.id, ok); }
      if (!ok && cfg.retry !== false && !item.retry) queue.push({ q: item.q, retry: true });
      ok ? SND.correct() : SND.wrong(); react(ok); if (ok) FX.burst(el.querySelector(".opt.ok, .opt.sel") || btn);
      const ch = CHAPTERS[item.q.chapter], srcs = ch ? `<div class="src">📚 <b>Sources</b> : ${ch.sources.map(esc).join(" · ")}</div>` : "";
      dock.className = "dock " + (ok ? "ok" : "ko");
      dock.innerHTML = `<div class="in"><div class="fbh"><div class="fbt">${ok ? "✓ Correct !" : "✗ Pas tout à fait"}</div></div>${ok ? "" : `<div class="fbx">Bonne réponse : <b>${esc(api.answerText)}</b></div>`}${item.q.e ? `<div class="fbx muted">${esc(item.q.e)}</div>` : ""}${srcs}<button class="btn" id="go">Continuer</button></div>`;
      document.getElementById("go").onclick = step;
    };
  };
  const finish = () => {
    const dock = document.getElementById("dock"); if (dock) dock.remove(); document.body.classList.remove("focus");
    if (cfg.kind === "check") { if (correct) { E.addXP(E.XP.check); { toast("+5 XP"); FX.gain("+5 XP"); } } return cfg.after(); }
    const score = correct / total, res = { score, correct, total, wrong, xp: 0 }, S = E.S;
    if (cfg.kind === "quiz") { S.stats.quizzes++; res.xp = E.addXP(score >= 0.6 ? E.XP.quiz : 5); if (score === 1) S.perfect = true; }
    else if (cfg.kind === "review") { S.stats.reviews++; res.xp = E.addXP(E.XP.review); }
    else if (cfg.kind === "free") res.xp = E.addXP(E.XP.free);
    else if (cfg.kind === "daily") { if (!E.dayState().daily && score >= 0.6) { E.dayState().daily = true; S.stats.dailies++; res.xp = E.addXP(E.XP.daily); } else E.touch(); }
    else if (cfg.kind === "exam") { const pass = score >= E.EXAM_PASS; res.pass = pass; S.stats.exams += pass && !S.exams[cfg.level] ? 1 : 0; if (pass) S.exams[cfg.level] = true; res.xp = E.addXP(pass ? E.XP.exam : 10); }
    E.save(); celebrate();
    const newly = E.newLevelsCompleted(), stages = [...new Set(newly.map(E.stageOf))].filter(s => { const p = E.stageProgress(s); return p.total && p.done === p.total; });
    const m = cfg.chapter ? E.mastery(cfg.chapter) : null, great = score >= 0.8 || res.pass;
    if (res.xp) setTimeout(() => { SND.xp(); FX.count(document.getElementById("xpn"), res.xp); FX.gain("+" + res.xp + " XP", document.querySelector(".xpchip")); if (up) FX.rankUp(up); }, 450); if (great || newly.length) { confetti(); SND.win(); }
    const title = cfg.kind === "exam" ? (res.pass ? "Examen réussi !" : "Examen non validé (65 % pour réussir). Révise puis réessaie.") : score >= 0.8 ? "Bravo !" : score >= 0.6 ? "Bien joué, continue !" : "Il faut réviser un peu.";
    const up = E.popRankUp();
    $app.innerHTML = `<div class="resc"><div class="sp"></div>${score >= 0.6 ? siraj3d("proud", 150) : siraj(great ? "proud" : "think", 130, "float")}<div class="sp"></div>
      <h2>${title}</h2><div class="sp"></div>${ring(score, 120, 12, `${correct}/${total}`, score >= 0.6 ? "var(--green)" : "var(--gold)")}<div class="sp"></div>
      <div class="xpchip">${ico("gem", 20)} +<span id="xpn">0</span> XP</div>${(() => { const r = E.rank(); return `<div class="rkc"><div class="row"><b>Rang ${r.n} · ${esc(r.title)}</b><span class="muted small">${r.cur}/${r.need} XP</span></div>${bar(r.pct)}</div>`; })()}${up ? `<div class="lvlup">⭐ Nouveau rang : ${up.n} · ${esc(up.title)} !</div>` : ""}
      ${newly.map(n => `<div class="lvlup">🎉 Niveau ${n} validé !</div>`).join("")}${stages.map(s => `<div class="lvlup">🎓 Étape terminée : ${esc(STAGES[s])}</div>`).join("")}
      ${m !== null ? `<div class="card" style="text-align:left"><div class="row"><b>Maîtrise du chapitre</b><b>${pct(m)} %</b></div>${bar(m)}<span class="muted small">${m >= E.UNLOCK ? "🔓 Suite débloquée. Les révisions l'amèneront vers 100 %." : "60 % pour débloquer la suite. Les questions ratées reviendront en révision."}</span></div>` : ""}
      ${wrong.length ? `<p class="muted">🔄 ${wrong.length} question${wrong.length > 1 ? "s" : ""} à revoir : ajoutée${wrong.length > 1 ? "s" : ""} à tes révisions.</p>` : ""}</div>
      <a class="btn gold" href="${E.nextAction().href}">Continuer</a><a class="btn sec" href="${cfg.back || "#/home"}">Retour</a>`;
  };
  step();
}
