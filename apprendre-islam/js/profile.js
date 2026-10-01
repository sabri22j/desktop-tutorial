/* Profil (prénom, nom, âge, photo), création de compte et connexion, message de bienvenue, classement mondial.
   Le mot de passe n'est jamais stocké par l'application : il est confié à Firebase Authentication.
   Le classement n'affiche que : prénom + initiale du nom, photo (facultative), XP, rang. Réservé aux comptes de 15 ans et plus qui l'activent. */
const ME = () => E.S.me || (E.S.me = { first: "", last: "", age: null, photo: "", board: false });
const okPhoto = p => typeof p === "string" && p.startsWith("data:image/jpeg;base64,") && p.length < 60000;
function avatar(size = 56, m = ME()) {
  const st = `width:${size}px;height:${size}px`;
  return okPhoto(m.photo) ? `<img class="av" src="${m.photo}" alt="" style="${st}">` : `<span class="av ph" style="${st};font-size:${Math.round(size * 0.45)}px">${esc(((m.first || m.name || "?")[0] || "?").toUpperCase())}</span>`;
}
const readPhoto = file => new Promise((res, rej) => { const fr = new FileReader(); fr.onerror = rej; fr.onload = () => { const im = new Image(); im.onerror = rej; im.onload = () => { const s = 160, c = document.createElement("canvas"); c.width = c.height = s; const k = Math.max(s / im.width, s / im.height), w = im.width * k, h = im.height * k; c.getContext("2d").drawImage(im, (s - w) / 2, (s - h) / 2, w, h); res(c.toDataURL("image/jpeg", 0.8)); }; im.src = fr.result; }; fr.readAsDataURL(file); });
const profCard = () => { const m = ME(), has = !!m.first; return `<div class="card prof">${avatar(72)}<div style="flex:1"><h3 style="margin:0">${has ? esc(m.first + (m.last ? " " + m.last : "")) : "Ton profil"}</h3><div class="muted small">${has ? (m.age ? m.age + " ans · " : "") + "Rang " + E.rank().n + " · " + esc(E.rank().title) : "Ajoute ta photo et ton prénom."}</div></div><a class="btn sec sm" href="#/${has ? "profedit" : "signup"}">${has ? "Modifier" : "Créer mon profil"}</a></div>`; };

/* ---------- Formulaire (création, connexion, modification) ---------- */
let suPhoto = null;
V.signup = (mode) => {
  const edit = mode === "edit", login = mode === "login", m = ME(), online = ACCOUNT.canSignIn, P = ACCOUNT.providers; if (suPhoto === null) suPhoto = m.photo || "";
  const social = online ? [["google", "Google"], ["facebook", "Facebook"], ["apple", "Apple"]].filter(([k]) => P[k]).map(([k, n]) => `<button type="button" class="btn sec" data-su="${k}">${login ? "Se connecter" : "Continuer"} avec ${n}</button>`).join("") : "";
  return `<a class="back" href="#/profile">${ico("back", 18)} Profil</a>
  <h2>${edit ? "Mon profil" : login ? "Se connecter" : "Créer mon profil"}</h2>
  <form id="signf" class="card" autocomplete="on" novalidate>
    ${login ? "" : `<div class="phrow"><button type="button" class="phbtn" id="su-photo" aria-label="Choisir une photo"><span id="su-prev">${avatar(88, { first: m.first, photo: suPhoto })}</span><span class="cam">${ico("camera", 16)}</span></button><input type="file" id="su-file" accept="image/*" hidden><div class="muted small" style="flex:1">Ta photo reste facultative. Elle est réduite à 160 px.</div></div>
    <label class="fl">Prénom<input type="text" id="su-first" autocomplete="given-name" value="${esc(m.first)}" maxlength="30"></label>
    <label class="fl">Nom de famille<input type="text" id="su-last" autocomplete="family-name" value="${esc(m.last)}" maxlength="40"></label>
    <label class="fl">Âge<input type="number" id="su-age" inputmode="numeric" min="5" max="120" value="${m.age || ""}"></label>`}
    ${edit ? "" : `<label class="fl">Adresse e-mail<input type="email" id="su-mail" autocomplete="email"></label>
    <label class="fl">Mot de passe${login ? "" : " (6 caractères minimum)"}<span class="pw"><input type="password" id="su-pass" autocomplete="${login ? "current-password" : "new-password"}"><button type="button" class="pwt" id="su-pwt" aria-label="Afficher le mot de passe">${ico("eye", 18)}</button></span></label>`}
    ${login ? "" : `<label class="chk"><input type="checkbox" id="su-board" ${m.board ? "checked" : ""}> <span>Apparaître dans le classement mondial (prénom, initiale du nom, photo et XP visibles par tous). Réservé aux 15 ans et plus.</span></label>`}
    <button class="btn" type="submit">${edit ? "Enregistrer" : login ? "Se connecter" : online && P.email ? "Créer mon compte" : "Créer mon profil"}</button>
    ${login && online ? `<button type="button" class="btn sec" id="su-reset">Mot de passe oublié</button>` : ""}
    ${social ? `<div class="or"><span>ou</span></div>${social}` : ""}
    ${!edit && !online ? `<p class="muted small">Ton profil est enregistré sur cet appareil. La création de compte en ligne (Google, Facebook, Apple, e-mail) et le classement mondial s'activent une fois le serveur branché.</p>` : ""}
    ${!edit && online ? `<a class="btn sec" href="#/signup/${login ? "create" : "login"}">${login ? "Créer un compte" : "J'ai déjà un compte"}</a>` : ""}
  </form>`;
};
V.profedit = () => V.signup("edit");

const val = id => { const e = document.getElementById(id); return e ? e.value.trim() : ""; };
function readForm(mode) {
  const first = val("su-first"), last = val("su-last"), age = parseInt(val("su-age"), 10), board = !!(document.getElementById("su-board") || {}).checked;
  if (mode !== "login") { if (!first) return { err: "Écris ton prénom." }; if (!(age >= 5 && age <= 120)) return { err: "Indique ton âge (entre 5 et 120 ans)." }; }
  return { first, last, age, board };
}
function saveMe(f) { const m = ME(); Object.assign(m, { first: f.first, last: f.last, age: f.age, photo: suPhoto || "", board: f.board && f.age >= 15 }); E.save(); }
function welcome(first, back) {
  const d = document.createElement("div"); d.className = "endscr light"; d.innerHTML = `<div class="eh">${siraj3d("proud", 190)}</div><h1 class="et">${back ? "Content de te revoir" : "Bienvenue"} ${esc(first)} !</h1><p class="es">${back ? "Ta progression est retrouvée." : "Ton profil est prêt. Bismillah, on commence !"}</p><div class="ebar"><button class="btn" id="wk-ok">C'est parti</button></div>`;
  document.body.appendChild(d); SND.win(); confetti(); d.querySelector("#wk-ok").onclick = () => { d.classList.add("out"); setTimeout(() => d.remove(), 300); location.hash = "#/home"; };
}
const authMsg = e => { const c = e && (e.code || ""); return /email-already-in-use/.test(c) ? "Un compte existe déjà avec cet e-mail : connecte-toi." : /user-not-found|invalid-credential|wrong-password/.test(c) ? "E-mail ou mot de passe incorrect." : /account-exists/.test(c) ? "Un compte existe déjà avec cet e-mail via une autre méthode." : authError(e); };

async function submitForm(kind) {
  const mode = location.hash.split("/")[2] || (location.hash.startsWith("#/profedit") ? "edit" : "create");
  const f = readForm(mode); if (f.err) return toast(f.err);
  if (mode === "edit") { saveMe(f); if (ACCOUNT.state.provider === "firebase") ACCOUNT.push(); toast("Profil enregistré."); location.hash = "#/profile"; return; }
  const online = ACCOUNT.canSignIn && (kind !== "local");
  if (!online) { saveMe(f); welcome(f.first); return; }
  if (mode !== "login" && f.age < 13) return toast("Pour créer un compte en ligne, il faut avoir 13 ans ou plus. Demande à un parent, ou apprends sans compte.");
  const email = val("su-mail"), password = (document.getElementById("su-pass") || {}).value || "";
  if (kind === "email") { if (!email) return toast("Écris ton adresse e-mail."); if (mode !== "login" && password.length < 6) return toast("Mot de passe trop court (6 caractères minimum)."); if (mode === "login" && !password) return toast("Écris ton mot de passe."); }
  try {
    toast("Connexion…"); const before = !!ME().first;
    const r = await ACCOUNT.signIn(kind, { email, password, mode: mode === "login" ? "login" : "create", displayName: (f.first + " " + (f.last || "")).trim() });
    if (mode === "login") { const m = ME(); if (m.first) welcome(m.first, true); else toast("Connecté."), location.hash = "#/profile"; return; }
    saveMe(f); await ACCOUNT.push(); welcome(f.first);
  } catch (e) { toast(authMsg(e)); }
}

document.addEventListener("click", async e => {
  const t = e.target.closest("#su-photo,#su-pwt,#su-reset,[data-su],[data-rk]"); if (!t) return;
  if (t.id === "su-photo") document.getElementById("su-file").click();
  else if (t.id === "su-pwt") { const i = document.getElementById("su-pass"); i.type = i.type === "password" ? "text" : "password"; }
  else if (t.id === "su-reset") { const m = val("su-mail"); if (!m) return toast("Écris d'abord ton e-mail."); try { await ACCOUNT.resetPassword(m); toast("E-mail de réinitialisation envoyé."); } catch (er) { toast(authMsg(er)); } }
  else if (t.dataset.su) submitForm(t.dataset.su);
});
document.addEventListener("change", async e => {
  if (e.target.id !== "su-file" || !e.target.files[0]) return;
  try { suPhoto = await readPhoto(e.target.files[0]); document.getElementById("su-prev").innerHTML = avatar(88, { first: val("su-first"), photo: suPhoto }); } catch { toast("Impossible de lire cette image."); }
});
document.addEventListener("submit", e => { if (e.target.id !== "signf") return; e.preventDefault(); const mode = location.hash.split("/")[2]; submitForm(mode === "login" ? "email" : (ACCOUNT.canSignIn && ACCOUNT.providers.email ? "email" : "local")); });
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
