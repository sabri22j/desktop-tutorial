/* Niveaux 81 à 90 : croyance approfondie, éthique et vie quotidienne. Références : Coran et hadiths authentiques avec leur recueil. */
LEVELS.push(
{ n: 81, unit: "Anges et livres", chapters: [
  ch("c81-anges", "croyance", "Les anges", ["Coran 66:6 ; 82:10-12 ; 43:77", "Muslim 2996 (créés de lumière)"], [
    L("Des créatures de lumière", "Les anges sont des créatures invisibles, créées de lumière (Muslim 2996). Ils obéissent à Allah sans Lui désobéir et font ce qui leur est ordonné (Coran 66:6). Jibril transmet la révélation, Mikaïl est chargé de la pluie et des bienfaits, Israfil soufflera dans la Trompe selon la tradition.",
      Q.mc("De quoi les anges sont-ils créés, selon un hadith ?", ["De lumière", "De feu", "D'argile", "D'eau"], 0, "Muslim 2996.")),
    L("Des anges aux missions précises", "Deux anges scribes notent les actes de chacun : « Il y a sur vous des gardiens, nobles scribes, qui savent ce que vous faites » (Coran 82:10-12). Malik est le gardien de l'Enfer (43:77). Munkar et Nakir interrogent le défunt selon les hadiths.",
      Q.tf("Les anges désobéissent parfois aux ordres d'Allah.", false, "Coran 66:6.")),
  ], [
    Q.mc("Quel ange transmet la révélation aux prophètes ?", ["Jibril", "Mikaïl", "Israfil", "Malik"], 0, ""),
    Q.tf("Les anges sont créés de feu.", false, "De lumière ; les djinns sont créés de feu (Coran 55:15)."),
    Q.mc("Quelle sourate parle des anges scribes (82:10-12) ?", ["Al-Infitar", "Al-Fatiha", "Al-Ikhlas", "Al-Kawthar"], 0, ""),
    Q.match("Associe chaque ange à sa mission.", [["Jibril", "Révélation"], ["Mikaïl", "Pluie et bienfaits"], ["Israfil", "Souffle dans la Trompe"], ["Malik", "Gardien de l'Enfer"]], "Question avancée."),
    Q.text("Comment appelle-t-on les deux anges qui notent les actes ? (Kiram…)", ["katibin", "kiraman katibin", "katibine"], "Kiraman Katibin (les nobles scribes)."),
  ], "Le Coran dit que les djinns sont créés de feu (55:15) et les humains d'argile."),
  ch("c81-livres", "croyance", "Les livres révélés", ["Coran 87:18-19 ; 5:44-48 ; 2:285", "Coran 3:3-4"], [
    L("Une série de livres", "Le Coran mentionne les feuillets (suhuf) d'Ibrahim et de Moussa (87:18-19), la Tawrat donnée à Moussa, le Zabur donné à Dawud, l'Injil donné à Issa, et le Coran donné à Muhammad ﷺ. Les musulmans croient à tous ces livres tels qu'ils ont été révélés.",
      Q.mc("Quel livre a été donné à Dawud ?", ["Le Zabur", "La Tawrat", "L'Injil", "Le Coran"], 0, "")),
    L("Le Coran, dernier livre", "Coran 5:48 dit que le Coran confirme ce qui l'a précédé et en est le « muhaymin » (le garant, le critère). Il est la dernière révélation, préservée (15:9). Croire aux livres est l'un des six piliers de la foi.",
      Q.tf("Croire aux livres est un pilier de la foi.", true, "")),
  ], [
    Q.match("Associe chaque livre à son prophète.", [["Tawrat", "Moussa"], ["Zabur", "Dawud"], ["Injil", "Issa"], ["Coran", "Muhammad ﷺ"]], "Question avancée."),
    Q.tf("Le Coran est considéré comme préservé.", true, "Coran 15:9."),
    Q.mc("Comment le Coran est-il décrit par rapport aux livres précédents ?", ["Il les confirme et en est le garant", "Il les ignore", "Il les remplace sans les mentionner", "Il est identique"], 0, "Coran 5:48."),
    Q.order("Remets ces révélations dans l'ordre.", ["Suhuf d'Ibrahim", "Tawrat", "Zabur", "Injil", "Coran"], "Ordre généralement admis."),
    Q.text("Comment appelle-t-on les feuillets d'Ibrahim ? (les …)", ["suhuf", "souhouf"], "Les suhuf."),
  ], "Les musulmans croient que tous les prophètes ont appelé au même message : adorer Allah seul."),
]},
{ n: 82, unit: "Au-delà et destin", chapters: [
  ch("c82-akhira", "croyance", "Le Jour dernier", ["Coran 99:6-8 ; 21:47 ; 36:51-54", "Muslim 2901 (signes)"], [
    L("Résurrection et jugement", "Les musulmans croient que tous les êtres humains seront ressuscités et jugés. Les actes seront pesés avec justice : « Nul ne sera lésé en rien » (Coran 21:47). La balance (mizan) est mentionnée dans le Coran.",
      Q.mc("Quel mot désigne la balance du Jour dernier ?", ["Al-Mizan", "Al-Kursi", "Al-Sirat", "Al-Qalam"], 0, "Coran 21:47.")),
    L("Un atome de bien", "« Quiconque fait un bien fût-ce du poids d'un atome, le verra. Et quiconque fait un mal fût-ce du poids d'un atome, le verra » (Coran 99:7-8). Les hadiths parlent aussi de signes annonciateurs (Muslim 2901), mais l'heure exacte n'est connue que d'Allah.",
      Q.tf("Seul Allah connaît l'heure exacte du Jour dernier.", true, ""),
      "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ", "Fa-man ya'mal mithqâla dharratin khayran yarah. Wa man ya'mal mithqâla dharratin sharran yarah.", "Coran 99:7-8", "Quiconque fait un bien fût-ce du poids d'un atome, le verra. Et quiconque fait un mal fût-ce du poids d'un atome, le verra."),
  ], [
    Q.mc("Quelle sourate décrit le grand tremblement de terre du Jour dernier ?", ["Az-Zalzala (99)", "Al-Fil (105)", "Al-Kawthar (108)", "Al-Asr (103)"], 0, ""),
    Q.tf("Les actes seront jugés avec justice.", true, ""),
    Q.mc("Qui connaît l'heure du Jour dernier ?", ["Allah seul", "Les anges", "Les prophètes", "Jibril"], 0, ""),
    Q.match("Associe.", [["Mizan", "Balance"], ["Hisab", "Compte, jugement"], ["Jannah", "Paradis"], ["Jahannam", "Enfer"]], ""),
    Q.text("Comment appelle-t-on le Jour dernier ? (Yawm al-…)", ["qiyama", "kiyama", "qiyamah", "din"], "Yawm al-Qiyama (ou Yawm ad-Din)."),
  ], "Le Coran appelle aussi ce jour « Yawm ad-Din » (le Jour de la rétribution), comme dans Al-Fatiha."),
  ch("c82-qadar", "croyance", "Le destin (qadar)", ["Coran 54:49 ; 57:22 ; 18:29", "Muslim 2653 ; Muslim 8"], [
    L("Quatre niveaux", "La croyance au qadar comprend quatre niveaux : la science d'Allah, l'écriture de toute chose, la volonté d'Allah et la création. « Nous avons créé toute chose avec mesure » (Coran 54:49).",
      Q.mc("Combien y a-t-il de niveaux dans la croyance au qadar ?", ["Quatre", "Deux", "Sept", "Dix"], 0, "")),
    L("Liberté et responsabilité", "Les musulmans croient que l'être humain choisit et est responsable de ses actes : « Que celui qui veut croie, que celui qui veut mécroie » (Coran 18:29). Le qadar donne du réconfort face aux épreuves, sans excuser la négligence.",
      Q.tf("Croire au qadar n'enlève pas la responsabilité des actes.", true, "")),
  ], [
    Q.mc("Quel verset dit : « Nous avons créé toute chose avec mesure » ?", ["Coran 54:49", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.tf("Croire au destin est un des six piliers de la foi.", true, ""),
    Q.mc("Quelle attitude face aux épreuves inspire cette croyance ?", ["La patience et la confiance", "Le désespoir", "L'indifférence", "La révolte"], 0, ""),
    Q.match("Associe.", [["'Ilm", "Science d'Allah"], ["Kitaba", "Écriture"], ["Mashi'a", "Volonté"], ["Khalq", "Création"]], "Question avancée."),
    Q.text("Comment dit-on « destin » en arabe ? (le …)", ["qadar", "qadr", "kadar"], "Le qadar."),
  ], "Le Prophète ﷺ a dit que le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, tout en cherchant l'aide d'Allah (Muslim 2664)."),
]},
{ n: 83, unit: "Parents et famille", chapters: [
  ch("c83-parents", "pratique", "Les parents", ["Coran 17:23-24 ; 31:14 ; 46:15", "Bukhari 5971"], [
    L("Un ordre qui suit l'adoration d'Allah", "Coran 17:23 place la bienfaisance envers les parents juste après l'adoration d'Allah : « Ne leur dis pas 'Ouf' et ne les rudoie pas, mais adresse-leur des paroles respectueuses ». Coran 31:14 rappelle les efforts de la mère pendant la grossesse et l'allaitement.",
      Q.mc("Que dit Coran 17:23 à propos des parents ?", ["Ne leur dis même pas « Ouf »", "Obéis-leur en tout sans réfléchir", "Éloigne-toi d'eux", "Ils doivent être craints"], 0, "")),
    L("Une place particulière pour la mère", "Un homme demande qui mérite le mieux sa compagnie. Le Prophète ﷺ répond : « Ta mère », trois fois, puis « ton père » (Bukhari 5971). Les parents se respectent, avec douceur, même en cas de désaccord.",
      Q.tf("Le Prophète ﷺ a cité la mère en premier, trois fois.", true, "Bukhari 5971.")),
  ], [
    Q.mc("Combien de fois le Prophète ﷺ cite-t-il la mère dans ce hadith ?", ["Trois fois", "Une fois", "Deux fois", "Jamais"], 0, ""),
    Q.tf("Le Coran encourage à parler poliment à ses parents.", true, ""),
    Q.mc("Quel verset place la bienfaisance envers les parents juste après l'adoration d'Allah ?", ["Coran 17:23", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.match("Associe.", [["Birr al-walidayn", "Bienfaisance envers les parents"], ["Silat ar-rahim", "Maintenir les liens de parenté"], ["Uqûq", "Désobéissance aux parents"]], "Question avancée."),
    Q.text("Comment dit-on « mère » en arabe ? (Umm)", ["umm", "oum", "um"], "Umm."),
  ], "Le Coran raconte aussi la dua d'Ibrahim pour ses parents (14:41)."),
  ch("c83-mariage", "pratique", "Le mariage et la vie de famille", ["Coran 30:21 ; 4:19", "At-Tirmidhi 3895", "Bukhari 676"], [
    L("Affection et bonté", "Coran 30:21 dit : « Parmi Ses signes, Il a créé pour vous, à partir de vous-mêmes, des épouses pour que vous viviez en tranquillité avec elles, et Il a mis entre vous de l'affection et de la bonté ». Le mariage est un contrat fondé sur le consentement mutuel.",
      Q.mc("Quelles qualités Coran 30:21 met-il entre les époux ?", ["Affection et bonté", "Richesse et pouvoir", "Silence et distance", "Compétition"], 0, "")),
    L("Le meilleur exemple", "Le Prophète ﷺ a dit : « Les meilleurs d'entre vous sont ceux qui sont les meilleurs envers leurs familles, et je suis le meilleur envers ma famille » (At-Tirmidhi 3895). Aïcha rapporte qu'il aidait aux tâches de la maison (Bukhari 676).",
      Q.tf("Le Prophète ﷺ aidait aux tâches de la maison.", true, "Bukhari 676.")),
  ], [
    Q.mc("Quel est le but du mariage selon Coran 30:21 ?", ["Vivre en tranquillité avec affection et bonté", "Gagner de l'argent", "Fuir la ville", "Éviter toute responsabilité"], 0, ""),
    Q.tf("Le mariage repose sur le consentement mutuel.", true, ""),
    Q.mc("Quel comportement le Prophète ﷺ a-t-il recommandé envers sa famille ?", ["Être le meilleur envers elle", "Être distant", "Être sévère", "Être absent"], 0, ""),
    Q.match("Associe.", [["Nikah", "Mariage"], ["Mahr", "Don du mari à l'épouse"], ["Walima", "Repas de noces"]], "Question avancée."),
    Q.text("Comment dit-on « mariage » en arabe ? (le …)", ["nikah", "nikâh", "zawaj"], "Le nikah."),
  ], "Le mot arabe « sakan » (tranquillité) est lié à « maskan » (logement, demeure)."),
]},
{ n: 84, unit: "Parole et colère", chapters: [
  ch("c84-parole", "pratique", "Dire la vérité, éviter la médisance", ["Coran 49:12", "Bukhari 6094 ; Muslim 2607", "Bukhari 6018 ; Muslim 47", "Muslim 2589"], [
    L("La vérité mène au bien", "Le Prophète ﷺ a dit : « La vérité mène à la bonté, et la bonté mène au Paradis » (Bukhari 6094). Il a aussi dit : « Que celui qui croit en Allah et au Jour dernier dise du bien ou se taise » (Bukhari 6018).",
      Q.mc("Que recommande Bukhari 6018 ?", ["Dire du bien ou se taire", "Parler beaucoup", "Ne jamais parler", "Critiquer les autres"], 0, "")),
    L("La médisance (ghiba)", "Le Prophète ﷺ a défini la médisance comme le fait de mentionner de ton frère ce qu'il n'aime pas (Muslim 2589). Coran 49:12 l'interdit : « Ne médisez pas les uns des autres ; l'un de vous aimerait-il manger la chair de son frère mort ? ».",
      Q.tf("Coran 49:12 interdit la médisance.", true, "")),
  ], [
    Q.mc("Comment appelle-t-on la médisance en arabe ?", ["Ghiba", "Tawba", "Sabr", "Shukr"], 0, ""),
    Q.tf("Le Coran compare la médisance à manger la chair d'un frère mort.", true, "Coran 49:12."),
    Q.mc("Quelle qualité est encouragée dans les paroles ?", ["La vérité", "L'exagération", "La moquerie", "La flatterie"], 0, ""),
    Q.match("Associe.", [["Sidq", "Véracité"], ["Kadhib", "Mensonge"], ["Ghiba", "Médisance"], ["Namima", "Colportage"]], "Question avancée."),
    Q.text("Comment dit-on « vérité » en arabe ? (le …)", ["sidq", "haqq", "siddq"], "Le sidq (ou le haqq)."),
  ], "Le Prophète ﷺ était appelé « as-Sadiq al-Amin » (le véridique, le digne de confiance) avant même la révélation."),
  ch("c84-colere", "pratique", "Maîtriser sa colère", ["Coran 3:134", "Bukhari 6114 ; Muslim 2609", "Bukhari 6116"], [
    L("La vraie force", "Le Prophète ﷺ a dit : « Le fort n'est pas celui qui terrasse les gens, mais celui qui se maîtrise quand il est en colère » (Bukhari 6114). À un homme qui lui demandait un conseil, il a répété : « Ne te mets pas en colère » (Bukhari 6116).",
      Q.mc("Selon Bukhari 6114, qui est le fort ?", ["Celui qui se maîtrise dans la colère", "Celui qui gagne un combat", "Celui qui parle fort", "Celui qui est riche"], 0, "")),
    L("Les qualités des pieux", "Coran 3:134 loue ceux qui dépensent dans l'aisance et la gêne, qui dominent leur colère et qui pardonnent aux gens. Le pardon est encouragé : « Allah aime les bienfaisants ».",
      Q.tf("Coran 3:134 loue ceux qui dominent leur colère.", true, "")),
  ], [
    Q.mc("Quel conseil répété le Prophète ﷺ a-t-il donné à un homme ?", ["Ne te mets pas en colère", "Travaille plus", "Voyage", "Jeûne plus"], 0, "Bukhari 6116."),
    Q.tf("Le pardon est encouragé dans le Coran.", true, ""),
    Q.mc("Quel verset loue ceux qui dominent leur colère ?", ["Coran 3:134", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.match("Associe.", [["Ghadab", "Colère"], ["Hilm", "Douceur, maîtrise de soi"], ["Afw", "Pardon"]], ""),
    Q.text("Comment dit-on « pardon » en arabe ? (l'…)", ["afw", "'afw", "maghfira"], "L'afw (ou la maghfira)."),
  ], "Il est rapporté de conseiller de changer de position (s'asseoir ou s'allonger) quand on est en colère (Abu Dawud 4782)."),
]},
{ n: 85, unit: "Savoir et réflexion", chapters: [
  ch("c85-savoir", "pratique", "Le savoir en islam", ["Coran 96:1-5 ; 20:114 ; 39:9", "Muslim 2699", "Bukhari 71", "Bukhari 5027"], [
    L("Une religion qui commence par « Lis »", "Le premier mot révélé est « Iqra' » (Lis). Le Coran demande à dire : « Seigneur, augmente mes connaissances » (20:114) et pose la question : « Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ? » (39:9).",
      Q.mc("Quel est le premier mot révélé ?", ["Iqra' (Lis)", "Qum", "Salli", "Sabbih"], 0, "")),
    L("Faciliter le chemin", "Le Prophète ﷺ a dit : « Celui qui emprunte un chemin pour chercher un savoir, Allah lui facilite un chemin vers le Paradis » (Muslim 2699). Il a dit aussi que le meilleur est celui qui apprend le Coran et l'enseigne (Bukhari 5027).",
      Q.tf("Chercher le savoir est encouragé.", true, "Muslim 2699.")),
  ], [
    Q.mc("Que demande Coran 20:114 ?", ["Seigneur, augmente mes connaissances", "Donne-moi de la richesse", "Protège mon pays", "Accorde-moi la victoire"], 0, ""),
    Q.tf("Le meilleur est celui qui apprend le Coran et l'enseigne.", true, "Bukhari 5027."),
    Q.mc("Quelle sourate commence par « Lis » ?", ["Al-'Alaq", "Al-Fatiha", "Al-Ikhlas", "An-Nas"], 0, ""),
    Q.match("Associe.", [["'Ilm", "Savoir"], ["Fiqh", "Compréhension de la religion"], ["Jahl", "Ignorance"]], ""),
    Q.text("Comment dit-on « savoir » en arabe ? (le …)", ["ilm", "'ilm", "ilm"], "Le 'ilm."),
  ], "Le mot « ilm » et ses dérivés apparaissent des centaines de fois dans le Coran."),
  ch("c85-reflexion", "coran", "Foi et réflexion", ["Coran 3:190-191 ; 88:17-20 ; 41:53", "Ibn Kathir, Tafsir"], [
    L("Regarder la création", "Le Coran invite à observer : « Ne regardent-ils pas comment le chameau a été créé ? Et le ciel, comment il a été élevé ? » (Coran 88:17-18). Observer la nature permet de reconnaître la sagesse d'Allah.",
      Q.mc("Que demande Coran 88:17-20 ?", ["Observer la création", "Ne jamais poser de questions", "Voyager sans but", "Éviter la nature"], 0, "")),
    L("Des signes dans l'univers", "Allah dit qu'Il montrera Ses signes « dans l'univers et en eux-mêmes » (Coran 41:53). La foi n'empêche pas la réflexion : elle l'encourage, dans l'humilité face à ce que nous ne savons pas.",
      Q.tf("Le Coran présente l'univers comme porteur de signes.", true, "")),
  ], [
    Q.mc("Quel animal est cité comme exemple dans 88:17 ?", ["Le chameau", "Le cheval", "L'aigle", "La fourmi"], 0, ""),
    Q.tf("La réflexion est encouragée par le Coran.", true, ""),
    Q.mc("Que signifie « ayat » ?", ["Signes (et versets)", "Noms", "Prières", "Villes"], 0, ""),
    Q.match("Associe.", [["3:190", "Signes dans la création"], ["88:17", "Le chameau"], ["41:53", "Signes à l'horizon et en soi"]], ""),
    Q.text("Comment dit-on « signe, verset » en arabe ? (aya)", ["aya", "ayah", "ayat"], "Aya (pluriel ayat)."),
  ], "Le mot « ayah » désigne à la fois un verset du Coran et un signe dans la nature."),
]},
{ n: 86, unit: "Création et justice", chapters: [
  ch("c86-nature", "pratique", "La création et l'environnement", ["Coran 6:38 ; 7:56 ; 55:7-9", "Bukhari 2320 ; Bukhari 2363"], [
    L("Des créatures comme nous", "Coran 6:38 dit qu'il n'y a pas d'animal sur terre ni d'oiseau qui vole « qui ne soient des communautés comme vous ». Coran 7:56 interdit de semer la corruption sur terre après qu'elle a été remise en ordre. L'équilibre (mizan) est un principe de la création (55:7-9).",
      Q.mc("Que dit Coran 6:38 à propos des animaux ?", ["Ce sont des communautés comme les humains", "Ils n'ont pas de valeur", "Ils sont des dieux", "Ils doivent être évités"], 0, "")),
    L("Un arbre, un chien, un geste", "Le Prophète ﷺ a dit que celui qui plante un arbre ou sème, et dont un être vivant mange, cela lui compte comme une aumône (Bukhari 2320). Un homme a été pardonné pour avoir donné à boire à un chien assoiffé (Bukhari 2363).",
      Q.tf("Planter un arbre peut être une aumône.", true, "Bukhari 2320.")),
  ], [
    Q.mc("Que signifie « mizan » dans le contexte de la création ?", ["Équilibre", "Guerre", "Commerce", "Voyage"], 0, ""),
    Q.tf("Le Coran interdit de semer la corruption sur terre.", true, "Coran 7:56."),
    Q.mc("Quel geste envers un animal a valu un pardon selon Bukhari 2363 ?", ["Donner à boire à un chien assoiffé", "Chasser un oiseau", "Enfermer un chat", "Éviter un chameau"], 0, ""),
    Q.match("Associe.", [["Mizan", "Équilibre"], ["Fasad", "Corruption"], ["Khalifa", "Successeur, intendant sur terre"]], ""),
    Q.text("Comment dit-on « corruption » en arabe ? (al-…)", ["fasad", "fassad"], "Al-fasad."),
  ], "Le mot « khalifa » (Coran 2:30) est souvent compris comme l'idée d'une responsabilité de l'humain envers la terre."),
  ch("c86-justice", "pratique", "La justice", ["Coran 4:135 ; 5:8 ; 16:90", "Muslim 2577"], [
    L("Être juste même contre soi", "Coran 4:135 dit : « Ô vous qui croyez ! Soyez stricts dans l'équité, témoins pour Allah, fût-ce contre vous-mêmes, vos parents ou vos proches ». Coran 5:8 ajoute que la haine d'un peuple ne doit pas nous pousser à être injustes.",
      Q.mc("Que demande Coran 4:135 ?", ["Être juste même contre soi-même", "Défendre ses proches quoi qu'il arrive", "Éviter de témoigner", "Fuir les conflits"], 0, "")),
    L("L'injustice interdite", "Dans un hadith qudsi, Allah dit : « Ô Mes serviteurs, J'ai interdit l'injustice à Moi-même et Je l'ai rendue interdite entre vous ; ne vous opprimez donc pas les uns les autres » (Muslim 2577). Coran 16:90 ordonne la justice et la bienfaisance.",
      Q.tf("L'injustice est interdite dans l'islam.", true, "Muslim 2577.")),
  ], [
    Q.mc("Quel verset ordonne « la justice et la bienfaisance » ?", ["Coran 16:90", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.tf("Coran 5:8 demande d'être juste même envers ceux qu'on n'aime pas.", true, ""),
    Q.mc("Comment dit-on « justice » en arabe ?", ["Adl", "Zulm", "Sabr", "Ghadab"], 0, ""),
    Q.match("Associe.", [["'Adl", "Justice"], ["Zulm", "Injustice"], ["Ihsan", "Bienfaisance"]], ""),
    Q.text("Comment dit-on « injustice » en arabe ? (le …)", ["zulm", "dhulm", "zoulm"], "Le zulm."),
  ], "Un hadith qudsi est une parole d'Allah rapportée par le Prophète ﷺ, qui n'est pas dans le Coran."),
]},
{ n: 87, unit: "Repentir, gratitude et patience", chapters: [
  ch("c87-tawba", "pratique", "Le repentir (tawba)", ["Coran 39:53 ; 66:8 ; 25:70", "Bukhari 6306"], [
    L("Ne pas désespérer", "Allah dit : « Ô Mes serviteurs qui avez commis des excès à votre détriment, ne désespérez pas de la miséricorde d'Allah. Allah pardonne tous les péchés » (Coran 39:53). La porte du repentir est ouverte.",
      Q.mc("Que dit Coran 39:53 ?", ["Ne désespérez pas de la miséricorde d'Allah", "Les péchés ne sont jamais pardonnés", "Le repentir est inutile", "Il faut se cacher"], 0, "")),
    L("Conditions du repentir", "Selon les savants, un repentir sincère comprend : cesser le péché, le regretter, décider de ne pas y retourner et, si des droits d'autrui sont en jeu, les rendre. Le Prophète ﷺ a enseigné « sayyid al-istighfar », le maître des demandes de pardon (Bukhari 6306).",
      Q.tf("Un repentir sincère comprend le regret.", true, "")),
  ], [
    Q.mc("Quelle est l'une des conditions du repentir ?", ["Regretter sincèrement", "Attendre une année", "Le faire en public", "Ne plus prier"], 0, ""),
    Q.tf("Allah pardonne tous les péchés selon Coran 39:53.", true, ""),
    Q.mc("Comment dit-on « repentir » en arabe ?", ["Tawba", "Zakat", "Siyam", "Hijra"], 0, ""),
    Q.match("Associe.", [["Tawba", "Repentir"], ["Istighfar", "Demande de pardon"], ["Nadam", "Regret"]], "Question avancée."),
    Q.text("Dans quelle sourate est le verset 39:53 ? (Az-…)", ["zumar", "zoumar"], "Az-Zumar."),
  ], "La sourate At-Tawba (9) porte le nom du repentir."),
  ch("c87-shukr-sabr", "pratique", "Gratitude et patience", ["Coran 14:7 ; 2:153", "Muslim 2999", "Bukhari 1469"], [
    L("Remercier", "Coran 14:7 dit : « Si vous êtes reconnaissants, très certainement J'augmenterai [Mes bienfaits] pour vous ». Le shukr (gratitude) se dit par la langue, le cœur et les actes. Dire « Al-hamdu lillah » en est une forme simple.",
      Q.mc("Comment dit-on « gratitude » en arabe ?", ["Shukr", "Sabr", "Tawba", "Zakat"], 0, "")),
    L("Patienter", "Coran 2:153 dit : « Allah est avec les endurants ». Le Prophète ﷺ a dit que tout est bien pour le croyant : s'il reçoit un bienfait, il remercie ; s'il subit une épreuve, il patiente (Muslim 2999). Celui qui cherche à être patient, Allah le rend patient (Bukhari 1469).",
      Q.tf("Le croyant remercie dans l'aisance et patiente dans l'épreuve.", true, "Muslim 2999.")),
  ], [
    Q.mc("Comment dit-on « patience » en arabe ?", ["Sabr", "Shukr", "Tawba", "Zulm"], 0, ""),
    Q.tf("Coran 2:153 dit qu'Allah est avec les patients.", true, ""),
    Q.mc("Quel verset promet d'augmenter les bienfaits pour ceux qui remercient ?", ["Coran 14:7", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.match("Associe.", [["Shukr", "Gratitude"], ["Sabr", "Patience"], ["Tawakkul", "Confiance en Allah"]], ""),
    Q.text("Quel prophète est un modèle de patience ? (un prénom)", ["ayyub", "ayoub", "job"], "Ayyub."),
  ], "Le mot « sabr » désigne aussi la persévérance dans le bien, pas seulement la résignation."),
]},
{ n: 88, unit: "Le cœur et la confiance", chapters: [
  ch("c88-coeur", "pratique", "Le cœur et ses maladies", ["Bukhari 52", "Bukhari 6064 ; Muslim 2559", "Muslim 91", "Coran 26:88-89"], [
    L("Un morceau de chair", "Le Prophète ﷺ a dit : « Il y a dans le corps un morceau de chair : s'il est sain, tout le corps est sain ; s'il est corrompu, tout le corps l'est. C'est le cœur » (Bukhari 52). Coran 26:88-89 parle de celui qui viendra à Allah avec un cœur sain.",
      Q.mc("Quel organe est cité dans Bukhari 52 ?", ["Le cœur", "Le foie", "Les yeux", "La langue"], 0, "")),
    L("Envie et orgueil", "Le Prophète ﷺ a dit : « Ne vous enviez pas les uns les autres » (Bukhari 6064 ; Muslim 2559). Il a aussi mis en garde contre l'orgueil, même d'un atome (Muslim 91). Soigner le cœur, c'est travailler la sincérité, l'humilité et la bienveillance.",
      Q.tf("L'envie et l'orgueil sont des maladies du cœur dans l'enseignement islamique.", true, "")),
  ], [
    Q.mc("Comment dit-on « envie » en arabe ?", ["Hasad", "Sabr", "Shukr", "Tawba"], 0, ""),
    Q.tf("Un cœur sain est mentionné dans Coran 26:88-89.", true, ""),
    Q.mc("Quelle qualité soigne l'orgueil ?", ["L'humilité", "La richesse", "La vitesse", "La puissance"], 0, ""),
    Q.match("Associe.", [["Hasad", "Envie"], ["Kibr", "Orgueil"], ["Ikhlas", "Sincérité"], ["Tawadu'", "Humilité"]], "Question avancée."),
    Q.text("Comment dit-on « sincérité » en arabe ? (l'…)", ["ikhlas", "ikhlâs"], "L'ikhlas."),
  ], "La sourate Al-Ikhlas porte le nom de la sincérité (elle purifie la croyance en Allah)."),
  ch("c88-tawakkul", "pratique", "La confiance en Allah (tawakkul)", ["Coran 3:159 ; 65:3", "At-Tirmidhi 2517 ; At-Tirmidhi 2344"], [
    L("Agir puis s'en remettre", "Coran 3:159 dit : « Quand tu as pris une décision, place ta confiance en Allah ». Un homme demande s'il doit attacher son chameau ou s'en remettre à Allah : « Attache-le puis place ta confiance en Allah » (At-Tirmidhi 2517).",
      Q.mc("Que signifie « tawakkul » ?", ["Confiance en Allah après avoir agi", "Rester passif", "Avoir peur", "Partir en voyage"], 0, "")),
    L("Les oiseaux", "Le Prophète ﷺ a dit que si l'on plaçait vraiment sa confiance en Allah, Il pourvoirait à nos besoins comme Il pourvoit aux oiseaux qui partent le matin affamés et reviennent le soir rassasiés (At-Tirmidhi 2344). Coran 65:3 : « Quiconque place sa confiance en Allah, Il lui suffit ».",
      Q.tf("Le tawakkul n'empêche pas de faire des efforts.", true, "At-Tirmidhi 2517.")),
  ], [
    Q.mc("Que doit-on faire avant de placer sa confiance en Allah ?", ["Agir, faire les causes", "Ne rien faire", "Abandonner", "Attendre un signe"], 0, ""),
    Q.tf("Coran 65:3 promet qu'Allah suffit à celui qui place sa confiance en Lui.", true, ""),
    Q.mc("Quel animal est pris en exemple dans le hadith de Tirmidhi 2344 ?", ["Les oiseaux", "Les chameaux", "Les abeilles", "Les fourmis"], 0, ""),
    Q.match("Associe.", [["Tawakkul", "Confiance en Allah"], ["Asbab", "Causes, moyens"], ["Rizq", "Subsistance"]], ""),
    Q.text("Comment dit-on « subsistance » en arabe ? (le …)", ["rizq", "rizk", "rizq"], "Le rizq."),
  ], "Le mot « tawakkul » a la même racine que « wakil » (celui à qui on confie une affaire)."),
]},
{ n: 89, unit: "Jeunesse et dignité", chapters: [
  ch("c89-sept", "pratique", "Les sept à l'ombre d'Allah", ["Bukhari 660 ; Muslim 1031"], [
    L("Une ombre le Jour dernier", "Un hadith cite sept catégories de personnes que « Allah abritera de Son ombre le jour où il n'y aura pas d'autre ombre que la Sienne » : le dirigeant juste, le jeune qui a grandi dans l'adoration d'Allah, celui dont le cœur est attaché aux mosquées, deux personnes qui s'aiment pour Allah (Bukhari 660).",
      Q.mc("Combien de catégories sont citées ?", ["Sept", "Trois", "Dix", "Cinq"], 0, "")),
    L("Les trois autres", "Il s'agit aussi de l'homme qui résiste à une tentation en disant « Je crains Allah », de celui qui donne l'aumône si discrètement que sa main gauche ne sait pas ce que donne sa main droite, et de celui qui évoque Allah dans la solitude et dont les yeux se remplissent de larmes.",
      Q.tf("Le jeune qui a grandi dans l'adoration fait partie des sept.", true, "")),
  ], [
    Q.mc("Qui fait partie des sept ?", ["Le dirigeant juste", "Le commerçant le plus riche", "Le guerrier le plus fort", "L'orateur le plus célèbre"], 0, ""),
    Q.tf("L'aumône discrète est citée dans ce hadith.", true, ""),
    Q.mc("Quel jour cette ombre est-elle donnée ?", ["Le Jour dernier", "Le jour de l'Aïd", "Le jour de Badr", "Le jour d'Arafat"], 0, ""),
    Q.mc("Quelle qualité est citée pour le dirigeant ?", ["Il est juste", "Il est riche", "Il est jeune", "Il est savant"], 0, ""),
    Q.text("Combien de personnes sont à l'ombre d'Allah dans ce hadith ? (un chiffre)", ["7", "sept"], "Sept."),
  ], "Ce hadith est un texte très connu qui résume plusieurs qualités du croyant."),
  ch("c89-dignite", "pratique", "La dignité et les droits", ["Coran 17:70 ; 5:32 ; 49:13", "Muslim 1218 (sermon d'adieu)"], [
    L("Une dignité pour tous", "Coran 17:70 dit : « Nous avons certes honoré les fils d'Adam ». Coran 5:32 affirme que tuer une personne sans raison équivaut à tuer toute l'humanité, et que sauver une vie équivaut à sauver toute l'humanité.",
      Q.mc("Que dit Coran 5:32 sur la vie ?", ["Sauver une vie équivaut à sauver toute l'humanité", "La vie n'a pas de valeur", "Seuls les croyants comptent", "La guerre est toujours juste"], 0, "")),
    L("Diversité et piété", "Coran 49:13 dit : « Ô hommes ! Nous vous avons créés d'un mâle et d'une femelle, et Nous avons fait de vous des nations et des tribus pour que vous vous entreconnaissiez. Le plus noble d'entre vous auprès d'Allah est le plus pieux ». Dans le sermon d'adieu, le Prophète ﷺ a rappelé le caractère sacré du sang, des biens et de l'honneur (Muslim 1218).",
      Q.tf("Coran 49:13 présente la piété comme critère de noblesse.", true, "")),
  ], [
    Q.mc("Quel verset parle de la diversité des peuples ?", ["Coran 49:13", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.tf("Le Coran affirme la dignité de tous les enfants d'Adam.", true, "Coran 17:70."),
    Q.mc("Selon Coran 49:13, qui est le plus noble ?", ["Le plus pieux", "Le plus riche", "Le plus puissant", "Le plus âgé"], 0, ""),
    Q.match("Associe.", [["17:70", "Dignité des fils d'Adam"], ["5:32", "Sacralité de la vie"], ["49:13", "Diversité et piété"]], "Question avancée."),
    Q.text("Comment dit-on « piété » en arabe ? (la …)", ["taqwa", "takwa"], "La taqwa."),
  ], "Le sermon d'adieu est aussi cité comme un texte fondateur sur l'égalité entre les gens."),
]},
{ n: 90, unit: "L'excellence et la constance", chapters: [
  ch("c90-ihsan", "croyance", "L'ihsan : l'excellence", ["Muslim 8 (hadith de Jibril)", "Bukhari 1", "Bukhari 6464 ; Muslim 783"], [
    L("Adorer comme si tu Le voyais", "Dans le hadith de Jibril, l'ihsan est défini ainsi : « C'est que tu adores Allah comme si tu Le voyais ; et si tu ne Le vois pas, Lui te voit » (Muslim 8). C'est le troisième niveau de la religion, après l'islam et l'iman.",
      Q.mc("Quel est le troisième niveau dans le hadith de Jibril ?", ["L'ihsan", "Le hajj", "La zakat", "Le jeûne"], 0, "")),
    L("La constance", "Le Prophète ﷺ a dit : « Les actes les plus aimés d'Allah sont les plus réguliers, même s'ils sont peu nombreux » (Bukhari 6464 ; Muslim 783). L'intention sincère (Bukhari 1) et la régularité comptent plus que l'intensité passagère.",
      Q.tf("Les actes réguliers sont très aimés d'Allah, même s'ils sont peu nombreux.", true, "Bukhari 6464.")),
  ], [
    Q.order("Remets les trois niveaux du hadith de Jibril dans l'ordre.", ["Islam", "Iman", "Ihsan"], ""),
    Q.tf("L'intention est importante dans tous les actes.", true, "Bukhari 1."),
    Q.mc("Que signifie « ihsan » ?", ["Excellence, faire le bien avec perfection", "Voyage", "Commerce", "Guerre"], 0, ""),
    Q.match("Associe.", [["Islam", "Les cinq piliers"], ["Iman", "Les six piliers de la foi"], ["Ihsan", "Adorer comme si tu Le voyais"]], "Question avancée."),
    Q.text("Comment appelle-t-on le hadith qui définit l'islam, l'iman et l'ihsan ? (de …)", ["jibril", "gabriel", "djibril"], "Le hadith de Jibril."),
  ], "L'ihsan vient de la racine « hasuna » : être beau, bon."),
  ch("c90-routine", "pratique", "Une routine spirituelle quotidienne", ["Coran 33:41-42", "Bukhari 2311 ; Bukhari 5027", "Bukhari 843 ; Muslim 591"], [
    L("Une journée avec Allah", "Coran 33:41-42 dit : « Ô vous qui croyez, invoquez Allah abondamment et glorifiez-Le matin et soir ». Une journée simple peut inclure : les cinq prières, quelques minutes de Coran, les invocations du matin et du soir, une bonne action, et Ayat al-Kursi avant de dormir (Bukhari 2311).",
      Q.mc("Quelle invocation avant de dormir est recommandée dans Bukhari 2311 ?", ["Ayat al-Kursi", "Sourate Al-Kawthar uniquement", "Un long discours", "Aucune"], 0, "")),
    L("Commencer petit", "Le plus important est la régularité (Bukhari 6464). Commence par peu : une page de Coran, le dhikr après la prière (Bukhari 843), une aumône, un acte de gentillesse. L'application peut t'aider à former cette habitude jour après jour.",
      Q.tf("Il vaut mieux commencer petit et rester régulier.", true, "")),
  ], [
    Q.mc("Quelle est la clé d'une bonne routine ?", ["La régularité", "L'intensité ponctuelle", "La vitesse", "L'isolement"], 0, ""),
    Q.tf("Le dhikr après la prière est recommandé.", true, ""),
    Q.mc("Quel verset encourage à invoquer Allah abondamment ?", ["Coran 33:41-42", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.order("Remets dans un ordre logique une journée type.", ["Fajr", "Invocations du matin", "Dhuhr et Asr", "Maghrib et Isha", "Ayat al-Kursi avant de dormir"], ""),
    Q.text("Comment appelle-t-on l'évocation d'Allah ? (le …)", ["dhikr", "zikr", "dikr"], "Le dhikr."),
  ], "De nombreux savants conseillent de prendre des habitudes simples plutôt que des programmes trop lourds."),
]}
);
buildIndex();
