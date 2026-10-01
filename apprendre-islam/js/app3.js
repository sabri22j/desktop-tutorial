/* Interface Sirat, partie 3 : profil, introduction, rappels, routage. */
V.settings = () => V.profile("param");
V.profile = (tab) => {
  const pt = tab === "param" ? "param" : "profil";
  const S = E.S, n = E.currentLevel(), wk = E.weekLog(), mx = Math.max(10, ...wk.map(w => w.xp)), done = Object.keys(CHAPTERS).filter(id => E.mastery(id) >= E.UNLOCK).length, best = VOICE.best(), cur = VOICE.pick();
  const allV = VOICE.voices(), fr = allV.filter(v => /^fr/i.test(v.lang)).sort((a, b) => (b === best) - (a === best)), rest = allV.filter(v => !/^fr/i.test(v.lang));
  const vopt = v => `<option value="${esc(v.voiceURI)}" ${cur && v.voiceURI === cur.voiceURI && S.settings.voice ? "selected" : ""}>${v === best ? "★ " : ""}${esc(v.name)} (${esc(v.lang)})</option>`;
  const sw = (id, label, on) => `<label class="set"><span>${label}</span><input type="checkbox" class="switch" id="${id}" ${on ? "checked" : ""}></label>`;
  return `<h2>${pt === "param" ? "Paramètres" : "Profil"}</h2>
  ${pt === "profil" ? `${profCard()}
  <a class="card row" href="#/ranking"><div class="gap">${ico("trophy", 26)}<div><h3>Classement mondial</h3><span class="muted small">Compare tes XP avec les autres</span></div></div>${ico("arrow", 20)}</a>
  <div class="card phead">${siraj3d("happy", 96)}<div><div class="muted small">Niveau actuel</div><h2>${n >= LEVELS.length ? "100" : n}</h2><div class="xpchip" style="margin:4px 0 0">${ico("moon", 18)} ${S.xp} XP</div></div></div>
  ${(() => { const r = E.rank(); return `<div class="card rkc"><div class="row"><h3>Rang ${r.n} · ${esc(r.title)}</h3><span class="muted small">${r.cur}/${r.need} XP</span></div>${bar(r.pct)}<p class="muted small">Il te manque ${r.left} XP pour le rang ${r.n + 1}. Les XP viennent des leçons (+10), des quiz (+20), des révisions (+15), du quiz du jour (+30) et des examens (+50). Ce rang est séparé des niveaux du parcours, qui, eux, dépendent de ta maîtrise.</p></div>`; })()}
  <div class="stat3" style="grid-template-columns:repeat(3,1fr)"><div class="stat"><b style="color:#ef7b1a">${E.streak()}</b><span>Série</span></div><div class="stat"><b>${S.stats.total ? pct(S.stats.ok / S.stats.total) : 0}%</b><span>Réussite</span></div><div class="stat"><b>${done}</b><span>Chapitres</span></div></div>
  <div class="card"><div class="row"><h3>Cette semaine</h3><span class="muted small">XP par jour</span></div><div class="wbars">${wk.map(w => `<div class="wb ${w.active ? "on" : ""}"><i style="height:${Math.max(6, w.xp / mx * 100)}%"></i><span>${w.letter}</span></div>`).join("")}</div></div>
  <div class="card"><h3>Maîtrise par matière</h3><div class="sp"></div>${SUBJECTS.map(s => { const m = E.subjectMastery(s.id) || 0; return `<div class="row" style="padding:6px 0"><div class="gap"><span class="ic-b" style="width:38px;height:38px;border-radius:12px;background:var(--green-l);color:var(--green);display:flex;align-items:center;justify-content:center">${ico(LEVEL_ICON[s.id], 20)}</span><b>${esc(s.name)}</b></div><b>${pct(m)} %</b></div>${bar(m)}`; }).join("")}<p class="muted small">Niveau 100 = parcours de l'application terminé, pas « tout l'islam ».</p></div>
  <div class="card"><h3>Badges</h3><div class="sp"></div><div class="badges">${E.BADGES.map(b => `<div class="bdg ${S.badges[b[0]] ? "" : "off"}"><b>${b[1]}</b>${esc(b[2])}</div>`).join("")}</div></div>
  ${accountCard()}` : ""}
  ${pt === "param" ? `  <div class="card"><h3>Apparence</h3><div>${[["auto", "Automatique"], ["light", "Clair"], ["dark", "Sombre"]].map(([id, nm]) => `<button class="pill ${S.settings.mode === id ? "on" : ""}" data-mode="${id}">${nm}</button>`).join("")}</div><p class="muted small">« Automatique » suit le réglage de ton téléphone.</p></div>
  <div class="card"><h3>Thème</h3><p class="muted small">Choisis les couleurs de l'application.</p><div class="skins">${SKINS.map(k => `<button class="skin ${S.settings.skin === k.id ? "on" : ""}" data-skin="${k.id}" aria-label="${k.n}"><i style="background:linear-gradient(135deg,${hexShift("#0a2a23", k.d)},${hexShift("#0f8a5f", k.d)} 55%,#f4b836)"></i><span>${k.n}</span></button>`).join("")}</div></div>
  <div class="card"><h3>Sons</h3>
    <label class="set"><span>Volume</span><input type="range" id="set-vol" min="0" max="1" step="0.05" value="${S.settings.vol}"></label>${sw("set-sfx", "Sons juste / faux", S.settings.sfx)}${sw("set-click", "Mini vibrations (boutons)", S.settings.click)}
    <div style="padding-top:8px"><button class="pill" id="t-ok">Écouter « juste »</button><button class="pill" id="t-ko">Écouter « faux »</button></div><p class="muted small">Les gestes donnent de mini vibrations (téléphones qui le permettent). Aucun instrument ni mélodie.</p></div>
  <div class="card"><h3>Voix de lecture</h3><p class="muted small">${allV.length ? `Voix utilisée : <b>${esc(cur ? cur.name : "automatique")}</b>.` : "Aucune voix détectée sur cet appareil."} ${cur && VOICE.isRobotic(cur) ? "Cette voix peut sembler robotique : choisis une voix marquée « Natural », « Neural », « Enhanced » ou « Google » si ton appareil en propose." : ""}</p>
    <select id="set-voice"><option value="">★ Automatique (la plus naturelle)</option>${fr.length ? `<optgroup label="Français">${fr.map(vopt).join("")}</optgroup>` : ""}${rest.length ? `<optgroup label="Autres langues">${rest.map(vopt).join("")}</optgroup>` : ""}</select>
    <label class="set"><span>Vitesse</span><input type="range" id="set-rate" min="0.6" max="1.3" step="0.05" value="${S.settings.rate}"></label><label class="set"><span>Grave ↔ aigu</span><input type="range" id="set-pitch" min="0.6" max="1.4" step="0.05" value="${S.settings.pitch}"></label>
    <button class="pill" id="t-voice">Écouter un exemple</button><p class="muted small">Si des enregistrements humains sont ajoutés dans le dossier <code>audio/</code>, ils sont lus en priorité (voir le README).</p></div>
  <div class="card"><h3>Rappel quotidien</h3><div class="row"><input type="time" id="ptime" value="${S.reminder.time}" style="width:auto"><b>${S.reminder.on ? "Activé" : "Désactivé"}</b></div><button class="btn sec" id="prem">Activer / mettre à jour</button><button class="btn sec" id="pics">Ajouter à mon agenda</button></div>
  <div class="card"><h3>Objectif quotidien</h3><div>${[5, 10, 15, 20].map(m => `<button class="pill ${S.goal === m ? "on" : ""}" data-goal="${m}">${m} min</button>`).join("")}</div>${sw("set-free", "Tout débloquer (explorer librement)", S.settings.free)}</div>
  <button class="btn sec" id="pintro">Revoir l'introduction avec Sirâj</button><button class="btn sec" id="rst">Réinitialiser ma progression</button><p class="muted small" style="text-align:center;margin-top:16px">© 2026 Sabri Jelassi · Sirat · Tous droits réservés</p>` : ""}`;
};

function accountCard() {
  const a = ACCOUNT.state;
  if (a.provider !== "local") return `<div class="card"><h3>Compte</h3><p><b>${esc(a.user.name)}</b>${a.user.email ? `<br><span class="muted small">${esc(a.user.email)}</span>` : ""}</p><p class="muted small">${a.provider === "claude" ? "Connecté avec ton compte Claude." : "Connecté."} Ta progression est synchronisée entre tes appareils.</p><button class="btn sec" id="acc-sync">Synchroniser maintenant</button>${a.provider === "firebase" ? `<button class="btn sec" id="acc-out">Se déconnecter</button>` : ""}</div>`;
  if (!ACCOUNT.canSignIn) return `<div class="card"><h3>Compte</h3><p class="muted small">Mode invité : ta progression est enregistrée sur cet appareil. La connexion Google, Apple ou e-mail s'active une fois le serveur configuré (voir le README, section Comptes).</p></div>`;
  return `<div class="card"><h3>Compte</h3><p class="muted small">Connecte-toi pour retrouver ta progression sur tous tes appareils.</p><button class="btn sec" id="acc-google">Continuer avec Google</button><button class="btn sec" id="acc-apple">Continuer avec Apple</button><div class="sp"></div><input type="text" id="acc-mail" placeholder="Adresse e-mail" autocomplete="email" style="margin-bottom:8px"><input type="text" id="acc-pass" placeholder="Mot de passe (6 caractères minimum)" autocomplete="current-password"><button class="btn sec" id="acc-email">Connexion ou création par e-mail</button><p class="muted small">Sans connexion, tu restes en mode invité (progression sur cet appareil).</p></div>`;
}
const authError = e => { const c = String((e && (e.code || e.message)) || "");
  if (/popup-closed|cancelled/.test(c)) return "Connexion annulée.";
  if (/operation-not-allowed/.test(c)) return "Cette méthode n'est pas activée dans Firebase (Authentication > Sign-in method).";
  if (/unauthorized-domain/.test(c)) return "Ce site n'est pas autorisé dans Firebase (Authentication > Paramètres > Domaines autorisés).";
  if (/popup-blocked/.test(c)) return "Le navigateur a bloqué la fenêtre de connexion. Autorise les fenêtres puis réessaie.";
  if (/network|Failed to fetch|dynamically imported|import/i.test(c)) return "Pas de connexion à Firebase. Vérifie internet puis réessaie.";
  if (/weak-password/.test(c)) return "Mot de passe trop court (6 caractères minimum).";
  if (/invalid-email/.test(c)) return "Adresse e-mail invalide.";
  if (/email-already-in-use/.test(c)) return "Cette adresse existe déjà : vérifie le mot de passe.";
  if (/not_configured/.test(c)) return "La connexion n'est pas encore configurée.";
  if (/api-key|invalid-api-key|configuration-not-found|CONFIGURATION_NOT_FOUND/.test(c)) return "La configuration Firebase est incomplète (Authentication pas encore commencé ?).";
  if (/permission-denied|insufficient/.test(c)) return "Règles Firestore refusées : publie les règles du fichier server/firestore.rules.";
  return "Connexion impossible (" + (c.slice(0, 60) || "erreur inconnue") + ").";
};
async function accAuth(kind) {
  try { toast("Connexion…"); const r = await ACCOUNT.signIn(kind, { email: (document.getElementById("acc-mail") || {}).value, password: (document.getElementById("acc-pass") || {}).value }); toast(r === "pulled" ? "Progression récupérée depuis ton compte." : "Connecté."); route(); }
  catch (e) { toast(authError(e)); }
}

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
const NAV = [["home", "home", "Accueil"], ["path", "path", "Parcours"], ["reseau", "network", "Réseau"], ["quiz", "quiz", "Quiz"], ["more", "more", "Plus"]];
const TABMAP = { profile: "more", settings: "more", ranking: "more", signup: "more", profedit: "more", level: "path", chapter: "path", lesson: "path", subjects: "home", explore: "home", subject: "home", map: "home", cards: "home", lexique: "home", videos: "reseau", free: "quiz", review: "quiz", daily: "quiz", exam: "quiz", today: "home" };
const LANTERN = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5v2.5" stroke="#0a6546" stroke-width="1.6" stroke-linecap="round"/><path d="M7.5 7.5q4.5-6 9 0z" fill="#0f8a5f"/><path d="M7 7.5h10l.8 9q-1 4.5-5.8 4.5T6.2 16.5z" fill="#f4b836"/><path d="M9 9v9M15 9v9" stroke="#c98d10" stroke-width=".8" opacity=".6"/></svg>`;
function chrome(tab) {
  $nav.innerHTML = NAV.map(([id, ic, nm]) => id === "more" ? `<button class="ni${tab === "more" ? " on" : ""}" id="morebtn" aria-haspopup="dialog"><span class="b">${ico(ic, 23)}</span>${nm}</button>` : `<a class="ni ${tab === id ? "on" : ""}${id === "reseau" ? " center" : ""}" href="#/${id}"><span class="b">${ico(ic, 23)}</span>${nm}</a>`).join("");
  $top.innerHTML = `<div class="tb"><a class="brand" href="#/home">${LANTERN}Sirat</a><div class="chips-top"><a class="tchip flame" href="#/profile">${ico("flame", 18)}${E.streak()}</a><a class="tchip moon" href="#/profile">${ico("moon", 18)}${E.S.xp}</a><button class="tchip snd" id="mtog" aria-label="Sons">${ico(E.S.settings.sfx ? "speaker" : "mute", 18)}</button><a class="tchip snd" href="#/profile" aria-label="Profil">${ico("user", 18)}</a></div></div>`;
}
function route() {
  let [r, a, b] = (location.hash.slice(2) || "home").split("/");
  const d = document.getElementById("dock"); if (d) d.remove(); document.body.classList.remove("focus"); VOICE.stop();
  if (!E.S.onboarded && r !== "welcome") { location.hash = "#/welcome"; return; }
  if (r === "welcome" && E.S.onboarded && !ONB.force) r = "home";
  document.body.classList.toggle("onb", r === "welcome");
  if (r === "welcome") { renderOnb(); return; }
  const fn = { home: V.home, today: V.today, path: V.path, level: V.level, chapter: V.chapter, lesson: V.lesson, quiz: a ? V.quiz : V.quizhub, review: V.review, daily: V.daily, exam: V.exam, free: V.free, explore: V.explore, subjects: V.explore, subject: V.subject, cards: a === "run" ? () => V.cardsrun(b) : V.cards, lexique: V.lexique, videos: V.videos, reseau: V.reseau, settings: V.settings, signup: V.signup, profedit: V.profedit, ranking: V.ranking, map: V.map, profile: V.profile }[r] || V.home;
  const html = fn(a, b);
  if (typeof html === "string") { $app.innerHTML = html; FX.enter($app); H3D.scan($app); $app.classList.remove("p3d"); void $app.offsetWidth; $app.classList.add("p3d"); }
  chrome(TABMAP[r] || r);
  if (r === "lexique") lexList("");
  if (r === "path") setTimeout(() => { const c = document.querySelector(".node.cur"); if (c) c.scrollIntoView({ block: "center" }); }, 60); else window.scrollTo(0, 0);
}
addEventListener("hashchange", () => { closeSheet(); route(); });
function closeSheet() { const o = document.getElementById("sheet"); if (o) { o.classList.add("out"); setTimeout(() => o.remove(), 250); } }
function openSheet() {
  if (document.getElementById("sheet")) return closeSheet();
  const row = (href, ic, col, label, sub) => `<a class="srow" href="${href}"><span class="si" style="background:${col}">${ico(ic, 24)}</span><span class="st"><b>${label}</b>${sub ? `<small>${sub}</small>` : ""}</span>${ico("arrow", 18)}</a>`;
  const d = document.createElement("div"); d.id = "sheet"; d.className = "sheet";
  d.innerHTML = `<div class="bk" data-sheet-close></div><div class="pn" role="dialog" aria-label="Plus"><div class="grab"></div>${row("#/profile", "user", "#4aa8f0", "Profil", "Ta photo, ton rang, tes badges, ton compte")}${row("#/settings", "settings", "#8e6ad8", "Paramètres de l'application", "Sons, voix, rappel, objectif")}${row("#/ranking", "trophy", "#f4b836", "Classement mondial", "Compare tes XP")}</div>`;
  document.body.appendChild(d);
}
document.addEventListener("click", e => { if (e.target.closest("#morebtn")) openSheet(); else if (e.target.closest("[data-sheet-close]")) closeSheet(); });
document.addEventListener("pointerdown", e => { const t = e.target.closest("button:not(:disabled), a[href], .opt, .chip, .pill, .node, label, .flip, summary, select, input[type=checkbox], input[type=radio], .card.row, .tile"); if (!t) return;
  if (t.matches(".opt")) SND.select(); else if (t.matches(".flip")) SND.flip(); else if (t.closest("#nav")) SND.nav(); else SND.click(); }, { passive: true });
let lastKey = 0; document.addEventListener("input", e => { if (e.target.matches("input[type=text],input[type=search],input[type=password],textarea") && Date.now() - lastKey > 70) { lastKey = Date.now(); SND.click(); } else if (e.target.matches("input[type=range]") && Date.now() - lastKey > 120) { lastKey = Date.now(); SND.click(); } });
document.addEventListener("click", async e => {
  const t = e.target.closest("[data-mode],[data-skin],[data-sub],[data-pin],[data-goal],[data-copy],[data-o],[data-know],[data-reason],#mapz,#map3,#rst,#prem,#pics,#pintro,#mtog,#t-voice,#t-ok,#t-ko,#acc-google,#acc-apple,#acc-email,#acc-out,#acc-sync,[data-rtopic],[data-rview],#resfavf,[data-resfav],[data-resdel],#res-add");
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
  if (t.dataset.mode) { E.S.settings.mode = t.dataset.mode; E.save(); applySkin(); route(); SND.pop(); }
  else if (t.dataset.skin) { E.S.settings.skin = t.dataset.skin; E.save(); applySkin(); route(); SND.pop(); }
  else if (t.dataset.sub) { quizSubject = t.dataset.sub; route(); }
  else if (t.dataset.pin) { mapSel = t.dataset.pin; route(); }
  else if (t.id === "map3") { map3 = !map3; route(); }
  else if (t.id === "mapz") { mapZoom = !mapZoom; route(); }
  else if (t.dataset.goal) { E.S.goal = +t.dataset.goal; E.save(); route(); }
  else if (t.dataset.copy) { try { navigator.clipboard.writeText(t.dataset.copy).then(() => toast("Copié")).catch(() => toast("Copie impossible")); } catch { toast("Copie impossible"); } }
  else if (t.dataset.rtopic) { resTopic = t.dataset.rtopic; route(); }
  else if (t.dataset.rview) { resView = t.dataset.rview; route(); }
  else if (t.id === "resfavf") { resFav = !resFav; route(); }
  else if (t.dataset.resfav) { const f = E.S.favres = E.S.favres || {}; if (f[t.dataset.resfav]) delete f[t.dataset.resfav]; else f[t.dataset.resfav] = 1; E.save(); drawRes(); }
  else if (t.dataset.resdel) { E.S.res = (E.S.res || []).filter(r => r.url !== t.dataset.resdel); E.save(); drawRes(); }
  else if (t.id === "res-add") { const title = document.getElementById("res-title").value.trim(), u = safeUrl(document.getElementById("res-url").value); if (!title || !u) { toast("Ajoute un titre et un lien qui commence par https://"); return; } (E.S.res = E.S.res || []).push({ title, url: u.href, topic: document.getElementById("res-topic").value, note: document.getElementById("res-note").value.trim(), added: Date.now() }); E.save(); toast("Ressource ajoutée."); route(); }
  else if (t.id === "acc-google") accAuth("google"); else if (t.id === "acc-apple") accAuth("apple"); else if (t.id === "acc-email") accAuth("email");
  else if (t.id === "acc-out") { ACCOUNT.signOut().then(() => { toast("Déconnecté."); route(); }); }
  else if (t.id === "acc-sync") { toast("Synchronisation…"); ACCOUNT.pull().then(r => { toast(r === "pulled" ? "Progression récupérée." : r === "error" ? "Synchronisation impossible." : "Progression synchronisée."); route(); }); }
  else if (t.id === "t-voice") VOICE.play("none", 0, "Salut ! Moi c'est Sirâj, ta lanterne-guide. Bismillah, on commence ?");
  else if (t.id === "t-ok") { SND.unlock(); SND.correct(); } else if (t.id === "t-ko") { SND.unlock(); SND.wrong(); }
  else if (t.id === "mtog") { const st = E.S.settings, on = !st.sfx; st.sfx = on; st.click = on; E.save(); chrome(location.hash.split("/")[1] || "home"); if (on) SND.pop(); }
  else if (t.id === "prem") enableReminder(document.getElementById("ptime").value).then(() => route());
  else if (t.id === "pics") downloadICS(document.getElementById("ptime").value);
  else if (t.id === "pintro") { Object.assign(ONB, { step: 0, know: null, reacted: false, reasons: [], force: true }); location.hash = "#/welcome"; route(); }
  else if (t.id === "rst") { if (t.dataset.sure) { E.reset(); location.hash = "#/welcome"; route(); } else { t.dataset.sure = 1; t.textContent = "Touche encore pour tout effacer"; setTimeout(() => { delete t.dataset.sure; t.textContent = "Réinitialiser ma progression"; }, 4000); } }
});
document.addEventListener("change", e => {
  const S = E.S.settings, id = e.target.id;
  if (id === "set-sfx") { S.sfx = e.target.checked; E.save(); }
  else if (id === "set-click") { S.click = e.target.checked; E.save(); }
  else if (id === "set-free") { S.free = e.target.checked; E.save(); }
  else if (id === "set-voice") { S.voice = e.target.value; E.save(); VOICE.play("none", 0, "Salut ! Moi c'est Sirâj, ta lanterne-guide."); }
});
document.addEventListener("input", e => {
  const id = e.target.id;
  if (id === "set-vol") { E.S.settings.vol = +e.target.value; E.save(); }
  else if (id === "set-rate") { E.S.settings.rate = +e.target.value; E.save(); }
  else if (id === "set-pitch") { E.S.settings.pitch = +e.target.value; E.save(); }
  else if (id === "lexq") lexList(e.target.value);
  else if (id === "resq") { resQ = e.target.value; drawRes(); }
});
if (VOICE.synth) VOICE.synth.onvoiceschanged = () => { if (location.hash === "#/profile") route(); };
setInterval(checkReminder, 60000);
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  const had = !!navigator.serviceWorker.controller; let reloaded = false;
  navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(r => r.update()).catch(() => {});
  navigator.serviceWorker.addEventListener("controllerchange", () => { if (had && !reloaded) { reloaded = true; location.reload(); } }); // nouvelle version : rechargement automatique
}
ACCOUNT.onChange(() => { if (location.hash === "#/profile") route(); });
applySkin(); applyPattern(); checkReminder(); route();
ACCOUNT.init().then(r => { if (r === "pulled") { toast("Progression récupérée depuis ton compte."); route(); } });
