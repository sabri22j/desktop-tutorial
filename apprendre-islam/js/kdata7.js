/* Monde 7 : Le Coran */
K.world({ id: "w7", n: "Le Coran", e: "📗", c: "#2a8a4a", d: "Le livre d'Allah : sa révélation, ses sourates, ses messages.", adv: [
  K.adv("w7a1", "La parole d'Allah", "📖", [
    K.c("📖", "Un livre pour nous guider", "Le Coran est la parole d'Allah. Il guide les gens vers le bien. Il a été révélé en arabe au Prophète Muhammad ﷺ."),
    K.c("😇", "Par l'ange Jibril", "C'est l'ange Jibril qui a apporté le Coran au Prophète ﷺ, petit à petit, pendant environ vingt-trois ans."),
    K.c("🌙", "Laylat al-Qadr", "La révélation a commencé pendant la Nuit du Destin (Laylat al-Qadr), une nuit du mois de Ramadan meilleure que mille mois."),
    K.c("🔒", "Bien protégé", "Allah a promis de protéger le Coran. Depuis le Prophète ﷺ, les musulmans l'apprennent par cœur et l'écrivent, et le texte est resté le même."),
  ], [
    K.mc("Dans quelle langue le Coran a-t-il été révélé ?", "L'arabe", "Le français", "L'anglais"),
    K.mc("Quel ange l'a apporté ?", "Jibril", "Mikaïl", "Israfil"),
    K.tf("Le Coran a été révélé en une seule nuit à tout le monde.", false, "Il a été révélé petit à petit pendant environ 23 ans."),
    K.mc("Comment s'appelle la nuit où a commencé la révélation ?", "Laylat al-Qadr", "L'Aïd", "Le Hadj"),
    K.tf("Le Coran est parole d'Allah.", true, "C'est le livre d'Allah."),
  ]),
  K.adv("w7a2", "114 sourates", "🔢", [
    K.c("📚", "Des chapitres", "Le Coran est divisé en 114 chapitres appelés sourates. Chaque sourate est composée de versets, appelés ayat."),
    K.c("1️⃣", "La première et la dernière", "La première sourate est Al-Fatiha. La dernière est An-Nas. La plus longue est Al-Baqara, la plus courte est Al-Kawthar."),
    K.c("3️⃣0️⃣", "Trente parties", "Le Coran est aussi divisé en 30 parties égales appelées jouz'. C'est pratique pour le lire en un mois, par exemple pendant le Ramadan."),
    K.c("🏙️", "La Mecque et Médine", "Certaines sourates ont été révélées à La Mecque, d'autres à Médine. Le Coran nous parle de la foi, des prophètes et du bon comportement."),
  ], [
    K.mc("Combien y a-t-il de sourates ?", "114", "30", "99"),
    K.mc("Quelle est la première sourate ?", "Al-Fatiha", "An-Nas", "Al-Baqara"),
    K.mc("Quelle est la dernière sourate ?", "An-Nas", "Al-Fatiha", "Al-Kawthar"),
    K.tf("Le Coran est divisé en 30 parties.", true, "On les appelle jouz'."),
    K.mc("Comment appelle-t-on un verset ?", "Une ayah", "Une sourate", "Un jouz'"),
  ]),
  K.adv("w7a3", "Les petites sourates", "✨", [
    K.c("☝️", "Al-Ikhlas", "Al-Ikhlas dit : « Dis : Il est Allah, Unique. Allah, le Seul à être imploré. Il n'a pas engendré et n'a pas été engendré, et nul n'est égal à Lui. »", "قل هو الله أحد"),
    K.c("🌅", "Al-Falaq", "Al-Falaq veut dire « l'Aube ». On y demande à Allah de nous protéger des mauvaises choses. Elle fait partie des sourates de protection.", "الفلق"),
    K.c("👥", "An-Nas", "An-Nas veut dire « les Hommes ». On y demande à Allah de nous protéger du mauvais murmure du diable. C'est la dernière sourate du Coran.", "الناس"),
    K.c("🌊", "Al-Kawthar", "Al-Kawthar est la plus courte sourate du Coran, avec seulement trois versets. Elle parle d'un grand bien qu'Allah a donné au Prophète ﷺ.", "الكوثر"),
  ], [
    K.mc("Quelle sourate dit « Il est Allah, Unique » ?", "Al-Ikhlas", "Al-Kawthar", "Al-Falaq"),
    K.mc("Que veut dire Al-Falaq ?", "L'Aube", "La Nuit", "Le Soleil"),
    K.mc("Quelle est la plus courte sourate ?", "Al-Kawthar", "Al-Baqara", "Al-Fatiha"),
    K.tf("An-Nas est la dernière sourate du Coran.", true, "Elle clôt le Coran."),
    K.match("Relie chaque sourate à son sens.", ["Al-Falaq", "L'Aube"], ["An-Nas", "Les Hommes"], ["Al-Ikhlas", "La sincérité"]),
  ]),
  K.adv("w7a4", "Le Coran écrit et mémorisé", "✍️", [
    K.c("🧠", "Les hafiz", "Beaucoup de gens apprennent tout le Coran par cœur : ce sont des hafiz. Le Prophète ﷺ le récitait, et ses compagnons l'apprenaient."),
    K.c("✍️", "Les scribes", "Des compagnons écrivaient les versets au fur et à mesure, comme Zayd ibn Thabit. Le Coran était écrit sur des feuilles, des os plats et des pierres."),
    K.c("📚", "Un seul livre", "Après la mort du Prophète ﷺ, Abou Bakr a fait réunir le Coran, puis Uthman en a fait des copies pour les villes. Le texte est resté le même."),
    K.c("🎶", "Le tajwid", "Pour bien réciter, on apprend le tajwid : prononcer chaque lettre avec soin, de façon douce et belle."),
  ], [
    K.mc("Comment appelle-t-on quelqu'un qui connaît le Coran par cœur ?", "Un hafiz", "Un imam", "Un muezzin"),
    K.mc("Qui a fait réunir le Coran après la mort du Prophète ﷺ ?", "Abou Bakr", "Bilal", "Salman"),
    K.mc("Qu'est-ce que le tajwid ?", "Réciter avec les bonnes règles", "Voyager", "Jeûner"),
    K.tf("Les compagnons ont écrit le Coran.", true, "Zayd ibn Thabit en fut l'un des scribes."),
    K.tf("Le texte du Coran a changé avec le temps.", false, "Il est resté le même."),
  ]),
  K.adv("w7a5", "Bien se comporter avec le Coran", "💚", [
    K.c("🧼", "Respect", "On traite le Coran avec respect : on le pose en hauteur, sur un endroit propre, et on se lave les mains avant de le toucher."),
    K.c("🗣️", "Bismillah", "On commence la lecture en disant « A'oudhou billahi mina-chaytani-r-radjim », je cherche refuge auprès d'Allah contre le diable, puis « Bismillah »."),
    K.c("🤔", "Comprendre", "Lire le Coran, c'est aussi essayer de comprendre ses messages avec l'aide d'un livre de traduction ou d'un adulte, puis les appliquer."),
    K.c("⏱️", "Un peu chaque jour", "Un peu de Coran chaque jour, même une page ou quelques versets, vaut mieux que beaucoup une fois de temps en temps."),
  ], [
    K.mc("Où pose-t-on le Coran ?", "En hauteur sur un endroit propre", "Par terre", "Sous le lit"),
    K.mc("Que dit-on avant de lire ?", "Bismillah", "Au revoir", "Bonne nuit"),
    K.tf("Comprendre le Coran est aussi important que le lire.", true, "On essaie de comprendre et d'appliquer."),
    K.tf("Il vaut mieux lire un peu chaque jour.", true, "La régularité est bonne."),
    K.mc("Que fait-on avant de toucher le Coran ?", "On se lave les mains", "On mange", "On court"),
  ]),
] });
