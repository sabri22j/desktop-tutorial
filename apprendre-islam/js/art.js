/* Identité visuelle : icônes, motif géométrique et illustrations (paysages, objets, motifs : aucune personne représentée). */
const ICONS = {
  home: '<path d="M3.5 11 12 3.5 20.5 11"/><path d="M5.5 9.8V20h4.5v-5.5h4V20h4.5V9.8"/>',
  path: '<circle cx="6" cy="18.5" r="2.3"/><circle cx="18" cy="5.5" r="2.3"/><path d="M8.3 18.5H14a3.5 3.5 0 0 0 0-7h-4a3.5 3.5 0 0 1 0-7h5.7"/>',
  explore: '<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2 5.6-5.6 2 2-5.6z"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  network: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6M12 2v3"/>',
  share: '<path d="M12 15V3M8 7l4-4 4 4M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  more: '<circle cx="5.5" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="18.5" cy="12" r="1.8" fill="currentColor"/>',
  chat: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"/><path d="M8.5 8.5h7M8.5 11.5h4"/>',
  flame: '<path d="M12 2.5c.6 3.2 4.5 5.2 4.5 10a4.5 4.5 0 0 1-9 0c0-1.7.7-2.8 1.6-3.9.3 1.3 1 2 1.9 2.3C10.3 8.3 10.5 5.3 12 2.5z" fill="currentColor"/>',
  moon: '<path d="M20 14.3A8.5 8.5 0 1 1 9.7 4a7 7 0 0 0 10.3 10.3z" fill="currentColor"/>',
  book: '<path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5zM12 6.5v13"/>',
  map: '<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6zM9 4v14M15 6v14"/>',
  cards: '<rect x="3.5" y="7" width="13" height="13" rx="2.5"/><path d="M7.5 4h11A2.5 2.5 0 0 1 21 6.5V16"/>',
  speaker: '<path d="M4 9.5v5h3.5L12 19V5L7.5 9.5z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
  mute: '<path d="M4 9.5v5h3.5L12 19V5L7.5 9.5z" fill="currentColor"/><path d="m16 9.5 5 5M21 9.5l-5 5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5" stroke-width="3"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" fill="currentColor"/>',
  play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  pause: '<path d="M8 5.5v13M16 5.5v13" stroke-width="3.2"/>',
  close: '<path d="M6 6l12 12M18 6 6 18" stroke-width="2.6"/>',
  bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  trophy: '<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4.5v1.5A3.5 3.5 0 0 0 8 11M16 6h3.5v1.5A3.5 3.5 0 0 1 16 11M12 14v4M8.5 20.5h7"/>',
  video: '<rect x="3" y="5.5" width="13" height="13" rx="3"/><path d="m16 10 5-3v10l-5-3z"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor"/>',
  quote: '<path d="M7 7h4v5H8.5c0 2 .8 3 2.5 3.5M14 7h4v5h-2.5c0 2 .8 3 2.5 3.5"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.6 1 1.3 1 2.1h5c0-.8.3-1.5 1-2.1A6 6 0 0 0 12 3z"/>',
  scroll: '<path d="M7 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8.5 9h7M8.5 12.5h7M8.5 16h4"/>',
  dots: '<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>',
};
const ico = (name, size = 22, cls = "") => `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

/* Motif géométrique (étoile à huit branches) utilisé en filigrane */
const PATTERN_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="none" stroke="#fff" stroke-width="1.2" opacity=".9"><rect x="14" y="14" width="32" height="32"/><rect x="14" y="14" width="32" height="32" transform="rotate(45 30 30)"/><circle cx="30" cy="30" r="5"/></g></svg>';
function applyPattern() { try { document.documentElement.style.setProperty("--pat", `url("data:image/svg+xml;utf8,${encodeURIComponent(PATTERN_SVG)}")`); } catch {} }

/* Illustrations : générées par code, sans personnes représentées */
const rnd = seed => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const SCENES = {
  night: { sky: ["#0a2a23", "#1a6b57"], dune: ["#0e4a3b", "#157056", "#e8b44a"], moon: true, stars: 34, palm: true },
  dunes: { sky: ["#134d5c", "#f3b64b"], dune: ["#c58b2c", "#e0a93e", "#f5cf78"], moon: false, stars: 6, palm: true, sun: true },
  mosque: { sky: ["#0e3b46", "#f0a84a"], dune: ["#0a2f2a", "#0d3b34", "#124a40"], moon: true, stars: 12, skyline: true },
  book: { sky: ["#0b2f29", "#157a5f"], dune: ["#0a2f2a", "#0f4a3c", "#14614d"], moon: false, stars: 18, book: true },
  sea: { sky: ["#0d3a4f", "#58b7c6"], dune: ["#0e5f78", "#138ba0", "#3fb5c2"], moon: false, stars: 8, waves: true },
  oasis: { sky: ["#0f4a52", "#e7b755"], dune: ["#0d4a3a", "#14735a", "#d6a64a"], moon: false, stars: 4, palm: true, palms: 3, sun: true },
  mountain: { sky: ["#10304a", "#f2b658"], dune: ["#0b2a2c", "#0f4040", "#1a6a5a"], moon: false, stars: 10, peaks: true, sun: true },
};
function sceneBase(kind = "night", seed = 7) {
  const S = SCENES[kind] || SCENES.night, r = rnd(seed * 97 + 13), id = "sc" + kind + seed;
  const stars = Array.from({ length: S.stars }, () => `<circle cx="${(r() * 400).toFixed(0)}" cy="${(r() * 90).toFixed(0)}" r="${(r() * 1.3 + .4).toFixed(1)}" fill="#fff" opacity="${(r() * .6 + .3).toFixed(2)}"/>`).join("");
  const moon = S.moon ? `<g transform="translate(318 34)"><circle r="17" fill="#ffe9a8"/><circle cx="8" cy="-4" r="15" fill="url(#${id}s)"/></g>` : "";
  const sun = S.sun ? `<circle cx="${80 + r() * 60}" cy="104" r="26" fill="#ffe7a1" opacity=".9"/><circle cx="${80}" cy="104" r="44" fill="#ffe7a1" opacity=".18"/>` : "";
  const peaks = S.peaks ? `<path d="M0 130 70 62l38 40 52-58 70 86 50-44 60 50 60-44v60H0z" fill="${S.dune[0]}"/><path d="M210 130l40-44 30 28 30-26 90 58v14H210z" fill="${S.dune[1]}" opacity=".9"/><path d="M40 160l58-52 40 32 50-40 70 60z" fill="${S.dune[2]}" opacity=".5"/><path d="M168 138q10-26 22 0z" fill="#06211e"/>` : "";
  const skyline = S.skyline ? `<g fill="#06221e" opacity=".92"><path d="M20 160v-44h26v44zM26 116q7-22 14 0z"/><rect x="60" y="66" width="8" height="94"/><path d="M58 66h12l-6-14z"/><path d="M90 160v-56q40-58 80 0v56z"/><path d="M128 52v-14M124 38h8"/><rect x="186" y="80" width="8" height="80"/><path d="M184 80h12l-6-14z"/><path d="M214 160v-36h40v36zM222 124q12-22 24 0z"/><rect x="270" y="92" width="7" height="68"/><path d="M268 92h11l-5.5-12z"/><path d="M296 160v-30h38v30zM302 130q13-20 26 0z"/><rect x="350" y="76" width="8" height="84"/><path d="M348 76h12l-6-14z"/></g>` : "";
  const book = S.book ? `<g transform="translate(200 98)"><g opacity=".35" stroke="#ffe39a" stroke-width="1.4">${Array.from({ length: 11 }, (_, i) => { const a = (i - 5) * 13; return `<path d="M0 -8 L${(Math.sin(a * Math.PI / 180) * 120).toFixed(0)} ${(-Math.cos(a * Math.PI / 180) * 120).toFixed(0)}"/>`; }).join("")}</g><path d="M0 -6C-18 -20 -52 -22 -78 -14V46C-52 38 -18 40 0 54z" fill="#f7f0d9"/><path d="M0 -6C18 -20 52 -22 78 -14V46C52 38 18 40 0 54z" fill="#efe4c0"/><path d="M0 -6V54" stroke="#b8943c" stroke-width="2"/><g fill="none" stroke="#b8943c" stroke-width="1.4"><g transform="translate(-40 14)"><rect x="-10" y="-10" width="20" height="20"/><rect x="-10" y="-10" width="20" height="20" transform="rotate(45)"/></g><g transform="translate(40 14)"><rect x="-10" y="-10" width="20" height="20"/><rect x="-10" y="-10" width="20" height="20" transform="rotate(45)"/></g></g></g>` : "";
  const waves = S.waves ? [0, 1, 2].map(i => `<path d="M0 ${118 + i * 14} q25 -14 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 V160 H0z" fill="${S.dune[i]}" opacity="${.75 + i * .1}"/>`).join("") + `<g transform="translate(250 96)"><path d="M-34 18h68l-10 14h-48z" fill="#3a2a16"/><path d="M0 18V-30l26 40H0z" fill="#f5ecd2"/><path d="M-4 18V-22l-20 32h20z" fill="#e9d9a7"/></g>` : "";
  const dunes = !S.waves && !S.peaks ? `<path d="M0 118q70-40 150-6t140-10q60-20 110 10v48H0z" fill="${S.dune[0]}"/><path d="M0 138q90-44 190-8t210-6v36H0z" fill="${S.dune[1]}"/><path d="M0 152q120-30 220-4t180-4v16H0z" fill="${S.dune[2]}"/>` : "";
  const palm = x => `<g transform="translate(${x} 104)" fill="#06221e"><path d="M-1.5 50C-3 30 0 14 2 0h3c-1 16-2 34 0 50z"/><path d="M3 0q-22-4-34 10 18-6 34-2zM3 0q-16-14-32-8 16-2 30 8zM3 0q8-20 28-20-14 4-22 20zM3 0q20-10 32 4-18-2-30-2zM3 0q-2-20 6-30-2 14-2 30z"/></g>`;
  const palms = S.palm ? palm(S.palms ? 40 : 52) + (S.palms ? palm(74) + palm(350) : palm(336)) : "";
  return `<svg class="scene" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${S.sky[0]}"/><stop offset="1" stop-color="${S.sky[1]}"/></linearGradient><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${S.sky[0]}"/><stop offset="1" stop-color="${S.sky[0]}"/></linearGradient></defs><rect width="400" height="160" fill="url(#${id})"/>${stars}${sun}${moon}${peaks}${skyline}${book}${waves}${dunes}${palms}</svg>`;
}
const SUBJECT_SCENE = { croyance: "night", histoire: "dunes", coran: "book", pratique: "mosque", prophetes: "sea", compagnons: "oasis" };
const STAGE_SCENE = ["night", "mosque", "book", "dunes", "oasis", "sea", "oasis", "mosque", "book", "night", "mountain"];
const LEVEL_ICON = { croyance: "sparkle", histoire: "scroll", coran: "book", pratique: "star", prophetes: "sparkle", compagnons: "user" };

/* ---------- Thèmes orientaux : on décale la teinte des verts (interface et illustrations) ; l'or reste l'or ---------- */
const SKINS = [
  { id: "emeraude", n: "Émeraude", d: 0 },
  { id: "nuit", n: "Nuit d'Orient", d: 62 },
  { id: "turquoise", n: "Turquoise", d: 30 },
  { id: "pourpre", n: "Pourpre royal", d: 128 },
  { id: "marrakech", n: "Marrakech", d: -128 },
];
const SKIN_LIGHT = { "--bg": "#edf3ef", "--surface2": "#f5f9f6", "--line": "#dbe6df", "--green": "#0f8a5f", "--green-2": "#3fd39a", "--green-d": "#0a6546", "--green-l": "#d7f2e5", "--night": "#0a2a23", "--night2": "#14483b", "--ok-l": "#d9f4e4" };
const SKIN_DARK = { "--bg": "#0a1511", "--surface": "#13231d", "--surface2": "#182c25", "--line": "#243a32", "--green": "#21b27c", "--green-2": "#3fd39a", "--green-d": "#0f7a55", "--green-l": "#15382d", "--ok-l": "#153a29" };
const skinDeg = () => { try { const k = SKINS.find(x => x.id === E.S.settings.skin); return k ? k.d : 0; } catch { return 0; } };
function hexShift(hex, deg) {
  const n = parseInt(hex.slice(1), 16), r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, dd = mx - mn;
  let h = 0, sat = 0; if (dd) { sat = l > .5 ? dd / (2 - mx - mn) : dd / (mx + mn); h = mx === r ? ((g - b) / dd + (g < b ? 6 : 0)) : mx === g ? (b - r) / dd + 2 : (r - g) / dd + 4; h *= 60; }
  h = (h + deg + 360) % 360; const a = sat * Math.min(l, 1 - l), f = k => { const kk = (k + h / 30) % 12; return Math.round(255 * (l - a * Math.max(-1, Math.min(kk - 3, 9 - kk, 1)))); };
  return "#" + [f(0), f(8), f(4)].map(v => v.toString(16).padStart(2, "0")).join("");
}
function skinSvg(svg) { const d = skinDeg(); if (!d) return svg; return svg.replace(/#[0-9a-fA-F]{6}\b/g, c => { const n = parseInt(c.slice(1), 16), r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b); if (mx === mn) return c; let h = mx === r ? ((g - b) / (mx - mn) + (g < b ? 6 : 0)) : mx === g ? (b - r) / (mx - mn) + 2 : (r - g) / (mx - mn) + 4; h *= 60; return h >= 130 && h <= 200 ? hexShift(c, d) : c; }); }
function scene(kind, seed) { return skinSvg(sceneBase(kind, seed)); }
function applySkin() {
  const root = document.documentElement, d = skinDeg(); let md = "auto"; try { md = E.S.settings.mode || "auto"; } catch {}
  if (md === "auto") delete root.dataset.theme; else root.dataset.theme = md; // clair ou sombre forcé, sinon réglage du téléphone
  const t = root.dataset.theme, dark = t === "dark" || (t !== "light" && matchMedia("(prefers-color-scheme:dark)").matches);
  [...Object.keys(SKIN_LIGHT), ...Object.keys(SKIN_DARK)].forEach(k => root.style.removeProperty(k));
  if (d) Object.entries(dark ? SKIN_DARK : SKIN_LIGHT).forEach(([k, v]) => root.style.setProperty(k, hexShift(v, d)));
  const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = (dark ? "#0a1511" : (d ? hexShift("#0f8a5f", d) : "#0f8a5f"));
}
try { matchMedia("(prefers-color-scheme:dark)").addEventListener("change", applySkin); } catch {}
