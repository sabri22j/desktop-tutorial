/* Monde 6 : La prière pas à pas */
K.world({ id: "w6", n: "La prière pas à pas", e: "🧎", c: "#8e6ad8", d: "Apprends à te préparer et à prier étape par étape.", adv: [
  K.adv("w6a1", "Les ablutions (woudou)", "💧", [
    K.c("💧", "Pourquoi se laver ?", "Avant de prier, on fait les ablutions, appelées woudou. C'est se purifier pour se présenter devant Allah."),
    K.c("1️⃣", "On commence", "On dit « Bismillah ». On se lave les mains, puis la bouche (on se rince), puis le nez (on aspire un peu d'eau et on la rejette)."),
    K.c("2️⃣", "Le visage et les bras", "On se lave le visage, puis les bras jusqu'aux coudes : le bras droit d'abord, puis le gauche."),
    K.c("3️⃣", "Tête, oreilles, pieds", "On passe la main mouillée sur la tête et les oreilles. Enfin, on se lave les pieds jusqu'aux chevilles : le droit, puis le gauche."),
  ], [
    K.mc("Que dit-on au début des ablutions ?", "Bismillah", "Allahou Akbar", "Salam"),
    K.order("Remets les étapes des ablutions dans l'ordre.", "Les mains", "La bouche et le nez", "Le visage", "Les bras", "Les pieds"),
    K.tf("On commence les ablutions par les pieds.", false, "On commence par les mains."),
    K.mc("Jusqu'où lave-t-on les bras ?", "Jusqu'aux coudes", "Jusqu'aux épaules", "Jusqu'aux poignets"),
    K.mc("Comment s'appellent les ablutions ?", "Le woudou", "L'adhan", "Le Hadj"),
  ]),
  K.adv("w6a2", "Les 5 prières du jour", "🌅", [
    K.c("🌄", "Fajr et Dhouhr", "Fajr se prie à l'aube, avant le lever du soleil : 2 unités (rak'at). Dhouhr se prie après que le soleil a dépassé le milieu du ciel : 4 unités."),
    K.c("🌇", "Asr et Maghrib", "Asr se prie l'après-midi : 4 unités. Maghrib se prie juste après le coucher du soleil : 3 unités."),
    K.c("🌃", "Icha", "Icha se prie quand la nuit est tombée : 4 unités."),
    K.c("⏰", "À l'heure", "Chaque prière a son moment. Les horaires changent un peu selon les jours et les villes : on peut les trouver dans un calendrier de prières."),
  ], [
    K.mc("Quelle prière se fait à l'aube ?", "Fajr", "Icha", "Asr"),
    K.mc("Combien d'unités a Maghrib ?", "3", "2", "4"),
    K.match("Relie chaque prière à son nombre d'unités.", ["Fajr", "2"], ["Maghrib", "3"], ["Icha", "4"]),
    K.order("Remets les prières dans l'ordre de la journée.", "Fajr", "Dhouhr", "Asr", "Maghrib", "Icha"),
    K.tf("Maghrib se prie à l'aube.", false, "Maghrib se prie après le coucher du soleil."),
  ]),
  K.adv("w6a3", "L'appel à la prière", "📣", [
    K.c("📣", "L'adhan", "L'adhan est l'appel à la prière. Le muezzin le dit pour annoncer que l'heure de la prière est arrivée."),
    K.c("🗣️", "Ses paroles", "Il commence par « Allahou Akbar », Allah est le plus grand. Puis il témoigne qu'il n'y a de dieu qu'Allah et que Muhammad est le messager d'Allah.", "الله أكبر"),
    K.c("🏃", "Venez à la prière", "Il dit aussi « Hayya 'ala-s-salah » : venez à la prière, et « Hayya 'ala-l-falah » : venez à la réussite."),
    K.c("🧭", "La direction", "On prie en se tournant vers la Qibla, la direction de la Kaaba. Dans une mosquée, un renfoncement appelé mihrab l'indique."),
  ], [
    K.mc("Comment s'appelle l'appel à la prière ?", "L'adhan", "Le woudou", "La zakat"),
    K.mc("Que veut dire « Allahou Akbar » ?", "Allah est le plus grand", "Bonjour", "Merci"),
    K.mc("Comment s'appelle la direction de la prière ?", "La Qibla", "Le mihrab", "La Sunna"),
    K.tf("Le muezzin fait l'appel à la prière.", true, "C'est son rôle."),
    K.mc("Vers quoi se tourne-t-on ?", "La Kaaba", "Le désert", "La lune"),
  ]),
  K.adv("w6a4", "Les gestes de la prière", "🧎", [
    K.c("🙌", "Takbir et debout", "On se met debout, face à la Qibla, en disant « Allahou Akbar ». On récite la sourate Al-Fatiha et une autre sourate."),
    K.c("🙇", "Rukou'", "On dit « Allahou Akbar », on se penche en gardant le dos droit, les mains sur les genoux : c'est le rukou'. On dit « Soubhana Rabbiyal 'Azim »."),
    K.c("🧎", "Soujoud", "On se prosterne : le front, le nez, les mains, les genoux et les orteils touchent le sol. C'est le moment où l'on est le plus proche d'Allah."),
    K.c("👋", "Taslim", "À la fin, on s'assoit et on tourne la tête à droite puis à gauche en disant « As-salamou 'alaykoum wa rahmatoullah »."),
  ], [
    K.order("Remets dans l'ordre.", "Debout", "Rukou' (se pencher)", "Soujoud (prosternation)", "Taslim (salut final)"),
    K.mc("Comment s'appelle la prosternation ?", "Le soujoud", "Le rukou'", "Le taslim"),
    K.tf("En soujoud, le front touche le sol.", true, "On est alors très proche d'Allah."),
    K.mc("Quelle phrase dit-on au début de la prière ?", "Allahou Akbar", "Bismillah seulement", "Salam"),
    K.mc("Que fait-on à la fin de la prière ?", "On salue à droite et à gauche", "On saute", "On chante"),
  ]),
  K.adv("w6a5", "Al-Fatiha", "📖", [
    K.c("📖", "La sourate qu'on récite toujours", "Al-Fatiha, « l'Ouverture », est la première sourate du Coran. On la récite dans chaque unité de la prière.", "الفاتحة"),
    K.c("🙏", "Louer Allah", "Les premiers versets louent Allah : « Louange à Allah, Seigneur des mondes, le Tout Miséricordieux, le Très Miséricordieux, Maître du Jour de la rétribution. »"),
    K.c("🤲", "Seul à Toi on adore", "Ensuite : « C'est Toi seul que nous adorons, et c'est Toi seul dont nous implorons l'aide. » On dit qu'on adore Allah seul."),
    K.c("🛤️", "Le droit chemin", "Enfin, on demande : « Guide-nous dans le droit chemin ». C'est une belle prière que l'on dit plusieurs fois par jour."),
  ], [
    K.mc("Combien de versets a Al-Fatiha ?", "7", "3", "30"),
    K.mc("Que demande-t-on à la fin d'Al-Fatiha ?", "Guide-nous dans le droit chemin", "Donne-nous des jouets", "Fais pleuvoir"),
    K.tf("On récite Al-Fatiha dans chaque unité de prière.", true, "Elle est récitée à chaque rak'a."),
    K.mc("Que veut dire « Al-Fatiha » ?", "L'Ouverture", "La Fin", "Le Voyage"),
    K.mc("Qui adore-t-on selon Al-Fatiha ?", "Allah seul", "Personne", "Plusieurs dieux"),
  ]),
  K.adv("w6a6", "Le vendredi et la mosquée", "🕌", [
    K.c("🕌", "La mosquée", "La mosquée est le lieu où les musulmans prient ensemble. On enlève ses chaussures, on parle doucement et on respecte les autres."),
    K.c("📅", "Le vendredi", "Le vendredi est un jour béni. À midi, les hommes se réunissent à la mosquée pour la prière de Joumou'a, après un sermon (khoutba)."),
    K.c("🧑‍🏫", "L'imam", "L'imam dirige la prière. Tout le monde le suit et se place en rangs bien serrés, épaule contre épaule."),
    K.c("🧒", "Les enfants à la mosquée", "Les enfants sont les bienvenus à la mosquée ! On leur apprend à être calmes et respectueux dans ce lieu spécial."),
  ], [
    K.mc("Que fait-on avec ses chaussures avant d'entrer dans la mosquée ?", "On les enlève", "On les garde", "On les lance"),
    K.mc("Quel jour a lieu la grande prière en groupe ?", "Le vendredi", "Le lundi", "Le mercredi"),
    K.mc("Qui dirige la prière ?", "L'imam", "Le muezzin", "L'enfant"),
    K.tf("À la mosquée, on parle fort.", false, "On parle doucement et on respecte les autres."),
    K.tf("Les enfants sont les bienvenus à la mosquée.", true, "On leur apprend le respect."),
  ]),
] });
