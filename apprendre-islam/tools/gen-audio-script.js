/* Génère audio/SCRIPT.md : le texte de chaque leçon à enregistrer, avec le nom de fichier attendu par l'application.
   Usage : node tools/gen-audio-script.js */
const fs = require("fs"), vm = require("vm"), path = require("path");
const dir = path.join(__dirname, "..", "js");
const files = fs.readdirSync(dir).filter(f => /^content\d*\.js$/.test(f)).sort((a, b) => (parseInt(a.replace(/\D/g, "")) || 0) - (parseInt(b.replace(/\D/g, "")) || 0));
const code = files.map(f => fs.readFileSync(path.join(dir, f), "utf8")).join("\n") + "\n;globalThis.__o = { LEVELS, STAGES };";
const ctx = {}; vm.createContext(ctx); vm.runInContext(code, ctx);
const { LEVELS } = ctx.__o; let n = 0, out = "# Script d'enregistrement des leçons\n\nUn fichier par leçon : `audio/<chapitre>-<numéro de leçon>.mp3` (ou `.m4a`). Lire le texte calmement, en français naturel, sans hâte. Les versets en arabe peuvent être récités par un récitant qualifié (fichier séparé, à brancher plus tard).\n\n";
LEVELS.forEach(L => { out += `\n## Niveau ${L.n} — ${L.unit}\n`; L.chapters.forEach(c => { out += `\n### ${c.title}\n`; c.lessons.forEach((l, i) => { n++; out += `\n**Fichier : \`${c.id}-${i}.mp3\`** — ${l.t}\n\n${l.body}${l.fr ? `\n\n(Traduction du sens) ${l.fr}` : ""}\n`; }); }); });
fs.writeFileSync(path.join(__dirname, "..", "audio", "SCRIPT.md"), out); console.log(n + " leçons écrites dans audio/SCRIPT.md");
