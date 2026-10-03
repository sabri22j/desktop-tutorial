/* Écrit kidtexts.json : le texte de chaque clip audio de l'espace enfants (clé = nom du fichier mp3).
   Usage : node dump_texts.js  (depuis tools/kids-audio) */
const fs = require("fs"), vm = require("vm"), path = require("path"), root = path.join(__dirname, "..", "..", "js");
const files = ["kdata0"].concat(Array.from({ length: 12 }, (_, i) => "kdata" + (i + 1)));
const c = {}; vm.createContext(c); vm.runInContext(files.map(f => fs.readFileSync(path.join(root, f + ".js"), "utf8")).join("\n") + ";globalThis.KW=KW;globalThis.K=K", c);
const out = {};
c.KW.forEach(w => w.adv.forEach(a => { a.cards.forEach((x, i) => out[a.id + "-c" + i] = x.t + ". " + x.x); a.q.forEach((q, i) => { const p = c.K.prep(a.id, i, q); out[a.id + "-q" + i] = c.K.say(p); if (q.t === "tf" && q.why) out[a.id + "-w" + i] = q.why; }); }));
Object.assign(out, c.K.lines);
fs.writeFileSync("kidtexts.json", JSON.stringify(out, null, 1)); console.log(Object.keys(out).length + " clips");
