/* Prononciation des noms arabes dans la lecture à voix haute.
   - Si l'appareil a une voix arabe : les noms sont lus par cette voix, écrits en lettres arabes (accent authentique).
   - Sinon : respellings pour la voix française (« Mouhammad », « Oumar », « Radidja »…), qui approchent le son sans le reproduire exactement.
   Seul le texte lu est modifié ; le texte affiché ne change pas. */
const NAMES = (() => {
  const AR = [
    ["Abu Bakr as-Siddiq", "أبو بكر الصديق"], ["Abou Bakr as-Siddiq", "أبو بكر الصديق"], ["Umar ibn al-Khattab", "عمر بن الخطاب"], ["Uthman ibn Affan", "عثمان بن عفان"], ["Ali ibn Abi Talib", "علي بن أبي طالب"],
    ["Khalid ibn al-Walid", "خالد بن الوليد"], ["Zayd ibn Thabit", "زيد بن ثابت"], ["Sa'd ibn Abi Waqqas", "سعد بن أبي وقاص"], ["Salman al-Farisi", "سلمان الفارسي"], ["Mus'ab ibn Umayr", "مصعب بن عمير"],
    ["Abd ar-Rahman ibn Awf", "عبد الرحمن بن عوف"], ["Abd ar-Rahman", "عبد الرحمن"], ["Abu Bakr", "أبو بكر"], ["Abou Bakr", "أبو بكر"], ["Abu Talib", "أبو طالب"], ["Abu Jahl", "أبو جهل"], ["Abu Lahab", "أبو لهب"],
    ["Abu Sufyan", "أبو سفيان"], ["Abu Hurayra", "أبو هريرة"], ["Abu Ubayda", "أبو عبيدة"], ["Umm Salama", "أم سلمة"], ["Abdallah", "عبد الله"],
    ["Muhammad", "محمد"], ["Mohammed", "محمد"], ["Mohamed", "محمد"], ["Umar", "عمر"], ["Uthman", "عثمان"], ["Ali", "علي"], ["Fatima", "فاطمة"], ["Khadija", "خديجة"], ["Aïcha", "عائشة"], ["Aicha", "عائشة"],
    ["Hafsa", "حفصة"], ["Zaynab", "زينب"], ["Ruqayya", "رقية"], ["Safiyya", "صفية"], ["Sawda", "سودة"], ["Bilal", "بلال"], ["Hamza", "حمزة"], ["Khalid", "خالد"], ["Talha", "طلحة"], ["Zubayr", "الزبير"],
    ["Sa'd", "سعد"], ["Salman", "سلمان"], ["Mus'ab", "مصعب"], ["Ja'far", "جعفر"], ["Mu'adh", "معاذ"], ["Mu'awiya", "معاوية"], ["Anas", "أنس"], ["Zayd", "زيد"], ["Hasan", "الحسن"], ["Husayn", "الحسين"],
    ["Ibrahim", "إبراهيم"], ["Ismaïl", "إسماعيل"], ["Ishaq", "إسحاق"], ["Yaqub", "يعقوب"], ["Yusuf", "يوسف"], ["Moussa", "موسى"], ["Musa", "موسى"], ["Issa", "عيسى"], ["Nuh", "نوح"], ["Adam", "آدم"], ["Dawud", "داود"],
    ["Sulayman", "سليمان"], ["Yunus", "يونس"], ["Ayyub", "أيوب"], ["Lut", "لوط"], ["Hud", "هود"], ["Salih", "صالح"], ["Shu'ayb", "شعيب"], ["Zakariyya", "زكريا"], ["Yahya", "يحيى"], ["Maryam", "مريم"], ["Jibril", "جبريل"], ["Quraysh", "قريش"],
  ];
  const FR = [["Abu", "Abou"], ["Muhammad", "Mouhammad"], ["Mohammed", "Mouhammad"], ["Umar", "Oumar"], ["Uthman", "Outhmane"], ["Khadija", "Radidja"], ["Khalid", "Ralid"], ["Ja'far", "Djafar"], ["Sa'd", "Saad"], ["Mus'ab", "Moussab"], ["Mu'awiya", "Mouawiya"],
    ["Mu'adh", "Mouadh"], ["Zubayr", "Zoubaïr"], ["Yusuf", "Youssouf"], ["Musa", "Moussa"], ["Jibril", "Djibril"], ["Quraysh", "Qouraïch"], ["Hasan", "Hassane"], ["Husayn", "Houssaïne"], ["Hafsa", "Hafça"], ["Hud", "Houd"], ["Ishaq", "Ishak"], ["Yaqub", "Yaqoub"],
    ["Sulayman", "Souleymane"], ["Dawud", "Daoud"], ["Nuh", "Nouh"], ["Ayyub", "Ayyoub"], ["Yunus", "Younous"], ["Shu'ayb", "Choaïb"], ["Zakariyya", "Zakariya"]];
  const SAL = "ﷺ", SAL_AR = "صلى الله عليه وسلم", SAL_FR = "salla Llahou alayhi wa sallam";
  const esc = x => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), sorted = AR.slice().sort((a, b) => b[0].length - a[0].length), map = new Map(sorted.map(([k, v]) => [k.toLowerCase(), v]));
  const re = new RegExp("(" + SAL + "|(?<![\\p{L}'’\\-])(?:" + sorted.map(([k]) => esc(k)).join("|") + ")(?![\\p{L}'’\\-]))", "giu");
  const reFr = new RegExp("(?<![\\p{L}'’\\-])(" + FR.map(([k]) => esc(k)).sort((a, b) => b.length - a.length).join("|") + ")(?![\\p{L}'’\\-])", "giu"), mapFr = new Map(FR.map(([k, v]) => [k.toLowerCase(), v]));
  /* [{t:"texte"}, {t:"محمد", ar:true}, …] */
  function split(text) { const out = []; let last = 0; text.replace(re, (m, _g, i) => { if (i > last) out.push({ t: text.slice(last, i) }); out.push({ t: m === SAL ? SAL_AR : map.get(m.toLowerCase()), ar: true }); last = i + m.length; return m; }); if (last < text.length) out.push({ t: text.slice(last) }); return out.filter(s => s.t.trim()); }
  const respell = text => text.split(SAL).join(" " + SAL_FR + " ").replace(reFr, m => mapFr.get(m.toLowerCase()) || m);
  return { split, respell };
})();
