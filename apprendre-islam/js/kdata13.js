/* Sourates à apprendre (texte arabe et phonétique repris du parcours principal ; sens simplifié pour les enfants). */
K.surahs = (() => {
  const SPEC = [
    { id: "fatiha", n: "Al-Fatiha", e: "📖", key: "بِسْمِ اللَّهِ الرَّحْمَٰنِ", m: ["Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.", "Louange à Allah, le Seigneur de tout l'univers.", "Le Tout Miséricordieux, le Très Miséricordieux.", "Le Maître du Jour du jugement.", "C'est Toi seul que nous adorons, et c'est Toi seul dont nous demandons l'aide.", "Guide-nous sur le droit chemin.", "Le chemin de ceux que Tu as comblés de bienfaits, pas de ceux qui ont encouru Ta colère, ni des égarés."] },
    { id: "ikhlas", n: "Al-Ikhlas", e: "☝️", key: "قُلْ هُوَ اللَّهُ أَحَدٌ", m: ["Dis : Il est Allah, Unique.", "Allah, le Seul à qui l'on s'adresse pour tout.", "Il n'a pas d'enfant et n'a pas été engendré.", "Et personne n'est égal à Lui."] },
    { id: "falaq", n: "Al-Falaq", e: "🌅", key: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", m: ["Dis : Je me protège auprès du Seigneur de l'aube.", "Contre le mal de ce qu'Il a créé.", "Contre le mal de la nuit quand elle devient sombre.", "Contre le mal de ceux qui soufflent sur les nœuds.", "Et contre le mal de l'envieux quand il envie."] },
    { id: "nas", n: "An-Nas", e: "👥", key: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", m: ["Dis : Je me protège auprès du Seigneur des hommes.", "Le Roi des hommes.", "Le Dieu des hommes.", "Contre le mal du tentateur qui se cache.", "Qui souffle le mal dans le cœur des hommes.", "Qu'il soit parmi les djinns ou parmi les hommes."] },
    { id: "kawthar", n: "Al-Kawthar", e: "🌊", key: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", m: ["Nous t'avons donné Al-Kawthar, un grand bien.", "Alors prie pour ton Seigneur et offre un sacrifice.", "C'est celui qui te déteste qui sera sans postérité."] },
    { id: "asr", n: "Al-'Asr", e: "⏳", key: "وَالْعَصْرِ", m: ["Par le Temps !", "L'être humain est vraiment en perte.", "Sauf ceux qui croient, font le bien, se conseillent la vérité et se conseillent la patience."] },
  ];
  const out = [];
  try {
    const all = []; LEVELS.forEach(L => L.chapters.forEach(c => c.lessons.forEach(l => { if (l.ar && l.ph) all.push(l); })));
    SPEC.forEach(sp => {
      const l = all.find(x => x.ar.startsWith(sp.key)); if (!l) return;
      const ar = l.ar.split("۝").map(x => x.trim()).filter(Boolean), ph = l.ph.split(/\.\s*/).map(x => x.trim()).filter(Boolean);
      if (ar.length !== ph.length || ar.length !== sp.m.length) return;
      out.push({ id: sp.id, n: sp.n, e: sp.e, v: ar.map((a, i) => ({ ar: a, ph: ph[i] + ".", fr: sp.m[i] })) });
    });
  } catch {}
  return out;
})();
