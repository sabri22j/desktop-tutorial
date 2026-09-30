/* Interface Sirat, partie 3 : profil, introduction, rappels, routage. */
V.profile = () => {
  const S = E.S, n = E.currentLevel(), wk = E.weekLog(), mx = Math.max(10, ...wk.map(w => w.xp)), done = Object.keys(CHAPTERS).filter(id => E.mastery(id) >= E.UNLOCK).length, best = VOICE.best(), cur = VOICE.pick();
  const allV = VOICE.voices(), fr = allV.filter(v => /^fr/i.test(v.lang)).sort((a, b) => (b === best) - (a === best)), rest = allV.filter(v => !/^fr/i.test(v.lang));
  const vopt = v => `<option value="${esc(v.voiceURI)}" ${cur && v.voiceURI === cur.voiceURI && S.settings.voice ? "selected" : ""}>${v === best ? "★ " : ""}${esc(v.name)} (${esc(v.lang)})</option>`;
  const sw = (id, label, on) => `<label class="set"><span>${label}</span><input type="checkbox" class="switch" id="${id}" ${on ? "checked" : ""}></label>`;
  return `<h2>Profil</h2><div class="sp"></div>
  <div class="card phead">${siraj("happy", 84, "float")}<div><div class="muted small">Niveau actuel</div><h2>${n >= LEVELS.length ? "100" : n}</h2><div class="xpchip" style="margin:4px 0 0">${ico("gem", 18)} ${S.xp} XP</div></div></div>
  <div class="stat3" style="grid-template-columns:repeat(3,1fr)"><div class="stat"><b style="color:#ef7b1a">${E.streak()}</b><span>Série</span></div><div class="stat"><b>${S.stats.total ? pct(S.stats.ok / S.stats.total) : 0}%</b><span>Réussite</span></div><div class="stat"><b>${done}</b><span>Chapitres</span></div></div>
  <div class="card"><div class="row"><h3>Cette semaine</h3><span class="muted small">XP par jour</span></div><div class="wbars">${wk.map(w => `<div class="wb ${w.active ? "on" : ""}"><i style="height:${Math.max(6, w.xp / mx * 100)}%"></i><span>${w.letter}</span></div>`).join("")}</div></div>
  <div class="card"><h3>Maîtrise par matière</h3><div class="sp"></div>${SUBJECTS.map(s => { const m = E.subjectMastery(s.id) || 0; return `<div class="row" style="padding:6px 0"><div class="gap"><span class="ic-b" style="width:38px;height:38px;border-radius:12px;background:var(--green-l);color:var(--green);display:flex;align-items:center;justify-content:center">${ico(LEVEL_ICON[s.id], 20)}</span><b>${esc(s.name)}</b></div><b>${pct(m)} %</b></div>${bar(m)}`; }).join("")}<p class="muted small">Niveau 100 = parcours de l'application terminé, pas « tout l'islam ».</p></div>
  <div class="card"><h3>Badges</h3><div class="sp"></div><div class="badges">${E.BADGES.map(b => `<div class="bdg ${S.badges[b[0]] ? "" : "off"}"><b>${b[1]}</b>${esc(b[2])}</div>`).join("")}</div></div>
  <div class="sec-h"><h3>Paramètres</h3></div>
  <div class="card"><h3>Sons</h3>${sw("set-music", "Musique de fond (nature)", S.settings.music)}<div style="padding:8px 0">${[["nature", "Eau et vent"], ["pluie", "Pluie douce"], ["mer", "Vagues"], ["oiseaux", "Oiseaux et ruisseau"]].map(([id, nm]) => `<button class="pill ${S.settings.style === id ? "on" : ""}" data-style="${id}">${nm}</button>`).join("")}</div>
    <label class="set"><span>Volume</span><input type="range" id="set-vol" min="0" max="1" step="0.05" value="${S.settings.vol}"></label>${sw("set-sfx", "Sons juste / faux", S.settings.sfx)}${sw("set-click", "Bruit des boutons", S.settings.click)}
    <div style="padding-top:8px"><button class="pill" id="t-ok">Écouter « juste »</button><button class="pill" id="t-ko">Écouter « faux »</button></div><p class="muted small">Aucun instrument ni mélodie : uniquement des sons de la nature et de petits bruits.</p></div>
  <div class="card"><h3>Voix de lecture</h3><p class="muted small">${allV.length ? `Voix utilisée : <b>${esc(cur ? cur.name : "automatique")}</b>.` : "Aucune voix détectée sur cet appareil."} ${cur && VOICE.isRobotic(cur) ? "Cette voix peut sembler robotique : choisis une voix marquée « Natural », « Neural », « Enhanced » ou « Google » si ton appareil en propose." : ""}</p>
    <select id="set-voice"><option value="">★ Automatique (la plus naturelle)</option>${fr.length ? `<optgroup label="Français">${fr.map(vopt).join("")}</optgroup>` : ""}${rest.length ? `<optgroup label="Autres langues">${rest.map(vopt).join("")}</optgroup>` : ""}</select>
    <label class="set"><span>Vitesse</span><input type="range" id="set-rate" min="0.6" max="1.3" step="0.05" value="${S.settings.rate}"></label><label class="set"><span>Grave ↔ aigu</span><input type="range" id="set-pitch" min="0.6" max="1.4" step="0.05" value="${S.settings.pitch}"></label>
    <button class="pill" id="t-voice">Écouter un exemple</button><p class="muted small">Si des enregistrements humains sont ajoutés dans le dossier <code>audio/</code>, ils sont lus en priorité (voir le README).</p></div>
  <div class="card"><h3>Rappel quotidien</h3><div class="row"><input type="time" id="ptime" value="${S.reminder.time}" style="width:auto"><b>${S.reminder.on ? "Activé" : "Désactivé"}</b></div><button class="btn sec" id="prem">Activer / mettre à jour</button><button class="btn sec" id="pics">Ajouter à mon agenda</button></div>
  <div class="card"><h3>Objectif quotidien</h3><div>${[5, 10, 15, 20].map(m => `<button class="pill ${S.goal === m ? "on" : ""}" data-goal="${m}">${m} min</button>`).join("")}</div>${sw("set-free", "Tout débloquer (explorer librement)", S.settings.free)}</div>
  <button class="btn sec" id="pintro">Revoir l'introduction avec Sirâj</button><button class="btn sec" id="rst">Réinitialiser ma progression</button>`;
};

/* ---------- Introduction avec Sirâj ---------- */
const ONB = { step: 0, know: null, reacted: false, reasons: [], goal: 10, time: "19:00", remind: false };
const KNOW = [["debut", "Je débute", "Wouah, c'est super de commencer ! On part de zéro, à ton rythme."], ["bases", "J'ai quelques bases", "Wouah, c'est super ! On va consolider tout ça."], ["avance", "Je connais déjà pas mal", "Wouah, c'est super ! Les quiz vont tester tes connaissances."]];
const REASONS = ["Mieux comprendre ma religion", "Je découvre l'Islam", "Mieux pratiquer (prière, jeûne…)", "Apprendre le Coran", "Connaître l'histoire et la vie du Prophète ﷺ", "Transmettre à mes enfants ou à mes proches", "Par curiosité", "Autre raison"];
const GOALS = [[5, "Tranquille"], [10, "Normal"], [15, "Intensif"], [20, "Extrême"]];
const durText = d => d < 60 ? `${d} jours` : `environ ${Math.round(d / 30)} mois`;
function goalText(m) { const x = E.estimate(m); return `${m} min par jour = <b>${x.plan.lessons} leçon${x.plan.lessons > 1 ? "s" : ""}</b> + <b>${x.plan.questions} questions</b> par jour. Parcours terminé en <b>${durText(x.days)}</b> (estimation sur ~${x.total} leçons).`; }
const say = (mood, text, anim, size = 130, o = {}) => `<div class="hero-s">${siraj(mood, size, anim, o)}</div><div class="bubble c pop">${text}</div>`;
const dots = n => `<div class="dots">${[0, 1, 2, 3, 4, 5].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</div>`;
function renderOnb() {
  const s = ONB.step; let h = "";
  if (s === 0) h = `<div class="hero-s intro">${siraj("happy", 200, "intro", { hand: true, sparks: true })}</div><div class="bubble c pop2">Salut ! Moi c'est <b>Sirâj</b> 🏮</div><button class="btn gold pop3" data-o="next">Salut Sirâj ! 👋</button>`;
  else if (s === 1 && !ONB.reacted) h = say("think", "Petite question pour mieux te connaître : <b>tu as des bases en Islam ?</b>", "float") + KNOW.map(k => `<button class="opt" data-know="${k[0]}">${k[1]}</button>`).join("");
  else if (s === 1) { const k = KNOW.find(x => x[0] === ONB.know); h = say("proud", k[2], "jump", 150) + `<button class="btn" data-o="next">Continuer</button>`; }
  else if (s === 2) h = say("think", "<b>Pourquoi veux-tu apprendre l'Islam ?</b><br><span class='muted'>Coche tout ce qui te correspond.</span>", "float", 110) + REASONS.map((r, i) => `<button class="opt multi ${ONB.reasons.includes(i) ? "sel" : ""}" data-reason="${i}"><span class="k"></span>${esc(r)}</button>`).join("") + `<button class="btn" data-o="next" ${ONB.reasons.length ? "" : "disabled"}>Continuer</button>`;
  else if (s === 3) h = say("happy", `Merci ! On va te créer une <b>routine d'apprentissage</b>.<br><b>Quel est ton objectif ?</b>`, "float", 110) + GOALS.map(g => `<button class="opt ${ONB.goal === g[0] ? "sel" : ""}" data-goal="${g[0]}">${g[1]} · ${g[0]} min/jour</button>`).join("") + `<div class="card pop" id="gtxt">${goalText(ONB.goal)}</div><button class="btn" data-o="next">Continuer</button>`;
  else if (s === 4) h = say("proud", "<b>Avec moi, tu n'oublieras pas d'apprendre !</b><br>À quelle heure veux-tu que je te rappelle chaque jour ?", "jump", 130) + `<div class="card"><input type="time" id="rtime" value="${ONB.time}"></div><button class="btn" data-o="remind">Activer mon rappel</button><button class="btn sec" data-o="ics">Ajouter à mon agenda</button><p class="muted" style="text-align:center">Pour un rappel garanti même application fermée, ajoute-le aussi à ton agenda.</p><button class="btn sec" data-o="next">${ONB.remind ? "Continuer" : "Plus tard"}</button>`;
  else { const g = GOALS.find(x => x[0] === ONB.goal); h = say("proud", "Ta routine est prête ! 🎉", "jump", 150) + `<div class="card"><p>Objectif <b>${g[1]}</b> : ${goalText(ONB.goal)}</p><p>Rappel : <b>${ONB.remind ? ONB.time : "aucun pour l'instant"}</b></p></div><button class="btn gold" data-o="done">C'est parti !</button>`; }
  $app.innerHTML = `<div class="onbw slide">${dots(s)}${h}</div>`;
  if (s === 5) confetti();
}

/* ---------- Rappels ---------- */
async function enableReminder(time) {
  if (!("Notification" in window)) { toast("Les notifications ne sont pas disponibles ici. Utilise l'agenda."); return false; }
  const p = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
  if (p !== "granted") { toast("Notifications refusées. Tu peux utiliser l'agenda à la place."); return false; }
  E.S.reminder = { on: true, time, last: E.S.reminder.last }; E.save(); notify("Sirâj 🏮", "Super, je te rappellerai chaque jour à " + time + " !"); return true;
}
function notify(title, body) { try { if (navigator.serviceWorker && navigator.serviceWorker.controller) navigator.serviceWorker.ready.then(r => r.showNotification(title, { body, icon: "icon.svg" })); else new Notification(title, { body, icon: "icon.svg" }); } catch {} }
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

/* ---------- Routage et habillage ---------- */
const NAV = [["home", "home", "Accueil"], ["path", "path", "Parcours"], ["explore", "explore", "Explorer"], ["quiz", "quiz", "Quiz"], ["ai", "chat", "Assistant"]];
const TABMAP = { level: "path", chapter: "path", lesson: "path", subjects: "explore", subject: "explore", map: "explore", cards: "explore", lexique: "explore", videos: "explore", free: "quiz", review: "quiz", daily: "quiz", exam: "quiz", today: "home" };
const LANTERN = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5v2.5" stroke="#0a6546" stroke-width="1.6" stroke-linecap="round"/><path d="M7.5 7.5q4.5-6 9 0z" fill="#0f8a5f"/><path d="M7 7.5h10l.8 9q-1 4.5-5.8 4.5T6.2 16.5z" fill="#f4b836"/><path d="M9 9v9M15 9v9" stroke="#c98d10" stroke-width=".8" opacity=".6"/></svg>`;
function chrome(tab) {
  $nav.innerHTML = NAV.map(([id, ic, nm]) => `<a class="ni ${tab === id ? "on" : ""}" href="#/${id}"><span class="b">${ico(ic, 23)}</span>${nm}</a>`).join("");
  $top.innerHTML = `<div class="tb"><a class="brand" href="#/home">${LANTERN}Sirat</a><div class="chips-top"><a class="tchip flame" href="#/profile">${ico("flame", 18)}${E.streak()}</a><a class="tchip gem" href="#/profile">${ico("gem", 18)}${E.S.xp}</a><button class="tchip snd" id="mtog" aria-label="Son">${ico(E.S.settings.music ? "speaker" : "mute", 18)}</button><a class="tchip snd" href="#/profile" aria-label="Profil">${ico("user", 18)}</a></div></div>`;
}
function route() {
  let [r, a, b] = (location.hash.slice(2) || "home").split("/");
  const d = document.getElementById("dock"); if (d) d.remove(); document.body.classList.remove("focus"); VOICE.stop();
  if (!E.S.onboarded && r !== "welcome") { location.hash = "#/welcome"; return; }
  if (r === "welcome" && E.S.onboarded && !ONB.force) r = "home";
  document.body.classList.toggle("onb", r === "welcome");
  if (r === "welcome") { renderOnb(); return; }
  const fn = { home: V.home, today: V.today, path: V.path, level: V.level, chapter: V.chapter, lesson: V.lesson, quiz: a ? V.quiz : V.quizhub, review: V.review, daily: V.daily, exam: V.exam, free: V.free, explore: V.explore, subjects: V.explore, subject: V.subject, cards: a === "run" ? () => V.cardsrun(b) : V.cards, lexique: V.lexique, videos: V.videos, map: V.map, ai: V.ai, profile: V.profile }[r] || V.home;
  const html = fn(a, b);
  if (typeof html === "string") $app.innerHTML = html;
  chrome(TABMAP[r] || r);
  if (r === "lexique") lexList("");
  if (r === "path") setTimeout(() => { const c = document.querySelector(".node.cur"); if (c) c.scrollIntoView({ block: "center" }); }, 60); else window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
document.addEventListener("pointerdown", e => { if (e.target.closest("button:not(:disabled), a[href], .opt, .chip, .pill, .node, label.set, .flip")) SND.click(); }, { passive: true });
document.addEventListener("click", async e => {
  const t = e.target.closest("[data-sub],[data-pin],[data-goal],[data-ask],[data-style],[data-copy],[data-o],[data-know],[data-reason],#mapz,#rst,#prem,#pics,#pintro,#mtog,#t-voice,#t-ok,#t-ko");
  if (!t) return;
  if (document.querySelector(".onbw") && (t.dataset.o || t.dataset.know || t.dataset.reason !== undefined || (t.dataset.goal && t.classList.contains("opt")))) {
    const tm = () => { const i = document.getElementById("rtime"); if (i && i.value) ONB.time = i.value; };
    if (t.dataset.know) { ONB.know = t.dataset.know; ONB.reacted = true; renderOnb(); }
    else if (t.dataset.reason !== undefined) { const i = +t.dataset.reason, k = ONB.reasons.indexOf(i); if (k >= 0) ONB.reasons.splice(k, 1); else ONB.reasons.push(i); renderOnb(); }
    else if (t.dataset.goal) { ONB.goal = +t.dataset.goal; renderOnb(); }
    else if (t.dataset.o === "next") { tm(); ONB.step++; ONB.reacted = false; renderOnb(); }
    else if (t.dataset.o === "remind") { tm(); ONB.remind = await enableReminder(ONB.time); renderOnb(); if (ONB.remind) toast("Rappel activé à " + ONB.time); }
    else if (t.dataset.o === "ics") { tm(); downloadICS(ONB.time); toast("Ouvre le fichier pour l'ajouter à ton agenda."); }
    else if (t.dataset.o === "done") { const S = E.S; ONB.force = false; S.onboarded = true; S.goal = ONB.goal; S.profile = { know: ONB.know, reasons: ONB.reasons.map(i => REASONS[i]) }; S.reminder = { on: ONB.remind, time: ONB.time, last: S.reminder.last }; E.save(); go("#/home"); }
    return;
  }
  if (t.dataset.sub) { quizSubject = t.dataset.sub; route(); }
  else if (t.dataset.pin) { mapSel = t.dataset.pin; route(); }
  else if (t.id === "mapz") { mapZoom = !mapZoom; route(); }
  else if (t.dataset.goal) { E.S.goal = +t.dataset.goal; E.save(); route(); }
  else if (t.dataset.ask) { const q = document.getElementById("askq"); if (q) answer(t.dataset.ask); }
  else if (t.dataset.style) { E.S.settings.style = t.dataset.style; E.S.settings.music = true; E.save(); SND.unlock(); SND.restart(); route(); }
  else if (t.dataset.copy) { try { navigator.clipboard.writeText(t.dataset.copy).then(() => toast("Copié")).catch(() => toast("Copie impossible")); } catch { toast("Copie impossible"); } }
  else if (t.id === "t-voice") VOICE.play("none", 0, "Salut ! Moi c'est Sirâj, ta lanterne-guide. Bismillah, on commence ?");
  else if (t.id === "t-ok") { SND.unlock(); SND.correct(); } else if (t.id === "t-ko") { SND.unlock(); SND.wrong(); }
  else if (t.id === "mtog") { E.S.settings.music = !E.S.settings.music; E.save(); SND.apply(); chrome(location.hash.split("/")[1] || "home"); }
  else if (t.id === "prem") enableReminder(document.getElementById("ptime").value).then(() => route());
  else if (t.id === "pics") downloadICS(document.getElementById("ptime").value);
  else if (t.id === "pintro") { Object.assign(ONB, { step: 0, know: null, reacted: false, reasons: [], force: true }); location.hash = "#/welcome"; route(); }
  else if (t.id === "rst") { if (t.dataset.sure) { E.reset(); location.hash = "#/welcome"; route(); } else { t.dataset.sure = 1; t.textContent = "Touche encore pour tout effacer"; setTimeout(() => { delete t.dataset.sure; t.textContent = "Réinitialiser ma progression"; }, 4000); } }
});
document.addEventListener("change", e => {
  const S = E.S.settings, id = e.target.id;
  if (id === "set-music") { S.music = e.target.checked; E.save(); SND.apply(); chrome("profile"); }
  else if (id === "set-sfx") { S.sfx = e.target.checked; E.save(); }
  else if (id === "set-click") { S.click = e.target.checked; E.save(); }
  else if (id === "set-free") { S.free = e.target.checked; E.save(); }
  else if (id === "set-voice") { S.voice = e.target.value; E.save(); VOICE.play("none", 0, "Salut ! Moi c'est Sirâj, ta lanterne-guide."); }
});
document.addEventListener("input", e => {
  const id = e.target.id;
  if (id === "set-vol") { E.S.settings.vol = +e.target.value; SND.apply(); E.save(); }
  else if (id === "set-rate") { E.S.settings.rate = +e.target.value; E.save(); }
  else if (id === "set-pitch") { E.S.settings.pitch = +e.target.value; E.save(); }
  else if (id === "lexq") lexList(e.target.value);
});
document.addEventListener("submit", e => { if (e.target.id === "askf") { e.preventDefault(); answer(document.getElementById("askq").value); } });
if (VOICE.synth) VOICE.synth.onvoiceschanged = () => { if (location.hash === "#/profile") route(); };
setInterval(checkReminder, 60000);
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});
applyPattern(); checkReminder(); route();
