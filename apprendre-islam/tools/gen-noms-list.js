// Génère audio/NOMS.md : la liste des noms à enregistrer, avec le nom de fichier exact.
const fs = require("fs"), path = require("path"), vm = require("vm"), root = path.join(__dirname, "..");
const ctx = {}; vm.createContext(ctx); vm.runInContext(fs.readFileSync(path.join(root, "js", "names.js"), "utf8") + "\nthis.NAMES = NAMES;", ctx);
const rows = ctx.NAMES.list().sort((a, b) => a.slug.localeCompare(b.slug));
const PRIO = ["muhammad", "salla-allahu-alayhi-wa-sallam", "abu-bakr", "umar", "uthman", "ali", "khadija", "aicha", "fatima", "bilal", "hamza", "khalid", "talha", "zubayr", "sad", "salman", "musab", "jafar", "muadh", "muawiya", "ibrahim", "ismail", "yusuf", "musa", "issa", "nuh", "adam", "dawud", "sulayman", "allah", "ramadan"];
const row = r => `| \`${r.slug}.mp3\` | ${r.ecrit} | ${r.ar} |`, first = rows.filter(r => PRIO.includes(r.slug)), others = rows.filter(r => !PRIO.includes(r.slug));
const head = "| Fichier | Écrit dans les textes | À dire |\n|---|---|---|\n";
const md = `# Noms à enregistrer\n\nEnregistre chaque nom **une seule fois**, seul, clairement, avec la bonne prononciation arabe (1 à 3 secondes, sans bruit de fond). Nomme le fichier exactement comme indiqué, en **.mp3**, et dépose-le dans \`apprendre-islam/audio/noms/\`.\nÀ la publication suivante, le site lit ton enregistrement à la place de la voix synthétique, dans toutes les leçons. Les noms sans fichier gardent la voix de l'appareil.\n\n## À faire en premier (${first.length} noms, les plus fréquents)\n\n${head}${first.map(row).join("\n")}\n\n## Ensuite (${others.length} noms et termes)\n\n${head}${others.map(row).join("\n")}\n`;
fs.writeFileSync(path.join(root, "audio", "NOMS.md"), md); console.log(rows.length + " noms listés");
