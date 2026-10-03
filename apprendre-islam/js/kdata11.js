/* Monde 11 : Lieux saints et mosquées */
K.world({ id: "w11", n: "Les lieux saints", e: "🕋", c: "#2f6fa5", d: "La Mecque, Médine, Jérusalem et la mosquée de mon quartier.", adv: [
  K.adv("w11a1", "La Mecque et la Kaaba", "🕋", [
    K.c("🕋", "La maison d'Allah", "La Kaaba est un bâtiment noir en forme de cube, au centre de la Grande Mosquée de La Mecque. Elle a été construite par Ibrahim et Ismaïl."),
    K.c("🧭", "Vers elle on prie", "Les musulmans du monde entier se tournent vers la Kaaba pour prier. Cela nous rassemble tous dans la même direction."),
    K.c("⛲", "Zamzam", "Près de la Kaaba, il y a le puits de Zamzam. L'eau a jailli pour Hajar et son fils Ismaïl. Les pèlerins en boivent."),
    K.c("🚶", "Tawaf", "Les pèlerins tournent sept fois autour de la Kaaba : c'est le tawaf. Tous sont égaux, venus de partout."),
  ], [
    K.mc("Où se trouve la Kaaba ?", "À La Mecque", "À Médine", "À Jérusalem"),
    K.mc("Combien de tours fait-on pendant le tawaf ?", "7", "3", "10"),
    K.mc("Comment s'appelle le puits près de la Kaaba ?", "Zamzam", "Safa", "Hira"),
    K.tf("Les musulmans prient en se tournant vers la Kaaba.", true, "C'est la Qibla."),
    K.mc("Qui a construit la Kaaba ?", "Ibrahim et Ismaïl", "Nouh", "Soulayman"),
  ]),
  K.adv("w11a2", "Médine, la ville lumineuse", "🌆", [
    K.c("🌆", "La ville du Prophète", "Médine est la ville où le Prophète ﷺ a émigré. C'est là qu'il a vécu ses dix dernières années, et il y est enterré."),
    K.c("🕌", "La mosquée du Prophète", "La mosquée an-Nabawi a été construite par le Prophète ﷺ et ses compagnons. Elle est l'une des plus importantes du monde."),
    K.c("🌿", "Quba", "La mosquée de Quba, près de Médine, est la première mosquée de l'islam. Elle a été construite dès l'arrivée du Prophète ﷺ."),
    K.c("💚", "Un accueil chaleureux", "Les gens de Médine ont accueilli les émigrés avec une grande générosité. Cela reste un exemple d'entraide."),
  ], [
    K.mc("Dans quelle ville le Prophète ﷺ a-t-il émigré ?", "Médine", "Le Caire", "Damas"),
    K.mc("Quelle est la première mosquée de l'islam ?", "Quba", "Al-Aqsa", "Une mosquée de Paris"),
    K.tf("La mosquée du Prophète ﷺ se trouve à Médine.", true, "On l'appelle an-Nabawi."),
    K.mc("Combien d'années le Prophète ﷺ a-t-il vécu à Médine ?", "Environ dix", "Une", "Quarante"),
    K.tf("Les gens de Médine ont mal accueilli les émigrés.", false, "Ils les ont accueillis avec générosité."),
  ]),
  K.adv("w11a3", "Al-Aqsa à Jérusalem", "🕌", [
    K.c("🕌", "Le troisième lieu saint", "Al-Aqsa, à Jérusalem, est le troisième lieu saint de l'islam, après La Mecque et Médine. Le Prophète ﷺ y a prié pendant le voyage de la nuit."),
    K.c("🧭", "La première Qibla", "Au début de l'islam, les musulmans priaient en direction d'Al-Aqsa, avant que la direction ne change vers la Kaaba."),
    K.c("🌍", "Une terre bénie", "Beaucoup de prophètes ont vécu dans cette région. Elle est chère aux musulmans, aux chrétiens et aux juifs."),
    K.c("🤝", "Respect", "On aime et on respecte ce lieu, et on souhaite qu'il soit un lieu de paix pour tous."),
  ], [
    K.mc("Dans quelle ville se trouve Al-Aqsa ?", "Jérusalem", "La Mecque", "Médine"),
    K.tf("Al-Aqsa est le troisième lieu saint de l'islam.", true, "Après La Mecque et Médine."),
    K.mc("Quelle fut la première Qibla ?", "Al-Aqsa", "La mer", "Le soleil"),
    K.tf("Beaucoup de prophètes ont vécu dans cette région.", true, "C'est une terre bénie."),
    K.mc("Que souhaite-t-on pour ce lieu ?", "La paix", "Des disputes", "Rien"),
  ]),
  K.adv("w11a4", "Ma mosquée", "🏙️", [
    K.c("🕌", "Un lieu pour tous", "La mosquée sert à prier, à apprendre le Coran, à se retrouver et à s'entraider. Elle appartient à tous."),
    K.c("👟", "En entrant", "On enlève ses chaussures, on entre du pied droit en disant « Bismillah », et on entre propre et calme."),
    K.c("🤫", "Dans la mosquée", "On parle doucement, on ne court pas, on ne dérange pas ceux qui prient, et on garde les lieux propres."),
    K.c("🏡", "En sortant", "On sort du pied gauche. On peut aussi demander à Allah de nous accorder de Sa grâce. On dit « Salam » à ceux qu'on croise."),
  ], [
    K.mc("Avec quel pied entre-t-on dans la mosquée ?", "Le droit", "Le gauche", "Les deux"),
    K.tf("On court dans la mosquée.", false, "On est calme et respectueux."),
    K.mc("Que fait-on avec ses chaussures ?", "On les enlève", "On les garde", "On les lance"),
    K.mc("À quoi sert la mosquée ?", "Prier, apprendre et se retrouver", "Jouer au ballon", "Dormir"),
    K.tf("On dit Salam en croisant les gens.", true, "C'est une belle habitude."),
  ]),
] });
