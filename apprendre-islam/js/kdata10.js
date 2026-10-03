/* Monde 10 : Fêtes et calendrier */
K.world({ id: "w10", n: "Fêtes et calendrier", e: "🎉", c: "#e08a1e", d: "Le calendrier de la lune, le Ramadan et les deux Aïd.", adv: [
  K.adv("w10a1", "Le calendrier de la lune", "🌙", [
    K.c("🌙", "Un calendrier lunaire", "Le calendrier musulman suit la lune. Chaque mois commence avec la nouvelle lune. L'année a 12 mois et environ 354 jours."),
    K.c("🔢", "Hégire", "Le calendrier musulman commence avec l'Hégire, le voyage du Prophète ﷺ de La Mecque à Médine, en 622. On l'appelle le calendrier hégirien."),
    K.c("📅", "Les mois", "Il y a Mouharram, Safar, Rabi' al-awwal, Rabi' ath-thani, Joumada al-oula, Joumada ath-thania, Rajab, Cha'ban, Ramadan, Chawwal, Dhou-l-qa'da et Dhou-l-hijja."),
    K.c("🔄", "Les saisons changent", "Comme l'année lunaire est plus courte que l'année du soleil, les fêtes comme le Ramadan se déplacent d'environ 10 jours chaque année dans les saisons."),
  ], [
    K.mc("Quel astre guide le calendrier musulman ?", "La lune", "Le soleil", "Les étoiles"),
    K.mc("Combien de mois compte l'année musulmane ?", "12", "10", "13"),
    K.tf("Le calendrier commence avec l'Hégire.", true, "En 622."),
    K.mc("Quel est le neuvième mois ?", "Ramadan", "Mouharram", "Rajab"),
    K.tf("Le Ramadan tombe toujours à la même saison.", false, "Il se déplace de 10 jours environ chaque année."),
  ]),
  K.adv("w10a2", "Le Ramadan en famille", "🌟", [
    K.c("🌙", "On guette la lune", "Le Ramadan commence quand on voit la nouvelle lune, ou après trente jours du mois précédent. C'est un moment de joie."),
    K.c("🌃", "Les prières de nuit", "Pendant le Ramadan, on prie les taraouih à la mosquée après Icha : de longues prières avec la récitation du Coran."),
    K.c("🍽️", "Suhour et iftar", "On prend un repas avant l'aube, le suhour, puis on rompt le jeûne au coucher du soleil, l'iftar."),
    K.c("💝", "Partager", "Le Ramadan est un mois de générosité. On donne plus, on invite des gens pour l'iftar et on pense à ceux qui ont faim."),
  ], [
    K.mc("Comment s'appelle le repas avant l'aube ?", "Le suhour", "L'iftar", "Le goûter"),
    K.mc("Comment s'appelle le repas de la rupture du jeûne ?", "L'iftar", "Le suhour", "Le déjeuner"),
    K.tf("Le Ramadan est un mois de générosité.", true, "On partage plus."),
    K.mc("Comment s'appellent les prières de nuit du Ramadan ?", "Les taraouih", "Les adhan", "Les doua"),
    K.tf("On jeûne pendant les trois premiers jours seulement.", false, "On jeûne tout le mois."),
  ]),
  K.adv("w10a3", "L'Aïd al-Fitr", "🎉", [
    K.c("🎉", "La fête de la fin du jeûne", "À la fin du Ramadan, c'est l'Aïd al-Fitr, une grande fête de joie et de remerciements à Allah."),
    K.c("🕌", "La prière de l'Aïd", "Le matin, on se lave, on met de beaux vêtements, on mange une datte, puis on va à la prière de l'Aïd avec sa famille."),
    K.c("💰", "La Zakat al-Fitr", "Avant la prière, on donne la Zakat al-Fitr, une petite aumône pour que les pauvres puissent aussi fêter l'Aïd."),
    K.c("🍬", "En famille", "On se rend visite, on s'embrasse en disant « Aïd moubarak » (bonne fête), on mange des gâteaux, et les enfants reçoivent parfois des cadeaux."),
  ], [
    K.mc("Quelle fête marque la fin du Ramadan ?", "L'Aïd al-Fitr", "L'Aïd al-Adha", "Le Hadj"),
    K.tf("On donne la Zakat al-Fitr avant la prière de l'Aïd.", true, "Pour que les pauvres fêtent aussi."),
    K.mc("Que dit-on le jour de l'Aïd ?", "Aïd moubarak", "Bonne nuit", "Au revoir"),
    K.mc("Que fait-on le matin de l'Aïd ?", "On va à la prière de l'Aïd", "On dort jusqu'à midi", "On jeûne"),
    K.tf("On porte de beaux vêtements pour l'Aïd.", true, "C'est une fête."),
  ]),
  K.adv("w10a4", "L'Aïd al-Adha", "🐑", [
    K.c("🐑", "La fête du sacrifice", "L'Aïd al-Adha rappelle l'histoire d'Ibrahim, qui a obéi à Allah. Allah a remplacé son fils par un grand bélier."),
    K.c("📅", "Quand ?", "Elle a lieu le 10 du mois de Dhou-l-hijja, pendant le Hadj. Les musulmans du monde entier la fêtent."),
    K.c("🥩", "Partager en trois", "Ceux qui le peuvent sacrifient un animal, puis partagent la viande : une part pour la famille, une part pour les proches et les voisins, une part pour les pauvres."),
    K.c("💚", "Plus qu'un animal", "Le plus important, c'est la piété et l'obéissance à Allah, qui touchent le cœur. Et partager, c'est donner du bonheur."),
  ], [
    K.mc("Quelle histoire rappelle l'Aïd al-Adha ?", "Celle d'Ibrahim", "Celle de Nouh", "Celle de Yunus"),
    K.mc("En combien de parts partage-t-on la viande ?", "Trois", "Deux", "Dix"),
    K.tf("Les pauvres reçoivent une part.", true, "C'est une fête de partage."),
    K.mc("Quel animal Allah a-t-Il envoyé à la place d'Ismaïl ?", "Un grand bélier", "Un lion", "Un cheval"),
    K.tf("L'Aïd al-Adha a lieu pendant le Ramadan.", false, "Elle a lieu le 10 Dhou-l-hijja."),
  ]),
  K.adv("w10a5", "Jours spéciaux", "✨", [
    K.c("📅", "Le vendredi", "Le vendredi est le meilleur jour de la semaine. On se lave, on porte de beaux vêtements, on va à la prière de Joumou'a et on invoque beaucoup Allah."),
    K.c("🌌", "Laylat al-Qadr", "La Nuit du Destin, pendant les dix derniers jours du Ramadan, vaut mieux que mille mois. On prie, on lit le Coran et on invoque Allah."),
    K.c("🏜️", "Le jour d'Arafa", "Le 9 Dhou-l-hijja, les pèlerins sont à Arafa. Ceux qui ne font pas le Hadj peuvent jeûner ce jour-là."),
    K.c("🕊️", "Le mois de Mouharram", "Mouharram est un mois sacré. Le 10 Mouharram (Achoura), le Prophète ﷺ jeûnait en remerciement à Allah qui avait sauvé Moussa de Pharaon."),
  ], [
    K.mc("Quel est le meilleur jour de la semaine ?", "Le vendredi", "Le lundi", "Le samedi"),
    K.tf("Laylat al-Qadr vaut mieux que mille mois.", true, "C'est une nuit très bénie."),
    K.mc("Quel jour les pèlerins sont-ils à Arafa ?", "Le 9 Dhou-l-hijja", "Le 1er Ramadan", "Le 10 Mouharram"),
    K.mc("Que faisait le Prophète ﷺ à Achoura ?", "Il jeûnait", "Il voyageait", "Il construisait"),
    K.mc("À quelle période se situe Laylat al-Qadr ?", "Les dix derniers jours du Ramadan", "En été", "À l'Aïd"),
  ]),
] });
