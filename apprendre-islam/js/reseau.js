/* Réseau : répertoire de vidéos, de rappels et de ressources (TikTok, YouTube, sites…).
   Sources : liste fournie avec l'application (SEED_RES), ressources partagées (collection « resources » de la base, si disponible) et ressources ajoutées par la personne.
   Les liens s'ouvrent à l'extérieur ; ils ne sont pas vérifiés par l'application. */
const SEED_RES = [
  { id: "s-quran", title: "Quran.com", author: "Quran.com", url: "https://quran.com", topic: "Coran", note: "Lire, écouter et étudier le Coran avec des traductions." },
  { id: "s-sunnah", title: "Sunnah.com", author: "Sunnah.com", url: "https://sunnah.com", topic: "Pratique", note: "Recueils de hadiths en ligne, avec références et degrés d'authenticité." },
];
const RES_TOPICS = ["Rappels", "Histoire", "Coran", "Pratique", "Prophètes", "Enfants", "Autre"];
const PCOL = { TikTok: "#111", YouTube: "#e5584a", Instagram: "#b5469c", Podcast: "#6b4bb5", Site: "#0f8a5f" };
let resShared = [], resTopic = "Tous", resQ = "", resFav = false;
const safeUrl = u => { try { const x = new URL(String(u).trim()); return /^https?:$/.test(x.protocol) ? x : null; } catch { return null; } };
const platOf = u => { const h = (safeUrl(u) || { hostname: "" }).hostname; return /tiktok\./.test(h) ? "TikTok" : /youtube\.|youtu\.be/.test(h) ? "YouTube" : /instagram\./.test(h) ? "Instagram" : /spotify\.|podcasts\.|anchor\.fm/.test(h) ? "Podcast" : "Site"; };
function allRes() { const seen = new Set(), out = []; [...resShared, ...SEED_RES, ...(E.S.res || []).map(r => ({ ...r, mine: true }))].forEach(r => { const x = safeUrl(r.url); if (!x || !r.title || seen.has(x.href)) return; seen.add(x.href); out.push({ ...r, href: x.href, host: x.hostname.replace(/^www\./, ""), plat: platOf(r.url) }); }); return out; }
async function loadShared() { try { const db = window.claude && window.claude.use ? await window.claude.use("db") : null; if (!db) return; const snap = await db.collection("resources").get(); resShared = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(r => r.url && r.title); } catch {} drawRes(); }
function drawRes() {
  const el = document.getElementById("resl"); if (!el) return; const n = norm(resQ), fav = E.S.favres || {};
  const list = allRes().filter(r => (resTopic === "Tous" || r.topic === resTopic) && (!resFav || fav[r.href]) && (!n || norm([r.title, r.author, r.note, r.topic, r.plat].join(" ")).includes(n)));
  el.innerHTML = list.length ? list.map(r => `<div class="card res"><div class="row" style="align-items:flex-start"><div style="flex:1"><div class="gap" style="margin-bottom:6px"><span class="plat" style="background:${PCOL[r.plat]}">${esc(r.plat)}</span>${r.topic ? `<span class="tag">${esc(r.topic)}</span>` : ""}${r.mine ? `<span class="tag gold">Ajouté par toi</span>` : ""}</div><h3 style="font-size:1.05rem">${esc(r.title)}</h3><div class="muted small">${r.author ? esc(r.author) + " · " : ""}${esc(r.host)}</div>${r.note ? `<p style="margin:6px 0 0">${esc(r.note)}</p>` : ""}</div><button class="favb ${fav[r.href] ? "on" : ""}" data-resfav="${esc(r.href)}" aria-label="Favori">${ico("star", 22)}</button></div>
    <div class="gap" style="margin-top:10px"><a class="btn sm" href="${esc(r.href)}" target="_blank" rel="noopener noreferrer">Ouvrir</a><button class="btn sec sm" data-copy="${esc(r.title + " " + r.href)}">Partager</button>${r.mine ? `<button class="btn sec sm" data-resdel="${esc(r.href)}">Retirer</button>` : ""}</div></div>`).join("")
    : `<div class="card" style="text-align:center">${siraj("think", 90, "float")}<h3>${resFav ? "Pas encore de favori" : "Rien ici pour l'instant"}</h3><p class="muted">${resFav ? "Touche l'étoile d'une ressource pour la retrouver ici." : "De nouvelles vidéos et ressources sont ajoutées régulièrement. Tu peux aussi ajouter les tiennes ci-dessous."}</p></div>`;
}
V.reseau = () => { const h = hadithOfDay(); setTimeout(() => { drawRes(); loadShared(); }, 0);
  return `${artBox("oasis", 9, `<small>Vidéos · rappels · ressources</small><h2>Réseau</h2>`, "lhero")}
  <div class="card fun"><h3>${ico("bulb", 22)} Rappel du jour</h3><p style="font-size:1.05rem">« ${esc(h.fr)} »</p><div class="src"><b>${esc(h.ref)}</b> · traduction du sens</div><div class="gap" style="margin-top:10px"><a class="btn sec sm" href="#/today">Verset et histoire</a><a class="btn sec sm" href="#/profile">${ico("bell", 16)} Mes rappels</a></div></div>
  <input type="text" id="resq" placeholder="Rechercher une vidéo ou une ressource" style="margin-bottom:10px">
  <div>${["Tous", ...RES_TOPICS].map(t => `<button class="pill ${resTopic === t ? "on" : ""}" data-rtopic="${t}">${t}</button>`).join("")}<button class="pill ${resFav ? "on" : ""}" id="resfavf">${ico("star", 14)} Favoris</button></div><div class="sp"></div>
  <div id="resl"></div>
  <details class="card"><summary style="cursor:pointer;font-weight:800">Ajouter une ressource</summary><p class="muted small" style="margin-top:8px">Colle le lien d'une vidéo TikTok ou YouTube, d'un compte ou d'un site. Elle apparaît dans ta liste (et se synchronise avec ton compte).</p>
  <input type="text" id="res-title" placeholder="Titre" style="margin-bottom:8px"><input type="text" id="res-url" placeholder="Lien (https://…)" style="margin-bottom:8px"><select id="res-topic" style="margin-bottom:8px">${RES_TOPICS.map(t => `<option>${t}</option>`).join("")}</select><input type="text" id="res-note" placeholder="Note (facultatif)"><button class="btn" id="res-add">Ajouter</button></details>
  <p class="muted small">Contenu externe : l'application ne le vérifie pas. Compare avec des sources fiables et demande à une personne qualifiée en cas de doute.</p>`; };
