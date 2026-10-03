/* Monde 3 : Les prophètes */
K.world({ id: "w3", n: "Les prophètes", e: "📖", c: "#2b9d9d", d: "Les messagers d'Allah et leurs belles histoires.", adv: [
  K.adv("w3a1", "Qu'est-ce qu'un prophète ?", "📣", [
    K.c("📣", "Un messager", "Un prophète est un homme choisi par Allah pour transmettre Son message aux gens. Il reçoit la révélation, et il est sincère, honnête et bon."),
    K.c("☝️", "Le même message", "Tous les prophètes ont appelé au même message : adorer Allah seul et faire le bien. Chacun a été envoyé à son peuple."),
    K.c("🔢", "Beaucoup de prophètes", "Allah a envoyé beaucoup de prophètes. Le Coran en cite vingt-cinq par leur nom, comme Adam, Nouh, Ibrahim, Moussa, Issa et Muhammad ﷺ."),
    K.c("🌙", "Le dernier", "Muhammad ﷺ est le dernier des prophètes. On dit « paix sur lui » quand on prononce le nom d'un prophète pour le respecter."),
  ], [
    K.mc("Qui choisit les prophètes ?", "Allah", "Les rois", "Le peuple"),
    K.mc("Quel est le message de tous les prophètes ?", "Adorer Allah seul", "Construire des palais", "Gagner des guerres"),
    K.tf("Muhammad ﷺ est le dernier prophète.", true, "Après lui, il n'y a plus de prophète."),
    K.mc("Combien de prophètes le Coran cite-t-il par leur nom ?", "25", "5", "100"),
    K.tf("Les prophètes sont honnêtes et sincères.", true, "Ils sont les meilleurs exemples."),
  ]),
  K.adv("w3a2", "Adam, le premier homme", "🌱", [
    K.c("🧱", "Créé avec de l'argile", "Allah a créé Adam, le premier homme et le premier prophète, à partir d'argile. Puis Il lui a insufflé la vie."),
    K.c("🧠", "Il apprend les noms", "Allah a appris à Adam le nom de toutes choses. Les anges ont été impressionnés et se sont inclinés devant lui sur l'ordre d'Allah."),
    K.c("🌳", "L'arbre", "Adam et son épouse Hawwa vivaient au Paradis. Allah leur avait interdit de manger d'un arbre. Ils ont oublié l'ordre à cause du diable, Iblis."),
    K.c("🙏", "Le pardon", "Adam et Hawwa ont aussitôt demandé pardon, et Allah leur a pardonné. De là vient la leçon : quand on se trompe, on se repent."),
  ], [
    K.mc("Qui est le premier homme ?", "Adam", "Nouh", "Ibrahim"),
    K.mc("Avec quoi Allah a-t-Il créé Adam ?", "De l'argile", "De l'or", "De la lumière"),
    K.tf("Adam a demandé pardon à Allah et Allah lui a pardonné.", true, "Allah accepte le repentir."),
    K.mc("Comment s'appelle l'épouse d'Adam ?", "Hawwa", "Maryam", "Khadija"),
    K.mc("Qui a poussé Adam à oublier l'ordre d'Allah ?", "Iblis (le diable)", "Un ange", "Un oiseau"),
  ]),
  K.adv("w3a3", "Nouh et le grand bateau", "⛵", [
    K.c("📣", "Un appel très long", "Le prophète Nouh a appelé son peuple pendant très longtemps à n'adorer qu'Allah. Peu de gens ont cru."),
    K.c("🔨", "Le bateau", "Allah lui a ordonné de construire un grand bateau. Les gens se moquaient de lui, mais Nouh a obéi avec patience."),
    K.c("🌧️", "Le déluge", "Quand la grande pluie est venue, Nouh a fait monter les croyants et des couples d'animaux sur le bateau. Ils ont été sauvés."),
    K.c("🕊️", "Le salut", "Après le déluge, le bateau s'est posé sur le mont Joudi. La leçon : Allah sauve ceux qui Lui obéissent et qui ont de la patience."),
  ], [
    K.mc("Que construit Nouh ?", "Un grand bateau", "Une maison", "Une tour"),
    K.mc("Qui monte sur le bateau ?", "Les croyants et des couples d'animaux", "Seulement les rois", "Personne"),
    K.tf("Les gens ont aidé Nouh à construire le bateau.", false, "La plupart se moquaient de lui."),
    K.mc("Quelle qualité montre Nouh ?", "La patience", "La paresse", "La colère"),
    K.order("Remets dans l'ordre l'histoire de Nouh.", "Il appelle son peuple", "Il construit le bateau", "La grande pluie arrive", "Les croyants sont sauvés"),
  ]),
  K.adv("w3a4", "Ibrahim, l'ami d'Allah", "🔥", [
    K.c("🗿", "Il refuse les idoles", "Ibrahim a grandi dans un peuple qui adorait des statues. Il a dit avec sagesse : « Pourquoi adorer ce qui ne voit pas, n'entend pas et ne peut rien ? »"),
    K.c("🔥", "Le feu devient frais", "Son peuple l'a jeté dans un grand feu. Allah a dit : « Ô feu, sois fraîcheur et paix pour Ibrahim. » Il n'a eu aucun mal."),
    K.c("🕋", "La Kaaba", "Avec son fils Ismaïl, Ibrahim a construit la Kaaba à La Mecque, la maison d'Allah vers laquelle on se tourne pour prier."),
    K.c("🐑", "Une grande épreuve", "Allah a mis Ibrahim à l'épreuve. Il a obéi, et Allah a remplacé Ismaïl par un grand bélier. C'est de là que vient la fête de l'Aïd al-Adha."),
  ], [
    K.mc("Qu'est devenu le feu pour Ibrahim ?", "Frais et sans danger", "Plus chaud", "Bleu"),
    K.mc("Qui a construit la Kaaba avec Ibrahim ?", "Son fils Ismaïl", "Nouh", "Moussa"),
    K.tf("Ibrahim adorait les statues.", false, "Il a refusé les idoles et a adoré Allah seul."),
    K.mc("Quelle fête rappelle l'histoire du bélier ?", "L'Aïd al-Adha", "L'Aïd al-Fitr", "Le Ramadan"),
    K.mc("Qu'est-ce que la Kaaba ?", "La maison d'Allah à La Mecque", "Un marché", "Une école"),
  ]),
  K.adv("w3a5", "Yusuf, Ayyoub et Yunus", "🌟", [
    K.c("💭", "Yusuf et son rêve", "Yusuf a rêvé de onze étoiles, du soleil et de la lune qui se prosternaient. Ses frères, jaloux, l'ont jeté dans un puits."),
    K.c("👑", "Du puits au palais", "Yusuf a été emmené en Égypte. Il est resté honnête, malgré les épreuves, et Allah l'a élevé. Il a pardonné à ses frères."),
    K.c("💪", "Ayyoub, le patient", "Le prophète Ayyoub a été éprouvé par la maladie et par la perte de ses biens. Il est resté très patient et a continué à prier Allah. Allah l'a guéri."),
    K.c("🐋", "Yunus et la baleine", "Yunus a quitté son peuple trop vite. Une grande baleine l'a avalé. Dans l'obscurité, il a dit : « Il n'y a de dieu que Toi, gloire à Toi ! » Allah l'a sauvé."),
  ], [
    K.mc("Qui a été jeté dans un puits par ses frères ?", "Yusuf", "Ayyoub", "Yunus"),
    K.mc("Quel prophète est un modèle de patience dans la maladie ?", "Ayyoub", "Yusuf", "Nouh"),
    K.mc("Qui a été avalé par une grande baleine ?", "Yunus", "Ibrahim", "Moussa"),
    K.tf("Yusuf a pardonné à ses frères.", true, "Il a choisi le pardon."),
    K.tf("Yunus a prié Allah dans le ventre de la baleine.", true, "Allah l'a entendu et l'a sauvé."),
  ]),
  K.adv("w3a6", "Moussa, Dawoud, Soulayman et Issa", "✨", [
    K.c("🌊", "Moussa et la mer", "Moussa a été sauvé bébé dans un panier sur le fleuve. Plus tard, Allah l'a envoyé vers Pharaon. Il a reçu la Torah, et Allah a ouvert la mer pour le sauver."),
    K.c("🎵", "Dawoud", "Dawoud (David) était un roi juste et un prophète. Allah lui a donné le Zabour, et une belle voix quand il récitait les louanges d'Allah."),
    K.c("🐜", "Soulayman", "Soulayman (Salomon), fils de Dawoud, comprenait le langage des oiseaux et des fourmis par la permission d'Allah. Il a été un roi sage et reconnaissant."),
    K.c("🌿", "Issa", "Issa (Jésus) est né de Maryam, par la volonté d'Allah, sans père. Il est un prophète d'Allah. Allah lui a donné l'Injil et des miracles par Sa permission."),
  ], [
    K.mc("Qui a reçu la Torah ?", "Moussa", "Dawoud", "Yusuf"),
    K.mc("Quel prophète comprenait le langage des animaux ?", "Soulayman", "Moussa", "Ayyoub"),
    K.mc("Comment s'appelle la maman d'Issa ?", "Maryam", "Hawwa", "Khadija"),
    K.mc("Quel livre a reçu Dawoud ?", "Le Zabour", "L'Injil", "La Torah"),
    K.match("Relie chaque prophète à son histoire.", ["Moussa", "La mer qui s'ouvre"], ["Soulayman", "Le langage des animaux"], ["Issa", "Né de Maryam"]),
  ]),
] });
