/* Niveaux 51 à 60 : les compagnons et les Mères des croyants. Références : Coran, hadiths (Bukhari/Muslim/Tirmidhi) et Sîra. */
LEVELS.push(
{ n: 51, unit: "Umar et Uthman", chapters: [
  ch("c51-umar", "compagnons", "Umar ibn al-Khattab, al-Faruq", ["Sîra d'Ibn Hichâm", "Bukhari 3700 (assassinat d'Umar)"], [
    L("Celui qui distingue", "Umar ibn al-Khattab est surnommé al-Faruq, « celui qui distingue le vrai du faux ». Après sa conversion, les musulmans prient plus ouvertement. Il est le beau-père du Prophète ﷺ : sa fille Hafsa est l'une des Mères des croyants.",
      Q.mc("Quel surnom porte Umar ?", ["Al-Faruq", "As-Siddiq", "Dhu an-Nurayn", "Sayf Allah"], 0, "")),
    L("Un calife juste", "Désigné par Abu Bakr, Umar dirige les musulmans de 13 à 23 H (634-644). Sous son califat, la Syrie, l'Égypte, l'Irak et la Perse passent sous autorité musulmane, Jérusalem se rend par traité, et le calendrier de l'Hégire est mis en place. Il meurt poignardé pendant la prière de l'aube en 23 H (Bukhari 3700).",
      Q.tf("Le calendrier hégirien est adopté sous le califat d'Umar.", true, "")),
  ], [
    Q.mc("Qui a désigné Umar comme calife ?", ["Abu Bakr", "Le Prophète ﷺ", "Ali", "Uthman"], 0, ""),
    Q.tf("Umar est mort assassiné pendant la prière de l'aube.", true, "Bukhari 3700."),
    Q.mc("Quelle fille d'Umar est une Mère des croyants ?", ["Hafsa", "Aïcha", "Khadija", "Safiyya"], 0, ""),
    Q.order("Remets les quatre premiers califes dans l'ordre.", ["Abu Bakr", "Umar", "Uthman", "Ali"], ""),
    Q.text("Quel calendrier a été instauré sous Umar ? (le calendrier … )", ["hegirien", "hégirien", "hijri", "hijrî", "hegire", "hégire"], "Le calendrier hégirien."),
  ], "Umar est appelé « Amir al-Mu'minin » (Commandeur des croyants) : il est le premier à avoir porté ce titre."),
  ch("c51-uthman", "compagnons", "Uthman ibn Affan, Dhu an-Nurayn", ["At-Tirmidhi 3700, 3703", "Bukhari 4987 (copies du Coran)", "Sîra d'Ibn Hichâm"], [
    L("Le possesseur des deux lumières", "Uthman ibn Affan épouse d'abord Ruqayya, fille du Prophète ﷺ, puis, après son décès, Umm Kulthum : on l'appelle Dhu an-Nurayn, « celui des deux lumières ». Il est connu pour sa pudeur et sa générosité : il finance l'armée de Tabouk et achète le puits de Rouma pour les musulmans (At-Tirmidhi 3700, 3703).",
      Q.mc("Pourquoi appelle-t-on Uthman Dhu an-Nurayn ?", ["Il a épousé deux filles du Prophète ﷺ", "Il avait deux épées", "Il avait deux frères", "Il a construit deux mosquées"], 0, "")),
    L("Le Coran en un seul texte", "Calife de 23 à 35 H, Uthman fait établir des exemplaires identiques du Coran à partir de la copie de référence confiée à Hafsa. Zayd ibn Thabit et d'autres compagnons les copient, et ils sont envoyés dans les grandes villes (Bukhari 4987). Uthman est assassiné en 35 H dans sa maison, alors qu'il lisait le Coran, selon les récits.",
      Q.tf("Sous Uthman, des exemplaires du Coran ont été envoyés dans les grandes villes.", true, "Bukhari 4987.")),
  ], [
    Q.mc("Quel calife a fait copier le Coran en exemplaires identiques ?", ["Uthman", "Umar", "Ali", "Abu Bakr"], 0, ""),
    Q.tf("Uthman a financé en partie l'armée de Tabouk.", true, "At-Tirmidhi 3700."),
    Q.mc("Qui a dirigé la copie des exemplaires ?", ["Zayd ibn Thabit", "Bilal", "Khalid", "Salman"], 0, ""),
    Q.match("Associe chaque calife à son surnom.", [["Abu Bakr", "As-Siddiq"], ["Umar", "Al-Faruq"], ["Uthman", "Dhu an-Nurayn"]], ""),
    Q.text("Combien de filles du Prophète ﷺ Uthman a-t-il épousées ? (un chiffre)", ["2", "deux"], "Deux : Ruqayya puis Umm Kulthum."),
  ], "Les exemplaires d'Uthman sont appelés « al-mushaf al-'uthmânî »."),
]},
{ n: 52, unit: "Ali et Fatima", chapters: [
  ch("c52-ali", "compagnons", "Ali ibn Abi Talib", ["Bukhari 3701 (Khaybar)", "Bukhari 3706 ; Muslim 2404", "Sîra d'Ibn Hichâm"], [
    L("Élevé auprès du Prophète ﷺ", "Ali est le cousin du Prophète ﷺ, fils d'Abu Talib. Il a grandi dans sa maison et a embrassé l'islam très jeune. La nuit de l'Hégire, il dort dans le lit du Prophète ﷺ pour tromper les poursuivants. Il épouse Fatima, la fille du Prophète ﷺ.",
      Q.mc("Quel lien de parenté avait Ali avec le Prophète ﷺ ?", ["Cousin", "Oncle", "Frère", "Neveu"], 0, "")),
    L("Courage et savoir", "À Khaybar, le Prophète ﷺ annonce qu'il donnera l'étendard à un homme qu'Allah et Son messager aiment : ce sera Ali (Bukhari 3701). Il lui a aussi dit : « Tu es pour moi comme Haroun pour Moussa, mais il n'y a pas de prophète après moi » (Bukhari 3706). Ali est le quatrième calife (35-40 H) et meurt assassiné à Koufa en 40 H.",
      Q.mc("Quel est le rang d'Ali parmi les califes bien guidés ?", ["Le quatrième", "Le premier", "Le deuxième", "Le troisième"], 0, "")),
  ], [
    Q.mc("Quelle ville était le centre du califat d'Ali ?", ["Koufa", "Médine", "La Mecque", "Damas"], 0, ""),
    Q.tf("Ali a dormi dans le lit du Prophète ﷺ lors de l'Hégire.", true, ""),
    Q.mc("Qui est l'épouse d'Ali ?", ["Fatima", "Aïcha", "Khadija", "Hafsa"], 0, ""),
    Q.match("Associe.", [["Hasan et Husayn", "Fils d'Ali et de Fatima"], ["Abu Talib", "Père d'Ali"], ["Khaybar", "Expédition où il porta l'étendard"]], ""),
    Q.text("Comment appelle-t-on les quatre premiers califes ? (les … bien guidés)", ["rashidun", "rachidoun", "rashidoun", "rachidun"], "Les Rashidun."),
  ], "Le surnom « Abu Turab » (père de la poussière) vient d'un épisode où le Prophète ﷺ l'a trouvé endormi sur la terre (Bukhari 441)."),
  ch("c52-fatima", "compagnons", "Fatima az-Zahra", ["Bukhari 3714 (une part de moi)", "Bukhari 4240", "Sîra d'Ibn Hichâm"], [
    L("La fille du Prophète ﷺ", "Fatima est la fille de Muhammad ﷺ et de Khadija. Elle est mariée à Ali et mère de Hasan, Husayn, Zaynab et Umm Kulthum. Le Prophète ﷺ a dit : « Fatima est une part de moi » (Bukhari 3714).",
      Q.mc("Qui est la mère de Fatima ?", ["Khadija", "Aïcha", "Hafsa", "Sawda"], 0, "")),
    L("Une vie simple", "Fatima a vécu modestement, en s'occupant elle-même des tâches de la maison. Elle est décédée environ six mois après son père (Bukhari 4240). Parmi ses titres, on cite « az-Zahra » (la rayonnante).",
      Q.tf("Fatima est décédée peu de temps après le Prophète ﷺ.", true, "Environ six mois, selon Bukhari 4240.")),
  ], [
    Q.mc("Quel titre porte Fatima ?", ["Az-Zahra", "Al-Faruq", "As-Siddiqa uniquement", "Umm al-Mu'minin"], 0, ""),
    Q.tf("Fatima est la fille de Khadija et du Prophète ﷺ.", true, ""),
    Q.mc("Qui sont ses deux fils ?", ["Hasan et Husayn", "Ali et Umar", "Qasim et Abdallah", "Zayd et Usama"], 0, ""),
    Q.match("Associe.", [["Fatima", "Fille du Prophète ﷺ"], ["Ali", "Son époux"], ["Khadija", "Sa mère"]], ""),
    Q.text("Dans quel ordre de naissance est Fatima parmi les filles du Prophète ﷺ ? (la … )", ["derniere", "dernière", "cadette", "plus jeune"], "La dernière (la cadette)."),
  ], "Fatima est la seule des enfants du Prophète ﷺ qui lui a survécu, selon les récits."),
]},
{ n: 53, unit: "Aïcha et Khalid", chapters: [
  ch("c53-aisha", "compagnons", "Aïcha bint Abi Bakr", ["Bukhari 3 (récit de la première révélation)", "Sîra d'Ibn Hichâm"], [
    L("Une épouse savante", "Aïcha est la fille d'Abu Bakr et l'une des épouses du Prophète ﷺ, « Mère des croyants ». Elle a vécu auprès de lui et a retenu une grande part de son enseignement. Elle a rapporté plus de deux mille hadiths, dont celui de la première révélation (Bukhari 3).",
      Q.mc("Qui est le père d'Aïcha ?", ["Abu Bakr", "Umar", "Abu Sufyan", "Abu Talib"], 0, "")),
    L("Une enseignante", "Après la mort du Prophète ﷺ, Aïcha enseigne de nombreux élèves, comme Urwa ibn az-Zubayr. Elle corrige parfois des compagnons en rappelant ce qu'elle avait entendu. Le Prophète ﷺ est mort et enterré dans sa maison. Elle décède à Médine vers 58 H.",
      Q.tf("Le Prophète ﷺ est mort dans la maison d'Aïcha.", true, "")),
  ], [
    Q.mc("Quel titre porte Aïcha, comme les autres épouses du Prophète ﷺ ?", ["Mère des croyants", "Sœur des croyants", "Reine", "Fille de Médine"], 0, "Coran 33:6."),
    Q.tf("Aïcha a transmis de nombreux hadiths.", true, ""),
    Q.mc("Où Aïcha est-elle enterrée ?", ["Au cimetière d'al-Baqi' à Médine", "À La Mecque", "À Damas", "À Jérusalem"], 0, ""),
    Q.match("Associe.", [["Aïcha", "Fille d'Abu Bakr"], ["Hafsa", "Fille d'Umar"], ["Umm Habiba", "Fille d'Abu Sufyan"]], ""),
    Q.text("Quel verset parle des épouses comme mères des croyants ? (Coran 33:…)", ["6"], "Coran 33:6."),
  ], "Les savants ont souvent consulté Aïcha pour des questions de religion après la mort du Prophète ﷺ."),
  ch("c53-khalid", "compagnons", "Khalid ibn al-Walid, l'épée d'Allah", ["Bukhari 4262 (Mu'ta)", "Sîra d'Ibn Hichâm"], [
    L("Un adversaire devenu compagnon", "Khalid ibn al-Walid était un grand chef de cavalerie des Quraysh ; son action à Uhud a retourné la bataille. Il embrasse l'islam vers 8 H, avant la conquête de La Mecque.",
      Q.tf("Khalid a combattu les musulmans à Uhud avant de se convertir.", true, "")),
    L("L'épée d'Allah", "À la bataille de Mu'ta (8 H), après la mort des trois chefs désignés, Khalid prend le commandement et sauve l'armée. Le Prophète ﷺ le surnomme « une épée parmi les épées d'Allah » (Bukhari 4262). Sous Abu Bakr et Umar, il commande de grandes campagnes, notamment à Yarmouk (15 H).",
      Q.mc("Quel surnom a reçu Khalid ?", ["L'épée d'Allah", "Le lion d'Allah", "L'ami d'Allah", "Le véridique"], 0, "")),
  ], [
    Q.mc("Quel surnom a reçu Khalid ibn al-Walid ?", ["L'épée d'Allah", "Le lion d'Allah", "L'ami d'Allah", "Le véridique"], 0, ""),
    Q.tf("Khalid s'est converti avant la bataille d'Uhud.", false, "Il s'est converti vers 8 H, donc après Uhud (3 H)."),
    Q.mc("Quelle bataille a rendu célèbre Khalid sous Umar ?", ["Yarmouk", "Badr", "Hudaybiya", "Le Fossé"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Uhud (contre les musulmans)", "Conversion de Khalid", "Mu'ta", "Yarmouk"], ""),
    Q.text("Quel surnom porte Hamza ? (le … d'Allah)", ["lion"], "Le lion d'Allah."),
  ], "Khalid est mort dans son lit, près de Homs, alors qu'il souhaitait mourir en martyr."),
]},
{ n: 54, unit: "Mus'ab et Salman", chapters: [
  ch("c54-musab", "compagnons", "Mus'ab ibn Umayr", ["Sîra d'Ibn Hichâm", "Bukhari 1276"], [
    L("Renoncer au confort", "Mus'ab ibn Umayr était un jeune Mecquois aisé, connu pour son élégance. En embrassant l'islam, il renonce au confort et vit simplement, au point que le Prophète ﷺ l'a regardé avec émotion.",
      Q.mc("Comment était Mus'ab avant l'islam ?", ["Un jeune homme aisé", "Un berger pauvre", "Un esclave", "Un mendiant"], 0, "")),
    L("Le premier envoyé", "Après le premier pacte d'Aqaba, le Prophète ﷺ envoie Mus'ab à Yathrib pour enseigner le Coran. Son travail ouvre le cœur de nombreux habitants, dont des chefs des Ansar. Il porte l'étendard à Uhud et y meurt en martyr ; son linceul était si court qu'il fallait couvrir sa tête ou ses pieds (Bukhari 1276).",
      Q.tf("Mus'ab a été envoyé à Yathrib pour enseigner.", true, "")),
  ], [
    Q.mc("Où Mus'ab est-il tombé en martyr ?", ["À Uhud", "À Badr", "À Tabouk", "À Khaybar"], 0, ""),
    Q.tf("Mus'ab a enseigné le Coran à Yathrib.", true, ""),
    Q.mc("Quel a été son rôle à Uhud ?", ["Porte-étendard", "Archer", "Cavalier", "Médecin"], 0, ""),
    Q.match("Associe.", [["Mus'ab", "Premier envoyé à Yathrib"], ["Bilal", "Premier muezzin"], ["Zayd ibn Thabit", "A rassemblé le Coran"]], ""),
    Q.text("Dans quelle ville a-t-il enseigné avant l'Hégire ? (un nom)", ["yathrib", "medine", "médine"], "Yathrib (Médine)."),
  ], "Son départ pour Yathrib est souvent cité comme le début de la diffusion de l'islam à Médine."),
  ch("c54-salman", "compagnons", "Salman al-Farisi, le chercheur de vérité", ["Sîra d'Ibn Hichâm", "Coran 33:9-25"], [
    L("Un long voyage", "Salman est originaire de Perse. Son récit, rapporté dans la Sîra et le Musnad d'Ahmad, raconte sa recherche de la vérité : il quitte sa famille, suit des hommes de religion, puis est vendu comme esclave et arrive à Yathrib. Il y reconnaît le Prophète ﷺ et embrasse l'islam.",
      Q.mc("De quel pays venait Salman ?", ["La Perse", "L'Égypte", "La Syrie", "L'Abyssinie"], 0, "")),
    L("L'idée du fossé", "Le Prophète ﷺ l'aide à retrouver sa liberté. Lors du siège de Médine, Salman propose de creuser un fossé, une technique de défense utilisée en Perse. Cette idée protège la ville (bataille du Fossé, 5 H).",
      Q.tf("Salman a proposé de creuser le fossé de Médine.", true, "")),
  ], [
    Q.mc("Quelle idée Salman a-t-il apportée ?", ["Creuser un fossé", "Construire une tour", "Fuir à La Mecque", "Attaquer la nuit"], 0, ""),
    Q.tf("Salman était arabe de La Mecque.", false, "Il était d'origine perse."),
    Q.mc("Quelle bataille est liée à Salman ?", ["Le Fossé (Khandaq)", "Badr", "Hudaybiya", "Hunayn"], 0, ""),
    Q.match("Associe.", [["Salman", "Venu de Perse"], ["Bilal", "D'origine abyssine"], ["Suhayb", "Connu comme « le Romain »"]], ""),
    Q.text("Quel mot arabe désigne « le Persan » ? (Al-…)", ["farisi", "fârisî", "farsi"], "Al-Farisi."),
  ], "Salman est l'exemple souvent cité d'une recherche sincère de la vérité."),
]},
{ n: 55, unit: "Confiance et savoir", chapters: [
  ch("c55-ubayda-muadh", "compagnons", "Abu Ubayda et Mu'adh ibn Jabal", ["Bukhari 3744 (Abu Ubayda)", "Bukhari 1395 (Mu'adh au Yémen)"], [
    L("L'homme de confiance de la communauté", "Abu Ubayda ibn al-Jarrah est surnommé « l'homme de confiance de cette communauté » par le Prophète ﷺ (Bukhari 3744). Il est l'un des dix promis au Paradis et le chef d'armées importantes en Syrie sous Umar.",
      Q.mc("Quel titre a reçu Abu Ubayda ?", ["L'homme de confiance de la communauté", "L'épée d'Allah", "Le lion d'Allah", "Celui qui distingue"], 0, "")),
    L("Un savant envoyé au Yémen", "Mu'adh ibn Jabal est l'un des compagnons les plus savants en matière de licite et d'illicite. Le Prophète ﷺ l'envoie au Yémen pour enseigner et juger ; il lui recommande d'inviter d'abord à l'attestation de foi, puis à la prière et à la zakat (Bukhari 1395).",
      Q.tf("Mu'adh a été envoyé au Yémen comme enseignant.", true, "")),
  ], [
    Q.mc("Où Mu'adh a-t-il été envoyé ?", ["Au Yémen", "En Abyssinie", "En Égypte", "En Perse"], 0, ""),
    Q.tf("Abu Ubayda fait partie des dix promis au Paradis.", true, ""),
    Q.mc("Quelle est la première chose à laquelle Mu'adh devait inviter ?", ["L'attestation de foi", "Le jeûne", "Le Hajj", "La zakat"], 0, "Bukhari 1395."),
    Q.match("Associe.", [["Abu Ubayda", "Homme de confiance"], ["Mu'adh", "Enseignant envoyé au Yémen"], ["Khalid", "Épée d'Allah"]], ""),
    Q.text("Dans quel pays Mu'adh enseignait-il ? (un nom)", ["yemen", "yémen"], "Au Yémen."),
  ], "Mu'adh est souvent cité comme exemple d'un jeune compagnon devenu référence en droit musulman."),
  ch("c55-coran-zayd-masud", "compagnons", "Zayd ibn Thabit et Ibn Mas'ud", ["Bukhari 4986-4987", "Bukhari 3808"], [
    L("Le scribe de la révélation", "Zayd ibn Thabit, jeune Médinois, écrit la révélation sous la dictée du Prophète ﷺ. Sous Abu Bakr, il rassemble le Coran en un recueil, puis sous Uthman, il dirige la copie des exemplaires (Bukhari 4986-4987).",
      Q.mc("Quel rôle a eu Zayd ibn Thabit ?", ["Scribe et rassembleur du Coran", "Muezzin", "Chef d'armée", "Juge"], 0, "")),
    L("Les gens du Coran", "Le Prophète ﷺ a dit de prendre le Coran auprès de quatre compagnons : Abdallah ibn Mas'ud, Salim, Mu'adh ibn Jabal et Ubayy ibn Ka'b (Bukhari 3808). Ibn Mas'ud était réputé pour sa belle récitation et son attachement au Coran.",
      Q.tf("Ibn Mas'ud est cité parmi les compagnons auprès de qui apprendre le Coran.", true, "Bukhari 3808.")),
  ], [
    Q.mc("Quel compagnon a dirigé la copie du Coran sous Uthman ?", ["Zayd ibn Thabit", "Bilal", "Ali", "Khalid"], 0, ""),
    Q.tf("Zayd ibn Thabit écrivait la révélation pour le Prophète ﷺ.", true, ""),
    Q.mc("Combien de compagnons le Prophète ﷺ cite-t-il dans Bukhari 3808 ?", ["Quatre", "Deux", "Dix", "Sept"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Révélation écrite par les scribes", "Recueil sous Abu Bakr", "Exemplaires sous Uthman"], ""),
    Q.text("Comment appelle-t-on l'exemplaire établi sous Uthman ? (le mushaf …)", ["uthmani", "uthmanien", "othmani", "'uthmânî", "uthmanî"], "Le mushaf uthmanien."),
  ], "Le Coran a été mémorisé par de nombreux compagnons, en plus d'être écrit."),
]},
{ n: 56, unit: "Savants et serviteurs", chapters: [
  ch("c56-hurayra-abbas", "compagnons", "Abu Hurayra et Ibn Abbas", ["Bukhari 75 (invocation pour Ibn Abbas)", "Sîra d'Ibn Hichâm"], [
    L("Abu Hurayra, le grand transmetteur", "Abu Hurayra rejoint le Prophète ﷺ vers 7 H, à l'époque de Khaybar. Il reste constamment auprès de lui, vivant modestement dans la mosquée. Il est le compagnon qui a transmis le plus de hadiths, plus de cinq mille selon les décomptes classiques.",
      Q.mc("Quel compagnon a transmis le plus de hadiths ?", ["Abu Hurayra", "Bilal", "Khalid", "Salman"], 0, "")),
    L("Ibn Abbas, l'interprète du Coran", "Abdallah ibn Abbas, cousin du Prophète ﷺ, était encore adolescent à sa mort. Le Prophète ﷺ a invoqué pour lui : « Ô Allah, enseigne-lui le Livre » (Bukhari 75). Il est appelé « l'interprète du Coran » (tarjuman al-Qur'an).",
      Q.tf("Ibn Abbas est le cousin du Prophète ﷺ.", true, "")),
  ], [
    Q.mc("Quel titre est donné à Ibn Abbas ?", ["L'interprète du Coran", "L'épée d'Allah", "Le lion d'Allah", "Le muezzin"], 0, ""),
    Q.tf("Abu Hurayra vivait modestement dans la mosquée du Prophète ﷺ.", true, ""),
    Q.mc("À quelle époque Abu Hurayra a-t-il rejoint le Prophète ﷺ ?", ["Vers l'an 7 (Khaybar)", "Avant l'Hégire", "Après sa mort", "À Badr"], 0, ""),
    Q.match("Associe.", [["Abu Hurayra", "Grand transmetteur de hadiths"], ["Ibn Abbas", "Interprète du Coran"], ["Mu'adh", "Savant du licite et de l'illicite"]], ""),
    Q.text("Quel mot désigne « l'interprétation du Coran » ? (le …)", ["tafsir", "tafsîr"], "Le tafsir."),
  ], "Le mot « hadith » signifie « récit » : il désigne les paroles, actes et approbations du Prophète ﷺ."),
  ch("c56-anas-jafar", "compagnons", "Anas ibn Malik et Ja'far ibn Abi Talib", ["Sîra d'Ibn Hichâm", "Bukhari 4261-4262 (Mu'ta)"], [
    L("Le serviteur du Prophète ﷺ", "Anas ibn Malik entre très jeune au service du Prophète ﷺ à Médine, pendant environ dix ans. Il a rapporté de nombreux hadiths et a vécu très longtemps. Sa mère, Umm Sulaym, l'a présenté au Prophète ﷺ.",
      Q.mc("Combien de temps environ Anas a-t-il servi le Prophète ﷺ ?", ["Dix ans", "Un an", "Trente ans", "Deux mois"], 0, "")),
    L("Ja'far, l'orateur d'Abyssinie", "Ja'far ibn Abi Talib, cousin du Prophète ﷺ et frère d'Ali, dirige les émigrés en Abyssinie et parle devant le Négus. Il tombe en martyr à Mu'ta en 8 H, comme l'un des trois chefs désignés (Bukhari 4261-4262).",
      Q.tf("Ja'far est tombé en martyr à Mu'ta.", true, "")),
  ], [
    Q.mc("Qui était le frère d'Ali ?", ["Ja'far", "Hamza", "Abbas", "Zayd"], 0, ""),
    Q.tf("Ja'far a parlé devant le Négus.", true, ""),
    Q.mc("Où Ja'far a-t-il trouvé le martyre ?", ["À Mu'ta", "À Badr", "À Uhud", "À Khaybar"], 0, ""),
    Q.match("Associe.", [["Anas ibn Malik", "Serviteur du Prophète ﷺ"], ["Ja'far", "Orateur devant le Négus"], ["Khalid", "Prend le commandement à Mu'ta"]], ""),
    Q.text("Quelle est la mère d'Anas ? (Umm …)", ["sulaym", "soulaym", "sulaim"], "Umm Sulaym."),
  ], "Anas est l'un des derniers compagnons décédés, à Bassora, vers 93 H."),
]},
{ n: 57, unit: "Femmes du premier cercle", chapters: [
  ch("c57-asma-nusayba", "compagnons", "Asma bint Abi Bakr et Nusayba bint Ka'b", ["Bukhari 3907 (Hégire)", "Sîra d'Ibn Hichâm"], [
    L("Asma, celle des deux ceintures", "Asma bint Abi Bakr, sœur d'Aïcha, a apporté des provisions au Prophète ﷺ et à son père dans la grotte de Thawr. Elle a déchiré sa ceinture en deux pour attacher les provisions, d'où son surnom « Dhat an-Nitaqayn » (celle aux deux ceintures) (Bukhari 3907).",
      Q.mc("Quel est le surnom d'Asma ?", ["Celle aux deux ceintures", "La lionne", "La fidèle", "La savante"], 0, "")),
    L("Nusayba, une femme à Uhud", "Nusayba bint Ka'b (Umm Umara) a participé à Uhud : elle a défendu le Prophète ﷺ lorsque les combats se sont durcis. Elle a été blessée à plusieurs reprises et a aussi participé à la bataille de Yamama.",
      Q.tf("Nusayba a défendu le Prophète ﷺ à Uhud.", true, "")),
  ], [
    Q.mc("Quel rôle a joué Asma pendant l'Hégire ?", ["Elle a apporté des provisions", "Elle a guidé la caravane", "Elle a combattu", "Elle a prêché"], 0, ""),
    Q.tf("Asma est la sœur d'Aïcha.", true, ""),
    Q.mc("Quelle bataille est liée à Nusayba ?", ["Uhud", "Hudaybiya", "Badr", "Tabouk"], 0, ""),
    Q.match("Associe.", [["Asma", "Provisions à Thawr"], ["Nusayba", "Défense du Prophète ﷺ à Uhud"], ["Sumayya", "Première martyre"]], ""),
    Q.text("Dans quelle grotte les provisions ont-elles été apportées ? (Thawr, ...)", ["thawr", "thawr"], "La grotte de Thawr."),
  ], "Ces récits montrent la présence des femmes dans les grandes étapes de l'histoire de l'islam."),
  ch("c57-meres", "compagnons", "Les Mères des croyants", ["Coran 33:6", "Sîra d'Ibn Hichâm"], [
    L("Qui sont-elles ?", "Le Coran dit que les épouses du Prophète ﷺ sont « leurs mères » pour les croyants (33:6). Elles sont au nombre de onze selon la plupart des récits : Khadija, Sawda, Aïcha, Hafsa, Zaynab bint Khuzayma, Umm Salama, Zaynab bint Jahsh, Juwayriyya, Umm Habiba, Safiyya et Maymuna.",
      Q.mc("Combien d'épouses le Prophète ﷺ a-t-il eues, selon la plupart des récits ?", ["Onze", "Deux", "Cinq", "Vingt"], 0, "")),
    L("Un rôle de transmission", "Plusieurs d'entre elles, comme Aïcha et Umm Salama, ont transmis des hadiths et enseigné. Khadija et Zaynab bint Khuzayma sont décédées du vivant du Prophète ﷺ.",
      Q.tf("Khadija est décédée du vivant du Prophète ﷺ.", true, "")),
  ], [
    Q.mc("Quelle épouse est la fille d'Umar ?", ["Hafsa", "Sawda", "Maymuna", "Safiyya"], 0, ""),
    Q.tf("Les épouses du Prophète ﷺ sont appelées Mères des croyants.", true, "Coran 33:6."),
    Q.mc("Quelle épouse est la fille d'Abu Sufyan ?", ["Umm Habiba", "Aïcha", "Umm Salama", "Zaynab"], 0, ""),
    Q.order("Remets dans l'ordre de leur mariage avec le Prophète ﷺ.", ["Khadija", "Sawda", "Aïcha", "Hafsa"], ""),
    Q.text("Quelle épouse est la première, la plus ancienne ? (un prénom)", ["khadija", "khadidja"], "Khadija."),
  ], "Les Mères des croyants avaient un statut particulier : elles ne pouvaient pas se remarier après le Prophète ﷺ (Coran 33:53)."),
]},
{ n: 58, unit: "Les promis et la mosquée", chapters: [
  ch("c58-dix", "compagnons", "Les dix promis au Paradis", ["Abu Dawud 4649", "At-Tirmidhi 3747"], [
    L("Une bonne nouvelle", "Un hadith cite dix compagnons à qui le Prophète ﷺ a annoncé la bonne nouvelle du Paradis (Abu Dawud 4649 ; At-Tirmidhi 3747) : Abu Bakr, Umar, Uthman, Ali, Talha, Zubayr, Abd ar-Rahman ibn Awf, Sa'd ibn Abi Waqqas, Sa'id ibn Zayd et Abu Ubayda ibn al-Jarrah.",
      Q.mc("Combien de compagnons sont cités dans ce hadith ?", ["Dix", "Quatre", "Sept", "Douze"], 0, "")),
    L("Un exemple", "Ces compagnons n'étaient pas les seuls destinés au Paradis : d'autres ont aussi reçu de bonnes nouvelles. Le hadith les cite ensemble, ce qui les rend connus sous le nom d'« al-'ashara al-mubashshara » (les dix promis).",
      Q.tf("Les dix promis sont les seuls compagnons promis au Paradis.", false, "D'autres aussi ont reçu des bonnes nouvelles.")),
  ], [
    Q.mc("Lequel n'est PAS parmi les dix promis ?", ["Bilal", "Abu Bakr", "Umar", "Ali"], 0, "Bilal est promis au Paradis par un autre hadith, mais n'est pas dans cette liste de dix."),
    Q.tf("Abu Ubayda fait partie des dix promis.", true, ""),
    Q.mc("Comment appelle-t-on ce groupe en arabe ?", ["Al-'ashara al-mubashshara", "Al-khulafa' ar-rashidun", "Al-muhajirun", "Al-ansar"], 0, ""),
    Q.order("Remets dans l'ordre les quatre premiers califes.", ["Abu Bakr", "Umar", "Uthman", "Ali"], ""),
    Q.text("Combien sont-ils ? (un chiffre ou un mot)", ["10", "dix"], "Dix."),
  ], "Quatre des dix promis sont aussi les quatre premiers califes."),
  ch("c58-suffa", "compagnons", "Ahl as-Suffa, les gens de la banquette", ["Bukhari 6452", "Sîra d'Ibn Hichâm"], [
    L("Vivre pour apprendre", "Les « Ahl as-Suffa » étaient des compagnons pauvres, souvent sans famille à Médine, qui vivaient dans un espace couvert de la mosquée du Prophète ﷺ. Ils passaient leur temps à apprendre le Coran et à écouter le Prophète ﷺ. Abu Hurayra en faisait partie.",
      Q.mc("Où vivaient les Ahl as-Suffa ?", ["Dans la mosquée du Prophète ﷺ", "À La Mecque", "À Taïf", "À Khaybar"], 0, "")),
    L("Soutien de la communauté", "Le Prophète ﷺ encourageait les compagnons à les aider : il leur envoyait une partie de ce qu'il recevait en aumône. Leur exemple rappelle l'importance de la solidarité et de la quête du savoir malgré la pauvreté.",
      Q.tf("Les Ahl as-Suffa étaient soutenus par la communauté.", true, "")),
  ], [
    Q.mc("Quel compagnon célèbre faisait partie des Ahl as-Suffa ?", ["Abu Hurayra", "Umar", "Ali", "Uthman"], 0, ""),
    Q.tf("Les Ahl as-Suffa passaient leur temps à apprendre.", true, ""),
    Q.mc("Quelle valeur illustre leur histoire ?", ["La solidarité et le savoir", "Le commerce", "La conquête", "L'isolement total"], 0, ""),
    Q.match("Associe.", [["Suffa", "Espace couvert de la mosquée"], ["Ansar", "Hôtes de Médine"], ["Muhajirun", "Émigrés de La Mecque"]], ""),
    Q.text("Dans quelle ville se trouve la mosquée des Ahl as-Suffa ? (un nom)", ["medine", "médine", "madina"], "Médine."),
  ], "Le mot « suffa » désigne un auvent, une sorte de banquette couverte."),
]},
{ n: 59, unit: "Généreux et courageux", chapters: [
  ch("c59-abdrahman-saad", "compagnons", "Abd ar-Rahman ibn Awf et Sa'd ibn Abi Waqqas", ["Bukhari 3780", "Sîra d'Ibn Hichâm"], [
    L("Un commerçant généreux", "Abd ar-Rahman ibn Awf a émigré à Médine sans rien. Refusant l'offre de son frère de pacte, il a commencé par le commerce et est devenu l'un des compagnons les plus riches, très généreux dans ses dons (Bukhari 3780).",
      Q.mc("Comment Abd ar-Rahman a-t-il réussi à Médine ?", ["Par le commerce", "Par la guerre", "Par l'héritage", "Par la poésie"], 0, "")),
    L("Sa'd, l'archer", "Sa'd ibn Abi Waqqas est l'un des premiers musulmans, connu comme archer : il aurait été le premier à tirer une flèche pour la cause de l'islam. Il commande l'armée musulmane à la bataille d'al-Qadisiyya contre les Perses, sous Umar.",
      Q.tf("Sa'd a commandé l'armée à Qadisiyya.", true, "")),
  ], [
    Q.mc("Quel compagnon est connu pour sa générosité et son commerce ?", ["Abd ar-Rahman ibn Awf", "Sa'd ibn Abi Waqqas", "Bilal", "Khalid"], 0, ""),
    Q.tf("Sa'd ibn Abi Waqqas fait partie des dix promis.", true, ""),
    Q.mc("Quelle bataille a été commandée par Sa'd ?", ["Al-Qadisiyya", "Badr", "Uhud", "Hudaybiya"], 0, ""),
    Q.match("Associe.", [["Abd ar-Rahman", "Commerçant généreux"], ["Sa'd", "Archer et chef à Qadisiyya"], ["Talha", "Protecteur du Prophète ﷺ à Uhud"]], ""),
    Q.text("Contre qui Sa'd a-t-il combattu à Qadisiyya ? (les …)", ["perses", "perse"], "Les Perses."),
  ], "Abd ar-Rahman ibn Awf est l'un des conseillers de l'assemblée (shura) qui a désigné Uthman."),
  ch("c59-talha-zubayr", "compagnons", "Talha et Zubayr", ["Bukhari 3724 (Talha)", "Bukhari 2846 (Zubayr)"], [
    L("Talha, le protecteur d'Uhud", "À Uhud, Talha ibn Ubaydillah protège le Prophète ﷺ en couvrant son corps contre les flèches. Sa main devient paralysée à la suite de ses blessures (Bukhari 3724). Le Prophète ﷺ a dit de lui qu'il s'était attiré le Paradis.",
      Q.mc("Que fait Talha à Uhud ?", ["Il protège le Prophète ﷺ", "Il lance l'appel à la prière", "Il garde les prisonniers", "Il dirige les archers"], 0, "")),
    L("Zubayr, le disciple du Prophète ﷺ", "Zubayr ibn al-Awwam est un cousin du Prophète ﷺ et l'un des premiers musulmans. Le Prophète ﷺ a dit : « Chaque prophète a un disciple (hawari), et mon disciple est Zubayr » (Bukhari 2846).",
      Q.tf("Le Prophète ﷺ a appelé Zubayr son hawari.", true, "Bukhari 2846.")),
  ], [
    Q.mc("Quel titre est donné à Zubayr ?", ["Hawari du Prophète ﷺ", "L'épée d'Allah", "Le lion d'Allah", "Dhu an-Nurayn"], 0, ""),
    Q.tf("La main de Talha a été paralysée à la suite de la bataille d'Uhud.", true, ""),
    Q.mc("Qui est un cousin du Prophète ﷺ ?", ["Zubayr", "Talha", "Abu Bakr", "Bilal"], 0, ""),
    Q.match("Associe.", [["Talha", "Protection à Uhud"], ["Zubayr", "Hawari du Prophète ﷺ"], ["Sa'd", "Archer"]], ""),
    Q.text("Comment dit-on « disciple » dans Coran 3:52 ? (un mot)", ["hawari", "hawariyun", "hawariyyun"], "Hawari (pluriel hawariyyun)."),
  ], "Talha et Zubayr sont tous deux parmi les dix promis au Paradis."),
]},
{ n: 60, unit: "Les compagnons : bilan", chapters: [
  ch("c60-bilan-compagnons", "compagnons", "Les compagnons : grand bilan", ["Chapitres précédents (Sîra d'Ibn Hichâm, Bukhari, Muslim, At-Tirmidhi)"], [
    L("Reconnaître les profils", "Abu Bakr : as-Siddiq, premier calife. Umar : al-Faruq. Uthman : Dhu an-Nurayn. Ali : cousin et gendre du Prophète ﷺ. Bilal : premier muezzin. Khalid : épée d'Allah. Mus'ab : premier envoyé à Yathrib. Salman : le Persan. Aïcha : savante, Mère des croyants.",
      Q.mc("Qui est le premier muezzin ?", ["Bilal", "Umar", "Ali", "Salman"], 0, "")),
    L("Relier les histoires", "Pour bien retenir, relie chaque compagnon à un événement : Salman au Fossé, Khalid à Mu'ta et Yarmouk, Abu Bakr à la grotte de Thawr et au recueil du Coran, Uthman aux exemplaires du Coran, Ali à Khaybar et au califat à Koufa.",
      Q.mc("Quel compagnon est lié à la bataille du Fossé ?", ["Salman", "Khalid", "Mus'ab", "Ja'far"], 0, "")),
  ], [
    Q.match("Associe chaque compagnon à sa particularité.", [["Bilal", "Premier muezzin"], ["Khalid", "Épée d'Allah"], ["Mus'ab", "Premier envoyé à Yathrib"], ["Salman", "Idée du fossé"]], "Question avancée."),
    Q.order("Remets ces événements dans l'ordre.", ["Hégire (Abu Bakr avec le Prophète ﷺ)", "Bataille de Badr", "Mu'ta (Khalid)", "Yarmouk (Khalid)", "Mushaf d'Uthman"], "Question avancée."),
    Q.mc("Quel compagnon a porté l'étendard à Khaybar ?", ["Ali", "Umar", "Bilal", "Zubayr"], 0, ""),
    Q.tf("Zayd ibn Thabit a dirigé la copie des exemplaires du Coran sous Uthman.", true, ""),
    Q.text("Quel calife est appelé Dhu an-Nurayn ? (un prénom)", ["uthman", "othman", "outhman"], "Uthman."),
  ], "Retiens : les quatre premiers califes sont appelés « Al-Khulafa' ar-Rashidun » (les califes bien guidés)."),
]}
);
buildIndex();
