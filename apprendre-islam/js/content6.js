/* Niveaux 61 à 70 : après le Prophète ﷺ. Sources : Coran, hadiths, et historiens classiques (At-Tabari, Ibn Kathir, Ibn al-Athir). Les dates sont approximatives (H = hégirien). */
LEVELS.push(
{ n: 61, unit: "Abu Bakr, premier calife", chapters: [
  ch("c61-succession", "histoire", "La succession du Prophète ﷺ", ["Bukhari 3667-3668", "Coran 3:144", "At-Tabari, Tarikh"], [
    L("Le choc et la parole d'Abu Bakr", "À la mort du Prophète ﷺ, les musulmans sont bouleversés. Abu Bakr rappelle : « Celui qui adorait Muhammad, Muhammad est mort ; celui qui adore Allah, Allah est vivant et ne meurt pas », et cite Coran 3:144 (Bukhari 3667-3668).",
      Q.mc("Quel verset Abu Bakr a-t-il rappelé ?", ["Coran 3:144", "Coran 112:1", "Coran 1:1", "Coran 2:255"], 0, "")),
    L("Le choix d'Abu Bakr", "Les Ansar se réunissent à la Saqifa des Banu Sa'ida. Abu Bakr, Umar et Abu Ubayda s'y rendent. Après discussion, Umar prête serment de fidélité à Abu Bakr, puis les autres le suivent. Abu Bakr devient le premier calife.",
      Q.tf("Les Ansar se sont réunis à la Saqifa des Banu Sa'ida.", true, "")),
  ], [
    Q.mc("Qui a été choisi comme premier calife ?", ["Abu Bakr", "Umar", "Ali", "Abu Ubayda"], 0, ""),
    Q.tf("Abu Bakr a rappelé que seul Allah ne meurt pas.", true, ""),
    Q.mc("Comment s'appelle le lieu de réunion des Ansar ?", ["La Saqifa des Banu Sa'ida", "Dar al-Arqam", "Shi'b Abi Talib", "Masjid Quba"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Mort du Prophète ﷺ", "Discours d'Abu Bakr", "Réunion à la Saqifa", "Serment à Abu Bakr"], ""),
    Q.text("Que signifie « calife » ? (un mot)", ["successeur", "khalifa"], "Successeur."),
  ], "Le premier discours d'Abu Bakr comme calife demandait à être obéi tant qu'il obéissait à Allah et à Son messager."),
  ch("c61-ridda", "histoire", "La Ridda et la bataille de Yamama", ["Bukhari 4986", "At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Une crise après la mort du Prophète ﷺ", "Après la mort du Prophète ﷺ, plusieurs tribus refusent de payer la zakat ou abandonnent l'islam, et des faux prophètes apparaissent, comme Musaylima. Abu Bakr décide de maintenir l'unité de la communauté et envoie des armées.",
      Q.mc("Quel faux prophète a été combattu à Yamama ?", ["Musaylima", "Tulayha", "Al-Aswad", "Sajah"], 0, "")),
    L("Yamama et le recueil du Coran", "À Yamama (12 H), sous la direction de Khalid, de nombreux compagnons qui connaissaient le Coran par cœur sont tombés. Umar craint la perte de parties du Coran ; Abu Bakr charge Zayd ibn Thabit de rassembler le Coran en un recueil (Bukhari 4986).",
      Q.tf("Le recueil du Coran a été décidé après la bataille de Yamama.", true, "Bukhari 4986.")),
  ], [
    Q.mc("Qui commande l'armée à Yamama ?", ["Khalid ibn al-Walid", "Ali", "Umar", "Uthman"], 0, ""),
    Q.tf("Abu Bakr a laissé les tribus rompre l'union sans réagir.", false, "Il a maintenu l'unité."),
    Q.mc("Qui a rassemblé le Coran après Yamama ?", ["Zayd ibn Thabit", "Bilal", "Ali", "Salman"], 0, ""),
    Q.match("Associe.", [["Musaylima", "Faux prophète"], ["Yamama", "Bataille de 12 H"], ["Zayd ibn Thabit", "Rassembleur du Coran"]], ""),
    Q.text("Comment appelle-t-on cette période de rébellions ? (la …)", ["ridda"], "La Ridda (apostasie)."),
  ], "Le califat d'Abu Bakr a duré un peu plus de deux ans (11-13 H)."),
]},
{ n: 62, unit: "Umar : conquêtes et organisation", chapters: [
  ch("c62-conquetes", "histoire", "Les grandes conquêtes sous Umar", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya", "Ibn al-Athir, Al-Kamil"], [
    L("Levant, Irak, Perse", "Sous le califat d'Umar (13-23 H), l'armée musulmane l'emporte sur l'empire byzantin à Yarmouk (15 H, vers 636) et sur l'empire perse sassanide à al-Qadisiyya (vers 636-637). Damas et Jérusalem passent sous autorité musulmane.",
      Q.mc("Quelle bataille a été gagnée contre les Byzantins ?", ["Yarmouk", "Qadisiyya", "Badr", "Uhud"], 0, "")),
    L("Égypte et Perse", "Amr ibn al-As conquiert l'Égypte (vers 18-20 H) et fonde Fustat. La bataille de Nihawand (21 H) ouvre la Perse ; on l'appelle « la victoire des victoires ». Les dates exactes varient selon les historiens.",
      Q.tf("Amr ibn al-As est associé à la conquête de l'Égypte.", true, "")),
  ], [
    Q.mc("Contre quel empire s'est déroulée la bataille de Qadisiyya ?", ["Les Perses sassanides", "Les Byzantins", "Les Francs", "Les Mongols"], 0, ""),
    Q.tf("Jérusalem a été remise par traité sous Umar.", true, ""),
    Q.mc("Qui a conquis l'Égypte ?", ["Amr ibn al-As", "Khalid", "Sa'd", "Abu Ubayda"], 0, ""),
    Q.order("Remets dans l'ordre (approximatif).", ["Califat d'Abu Bakr", "Yarmouk", "Qadisiyya", "Conquête de l'Égypte"], ""),
    Q.text("Quelle ville d'Égypte Amr a-t-il fondée ? (Fus…)", ["tat", "fustat"], "Fustat."),
  ], "Les historiens donnent des dates légèrement différentes pour ces événements, d'où les mots « vers » et « environ »."),
  ch("c62-organisation", "histoire", "Umar et l'organisation de l'État", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Des outils pour gouverner", "Face à l'extension du territoire, Umar met en place des provinces, des gouverneurs et des juges. Il crée le diwan, un registre des soldes et des allocations. De nouvelles villes de garnison apparaissent : Bassora, Koufa, Fustat.",
      Q.mc("Comment appelle-t-on le registre des allocations créé par Umar ?", ["Le diwan", "La shura", "Le minbar", "La khutba"], 0, "")),
    L("Le calendrier et la justice", "Umar établit le calendrier hégirien, dont l'an 1 correspond à l'Hégire. Il est connu pour son souci de justice et pour le traité accordé aux habitants de Jérusalem, garantissant leurs lieux de culte et leur sécurité (texte attribué à Umar).",
      Q.tf("Le calendrier hégirien a été instauré sous Umar.", true, "")),
  ], [
    Q.mc("Quelle ville a été fondée comme ville de garnison ?", ["Koufa", "Médine", "La Mecque", "Taïf"], 0, ""),
    Q.tf("Umar a créé un registre pour les allocations.", true, ""),
    Q.mc("À partir de quel événement compte-t-on le calendrier hégirien ?", ["L'Hégire", "La naissance du Prophète ﷺ", "La première révélation", "La conquête de La Mecque"], 0, ""),
    Q.match("Associe.", [["Diwan", "Registre des allocations"], ["Bassora", "Ville de garnison en Irak"], ["Fustat", "Ville fondée en Égypte"]], ""),
    Q.text("Quel mot arabe désigne le « conseil de consultation » ? (la …)", ["shura", "choura"], "La shura."),
  ], "Umar est souvent cité comme exemple de gouvernant qui se rendait accessible à tous."),
]},
{ n: 63, unit: "Fitna : Uthman et Ali", chapters: [
  ch("c63-uthman-fin", "histoire", "La fin du califat d'Uthman", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Douze ans d'expansion", "Uthman (23-35 H) poursuit l'expansion : Afrique du Nord, Arménie, première flotte musulmane, expédition de Chypre (28 H). Il fait aussi établir les exemplaires uniformes du Coran.",
      Q.mc("Quel événement naval date du califat d'Uthman ?", ["L'expédition de Chypre", "La conquête de l'Espagne", "La bataille de Badr", "L'Hégire"], 0, "")),
    L("Les troubles et l'assassinat", "Des mécontentements apparaissent dans certaines provinces. Des insurgés assiègent la maison d'Uthman à Médine, qui refuse que les compagnons versent du sang pour lui. Il est assassiné en 35 H, ce qui ouvre une période de divisions, appelée la fitna.",
      Q.tf("Uthman a été assassiné en 35 H.", true, "")),
  ], [
    Q.mc("Comment appelle-t-on la période de divisions qui suit ?", ["La fitna", "La ridda", "La hijra", "La shura"], 0, ""),
    Q.tf("Uthman a encouragé le combat pour le défendre.", false, "Il a refusé que le sang soit versé pour lui."),
    Q.mc("Dans quelle ville a eu lieu l'assassinat d'Uthman ?", ["Médine", "La Mecque", "Damas", "Koufa"], 0, ""),
    Q.match("Associe.", [["Uthman", "Mushaf unifié"], ["Fitna", "Période de divisions"], ["Chypre", "Expédition navale"]], ""),
    Q.text("Quel mot désigne la « discorde » ? (la …)", ["fitna"], "La fitna."),
  ], "La flotte musulmane de l'époque d'Uthman est l'une des premières de l'histoire de l'islam."),
  ch("c63-ali-califat", "histoire", "Ali : le Chameau, Siffin et la fin", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Le Chameau et Siffin", "Ali devient calife en 35 H et s'installe à Koufa. La bataille du Chameau (36 H) oppose des compagnons, dont Aïcha, Talha et Zubayr, à Ali ; Talha et Zubayr y meurent. La bataille de Siffin (37 H) l'oppose à Mu'awiya et se termine par un arbitrage.",
      Q.mc("Quelle bataille oppose Ali à Mu'awiya ?", ["Siffin", "Le Chameau", "Yarmouk", "Uhud"], 0, "")),
    L("Khawarij et assassinat", "Un groupe, les Khawarij, se sépare d'Ali après l'arbitrage. Ali est assassiné à Koufa en 40 H (661) par l'un d'eux, Ibn Muljam. L'enseignement sunnite appelle à la retenue et au respect de tous les compagnons pour ces événements douloureux.",
      Q.tf("Ali a été assassiné à Koufa en 40 H.", true, "")),
  ], [
    Q.mc("Quelle ville était la capitale d'Ali ?", ["Koufa", "Damas", "Médine", "Bagdad"], 0, ""),
    Q.tf("Les Khawarij se sont séparés d'Ali après l'arbitrage.", true, ""),
    Q.mc("Quelle bataille s'est déroulée en 36 H ?", ["Le Chameau", "Siffin", "Yarmouk", "Hunayn"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Assassinat d'Uthman", "Ali devient calife", "Le Chameau", "Siffin", "Assassinat d'Ali"], "Question avancée."),
    Q.text("Comment appelle-t-on ceux qui se sont séparés d'Ali ? (les …)", ["khawarij", "kharijites", "kharidjites"], "Les Khawarij."),
  ], "Ces événements sont étudiés avec prudence par les savants : on y cherche des enseignements, pas des accusations."),
]},
{ n: 64, unit: "Réconciliation et épreuve", chapters: [
  ch("c64-hasan", "histoire", "Hasan et l'année de la communauté", ["Bukhari 2704", "At-Tabari, Tarikh"], [
    L("Une prédiction", "Hasan ibn Ali, petit-fils du Prophète ﷺ, devient calife après son père. Le Prophète ﷺ avait dit de lui : « Mon fils que voici est un chef : Allah réconciliera par lui deux groupes de musulmans » (Bukhari 2704).",
      Q.mc("Quel petit-fils du Prophète ﷺ est associé à la réconciliation ?", ["Hasan", "Husayn", "Ali", "Hamza"], 0, "")),
    L("L'année de la communauté", "En 41 H, Hasan cède le pouvoir à Mu'awiya pour préserver l'unité et éviter un combat entre musulmans. On appelle cette année « Am al-Jama'a », l'année de la communauté. Mu'awiya établit sa capitale à Damas : c'est le début du califat omeyyade.",
      Q.tf("Hasan a cédé le pouvoir pour éviter une guerre entre musulmans.", true, "")),
  ], [
    Q.mc("Comment appelle-t-on l'année 41 H ?", ["Am al-Jama'a", "Am al-Fil", "Am al-Huzn", "Am al-Wufud"], 0, ""),
    Q.tf("Mu'awiya a fondé le califat omeyyade.", true, ""),
    Q.mc("Quelle ville devient la capitale ?", ["Damas", "Koufa", "Médine", "Bagdad"], 0, ""),
    Q.match("Associe.", [["Hasan", "Réconciliation"], ["Mu'awiya", "Fondateur des Omeyyades"], ["Damas", "Capitale omeyyade"]], ""),
    Q.text("Comment s'appelle cette dynastie ? (les …)", ["omeyyades", "umayyades"], "Les Omeyyades."),
  ], "Le mot « Am al-Jama'a » signifie « l'année de l'union ou de la communauté »."),
  ch("c64-karbala", "histoire", "Husayn et Karbala (61 H)", ["At-Tabari, Tarikh", "Bukhari 2004 (jeûne d'Achoura)", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Un refus", "À la mort de Mu'awiya (60 H), son fils Yazid lui succède. Husayn ibn Ali, petit-fils du Prophète ﷺ, refuse de lui prêter serment. Il quitte Médine pour La Mecque, puis se dirige vers Koufa, dont des habitants lui avaient écrit.",
      Q.mc("Qui refuse de prêter serment à Yazid ?", ["Husayn ibn Ali", "Hasan", "Abu Bakr", "Khalid"], 0, "")),
    L("Karbala", "Husayn et sa petite troupe sont arrêtés à Karbala, en Irak. Il est tué le 10 Muharram 61 H (octobre 680) avec plusieurs membres de sa famille. Ce jour est aussi celui d'Achoura, que le Prophète ﷺ jeûnait (Bukhari 2004). Les musulmans ont souffert de cette tragédie.",
      Q.tf("Husayn a été tué à Karbala en 61 H.", true, "")),
  ], [
    Q.mc("Quel jour a eu lieu la mort de Husayn ?", ["Le 10 Muharram", "Le 1er Ramadan", "Le 9 Dhul-Hijja", "Le 27 Rajab"], 0, ""),
    Q.tf("Le Prophète ﷺ jeûnait le jour d'Achoura.", true, "Bukhari 2004."),
    Q.mc("Où s'est déroulé l'événement ?", ["À Karbala", "À Médine", "À Damas", "À La Mecque"], 0, ""),
    Q.match("Associe.", [["Husayn", "Petit-fils du Prophète ﷺ"], ["Yazid", "Calife omeyyade"], ["Achoura", "10 Muharram"]], ""),
    Q.text("Dans quel pays se trouve Karbala ? (un nom)", ["irak", "iraq"], "En Irak."),
  ], "Le jeûne d'Achoura est recommandé dans la tradition musulmane, indépendamment de l'événement de Karbala."),
]},
{ n: 65, unit: "Les Omeyyades", chapters: [
  ch("c65-omeyyades", "histoire", "Les Omeyyades (661-750)", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Un empire immense", "Sous les Omeyyades, l'empire s'étend de l'Atlantique à l'Indus. En 711, Tariq ibn Ziyad traverse le détroit vers l'Espagne, et Muhammad ibn al-Qasim conquiert le Sind. Damas est la capitale.",
      Q.mc("Qui traverse le détroit vers l'Espagne en 711 ?", ["Tariq ibn Ziyad", "Khalid", "Salman", "Amr ibn al-As"], 0, "")),
    L("Arabe et monuments", "Sous Abd al-Malik (685-705), l'arabe devient la langue de l'administration et une monnaie islamique est frappée. Il fait construire le Dôme du Rocher à Jérusalem (vers 691-692). Son fils al-Walid Ier fait bâtir la Grande Mosquée de Damas.",
      Q.tf("Le Dôme du Rocher date de l'époque omeyyade.", true, "")),
  ], [
    Q.mc("Quelle ville est la capitale des Omeyyades ?", ["Damas", "Bagdad", "Médine", "Le Caire"], 0, ""),
    Q.tf("L'arabe devient la langue de l'administration sous Abd al-Malik.", true, ""),
    Q.mc("Quel monument a été construit à Jérusalem ?", ["Le Dôme du Rocher", "La Mosquée bleue", "L'Alhambra", "Al-Azhar"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Mu'awiya fonde le califat", "Dôme du Rocher", "Conquête de l'Espagne", "Chute des Omeyyades"], ""),
    Q.text("En quelle année les Omeyyades sont-ils renversés par les Abbassides ? (3 chiffres)", ["750"], "750."),
  ], "La Grande Mosquée de Damas abrite, selon la tradition, un sanctuaire dédié à Yahya (Jean-Baptiste)."),
  ch("c65-umar2", "histoire", "Umar ibn Abd al-Aziz", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Un calife réformateur", "Umar ibn Abd al-Aziz règne de 99 à 101 H (717-720), un règne court mais marquant. Il allège les impôts injustes, réforme l'administration et vit simplement. On le compare souvent à Umar ibn al-Khattab.",
      Q.mc("Combien de temps a duré son règne ?", ["Environ trois ans", "Trente ans", "Dix ans", "Un mois"], 0, "")),
    L("Le savoir et la justice", "Il encourage la mise par écrit des hadiths et l'enseignement. On rapporte qu'il a rendu des biens pris injustement. Son règne est cité comme un exemple de justice.",
      Q.tf("Umar ibn Abd al-Aziz est connu pour sa justice.", true, "")),
  ], [
    Q.mc("À quelle dynastie appartient Umar ibn Abd al-Aziz ?", ["Omeyyade", "Abbasside", "Ottomane", "Ayyoubide"], 0, ""),
    Q.tf("Son règne a duré plus de trente ans.", false, "Environ trois ans."),
    Q.mc("Qu'a-t-il encouragé ?", ["La mise par écrit des hadiths", "La guerre", "Le commerce du sel", "La construction d'une flotte"], 0, ""),
    Q.match("Associe.", [["Umar ibn Abd al-Aziz", "Calife omeyyade juste"], ["Abd al-Malik", "Dôme du Rocher"], ["Al-Walid Ier", "Mosquée de Damas"]], ""),
    Q.text("De quelle dynastie est Abd al-Malik ? (les …)", ["omeyyades", "umayyades", "omeyyade"], "Les Omeyyades."),
  ], "On l'appelle parfois « le cinquième calife bien guidé » par admiration."),
]},
{ n: 66, unit: "Les Abbassides et Al-Andalus", chapters: [
  ch("c66-abbassides", "histoire", "Les Abbassides et Bagdad", ["At-Tabari, Tarikh", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("Une nouvelle dynastie", "En 750, les Abbassides renversent les Omeyyades. Le calife al-Mansur fonde Bagdad en 762, appelée « la ville de la paix » (Madinat as-Salam). Elle devient rapidement un grand centre du commerce et du savoir.",
      Q.mc("Quel calife fonde Bagdad ?", ["Al-Mansur", "Harun ar-Rashid", "Umar", "Al-Ma'mun"], 0, "")),
    L("La Maison de la sagesse", "Sous Harun ar-Rashid (786-809) et al-Ma'mun (813-833), Bagdad devient le cœur d'un grand mouvement de traduction et de recherche. La « Maison de la sagesse » (Bayt al-Hikma) réunit des savants qui traduisent et étudient des ouvrages de nombreuses langues.",
      Q.tf("Bayt al-Hikma est associé à un mouvement de traduction.", true, "")),
  ], [
    Q.mc("En quelle année Bagdad est-elle fondée ?", ["762", "622", "1099", "1453"], 0, ""),
    Q.tf("Bagdad est appelée « la ville de la paix ».", true, ""),
    Q.mc("Quel calife est lié à la Maison de la sagesse ?", ["Al-Ma'mun", "Umar", "Mu'awiya", "Abu Bakr"], 0, ""),
    Q.match("Associe.", [["Al-Mansur", "Fondateur de Bagdad"], ["Harun ar-Rashid", "Calife du VIIIe-IXe siècle"], ["Bayt al-Hikma", "Centre de savoir et de traduction"]], ""),
    Q.text("Comment appelle-t-on la dynastie qui a fondé Bagdad ? (les …)", ["abbassides"], "Les Abbassides."),
  ], "Bagdad est située sur le Tigre, en Irak actuel."),
  ch("c66-andalus", "histoire", "Al-Andalus", ["Ibn al-Athir, Al-Kamil", "At-Tabari, Tarikh"], [
    L("Une présence de huit siècles", "À partir de 711, une grande partie de la péninsule ibérique devient Al-Andalus. Abd ar-Rahman Ier fonde l'émirat de Cordoue en 756 ; en 929, Abd ar-Rahman III proclame le califat de Cordoue. La Grande Mosquée de Cordoue est commencée en 785.",
      Q.mc("Quelle ville est la capitale du califat en Andalousie ?", ["Cordoue", "Grenade", "Séville", "Tolède"], 0, "")),
    L("Culture et fin", "Cordoue est un grand centre de sciences et de culture. Plus tard, le royaume de Grenade (dynastie nasride) construit l'Alhambra. La chute de Grenade en 1492 marque la fin d'Al-Andalus.",
      Q.tf("Grenade est tombée en 1492.", true, "")),
  ], [
    Q.mc("Quelle construction appartient à Grenade ?", ["L'Alhambra", "Al-Azhar", "Le Dôme du Rocher", "La Mosquée bleue"], 0, ""),
    Q.tf("Al-Andalus désigne les territoires musulmans de la péninsule ibérique.", true, ""),
    Q.mc("Qui a proclamé le califat de Cordoue en 929 ?", ["Abd ar-Rahman III", "Abd ar-Rahman Ier", "Tariq", "Saladin"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Arrivée de Tariq (711)", "Émirat de Cordoue (756)", "Califat de Cordoue (929)", "Chute de Grenade (1492)"], ""),
    Q.text("Quel général est entré en Espagne en 711 ? (un prénom)", ["tariq", "tarik"], "Tariq ibn Ziyad."),
  ], "Le mot « Gibraltar » vient de « Jabal Tariq », la montagne de Tariq."),
]},
{ n: 67, unit: "Sciences et savants", chapters: [
  ch("c67-sciences", "histoire", "L'âge d'or des sciences", ["Ibn Khallikan, Wafayat al-A'yan", "Ibn Abi Usaybi'a, 'Uyun al-Anba'"], [
    L("Mathématiques et optique", "Al-Khwarizmi (IXe siècle) a écrit un traité d'algèbre, et le mot « algorithme » vient de son nom. Ibn al-Haytham (Xe-XIe siècle) a étudié l'optique et utilisé l'expérimentation dans ses recherches.",
      Q.mc("De quel savant vient le mot « algorithme » ?", ["Al-Khwarizmi", "Ibn Sina", "Ibn al-Haytham", "Al-Biruni"], 0, "")),
    L("Médecine", "Ibn Sina (Avicenne) a rédigé « Le Canon de la médecine », utilisé pendant des siècles. Al-Zahrawi, médecin de Cordoue, a écrit un manuel de chirurgie, « Al-Tasrif ». Ces savants ont développé des connaissances qui ont circulé dans le monde entier.",
      Q.tf("Ibn Sina est l'auteur du Canon de la médecine.", true, "")),
  ], [
    Q.mc("Quel savant est lié à l'optique ?", ["Ibn al-Haytham", "Al-Khwarizmi", "Ibn Sina", "Al-Zahrawi"], 0, ""),
    Q.tf("Al-Zahrawi est un chirurgien de Cordoue.", true, ""),
    Q.mc("Quel ouvrage a écrit Ibn Sina ?", ["Le Canon de la médecine", "Le Livre de l'optique", "Al-Tasrif", "L'algèbre"], 0, ""),
    Q.match("Associe.", [["Al-Khwarizmi", "Algèbre"], ["Ibn al-Haytham", "Optique"], ["Ibn Sina", "Médecine (Canon)"], ["Al-Zahrawi", "Chirurgie"]], "Question avancée."),
    Q.text("De quel mot vient « algèbre » ? (al-…)", ["jabr", "djabr"], "Al-jabr."),
  ], "Le mot « chimie » et le mot « alcool » viennent de l'arabe, comme beaucoup d'autres termes scientifiques."),
  ch("c67-imams", "histoire", "Les quatre imams et les sciences islamiques", ["Ibn Khallikan, Wafayat al-A'yan", "Adh-Dhahabi, Siyar A'lam an-Nubala'"], [
    L("Quatre écoles juridiques", "Quatre grands savants ont donné leur nom aux écoles juridiques sunnites : Abu Hanifa (mort en 150 H, Koufa), Malik ibn Anas (mort en 179 H, Médine ; auteur du Muwatta'), ash-Shafi'i (mort en 204 H ; auteur d'Ar-Risala) et Ahmad ibn Hanbal (mort en 241 H ; auteur du Musnad).",
      Q.mc("Quel imam est l'auteur du Muwatta' ?", ["Malik", "Abu Hanifa", "Ash-Shafi'i", "Ahmad"], 0, "")),
    L("Comprendre les différences", "Ces écoles partagent les mêmes bases (Coran et Sunna) et divergent parfois sur des questions de détail, selon la méthode de déduction. Chaque musulman suit en général une école ou consulte un savant qualifié.",
      Q.tf("Les quatre écoles reposent sur le Coran et la Sunna.", true, "")),
  ], [
    Q.mc("Quel imam vivait à Médine ?", ["Malik", "Abu Hanifa", "Ash-Shafi'i", "Ahmad"], 0, ""),
    Q.tf("Il y a quatre écoles juridiques sunnites principales.", true, ""),
    Q.mc("Quel imam est l'auteur du Musnad ?", ["Ahmad ibn Hanbal", "Malik", "Abu Hanifa", "Ash-Shafi'i"], 0, ""),
    Q.match("Associe.", [["Abu Hanifa", "École hanafite"], ["Malik", "École malikite"], ["Ash-Shafi'i", "École chaféite"], ["Ahmad", "École hanbalite"]], "Question avancée."),
    Q.text("Comment s'appelle l'école de l'imam Malik ? (la … )", ["malikite", "malikisme", "maliki", "malékite", "malekite"], "L'école malikite."),
  ], "Le mot « fiqh » désigne la compréhension et le droit musulman."),
]},
{ n: 68, unit: "Hadith et tafsir", chapters: [
  ch("c68-hadith", "histoire", "Les grands recueils de hadiths", ["Adh-Dhahabi, Siyar A'lam an-Nubala'", "Introduction d'Ibn as-Salah (Muqaddima)"], [
    L("Les six recueils", "Les six grands recueils de hadiths sont : Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami' at-Tirmidhi, Sunan an-Nasa'i et Sunan Ibn Majah. Al-Bukhari (mort en 256 H) et Muslim (mort en 261 H) sont les plus réputés pour leur rigueur.",
      Q.mc("Combien y a-t-il de recueils principaux ?", ["Six", "Deux", "Dix", "Trois"], 0, "")),
    L("Comment vérifie-t-on un hadith ?", "Un hadith se compose d'une chaîne de transmetteurs (isnad) et d'un texte (matn). Les savants étudient la fiabilité de chaque transmetteur et classent les hadiths : sahih (authentique), hasan (bon), da'if (faible). On cite donc les références pour que chacun puisse vérifier.",
      Q.tf("Un hadith est composé d'un isnad et d'un matn.", true, "")),
  ], [
    Q.mc("Que signifie « sahih » ?", ["Authentique", "Faible", "Inventé", "Long"], 0, ""),
    Q.tf("L'isnad désigne la chaîne de transmetteurs.", true, ""),
    Q.mc("Quel savant est l'auteur du Sahih le plus réputé ?", ["Al-Bukhari", "Ibn Majah", "An-Nasa'i", "At-Tirmidhi"], 0, ""),
    Q.match("Associe.", [["Isnad", "Chaîne de transmission"], ["Matn", "Texte du hadith"], ["Da'if", "Faible"]], ""),
    Q.text("Comment appelle-t-on l'ensemble des six recueils ? (al-Kutub as-…)", ["sitta", "sitt"], "Al-Kutub as-Sitta."),
  ], "Al-Bukhari aurait sélectionné ses hadiths parmi des centaines de milliers, selon la tradition."),
  ch("c68-tafsir", "coran", "Le tafsir et les sciences du Coran", ["At-Tabari, Jami' al-Bayan", "Ibn Kathir, Tafsir al-Qur'an al-'Azim"], [
    L("Expliquer le Coran", "Le tafsir est l'explication du Coran. Il se fait d'abord par le Coran lui-même, puis par la Sunna, les paroles des compagnons et la langue arabe. Parmi les grands commentateurs : at-Tabari, al-Qurtubi et Ibn Kathir.",
      Q.mc("Comment appelle-t-on l'explication du Coran ?", ["Le tafsir", "Le hadith", "La sîra", "Le fiqh"], 0, "")),
    L("Les circonstances de révélation", "Les « asbab an-nuzul » sont les circonstances qui ont accompagné la révélation de certains versets. Les savants s'y appuient pour mieux comprendre le contexte, sans réduire la portée générale du texte.",
      Q.tf("Les asbab an-nuzul aident à comprendre le contexte des versets.", true, "")),
  ], [
    Q.mc("Quel savant est l'auteur d'un grand tafsir ?", ["Ibn Kathir", "Ibn al-Haytham", "Al-Khwarizmi", "Al-Zahrawi"], 0, ""),
    Q.tf("Le tafsir s'appuie d'abord sur le Coran lui-même.", true, ""),
    Q.mc("Que sont les asbab an-nuzul ?", ["Les circonstances de révélation", "Les noms d'Allah", "Les piliers de l'islam", "Les sourates courtes"], 0, ""),
    Q.match("Associe.", [["At-Tabari", "Jami' al-Bayan"], ["Ibn Kathir", "Tafsir al-Qur'an al-'Azim"], ["Tafsir", "Explication du Coran"]], ""),
    Q.text("Comment appelle-t-on les circonstances de révélation ? (asbab an-…)", ["nuzul", "nouzoul"], "Asbab an-nuzul."),
  ], "Le mot « tafsir » vient d'une racine qui signifie « éclaircir »."),
]},
{ n: 69, unit: "Croisades et Mongols", chapters: [
  ch("c69-saladin", "histoire", "Les croisades et Salah ad-Din", ["Ibn al-Athir, Al-Kamil", "Ibn Shaddad, Sirat Salah ad-Din"], [
    L("Jérusalem en 1099", "En 1099, les croisés prennent Jérusalem et fondent des États latins au Levant. Des dirigeants musulmans comme Zengi et Nur ad-Din s'efforcent de rassembler les forces de la région.",
      Q.mc("En quelle année les croisés prennent-ils Jérusalem ?", ["1099", "1187", "1258", "1453"], 0, "")),
    L("Hattin et Jérusalem", "Salah ad-Din (Saladin), qui a uni l'Égypte et la Syrie, remporte la bataille de Hattin le 4 juillet 1187, puis reprend Jérusalem en octobre 1187. Il est connu pour avoir épargné la population après la reprise de la ville, selon de nombreux historiens.",
      Q.tf("Salah ad-Din a repris Jérusalem en 1187.", true, "")),
  ], [
    Q.mc("Quelle bataille précède la reprise de Jérusalem ?", ["Hattin", "Badr", "Yarmouk", "Hunayn"], 0, ""),
    Q.tf("Salah ad-Din a régné sur l'Égypte et la Syrie.", true, ""),
    Q.mc("En quelle année a eu lieu la bataille de Hattin ?", ["1187", "1099", "1258", "1492"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Prise de Jérusalem par les croisés", "Nur ad-Din", "Hattin", "Reprise de Jérusalem"], ""),
    Q.text("Comment appelle-t-on Salah ad-Din en Occident ? (un nom)", ["saladin"], "Saladin."),
  ], "Les croisades ont duré près de deux siècles, avec plusieurs expéditions successives."),
  ch("c69-mongols", "histoire", "Les Mongols et Aïn Jalout", ["Ibn al-Athir, Al-Kamil", "Ibn Kathir, Al-Bidaya wa n-Nihaya"], [
    L("La chute de Bagdad", "En 1258, l'armée mongole dirigée par Hülegü prend Bagdad, met fin au califat abbasside de la ville et détruit une grande partie de ses bibliothèques et de sa population. C'est un choc pour le monde musulman.",
      Q.mc("En quelle année Bagdad tombe-t-elle face aux Mongols ?", ["1258", "762", "1492", "1187"], 0, "")),
    L("Aïn Jalout", "En 1260, les Mamelouks d'Égypte, avec Qutuz et Baybars, arrêtent les Mongols à la bataille d'Aïn Jalout, en Palestine. C'est l'une des premières grandes défaites mongoles.",
      Q.tf("Les Mamelouks ont battu les Mongols à Aïn Jalout.", true, "")),
  ], [
    Q.mc("Qui a arrêté les Mongols en 1260 ?", ["Les Mamelouks", "Les Omeyyades", "Les Abbassides", "Les Ottomans"], 0, ""),
    Q.tf("La bataille d'Aïn Jalout a eu lieu en 1260.", true, ""),
    Q.mc("Quelle ville est prise par les Mongols en 1258 ?", ["Bagdad", "Damas", "Le Caire", "Médine"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Fondation de Bagdad", "Reprise de Jérusalem", "Chute de Bagdad", "Aïn Jalout"], ""),
    Q.text("Quelle dynastie d'Égypte bat les Mongols ? (les …)", ["mamelouks", "mamluks", "mamlouks"], "Les Mamelouks."),
  ], "Les Mamelouks étaient à l'origine des soldats d'origine esclave qui ont pris le pouvoir."),
]},
{ n: 70, unit: "Les Ottomans et les grandes mosquées", chapters: [
  ch("c70-ottomans", "histoire", "Les Ottomans", ["Ibn Kathir, Al-Bidaya wa n-Nihaya", "Histoire de l'Empire ottoman (travaux d'historiens)"], [
    L("Un grand empire", "La dynastie ottomane naît vers 1299 sous Osman. En 1453, Mehmed II prend Constantinople, qui devient Istanbul. Sous Soliman le Magnifique (1520-1566), l'empire est à son apogée.",
      Q.mc("Qui prend Constantinople en 1453 ?", ["Mehmed II", "Saladin", "Harun ar-Rashid", "Tariq"], 0, "")),
    L("La fin du califat", "L'empire ottoman se maintient pendant plus de six siècles. Le califat est aboli en 1924 par la République turque, mettant fin à une institution qui remontait à Abu Bakr.",
      Q.tf("Le califat a été aboli en 1924.", true, "")),
  ], [
    Q.mc("Quelle ville devient capitale ottomane après 1453 ?", ["Istanbul", "Bagdad", "Damas", "Le Caire"], 0, ""),
    Q.tf("Le califat a été aboli en 1924.", true, ""),
    Q.mc("Quel sultan est appelé « le Magnifique » ?", ["Soliman", "Mehmed II", "Osman", "Selim Ier"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Fondation de l'empire (vers 1299)", "Prise de Constantinople (1453)", "Soliman le Magnifique", "Abolition du califat (1924)"], ""),
    Q.text("Quel ancien nom porte Istanbul ? (Constan…)", ["tinople", "constantinople"], "Constantinople."),
  ], "Le Palais de Topkapi, à Istanbul, fut la résidence des sultans pendant près de quatre siècles."),
  ch("c70-mosquees", "histoire", "Grandes mosquées et universités", ["Ibn Khallikan, Wafayat al-A'yan", "Histoire de l'architecture islamique"], [
    L("Des lieux de savoir", "Al-Qarawiyyin, à Fès, est fondée en 859 par Fatima al-Fihri et est considérée comme l'une des plus anciennes universités encore en activité. Al-Azhar, au Caire, est fondée à la fin du Xe siècle par les Fatimides.",
      Q.mc("Qui a fondé Al-Qarawiyyin ?", ["Fatima al-Fihri", "Fatima az-Zahra", "Aïcha", "Khadija"], 0, "")),
    L("Des monuments célèbres", "La Mosquée sacrée (La Mecque) abrite la Kaaba ; la Mosquée du Prophète est à Médine ; Al-Aqsa est à Jérusalem. Parmi les grandes réalisations : la Grande Mosquée de Cordoue, la Mosquée d'Ibn Tulun au Caire et la Mosquée bleue d'Istanbul (début du XVIIe siècle).",
      Q.tf("La Mosquée bleue est à Istanbul.", true, "")),
  ], [
    Q.mc("Dans quelle ville se trouve Al-Azhar ?", ["Le Caire", "Fès", "Cordoue", "Istanbul"], 0, ""),
    Q.tf("Al-Qarawiyyin se trouve à Fès.", true, ""),
    Q.mc("Quelle mosquée abrite la Kaaba ?", ["La Mosquée sacrée (Masjid al-Haram)", "La Mosquée du Prophète", "Al-Aqsa", "La Mosquée bleue"], 0, ""),
    Q.match("Associe.", [["Al-Qarawiyyin", "Fès"], ["Al-Azhar", "Le Caire"], ["Masjid al-Haram", "La Mecque"], ["Mosquée bleue", "Istanbul"]], "Question avancée."),
    Q.text("Quelle mosquée de Jérusalem est l'un des trois lieux saints ? (Al-…)", ["aqsa", "aqsâ"], "Al-Aqsa."),
  ], "La tradition mentionne trois mosquées vers lesquelles on entreprend un voyage pour prier : Al-Haram, Al-Nabawi et Al-Aqsa (Bukhari 1189)."),
]}
);
buildIndex();
