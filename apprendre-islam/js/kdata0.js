/* Parcours enfants : 12 mondes d'aventures (leçons illustrées + questions variées).
   Contenu volontairement simple et consensuel ; à faire relire par une personne qualifiée.
   Formats : K.mc(question, bonneRéponse, ...mauvaises) · K.tf(affirmation, vrai?, explication) · K.order(consigne, ...étapes dans l'ordre) · K.match(consigne, [gauche, droite]...). */
const KW = [];
const K = {
  c: (e, t, x, ar) => ({ e, t, x, ar }),
  mc: (q, a, ...b) => ({ t: "mc", q, a, b }),
  tf: (q, v, why) => ({ t: "tf", q, v, why }),
  order: (q, ...items) => ({ t: "order", q, items }),
  match: (q, ...pairs) => ({ t: "match", q, pairs }),
  adv: (id, n, e, cards, q) => ({ id, n, e, cards, q }),
  world: (w) => KW.push(w),
};

/* Préparation déterministe (mêmes choix mélangés à l'écran et dans les enregistrements audio). */
K.hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
K.rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
K.shuffle = (arr, seed) => { const a = arr.slice(), r = K.rng(seed); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
K.prep = (advId, i, q) => {
  const seed = K.hash(advId + ":" + i);
  if (q.t === "mc") { const opts = K.shuffle([q.a, ...q.b], seed); return Object.assign({}, q, { opts, ai: opts.indexOf(q.a) }); }
  if (q.t === "order") { let sh = K.shuffle(q.items, seed); if (sh.every((x, k) => x === q.items[k])) sh = sh.slice().reverse(); return Object.assign({}, q, { shuf: sh }); }
  if (q.t === "match") { const rights = q.pairs.map(p => p[1]); let r = K.shuffle(rights, seed); if (r.every((x, k) => x === rights[k])) r = r.slice(1).concat(r[0]); return Object.assign({}, q, { rights: r }); }
  return q;
};
/* Texte lu à voix haute pour une question. */
K.say = q => q.t === "mc" ? q.q + " ... " + q.opts.join(" ... ") + " ..." : q.t === "tf" ? q.q + " Vrai ou faux ?" : q.q;
K.find = id => { for (const w of KW) for (const a of w.adv) if (a.id === id) return { w, a }; return null; };
K.count = () => KW.reduce((n, w) => n + w.adv.length, 0);

/* Répliques de Sirâj (clé audio → texte). */
K.lines = {
  "sj-t0": "Hihi, ça chatouille !", "sj-t1": "Salam ! Tu m'as trouvé !", "sj-t2": "Youhou, on joue ?", "sj-t3": "Oh là là, tu es rapide !",
  "sj-t4": "Allez, un petit saut !", "sj-t5": "Tu as de beaux yeux, toi !", "sj-t6": "Bismillah, on y va !", "sj-t7": "Je brille pour toi !",
  "sj-t8": "Chuut… je réfléchis.", "sj-t9": "Tu apprends vite, machaa Allah !", "sj-t10": "Et hop, une pirouette !", "sj-t11": "Waouh, quelle aventure !",
  "sj-ok1": "Bravo !", "sj-ok2": "Super !", "sj-ok3": "Youhou, c'est ça !", "sj-ok4": "Machaa Allah, tu es fort !",
  "sj-ko1": "Oups ! Essaie encore.", "sj-ko2": "Presque ! Tu y es presque.", "sj-ko3": "Pas grave, réfléchis encore un peu.",
  "sj-end3": "Trois étoiles ! Tu es incroyable !", "sj-end2": "Deux étoiles ! Très bien joué !", "sj-end1": "Une étoile ! Continue, tu vas y arriver !",
  "sj-new": "Waouh ! Une nouvelle tenue pour moi ! Merci !",
  "sj-hello1": "Salam ! Prêt pour une nouvelle aventure ?", "sj-hello2": "Salam ! Aujourd'hui, on apprend plein de choses !", "sj-hello3": "Bonsoir ! Une petite aventure avant de dormir ?",
  "sj-daily": "Voici ton défi du jour ! Cinq questions pour toi.", "sj-boss": "Le grand défi du monde ! Tu vas y arriver !",
  "sj-next": "Suivant !", "sj-listen": "Écoute bien !",
};
