/* Monde 8 : Les piliers de la foi */
K.world({ id: "w8", n: "Les piliers de la foi", e: "💡", c: "#d8559a", d: "Ce que croit le musulman : Allah, les anges, les livres, les prophètes, le Jour dernier, le destin.", adv: [
  K.adv("w8a1", "Les 6 piliers de la foi", "6️⃣", [
    K.c("💡", "Ce que l'on croit", "En plus des 5 piliers de l'islam (ce que l'on fait), il y a 6 piliers de la foi (ce que l'on croit avec le cœur)."),
    K.c("1️⃣", "Les trois premiers", "Croire en Allah, croire en Ses anges, croire en Ses livres."),
    K.c("4️⃣", "Les trois suivants", "Croire en Ses prophètes, croire au Jour dernier, croire au destin (al-qadar)."),
    K.c("💚", "Un cœur tranquille", "Croire ainsi donne confiance et sérénité : on sait qu'Allah est avec nous, qu'Il est juste, et que tout a un sens."),
  ], [
    K.mc("Combien y a-t-il de piliers de la foi ?", "6", "5", "10"),
    K.tf("Croire aux anges fait partie des piliers de la foi.", true, "C'est le deuxième pilier de la foi."),
    K.mc("Croire au destin s'appelle…", "Al-qadar", "Al-adhan", "Al-hadj"),
    K.order("Remets les premiers piliers de la foi dans l'ordre.", "Croire en Allah", "Croire aux anges", "Croire aux livres", "Croire aux prophètes"),
    K.mc("Les piliers de la foi, c'est ce que l'on…", "Croit avec le cœur", "Mange", "Dessine"),
  ]),
  K.adv("w8a2", "Les anges", "😇", [
    K.c("✨", "Faits de lumière", "Les anges sont des créatures invisibles faites de lumière. Ils obéissent toujours à Allah et ne désobéissent jamais."),
    K.c("😇", "Jibril", "Jibril est l'ange chargé d'apporter la révélation aux prophètes. Il a apporté le Coran au Prophète Muhammad ﷺ."),
    K.c("🌧️", "Mikaïl et Israfil", "Mikaïl est chargé de la pluie et des plantes. Israfil soufflera dans la trompe le Jour dernier."),
    K.c("📝", "Ceux qui écrivent", "Deux anges nous accompagnent et notent nos actes, les bons comme les mauvais. Cela nous encourage à bien nous comporter."),
  ], [
    K.mc("De quoi sont faits les anges ?", "De lumière", "D'argile", "De feu"),
    K.mc("Quel ange apporte la révélation ?", "Jibril", "Mikaïl", "Israfil"),
    K.mc("Quel ange est chargé de la pluie ?", "Mikaïl", "Jibril", "Israfil"),
    K.tf("Les anges désobéissent parfois à Allah.", false, "Ils obéissent toujours."),
    K.tf("Des anges notent nos actes.", true, "Cela nous encourage à bien faire."),
  ]),
  K.adv("w8a3", "Les livres révélés", "📚", [
    K.c("📜", "Pourquoi des livres ?", "Allah a envoyé des livres à certains prophètes pour guider les gens. Ils appellent tous à adorer Allah seul."),
    K.c("📜", "Torah, Zabour, Injil", "La Torah a été donnée à Moussa, le Zabour à Dawoud, l'Injil à Issa. Ibrahim a aussi reçu des feuillets."),
    K.c("📗", "Le Coran", "Le Coran est le dernier livre, révélé à Muhammad ﷺ. Il est protégé par Allah, et il est pour tous les gens jusqu'à la fin des temps."),
    K.c("🤝", "Respect", "Le musulman croit à tous les livres révélés par Allah, tels qu'ils ont été révélés, et suit le Coran, dernier message."),
  ], [
    K.match("Relie chaque livre à son prophète.", ["La Torah", "Moussa"], ["Le Zabour", "Dawoud"], ["L'Injil", "Issa"]),
    K.mc("Quel est le dernier livre révélé ?", "Le Coran", "La Torah", "Le Zabour"),
    K.tf("Tous les livres appellent à adorer Allah seul.", true, "Le message est le même."),
    K.mc("À qui a été révélé le Coran ?", "Muhammad ﷺ", "Moussa", "Ibrahim"),
    K.tf("Le Coran est protégé par Allah.", true, "C'est une promesse d'Allah."),
  ]),
  K.adv("w8a4", "Le Jour dernier", "⏳", [
    K.c("⏳", "Tout a une fin", "Notre vie sur terre n'est pas éternelle. Un jour, le monde prendra fin, puis Allah ressuscitera les gens."),
    K.c("⚖️", "La justice", "Ce jour-là, chacun verra ce qu'il a fait. Allah est parfaitement juste : aucune injustice, même la plus petite, ne sera oubliée."),
    K.c("🌳", "Le Paradis", "Allah a préparé le Paradis pour ceux qui croient et font le bien. C'est un lieu de bonheur et de paix sans fin."),
    K.c("💚", "Faire le bien", "Savoir cela nous aide à être honnêtes, généreux et gentils maintenant, car chaque bon acte compte."),
  ], [
    K.tf("Notre vie sur terre dure pour toujours.", false, "Elle prend fin."),
    K.mc("Comment sera le jugement d'Allah ?", "Parfaitement juste", "Injuste", "Au hasard"),
    K.mc("Qu'a préparé Allah pour ceux qui croient et font le bien ?", "Le Paradis", "Un voyage", "Un palais en or sur terre"),
    K.tf("Chaque bon acte compte.", true, "Même un petit geste."),
    K.mc("Qui ressuscitera les gens ?", "Allah", "Les anges", "Les rois"),
  ]),
  K.adv("w8a5", "Le destin (al-qadar)", "🧭", [
    K.c("🧠", "Allah sait tout", "Croire au destin, c'est croire qu'Allah sait tout, avant que cela n'arrive, et que rien n'échappe à Sa volonté."),
    K.c("💪", "Mais on fait des efforts", "Cela ne veut pas dire qu'on ne doit rien faire. On étudie, on travaille, on se soigne, on demande l'aide d'Allah, et on fait de son mieux."),
    K.c("😌", "Rester serein", "Quand une chose difficile arrive, on garde confiance : Allah sait ce qui est mieux pour nous, même si on ne le comprend pas encore."),
    K.c("🙏", "Merci et patience", "Quand c'est une bonne chose, on dit merci à Allah. Quand c'est difficile, on est patient et on prie."),
  ], [
    K.tf("Croire au destin veut dire ne rien faire.", false, "On fait des efforts et on compte sur Allah."),
    K.mc("Quand quelque chose de difficile arrive, on…", "Est patient et on prie", "Se fâche", "Abandonne"),
    K.mc("Que sait Allah ?", "Tout", "Rien", "Seulement le passé"),
    K.tf("Quand une chose arrive, on peut remercier Allah ou être patient.", true, "Merci pour le bien, patience dans l'épreuve."),
    K.mc("Pour réussir, on doit…", "Faire des efforts", "Attendre sans rien faire", "Se plaindre"),
  ]),
] });
