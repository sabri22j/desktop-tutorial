/* Niveaux 11 à 40 : Sîra, prophètes, compagnons, Coran, pratique. Références : sources classiques citées à chaque chapitre. */
LEVELS.push(
{ n: 11, unit: "Khadija", chapters: [
  ch("c11-khadija", "compagnons", "Khadija, la première croyante", ["Hadith de Aïcha (Bukhari 3)", "Sîra d'Ibn Hichâm"], [
    L("Une femme remarquable", "Khadija bint Khuwaylid était une commerçante réputée de La Mecque, connue pour sa droiture. Elle a engagé Muhammad ﷺ pour une affaire commerciale en Syrie, puis l'a épousé. Selon la Sîra, elle a eu plusieurs enfants avec lui, dont Fatima.",
      Q.mc("Quel était le métier de Khadija ?", ["Commerçante", "Bergère", "Médecin", "Poétesse"], 0, "Elle dirigeait des affaires commerciales.")),
    L("Le soutien au moment de la peur", "Après la première révélation, le Prophète ﷺ rentre bouleversé. Khadija le réconforte : « Allah ne t'humiliera jamais, car tu maintiens les liens de parenté, tu soutiens le faible et tu aides celui qui est dans le besoin » (Bukhari 3). Elle est la première personne à croire en lui.",
      Q.tf("Khadija a été la première personne à croire au message.", true, "Selon les récits de la Sîra, c'est elle.")),
  ], [
    Q.mc("Comment Khadija a-t-elle réagi après la première révélation ?", ["Elle l'a réconforté", "Elle a eu peur de lui", "Elle l'a quitté", "Elle l'a moqué"], 0, "Hadith de Aïcha, Bukhari 3."),
    Q.tf("Khadija était commerçante.", true, ""),
    Q.mc("Qui est leur fille la plus connue ?", ["Fatima", "Aïcha", "Hafsa", "Safiyya"], 0, "Fatima az-Zahra."),
    Q.match("Associe.", [["Khadija", "Première épouse du Prophète ﷺ"], ["Waraqa ibn Nawfal", "Son cousin, connaisseur des Écritures"], ["Fatima", "Fille du Prophète ﷺ"]], ""),
    Q.text("Comment s'appelle l'année de deuil où Khadija est décédée ? (l'année de la …)", ["tristesse", "huzn"], "« Am al-Huzn », l'année de la tristesse."),
  ], "On surnommait Khadija « at-Tahira » (la pure) à La Mecque, avant même l'islam (selon la Sîra)."),
]},
{ n: 12, unit: "Les premiers musulmans", chapters: [
  ch("c12-premiers", "histoire", "Les premiers musulmans", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
    L("Les premiers croyants", "Parmi les tout premiers à embrasser l'islam, la Sîra cite Khadija, Ali (alors enfant), Zayd ibn Haritha et Abu Bakr. Abu Bakr a ensuite invité plusieurs personnes à l'islam, dont Uthman ibn Affan, Zubayr ibn al-Awwam, Abd ar-Rahman ibn Awf, Sa'd ibn Abi Waqqas et Talha ibn Ubaydillah.",
      Q.mc("Qui est l'un des tout premiers à croire, parmi les hommes libres adultes ?", ["Abu Bakr", "Abu Lahab", "Abu Sufyan", "Abu Jahl"], 0, "")),
    L("La maison d'al-Arqam", "Pendant environ trois ans, l'appel reste discret. Les premiers musulmans se réunissent notamment dans la maison d'al-Arqam ibn Abi al-Arqam, près du mont Safa, pour apprendre le Coran et prier.",
      Q.mc("Comment appelle-t-on la maison qui servait de lieu de réunion ?", ["Dar al-Arqam", "Dar an-Nadwa", "Dar al-Hijra", "Dar as-Salam"], 0, "")),
  ], [
    Q.mc("Comment appelle-t-on la maison où se réunissaient les premiers musulmans ?", ["Dar al-Arqam", "Dar an-Nadwa", "Dar al-Hijra", "Dar as-Salam"], 0, ""),
    Q.tf("L'appel à l'islam est resté discret pendant environ trois ans.", true, ""),
    Q.mc("Qui était Zayd ibn Haritha ?", ["Un proche du Prophète ﷺ, parmi les premiers croyants", "Un chef de Quraysh hostile", "Le Négus", "Un moine"], 0, ""),
    Q.match("Associe chaque personne à son rôle.", [["Khadija", "Première croyante"], ["Ali", "Cousin du Prophète ﷺ, enfant au début de l'appel"], ["Abu Bakr", "Ami du Prophète ﷺ, a invité d'autres à l'islam"]], ""),
    Q.text("Quel mont se trouve près de la maison d'al-Arqam ? (As-…)", ["safa"], "Le mont Safa."),
  ], "La maison d'al-Arqam se trouvait près du mont Safa, à proximité de la Kaaba. Elle est restée un lieu d'enseignement discret pendant les premières années."),
]},
{ n: 13, unit: "Sourates courtes (1)", chapters: [
  ch("c13-courtes1", "coran", "Al-Kawthar et Al-'Asr", ["Coran 108 (Al-Kawthar)", "Coran 103 (Al-'Asr)"], [
    L("Al-Kawthar, la plus courte sourate", "Al-Kawthar (108) est la plus courte sourate du Coran : trois versets. Elle parle d'une grande faveur accordée au Prophète ﷺ et invite à prier et à remercier Allah.",
      Q.mc("Combien de versets compte Al-Kawthar ?", ["3", "5", "7", "10"], 0, ""),
      "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَانْحَرْ ۝ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", "Innâ a'taynâka l-kawthar. Fa-salli li-rabbika wa-nhar. Inna shâni'aka huwa l-abtar.", "Coran 108:1-3 (sourate Al-Kawthar)",
      "Nous t'avons certes donné Al-Kawthar. Accomplis la Salat pour ton Seigneur et sacrifie. C'est celui qui te hait qui est certes sans postérité."),
    L("Al-'Asr, une leçon sur le temps", "Al-'Asr (103) commence par « Par le Temps ! ». Elle dit que l'être humain est en perdition, sauf ceux qui croient, font le bien, et s'encouragent à la vérité et à la patience.",
      Q.mc("Quelles sont les quatre qualités de ceux qui ne sont pas en perdition ?", ["Foi, bonnes actions, vérité, patience", "Richesse, pouvoir, force, rapidité", "Voyage, commerce, poésie, guerre", "Jeûne, hajj, zakat, prière uniquement"], 0, ""),
      "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", "Wa-l-'asr. Inna l-insâna la-fî khusr. Illa lladhîna âmanû wa 'amilû s-sâlihâti wa tawâsaw bi-l-haqqi wa tawâsaw bi-s-sabr.", "Coran 103:1-3 (sourate Al-'Asr)",
      "Par le Temps ! L'homme est certes en perdition, sauf ceux qui croient, accomplissent de bonnes œuvres, s'exhortent mutuellement à la vérité et s'exhortent mutuellement à l'endurance."),
  ], [
    Q.mc("Quelle est la plus courte sourate du Coran ?", ["Al-Kawthar", "Al-Ikhlas", "Al-Fatiha", "An-Nas"], 0, ""),
    Q.tf("Al-'Asr dit que tout être humain est en perdition sans exception.", false, "Sauf ceux qui croient, font le bien, s'exhortent à la vérité et à la patience."),
    Q.mc("Par quoi commence la sourate Al-'Asr ?", ["Par le Temps", "Par le Soleil", "Par la Nuit", "Par la Lune"], 0, ""),
    Q.match("Associe.", [["Al-Kawthar", "108"], ["Al-'Asr", "103"], ["Al-Ikhlas", "112"]], "Numéros de sourates."),
    Q.text("Combien de versets compte Al-'Asr ? (un chiffre)", ["3", "trois"], "3 versets."),
  ], "Une phrase de l'imam ash-Shafi'i rapportée dans la tradition dit que si les gens méditaient seulement Al-'Asr, cela leur suffirait."),
]},
{ n: 14, unit: "Sourates de protection", chapters: [
  ch("c14-mouawwidhat", "coran", "Al-Falaq et An-Nas", ["Coran 113 (Al-Falaq)", "Coran 114 (An-Nas)", "Hadith de Aïcha (Bukhari 5017)"], [
    L("Al-Falaq", "Al-Falaq (113) est une demande de protection auprès du Seigneur de l'aube naissante. Elle compte cinq versets.",
      Q.mc("Combien de versets compte Al-Falaq ?", ["5", "3", "6", "8"], 0, ""),
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", "Qul a'ûdhu bi-rabbi l-falaq. Min sharri mâ khalaq. Wa min sharri ghâsiqin idhâ waqab. Wa min sharri n-naffâthâti fî l-'uqad. Wa min sharri hâsidin idhâ hasad.", "Coran 113:1-5 (sourate Al-Falaq)",
      "Dis : Je cherche protection auprès du Seigneur de l'aube naissante, contre le mal des êtres qu'Il a créés, contre le mal de l'obscurité quand elle s'approfondit, contre le mal de celles qui soufflent sur les nœuds, et contre le mal de l'envieux quand il envie."),
    L("An-Nas", "An-Nas (114) est la dernière sourate du Coran. Elle demande protection auprès du Seigneur, du Souverain et du Dieu des hommes contre le mal du mauvais conseiller (le chuchoteur).",
      Q.mc("Quelle est la dernière sourate du Coran ?", ["An-Nas", "Al-Falaq", "Al-Ikhlas", "Al-Kawthar"], 0, ""),
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", "Qul a'ûdhu bi-rabbi n-nâs. Maliki n-nâs. Ilâhi n-nâs. Min sharri l-waswâsi l-khannâs. Alladhî yuwaswisu fî sudûri n-nâs. Mina l-jinnati wa n-nâs.", "Coran 114:1-6 (sourate An-Nas)",
      "Dis : Je cherche protection auprès du Seigneur des hommes, le Souverain des hommes, Dieu des hommes, contre le mal du mauvais conseiller, furtif, qui souffle le mal dans les poitrines des hommes, qu'il soit djinn ou être humain."),
  ], [
    Q.mc("Quelle est la dernière sourate du Coran ?", ["An-Nas", "Al-Falaq", "Al-Ikhlas", "Al-Kawthar"], 0, ""),
    Q.tf("Ces deux sourates commencent par « Dis : Je cherche protection… ».", true, ""),
    Q.mc("Que signifie « Al-Falaq » ?", ["L'aube naissante", "La nuit", "Le feu", "L'eau"], 0, ""),
    Q.match("Associe.", [["Al-Falaq", "113"], ["An-Nas", "114"], ["Al-Ikhlas", "112"]], ""),
    Q.text("Comment appelle-t-on ensemble Al-Falaq et An-Nas ? (al-Mu'…)", ["awwidhat", "awidhat", "mouawwidhat", "muawwidhat"], "Les mu'awwidhatayn (sourates de protection)."),
  ], "Selon Aïcha (Bukhari 5017), le Prophète ﷺ récitait ces sourates avant de dormir."),
]},
{ n: 15, unit: "Invocations", chapters: [
  ch("c15-invocations", "pratique", "Les invocations du quotidien", ["Bukhari 6312, 6324", "Abu Dawud 3850 ; At-Tirmidhi 3457", "Bukhari 12 (saluer)"], [
    L("Se lever et se coucher", "Le soir : « Bismika Allahumma amûtu wa ahyâ » (C'est en Ton nom, ô Allah, que je meurs et que je vis) (Bukhari 6324). Au réveil : « Al-hamdu lillâhi lladhî ahyânâ ba'da mâ amâtanâ wa ilayhi n-nushûr » (Bukhari 6312).",
      Q.mc("Quelle invocation dit-on au réveil ?", ["Al-hamdu lillâhi lladhî ahyânâ…", "Bismillâh", "Inchallah", "Astaghfirullah"], 0, ""),
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", "Al-hamdu li-llâhi lladhî ahyânâ ba'da mâ amâtanâ wa ilayhi n-nushûr.", "Hadith : Bukhari 6312", "Louange à Allah qui nous a rendus à la vie après nous avoir fait mourir, et c'est vers Lui que sera la résurrection."),
    L("Manger et saluer", "Avant de manger : « Bismillâh ». Après : « Al-hamdu lillâhi lladhî at'amanâ wa saqânâ… » (Abu Dawud 3850). Saluer : « As-salâmu 'alaykum ». Le Prophète ﷺ a cité « nourrir et saluer » comme des actes excellents de l'islam (Bukhari 12). Quand on éternue : « Al-hamdu lillâh », et on répond : « Yarhamuka Llâh ».",
      Q.mc("Que répond-on à quelqu'un qui dit « Al-hamdu lillâh » après un éternuement ?", ["Yarhamuka Llâh", "Bismillâh", "Jazâka Llâhu khayran", "Wa 'alaykum salâm"], 0, "")),
  ], [
    Q.mc("Que dit-on avant de manger ?", ["Bismillâh", "Yarhamuka Llâh", "Allahu akbar", "Subhanallah"], 0, ""),
    Q.tf("Saluer est présenté comme un acte excellent de l'islam.", true, "Bukhari 12."),
    Q.mc("Que signifie « Jazâka Llâhu khayran » ?", ["Qu'Allah te récompense en bien", "Bonne nuit", "Au revoir", "Bienvenue"], 0, ""),
    Q.match("Associe l'invocation à son moment.", [["Bismillâh", "Avant de manger"], ["As-salâmu 'alaykum", "Quand on salue"], ["Yarhamuka Llâh", "Après un éternuement"]], ""),
    Q.text("Comment dit-on « si Allah le veut » ? (In …)", ["shaa", "chaa", "sha", "cha"], "In châ' Allâh."),
  ], "Dans beaucoup de traditions, on appelle ces invocations les « adhkâr » (les rappels)."),
]},
{ n: 16, unit: "Le vendredi et les fêtes", chapters: [
  ch("c16-fetes", "pratique", "Le vendredi et les deux Aïd", ["Coran 62:9-10", "Coran 37:102-107", "Sunan Abu Dawud 1134"], [
    L("La prière du vendredi", "Le vendredi est un jour de rassemblement. Les musulmans écoutent le sermon (khutba) puis prient la prière de Jumu'a à la place de Dhuhr. Coran 62:9 invite à se hâter vers le rappel d'Allah quand l'appel à la prière du vendredi retentit.",
      Q.mc("Quelle prière remplace Dhuhr le vendredi ?", ["Jumu'a", "Fajr", "Maghrib", "Isha"], 0, "")),
    L("Aïd al-Fitr et Aïd al-Adha", "Il y a deux fêtes. L'Aïd al-Fitr marque la fin du Ramadan. L'Aïd al-Adha a lieu le 10 Dhul-Hijja, pendant le pèlerinage, et rappelle l'épreuve d'Ibrahim et de son fils (Coran 37:102-107).",
      Q.mc("Quelle fête marque la fin du Ramadan ?", ["Aïd al-Fitr", "Aïd al-Adha", "Achoura", "Mawlid"], 0, "")),
  ], [
    Q.mc("Quelle fête rappelle l'épreuve d'Ibrahim ?", ["Aïd al-Adha", "Aïd al-Fitr", "Achoura", "Mawlid"], 0, ""),
    Q.tf("La prière de Jumu'a remplace Dhuhr le vendredi.", true, ""),
    Q.mc("Quand a lieu l'Aïd al-Adha ?", ["Le 10 Dhul-Hijja", "Le 1er Ramadan", "Le 1er Mouharram", "Le 27 Rajab"], 0, ""),
    Q.match("Associe.", [["Aïd al-Fitr", "Fin du Ramadan"], ["Aïd al-Adha", "10 Dhul-Hijja"], ["Jumu'a", "Prière du vendredi"]], ""),
    Q.text("Comment appelle-t-on le sermon du vendredi ? (un mot)", ["khutba", "khotba", "khoutba"], "La khutba."),
  ], "Le calendrier musulman est lunaire : les fêtes avancent d'environ 10 à 11 jours chaque année dans le calendrier solaire."),
]},
{ n: 17, unit: "Adam", chapters: [
  ch("c17-adam", "prophetes", "Adam, le premier prophète", ["Coran 2:30-39", "Coran 7:11-25", "Coran 38:71-85"], [
    L("La création d'Adam", "Selon le Coran, Allah annonce aux anges qu'Il va placer un successeur (khalifa) sur terre. Il crée Adam à partir d'argile et lui enseigne les noms. Les anges se prosternent devant Adam sur ordre d'Allah ; Iblis refuse par orgueil.",
      Q.mc("Qui a refusé de se prosterner devant Adam ?", ["Iblis", "Jibril", "Mikaïl", "Israfil"], 0, "Coran 2:34, 7:11-12.")),
    L("Le jardin et la descente sur terre", "Adam et son épouse vivent au Paradis, avec l'interdiction de s'approcher d'un arbre. Ils désobéissent, se repentent, et Allah accepte leur repentir (Coran 2:37). Ils descendent sur terre. Le Coran dit « son épouse » ; le nom Hawwa (Ève) vient de la tradition.",
      Q.tf("Adam s'est repenti et Allah a accepté son repentir.", true, "Coran 2:37.")),
  ], [
    Q.mc("À partir de quoi Adam a-t-il été créé, selon le Coran ?", ["D'argile", "De feu", "De lumière", "D'eau uniquement"], 0, ""),
    Q.tf("Les anges se sont prosternés devant Adam sur ordre d'Allah.", true, ""),
    Q.mc("Pourquoi Iblis a-t-il refusé de se prosterner ?", ["Par orgueil", "Par peur", "Par ignorance", "Par fatigue"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Création d'Adam", "Prosternation des anges", "Vie au Paradis", "Repentir", "Descente sur terre"], ""),
    Q.text("Comment s'appelle le premier prophète ? (un prénom)", ["adam"], "Adam."),
  ], "Le mot « Adam » est lié à la terre (adîm al-ard, la surface de la terre) selon plusieurs explications des savants."),
]},
{ n: 18, unit: "Nouh (Noé)", chapters: [
  ch("c18-nuh", "prophetes", "Nouh (Noé)", ["Coran 71 (Nuh)", "Coran 11:25-49", "Coran 29:14"], [
    L("Un appel patient", "Nouh a appelé son peuple à adorer Allah seul. Le Coran dit qu'il est resté parmi eux « mille ans moins cinquante » (29:14). Il a prêché de jour comme de nuit, en secret et en public (sourate 71), mais peu de gens l'ont cru.",
      Q.mc("Combien de temps Nouh est-il resté parmi son peuple, selon Coran 29:14 ?", ["950 ans", "100 ans", "40 ans", "20 ans"], 0, "« Mille ans moins cinquante ».")),
    L("L'arche et le déluge", "Allah ordonne à Nouh de construire une arche. Quand vient le déluge, Nouh embarque les croyants et un couple de chaque espèce. Son fils refuse d'embarquer et est englouti (Coran 11:42-43). L'arche s'arrête sur le mont Judi (Coran 11:44).",
      Q.tf("Un des fils de Nouh a refusé de monter dans l'arche.", true, "Coran 11:42-43.")),
  ], [
    Q.mc("Que construit Nouh sur l'ordre d'Allah ?", ["Une arche", "Une tour", "Un temple", "Un mur"], 0, ""),
    Q.tf("Nouh a prêché à son peuple pendant des années sans se décourager.", true, ""),
    Q.mc("Comment s'appelle la sourate consacrée à Nouh ?", ["Nuh (71)", "Hud (11)", "Yusuf (12)", "Maryam (19)"], 0, ""),
    Q.mc("Où l'arche s'est-elle posée, selon Coran 11:44 ?", ["Sur le mont Judi", "Sur le Sinaï", "Sur le mont Uhud", "À La Mecque"], 0, ""),
    Q.text("Comment appelle-t-on le grand événement d'eau à l'époque de Nouh ? (le …)", ["deluge", "tufan", "toufan"], "Le déluge (al-Tûfân)."),
  ], "Nouh est l'un des prophètes dits « ulu al-'azm » (doués de fermeté), avec Ibrahim, Moussa, Issa et Muhammad ﷺ."),
]},
{ n: 19, unit: "Ibrahim", chapters: [
  ch("c19-ibrahim", "prophetes", "Ibrahim, l'ami d'Allah", ["Coran 21:51-70", "Coran 37:99-113", "Coran 2:124-129", "Coran 14:35-41"], [
    L("Le combat contre les idoles", "Ibrahim appelle son peuple à délaisser les idoles. Il les brise, à l'exception de la plus grande, pour leur faire comprendre. Son peuple veut le brûler, mais Allah dit au feu : « Ô feu, sois fraîcheur et paix pour Ibrahim » (Coran 21:69).",
      Q.mc("Que dit Allah au feu selon Coran 21:69 ?", ["Sois fraîcheur et paix", "Brûle-le", "Éteins-toi", "Obéis à Namrud"], 0, "")),
    L("Ismaïl, la Kaaba et Zamzam", "Ibrahim installe Hajar et leur fils Ismaïl dans la vallée de La Mecque. Le puits de Zamzam jaillit. Plus tard, Ibrahim et Ismaïl élèvent les fondations de la Kaaba (Coran 2:127). Une épreuve demande à Ibrahim d'immoler son fils ; tous deux se soumettent, et Allah les rachète par un grand sacrifice (Coran 37:102-107).",
      Q.mc("Qui a construit la Kaaba avec Ibrahim ?", ["Ismaïl", "Ishaq", "Yaqub", "Yusuf"], 0, "Coran 2:127.")),
  ], [
    Q.mc("Quel surnom porte Ibrahim ?", ["L'ami d'Allah (Khalîl)", "Le véridique", "Le patient", "L'orateur"], 0, ""),
    Q.tf("Ibrahim a été sauvé du feu par la volonté d'Allah.", true, ""),
    Q.mc("Quel puits a jailli près de la Kaaba ?", ["Zamzam", "Badr", "Uhud", "Hira"], 0, ""),
    Q.match("Associe.", [["Ismaïl", "Fils d'Ibrahim et de Hajar"], ["Hajar", "Mère d'Ismaïl"], ["Zamzam", "Puits de La Mecque"]], ""),
    Q.text("Quelle fête rappelle le sacrifice d'Ibrahim ? (Aïd al-…)", ["adha", "adha"], "L'Aïd al-Adha."),
  ], "Le Coran mentionne le « Maqâm Ibrâhîm » (la station d'Ibrahim) près de la Kaaba, où les pèlerins prient (Coran 2:125)."),
]},
{ n: 20, unit: "Le pèlerinage", chapters: [
  ch("c20-hajj", "pratique", "Le Hajj", ["Coran 3:97", "Coran 2:196-203", "Coran 22:27", "Hadith de Jabir (Muslim 1218)"], [
    L("Le sens du Hajj", "Le Hajj est le pèlerinage à La Mecque, obligatoire une fois dans la vie pour celui qui en a la capacité (Coran 3:97). Il a lieu à des dates précises du mois de Dhul-Hijja. Le pèlerin entre en état de sacralisation (ihram) et porte un vêtement simple.",
      Q.mc("Quand le Hajj est-il obligatoire ?", ["Une fois dans la vie, si on en a la capacité", "Tous les ans", "Seulement pour les imams", "Tous les mois"], 0, "")),
    L("Les grandes étapes", "Tawaf autour de la Kaaba, sa'i entre Safa et Marwa, station à Arafat le 9 Dhul-Hijja (le moment central), nuit à Muzdalifa, lapidation des stèles à Mina, sacrifice, et tawaf final. La omra est un petit pèlerinage qui peut se faire toute l'année.",
      Q.mc("Quel est le moment central du Hajj ?", ["La station à Arafat", "Le sa'i", "La nuit à Mina", "La prière à Médine"], 0, "")),
  ], [
    Q.mc("Quel est le moment central du Hajj ?", ["La station à Arafat", "Le sa'i", "La nuit à Mina", "La prière à Médine"], 0, ""),
    Q.tf("Le Hajj est obligatoire chaque année.", false, "Une fois dans la vie, pour qui en a la capacité."),
    Q.order("Remets ces étapes du Hajj dans l'ordre.", ["Ihram", "Tawaf", "Station à Arafat", "Nuit à Muzdalifa", "Lapidation à Mina"], "Déroulement simplifié."),
    Q.match("Associe.", [["Tawaf", "Tours autour de la Kaaba"], ["Sa'i", "Aller-retour Safa et Marwa"], ["Ihram", "État de sacralisation"]], ""),
    Q.text("Comment appelle-t-on le petit pèlerinage ? (un mot)", ["omra", "umra", "oumra"], "La omra."),
  ], "À Arafat, le pèlerin se tient debout en invocation : un hadith dit « Le Hajj, c'est Arafa » (Abu Dawud 1949)."),
]},

{ n: 21, unit: "L'appel public", chapters: [
  ch("c21-appel", "histoire", "L'appel public", ["Coran 26:214", "Coran 15:94", "Bukhari 4770 ; Muslim 208", "Coran 111 (Al-Masad)"], [
    L("Au mont Safa", "Après trois ans d'appel discret, Allah ordonne : « Avertis les plus proches de tes parents » (Coran 26:214). Le Prophète ﷺ monte sur le mont Safa, appelle les Quraysh et leur demande s'ils le croiraient s'il annonçait une armée derrière la colline. Ils répondent oui. Il les avertit alors d'un châtiment sévère (Bukhari 4770).",
      Q.mc("Sur quel mont le Prophète ﷺ a-t-il lancé son appel public ?", ["Safa", "Uhud", "Nour", "Arafat"], 0, "")),
    L("Le refus et la protection", "Abu Lahab, un oncle du Prophète ﷺ, s'oppose violemment à lui : la sourate Al-Masad (111) lui est consacrée. Abu Talib, un autre oncle, n'embrasse pas l'islam mais protège son neveu.",
      Q.tf("Abu Talib a protégé le Prophète ﷺ sans embrasser l'islam.", true, "Selon la Sîra.")),
  ], [
    Q.mc("Quel verset ordonne d'avertir les proches ?", ["Coran 26:214", "Coran 1:1", "Coran 112:1", "Coran 2:255"], 0, ""),
    Q.mc("Quel oncle s'est violemment opposé au Prophète ﷺ ?", ["Abu Lahab", "Abu Talib", "Hamza", "Abbas"], 0, ""),
    Q.tf("Les Quraysh connaissaient le Prophète ﷺ comme quelqu'un de véridique.", true, "Ils ont répondu oui à sa question."),
    Q.order("Remets dans l'ordre.", ["Appel discret", "Ordre d'avertir les proches", "Appel sur le mont Safa", "Opposition des Quraysh"], ""),
    Q.text("Quelle sourate parle d'Abu Lahab ? (Al-…)", ["masad", "lahab"], "Al-Masad (111)."),
  ], "La réponse d'Abu Lahab, « Que tu périsses ! », est citée dans les récits liés à la révélation de la sourate Al-Masad."),
]},
{ n: 22, unit: "Épreuves et patience", chapters: [
  ch("c22-epreuves", "histoire", "Les épreuves des premiers musulmans", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
    L("Le prix de la foi", "Plusieurs musulmans sans protection tribale ont été persécutés. Bilal est torturé par son maître Umayya ibn Khalaf et répète « Ahad, Ahad » (Un, Unique). Sumayya bint Khubbat, épouse de Yasir et mère d'Ammar, est considérée comme la première martyre de l'islam.",
      Q.mc("Quelle parole répétait Bilal sous la torture ?", ["Ahad, Ahad", "Allahu akbar", "Subhanallah", "Salam"], 0, "")),
    L("Patience et soutien", "Le Prophète ﷺ encourageait les croyants à la patience. Abu Bakr a racheté et libéré plusieurs esclaves musulmans, dont Bilal. Le Coran rappelle que la foi est mise à l'épreuve (Coran 29:2-3).",
      Q.mc("Qui a acheté la liberté de Bilal ?", ["Abu Bakr", "Umar", "Ali", "Uthman"], 0, "")),
  ], [
    Q.mc("Qui a acheté la liberté de Bilal ?", ["Abu Bakr", "Umar", "Ali", "Uthman"], 0, ""),
    Q.tf("Sumayya est considérée comme la première martyre de l'islam.", true, ""),
    Q.mc("Qui était Ammar ibn Yasir ?", ["Un compagnon, fils de Sumayya et Yasir", "Un chef de Quraysh", "Un oncle du Prophète ﷺ", "Un moine"], 0, ""),
    Q.match("Associe.", [["Bilal", "Affranchi par Abu Bakr"], ["Sumayya", "Première martyre"], ["Umayya ibn Khalaf", "Maître de Bilal, hostile à l'islam"]], ""),
    Q.text("Quel verset du Coran rappelle que la foi est mise à l'épreuve ? (Coran 29:…)", ["2", "3"], "Coran 29:2-3."),
  ], "« Ahad, Ahad » : Bilal répétait ce mot qui signifie « Un, Unique » pour dire qu'Allah est Un."),
]},
{ n: 23, unit: "Bilal", chapters: [
  ch("c23-bilal", "compagnons", "Bilal ibn Rabah", ["Sîra d'Ibn Hichâm", "Bukhari 1149 ; Muslim 2458"], [
    L("De l'esclavage à l'honneur", "Bilal ibn Rabah était d'origine abyssine et esclave à La Mecque. Il a embrassé l'islam très tôt, a été affranchi par Abu Bakr, et est devenu l'un des compagnons les plus proches du Prophète ﷺ.",
      Q.mc("Quelle est l'origine de Bilal ?", ["Abyssine", "Persane", "Romaine", "Égyptienne"], 0, "")),
    L("Le premier muezzin", "À Médine, Bilal est le premier à avoir appelé à la prière (adhan). La Sîra rapporte aussi qu'il a fait l'adhan sur la Kaaba lors de la conquête de La Mecque. Le Prophète ﷺ lui a dit avoir entendu le bruit de ses sandales devant lui au Paradis (Bukhari 1149).",
      Q.mc("Quel rôle a eu Bilal à Médine ?", ["Premier muezzin", "Gouverneur", "Juge", "Chef d'armée"], 0, "")),
  ], [
    Q.mc("Quel rôle a eu Bilal à Médine ?", ["Premier muezzin", "Gouverneur", "Juge", "Chef d'armée"], 0, ""),
    Q.tf("Bilal était d'origine abyssine.", true, ""),
    Q.mc("Qui a affranchi Bilal ?", ["Abu Bakr", "Umar", "Ali", "Khalid"], 0, ""),
    Q.match("Associe.", [["Bilal", "Premier muezzin"], ["Abu Bakr", "L'a affranchi"], ["Umayya ibn Khalaf", "Son ancien maître"]], ""),
    Q.text("Comment appelle-t-on celui qui lance l'appel à la prière ? (un mot)", ["muezzin", "mouadhin", "muadhin", "mu'adhdhin"], "Le muezzin."),
  ], "La tradition dit que la voix de Bilal était particulièrement belle et puissante."),
]},
{ n: 24, unit: "Abyssinie", chapters: [
  ch("c24-abyssinie", "histoire", "L'émigration en Abyssinie", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
    L("Chercher la sécurité", "Face aux persécutions, le Prophète ﷺ conseille à des musulmans de partir vers l'Abyssinie (actuelle Éthiopie), où règne un roi juste, le Négus (an-Najashi). Un premier petit groupe part vers l'an 5 de la mission prophétique, puis un second, plus nombreux.",
      Q.mc("Vers quel pays des musulmans ont-ils émigré en premier ?", ["L'Abyssinie", "Médine", "La Syrie", "L'Égypte"], 0, "")),
    L("Devant le Négus", "Les Quraysh envoient des émissaires pour ramener les émigrés. Ja'far ibn Abi Talib prend la parole devant le Négus et récite des versets de la sourate Maryam. Touché, le Négus refuse de les livrer (récit rapporté dans la Sîra et le Musnad d'Ahmad).",
      Q.mc("Qui a parlé devant le Négus au nom des musulmans ?", ["Ja'far ibn Abi Talib", "Abu Bakr", "Umar", "Hamza"], 0, "")),
  ], [
    Q.mc("Comment appelle-t-on le roi d'Abyssinie à cette époque ?", ["Le Négus (an-Najashi)", "Le Calife", "Le Pharaon", "Le César"], 0, ""),
    Q.tf("Les musulmans ont d'abord émigré à Médine.", false, "D'abord en Abyssinie, puis à Médine (l'Hégire)."),
    Q.mc("Quelle sourate Ja'far a-t-il récitée ?", ["Maryam", "Al-Baqara", "Al-Ikhlas", "Yusuf"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Persécutions à La Mecque", "Première émigration en Abyssinie", "Envoyés des Quraysh chez le Négus", "Le Négus protège les musulmans"], ""),
    Q.text("Dans quel pays actuel se trouve l'ancienne Abyssinie ? (un mot)", ["ethiopie", "éthiopie"], "L'Éthiopie (et la région)."),
  ], "C'est la première « hijra » de l'histoire de l'islam : elle précède l'Hégire vers Médine."),
]},
{ n: 25, unit: "Hamza et Umar", chapters: [
  ch("c25-hamza-umar", "histoire", "Hamza et Umar rejoignent l'islam", ["Sîra d'Ibn Hichâm", "At-Tirmidhi 3681"], [
    L("Hamza, le lion d'Allah", "Hamza ibn Abd al-Muttalib, oncle et frère de lait du Prophète ﷺ, était un homme fort et respecté. Il embrasse l'islam vers l'an 6 de la mission, après avoir appris qu'Abu Jahl avait insulté le Prophète ﷺ. Il sera surnommé « Lion d'Allah ».",
      Q.mc("Quel lien de parenté unit Hamza au Prophète ﷺ ?", ["Son oncle", "Son cousin germain", "Son grand-père", "Son fils"], 0, "")),
    L("Umar ibn al-Khattab", "Umar, connu pour sa force et son caractère, était d'abord très hostile à l'islam. Sa conversion est racontée dans la Sîra. Après son entrée dans l'islam, les musulmans ont pu prier plus ouvertement près de la Kaaba. Un hadith rapporte que le Prophète ﷺ avait demandé à Allah de fortifier l'islam par l'un des deux Umar (At-Tirmidhi 3681).",
      Q.tf("Umar était d'abord hostile à l'islam.", true, "Selon la Sîra.")),
  ], [
    Q.mc("Quel surnom porte Hamza ?", ["Lion d'Allah", "Épée d'Allah", "Le Véridique", "Le Discernant"], 0, ""),
    Q.mc("Quel est le nom de famille (père) d'Umar ?", ["Al-Khattab", "Abu Quhafa", "Affan", "Abu Talib"], 0, ""),
    Q.tf("Après la conversion d'Umar, les musulmans ont prié plus ouvertement.", true, ""),
    Q.match("Associe.", [["Hamza", "Lion d'Allah"], ["Umar", "Fils d'al-Khattab"], ["Abu Jahl", "Ennemi de l'islam à La Mecque"]], ""),
    Q.text("Quel oncle du Prophète ﷺ est surnommé « Lion d'Allah » ? (un prénom)", ["hamza"], "Hamza."),
  ], "Umar est le deuxième calife de l'islam ; Hamza sera martyr à Uhud."),
]},
{ n: 26, unit: "L'année de la tristesse", chapters: [
  ch("c26-tristesse", "histoire", "Le boycott et l'année de la tristesse", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
    L("Le boycott", "Les Quraysh décident de boycotter les clans de Banu Hashim et Banu al-Muttalib, qui protégeaient le Prophète ﷺ : plus de mariage ni d'échange avec eux. Les familles se retirent dans le quartier d'Abu Talib (Shi'b Abi Talib) pendant environ trois ans, dans de grandes difficultés.",
      Q.mc("Combien de temps a duré environ le boycott ?", ["Trois ans", "Trois jours", "Dix ans", "Un mois"], 0, "")),
    L("Deux grandes pertes", "Peu après la fin du boycott, vers l'an 10 de la mission, décèdent Abu Talib, son protecteur, puis Khadija, son soutien. On appelle cette période « l'année de la tristesse » (Am al-Huzn).",
      Q.mc("Quelles deux personnes sont décédées durant l'année de la tristesse ?", ["Abu Talib et Khadija", "Abu Bakr et Umar", "Hamza et Bilal", "Ali et Fatima"], 0, "")),
  ], [
    Q.mc("Comment appelle-t-on l'année du décès d'Abu Talib et Khadija ?", ["L'année de la tristesse", "L'année de l'Éléphant", "L'année de la délégation", "L'année du deuil divin"], 0, ""),
    Q.tf("Le boycott visait les clans qui protégeaient le Prophète ﷺ.", true, ""),
    Q.mc("Comment s'appelle le quartier où les familles se sont retirées ?", ["Shi'b Abi Talib", "Safa", "Mina", "Quba"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Appel public", "Boycott des clans", "Fin du boycott", "Décès d'Abu Talib et Khadija"], ""),
    Q.text("En arabe, comment dit-on « année de la tristesse » ? (Am al-…)", ["huzn", "houzn"], "Am al-Huzn."),
  ], "Malgré la tristesse, le Prophète ﷺ continue son appel : c'est juste après qu'il se rend à Taïf."),
]},
{ n: 27, unit: "Taïf", chapters: [
  ch("c27-taif", "histoire", "Le voyage à Taïf", ["Bukhari 3231 ; Muslim 1795", "Sîra d'Ibn Hichâm"], [
    L("Chercher un soutien", "Après la mort d'Abu Talib, le Prophète ﷺ se rend à Taïf, à environ 80 km de La Mecque, pour appeler les chefs de Thaqif à l'islam. Ils refusent, se moquent de lui et envoient des gens lui jeter des pierres.",
      Q.mc("Dans quelle ville le Prophète ﷺ s'est-il rendu après la mort d'Abu Talib ?", ["Taïf", "Médine", "Damas", "Jérusalem"], 0, "")),
    L("Une réponse pleine de miséricorde", "Aïcha lui demande quel fut le jour le plus dur. Il évoque ce jour-là. L'ange des montagnes lui propose d'écraser la ville entre deux montagnes ; le Prophète ﷺ refuse et espère que, parmi leurs descendants, naîtront des gens qui adoreront Allah seul (Bukhari 3231).",
      Q.tf("Le Prophète ﷺ a refusé que la ville de Taïf soit détruite.", true, "Bukhari 3231.")),
  ], [
    Q.mc("Comment le Prophète ﷺ a-t-il réagi à la proposition de l'ange des montagnes ?", ["Il a refusé la destruction", "Il a accepté", "Il est resté silencieux", "Il a demandé du temps"], 0, ""),
    Q.tf("Le peuple de Taïf a bien accueilli le Prophète ﷺ.", false, "Il a été rejeté."),
    Q.mc("Qui a interrogé le Prophète ﷺ sur son jour le plus dur ?", ["Aïcha", "Khadija", "Fatima", "Hafsa"], 0, ""),
    Q.match("Associe.", [["Taïf", "Ville à environ 80 km de La Mecque"], ["Thaqif", "Tribu de Taïf"], ["Aïcha", "Épouse qui a posé la question"]], ""),
    Q.text("Quel mot décrit l'attitude du Prophète ﷺ : la … (envers ceux qui l'ont rejeté)", ["misericorde", "miséricorde", "clemence", "clémence", "patience", "pardon"], "La miséricorde."),
  ], "Le Coran décrit le Prophète ﷺ comme « une miséricorde pour les mondes » (Coran 21:107)."),
]},
{ n: 28, unit: "Isra et Mi'raj", chapters: [
  ch("c28-isra", "histoire", "Le voyage nocturne et l'ascension", ["Coran 17:1", "Coran 53:1-18", "Bukhari 349 ; Muslim 162"], [
    L("Le voyage nocturne (Isra)", "Coran 17:1 évoque le voyage nocturne du Prophète ﷺ, de la Mosquée sacrée (La Mecque) à la Mosquée lointaine (Al-Aqsa, à Jérusalem). C'est un miracle d'Allah.",
      Q.mc("Vers quel lieu le Prophète ﷺ a-t-il voyagé de nuit ?", ["Al-Aqsa (Jérusalem)", "Médine", "Taïf", "Damas"], 0, "Coran 17:1.")),
    L("L'ascension (Mi'raj) et la prière", "Selon les hadiths authentiques (Bukhari 349, Muslim 162), le Prophète ﷺ est ensuite monté à travers les cieux. C'est à cette occasion que la prière a été prescrite : cinquante au départ, réduites à cinq en nombre, avec la récompense de cinquante.",
      Q.mc("Quel acte d'adoration a été prescrit lors du Mi'raj ?", ["La prière (cinq par jour)", "Le jeûne", "La zakat", "Le Hajj"], 0, "")),
  ], [
    Q.mc("Quel verset mentionne le voyage nocturne ?", ["Coran 17:1", "Coran 112:1", "Coran 2:255", "Coran 1:1"], 0, ""),
    Q.tf("La prière a été prescrite à l'occasion du Mi'raj.", true, ""),
    Q.mc("Comment appelle-t-on le voyage nocturne ?", ["Isra", "Hijra", "Umra", "Ghazwa"], 0, ""),
    Q.match("Associe.", [["Isra", "Voyage de nuit vers Al-Aqsa"], ["Mi'raj", "Ascension à travers les cieux"], ["Al-Aqsa", "Mosquée lointaine"]], ""),
    Q.text("Combien de prières par jour ont finalement été prescrites ? (un chiffre)", ["5", "cinq"], "Cinq."),
  ], "Avant la Kaaba, les musulmans priaient en direction de Jérusalem pendant un temps, puis la qibla a changé à Médine."),
]},
{ n: 29, unit: "Les pactes d'Aqaba", chapters: [
  ch("c29-aqaba", "histoire", "Les pactes d'Aqaba", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
    L("Des gens de Yathrib", "Pendant le pèlerinage, le Prophète ﷺ rencontre des gens de Yathrib (Médine), de la tribu des Khazraj. Ils croient et, l'année suivante, reviennent en plus grand nombre. Ils prêtent serment de fidélité : c'est le premier pacte d'Aqaba.",
      Q.mc("De quelle ville venaient ces croyants ?", ["Yathrib (Médine)", "Taïf", "Damas", "Jérusalem"], 0, "")),
    L("Le second pacte", "L'année suivante, environ 73 hommes et 2 femmes de Yathrib s'engagent à protéger le Prophète ﷺ comme ils protègent leur propre famille. Mus'ab ibn Umayr avait été envoyé pour leur enseigner le Coran. Ces pactes préparent l'Hégire.",
      Q.mc("Qui a été envoyé à Yathrib pour enseigner le Coran ?", ["Mus'ab ibn Umayr", "Bilal", "Abu Bakr", "Hamza"], 0, "")),
  ], [
    Q.mc("Qui a été envoyé à Yathrib pour enseigner ?", ["Mus'ab ibn Umayr", "Bilal", "Abu Bakr", "Hamza"], 0, ""),
    Q.tf("Les pactes d'Aqaba ont préparé l'Hégire.", true, ""),
    Q.mc("Quelles deux tribus vivaient à Yathrib ?", ["Aws et Khazraj", "Quraysh et Thaqif", "Ghassan et Lakhm", "Hashim et Umayya"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Rencontre pendant le pèlerinage", "Premier pacte d'Aqaba", "Envoi de Mus'ab", "Second pacte d'Aqaba"], ""),
    Q.text("Comment appelle-t-on les gens de Médine qui ont soutenu les musulmans ? (les …)", ["ansar", "ansars", "ansâr"], "Les Ansar (les auxiliaires)."),
  ], "Médine s'appelait Yathrib avant l'arrivée du Prophète ﷺ."),
]},
{ n: 30, unit: "L'Hégire", chapters: [
  ch("c30-hijra", "histoire", "L'Hégire", ["Coran 9:40", "Coran 8:30", "Sîra d'Ibn Hichâm", "Bukhari 3905 (récit de l'Hégire)"], [
    L("Le départ", "Les Quraysh complotent contre le Prophète ﷺ. Il quitte La Mecque avec Abu Bakr en 622. Ali dort dans son lit pour tromper les poursuivants. Ils se cachent trois jours dans la grotte de Thawr ; Coran 9:40 évoque ce moment : « Ne t'afflige pas, Allah est avec nous. »",
      Q.mc("Dans quelle grotte le Prophète ﷺ et Abu Bakr se sont-ils cachés ?", ["Thawr", "Hira", "Uhud", "Badr"], 0, "")),
    L("L'arrivée", "Le Prophète ﷺ passe par Quba, où est fondée la première mosquée de l'islam, puis entre à Médine, accueilli avec joie. L'année de l'Hégire devient plus tard le point de départ du calendrier musulman (Hijri), sous le calife Umar.",
      Q.mc("Quel événement marque le début du calendrier hégirien ?", ["L'Hégire", "La naissance du Prophète ﷺ", "La première révélation", "La conquête de La Mecque"], 0, "")),
  ], [
    Q.mc("Qui accompagne le Prophète ﷺ dans l'Hégire ?", ["Abu Bakr", "Umar", "Bilal", "Hamza"], 0, ""),
    Q.tf("Ali a dormi dans le lit du Prophète ﷺ la nuit du départ.", true, ""),
    Q.mc("Quelle est la première mosquée fondée lors de l'arrivée ?", ["Quba", "Al-Aqsa", "La Mosquée sacrée", "Masjid al-Nabawi"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Complot des Quraysh", "Départ avec Abu Bakr", "Trois jours dans la grotte de Thawr", "Mosquée de Quba", "Arrivée à Médine"], ""),
    Q.text("En quelle année (grégorienne) a eu lieu l'Hégire ? (3 chiffres)", ["622"], "622."),
  ], "La distance entre La Mecque et Médine est d'environ 450 km : le voyage a été fait en prenant des routes détournées."),
]},

{ n: 31, unit: "Médine", chapters: [
  ch("c31-medine", "histoire", "L'arrivée à Médine", ["Sîra d'Ibn Hichâm", "Ar-Rahîq al-Makhtoum (Al-Moubarakpouri)"], [
    L("Une ville qui accueille", "À Médine, la chamelle du Prophète ﷺ s'agenouille à un endroit qui deviendra l'emplacement de sa mosquée. Il est hébergé chez Abu Ayyub al-Ansari pendant la construction. Yathrib prend le nom de « Madinat an-Nabi », la ville du Prophète, puis Al-Madina.",
      Q.mc("Qui a hébergé le Prophète ﷺ à son arrivée ?", ["Abu Ayyub al-Ansari", "Abu Bakr", "Umar", "Bilal"], 0, "")),
    L("La mosquée du Prophète", "Les musulmans, Prophète ﷺ compris, construisent la mosquée avec des briques de terre et des troncs de palmier. Elle sert à la prière, à l'enseignement et aux réunions. La Sîra mentionne aussi un texte organisant la vie commune à Médine (Sahifat al-Madina).",
      Q.mc("Avec quoi la première mosquée a-t-elle été construite ?", ["Briques de terre et troncs de palmier", "Marbre", "Or", "Pierre taillée"], 0, "")),
  ], [
    Q.mc("Comment s'appelle la mosquée construite à Médine ?", ["Mosquée du Prophète (Al-Masjid an-Nabawi)", "Quba", "Al-Aqsa", "Masjid al-Haram"], 0, ""),
    Q.tf("La mosquée servait uniquement à prier.", false, "Aussi pour enseigner et se réunir."),
    Q.mc("Comment s'appelait la ville avant le Prophète ﷺ ?", ["Yathrib", "Taïf", "Damas", "Aksoum"], 0, ""),
    Q.match("Associe.", [["Abu Ayyub", "A hébergé le Prophète ﷺ"], ["Quba", "Première mosquée"], ["Médine", "Ancienne Yathrib"]], ""),
    Q.text("Avec quel arbre les troncs de la mosquée étaient-ils faits ? (un mot)", ["palmier", "dattier"], "Le palmier."),
  ], "Le Prophète ﷺ a participé lui-même à la construction de la mosquée en portant des briques."),
]},
{ n: 32, unit: "La fraternité", chapters: [
  ch("c32-fraternite", "histoire", "Muhajirun et Ansar : la fraternité", ["Coran 59:8-9", "Bukhari 3780 (Abd ar-Rahman et Sa'd)"], [
    L("Deux groupes, un lien", "Les Muhajirun sont les émigrés de La Mecque, les Ansar sont les habitants de Médine qui les accueillent. Le Prophète ﷺ établit un lien de fraternité entre eux. Coran 59:9 loue les Ansar qui préfèrent les autres à eux-mêmes même dans le besoin.",
      Q.mc("Qui sont les Ansar ?", ["Les habitants de Médine qui ont accueilli les émigrés", "Les émigrés de La Mecque", "Les ennemis de Quraysh", "Les Abyssins"], 0, "")),
    L("Un exemple de générosité", "Sa'd ibn ar-Rabi' propose à Abd ar-Rahman ibn Awf, son frère de pacte, la moitié de sa fortune. Abd ar-Rahman refuse et demande seulement où se trouve le marché : il y fera du commerce (Bukhari 3780).",
      Q.tf("Abd ar-Rahman a accepté la moitié de la fortune de Sa'd.", false, "Il a demandé le chemin du marché.")),
  ], [
    Q.mc("Qui sont les Muhajirun ?", ["Les émigrés de La Mecque", "Les habitants de Médine", "Les Abyssins", "Les juifs de Khaybar"], 0, ""),
    Q.tf("Le Prophète ﷺ a créé un lien de fraternité entre Muhajirun et Ansar.", true, ""),
    Q.mc("Qu'a demandé Abd ar-Rahman à Sa'd ?", ["Où est le marché", "Sa maison", "Son cheval", "Un prêt"], 0, ""),
    Q.match("Associe.", [["Muhajirun", "Émigrés de La Mecque"], ["Ansar", "Hôtes de Médine"], ["Abd ar-Rahman ibn Awf", "Commerçant, compagnon"]], ""),
    Q.text("Quel mot arabe désigne « l'émigration » ? (un mot)", ["hijra", "hijrah", "hegire", "hégire"], "La hijra."),
  ], "Abd ar-Rahman ibn Awf est devenu l'un des compagnons les plus riches grâce au commerce, et très généreux."),
]},
{ n: 33, unit: "L'adhan et la qibla", chapters: [
  ch("c33-adhan", "pratique", "L'appel à la prière et la qibla", ["Coran 2:142-150", "Abu Dawud 499 (Abdallah ibn Zayd)", "Bukhari 40 (changement de qibla)"], [
    L("L'appel à la prière", "À Médine, on cherche un moyen d'appeler les gens à la prière. Abdallah ibn Zayd voit l'adhan en rêve ; le Prophète ﷺ valide son récit, et Bilal, à la belle voix, est chargé de le lancer (Abu Dawud 499).",
      Q.mc("Qui a été chargé de lancer l'adhan ?", ["Bilal", "Umar", "Ali", "Abu Bakr"], 0, "")),
    L("Vers la Kaaba", "Au début, les musulmans priaient vers Jérusalem. Environ 16 à 17 mois après l'arrivée à Médine, Coran 2:144 ordonne de se tourner vers la Mosquée sacrée : c'est le changement de qibla (Bukhari 40).",
      Q.mc("Vers où les musulmans priaient-ils au début ?", ["Jérusalem", "La Kaaba", "Taïf", "Le nord de l'Arabie"], 0, "")),
  ], [
    Q.mc("Vers quoi se tournent les musulmans pour prier ?", ["La Kaaba", "Jérusalem", "Médine", "Le soleil levant"], 0, ""),
    Q.tf("Le changement de qibla est mentionné dans le Coran.", true, "Coran 2:144."),
    Q.mc("Quel nom porte la direction de prière ?", ["Qibla", "Sujud", "Rukou'", "Saf"], 0, ""),
    Q.match("Associe.", [["Adhan", "Appel à la prière"], ["Qibla", "Direction de prière"], ["Muezzin", "Celui qui appelle"]], ""),
    Q.text("Comment dit-on « la prière » en arabe ? (un mot)", ["salat", "salah", "salât"], "La salat."),
  ], "Une mosquée avec deux qiblas : la mosquée des Deux Qiblas (Masjid al-Qiblatayn) à Médine commémore le changement."),
]},
{ n: 34, unit: "Badr", chapters: [
  ch("c34-badr", "histoire", "La bataille de Badr", ["Coran 3:123", "Coran 8:5-19", "Sîra d'Ibn Hichâm"], [
    L("Le contexte", "En l'an 2 de l'Hégire, le 17 Ramadan, les musulmans affrontent les Quraysh près des puits de Badr. Les musulmans étaient environ 313, face à environ 1000 hommes, selon les récits de la Sîra.",
      Q.mc("En quelle année de l'Hégire a eu lieu Badr ?", ["L'an 2", "L'an 1", "L'an 5", "L'an 8"], 0, "")),
    L("Le résultat", "Les musulmans remportent la bataille malgré leur infériorité numérique. Le Coran la rappelle : « Allah vous a déjà donné la victoire à Badr alors que vous étiez humbles » (Coran 3:123). Plusieurs chefs de Quraysh, dont Abu Jahl, y trouvent la mort.",
      Q.tf("Les musulmans étaient moins nombreux que l'armée des Quraysh.", true, "")),
  ], [
    Q.mc("Combien de musulmans environ à Badr ?", ["313", "1000", "3000", "10 000"], 0, ""),
    Q.tf("La bataille de Badr a eu lieu pendant le mois de Ramadan.", true, ""),
    Q.mc("Quel verset rappelle la victoire de Badr ?", ["Coran 3:123", "Coran 1:1", "Coran 112:1", "Coran 2:255"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Naissance du Prophète ﷺ", "Hégire", "Bataille de Badr", "Bataille d'Uhud"], ""),
    Q.text("Quel chef de Quraysh est mort à Badr ? (Abu …)", ["jahl"], "Abu Jahl."),
  ], "On appelle Badr « Yawm al-Furqan » (le jour du discernement) : Coran 8:41."),
]},
{ n: 35, unit: "Uhud", chapters: [
  ch("c35-uhud", "histoire", "La bataille d'Uhud", ["Coran 3:121-175", "Sîra d'Ibn Hichâm"], [
    L("Les archers", "En l'an 3 de l'Hégire, les Quraysh reviennent pour venger Badr. Le Prophète ﷺ place des archers sur une colline avec l'ordre de ne pas quitter leur poste. La bataille tourne d'abord en faveur des musulmans.",
      Q.mc("Que devaient faire les archers ?", ["Ne pas quitter leur poste", "Attaquer en premier", "Se retirer", "Garder les prisonniers"], 0, "")),
    L("Le revers", "Voyant le butin, une partie des archers quitte la colline contre l'ordre. La cavalerie de Quraysh contourne et frappe. Les musulmans subissent des pertes, dont Hamza, le « lion d'Allah ». Le Coran (sourate 3) tire des leçons de cette épreuve : obéissance, patience, confiance en Allah.",
      Q.tf("Hamza est tombé en martyr à Uhud.", true, "")),
  ], [
    Q.mc("Quel oncle du Prophète ﷺ est tombé à Uhud ?", ["Hamza", "Abu Talib", "Abbas", "Abu Lahab"], 0, ""),
    Q.tf("Les archers ont respecté leur consigne jusqu'au bout.", false, "Une partie a quitté son poste."),
    Q.mc("Quelle leçon principale retient-on d'Uhud ?", ["Obéissance et patience", "Il faut éviter tout combat", "La victoire est toujours facile", "Le butin avant tout"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Badr", "Uhud", "Bataille du Fossé", "Conquête de La Mecque"], ""),
    Q.text("Quel lieu près de Médine donne son nom à cette bataille ? (Mont …)", ["uhud", "ohod"], "Uhud."),
  ], "Le mont Uhud est à quelques kilomètres de la mosquée du Prophète ﷺ à Médine."),
]},
{ n: 36, unit: "Le Fossé", chapters: [
  ch("c36-khandaq", "histoire", "La bataille du Fossé", ["Coran 33:9-25 (Al-Ahzab)", "Sîra d'Ibn Hichâm"], [
    L("Creuser pour se protéger", "En l'an 5 de l'Hégire, une coalition (ahzab) de plusieurs tribus marche sur Médine avec environ 10 000 hommes. Sur le conseil de Salman al-Farisi, les musulmans creusent un fossé au nord de la ville, une technique de défense inconnue des Arabes.",
      Q.mc("Qui a proposé de creuser un fossé ?", ["Salman al-Farisi", "Umar", "Khalid", "Bilal"], 0, "")),
    L("Le vent et le retrait", "Les assiégeants ne parviennent pas à franchir le fossé. Des dissensions apparaissent entre eux, et un vent violent et froid les disperse (Coran 33:9). Ils lèvent le siège.",
      Q.tf("Les coalisés ont réussi à franchir le fossé.", false, "Ils ont échoué et se sont retirés.")),
  ], [
    Q.mc("De quel pays venait Salman al-Farisi, à l'origine ?", ["La Perse", "Rome", "L'Égypte", "L'Abyssinie"], 0, "Al-Farisi signifie « le Persan »."),
    Q.tf("La bataille du Fossé s'appelle aussi la bataille des Coalisés (Ahzab).", true, ""),
    Q.mc("Quelle sourate évoque cet épisode ?", ["Al-Ahzab (33)", "Al-Fil (105)", "Al-Masad (111)", "Al-Kawthar (108)"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Arrivée de la coalition", "Creusement du fossé", "Siège de Médine", "Retrait des coalisés"], ""),
    Q.text("Comment dit-on « fossé » en arabe ? (Al-…)", ["khandaq", "khandak"], "Al-Khandaq."),
  ], "Le Prophète ﷺ a participé au creusement et a porté de la terre comme les autres."),
]},
{ n: 37, unit: "Hudaybiya", chapters: [
  ch("c37-hudaybiya", "histoire", "Le traité de Hudaybiya", ["Coran 48:1, 48:18 (Al-Fath)", "Bukhari 4844", "Sîra d'Ibn Hichâm"], [
    L("Vers La Mecque, sans armes", "En l'an 6 de l'Hégire, le Prophète ﷺ part avec environ 1400 compagnons pour accomplir la omra. Les Quraysh les empêchent d'entrer à La Mecque. Ils campent à Hudaybiya, près de La Mecque.",
      Q.mc("Pourquoi le Prophète ﷺ part-il pour La Mecque ?", ["Pour accomplir la omra", "Pour faire la guerre", "Pour commercer", "Pour chercher un refuge"], 0, "")),
    L("Un traité surprenant", "Un accord est conclu : trêve d'environ dix ans, les musulmans reviendront l'année suivante. Certains compagnons sont déçus, mais Allah qualifie ce traité de « victoire éclatante » (Coran 48:1). Il ouvre la voie à une large diffusion de l'islam.",
      Q.tf("Le traité de Hudaybiya a été appelé une victoire éclatante dans le Coran.", true, "Coran 48:1, sourate Al-Fath.")),
  ], [
    Q.mc("Combien de temps devait durer la trêve ?", ["Environ dix ans", "Un mois", "Un an", "Cent ans"], 0, ""),
    Q.tf("Les musulmans ont pu entrer à La Mecque cette année-là.", false, "Ils sont revenus l'année suivante."),
    Q.mc("Quelle sourate évoque cet événement ?", ["Al-Fath (48)", "Al-Masad (111)", "Al-Fil (105)", "Al-Asr (103)"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Départ pour la omra", "Campement à Hudaybiya", "Signature du traité", "Retour à Médine"], ""),
    Q.text("Comment appelle-t-on le serment sous l'arbre (Bay'at ar-…) ?", ["ridwan", "ridouane", "radwan"], "Bay'at ar-Ridwan (Coran 48:18)."),
  ], "Après Hudaybiya, pendant la trêve, beaucoup plus de personnes sont entrées dans l'islam que pendant des années de conflits."),
]},
{ n: 38, unit: "La conquête", chapters: [
  ch("c38-conquete", "histoire", "La conquête de La Mecque", ["Bukhari 4287 ; Muslim 1780", "Coran 17:81", "Sîra d'Ibn Hichâm"], [
    L("Une entrée presque sans combat", "En l'an 8 de l'Hégire, les Quraysh rompent le traité de Hudaybiya. Le Prophète ﷺ marche sur La Mecque avec environ 10 000 hommes. La ville est prise presque sans combat.",
      Q.mc("En quelle année de l'Hégire a eu lieu la conquête de La Mecque ?", ["L'an 8", "L'an 1", "L'an 4", "L'an 11"], 0, "")),
    L("Le pardon", "Le Prophète ﷺ fait détruire les idoles autour de la Kaaba en récitant « La vérité est venue, et le faux a disparu » (Coran 17:81). Il pardonne à ses anciens ennemis : « Allez, vous êtes libres. » Bilal monte sur la Kaaba pour lancer l'adhan.",
      Q.tf("Le Prophète ﷺ a pardonné aux habitants de La Mecque.", true, "")),
  ], [
    Q.mc("Quel verset a été récité en détruisant les idoles ?", ["Coran 17:81", "Coran 112:1", "Coran 1:1", "Coran 2:255"], 0, ""),
    Q.tf("La conquête de La Mecque s'est faite sans grande effusion de sang.", true, ""),
    Q.mc("Qui a lancé l'adhan sur la Kaaba ?", ["Bilal", "Umar", "Abu Bakr", "Ali"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Hégire", "Traité de Hudaybiya", "Rupture du traité", "Conquête de La Mecque"], ""),
    Q.text("Quel mot exprime l'attitude du Prophète ﷺ envers ses anciens ennemis ? (le …)", ["pardon", "clemence", "clémence", "misericorde", "miséricorde"], "Le pardon."),
  ], "Cette conquête est souvent citée comme un exemple de pardon et de clémence dans la victoire."),
]},
{ n: 39, unit: "L'adieu", chapters: [
  ch("c39-adieu", "histoire", "Le pèlerinage d'adieu et la mort du Prophète ﷺ", ["Muslim 1218 (hadith de Jabir)", "Coran 5:3", "Bukhari 3668 (mort du Prophète)"], [
    L("Le pèlerinage d'adieu", "En l'an 10 de l'Hégire, le Prophète ﷺ accomplit son seul Hajj avec des dizaines de milliers de musulmans. À Arafat, il prononce un grand sermon : respect de la vie, des biens et de l'honneur, traitement bienveillant des femmes, égalité entre les gens. Le verset 5:3 est révélé : « Aujourd'hui, J'ai parachevé pour vous votre religion. »",
      Q.mc("Où le Prophète ﷺ a-t-il prononcé son grand sermon d'adieu ?", ["À Arafat", "À Médine", "À Badr", "À Taïf"], 0, "")),
    L("La fin de sa vie", "Quelques mois plus tard, le Prophète ﷺ tombe malade. Il meurt à Médine, dans la maison d'Aïcha, le lundi 12 Rabi' al-awwal de l'an 11 (la date exacte est discutée), vers l'âge de 63 ans. Il est enterré là. Les musulmans choisissent ensuite Abu Bakr comme premier calife.",
      Q.mc("Qui est devenu le premier calife ?", ["Abu Bakr", "Umar", "Ali", "Uthman"], 0, "")),
  ], [
    Q.mc("À quel âge environ est mort le Prophète ﷺ ?", ["63 ans", "40 ans", "80 ans", "50 ans"], 0, ""),
    Q.tf("Le pèlerinage d'adieu a eu lieu l'année de la mort du Prophète ﷺ.", false, "Il a eu lieu l'an 10 ; sa mort l'an 11."),
    Q.mc("Dans quelle ville est-il enterré ?", ["Médine", "La Mecque", "Jérusalem", "Taïf"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Conquête de La Mecque", "Pèlerinage d'adieu", "Mort du Prophète ﷺ", "Abu Bakr devient calife"], ""),
    Q.text("Comment appelle-t-on le successeur du Prophète ﷺ à la tête des musulmans ? (un mot)", ["calife", "khalifa", "khalife"], "Le calife."),
  ], "Le mot « calife » vient de « khalîfa » : successeur."),
]},
{ n: 40, unit: "Abu Bakr", chapters: [
  ch("c40-abubakr", "compagnons", "Abu Bakr as-Siddiq", ["Sîra d'Ibn Hichâm", "Bukhari 4986 (rassemblement du Coran)", "Coran 9:40"], [
    L("L'ami fidèle", "Abu Bakr (Abdallah ibn Abi Quhafa) est surnommé as-Siddiq, celui qui croit sans hésiter. Il est l'un des tout premiers à embrasser l'islam, dépense sa fortune pour libérer des esclaves, et accompagne le Prophète ﷺ durant l'Hégire (Coran 9:40).",
      Q.mc("Quel surnom porte Abu Bakr ?", ["As-Siddiq", "Al-Faruq", "Dhu an-Nurayn", "Al-Murtada"], 0, "")),
    L("Le premier calife", "Après la mort du Prophète ﷺ, Abu Bakr est choisi comme calife (11-13 H). Il maintient l'unité de la communauté. Après la bataille de Yamama, sur son ordre, Zayd ibn Thabit rassemble le Coran en un seul recueil (Bukhari 4986).",
      Q.tf("Sous Abu Bakr, le Coran a été rassemblé en un recueil.", true, "Bukhari 4986.")),
  ], [
    Q.mc("Quel surnom porte Abu Bakr ?", ["As-Siddiq", "Al-Faruq", "Dhu an-Nurayn", "Al-Murtada"], 0, ""),
    Q.mc("Qui a rassemblé le Coran sous Abu Bakr ?", ["Zayd ibn Thabit", "Bilal", "Khalid", "Salman"], 0, ""),
    Q.tf("Abu Bakr a été le premier calife.", true, ""),
    Q.match("Associe.", [["Abu Bakr", "As-Siddiq, 1er calife"], ["Umar", "Al-Faruq, 2e calife"], ["Uthman", "Dhu an-Nurayn, 3e calife"], ["Ali", "4e calife"]], ""),
    Q.text("Quel compagnon l'accompagne dans l'Hégire ? (un prénom)", ["abu bakr", "abubakr", "bakr"], "Abu Bakr."),
  ], "Abu Bakr fut le compagnon du Prophète ﷺ dans la grotte de Thawr : Coran 9:40 parle de « le second de deux »."),
]}
);
buildIndex();
