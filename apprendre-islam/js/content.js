/* Contenu pédagogique. Niveaux 0..10 rédigés ; 11..100 = structure prête, contenu à venir. */
const Q = {
  mc: (q, o, a, e) => ({ t: "mc", q, o, a, e }),
  tf: (q, a, e) => ({ t: "tf", q, a, e }),
  order: (q, items, e) => ({ t: "order", q, items, e }),
  match: (q, pairs, e) => ({ t: "match", q, pairs, e }),
  text: (q, ok, e) => ({ t: "text", q, ok, e }),
};
const L = (t, body, check, ar, ph, ref, fr) => ({ t, body, check, ar, ph, ref, fr });
const ch = (id, subject, title, sources, lessons, quiz, fun, video) => ({ id, subject, title, sources, lessons, quiz, fun, video });

const SUBJECTS = [
  { id: "croyance", name: "Croyance", icon: "☪️" },
  { id: "histoire", name: "Histoire de l'Islam", icon: "🕌" },
  { id: "coran", name: "Coran", icon: "📖" },
  { id: "pratique", name: "Pratique", icon: "🤲" },
  { id: "prophetes", name: "Prophètes", icon: "👤" },
  { id: "compagnons", name: "Compagnons", icon: "👥" },
];

const STAGES = [
  "Découverte", "Fondamentaux terminés", "Bases de la Sîra", "Période mecquoise", "Hégire et Médine",
  "Parcours principal de la Sîra", "Prophètes", "Approfondissement", "Compagnons", "Coran et pratique avancés", "Grand parcours terminé",
];
const LEVEL_COUNT = 101;

const LEVELS = [
  { n: 0, unit: "Découvrir l'Islam", chapters: [
    ch("c0-islam", "croyance", "Qu'est-ce que l'Islam ?", ["Hadith de Jibril (Bukhari 50, Muslim 8)"], [
      L("Le sens du mot", "Le mot « islam » signifie la soumission, le fait de se remettre à Allah. Un musulman est celui qui se soumet à Allah en croyant en Lui seul et en suivant Ses enseignements.",
        Q.mc("Que signifie le mot « islam » ?", ["Soumission à Allah", "Voyage", "Livre", "Guerre"], 0, "Islam = se soumettre à Allah.")),
      L("Un message pour tous les prophètes", "Selon l'enseignement musulman, tous les prophètes, d'Adam à Muhammad ﷺ, ont appelé à adorer Allah seul. Le Coran est la dernière révélation.",
        Q.mc("Comment appelle-t-on celui qui pratique l'islam ?", ["Un musulman", "Un prophète", "Un ange", "Un imam uniquement"], 0, "Musulman = celui qui se soumet à Allah.")),
    ], [
      Q.mc("Que signifie « islam » ?", ["Soumission à Allah", "Voyage", "Livre", "Victoire"], 0, "Islam = soumission à Allah."),
      Q.tf("Les musulmans croient que tous les prophètes ont appelé à adorer Allah seul.", true, "C'est le message commun des prophètes."),
      Q.mc("Quel est le livre sacré de l'islam ?", ["Le Coran", "La Torah", "L'Évangile", "Le Zabour"], 0, "Le Coran est la parole d'Allah révélée à Muhammad ﷺ."),
      Q.match("Associe chaque terme à sa définition.", [["Islam", "Soumission à Allah"], ["Musulman", "Celui qui se soumet à Allah"], ["Coran", "Livre révélé à Muhammad ﷺ"]], ""),
      Q.text("Comment appelle-t-on en arabe celui qui pratique l'islam ? (un mot)", ["musulman", "muslim"], "« Muslim » (musulman)."),
    ]),
    ch("c0-allah", "croyance", "Qui est Allah ?", ["Coran 112 (Al-Ikhlas)", "Coran 1:1-3 (Al-Fatiha)"], [
      L("Un Dieu unique", "Allah est le nom de Dieu en arabe : l'Unique, le Créateur de tout ce qui existe. Il n'a pas d'associé, n'a pas été engendré et n'engendre pas (sourate Al-Ikhlas).",
        Q.tf("Allah a un fils.", false, "Sourate 112 : « Il n'a pas engendré et n'a pas été engendré »."),
        "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        "Qul huwa Llâhu ahad. Allâhu s-samad. Lam yalid wa lam yûlad. Wa lam yakun lahu kufuwan ahad.", "Coran 112:1-4 (sourate Al-Ikhlas)",
        "Dis : Il est Allah, Unique. Allah, le Seul à être imploré pour ce que nous désirons. Il n'a jamais engendré, n'a pas été engendré non plus. Et nul n'est égal à Lui."),
      L("Ses noms", "Allah est décrit par de beaux noms : Ar-Rahman (le Tout Miséricordieux), Ar-Rahim (le Très Miséricordieux), Al-Khaliq (le Créateur), Ar-Razzaq (Celui qui pourvoit).",
        Q.mc("Que signifie Ar-Rahman ?", ["Le Tout Miséricordieux", "Le Créateur", "Le Puissant", "Le Juge"], 0, "Ar-Rahman : le Tout Miséricordieux.")),
    ], [
      Q.mc("Allah est…", ["Unique, sans associé", "Un parmi plusieurs dieux", "Un prophète", "Un ange"], 0, "L'unicité d'Allah est le fondement de l'islam."),
      Q.tf("Allah a engendré un fils.", false, "Sourate Al-Ikhlas."),
      Q.mc("Que signifie Al-Khaliq ?", ["Le Créateur", "Le Miséricordieux", "Le Roi", "Le Pardonneur"], 0, ""),
      Q.match("Associe le nom d'Allah à son sens.", [["Ar-Rahman", "Le Tout Miséricordieux"], ["Al-Khaliq", "Le Créateur"], ["Ar-Razzaq", "Celui qui pourvoit"]], ""),
      Q.text("Quelle sourate proclame l'unicité d'Allah ? (Al-…)", ["ikhlas"], "Sourate Al-Ikhlas (112)."),
    ]),
    ch("c0-muhammad", "histoire", "Qui est Muhammad ﷺ ?", ["Coran 33:40", "Sîra d'Ibn Hichâm"], [
      L("Son identité", "Muhammad ﷺ est né à La Mecque vers 570, dans la tribu de Quraysh. Il est le messager d'Allah. Le signe ﷺ signifie « paix et bénédiction d'Allah sur lui ».",
        Q.mc("Dans quelle ville est né Muhammad ﷺ ?", ["La Mecque", "Médine", "Jérusalem", "Damas"], 0, "Il est né à La Mecque.")),
      L("Sa mission", "Vers l'âge de 40 ans, il reçoit la révélation. Il appelle à l'adoration d'Allah seul. Il quitte La Mecque pour Médine (l'Hégire, 622) et meurt à Médine. Il est le dernier des prophètes.",
        Q.tf("Muhammad ﷺ est le dernier prophète.", true, "Coran 33:40 : « le sceau des prophètes ».")),
    ], [
      Q.mc("Dans quelle ville est né Muhammad ﷺ ?", ["La Mecque", "Médine", "Taïf", "Jérusalem"], 0, ""),
      Q.tf("Muhammad ﷺ est le dernier prophète de l'islam.", true, "Coran 33:40."),
      Q.mc("De quelle tribu est-il issu ?", ["Quraysh", "Aws", "Khazraj", "Ghassan"], 0, ""),
      Q.order("Remets ces événements dans l'ordre.", ["Naissance à La Mecque", "Première révélation", "Hégire vers Médine", "Mort à Médine"], ""),
      Q.text("Dans quelle ville est-il mort ?", ["medine", "madina"], "À Médine."),
    ]),
    ch("c0-coran", "coran", "Qu'est-ce que le Coran ?", ["Coran 2:185", "Coran 15:9"], [
      L("La parole d'Allah", "Le Coran est la parole d'Allah, révélée au Prophète ﷺ par l'ange Jibril (Gabriel). Il est en arabe et contient 114 chapitres appelés sourates.",
        Q.mc("Combien y a-t-il de sourates ?", ["114", "99", "30", "60"], 0, "114 sourates.")),
      L("Une révélation progressive", "Le Coran a été révélé progressivement sur environ 23 ans, à La Mecque puis à Médine. Les musulmans croient qu'il a été préservé.",
        Q.mc("Quel ange a transmis le Coran ?", ["Jibril", "Mikaïl", "Israfil", "Malik"], 0, "Jibril (Gabriel).")),
    ], [
      Q.mc("Combien de sourates contient le Coran ?", ["114", "99", "30", "60"], 0, ""),
      Q.tf("Le Coran a été révélé progressivement sur environ 23 ans.", true, ""),
      Q.mc("Quel ange a transmis la révélation ?", ["Jibril", "Mikaïl", "Israfil", "Malik"], 0, ""),
      Q.mc("Dans quelle langue le Coran a-t-il été révélé ?", ["Arabe", "Hébreu", "Persan", "Araméen"], 0, ""),
      Q.text("Comment appelle-t-on un chapitre du Coran ? (un mot)", ["sourate", "surah", "sura"], "Une sourate."),
    ]),
    ch("c0-piliers", "pratique", "Les 5 piliers de l'Islam", ["Hadith des cinq piliers (Bukhari 8, Muslim 16)"], [
      L("Les trois premiers", "1) La chahada : attester qu'il n'y a de divinité qu'Allah et que Muhammad ﷺ est Son messager. 2) La salat : les cinq prières quotidiennes. 3) La zakat : l'aumône obligatoire.",
        Q.mc("Quel pilier est l'attestation de foi ?", ["La chahada", "La salat", "Le hajj", "Le siyam"], 0, ""), "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّه", "Ach-hadu an lâ ilâha illa-Llâh"),
      L("Les deux derniers", "4) Le siyam : le jeûne du mois de Ramadan. 5) Le hajj : le pèlerinage à La Mecque, une fois dans la vie pour qui en a la capacité.",
        Q.tf("Le hajj est obligatoire chaque année pour tous.", false, "Une fois dans la vie, pour qui en a la capacité.")),
    ], [
      Q.mc("Quel pilier consiste à jeûner pendant Ramadan ?", ["Le siyam", "La zakat", "Le hajj", "La salat"], 0, ""),
      Q.tf("Le hajj est obligatoire chaque année pour tous les musulmans.", false, "Une fois dans la vie, pour qui en a la capacité."),
      Q.mc("Combien de prières obligatoires par jour ?", ["5", "3", "4", "6"], 0, ""),
      Q.match("Associe chaque pilier à sa définition.", [["Chahada", "Attestation de foi"], ["Salat", "La prière"], ["Zakat", "L'aumône obligatoire"], ["Siyam", "Le jeûne"], ["Hajj", "Le pèlerinage"]], ""),
      Q.text("Quel est le premier pilier ? (un mot)", ["chahada", "shahada", "attestation"], "La chahada."),
    ]),
    ch("c0-foi", "croyance", "Les 6 piliers de la foi", ["Hadith de Jibril (Bukhari 50, Muslim 8)"], [
      L("Croire", "La foi (iman) comprend six piliers : croire en Allah, en Ses anges, en Ses livres, en Ses messagers, au Jour dernier, et au destin (qadar), bien et mal.",
        Q.mc("Combien y a-t-il de piliers de la foi ?", ["6", "5", "4", "7"], 0, "")),
      L("Islam et foi", "Les piliers de l'islam sont des actes (prière, jeûne…). Les piliers de la foi sont des croyances du cœur. Ils se complètent.",
        Q.tf("Croire au Jour dernier est un pilier de la foi.", true, "")),
    ], [
      Q.mc("Combien y a-t-il de piliers de la foi ?", ["6", "5", "4", "7"], 0, ""),
      Q.mc("Lequel est un pilier de l'islam et non de la foi ?", ["Le hajj", "Croire aux anges", "Croire au destin", "Croire aux livres"], 0, "Le hajj est un acte : pilier de l'islam."),
      Q.tf("Croire au Jour dernier est un pilier de la foi.", true, ""),
      Q.text("Comment s'appelle le destin en arabe ? (un mot)", ["qadar", "qadr"], "Le qadar."),
      Q.mc("Croire aux livres révélés fait partie…", ["des piliers de la foi", "des piliers de l'islam", "des cinq prières", "du hajj"], 0, ""),
    ]),
  ]},
  { n: 1, unit: "Le Tawhid", chapters: [
    ch("c1-tawhid", "croyance", "L'unicité d'Allah", ["Coran 112", "Coran 4:48"], [
      L("Le Tawhid", "Le tawhid est la croyance en l'unicité d'Allah : Lui seul crée, gouverne et mérite l'adoration.",
        Q.mc("Que signifie « tawhid » ?", ["L'unicité d'Allah", "Le jeûne", "La prière", "Le pèlerinage"], 0, "")),
      L("Le shirk", "Le shirk est le fait d'associer quelqu'un ou quelque chose à Allah dans l'adoration. Il est considéré comme le plus grave des péchés (Coran 4:48).",
        Q.mc("Que signifie « shirk » ?", ["Associer quelqu'un à Allah", "Jeûner", "Prier", "Donner l'aumône"], 0, "")),
    ], [
      Q.mc("Que signifie « tawhid » ?", ["L'unicité d'Allah", "Le jeûne", "La prière", "Le voyage"], 0, ""),
      Q.mc("Le shirk est…", ["Associer quelqu'un à Allah", "Pardonner", "Une prière", "Un pilier"], 0, ""),
      Q.tf("Selon l'islam, Allah a des associés dans Sa divinité.", false, ""),
      Q.match("Associe.", [["Tawhid", "Unicité d'Allah"], ["Shirk", "Association à Allah"], ["Iman", "La foi"]], ""),
      Q.text("Quelle sourate (112) résume le tawhid ? (Al-…)", ["ikhlas"], "Al-Ikhlas."),
    ]),
  ]},
  { n: 2, unit: "Introduction au Coran", chapters: [
    ch("c2-coran", "coran", "Structure du Coran", ["Coran 1 (Al-Fatiha)", "Coran 2 (Al-Baqara)"], [
      L("Sourates et versets", "Le Coran est divisé en 114 sourates, composées de versets (ayat). Il est aussi divisé en 30 parties égales appelées juz'. La première sourate est Al-Fatiha, la plus longue est Al-Baqara.",
        Q.mc("Quelle est la première sourate du Coran ?", ["Al-Fatiha", "Al-Baqara", "Al-Ikhlas", "An-Nas"], 0, ""),
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        "Bismi-llâhi r-Rahmâni r-Rahîm. Al-hamdu li-llâhi Rabbi l-'âlamîn. Ar-Rahmâni r-Rahîm. Mâliki yawmi d-dîn. Iyyâka na'budu wa iyyâka nasta'în. Ihdina s-sirâta l-mustaqîm. Sirâta lladhîna an'amta 'alayhim ghayri l-maghdûbi 'alayhim wa lâ d-dâllîn.", "Coran 1:1-7 (sourate Al-Fatiha)",
        "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur de l'univers. Le Tout Miséricordieux, le Très Miséricordieux, Maître du Jour de la rétribution. C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours. Guide-nous dans le droit chemin, le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés."),
      L("Mecquoises et médinoises", "On distingue les sourates mecquoises (révélées avant l'Hégire, centrées sur la foi) et médinoises (après l'Hégire, avec davantage de règles de vie communautaire).",
        Q.mc("Les sourates médinoises ont été révélées…", ["après l'Hégire", "avant la naissance du Prophète", "à Jérusalem", "en une nuit"], 0, "")),
    ], [
      Q.mc("Quelle est la première sourate ?", ["Al-Fatiha", "Al-Baqara", "An-Nas", "Al-Ikhlas"], 0, ""),
      Q.mc("Quelle est la plus longue sourate ?", ["Al-Baqara", "Al-Fatiha", "Al-Kawthar", "Yasin"], 0, ""),
      Q.tf("Le Coran est divisé en 30 juz'.", true, ""),
      Q.match("Associe.", [["Sourate", "Chapitre"], ["Ayah", "Verset"], ["Juz'", "1/30 du Coran"]], ""),
      Q.text("Comment appelle-t-on un verset du Coran ? (un mot)", ["ayah", "aya", "ayat"], "Ayah (pluriel ayat)."),
    ]),
  ]},
  { n: 3, unit: "La prière", chapters: [
    ch("c3-pourquoi", "pratique", "Pourquoi prier ?", ["Coran 20:14", "Coran 29:45"], [
      L("Un lien avec Allah", "La prière (salat) est un moment de lien avec Allah. Allah dit : « Accomplis la salat pour te souvenir de Moi » (Coran 20:14).",
        Q.mc("Pourquoi prie-t-on ?", ["Pour adorer Allah et se souvenir de Lui", "Par tradition seulement", "Pour impressionner", "Pour voyager"], 0, "")),
      L("Un repère dans la journée", "La salat rythme la journée et est un pilier de l'islam. Le Coran dit qu'elle éloigne de la turpitude et du blâmable (29:45).",
        Q.tf("La salat est un pilier de l'islam.", true, "")),
    ], [
      Q.mc("Quel verset dit « Accomplis la salat pour te souvenir de Moi » ?", ["Coran 20:14", "Coran 1:1", "Coran 112:1", "Coran 2:183"], 0, ""),
      Q.tf("La salat est facultative pour le musulman adulte.", false, "C'est un pilier de l'islam."),
      Q.mc("La prière est…", ["Un pilier de l'islam", "Un pilier de la foi", "Une invocation libre seulement", "Un voyage"], 0, ""),
      Q.mc("Selon Coran 29:45, la prière éloigne…", ["de la turpitude et du blâmable", "de la faim", "de la ville", "du travail"], 0, ""),
      Q.text("Comment appelle-t-on la prière en arabe ? (un mot)", ["salat", "salah", "salat"], "La salat."),
    ]),
    ch("c3-cinq", "pratique", "Les cinq prières", ["Coran 4:103", "Coran 17:78"], [
      L("Les noms", "Les cinq prières sont : Fajr (aube), Dhuhr (midi), Asr (après-midi), Maghrib (coucher du soleil), Isha (nuit).",
        Q.mc("Quelle prière se fait à l'aube ?", ["Fajr", "Dhuhr", "Asr", "Isha"], 0, "")),
      L("Les rak'at", "Fajr : 2 rak'at. Dhuhr : 4. Asr : 4. Maghrib : 3. Isha : 4. Le vendredi, la prière de Jumu'a remplace Dhuhr pour les hommes adultes.",
        Q.mc("Combien de rak'at compte Maghrib ?", ["3", "2", "4", "5"], 0, "")),
    ], [
      Q.mc("Combien de rak'at obligatoires pour Fajr ?", ["2", "3", "4", "5"], 0, ""),
      Q.mc("Quelle prière compte 3 rak'at ?", ["Maghrib", "Fajr", "Dhuhr", "Isha"], 0, ""),
      Q.order("Classe les prières dans l'ordre de la journée.", ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"], ""),
      Q.match("Associe chaque prière à son nombre de rak'at.", [["Fajr", "2"], ["Dhuhr", "4"], ["Maghrib", "3"], ["Isha", "4"]], ""),
      Q.text("Quelle prière se fait au coucher du soleil ? (un mot)", ["maghrib"], "Maghrib."),
    ]),
  ]},
  { n: 4, unit: "La purification", chapters: [
    ch("c4-ablutions", "pratique", "Les ablutions (woudou)", ["Coran 5:6", "Hadith sur la validité de la prière et des ablutions (Bukhari 135, Muslim 225)"], [
      L("Pourquoi ?", "Avant la prière, le musulman se purifie par les ablutions (woudou). Coran 5:6 en décrit les parties principales : le visage, les bras, la tête et les pieds.",
        Q.mc("Où est décrit le principe des ablutions ?", ["Coran 5:6", "Coran 112:1", "Coran 1:1", "Coran 96:1"], 0, "")),
      L("Les étapes", "On commence par l'intention et « Bismillah », puis : mains, bouche, nez, visage, bras jusqu'aux coudes, tête et oreilles (essuyage), pieds jusqu'aux chevilles.",
        Q.mc("Quel est le premier geste après l'intention et « Bismillah » ?", ["Laver les mains", "Laver les pieds", "Essuyer la tête", "Laver les bras"], 0, "")),
    ], [
      Q.mc("Les ablutions se font…", ["Avant la prière", "Après le jeûne", "Pendant le hajj seulement", "Uniquement le vendredi"], 0, ""),
      Q.tf("Les pieds sont lavés jusqu'aux chevilles.", true, ""),
      Q.order("Remets les étapes des ablutions dans l'ordre.", ["Laver les mains", "Se rincer la bouche et le nez", "Laver le visage", "Laver les bras jusqu'aux coudes", "Essuyer la tête", "Laver les pieds"], ""),
      Q.mc("Quelle est la source coranique principale des ablutions ?", ["Coran 5:6", "Coran 2:183", "Coran 3:97", "Coran 9:60"], 0, ""),
      Q.text("Comment appelle-t-on les ablutions en arabe ? (un mot)", ["woudou", "wudu", "wudhu", "wudou"], "Le woudou."),
    ]),
  ]},
  { n: 5, unit: "Accomplir la prière", chapters: [
    ch("c5-etapes", "pratique", "Les étapes de la prière", ["Hadith : « Priez comme vous m'avez vu prier » (Bukhari 631)"], [
      L("Une rak'a", "Une rak'a comprend : le takbir (« Allahou akbar »), la lecture d'Al-Fatiha et d'une sourate, le rukou' (inclinaison), le retour debout, puis deux sujud (prosternations) séparés par une position assise.",
        Q.mc("Comment s'appelle l'inclinaison ?", ["Rukou'", "Sujud", "Takbir", "Taslim"], 0, "")),
      L("La fin", "La prière se termine par le tashahhud en position assise, puis le taslim (salutations à droite et à gauche, « As-salamou 'alaykoum wa rahmatou Llah »).",
        Q.mc("Comment termine-t-on la prière ?", ["Par le taslim", "Par le takbir", "Par le rukou'", "Par le sujud"], 0, "")),
    ], [
      Q.mc("Quelle sourate est récitée à chaque rak'a ?", ["Al-Fatiha", "Al-Baqara", "Al-Kawthar", "Yasin"], 0, ""),
      Q.mc("Comment appelle-t-on la prosternation ?", ["Sujud", "Rukou'", "Takbir", "Taslim"], 0, ""),
      Q.order("Remets les gestes d'une rak'a dans l'ordre.", ["Takbir", "Lecture d'Al-Fatiha", "Rukou'", "Se relever", "Sujud"], ""),
      Q.match("Associe.", [["Takbir", "Allahou akbar"], ["Rukou'", "Inclinaison"], ["Sujud", "Prosternation"], ["Taslim", "Salutations finales"]], ""),
      Q.text("Quel mot désigne une unité de prière ? (rak'…)", ["raka", "rakaa", "rakah", "rak'a", "rakat", "rakaat"], "La rak'a."),
    ]),
  ]},
  { n: 6, unit: "Avant la révélation", chapters: [
    ch("c6-arabie", "histoire", "L'Arabie avant l'Islam", ["Coran 105 (Al-Fil)", "Coran 106 (Quraysh)", "Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
      L("Une société de tribus", "Avant l'islam, l'Arabie était organisée en tribus. La poésie et le commerce caravanier avaient une grande importance. Cette période est appelée la jahiliyya (période d'ignorance).",
        Q.tf("L'Arabie était organisée en tribus.", true, "")),
      L("La Mecque et la Kaaba", "La Mecque abritait la Kaaba, bâtie selon la tradition islamique par Ibrahim et Ismaïl. La tribu de Quraysh en avait la garde. À cette époque, des idoles y étaient vénérées.",
        Q.mc("Quelle tribu gardait la Kaaba ?", ["Quraysh", "Aws", "Khazraj", "Ghassan"], 0, "")),
    ], [
      Q.mc("Quel monument se trouve à La Mecque ?", ["La Kaaba", "Le Mont Sinaï", "Le Temple", "La Citadelle"], 0, ""),
      Q.mc("Quelle tribu gardait la Kaaba ?", ["Quraysh", "Aws", "Khazraj", "Thaqif"], 0, ""),
      Q.tf("L'Arabie préislamique était un État centralisé unique.", false, "Elle était organisée en tribus."),
      Q.mc("Qui était Abraha ?", ["Un gouverneur du Yémen qui marcha sur la Kaaba", "Un prophète", "Le grand-père du Prophète", "Un compagnon"], 0, "Sourate 105 (Al-Fil) évoque l'événement de l'Éléphant."),
      Q.text("Comment appelle-t-on la période avant l'islam ? (un mot)", ["jahiliyya", "jahiliya", "jahilia"], "La jahiliyya."),
    ]),
    ch("c6-naissance", "histoire", "La naissance du Prophète ﷺ", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
      L("Sa famille", "Muhammad ﷺ est né à La Mecque, selon les récits les plus rapportés l'année de l'Éléphant (vers 570). Son père Abdallah est mort avant sa naissance. Sa mère s'appelait Amina bint Wahb. La date exacte est discutée.",
        Q.mc("Comment s'appelait son père ?", ["Abdallah", "Abu Talib", "Abu Bakr", "Abbas"], 0, "")),
      L("La nourrice", "Selon la coutume, il est confié à une nourrice du désert, Halima as-Sa'diyya, puis revient auprès de sa mère et de son grand-père Abd al-Muttalib.",
        Q.mc("Comment s'appelait sa nourrice ?", ["Halima", "Khadija", "Aisha", "Fatima"], 0, "")),
    ], [
      Q.mc("Comment s'appelait son père ?", ["Abdallah", "Abu Talib", "Abu Bakr", "Hamza"], 0, ""),
      Q.mc("Comment s'appelait sa mère ?", ["Amina bint Wahb", "Khadija", "Halima", "Fatima"], 0, ""),
      Q.tf("Selon les récits les plus rapportés, il est né l'année de l'Éléphant.", true, ""),
      Q.mc("Quelle femme fut sa nourrice ?", ["Halima as-Sa'diyya", "Khadija", "Aisha", "Sumayya"], 0, ""),
      Q.text("Quel est le nom de son grand-père paternel ? (Abd al-…)", ["muttalib", "mouttalib"], "Abd al-Muttalib."),
    ]),
  ]},
  { n: 7, unit: "Enfance et jeunesse", chapters: [
    ch("c7-enfance", "histoire", "L'enfance du Prophète ﷺ", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
      L("Les pertes", "Sa mère Amina meurt alors qu'il a environ 6 ans. Son grand-père Abd al-Muttalib le prend en charge, puis meurt quand il a environ 8 ans.",
        Q.mc("À quel âge environ perd-il sa mère ?", ["6 ans", "2 ans", "12 ans", "20 ans"], 0, "")),
      L("Abu Talib", "Il est ensuite pris en charge par son oncle Abu Talib, qui le protégera longtemps, même sans embrasser l'islam.",
        Q.mc("Qui prend soin de lui après son grand-père ?", ["Abu Talib", "Abu Bakr", "Umar", "Ali"], 0, "")),
    ], [
      Q.mc("À quel âge environ perd-il sa mère ?", ["6 ans", "2 ans", "12 ans", "20 ans"], 0, ""),
      Q.mc("Qui s'occupe de lui après Abd al-Muttalib ?", ["Abu Talib", "Abu Bakr", "Umar", "Hamza"], 0, ""),
      Q.tf("Abu Talib était son oncle.", true, ""),
      Q.order("Remets dans l'ordre.", ["Naissance", "Séjour chez Halima", "Mort d'Amina", "Tutelle d'Abd al-Muttalib", "Tutelle d'Abu Talib"], ""),
      Q.text("Comment s'appelait son oncle qui l'a élevé ? (Abu …)", ["talib"], "Abu Talib."),
    ]),
    ch("c7-jeunesse", "histoire", "La jeunesse du Prophète ﷺ", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
      L("Al-Amin", "Jeune, il était connu à La Mecque pour son honnêteté et on l'appelait al-Amin (le digne de confiance). Il travaillait comme berger puis comme commerçant.",
        Q.mc("Que signifie al-Amin ?", ["Le digne de confiance", "Le riche", "Le savant", "Le fort"], 0, "")),
      L("Khadija", "Il travaille pour Khadija bint Khuwaylid, commerçante réputée. Elle l'épouse lorsqu'il a environ 25 ans. Plus tard, lors de la reconstruction de la Kaaba, il résout par sa sagesse la dispute sur la Pierre noire en la plaçant sur un manteau.",
        Q.mc("Qui est Khadija ?", ["Sa première épouse", "Sa nourrice", "Sa fille", "Sa tante"], 0, "")),
    ], [
      Q.mc("Quel surnom portait-il ?", ["Al-Amin", "Al-Faruq", "As-Siddiq", "Al-Hadi"], 0, ""),
      Q.mc("Qui est Khadija ?", ["Sa première épouse", "Sa mère", "Sa nourrice", "Sa tante"], 0, ""),
      Q.tf("Il a épousé Khadija vers l'âge de 25 ans.", true, ""),
      Q.mc("Comment a-t-il résolu la dispute de la Pierre noire ?", ["En la plaçant sur un manteau", "En la cachant", "Par un combat", "En la déplaçant seul"], 0, ""),
      Q.text("Que signifie al-Amin ? (en quelques mots)", ["confiance", "honnete", "fiable", "loyal"], "« Le digne de confiance »."),
    ]),
  ]},
  { n: 8, unit: "La première révélation", chapters: [
    ch("c8-revelation", "histoire", "La première révélation", ["Coran 96:1-5", "Hadith de Aïcha (Bukhari 3)"], [
      L("La grotte de Hira", "Avant la révélation, le Prophète ﷺ se retirait pour méditer dans la grotte de Hira, sur le mont Jabal an-Nour, près de La Mecque. Il avait environ 40 ans, en Ramadan.",
        Q.mc("Où se retirait-il pour méditer ?", ["La grotte de Hira", "Médine", "Taïf", "Damas"], 0, "")),
      L("Iqra", "L'ange Jibril lui apparaît et lui dit : « Iqra » (Lis / récite). Les premiers versets révélés sont ceux de la sourate Al-'Alaq (96:1-5). Effrayé, il rentre auprès de Khadija qui le rassure, puis l'emmène chez son cousin Waraqa ibn Nawfal.",
        Q.mc("Quel est le premier mot que dit l'ange ?", ["Iqra", "Qum", "Ihbit", "Salam"], 0, ""),
        "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
        "Iqra' bismi Rabbika lladhî khalaq. Khalaqa l-insâna min 'alaq. Iqra' wa Rabbuka l-akram. Alladhî 'allama bi-l-qalam. 'Allama l-insâna mâ lam ya'lam.", "Coran 96:1-5 (sourate Al-'Alaq)",
        "Lis, au nom de ton Seigneur qui a créé, qui a créé l'homme d'une adhérence. Lis ! Ton Seigneur est le Très Noble, qui a enseigné par la plume, a enseigné à l'homme ce qu'il ne savait pas."),
    ], [
      Q.mc("Où le Prophète ﷺ se retirait-il avant la première révélation ?", ["La grotte de Hira", "Médine", "Taïf", "Damas"], 0, ""),
      Q.mc("Quel ange lui a apporté la révélation ?", ["Jibril", "Mikaïl", "Israfil", "Malik"], 0, ""),
      Q.tf("Les premiers versets révélés sont ceux de la sourate Al-'Alaq.", true, ""),
      Q.order("Remets la chronologie dans l'ordre.", ["Retraite à Hira", "Apparition de Jibril", "Retour auprès de Khadija", "Rencontre avec Waraqa"], ""),
      Q.text("Quelle sourate contient les premiers versets révélés ? (Al-…)", ["alaq"], "Al-'Alaq (96)."),
    ]),
  ]},
  { n: 9, unit: "Jeûne et aumône", chapters: [
    ch("c9-jeune", "pratique", "Le jeûne du Ramadan", ["Coran 2:183-185", "Coran 97 (Al-Qadr)"], [
      L("Le principe", "Le Ramadan est le 9e mois du calendrier lunaire. Le musulman s'abstient de manger, de boire et de relations conjugales de l'aube (Fajr) au coucher du soleil (Maghrib).",
        Q.mc("Quel est le mois du jeûne ?", ["Ramadan", "Mouharram", "Chaaban", "Rajab"], 0, "")),
      L("Facilités et fêtes", "Les malades, voyageurs et certaines personnes peuvent différer leur jeûne et le rattraper. La nuit d'Al-Qadr, décrite dans le Coran (97), vaut mieux que mille mois. Le mois se termine par l'Aïd al-Fitr.",
        Q.tf("Un malade peut différer son jeûne.", true, "")),
    ], [
      Q.mc("Quel est le mois du jeûne ?", ["Ramadan", "Mouharram", "Chaaban", "Rajab"], 0, ""),
      Q.mc("Le jeûne commence…", ["À l'aube (Fajr)", "À midi", "Au coucher du soleil", "À minuit"], 0, ""),
      Q.tf("Le jeûne se termine au coucher du soleil.", true, ""),
      Q.mc("Comment s'appelle la fête de fin de Ramadan ?", ["Aïd al-Fitr", "Aïd al-Adha", "Achoura", "Mawlid"], 0, ""),
      Q.text("Comment s'appelle la nuit plus précieuse que mille mois ? (… al-Qadr)", ["laylat", "nuit"], "Laylat al-Qadr (Coran 97)."),
    ]),
    ch("c9-zakat", "pratique", "La zakat", ["Coran 9:60"], [
      L("Le principe", "La zakat est l'aumône obligatoire. Elle concerne l'épargne qui dépasse un seuil appelé nissab et qui a été détenue une année lunaire. Le taux usuel sur l'épargne monétaire est de 2,5 %.",
        Q.mc("Quel est le taux usuel de la zakat sur l'épargne ?", ["2,5 %", "10 %", "1 %", "20 %"], 0, "")),
      L("Les bénéficiaires", "Coran 9:60 énumère huit catégories de bénéficiaires, dont les pauvres et les nécessiteux.",
        Q.mc("Combien de catégories de bénéficiaires dans Coran 9:60 ?", ["8", "5", "3", "10"], 0, "")),
    ], [
      Q.mc("Quel est le taux usuel de la zakat sur l'épargne ?", ["2,5 %", "10 %", "1 %", "20 %"], 0, ""),
      Q.tf("La zakat est facultative.", false, "C'est un pilier de l'islam."),
      Q.mc("Combien de catégories de bénéficiaires dans Coran 9:60 ?", ["8", "5", "3", "10"], 0, ""),
      Q.mc("Comment appelle-t-on le seuil minimal ?", ["Le nissab", "Le hajj", "Le fitr", "Le takbir"], 0, ""),
      Q.text("Comment appelle-t-on ce seuil en arabe ? (un mot)", ["nissab", "nisab"], "Le nissab."),
    ]),
  ]},
  { n: 10, unit: "Le comportement (adab)", chapters: [
    ch("c10-adab", "pratique", "Le bon comportement", ["Hadith : « Les actes ne valent que par les intentions » (Bukhari 1)", "Coran 17:23", "Bukhari 3559"], [
      L("L'intention et le caractère", "Un hadith célèbre dit que les actes valent selon les intentions (Bukhari 1). Le Prophète ﷺ a aussi dit que les meilleurs sont ceux qui ont le meilleur caractère (Bukhari 3559).",
        Q.mc("D'après le hadith, les actes valent selon…", ["Les intentions", "La quantité", "La richesse", "La force"], 0, "")),
      L("Envers autrui", "Saluer par « As-salamou 'alaykoum », dire la vérité, respecter ses parents (Coran 17:23), bien traiter son voisin, manger avec la main droite en disant « Bismillah ».",
        Q.mc("Que dit-on avant de manger ?", ["Bismillah", "Alhamdulillah", "Inchallah", "Astaghfirullah"], 0, "")),
    ], [
      Q.mc("Les actes valent selon…", ["Les intentions", "La quantité", "La richesse", "La force"], 0, ""),
      Q.tf("Le respect des parents est recommandé dans le Coran.", true, "Coran 17:23."),
      Q.mc("Que dit-on avant de manger ?", ["Bismillah", "Alhamdulillah", "Inchallah", "Mashallah"], 0, ""),
      Q.match("Associe.", [["As-salamou 'alaykoum", "Salutation"], ["Bismillah", "Au nom d'Allah"], ["Jazakallahou khayran", "Remerciement"]], ""),
      Q.text("Comment dit-on « si Allah le veut » ? (In …)", ["shaa", "chaa", "sha", "cha"], "In châ' Allâh."),
    ]),
  ]},
];

/* Identifiants, index et niveaux (rappelé après l'ajout des niveaux suivants) */
const CHAPTERS = {}, QINDEX = {};
function buildIndex() {
  Object.keys(CHAPTERS).forEach(k => delete CHAPTERS[k]); Object.keys(QINDEX).forEach(k => delete QINDEX[k]);
  LEVELS.forEach(lv => lv.chapters.forEach((c, i) => {
    c.level = lv.n; c.idx = i;
    CHAPTERS[c.id] = c;
    c.quiz.forEach((q, k) => { q.id = c.id + ".q" + k; q.chapter = c.id; QINDEX[q.id] = q; });
    c.lessons.forEach((l, k) => { if (l.check) { l.check.id = c.id + ".l" + k; l.check.chapter = c.id; } });
  }));
}
buildIndex();
const stageName = n => n === 0 ? STAGES[0] : STAGES[Math.ceil(n / 10)];
const needsExam = n => n >= 20 && n % 10 === 0;
