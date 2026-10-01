/* Niveaux 91 à 100 : grands bilans. Les questions relient plusieurs chapitres. Les dates sont approximatives. */
LEVELS.push(
{ n: 91, unit: "La Sîra d'un seul regard", chapters: [
  ch("c91-frise-sira", "histoire", "La frise de la Sîra", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
    L("Avant la mission", "Vers 570 : naissance. Vers 6 ans : mort d'Amina ; vers 8 ans : mort d'Abd al-Muttalib ; Abu Talib prend le relais. Vers 25 ans : mariage avec Khadija. Vers 35 ans : reconstruction de la Kaaba et épisode de la Pierre noire.",
      Q.mc("Qui prend en charge le Prophète ﷺ après son grand-père ?", ["Abu Talib", "Abu Bakr", "Umar", "Hamza"], 0, "")),
    L("Mecque puis Médine", "Vers 610 : première révélation. Trois ans d'appel discret, puis appel public. Vers l'an 5 : émigration en Abyssinie. Vers l'an 10 : année de la tristesse, voyage à Taïf, puis Isra et Mi'raj. 622 : Hégire. 2 H : Badr. 3 H : Uhud. 5 H : Fossé. 6 H : Hudaybiya. 8 H : conquête. 10 H : pèlerinage d'adieu. 11 H : mort du Prophète ﷺ.",
      Q.mc("Quelle bataille a eu lieu en 2 H ?", ["Badr", "Uhud", "Le Fossé", "Hunayn"], 0, "")),
  ], [
    Q.order("Remets ces événements dans l'ordre chronologique.", ["Première révélation", "Émigration en Abyssinie", "Hégire", "Bataille de Badr", "Conquête de La Mecque", "Pèlerinage d'adieu"], "Question avancée."),
    Q.order("Remets ces trois batailles de Médine dans l'ordre.", ["Badr", "Uhud", "Le Fossé"], ""),
    Q.mc("Quel événement survient juste après l'année de la tristesse ?", ["Le voyage à Taïf", "La bataille de Badr", "L'Hégire", "La conquête de La Mecque"], 0, "Question avancée."),
    Q.tf("Le traité de Hudaybiya précède la conquête de La Mecque.", true, ""),
    Q.text("En quelle année hégirienne a eu lieu la conquête de La Mecque ? (un chiffre)", ["8", "huit"], "8 H."),
  ], "Retiens : 13 années à La Mecque, environ 10 années à Médine."),
]},
{ n: 92, unit: "Prophètes : bilan", chapters: [
  ch("c92-prophetes-bilan", "prophetes", "Les prophètes : grand bilan", ["Coran 2:136 ; 4:163-165", "Chapitres précédents"], [
    L("Une chaîne de messagers", "Les musulmans croient en tous les prophètes, sans faire de différence entre eux (Coran 2:136). Dans l'ordre généralement admis : Adam, Nuh, Hud, Salih, Ibrahim, Lut, Ismaïl, Ishaq, Yaqub, Yusuf, Shu'ayb, Ayyub, Musa, Harun, Dawud, Sulayman, Yunus, Zakariyya, Yahya, Issa, puis Muhammad ﷺ.",
      Q.mc("Quel prophète est le dernier ?", ["Muhammad ﷺ", "Issa", "Musa", "Nuh"], 0, "")),
    L("Un message commun", "Tous les prophètes ont appelé à adorer Allah seul (Coran 21:25). Chacun a eu des épreuves, une patience et des signes particuliers : Nuh et l'arche, Ibrahim et le feu, Salih et la chamelle, Musa et le bâton, Dawud et le fer, Sulayman et le vent, Issa et la guérison par la permission d'Allah.",
      Q.tf("Tous les prophètes ont appelé au tawhid.", true, "Coran 21:25.")),
  ], [
    Q.match("Associe chaque prophète à son signe.", [["Nuh", "L'arche"], ["Ibrahim", "Le feu devenu fraîcheur"], ["Salih", "La chamelle"], ["Musa", "Le bâton"]], "Question avancée."),
    Q.order("Remets ces prophètes dans l'ordre généralement admis.", ["Adam", "Nuh", "Ibrahim", "Yusuf", "Musa", "Issa", "Muhammad ﷺ"], "Question avancée."),
    Q.match("Associe chaque prophète à son livre ou à son peuple.", [["Musa", "Tawrat"], ["Dawud", "Zabur"], ["Issa", "Injil"], ["Hud", "Peuple d'Ad"]], "Question avancée."),
    Q.tf("Yunus est celui qui a été avalé par un grand poisson.", true, ""),
    Q.text("Quel prophète a construit la Kaaba avec son fils Ismaïl ? (un prénom)", ["ibrahim", "abraham"], "Ibrahim."),
  ], "Le Coran nomme vingt-cinq prophètes ; leur nombre total n'est connu que d'Allah."),
  ch("c92-signes", "prophetes", "Les signes et les épreuves", ["Coran 21:69 ; 26:63 ; 27:16-19 ; 3:49", "Chapitres précédents"], [
    L("Les signes par la permission d'Allah", "Les prophètes n'ont pas accompli de miracles par eux-mêmes mais par la permission d'Allah : le feu devenu fraîcheur pour Ibrahim (21:69), la mer ouverte pour Musa (26:63), la compréhension des oiseaux et des fourmis pour Sulayman (27:16-19), la guérison par Issa (3:49).",
      Q.mc("Par quelle permission les miracles ont-ils lieu ?", ["Celle d'Allah", "Celle des anges", "Celle des rois", "Celle des prophètes"], 0, "")),
    L("Des épreuves variées", "Ayyub a été éprouvé dans son corps, Yusuf par la séparation et la prison, Yunus dans le ventre du poisson, Muhammad ﷺ par la persécution. Ces histoires enseignent la patience, la confiance en Allah et l'espérance.",
      Q.tf("Les prophètes ont eux aussi connu des épreuves.", true, "")),
  ], [
    Q.match("Associe chaque prophète à son épreuve.", [["Yusuf", "Le puits et la prison"], ["Ayyub", "La maladie"], ["Yunus", "Le ventre du poisson"], ["Nuh", "Le déluge"]], "Question avancée."),
    Q.mc("Quel prophète est associé à une invocation dans les ténèbres ?", ["Yunus", "Dawud", "Hud", "Lut"], 0, ""),
    Q.tf("Les miracles sont accomplis par la volonté propre des prophètes.", false, "Par la permission d'Allah."),
    Q.mc("Quel prophète est associé à la huppe et à la reine de Saba ?", ["Sulayman", "Dawud", "Yusuf", "Musa"], 0, ""),
    Q.text("Quel prophète a pardonné à ses frères en Égypte ? (un prénom)", ["yusuf", "joseph", "youssouf"], "Yusuf."),
  ], "Dans le Coran, le mot « ayah » désigne aussi bien les versets que les signes des prophètes."),
]},
{ n: 93, unit: "Califes, dynasties et lieux", chapters: [
  ch("c93-califes-bilan", "histoire", "Califes et dynasties : grand bilan", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Les Rashidun et les dynasties", "Les quatre premiers califes (11-40 H) : Abu Bakr, Umar, Uthman, Ali. Puis les Omeyyades (661-750, Damas), les Abbassides (750-1258, Bagdad), puis d'autres pouvoirs régionaux (Mamelouks, Ayyoubides) et les Ottomans (vers 1299-1924).",
      Q.mc("Quelle dynastie a Damas pour capitale ?", ["Les Omeyyades", "Les Abbassides", "Les Ottomans", "Les Mamelouks"], 0, "")),
    L("Liens entre événements", "Yarmouk (15 H) se situe sous Umar ; le mushaf d'Uthman, sous Uthman ; Karbala (61 H), sous Yazid ; le Dôme du Rocher, sous Abd al-Malik ; Bagdad (762), sous al-Mansur ; Hattin (1187), avec Salah ad-Din ; la prise de Constantinople (1453), avec Mehmed II.",
      Q.tf("Le mushaf d'Uthman date du califat d'Uthman.", true, "")),
  ], [
    Q.order("Remets ces périodes dans l'ordre.", ["Rashidun", "Omeyyades", "Abbassides", "Ottomans"], ""),
    Q.match("Associe chaque événement à son dirigeant.", [["Yarmouk", "Umar"], ["Dôme du Rocher", "Abd al-Malik"], ["Hattin", "Salah ad-Din"], ["Constantinople (1453)", "Mehmed II"]], "Question avancée."),
    Q.mc("Quelle dynastie fonde Bagdad ?", ["Les Abbassides", "Les Omeyyades", "Les Ottomans", "Les Ayyoubides"], 0, ""),
    Q.tf("La chute de Bagdad (1258) précède la prise de Constantinople (1453).", true, ""),
    Q.text("Quel calife est appelé « al-Faruq » ? (un prénom)", ["umar", "omar", "oumar"], "Umar."),
  ], "Plusieurs événements étudiés ici se sont déroulés entre deux continents : l'histoire musulmane est très étendue."),
  ch("c93-lieux-bilan", "histoire", "Les lieux de l'histoire musulmane", ["Chapitres précédents", "Ibn Khallikan, Wafayat al-A'yan"], [
    L("Villes de la Sîra", "La Mecque (Kaaba, révélation, conquête), Médine (mosquée, batailles), Taïf, Jérusalem (Al-Aqsa, Isra), Aksoum (émigration en Abyssinie), Madyan (Shu'ayb, Musa), Bosra (voyages de commerce).",
      Q.mc("Quelle ville abrite la Kaaba ?", ["La Mecque", "Médine", "Jérusalem", "Taïf"], 0, "")),
    L("Villes de l'histoire", "Damas (Omeyyades), Bagdad (Abbassides), Cordoue (Al-Andalus), Le Caire (Al-Azhar, Mamelouks), Fès (Al-Qarawiyyin), Istanbul (Ottomans), Koufa (Ali).",
      Q.tf("Bagdad est la capitale des Abbassides.", true, "")),
  ], [
    Q.match("Associe chaque ville à un événement ou un lieu.", [["Cordoue", "Grande Mosquée et califat d'Al-Andalus"], ["Fès", "Al-Qarawiyyin"], ["Le Caire", "Al-Azhar"], ["Istanbul", "Mosquée bleue"]], "Question avancée."),
    Q.mc("Quelle ville est associée à l'Isra ?", ["Jérusalem", "Médine", "Taïf", "Koufa"], 0, ""),
    Q.match("Associe chaque personne à sa ville.", [["Bilal", "Médine (premier muezzin)"], ["Umar ibn Abd al-Aziz", "Damas"], ["Al-Mansur", "Bagdad"], ["Abd ar-Rahman III", "Cordoue"]], "Question avancée."),
    Q.tf("Koufa a été un centre important sous Ali.", true, ""),
    Q.text("Quelle ville était le centre de l'empire omeyyade ? (un nom)", ["damas"], "Damas."),
  ], "Plusieurs de ces villes sont visibles sur la carte de l'application."),
]},
{ n: 94, unit: "Le Coran : bilan", chapters: [
  ch("c94-coran-bilan", "coran", "Le Coran : grand bilan", ["Coran 1 ; 2 ; 12 ; 19 ; 36 ; 96 ; 97 ; 103 ; 105 ; 108 ; 112-114", "Chapitres précédents"], [
    L("Repères de sourates", "Al-Fatiha (1), Al-Baqara (2), Yusuf (12), Maryam (19), Ya-Sin (36), Al-'Alaq (96), Al-Qadr (97), Al-'Asr (103), Al-Fil (105), Al-Kawthar (108), Al-Masad (111), Al-Ikhlas (112), Al-Falaq (113), An-Nas (114).",
      Q.mc("Quel est le numéro de la sourate Al-Ikhlas ?", ["112", "1", "103", "96"], 0, "")),
    L("Relier sourates et sujets", "Yusuf : l'histoire du prophète Yusuf. Maryam : la naissance d'Issa. Al-'Alaq : les premiers versets révélés. Al-Fil : l'événement de l'Éléphant. Al-Qadr : la nuit du Destin. Al-Masad : Abu Lahab.",
      Q.tf("Al-Fil évoque l'événement de l'Éléphant.", true, "")),
  ], [
    Q.match("Associe chaque sourate à son sujet.", [["Yusuf", "L'histoire de Yusuf"], ["Maryam", "La naissance d'Issa"], ["Al-Fil", "L'Éléphant"], ["Al-Masad", "Abu Lahab"]], "Question avancée."),
    Q.order("Remets ces sourates dans l'ordre du Coran.", ["Al-Fatiha", "Yusuf", "Maryam", "Al-Ikhlas", "An-Nas"], "Question avancée."),
    Q.mc("Quelle sourate contient Ayat al-Kursi ?", ["Al-Baqara", "Al-Fatiha", "Al-Ikhlas", "Al-Kawthar"], 0, ""),
    Q.tf("Les premiers versets révélés sont dans la sourate Al-'Alaq.", true, ""),
    Q.text("Quelle est la plus courte sourate ? (Al-…)", ["kawthar", "kauthar", "kawsar"], "Al-Kawthar."),
  ], "La sourate Al-Fatiha est récitée à chaque rak'a de la prière."),
]},
{ n: 95, unit: "Pratique : bilan", chapters: [
  ch("c95-pratique-bilan", "pratique", "La pratique : grand bilan", ["Coran 2:183 ; 3:97 ; 9:60", "Bukhari 8 ; Muslim 16"], [
    L("Les piliers en action", "Prière : cinq par jour, Fajr 2, Dhuhr 4, Asr 4, Maghrib 3, Isha 4. Zakat : 2,5 % de l'épargne au-dessus du nissab. Jeûne : de l'aube au coucher du soleil en Ramadan. Hajj : une fois dans la vie si on en a la capacité.",
      Q.mc("Combien de rak'at pour Maghrib ?", ["3", "2", "4", "5"], 0, "")),
    L("Les gestes à connaître", "Wudu : mains, bouche, nez, visage, bras, tête, pieds. Prière : takbir, Al-Fatiha, rukou', sujud, tashahhud, taslim. Hajj : ihram, tawaf, sa'i, Arafat, Muzdalifa, Mina. Dhikr après la prière : 33 tasbih, 33 tahmid, 33 takbir.",
      Q.tf("Le sa'i se fait entre Safa et Marwa.", true, "")),
  ], [
    Q.match("Associe chaque prière à son nombre de rak'at.", [["Fajr", "2"], ["Dhuhr", "4"], ["Maghrib", "3"], ["Isha", "4"]], ""),
    Q.order("Remets les ablutions dans l'ordre.", ["Mains", "Bouche et nez", "Visage", "Bras", "Tête", "Pieds"], ""),
    Q.mc("Quel jour se tient-on à Arafat ?", ["Le 9 Dhul-Hijja", "Le 1er Ramadan", "Le 10 Muharram", "Le 27 Rajab"], 0, ""),
    Q.tf("La zakat est obligatoire dès qu'on atteint le nissab et qu'une année lunaire s'est écoulée.", true, ""),
    Q.text("Comment appelle-t-on la prière du vendredi ? (Jumu'a)", ["jumua", "joumoua", "jumu'a", "jouma"], "La Jumu'a."),
  ], "Le Prophète ﷺ a dit : « Facilitez et ne compliquez pas » (Bukhari 69)."),
]},
{ n: 96, unit: "Croyance : bilan", chapters: [
  ch("c96-croyance-bilan", "croyance", "La croyance : grand bilan", ["Muslim 8 ; Bukhari 50", "Coran 112 ; 2:285"], [
    L("Six piliers", "Croire en Allah, en Ses anges, en Ses livres, en Ses messagers, au Jour dernier et au destin. Le tawhid est au centre : Allah est Un, sans associé. Le shirk, associer quelqu'un à Allah, est le plus grave des péchés (Coran 4:48).",
      Q.mc("Quel est le contraire du tawhid ?", ["Le shirk", "La zakat", "La sadaqa", "Le jeûne"], 0, "")),
    L("Islam, iman, ihsan", "Le hadith de Jibril distingue l'islam (cinq piliers), l'iman (six piliers) et l'ihsan (adorer Allah comme si on Le voyait). Ils se complètent.",
      Q.tf("L'ihsan est le troisième niveau du hadith de Jibril.", true, "")),
  ], [
    Q.match("Associe chaque pilier de la foi à un exemple.", [["Anges", "Jibril"], ["Livres", "Tawrat, Zabur, Injil, Coran"], ["Messagers", "Nuh, Ibrahim, Musa, Issa, Muhammad ﷺ"], ["Jour dernier", "Mizan et Hisab"]], "Question avancée."),
    Q.mc("Combien de piliers de la foi ?", ["6", "5", "7", "4"], 0, ""),
    Q.order("Remets les niveaux du hadith de Jibril.", ["Islam", "Iman", "Ihsan"], ""),
    Q.tf("Le destin est un pilier de la foi et non de l'islam.", true, ""),
    Q.text("Comment appelle-t-on l'unicité d'Allah ? (le …)", ["tawhid", "tawhîd"], "Le tawhid."),
  ], "Retiens la différence : les piliers de l'islam sont des actes, ceux de la foi sont des croyances."),
]},
{ n: 97, unit: "Géographie et repères", chapters: [
  ch("c97-geographie", "histoire", "La géographie de l'histoire musulmane", ["Chapitres précédents", "Sîra d'Ibn Hichâm"], [
    L("La péninsule arabique", "La Mecque et Médine sont dans le Hedjaz, à l'ouest de l'Arabie, près de la mer Rouge. Taïf est à l'est de La Mecque, en altitude. Badr et Uhud sont proches de Médine. Khaybar est au nord de Médine ; Tabouk, plus au nord encore.",
      Q.mc("Près de quelle mer se trouvent La Mecque et Médine ?", ["La mer Rouge", "La mer Méditerranée", "Le golfe Persique", "La mer d'Arabie"], 0, "")),
    L("Les régions voisines", "L'Abyssinie (Éthiopie actuelle) est de l'autre côté de la mer Rouge. La Syrie (Sham) et Jérusalem sont au nord. L'Égypte est au nord-ouest, l'Irak (Koufa, Bagdad) au nord-est, et le Yémen au sud.",
      Q.tf("L'Abyssinie est de l'autre côté de la mer Rouge.", true, "")),
  ], [
    Q.match("Associe chaque lieu à sa direction depuis Médine.", [["Khaybar", "Nord"], ["Tabouk", "Plus au nord"], ["La Mecque", "Sud"], ["Yémen", "Plus au sud"]], "Question avancée."),
    Q.mc("Quel pays actuel correspond à l'Abyssinie ?", ["L'Éthiopie", "L'Égypte", "La Syrie", "Le Yémen"], 0, ""),
    Q.tf("Bagdad est en Irak.", true, ""),
    Q.mc("Quelle ville est au nord de La Mecque et Médine ?", ["Jérusalem", "Aden", "Aksoum", "Sanaa"], 0, "Sur la carte, Jérusalem est au nord."),
    Q.text("Comment appelle-t-on la région de La Mecque et Médine ? (le …)", ["hedjaz", "hijaz", "hidjaz"], "Le Hedjaz."),
  ], "Ouvre la carte de l'application pour retrouver chaque lieu."),
]},
{ n: 98, unit: "Les sources et la consultation", chapters: [
  ch("c98-sources", "croyance", "Les sources de la loi islamique", ["Coran 16:43 ; 4:59", "Adh-Dhahabi, Siyar A'lam an-Nubala'"], [
    L("Quatre sources principales", "Les savants sunnites s'appuient d'abord sur le Coran, puis sur la Sunna (paroles, actes et approbations du Prophète ﷺ), puis sur le consensus des savants (ijma') et l'analogie (qiyas). Coran 4:59 renvoie à Allah et au Messager en cas de désaccord.",
      Q.mc("Quelle est la première source de la loi islamique ?", ["Le Coran", "La coutume seule", "L'opinion personnelle", "Le consensus seul"], 0, "")),
    L("Demander aux gens de savoir", "Coran 16:43 dit : « Interrogez les gens du Rappel si vous ne savez pas ». Quand on ne sait pas, on consulte une personne qualifiée. Une fatwa est un avis juridique donné par un savant qualifié (mufti) en réponse à une question.",
      Q.tf("Quand on ne sait pas, on consulte un savant qualifié.", true, "")),
  ], [
    Q.match("Associe.", [["Coran", "Parole d'Allah"], ["Sunna", "Paroles, actes et approbations du Prophète ﷺ"], ["Ijma'", "Consensus des savants"], ["Qiyas", "Analogie"]], "Question avancée."),
    Q.order("Remets les sources dans l'ordre classique.", ["Coran", "Sunna", "Ijma'", "Qiyas"], ""),
    Q.tf("Une fatwa est un avis donné par un savant qualifié.", true, ""),
    Q.mc("Quel verset invite à interroger les gens de savoir ?", ["Coran 16:43", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.text("Comment appelle-t-on le savant qui émet une fatwa ? (le …)", ["mufti"], "Le mufti."),
  ], "Cette application donne des bases et des références : elle ne remplace pas un savant."),
]},
{ n: 99, unit: "Le grand lexique", chapters: [
  ch("c99-lexique", "croyance", "Le grand lexique de l'islam", ["Chapitres précédents"], [
    L("Mots de la pratique", "Salat (prière), zakat (aumône obligatoire), siyam (jeûne), hajj (pèlerinage), omra (petit pèlerinage), wudu' (ablutions), qibla (direction de prière), adhan (appel), tarawih (prière des nuits de Ramadan), fidya (compensation du jeûne).",
      Q.mc("Quel mot désigne l'appel à la prière ?", ["Adhan", "Qibla", "Wudu'", "Fidya"], 0, "")),
    L("Mots de l'histoire et de la foi", "Hijra (émigration), Ansar (auxiliaires), Muhajirun (émigrés), jahiliyya (ignorance), khalifa (successeur), sira (biographie du Prophète ﷺ), hadith (récit), tafsir (explication du Coran), tawhid (unicité d'Allah), shirk (association), qadar (destin).",
      Q.tf("Les Ansar sont les habitants de Médine qui ont accueilli les émigrés.", true, "")),
  ], [
    Q.match("Associe chaque mot à son sens.", [["Hijra", "Émigration"], ["Tawhid", "Unicité d'Allah"], ["Tafsir", "Explication du Coran"], ["Qibla", "Direction de prière"]], ""),
    Q.match("Associe chaque mot à son sens.", [["Zakat", "Aumône obligatoire"], ["Fidya", "Compensation du jeûne"], ["Nissab", "Seuil de la zakat"], ["Suhur", "Repas avant l'aube"]], "Question avancée."),
    Q.mc("Que signifie « jahiliyya » ?", ["La période d'ignorance avant l'islam", "La prière de nuit", "Le pèlerinage", "La direction de prière"], 0, ""),
    Q.tf("Un hafiz est une personne qui a mémorisé tout le Coran.", true, ""),
    Q.text("Que signifie « khalifa » ? (un mot)", ["successeur", "calife"], "Successeur."),
  ], "Retrouve ces mots dans les cartes de révision (flashcards) de l'application."),
]},
{ n: 100, unit: "L'examen final du parcours", chapters: [
  ch("c100-final", "croyance", "Le grand examen final", ["Tout le parcours"], [
    L("Ce que tu as parcouru", "Tu as étudié les bases de la foi, la prière, le jeûne, la zakat, le Hajj, le Coran, la Sîra complète, les prophètes, les compagnons, l'histoire après le Prophète ﷺ, les sources, l'éthique et la vie quotidienne. Bravo pour ce chemin.",
      Q.mc("Quel est le premier mot révélé ?", ["Iqra' (Lis)", "Salli", "Qum", "Sabbih"], 0, "")),
    L("Et après ?", "Le niveau 100 signifie que tu as terminé le parcours de cette application. Il ne signifie pas que tu connais tout l'islam : le savoir est un chemin sans fin (Coran 20:114 : « Seigneur, augmente mes connaissances »). Continue à réviser, à poser des questions, et à consulter des savants.",
      Q.tf("Le niveau 100 signifie qu'on connaît tout l'islam.", false, "Il signifie qu'on a terminé le parcours de l'application.")),
  ], [
    Q.order("Remets ces événements dans l'ordre.", ["Première révélation", "Hégire", "Hudaybiya", "Conquête de La Mecque", "Mort du Prophète ﷺ", "Mushaf d'Uthman"], "Question finale."),
    Q.match("Associe chaque personnage à son rôle.", [["Bilal", "Premier muezzin"], ["Zayd ibn Thabit", "Rassembleur du Coran"], ["Khalid", "Épée d'Allah"], ["Al-Bukhari", "Auteur d'un grand recueil de hadiths"]], "Question finale."),
    Q.mc("Quel verset dit qu'Allah est proche de celui qui L'invoque ?", ["Coran 2:186", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, "Question finale."),
    Q.tf("Les sources classiques de la loi islamique sont le Coran, la Sunna, l'ijma' et le qiyas.", true, "Question finale."),
    Q.text("Complète : « Seigneur, augmente mes … » (un mot)", ["connaissances", "connaissance", "savoir", "science"], "Coran 20:114 : augmente mes connaissances."),
  ], "Qu'Allah te facilite la suite de ton chemin d'apprentissage."),
]}
);
buildIndex();
