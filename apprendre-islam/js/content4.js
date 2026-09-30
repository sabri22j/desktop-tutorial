/* Niveaux 47 à 50 : Hud, Salih, Lut, Shu'ayb, Yunus, Ayyub, Dawud, Sulayman. Références coraniques citées par chapitre. */
LEVELS.push(
{ n: 47, unit: "Les peuples d'Ad et de Thamud", chapters: [
  ch("c47-hud", "prophetes", "Hud et le peuple d'Ad", ["Coran 7:65-72", "Coran 11:50-60", "Coran 46:21-26", "Coran 69:6-8"], [
    L("Un peuple puissant", "Le peuple d'Ad était fort et prospère : il construisait de hauts monuments (Coran 26:128-129). Hud, l'un des leurs, les appelle à adorer Allah seul et à L'écouter. Les chefs refusent et le traitent d'insensé (7:66).",
      Q.mc("À quel peuple Hud a-t-il été envoyé ?", ["Ad", "Thamud", "Madyan", "Les Bani Israil"], 0, "Coran 7:65.")),
    L("Le vent", "Face au refus, Allah envoie contre eux un vent glacial et violent, pendant sept nuits et huit jours (Coran 69:6-7). Hud et les croyants sont sauvés. Le Coran rappelle cette histoire comme un avertissement contre l'orgueil.",
      Q.tf("Hud et les croyants ont été sauvés.", true, "Coran 11:58.")),
  ], [
    Q.mc("Quel châtiment a touché le peuple d'Ad ?", ["Un vent violent", "Une inondation", "Un tremblement de terre", "Un feu"], 0, "Coran 69:6."),
    Q.tf("Le peuple d'Ad était faible et pauvre.", false, "Il était puissant et prospère."),
    Q.mc("Combien de temps a duré le vent ?", ["Sept nuits et huit jours", "Un jour", "Quarante jours", "Un mois"], 0, "Coran 69:7."),
    Q.match("Associe.", [["Hud", "Prophète envoyé à Ad"], ["Ad", "Peuple puissant, détruit par un vent"], ["Orgueil", "Ce que l'histoire avertit d'éviter"]], ""),
    Q.text("Quel prophète a été envoyé à Ad ? (un prénom)", ["hud", "houd"], "Hud."),
  ], "Une sourate du Coran porte le nom de Hud (la 11e)."),
  ch("c47-salih", "prophetes", "Salih et le peuple de Thamud", ["Coran 7:73-79", "Coran 11:61-68", "Coran 91:11-15", "Coran 15:80-84", "Bukhari 433"], [
    L("La chamelle, un signe", "Salih est envoyé aux Thamud, un peuple qui taillait des maisons dans la montagne (Coran 7:74). Comme signe, Allah leur donne la chamelle d'Allah : un jour elle boit, un autre jour ils boivent (26:155). Salih leur demande de la laisser en paix.",
      Q.mc("Quel signe Allah a-t-il donné aux Thamud ?", ["Une chamelle", "Un bâton", "Une arche", "Une pluie de pierres"], 0, "Coran 7:73.")),
    L("Le châtiment et le rappel", "Les Thamud tuent la chamelle. Un cri violent et un tremblement les anéantissent (Coran 11:67 ; 7:78). Salih et les croyants sont sauvés. Lors de l'expédition de Tabouk, le Prophète ﷺ est passé près de leurs demeures (Al-Hijr) et a conseillé de ne pas y entrer sans pleurer et de garder la crainte d'Allah (Bukhari 433).",
      Q.tf("Les Thamud ont respecté la chamelle.", false, "Ils l'ont tuée.")),
  ], [
    Q.mc("À quel peuple Salih a-t-il été envoyé ?", ["Thamud", "Ad", "Madyan", "Saba"], 0, ""),
    Q.tf("Les Thamud taillaient des maisons dans la montagne.", true, "Coran 7:74 ; 15:82."),
    Q.mc("Comment appelle-t-on le site des Thamud dans le nord du Hedjaz ?", ["Al-Hijr", "Quba", "Mina", "Arafat"], 0, "Coran 15:80."),
    Q.order("Remets dans l'ordre.", ["Appel de Salih", "Apparition de la chamelle", "Les Thamud tuent la chamelle", "Châtiment"], ""),
    Q.text("Quel prophète est envoyé aux Thamud ? (un prénom)", ["salih", "saleh"], "Salih."),
  ], "Le site d'Al-Hijr (Mada'in Salih) est aujourd'hui inscrit au patrimoine mondial de l'UNESCO."),
]},
{ n: 48, unit: "Lut et Shu'ayb", chapters: [
  ch("c48-lut", "prophetes", "Lut (Loth)", ["Coran 7:80-84", "Coran 11:69-83", "Coran 26:160-175", "Coran 66:10"], [
    L("Un avertissement", "Lut, neveu d'Ibrahim, est envoyé à un peuple qui commettait des turpitudes que personne n'avait commises avant eux (Coran 7:80). Il les appelle à la crainte d'Allah et à la pureté, mais ils refusent et veulent le chasser avec les croyants.",
      Q.mc("Qui est Lut par rapport à Ibrahim ?", ["Son neveu", "Son frère", "Son fils", "Son oncle"], 0, "Selon la tradition, son neveu.")),
    L("Les anges et le châtiment", "Des anges visitent Ibrahim, lui annoncent un fils, puis se rendent chez Lut pour détruire la cité. Lut et sa famille sont sauvés, sauf sa femme, restée avec les incroyants (Coran 7:83 ; 66:10). La cité est renversée et une pluie de pierres s'abat sur elle (11:82).",
      Q.tf("La femme de Lut a été sauvée.", false, "Elle est restée parmi les incroyants (Coran 7:83).")),
  ], [
    Q.mc("Quel prophète est le neveu d'Ibrahim ?", ["Lut", "Hud", "Salih", "Yusuf"], 0, ""),
    Q.tf("Les anges sont passés chez Ibrahim avant d'aller chez Lut.", true, "Coran 11:69-77."),
    Q.mc("Qui n'a pas été sauvé dans la famille de Lut ?", ["Sa femme", "Ses filles", "Son fils", "Son frère"], 0, ""),
    Q.match("Associe.", [["Lut", "Neveu d'Ibrahim"], ["Anges", "Messagers du châtiment"], ["Cité de Lut", "Renversée"]], ""),
    Q.text("Comment dit-on « Loth » en arabe ? (un mot)", ["lut", "lout"], "Lut."),
  ], "Le Coran cite le récit de Lut dans plusieurs sourates, dont Hud, Al-A'raf et Ash-Shu'ara."),
  ch("c48-shuayb", "prophetes", "Shu'ayb et Madyan", ["Coran 7:85-93", "Coran 11:84-95", "Coran 26:176-191"], [
    L("La justice dans le commerce", "Shu'ayb est envoyé au peuple de Madyan. Il les appelle à adorer Allah seul et à la justice dans les échanges : « Donnez la pleine mesure et le juste poids » (Coran 11:85). Ils trichaient sur les mesures.",
      Q.mc("De quoi Shu'ayb met-il en garde son peuple ?", ["Tricher sur les mesures et le poids", "Voyager", "Jeûner", "Construire"], 0, "Coran 11:84-85.")),
    L("Le refus et le châtiment", "Les chefs rejettent Shu'ayb et menacent de le chasser. Un tremblement de terre les anéantit (Coran 7:91). Le Coran parle aussi des « gens d'Al-Ayka » (le bois) à qui il est envoyé (26:176-189). Plus tard, Moussa séjournera à Madyan (28:22-23).",
      Q.tf("Moussa a séjourné à Madyan.", true, "Coran 28:22-23.")),
  ], [
    Q.mc("Quelle injustice pratiquait le peuple de Madyan ?", ["Tricher dans les mesures", "Voler des chameaux", "Refuser l'hospitalité", "Piller les caravanes"], 0, ""),
    Q.tf("Shu'ayb a appelé à l'honnêteté dans le commerce.", true, ""),
    Q.mc("Quel prophète s'est réfugié à Madyan plus tard ?", ["Moussa", "Yusuf", "Hud", "Salih"], 0, ""),
    Q.match("Associe.", [["Shu'ayb", "Prophète de Madyan"], ["Madyan", "Terre où Moussa s'est réfugié"], ["Tremblement de terre", "Châtiment de son peuple"]], ""),
    Q.text("Quel prophète est envoyé à Madyan ? (un prénom)", ["shuayb", "chouaib", "shu'ayb", "chu'ayb", "shoaib"], "Shu'ayb."),
  ], "Le message de Shu'ayb rappelle que l'honnêteté dans le commerce fait partie de la foi."),
]},
{ n: 49, unit: "Yunus et Ayyub", chapters: [
  ch("c49-yunus", "prophetes", "Yunus (Jonas)", ["Coran 37:139-148", "Coran 21:87-88", "Coran 10:98", "At-Tirmidhi 3505"], [
    L("Dans le ventre du poisson", "Yunus est envoyé à un peuple nombreux. Il le quitte avant qu'Allah ne le lui permette (Coran 21:87). Embarqué sur un bateau, il est jeté à la mer et avalé par un grand poisson (37:139-142).",
      Q.tf("Yunus a été avalé par un grand poisson.", true, "Coran 37:142.")),
    L("L'invocation", "Dans les ténèbres, Yunus invoque Allah : « Il n'y a de divinité que Toi ! Gloire à Toi ! J'étais du nombre des injustes » (Coran 21:87). Allah l'exauce et le sauve. Son peuple avait fini par croire et a été épargné (10:98). Un hadith recommande cette invocation (At-Tirmidhi 3505).",
      Q.mc("Quelle invocation a répétée Yunus dans les ténèbres ?", ["Lâ ilâha illâ Anta, subhânaka innî kuntu mina z-zâlimîn", "Bismillâh", "Allahu akbar", "Astaghfirullâh uniquement"], 0, ""),
      "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", "Lâ ilâha illâ Anta subhânaka innî kuntu mina z-zâlimîn.", "Coran 21:87",
      "Pas de divinité à part Toi ! Gloire à Toi ! J'ai été vraiment du nombre des injustes."),
  ], [
    Q.mc("Comment le Coran appelle-t-il Yunus dans certains versets ?", ["Dhu n-Nûn (l'homme au poisson)", "Dhu l-Qarnayn", "Dhu l-Kifl", "Dhu l-Fiqâr"], 0, "Coran 21:87."),
    Q.tf("Le peuple de Yunus a fini par croire.", true, "Coran 10:98."),
    Q.mc("Où Yunus a-t-il invoqué Allah ?", ["Dans les ténèbres du ventre du poisson", "Dans le désert", "Sur une montagne", "Dans une grotte"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Départ de Yunus", "Sur le bateau, jeté à la mer", "Avalé par le poisson", "Invocation", "Rejeté sur le rivage"], ""),
    Q.text("Comment dit-on « Jonas » en arabe ? (un mot)", ["yunus", "younous", "yunes"], "Yunus."),
  ], "Coran 10:98 cite le peuple de Yunus comme une cité dont la foi lui a été bénéfique : ils ont cru et le châtiment a été écarté."),
  ch("c49-ayyub", "prophetes", "Ayyub (Job) et la patience", ["Coran 21:83-84", "Coran 38:41-44"], [
    L("Une patience exemplaire", "Ayyub est éprouvé dans sa santé et ses biens. Le Coran ne donne pas de détails sur la maladie, mais insiste sur sa patience. Il se tourne vers Allah : « Le mal m'a touché, et Tu es le plus miséricordieux des miséricordieux » (Coran 21:83).",
      Q.mc("Quelle qualité d'Ayyub le Coran met-il en avant ?", ["La patience", "La richesse", "La force", "Le voyage"], 0, "Coran 38:44."),
      "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ", "Annî massaniya d-durru wa Anta arhamu r-râhimîn.", "Coran 21:83",
      "Le mal m'a touché, et Tu es le plus miséricordieux des miséricordieux."),
    L("La guérison", "Allah lui répond : « Frappe du pied : voici une eau fraîche pour te laver et boire » (Coran 38:42). Il le guérit et lui rend sa famille, avec une grâce de plus. Le Coran le décrit comme « un excellent serviteur, toujours repentant » (38:44).",
      Q.tf("Allah a guéri Ayyub.", true, "Coran 21:84 ; 38:42.")),
  ], [
    Q.mc("Comment Ayyub a-t-il réagi à l'épreuve ?", ["Il est resté patient et s'est tourné vers Allah", "Il a perdu espoir", "Il a quitté son peuple", "Il a cherché la richesse"], 0, "Coran 38:44."),
    Q.tf("Le Coran décrit Ayyub comme un excellent serviteur.", true, "Coran 38:44."),
    Q.mc("Que lui dit Allah de faire pour se guérir (38:42) ?", ["Frapper du pied", "Voyager", "Jeûner", "Construire"], 0, ""),
    Q.match("Associe.", [["Ayyub", "Modèle de patience"], ["Yunus", "Invocation dans les ténèbres"], ["Yusuf", "Belle patience et pardon"]], ""),
    Q.text("Comment dit-on « Job » en arabe ? (un mot)", ["ayyub", "ayoub", "ayub"], "Ayyub."),
  ], "L'expression « patience d'Ayyub » est restée proverbiale chez les musulmans."),
]},
{ n: 50, unit: "Dawud et Sulayman", chapters: [
  ch("c50-dawud", "prophetes", "Dawud (David)", ["Coran 2:246-251", "Coran 34:10-11", "Coran 38:17-26", "Bukhari 1131 ; Muslim 1159"], [
    L("Un roi et un prophète", "Dawud tue Jalut (Goliath) dans la bataille menée par Talut (Coran 2:251), puis Allah lui donne la royauté et la sagesse. Il reçoit le Zabur (Psaumes) (4:163). Allah lui soumet les montagnes et les oiseaux, qui glorifient avec lui (38:18-19), et Il lui rend le fer malléable pour fabriquer des cottes de mailles (34:10-11).",
      Q.mc("Quel livre a reçu Dawud ?", ["Le Zabur", "La Tawrat", "L'Injil", "Le Coran"], 0, "Coran 4:163.")),
    L("Le jeûne de Dawud", "Un hadith dit que le jeûne le plus aimé d'Allah est celui de Dawud : jeûner un jour sur deux (Bukhari 1131 ; Muslim 1159). Il passait aussi une partie de la nuit en prière. Le Coran le décrit comme « fort » et « toujours repentant » (38:17).",
      Q.tf("Le jeûne de Dawud consiste à jeûner un jour sur deux.", true, "Bukhari 1131.")),
  ], [
    Q.mc("Qui Dawud a-t-il vaincu ?", ["Jalut (Goliath)", "Pharaon", "Abraha", "Abu Jahl"], 0, "Coran 2:251."),
    Q.tf("Allah a rendu le fer malléable pour Dawud.", true, "Coran 34:10."),
    Q.mc("Comment s'appelle le livre de Dawud ?", ["Le Zabur", "La Tawrat", "L'Injil", "Le Coran"], 0, ""),
    Q.order("Remets ces prophètes dans l'ordre de leur histoire.", ["Ibrahim", "Moussa", "Dawud", "Issa"], "Ordre généralement admis."),
    Q.text("Comment dit-on « David » en arabe ? (un mot)", ["dawud", "daoud", "dawoud", "daud"], "Dawud."),
  ], "Le mot « Zabur » désigne les Psaumes donnés à Dawud."),
  ch("c50-sulayman", "prophetes", "Sulayman (Salomon)", ["Coran 27:15-44 (An-Naml)", "Coran 34:12-14", "Coran 38:30-40"], [
    L("Un royaume extraordinaire", "Sulayman, fils de Dawud, hérite de la sagesse de son père. Allah lui apprend le langage des oiseaux (Coran 27:16), lui soumet les vents (21:81) et les djinns (34:12-13). Il entend une fourmi avertir les siennes et sourit (27:18-19), puis remercie Allah.",
      Q.mc("Qu'a compris Sulayman d'après le Coran ?", ["Le langage des oiseaux", "Le langage des poissons", "Le langage des montagnes", "Aucun langage"], 0, "Coran 27:16.")),
    L("La huppe et la reine de Saba", "La huppe rapporte à Sulayman l'existence du royaume de Saba, dirigé par une reine (27:22-23). Il lui écrit, la reine vient, constate la puissance de Sulayman et se soumet à Allah (27:44). Le nom Bilqis vient de la tradition, pas du Coran. Face à sa puissance, Sulayman dit : « Ceci est de la grâce de mon Seigneur » (27:40).",
      Q.tf("Le Coran donne le nom Bilqis à la reine de Saba.", false, "Le nom vient de la tradition ; le Coran dit « une femme ».")),
  ], [
    Q.mc("Quel animal rapporte la nouvelle du royaume de Saba ?", ["La huppe", "La fourmi", "Le corbeau", "L'aigle"], 0, "Coran 27:22."),
    Q.tf("Sulayman a remercié Allah de ses bienfaits.", true, "Coran 27:19, 40."),
    Q.mc("Quelle sourate raconte l'histoire de la fourmi et de la huppe ?", ["An-Naml (27)", "Al-Fil (105)", "Yusuf (12)", "Maryam (19)"], 0, ""),
    Q.match("Associe.", [["Dawud", "Père, prophète-roi"], ["Sulayman", "Fils, roi et prophète"], ["An-Naml", "La sourate des fourmis"]], ""),
    Q.text("Comment dit-on « Salomon » en arabe ? (un mot)", ["sulayman", "soulayman", "suleyman", "sulaiman"], "Sulayman."),
  ], "La sourate An-Naml (les fourmis) est la 27e sourate du Coran."),
]}
);
buildIndex();
