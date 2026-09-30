/* Assistant hors ligne : réponses rédigées à l'avance, avec sources. Ne répond JAMAIS sans source locale.
   Un vrai assistant IA nécessite un serveur (voir README). */
const KB = [
  { k: ["hegire", "hijra", "emigration", "emigrer", "migration"], title: "Pourquoi l'Hégire a-t-elle eu lieu ?",
    a: "À La Mecque, les premiers musulmans subissaient des persécutions. Des habitants de Yathrib (future Médine) se sont engagés à protéger le Prophète ﷺ lors des pactes d'Aqaba. Le Prophète ﷺ a donc émigré à Médine en 622, accompagné d'Abu Bakr, et la première communauté musulmane organisée s'y est établie.",
    src: [["Texte", "Coran 9:40 (le Prophète et son compagnon dans la grotte)"], ["Texte", "Coran 8:30 (le complot des Qurayshites)"], ["Histoire", "Sîra d'Ibn Hichâm"]],
    nuance: "Le lien entre certains versets et l'Hégire relève de l'interprétation des exégètes. Les détails chronologiques varient selon les récits." },
  { k: ["combien", "priere", "prieres", "salat", "rakat"], title: "Combien de prières par jour ?",
    a: "Cinq prières sont obligatoires chaque jour : Fajr (2 rak'at), Dhuhr (4), Asr (4), Maghrib (3), Isha (4).",
    src: [["Texte", "Coran 4:103 (prière prescrite à des heures déterminées)"], ["Texte", "Coran 20:14"], ["Hadith", "Hadith des cinq piliers (Bukhari 8, Muslim 16)"]] },
  { k: ["zakat", "aumone", "pourcentage", "nissab"], title: "Quel est le taux de la zakat ?",
    a: "Le taux usuel sur l'épargne monétaire est de 2,5 % pour la richesse qui dépasse le nissab et a été détenue un an lunaire. Le Coran cite huit catégories de bénéficiaires.",
    src: [["Texte", "Coran 9:60"], ["Hadith", "Hadith des cinq piliers (Bukhari 8, Muslim 16)"]],
    nuance: "La valeur du nissab et certains détails de calcul varient selon les écoles juridiques et les époques : demande à une personne qualifiée." },
  { k: ["ramadan", "jeune", "jeuner", "siyam"], title: "Pourquoi jeûne-t-on en Ramadan ?",
    a: "Le jeûne du Ramadan est prescrit par Allah aux croyants « afin que vous atteigniez la piété ». On s'abstient de manger, de boire et des relations conjugales de l'aube au coucher du soleil.",
    src: [["Texte", "Coran 2:183-185"]] },
  { k: ["coran", "sourate", "revelation", "revele"], title: "Qu'est-ce que le Coran ?",
    a: "Les musulmans croient que le Coran est la parole d'Allah révélée au Prophète ﷺ par l'ange Jibril sur environ 23 ans. Il compte 114 sourates.",
    src: [["Texte", "Coran 2:185"], ["Texte", "Coran 15:9 (préservation)"]] },
  { k: ["tawhid", "unicite", "shirk", "associer"], title: "Qu'est-ce que le tawhid ?",
    a: "Le tawhid est la croyance en l'unicité d'Allah. Son contraire est le shirk : associer quelqu'un à Allah.",
    src: [["Texte", "Coran 112"], ["Texte", "Coran 4:48"]] },
  { k: ["piliers", "pilier", "cinq"], title: "Quels sont les piliers de l'Islam ?",
    a: "Il y en a cinq : la chahada, la salat, la zakat, le jeûne de Ramadan et le pèlerinage à La Mecque pour qui en a la capacité.",
    src: [["Hadith", "Bukhari 8 ; Muslim 16"]] },
  { k: ["hira", "iqra", "premiere", "revelation", "jibril"], title: "Comment a eu lieu la première révélation ?",
    a: "Dans la grotte de Hira, l'ange Jibril est apparu au Prophète ﷺ et lui a dit « Iqra » (lis / récite). Les premiers versets sont ceux de la sourate Al-'Alaq. Khadija l'a rassuré puis l'a emmené chez Waraqa ibn Nawfal.",
    src: [["Texte", "Coran 96:1-5"], ["Hadith", "Bukhari 3"], ["Histoire", "Sîra d'Ibn Hichâm"]] },
  { k: ["ablution", "ablutions", "woudou", "wudu", "purification"], title: "Comment fait-on les ablutions ?",
    a: "Intention et « Bismillah », mains, bouche, nez, visage, bras jusqu'aux coudes, essuyage de la tête et des oreilles, pieds jusqu'aux chevilles.",
    src: [["Texte", "Coran 5:6"]], nuance: "Les détails (ordre, nombre de lavages, ce qui annule les ablutions) varient légèrement selon les écoles." },
  { k: ["amin", "jeunesse", "khadija", "mariage"], title: "Qui était al-Amin ?",
    a: "Al-Amin (« le digne de confiance ») est le surnom donné à Muhammad ﷺ dans sa jeunesse à La Mecque. Il a épousé Khadija vers l'âge de 25 ans.",
    src: [["Histoire", "Sîra d'Ibn Hichâm"]] },
  { k: ["allah", "dieu"], title: "Qui est Allah ?",
    a: "Allah est le nom de Dieu en arabe : l'Unique, le Créateur, sans associé, qui n'a pas engendré et n'a pas été engendré.",
    src: [["Texte", "Coran 112"], ["Texte", "Coran 1:1-3"]] },
];
const normAI = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ");
function askAI(query) {
  const words = normAI(query).split(/\s+/).filter(w => w.length > 2);
  let best = null, bs = 0;
  KB.forEach(e => { const s = e.k.filter(k => words.some(w => w.startsWith(k) || k.startsWith(w))).length; if (s > bs) { bs = s; best = e; } });
  return bs ? best : null;
}
