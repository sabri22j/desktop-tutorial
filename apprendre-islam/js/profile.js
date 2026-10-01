/* Profil (prénom, nom, âge, photo), création de compte et connexion, message de bienvenue, classement mondial.
   Le mot de passe n'est jamais stocké par l'application : il est confié à Firebase Authentication.
   Le classement n'affiche que : prénom + initiale du nom, photo (facultative), XP, rang. Réservé aux comptes de 15 ans et plus qui l'activent. */
const ME = () => E.S.me || (E.S.me = { first: "", last: "", age: null, photo: "", board: false });
/* Navigateurs intégrés (Snapchat, Instagram, TikTok, Facebook…) : la connexion Google par fenêtre y échoue (« missing initial state »). On guide vers Safari ou Chrome. */
const inAppBrowser = () => { const u = navigator.userAgent || ""; return /Snapchat|Instagram|FBAN|FBAV|FB_IAB|TikTok|musical_ly|BytedanceWebview|Line\/|MicroMessenger|Twitter|LinkedInApp|Pinterest|GSA\//i.test(u) || (/iPhone|iPad|iPod/.test(u) && !/Safari\//.test(u) && !/CriOS|FxiOS|EdgiOS/.test(u)); };
const inAppNotice = () => inAppBrowser() ? `<div class="card" style="background:var(--gold-l)"><h3>Ouvre le site dans ton navigateur</h3><p class="small">Tu es dans le navigateur d'une application (Snapchat, Instagram, TikTok…). La connexion avec Google n'y marche pas. Touche <b>•••</b> en haut à droite, puis <b>« Ouvrir dans Safari »</b> (ou Chrome). Ou inscris-toi ici avec ton e-mail.</p><button class="btn sec sm" data-copy="https://sirat-islam.fr">Copier le lien du site</button></div>` : "";
const okPhoto = p => typeof p === "string" && p.startsWith("data:image/jpeg;base64,") && p.length < 60000;
function avatar(size = 56, m = ME()) {
  const st = `width:${size}px;height:${size}px`;
  return okPhoto(m.photo) ? `<img class="av" src="${m.photo}" alt="" style="${st}">` : `<span class="av ph" style="${st};font-size:${Math.round(size * 0.45)}px">${esc(((m.first || m.name || "?")[0] || "?").toUpperCase())}</span>`;
}
const readPhoto = file => new Promise((res, rej) => { const fr = new FileReader(); fr.onerror = rej; fr.onload = () => { const im = new Image(); im.onerror = rej; im.onload = () => { const s = 160, c = document.createElement("canvas"); c.width = c.height = s; const k = Math.max(s / im.width, s / im.height), w = im.width * k, h = im.height * k; c.getContext("2d").drawImage(im, (s - w) / 2, (s - h) / 2, w, h); res(c.toDataURL("image/jpeg", 0.8)); }; im.src = fr.result; }; fr.readAsDataURL(file); });
const profCard = () => { const m = ME(), has = !!m.first; return `<div class="card prof">${avatar(72)}<div style="flex:1"><h3 style="margin:0">${has ? esc(m.first + (m.last ? " " + m.last : "")) : "Ton profil"}</h3><div class="muted small">${has ? (m.age ? m.age + " ans · " : "") + "Rang " + E.rank().n + " · " + esc(E.rank().title) : "Ajoute ta photo et ton prénom."}</div></div><a class="btn sec sm" href="#/profedit">${has ? "Modifier" : "Créer mon profil"}</a></div>`; };

/* ---------- Connexion (Google, ou e-mail + mot de passe saisi deux fois) ---------- */
const connected = () => ACCOUNT.state.provider !== "local";
const firstOf = n => String(n || "").trim().split(/\s+/)[0] || "";
V.signup = (mode) => {
  if (connected()) { setTimeout(() => { location.hash = "#/profile"; }, 0); return ""; }
  if (!ACCOUNT.canSignIn) { setTimeout(() => { location.hash = "#/profedit"; }, 0); return ""; }
  const login = mode === "login", P = ACCOUNT.providers, gis = !!APP_CONFIG.googleClientId, noApp = !inAppBrowser();
  const google = P.google && noApp ? (gis ? `<div class="gbtn" id="gbtn"></div>` : `<button type="button" class="btn sec" data-su="google">${login ? "Se connecter" : "Continuer"} avec Google</button>`) : "";
  if (google && gis) setTimeout(mountGoogle, 0);
  return `<a class="back" href="#/home">${ico("back", 18)} Accueil</a>
  <h2>${login ? "Se connecter" : "Créer un compte"}</h2>${inAppNotice()}
  <div class="card">${google}${google && P.email ? `<div class="or"><span>ou avec ton e-mail</span></div>` : ""}
  ${P.email ? `<form id="signf" autocomplete="on" novalidate>
    <label class="fl">Adresse e-mail<input type="email" id="su-mail" autocomplete="email" inputmode="email"></label>
    <label class="fl">Mot de passe${login ? "" : " (6 caractères minimum)"}<span class="pw"><input type="password" id="su-pass" autocomplete="${login ? "current-password" : "new-password"}"><button type="button" class="pwt" id="su-pwt" aria-label="Afficher le mot de passe">${ico("eye", 18)}</button></span></label>
    ${login ? "" : `<label class="fl">Confirme le mot de passe<input type="password" id="su-pass2" autocomplete="new-password"></label>`}
    <button class="btn" type="submit">${login ? "Se connecter" : "Créer mon compte"}</button>
    ${login ? `<button type="button" class="btn sec" id="su-reset">Mot de passe oublié</button>` : `<p class="muted small">En créant un compte, tu confirmes avoir 13 ans ou plus.</p>`}
  </form>` : ""}
  <a class="btn sec" href="#/signup/${login ? "create" : "login"}">${login ? "Créer un compte" : "J'ai déjà un compte"}</a></div>`;
};

/* ---------- Profil : photo, prénom, nom, âge, classement (facultatif, modifiable à tout moment) ---------- */
let suPhoto = null;
V.profedit = () => {
  const m = ME(), on = connected(); if (suPhoto === null) suPhoto = m.photo || "";
  return `<a class="back" href="#/profile">${ico("back", 18)} Profil</a><h2>Mon profil</h2>
  <form id="editf" class="card" novalidate>
    <div class="phrow"><button type="button" class="phbtn" id="su-photo" aria-label="Choisir une photo"><span id="su-prev">${avatar(88, { first: m.first, photo: suPhoto })}</span><span class="cam">${ico("camera", 16)}</span></button><input type="file" id="su-file" accept="image/*" hidden><div class="muted small" style="flex:1">Ta photo reste facultative. Elle est réduite à 160 px.</div></div>
    <label class="fl">Prénom<input type="text" id="su-first" autocomplete="given-name" value="${esc(m.first)}" maxlength="30"></label>
    <label class="fl">Nom de famille (facultatif)<input type="text" id="su-last" autocomplete="family-name" value="${esc(m.last)}" maxlength="40"></label>
    <label class="fl">Âge (facultatif)<input type="number" id="su-age" inputmode="numeric" min="5" max="120" value="${m.age || ""}"></label>
    ${on ? `<label class="chk"><input type="checkbox" id="su-board" ${m.board ? "checked" : ""}> <span>Apparaître dans le classement mondial (prénom, initiale du nom, photo et XP visibles par tous). Réservé aux 15 ans et plus : indique ton âge.</span></label>` : ""}
    <button class="btn" type="submit">Enregistrer</button>
  </form>`;
};

/* Bouton Google officiel (Google Identity Services) */
let gisLoad = null;
const loadGis = () => gisLoad || (gisLoad = new Promise((res, rej) => { if (window.google && google.accounts && google.accounts.id) return res(); const t = document.createElement("script"); t.src = "https://accounts.google.com/gsi/client"; t.async = true; t.onload = res; t.onerror = rej; document.head.appendChild(t); }));
async function mountGoogle() {
  const box = document.getElementById("gbtn"); if (!box) return;
  try {
    await loadGis(); const mode = location.hash.split("/")[2];
    google.accounts.id.initialize({ client_id: APP_CONFIG.googleClientId, ux_mode: "popup", callback: async resp => { try { toast("Connexion…"); await ACCOUNT.signInGoogleToken(resp.credential); afterSignIn(false); } catch (e) { toast(authMsg(e)); } } });
    google.accounts.id.renderButton(box, { theme: "outline", size: "large", shape: "pill", text: mode === "login" ? "signin_with" : "continue_with", locale: "fr", width: Math.min(320, box.clientWidth || 300) });
  } catch { box.innerHTML = `<button type="button" class="btn sec" data-su="google">Continuer avec Google</button>`; }
}
const val = id => { const e = document.getElementById(id); return e ? e.value.trim() : ""; };
const authMsg = e => { const c = e && (e.code || e.message || "");
  if (/missing initial state|web-storage-unsupported|operation-not-supported|storage/i.test(String(c))) return "Ce navigateur bloque la connexion Google. Ouvre le site dans Safari ou Chrome, ou utilise ton e-mail.";
  return /email-already-in-use/.test(c) ? "Un compte existe déjà avec cet e-mail : connecte-toi." : /user-not-found|invalid-credential|wrong-password/.test(c) ? "E-mail ou mot de passe incorrect." : /account-exists/.test(c) ? "Un compte existe déjà avec cet e-mail via une autre méthode." : authError(e); };
function welcome(first, back) {
  const name = first ? " " + esc(first) : "";
  const d = document.createElement("div"); d.className = "endscr light"; d.innerHTML = `<div class="eh">${siraj3d("proud", 190)}</div><h1 class="et">${back ? "Content de te revoir" : "Bienvenue"}${name} !</h1><p class="es">${back ? "Ta progression est retrouvée." : "Tu es connecté. Bismillah, on commence !"}</p><div class="ebar"><button class="btn" id="wk-ok">C'est parti</button></div>`;
  document.body.appendChild(d); SND.win(); confetti(); d.querySelector("#wk-ok").onclick = () => { d.classList.add("out"); setTimeout(() => d.remove(), 300); location.hash = "#/home"; };
}
/* Après une connexion : on reprend le prénom du compte Google s'il n'y en a pas encore, puis message de bienvenue */
function afterSignIn(wasLogin) {
  const m = ME(), nm = ACCOUNT.state.user && ACCOUNT.state.user.name; if (!m.first && nm && !/@/.test(nm)) { m.first = firstOf(nm); m.last = String(nm).trim().split(/\s+/).slice(1).join(" "); E.save(); }
  welcome(m.first, wasLogin && !!m.first);
}
async function submitAuth(kind) {
  const mode = location.hash.split("/")[2] === "login" ? "login" : "create";
  if (kind !== "email" && inAppBrowser()) return toast("La connexion Google ne marche pas ici : ouvre le site dans Safari ou Chrome, ou utilise ton e-mail.");
  const email = val("su-mail"), password = (document.getElementById("su-pass") || {}).value || "", pass2 = (document.getElementById("su-pass2") || {}).value || "";
  if (kind === "email") {
    if (!email) return toast("Écris ton adresse e-mail.");
    if (mode === "create") { if (password.length < 6) return toast("Mot de passe trop court (6 caractères minimum)."); if (password !== pass2) return toast("Les deux mots de passe ne sont pas identiques."); }
    else if (!password) return toast("Écris ton mot de passe.");
  }
  try { toast("Connexion…"); await ACCOUNT.signIn(kind, { email, password, mode }); afterSignIn(mode === "login"); } catch (e) { toast(authMsg(e)); }
}
async function submitEdit() {
  const first = val("su-first"), last = val("su-last"), age = parseInt(val("su-age"), 10), board = !!(document.getElementById("su-board") || {}).checked;
  if (!first) return toast("Écris ton prénom.");
  if (val("su-age") && !(age >= 5 && age <= 120)) return toast("Âge : entre 5 et 120 ans.");
  const m = ME(); Object.assign(m, { first, last, age: age || null, photo: suPhoto || "", board: board && age >= 15 });
  if (board && !(age >= 15)) toast("Il faut indiquer un âge de 15 ans ou plus pour le classement."); else toast("Profil enregistré.");
  E.save(); if (connected()) ACCOUNT.push(); location.hash = "#/profile";
}

document.addEventListener("click", async e => {
  const t = e.target.closest("#su-photo,#su-pwt,#su-reset,[data-su],[data-rk]"); if (!t) return;
  if (t.id === "su-photo") document.getElementById("su-file").click();
  else if (t.id === "su-pwt") { const i = document.getElementById("su-pass"); i.type = i.type === "password" ? "text" : "password"; }
  else if (t.id === "su-reset") { const m = val("su-mail"); if (!m) return toast("Écris d'abord ton e-mail."); try { await ACCOUNT.resetPassword(m); toast("E-mail de réinitialisation envoyé."); } catch (er) { toast(authMsg(er)); } }
  else if (t.dataset.su) submitAuth(t.dataset.su);
});
document.addEventListener("change", async e => {
  if (e.target.id !== "su-file" || !e.target.files[0]) return;
  try { suPhoto = await readPhoto(e.target.files[0]); document.getElementById("su-prev").innerHTML = avatar(88, { first: val("su-first"), photo: suPhoto }); } catch { toast("Impossible de lire cette image."); }
});
document.addEventListener("submit", e => { if (e.target.id === "signf") { e.preventDefault(); submitAuth("email"); } else if (e.target.id === "editf") { e.preventDefault(); submitEdit(); } });
addEventListener("hashchange", () => { if (!/^#\/(signup|profedit)/.test(location.hash)) suPhoto = null; });

/* ---------- Classement mondial ---------- */
V.ranking = () => { setTimeout(drawRanking, 0); return `<a class="back" href="#/home">${ico("back", 18)} Accueil</a>${artBox("mosque", 11, `<small>Dans le monde entier</small><h2>Classement</h2>`, "lhero")}<div id="rk"><div class="card" style="text-align:center">${siraj("think", 80, "float")}<p class="muted">Chargement…</p></div></div>`; };
async function drawRanking() {
  const box = document.getElementById("rk"); if (!box) return; const m = ME();
  const note = txt => `<div class="card" style="text-align:center">${siraj("think", 90, "float")}<p>${txt}</p></div>`;
  if (!ACCOUNT.canSignIn) { box.innerHTML = note("Le classement mondial s'active quand le serveur est branché. En attendant, ton rang et tes XP restent visibles dans ton profil.") + `<a class="btn" href="#/profile">Voir mon profil</a>`; return; }
  try {
    const { rows, pos, me } = await ACCOUNT.leaderboard(); if (!box.isConnected) return;
    const mineIn = rows.some(r => r.id === me);
    let msg = "";
    if (ACCOUNT.state.provider !== "firebase") msg = `<div class="card"><b>Rejoins le classement</b><p class="muted small">Crée un compte (15 ans ou plus) et active « Apparaître dans le classement ».</p><a class="btn sm" href="#/signup">Créer mon compte</a></div>`;
    else if (!(m.board && m.age >= 15)) msg = `<div class="card"><b>Tu n'es pas dans le classement.</b><p class="muted small">${m.age && m.age < 15 ? "Il faut avoir 15 ans ou plus pour apparaître." : "Active « Apparaître dans le classement » dans ton profil."}</p>${m.age && m.age < 15 ? "" : `<a class="btn sm" href="#/profedit">Modifier mon profil</a>`}</div>`;
    else if (pos) msg = `<div class="card rkc"><div class="row"><b>Ta position</b><b>${mineIn ? "" : "n° "}${pos}</b></div><div class="muted small">${E.S.xp} XP</div></div>`;
    box.innerHTML = msg + (rows.length ? `<div class="card" style="padding:6px 0">${rows.map((r, i) => `<div class="rkrow ${r.id === me ? "me" : ""}"><b class="pos">${i + 1 <= 3 ? ["🥇", "🥈", "🥉"][i] : i + 1}</b>${avatar(40, { first: r.name, photo: r.photo })}<div style="flex:1;min-width:0"><div class="nm">${esc(r.name || "Anonyme")}</div><div class="muted small">Rang ${r.rank || 1}${r.streak ? " · 🔥 " + r.streak : ""}</div></div><b class="xp">${ico("moon", 16)} ${r.xp}</b></div>`).join("")}</div>` : note("Personne n'est encore dans le classement. Sois le premier !")) + `<p class="muted small">Les XP sont envoyés par l'application ; le classement n'est pas à l'abri de la triche.</p>`;
  } catch { if (box.isConnected) box.innerHTML = note("Impossible de charger le classement pour le moment. Vérifie ta connexion."); }
}
