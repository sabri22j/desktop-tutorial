/* Parcours enfants : mémoire par révision espacée.
   Chaque aventure terminée devient un « module » à retenir. Première révision 2 h après, puis 1 jour, 3 jours, 7 jours, 14 jours, 30 jours, 90 jours :
   plus on réussit, plus la révision est repoussée ; une erreur ramène le module plus tôt. */
const SRS_H = 3600e3, SRS_D = 24 * SRS_H;
const SRS_INT = [0, 2 * SRS_H, SRS_D, 3 * SRS_D, 7 * SRS_D, 14 * SRS_D, 30 * SRS_D, 90 * SRS_D];   // délai avant la prochaine révision, selon le niveau de mémoire atteint
const SRS_MAX = 7, SRS_STEP = 6;
const SRS_TITLES = ["Petit curieux", "Apprenti", "Explorateur", "Grand explorateur", "Sage en herbe", "Savant", "Maître de la mémoire"];

const srsMap = () => { const D = kd(); D.srs = D.srs || {}; return D.srs; };
const srsGet = id => srsMap()[id] || null;
const srsLog = k => { const D = kd(); D.stat = D.stat || {}; const o = D.stat[E.dayStr()] = D.stat[E.dayStr()] || { l: 0, r: 0 }; o[k]++; };
function srsLearn(id) { const m = srsMap(); if (m[id]) return false; m[id] = { lvl: 1, due: Date.now() + SRS_INT[1], last: Date.now(), reps: 0, lapses: 0, since: Date.now() }; srsLog("l"); return true; }
function srsReview(id, ok) {
  const m = srsMap()[id]; if (!m) return srsLearn(id); const now = Date.now();
  if (ok) { m.lvl = Math.min(SRS_MAX, m.lvl + 1); m.due = now + SRS_INT[m.lvl]; } else { m.lvl = Math.max(1, m.lvl - 2); m.lapses++; m.due = now + SRS_INT[1]; }
  m.reps++; m.last = now; return true;
}
const srsList = () => Object.entries(srsMap()).map(([id, m]) => { const f = K.find(id); return f ? { id, m, a: f.a, w: f.w } : null; }).filter(Boolean);
const srsDue = () => srsList().filter(x => x.m.due <= Date.now()).sort((a, b) => a.m.due - b.m.due);
const srsNext = () => srsList().filter(x => x.m.due > Date.now()).sort((a, b) => a.m.due - b.m.due)[0] || null;
const srsPoints = () => srsList().reduce((n, x) => n + x.m.lvl, 0);
const srsLevel = () => { const p = srsPoints(), n = 1 + Math.floor(p / SRS_STEP); return { n, p, pct: Math.round((p % SRS_STEP) / SRS_STEP * 100), left: SRS_STEP - p % SRS_STEP, title: SRS_TITLES[Math.min(n - 1, SRS_TITLES.length - 1)] }; };
const srsSum = days => { const D = kd(), st = D.stat || {}; let l = 0, r = 0; for (let i = 0; i < days; i++) { const d = new Date(Date.now() - i * SRS_D), k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; if (st[k]) { l += st[k].l; r += st[k].r; } } return { l, r }; };

/* Temps */
const srsPad = n => String(n).padStart(2, "0");
const srsIn = ms => { if (ms <= 0) return "maintenant"; const m = Math.round(ms / 60000); if (m < 1) return "dans moins d'une minute"; if (m < 60) return `dans ${m} min`; const h = Math.floor(m / 60), r = m % 60; if (h < 24) return `dans ${h} h${r ? " " + srsPad(r) : ""}`; const d = Math.round(ms / SRS_D); return `dans ${d} jour${d > 1 ? "s" : ""}`; };
const srsWhen = ts => { const d = new Date(ts), now = new Date(), hm = `${d.getHours()}:${srsPad(d.getMinutes())}`, day = x => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime(), diff = Math.round((day(d) - day(now)) / SRS_D);
  if (ts <= Date.now()) return "maintenant"; if (diff === 0) return `aujourd'hui à ${hm}`; if (diff === 1) return `demain à ${hm}`; return `${d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" })} à ${hm}`; };
const srsCd = ms => { ms = Math.max(0, ms); const s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return { h: srsPad(h), m: srsPad(m), s: srsPad(x) }; };
const srsCdHtml = ms => { const c = srsCd(ms); return `<div><b id="kch">${c.h}</b><small>HEURES</small></div><i>:</i><div><b id="kcm">${c.m}</b><small>MINUTES</small></div><i>:</i><div><b id="kcs">${c.s}</b><small>SECONDES</small></div>`; };
const srsPips = lvl => Array.from({ length: SRS_MAX }, (_, i) => `<i class="${i < lvl ? "on" : ""}"></i>`).join("");
const srsBadge = id => { const m = srsGet(id); if (!m) return ""; return m.due <= Date.now() ? `<span class="kd-sb due">🧠 À réviser</span>` : `<span class="kd-sb">⏰ ${srsIn(m.due - Date.now())}</span>`; };

/* Fenêtre du bas */
function kdSheet(html, id = "kdsheet") { document.getElementById(id)?.remove(); const d = document.createElement("div"); d.id = id; d.className = "kd-rev"; d.innerHTML = `<div class="bk" data-ksheetx></div><div class="pn"><div class="grab"></div>${html}</div>`; document.body.appendChild(d); }
const kdConnected = () => { try { return typeof connected === "function" ? connected() : (ACCOUNT.state.provider !== "local"); } catch { return false; } };
function kdAccountAsk() {
  const D = kd(), n = srsList().length; if (n < 1 || kdConnected() || D.ask === E.dayStr() || document.getElementById("kdsheet")) return; try { if (!ACCOUNT.canSignIn) return; } catch { return; }
  D.ask = E.dayStr(); E.save();
  kdSheet(`<div class="kd-acc"><div>${KC.html("happy", 96, { tap: false, cls: "kd-mini" })}</div><h3>Ne perds pas tes ${n} module${n > 1 ? "s" : ""}${ME().first ? ", " + esc(ME().first) : ""} !</h3><p>Crée ton compte gratuit pour garder ta progression et tes révisions programmées.</p>
    <ul><li>☁️ Sauvegarde automatique de ta progression</li><li>🔄 Synchronisation sur tous tes appareils</li><li>⚡ Compte créé en moins de 10 secondes</li></ul>
    <a class="btn kd-next" href="#/signup">Créer mon compte gratuit</a><a class="btn sec" href="#/signup/login" style="margin-top:8px">J'ai déjà un compte</a><button class="kd-later" data-ksheetx>Plus tard</button></div>`);
}

/* ---- Accueil ---- */
function kdHome() {
  const D = kd(), nx = kdNext(), lv = srsLevel(), due = srsDue(), next = srsNext(), day = (D.stat || {})[E.dayStr()] || { l: 0, r: 0 }, total = srsList().length, dd = D.daily === kdToday();
  setTimeout(() => { KC.setAudio((k, t) => KA.play(k, t)); const el = document.querySelector(".kd-learn .kc"); if (el) KC.tips(el, kdTips(nx, total)); kdAccountAsk(); }, 500);
  const rev = due.length
    ? `<section class="kd-rv due"><div class="kd-rvh"><span class="kd-rvi">🧠</span><div><h3>${due.length} module${due.length > 1 ? "s" : ""} en attente</h3><p>Révise maintenant pour ne pas les oublier !</p></div></div><a class="btn kd-rvb" href="#/kids/adv/rev:${due[0].id}">COMMENCER LA RÉVISION</a></section>`
    : next ? `<section class="kd-rv"><div class="kd-rvt"><h3>Prochaine révision dans</h3><button class="kd-help" data-khelp aria-label="Comment ça marche ?">?</button></div><div class="kd-cd" id="kcd" data-t="${next.m.due}"><span class="kd-cdi">⏰</span>${srsCdHtml(next.m.due - Date.now())}</div><p class="kd-rvs">${next.a.e} ${esc(next.a.n)} · ${srsWhen(next.m.due)}</p></section>`
    : `<section class="kd-rv empty"><div class="kd-rvh"><span class="kd-rvi">🧠</span><div><h3>Ta mémoire se prépare</h3><p>Termine une aventure : je te dirai quand la réviser.</p></div><button class="kd-help" data-khelp aria-label="Comment ça marche ?">?</button></div></section>`;
  const recent = (D.recent || []).map(id => KW.find(w => w.id === id)).filter(Boolean);
  const streak = E.streak(), stars = kd().stars || 0;
  return `<div class="kd kd-home">${kdSky()}
  <div class="kd-topbar"><div class="kd-tbar-l"><b>🌙 Niv. ${lv.n}</b><div class="kd-tbar-prog"><div class="kd-hfill" style="width:${Math.max(2, lv.pct)}%"></div></div><small>${lv.pct}%</small></div><div class="kd-tbar-r"><span class="kd-chip-s${streak > 0 ? " on" : ""}">🔥 ${streak}</span><span class="kd-chip-s gold">⭐ ${stars}</span></div></div>
  <section class="kd-learn"><div class="kd-lt"><h3>${nx ? "Continue l'aventure !" : "Tu es champion !"}</h3><p>${nx ? `Prochaine : <b>${esc(nx.w.e)} ${esc(nx.a.n)}</b>` : "Tous les mondes terminés. Bravo !"}</p></div><div class="kd-lc">${KC.html(nx ? "happy" : "proud", 108, { sparks: true })}</div>${nx ? `<a class="btn kd-lb" href="#/kids/adv/${nx.a.id}">Commencer ▶</a>` : `<a class="btn kd-lb" href="#/album">Voir mon Sirâj</a>`}</section>
  ${rev}
  <a class="kd-daily${dd ? " done" : ""}" href="#/kdaily"><div class="kd-daily-l"><span class="kd-de">${dd ? "✅" : "🎯"}</span><div><b>Défi du jour</b><small>${dd ? "Relevé aujourd'hui !" : "5 questions · +2 ⭐"}</small></div></div><span class="kd-arr">›</span></a>
  <div class="kd-s3"><div class="rv"><span>🔁</span><b>${day.r}</b><small>Révisés</small></div><div class="ln"><span>🎓</span><b>${day.l}</b><small>Appris</small></div><div class="tt"><span>📚</span><b>${total}</b><small>Modules</small></div></div>
  <div class="kd-tiles"><a href="#/kgames"><span>🎮</span><b>Jeux</b><small>Mémoire, éclair</small></a><a href="#/ksoura"><span>📖</span><b>Sourates</b><small>À apprendre</small></a><a href="#/kdico"><span>🔤</span><b>Mots arabes</b><small>Mon dico</small></a><a href="#/kids/adv/miss"><span>🔁</span><b>Erreurs</b><small>${kdMiss().length ? kdMiss().length + " à revoir" : "Tout juste !"}</small></a></div>
  ${recent.length ? `<h3 class="kd-h3">Dernières catégories</h3><div class="kd-recent">${recent.map(w => { const d = kdWorldDone(w), p = Math.round(d / w.adv.length * 100); return `<a href="#/kids/${w.id}" style="--c:${w.c}"><span class="kd-ring" style="--p:${p}">${p}%</span><div><b>${esc(w.n)}</b><small>${d}/${w.adv.length} aventures</small></div><i>›</i></a>`; }).join("")}</div>` : ""}
  <p class="muted small" style="text-align:center;margin-top:14px">Un parcours pour apprendre l'islam pas à pas, avec un adulte si besoin. Contenu à faire relire par une personne qualifiée.</p></div>`;
}

/* ---- Modules (les mondes) ---- */
V.kmod = () => `<div class="kd">${kdSky()}<h2>Modules</h2><p class="muted">Choisis un monde. Chaque aventure terminée devient un module à retenir.</p>
  <div class="kd-mgrid">${KW.map(w => { const d = kdWorldDone(w), p = Math.round(d / w.adv.length * 100), due = srsDue().filter(x => x.w.id === w.id).length; return `<a class="kd-mod" href="#/kids/${w.id}" style="--c:${w.c}"><span class="kd-mi">${w.e}</span><span class="kd-ring" style="--p:${p}">${p}%</span><b>${esc(w.n)}</b><small>${w.adv.length} aventures${due ? ` · <u>${due} à réviser</u>` : ""}</small></a>`; }).join("")}</div></div>`;

/* ---- Progression et répertoire des révisions ---- */
V.kprog = () => {
  const D = kd(), list = srsList(), now = Date.now(), tot = K.count(), due = list.filter(x => x.m.due <= now).length;
  const cnt = { master: 0, solid: 0, learn: 0, due };
  list.forEach(x => { if (x.m.due <= now) return; if (x.m.lvl >= 6) cnt.master++; else if (x.m.lvl >= 3) cnt.solid++; else cnt.learn++; });
  const unseen = tot - list.length, seg = [[cnt.master, "#1a9a66", "Maîtrisés"], [cnt.solid, "#6bd39a", "Bien connus"], [cnt.learn, "#f4b836", "En apprentissage"], [cnt.due, "#e5584a", "À réviser"], [unseen, "#d6ddd9", "Pas encore vus"]];
  let off = 0; const C = 2 * Math.PI * 54, arcs = seg.map(([n, c]) => { const l = n / tot * C, o = `<circle cx="70" cy="70" r="54" fill="none" stroke="${c}" stroke-width="22" stroke-dasharray="${l} ${C - l}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"/>`; off += l; return n ? o : ""; }).join("");
  const w7 = srsSum(7), w30 = srsSum(30), rows = list.slice().sort((a, b) => a.m.due - b.m.due);
  const perm = typeof Notification !== "undefined" ? Notification.permission : "unsupported";
  return `<div class="kd">${kdSky()}<h2>Progression</h2>
  <div class="kd-pt"><div class="g"><b>+${w7.l}</b><small>modules appris</small><em>7 jours</em></div><div class="o"><b>+${w30.r}</b><small>révisions</small><em>30 jours</em></div></div>
  <section class="kd-mem2"><h3>Ma mémoire <button class="kd-help" data-khelp aria-label="Comment ça marche ?">?</button></h3><div class="kd-donut"><svg viewBox="0 0 140 140" width="150" height="150"><circle cx="70" cy="70" r="54" fill="none" stroke="#e8eeea" stroke-width="22"/>${arcs}<text x="70" y="66" text-anchor="middle" font-size="26" font-weight="800" fill="currentColor">${list.length}</text><text x="70" y="86" text-anchor="middle" font-size="11" fill="currentColor" opacity=".7">modules</text></svg>
    <ul>${seg.map(([n, c, t]) => `<li><i style="background:${c}"></i>${t}<b>${n}</b></li>`).join("")}</ul></div></section>
  <section class="kd-repo"><h3>📅 Mes révisions</h3>${rows.length ? rows.map(x => { const isDue = x.m.due <= now; return `<div class="kd-row${isDue ? " due" : ""}" style="--c:${x.w.c}"><span class="kd-ri">${x.a.e}</span><div class="kd-rb"><b>${esc(x.a.n)}</b><div class="kd-pips">${srsPips(x.m.lvl)}</div><small>${isDue ? "🧠 À réviser maintenant" : "⏰ " + srsWhen(x.m.due) + " · " + srsIn(x.m.due - now)}</small></div><a class="btn sm ${isDue ? "" : "sec"}" href="#/kids/adv/rev:${x.id}">${isDue ? "Réviser" : "S'entraîner"}</a></div>`; }).join("") : `<p class="muted">Termine une aventure : elle apparaîtra ici avec l'heure de sa prochaine révision.</p>`}</section>
  <section class="card"><h3>🔔 Rappels de révision</h3><p class="muted small">Sirâj te prévient quand un module est prêt à être révisé${perm === "granted" ? " (activés)" : ""}. Les rappels arrivent si l'application est ouverte ou installée sur le téléphone, et si les notifications sont autorisées.</p>${perm === "default" ? `<button class="btn sm" data-knotif>Activer les rappels</button>` : perm === "denied" ? `<p class="muted small">Les notifications sont bloquées dans les réglages du téléphone.</p>` : ""}</section>
  <div class="kd-links"><a class="btn sec" href="#/album">🎽 Mon Sirâj et mes tenues</a><a class="btn sec" href="#/settings">⚙️ Réglages</a></div></div>`;
};

/* ---- Fin d'aventure : message de mémoire ---- */
function srsAfterAdventure(id, first, mis) {
  const D = kd(), f = K.find(id); if (!f) return ""; D.recent = [f.w.id].concat((D.recent || []).filter(x => x !== f.w.id)).slice(0, 3);
  const notif = typeof Notification !== "undefined" && Notification.permission === "default" ? `<button class="btn sec sm" data-knotif>🔔 Me rappeler de réviser</button>` : "";
  let m = srsGet(id);
  if (!m) { srsLearn(id); m = srsGet(id); E.save(); return `<div class="kd-srs"><b>⏰ Première révision ${srsWhen(m.due)}</b><small>(${srsIn(m.due - Date.now())}) — reviens pour bien retenir ce module !</small>${notif}</div>`; }
  if (m.due <= Date.now()) { const ok = mis <= 1; srsReview(id, ok); srsLog("r"); E.save(); return ok ? `<div class="kd-srs ok"><b>🧠 Révision réussie !</b><small>Mémoire niveau ${m.lvl}/${SRS_MAX} · prochaine révision ${srsWhen(m.due)}</small></div>` : `<div class="kd-srs ko"><b>🧠 Ce module reviendra vite</b><small>Prochaine révision ${srsWhen(m.due)}. Relis la leçon avant !</small></div>`; }
  return `<div class="kd-srs"><b>Prochaine révision ${srsWhen(m.due)}</b><small>${srsIn(m.due - Date.now())}</small></div>`;
}
function kdFinishReview() {
  const A = AS.A, D = kd(), st = document.getElementById("kstage"), m = srsGet(A.rev), dueNow = !!m && m.due <= Date.now(), ok = AS.mis <= 1;
  let xp = 3, star = 0; if (dueNow) { srsReview(A.rev, ok); srsLog("r"); xp = ok ? 12 : 5; if (ok) { D.stars += 1; star = 1; } }
  E.addXP(xp); E.save(); const m2 = srsGet(A.rev), rest = srsDue().filter(x => x.id !== A.rev), nq = A.steps.filter(s => !s.rq).length;
  AS.p = A.steps.length; kdProg(); SND.win(); if (ok) confetti(); window.scrollTo(0, 0);
  const title = !dueNow ? "Bon entraînement !" : ok ? "Module bien mémorisé !" : "On le revoit bientôt !";
  const info = !dueNow ? `Ta prochaine révision officielle : <b>${srsWhen(m2.due)}</b>.` : ok ? `Niveau de mémoire <b>${m2.lvl}/${SRS_MAX}</b>. Prochaine révision : <b>${srsWhen(m2.due)}</b> (${srsIn(m2.due - Date.now())}).` : `Je te le reposerai <b>${srsWhen(m2.due)}</b>. Relis la leçon d'ici là !`;
  st.innerHTML = `<div class="kd-pane kd-end"><div class="kd-big">${ok ? "🧠" : "📖"}</div><h2>${title}</h2><p class="kd-text">${esc(A.a.e)} ${esc(A.a.n)}<br><small class="muted">${nq - AS.mis}/${nq} réponses du premier coup · +${xp} XP${star ? " · +1 ⭐" : ""}</small></p>
    <div class="kd-srs ${ok ? "ok" : "ko"}"><small>${info}</small><div class="kd-pips big">${srsPips(m2.lvl)}</div></div>
    <div class="kd-endc">${KC.html(ok ? "proud" : "happy", 130, { sparks: ok })}</div><div class="kd-recap"><button class="btn sec sm" data-krev="${A.rev}">📖 Relire la leçon</button></div>
    <div class="kd-endb">${rest.length ? `<a class="btn kd-next" href="#/kids/adv/rev:${rest[0].id}">Réviser le suivant (${rest.length}) ▶</a>` : `<a class="btn kd-next" href="#/kids">Retour à l'accueil</a>`}<a class="btn sec" href="#/kprog">Mes révisions</a></div></div>`;
  KA.play(ok ? "sj-end3" : "sj-ko3", ok ? K.lines["sj-end3"] : K.lines["sj-ko3"]);
}

/* ---- Événements, compte à rebours, rappels ---- */
document.addEventListener("click", e => {
  const t = e.target.closest("[data-khelp],[data-knotif],[data-ksheetx]"); if (!t) return;
  if (t.matches("[data-ksheetx]")) return void document.getElementById("kdsheet")?.remove();
  if (t.matches("[data-khelp]")) return kdSheet(`<h3>🧠 Comment ta mémoire travaille</h3><p>Ton cerveau oublie vite ce qu'il vient d'apprendre. Alors Sirâj te repose chaque module au bon moment :</p><div class="kd-hl"><span>1</span> 2 heures après<br><span>2</span> 1 jour après<br><span>3</span> 3 jours après<br><span>4</span> 1 semaine · 5. 2 semaines · 6. 1 mois…</div><p>Plus tu réussis, plus la prochaine révision est <b>repoussée</b>. Si tu te trompes, le module revient plus vite. Quand l'heure arrive, une révision t'attend sur l'accueil !</p><button class="btn kd-next" data-ksheetx>J'ai compris</button>`);
  if (t.matches("[data-knotif]")) { if (typeof Notification === "undefined") return toast("Les rappels ne sont pas disponibles sur cet appareil."); Notification.requestPermission().then(p => { toast(p === "granted" ? "Rappels activés ✓" : "Rappels refusés"); if (location.hash.startsWith("#/kprog")) route(); }); }
});
setInterval(() => { const el = document.getElementById("kcd"); if (!el) return; const ms = +el.dataset.t - Date.now(); if (ms <= 0) { srsPoll(true); return; } const c = srsCd(ms), h = document.getElementById("kch"), m = document.getElementById("kcm"), s = document.getElementById("kcs"); if (h) { h.textContent = c.h; m.textContent = c.m; s.textContent = c.s; } }, 1000);
function srsPoll(force) {
  const due = srsDue(); if (!due.length) return; const D = kd(), t = due[0].m.due;
  if (D.notif === t && !force) return; if (D.notif !== t) { D.notif = t; E.save(); toast("🧠 C'est l'heure de réviser !"); try { if (typeof Notification !== "undefined" && Notification.permission === "granted") new Notification("Sirat", { body: `🧠 ${due.length} module${due.length > 1 ? "s" : ""} à réviser avec Sirâj !`, icon: "icon.svg" }); } catch {} }
  if (/^#\/(kids)?$|^#\/kprog|^#\/home|^$/.test(location.hash) && !document.getElementById("kstage")) route();
}
setInterval(() => srsPoll(false), 20000); setTimeout(() => srsPoll(false), 3000);
