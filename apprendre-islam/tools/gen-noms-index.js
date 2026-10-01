// Génère audio/noms/index.json : la liste des enregistrements de noms présents (mp3). Lancé à chaque publication.
const fs = require("fs"), path = require("path"), dir = path.join(__dirname, "..", "audio", "noms");
fs.mkdirSync(dir, { recursive: true });
const list = fs.readdirSync(dir).filter(f => /\.mp3$/i.test(f)).map(f => f.replace(/\.mp3$/i, "")).sort();
fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify(list));
console.log(list.length + " enregistrement(s) de noms" + (list.length ? " : " + list.join(", ") : ""));
