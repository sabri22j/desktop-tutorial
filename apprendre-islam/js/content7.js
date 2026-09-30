/* Niveaux 71 à 80 : Coran et pratique approfondis. Références : Coran, hadiths authentiques cités avec leur recueil. */
LEVELS.push(
{ n: 71, unit: "Deux grands passages du Coran", chapters: [
  ch("c71-kursi", "coran", "Ayat al-Kursi (2:255)", ["Coran 2:255", "Bukhari 2311 ; Bukhari 3275"], [
    L("Le verset du Trône", "Ayat al-Kursi est le verset 255 de la sourate Al-Baqara. Il décrit la grandeur d'Allah : le Vivant, Celui qui subsiste par Lui-même, à qui appartient tout ce qui est dans les cieux et sur la terre. Son Trône embrasse les cieux et la terre.",
      Q.mc("Dans quelle sourate se trouve Ayat al-Kursi ?", ["Al-Baqara", "Al-Fatiha", "Al-Ikhlas", "An-Nas"], 0, ""),
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      "Allâhu lâ ilâha illâ huwa l-Hayyu l-Qayyûm. Lâ ta'khudhuhu sinatun wa lâ nawm. Lahu mâ fî s-samâwâti wa mâ fî l-ard. Man dhâ lladhî yashfa'u 'indahu illâ bi-idhnih. Ya'lamu mâ bayna aydîhim wa mâ khalfahum, wa lâ yuhîtûna bi-shay'in min 'ilmihî illâ bimâ shâ'. Wasi'a kursiyyuhu s-samâwâti wa l-ard, wa lâ ya'ûduhu hifzuhumâ, wa huwa l-'Aliyyu l-'Azîm.", "Coran 2:255 (Ayat al-Kursi)",
      "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et, de Sa science, ils n'embrassent que ce qu'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand."),
    L("Un rappel protecteur", "Dans un hadith rapporté par Abu Hurayra, il est dit que celui qui récite Ayat al-Kursi en se couchant bénéficie d'une protection d'Allah jusqu'au matin (Bukhari 2311 ; 3275). Les musulmans la récitent souvent le soir, le matin et après les prières.",
      Q.tf("Il est recommandé de réciter Ayat al-Kursi avant de dormir.", true, "Bukhari 2311.")),
  ], [
    Q.mc("Que signifie « Al-Kursi » ?", ["Le Trône", "Le Livre", "La Lumière", "Le Ciel"], 0, ""),
    Q.tf("Ayat al-Kursi est le verset 255 de la sourate 2.", true, ""),
    Q.mc("Quel nom d'Allah est mentionné : « Celui qui subsiste par Lui-même » ?", ["Al-Qayyum", "Ar-Rahman", "Al-Khaliq", "Ar-Razzaq"], 0, ""),
    Q.match("Associe.", [["Al-Hayy", "Le Vivant"], ["Al-Qayyum", "Celui qui subsiste par Lui-même"], ["Al-'Aliyy", "Le Très Haut"], ["Al-'Azim", "Le Très Grand"]], "Question avancée."),
    Q.text("Dans quelle sourate est Ayat al-Kursi ? (Al-…)", ["baqara", "bakara", "baqarah"], "Al-Baqara (2:255)."),
  ], "Ayat al-Kursi est souvent décrit comme le plus grand verset du Coran (Muslim 810)."),
  ch("c71-baqara-fin", "coran", "Les deux derniers versets d'Al-Baqara", ["Coran 2:285-286", "Bukhari 5009 ; Muslim 807"], [
    L("Un résumé de la foi", "Le verset 285 résume la foi : le Prophète ﷺ et les croyants croient en Allah, Ses anges, Ses livres et Ses messagers, sans faire de distinction entre eux. Ils disent : « Nous avons entendu et obéi ».",
      Q.mc("Quels sont les éléments de foi cités dans 2:285 ?", ["Allah, les anges, les livres, les messagers", "La prière et le jeûne", "Le Hajj et la zakat", "Les batailles"], 0, "")),
    L("Allah n'impose pas plus que la capacité", "Le verset 286 commence par : « Allah n'impose à aucune âme une charge supérieure à sa capacité ». Il se termine par une invocation pour le pardon et la protection. Selon un hadith, celui qui récite ces deux versets la nuit, cela lui suffit (Bukhari 5009).",
      Q.tf("Allah n'impose pas à une âme plus que ce qu'elle peut supporter.", true, "Coran 2:286."),
      "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", "Lâ yukallifu Llâhu nafsan illâ wus'ahâ.", "Coran 2:286 (début)", "Allah n'impose à aucune âme une charge supérieure à sa capacité."),
  ], [
    Q.mc("Par quelle phrase commence 2:286 ?", ["Allah n'impose à aucune âme une charge supérieure à sa capacité", "Louange à Allah, Seigneur des mondes", "Dis : Il est Allah, Unique", "Par le Temps"], 0, ""),
    Q.tf("Ces deux versets sont à la fin de la sourate Al-Baqara.", true, ""),
    Q.mc("Quel hadith recommande de les réciter la nuit ?", ["Bukhari 5009", "Bukhari 1", "Bukhari 3", "Bukhari 8"], 0, ""),
    Q.match("Associe.", [["2:255", "Ayat al-Kursi"], ["2:285-286", "Fin d'Al-Baqara"], ["1:1-7", "Al-Fatiha"]], ""),
    Q.text("Quelle sourate contient ces versets ? (Al-…)", ["baqara", "bakara", "baqarah"], "Al-Baqara."),
  ], "La sourate Al-Baqara est la plus longue du Coran : 286 versets."),
]},
{ n: 72, unit: "Comprendre et préserver le Coran", chapters: [
  ch("c72-themes", "coran", "Les grands thèmes du Coran", ["Coran 2:62 ; 3:190-191", "Ibn Kathir, Tafsir"], [
    L("Cinq grands thèmes", "Le Coran parle surtout de : l'unicité d'Allah (tawhid), les prophètes et les peuples du passé, le Jour dernier, les règles de vie et la morale. Les sourates mecquoises insistent plus sur la foi et l'au-delà ; les médinoises sur les règles de la communauté.",
      Q.mc("De quoi parlent surtout les sourates mecquoises ?", ["De la foi et de l'au-delà", "Des règles de la communauté uniquement", "Du commerce", "Des batailles"], 0, "")),
    L("Observer et réfléchir", "Le Coran invite à réfléchir sur la création : « Dans la création des cieux et de la terre, et dans l'alternance de la nuit et du jour, il y a certes des signes pour les doués d'intelligence » (Coran 3:190). La réflexion est un acte d'adoration.",
      Q.tf("Le Coran encourage à réfléchir sur la création.", true, "Coran 3:190-191.")),
  ], [
    Q.mc("Quel thème n'est PAS l'un des grands thèmes du Coran ?", ["Le cours des actions de bourse", "L'unicité d'Allah", "Le Jour dernier", "La morale"], 0, ""),
    Q.tf("Les sourates médinoises traitent davantage de l'organisation de la communauté.", true, ""),
    Q.mc("Quel verset invite à la réflexion sur la création ?", ["Coran 3:190", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.match("Associe.", [["Tawhid", "Unicité d'Allah"], ["Akhira", "Au-delà"], ["Qasas", "Récits"]], ""),
    Q.text("Comment appelle-t-on les récits du Coran ? (al-…)", ["qasas", "kasas"], "Al-Qasas."),
  ], "La première parole révélée, « Lis », montre l'importance du savoir dès le début."),
  ch("c72-preservation", "coran", "Comment le Coran a été préservé", ["Coran 15:9", "Bukhari 4986-4987"], [
    L("Mémorisé et écrit", "Le Coran a été mémorisé par de nombreux compagnons et écrit sur divers supports par les scribes de la révélation. Coran 15:9 dit : « C'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes gardien ».",
      Q.mc("Quel verset parle de la préservation du Coran ?", ["Coran 15:9", "Coran 1:1", "Coran 112:1", "Coran 96:1"], 0, "")),
    L("Un recueil puis des exemplaires", "Sous Abu Bakr, le Coran est rassemblé en un recueil (Bukhari 4986). Sous Uthman, des exemplaires identiques sont envoyés dans les grandes villes (Bukhari 4987). Aujourd'hui encore, le texte est transmis par écrit et par mémorisation : on appelle « hafiz » celui qui l'a mémorisé en entier.",
      Q.tf("Un hafiz est une personne qui a mémorisé tout le Coran.", true, "")),
  ], [
    Q.mc("Comment appelle-t-on celui qui a mémorisé tout le Coran ?", ["Hafiz", "Muezzin", "Imam uniquement", "Mufti"], 0, ""),
    Q.tf("Le Coran a été à la fois mémorisé et écrit.", true, ""),
    Q.mc("Sous quel calife les exemplaires ont-ils été envoyés dans les villes ?", ["Uthman", "Abu Bakr", "Umar", "Ali"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Révélation au Prophète ﷺ", "Recueil sous Abu Bakr", "Exemplaires sous Uthman"], ""),
    Q.text("Comment dit-on « Rappel » dans Coran 15:9 ? (adh-…)", ["dhikr", "zikr", "dikr"], "Adh-Dhikr."),
  ], "Des concours de mémorisation du Coran sont organisés dans de nombreux pays."),
]},
{ n: 73, unit: "La prière en détail", chapters: [
  ch("c73-conditions", "pratique", "Les conditions de la prière", ["Coran 5:6 ; 4:103 ; 2:144", "Bukhari 631 (« Priez comme vous m'avez vu prier »)"], [
    L("Avant de prier", "Pour que la prière soit valide, il faut : être en état de pureté (ablutions), avoir des vêtements et un lieu propres, être en tenue décente, se tourner vers la qibla, et prier à l'heure. L'intention est dans le cœur.",
      Q.mc("Quelle condition n'est PAS requise pour la prière ?", ["Avoir un tapis de prière", "Être en état de pureté", "Se tourner vers la qibla", "Prier à l'heure"], 0, "Le tapis n'est pas obligatoire : il suffit d'un endroit propre.")),
    L("Piliers et gestes", "Parmi les piliers de la prière : le takbir d'ouverture, la position debout, la récitation d'Al-Fatiha, l'inclinaison (rukou'), la prosternation (sujud), l'assise finale et le taslim. Le Prophète ﷺ a dit : « Priez comme vous m'avez vu prier » (Bukhari 631).",
      Q.tf("Le taslim termine la prière.", true, "")),
  ], [
    Q.mc("Comment termine-t-on la prière ?", ["Par le taslim", "Par le takbir", "Par le rukou'", "Par le sujud"], 0, ""),
    Q.tf("La récitation d'Al-Fatiha fait partie de la prière.", true, ""),
    Q.mc("Vers quoi se tourne-t-on pour prier ?", ["La Kaaba", "Jérusalem", "Médine", "Le soleil"], 0, ""),
    Q.order("Remets les gestes d'une rak'a dans l'ordre.", ["Takbir", "Lecture d'Al-Fatiha", "Rukou'", "Se relever", "Sujud"], ""),
    Q.text("Comment dit-on « direction de prière » ? (la …)", ["qibla", "kibla", "qiblah"], "La qibla."),
  ], "Le tapis de prière est une commodité, pas une obligation."),
  ch("c73-voyageur", "pratique", "La prière du voyageur et du malade", ["Coran 4:101", "Bukhari 1117", "Coran 2:185 (facilité)"], [
    L("Prier en voyage", "Coran 4:101 autorise à raccourcir la prière en voyage. Les prières de 4 rak'at (Dhuhr, Asr, Isha) peuvent être ramenées à 2. On peut aussi, selon les cas, regrouper Dhuhr avec Asr et Maghrib avec Isha.",
      Q.mc("Combien de rak'at pour Dhuhr raccourcie ?", ["2", "3", "4", "1"], 0, "")),
    L("Prier malade", "Le Prophète ﷺ a dit : « Prie debout ; si tu ne peux pas, assis ; si tu ne peux pas, sur le côté » (Bukhari 1117). Allah ne veut pas de difficulté pour nous (Coran 2:185). L'islam tient compte de l'état de chaque personne.",
      Q.tf("On peut prier assis si on ne peut pas se tenir debout.", true, "Bukhari 1117.")),
  ], [
    Q.mc("Quelle prière ne se raccourcit PAS ?", ["Maghrib (3 rak'at)", "Dhuhr", "Asr", "Isha"], 0, "Maghrib et Fajr ne se raccourcissent pas."),
    Q.tf("Le voyageur peut raccourcir les prières de quatre rak'at.", true, ""),
    Q.mc("Que fait le malade qui ne peut pas se tenir debout ?", ["Il prie assis", "Il ne prie pas", "Il reporte d'un mois", "Il prie en marchant"], 0, ""),
    Q.match("Associe.", [["Qasr", "Raccourcir"], ["Jam'", "Regrouper"], ["Qiyam", "Se tenir debout"]], ""),
    Q.text("Comment dit-on « raccourcir » la prière ? (le …)", ["qasr", "kasr"], "Le qasr."),
  ], "La facilité est un principe de la loi islamique : « Facilitez et ne compliquez pas » (Bukhari 69)."),
]},
{ n: 74, unit: "Le jeûne en détail", chapters: [
  ch("c74-jeune2", "pratique", "Le jeûne : règles essentielles", ["Coran 2:183-187", "Bukhari 1923 (le suhur)", "Coran 2:184 (rachat)"], [
    L("Ce qui invalide le jeûne", "Manger, boire et avoir des relations conjugales de manière volontaire pendant la journée annulent le jeûne. Manger ou boire par oubli ne l'annule pas. Le repas de l'aube (suhur) est recommandé ; on rompt le jeûne au coucher du soleil (iftar).",
      Q.mc("Que se passe-t-il si on mange par oubli ?", ["Le jeûne reste valide", "Le jeûne est annulé", "On doit payer une amende", "On doit jeûner un mois"], 0, "")),
    L("Dispenses et rattrapage", "Le malade, le voyageur, la femme enceinte ou qui allaite selon les cas, peuvent différer le jeûne et le rattraper ensuite. Ceux qui ne peuvent pas jeûner durablement donnent de quoi nourrir un pauvre (Coran 2:184).",
      Q.tf("Un voyageur peut reporter son jeûne et le rattraper.", true, "Coran 2:184-185.")),
  ], [
    Q.mc("Comment appelle-t-on le repas avant l'aube ?", ["Le suhur", "L'iftar", "Le fitr", "Le qiyam"], 0, ""),
    Q.tf("Le jeûne se rompt au coucher du soleil.", true, ""),
    Q.mc("Comment appelle-t-on le repas de rupture du jeûne ?", ["L'iftar", "Le suhur", "Le tawaf", "Le ghusl"], 0, ""),
    Q.match("Associe.", [["Suhur", "Repas avant l'aube"], ["Iftar", "Repas de rupture"], ["Fidya", "Nourrir un pauvre à la place"]], ""),
    Q.text("Comment appelle-t-on la compensation en nourrissant un pauvre ? (la …)", ["fidya", "fidyah", "fidiya"], "La fidya."),
  ], "Le Prophète ﷺ rompait son jeûne avec des dattes fraîches ou sèches, ou de l'eau (Abu Dawud 2356)."),
  ch("c74-ramadan-nuits", "pratique", "Les nuits de Ramadan", ["Coran 97 (Al-Qadr)", "Bukhari 2009", "Bukhari 2014, 2017 (Laylat al-Qadr)", "Bukhari 1503 (zakat al-fitr)"], [
    L("Tarawih et Laylat al-Qadr", "Pendant les nuits de Ramadan, les musulmans accomplissent la prière de tarawih. Le Prophète ﷺ a dit : « Celui qui prie les nuits de Ramadan avec foi et en espérant la récompense, ses péchés passés lui sont pardonnés » (Bukhari 2009). Laylat al-Qadr, « meilleure que mille mois » (Coran 97:3), est recherchée dans les nuits impaires des dix dernières nuits (Bukhari 2017).",
      Q.mc("Comment appelle-t-on la prière de nuit en Ramadan ?", ["Tarawih", "Fajr", "Jumu'a", "Duha"], 0, "")),
    L("L'i'tikaf et la zakat al-fitr", "L'i'tikaf est la retraite dans la mosquée, surtout durant les dix derniers jours. La zakat al-fitr est une aumône donnée avant la prière de l'Aïd : le Prophète ﷺ l'a prescrite, en mesure d'un sa' de nourriture par personne (Bukhari 1503).",
      Q.tf("La zakat al-fitr se donne avant la prière de l'Aïd.", true, "")),
  ], [
    Q.mc("Quelle nuit est meilleure que mille mois ?", ["Laylat al-Qadr", "La nuit de Badr", "La nuit de l'Hégire", "La nuit d'Arafat"], 0, "Coran 97:3."),
    Q.tf("L'i'tikaf est une retraite dans la mosquée.", true, ""),
    Q.mc("Quand recherche-t-on Laylat al-Qadr ?", ["Dans les dix dernières nuits", "Dans les dix premières nuits", "Le 1er Ramadan", "À Chaabane"], 0, ""),
    Q.match("Associe.", [["Tarawih", "Prière des nuits de Ramadan"], ["I'tikaf", "Retraite dans la mosquée"], ["Zakat al-fitr", "Aumône de fin de Ramadan"]], ""),
    Q.text("Quelle sourate parle de Laylat al-Qadr ? (Al-…)", ["qadr", "kadr"], "Al-Qadr (97)."),
  ], "La sourate Al-Qadr ne compte que 5 versets."),
]},
{ n: 75, unit: "Zakat et charité", chapters: [
  ch("c75-zakat2", "pratique", "La zakat en détail", ["Coran 9:60", "Bukhari 1395", "Bukhari 1503"], [
    L("Les huit catégories", "Coran 9:60 cite huit catégories : les pauvres (fuqara'), les nécessiteux (masakin), ceux qui collectent la zakat, ceux dont on rapproche les cœurs, l'affranchissement des captifs, les endettés, « dans la voie d'Allah », et le voyageur en difficulté.",
      Q.mc("Combien de catégories de bénéficiaires ?", ["Huit", "Trois", "Cinq", "Douze"], 0, "")),
    L("Conditions de la zakat", "La zakat est due sur une richesse qui dépasse le nissab et détenue pendant une année lunaire. Le taux est de 2,5 % sur l'épargne. Les montants exacts du nissab et certains détails varient selon les pays et les écoles : on se renseigne auprès d'un savant.",
      Q.tf("Le taux de la zakat sur l'épargne est de 2,5 %.", true, "")),
  ], [
    Q.mc("Comment appelle-t-on le seuil minimal ?", ["Le nissab", "Le fidya", "Le hajj", "Le suhur"], 0, ""),
    Q.tf("La zakat est obligatoire pour celui qui atteint le nissab.", true, ""),
    Q.mc("Quelle est la durée de détention avant de donner la zakat ?", ["Une année lunaire", "Une semaine", "Dix ans", "Un mois"], 0, ""),
    Q.match("Associe.", [["Fuqara'", "Pauvres"], ["Masakin", "Nécessiteux"], ["Gharimin", "Endettés"], ["Ibn as-sabil", "Voyageur en difficulté"]], "Question avancée."),
    Q.text("Quel verset énumère les bénéficiaires ? (Coran 9:…)", ["60"], "Coran 9:60."),
  ], "La zakat purifie la richesse : le mot « zakat » signifie aussi « purification » et « croissance »."),
  ch("c75-sadaqa", "pratique", "La sadaqa, la charité volontaire", ["Coran 2:261 ; 2:271", "Bukhari 1417"], [
    L("Donner sans obligation", "La sadaqa est un don volontaire, qui peut être d'argent ou d'un acte bienveillant. Coran 2:261 compare la dépense pour Allah à un grain qui produit sept épis, chacun portant cent grains. Le Prophète ﷺ a dit : « Protégez-vous du Feu, ne serait-ce qu'avec la moitié d'une datte » (Bukhari 1417).",
      Q.mc("Quelle image utilise Coran 2:261 ?", ["Un grain qui produit sept épis", "Une montagne", "Un fleuve", "Une tente"], 0, "")),
    L("Plusieurs formes de sadaqa", "Un sourire, une bonne parole, aider quelqu'un ou écarter un obstacle de la route sont considérés comme des formes de sadaqa. La sadaqa peut être donnée discrètement (Coran 2:271).",
      Q.tf("Un sourire peut être considéré comme une sadaqa.", true, "At-Tirmidhi 1956.")),
  ], [
    Q.mc("Quelle différence avec la zakat ?", ["La sadaqa est volontaire", "La sadaqa est obligatoire", "La sadaqa est annuelle", "La sadaqa est un impôt d'État"], 0, ""),
    Q.tf("La sadaqa peut être une bonne parole.", true, ""),
    Q.mc("Comment vaut-il mieux parfois donner selon 2:271 ?", ["Discrètement", "Devant tout le monde", "Seulement en public", "Jamais"], 0, ""),
    Q.match("Associe.", [["Zakat", "Obligatoire"], ["Sadaqa", "Volontaire"], ["Zakat al-fitr", "À donner avant l'Aïd"]], ""),
    Q.text("Comment dit-on « charité volontaire » en arabe ? (la …)", ["sadaqa", "sadaqah", "sadaka"], "La sadaqa."),
  ], "Les mots « sadaqa » et « sidq » (sincérité) partagent la même racine."),
]},
{ n: 76, unit: "La pureté", chapters: [
  ch("c76-wudu-details", "pratique", "Les ablutions : ce qui les annule", ["Coran 5:6", "Bukhari 135", "Muslim 225"], [
    L("Ce qui annule les ablutions", "Les ablutions sont annulées par ce qui sort des voies naturelles (urine, selles, gaz), par le sommeil profond et par la perte de conscience. D'autres cas, comme le contact de la peau ou de certains aliments, sont traités de façon différente selon les écoles.",
      Q.mc("Qu'est-ce qui annule les ablutions ?", ["Les gaz", "Manger du pain", "Marcher", "Parler"], 0, "")),
    L("Les ablutions en pratique", "Pour faciliter la vie, on peut essuyer les chaussettes ou les khuffs sous certaines conditions au lieu de laver les pieds. On peut aussi refaire ses ablutions à tout moment. Le Prophète ﷺ encourageait à être en état de pureté.",
      Q.tf("On peut faire ses ablutions plusieurs fois par jour.", true, "")),
  ], [
    Q.mc("Quelle chose annule les ablutions d'après l'accord général ?", ["Le sommeil profond", "Le sourire", "Un repas", "La lecture"], 0, ""),
    Q.tf("Le wudu est nécessaire avant de prier.", true, ""),
    Q.mc("Comment dit-on « ablutions » en arabe ?", ["Wudu'", "Ghusl", "Tayammum", "Salat"], 0, ""),
    Q.match("Associe.", [["Wudu'", "Petites ablutions"], ["Ghusl", "Grande ablution"], ["Tayammum", "Purification avec de la terre"]], ""),
    Q.text("Comment appelle-t-on la grande ablution ? (le …)", ["ghusl", "ghousl"], "Le ghusl."),
  ], "Le Prophète ﷺ a dit : « La purification est la moitié de la foi » (Muslim 223)."),
  ch("c76-ghusl-tayammum", "pratique", "Ghusl et tayammum", ["Coran 5:6 ; 4:43", "Bukhari 334-335"], [
    L("Le ghusl", "Le ghusl est la purification de tout le corps. Il est obligatoire après les relations conjugales et après la fin des règles ou du sang post-natal. Il consiste à faire l'intention, puis à laver tout le corps, en commençant par la tête.",
      Q.mc("Quand le ghusl est-il obligatoire ?", ["Après les relations conjugales", "Avant chaque repas", "Chaque matin", "Seulement le vendredi"], 0, "")),
    L("Le tayammum", "Quand on n'a pas d'eau ou qu'on ne peut pas l'utiliser (maladie, absence d'eau), Coran 5:6 autorise le tayammum : on frappe de ses mains une terre propre et l'on s'essuie le visage et les mains avec l'intention de se purifier.",
      Q.tf("Le tayammum remplace l'eau quand on ne peut pas l'utiliser.", true, "Coran 5:6.")),
  ], [
    Q.mc("Par quoi remplace-t-on l'eau en cas de nécessité ?", ["Par la terre propre (tayammum)", "Par du sable de mer obligatoirement", "Par du lait", "Il n'y a pas de solution"], 0, ""),
    Q.tf("Le ghusl est la purification de tout le corps.", true, ""),
    Q.mc("Quel verset mentionne le tayammum ?", ["Coran 5:6", "Coran 112:1", "Coran 1:1", "Coran 3:144"], 0, ""),
    Q.match("Associe.", [["Wudu'", "Visage, bras, tête, pieds"], ["Ghusl", "Tout le corps"], ["Tayammum", "Visage et mains avec de la terre"]], ""),
    Q.text("Que signifie « tayammum » ? (un mot proche de « viser »)", ["tayammum"], "Tayammum : se diriger vers une terre propre."),
  ], "Le tayammum montre que la religion est adaptée aux situations réelles."),
]},
{ n: 77, unit: "Halal, haram et argent", chapters: [
  ch("c77-halal", "pratique", "Halal et haram", ["Coran 5:3 ; 5:90 ; 2:173", "Bukhari 52 ; Muslim 1599"], [
    L("Le licite et l'illicite", "Le halal est ce qui est permis, le haram ce qui est interdit. Le Coran interdit la viande d'un animal mort de lui-même, le sang, la viande de porc et ce sur quoi on invoque un autre qu'Allah (Coran 5:3). L'alcool et les boissons enivrantes sont aussi interdits (5:90).",
      Q.mc("Que signifie « halal » ?", ["Permis", "Interdit", "Obligatoire", "Déconseillé"], 0, "")),
    L("Les zones grises", "Le Prophète ﷺ a dit : « Le licite est clair et l'illicite est clair, et entre les deux il y a des choses douteuses » (Bukhari 52). Il recommande d'éviter le douteux quand on le peut, pour préserver sa religion et son honneur.",
      Q.tf("Le Prophète ﷺ a parlé de choses douteuses entre le halal et le haram.", true, "Bukhari 52.")),
  ], [
    Q.mc("Quelle boisson est interdite par le Coran ?", ["Les boissons enivrantes", "L'eau", "Le lait", "Le jus de fruit"], 0, ""),
    Q.tf("Le halal désigne ce qui est permis.", true, ""),
    Q.mc("Quel verset énumère plusieurs interdits alimentaires ?", ["Coran 5:3", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.match("Associe.", [["Halal", "Permis"], ["Haram", "Interdit"], ["Mushtabih", "Douteux"]], ""),
    Q.text("Comment dit-on « interdit » en arabe ? (un mot)", ["haram", "haraam"], "Haram."),
  ], "Le mot « halal » s'applique à toute la vie, pas seulement à la nourriture."),
  ch("c77-argent", "pratique", "L'argent et l'honnêteté", ["Coran 4:29 ; 2:275 ; 83:1-3", "At-Tirmidhi 1209"], [
    L("Des échanges justes", "Coran 4:29 dit : « Ne mangez pas vos biens illégalement entre vous, mais qu'il y ait un commerce avec votre consentement mutuel ». Le Coran interdit le riba (l'intérêt usuraire) et appelle à donner la mesure exacte (83:1-3).",
      Q.mc("Que dit Coran 4:29 ?", ["Commercer avec consentement mutuel", "Ne jamais commercer", "Vendre au plus cher", "Garder toute sa richesse"], 0, "")),
    L("Le commerçant honnête", "Un hadith dit que « le commerçant véridique et digne de confiance sera avec les prophètes, les véridiques et les martyrs » (At-Tirmidhi 1209). L'honnêteté est donc un acte de foi.",
      Q.tf("Le commerçant honnête est loué dans un hadith.", true, "At-Tirmidhi 1209.")),
  ], [
    Q.mc("Comment appelle-t-on l'intérêt usuraire interdit ?", ["Le riba", "La zakat", "La sadaqa", "Le fidya"], 0, ""),
    Q.tf("Coran 83:1-3 condamne ceux qui trichent sur la mesure.", true, ""),
    Q.mc("Quelle qualité est attendue du commerçant ?", ["L'honnêteté", "La ruse", "L'avarice", "La vitesse"], 0, ""),
    Q.match("Associe.", [["Riba", "Intérêt usuraire"], ["Gharar", "Incertitude excessive"], ["Amana", "Dépôt de confiance"]], "Question avancée."),
    Q.text("Quel prophète a appelé à la juste mesure ? (un prénom)", ["shuayb", "chouaib", "shu'ayb", "shoaib"], "Shu'ayb."),
  ], "Les histoires de Shu'ayb et de Madyan rappellent l'importance de l'honnêteté dans le commerce."),
]},
{ n: 78, unit: "Hajj et omra", chapters: [
  ch("c78-hajj-pas-a-pas", "pratique", "Le Hajj pas à pas", ["Coran 2:196-203", "Hadith de Jabir (Muslim 1218)"], [
    L("Du 8 au 10 Dhul-Hijja", "Le 8, les pèlerins se rendent à Mina. Le 9, ils se tiennent à Arafat, moment central du Hajj. Après le coucher du soleil, ils passent la nuit à Muzdalifa. Le 10, ils lapident la grande stèle à Mina, sacrifient, se rasent ou se coupent les cheveux, puis font le tawaf de la Kaaba.",
      Q.mc("Où se trouvent les pèlerins le 9 Dhul-Hijja ?", ["À Arafat", "À Mina", "À Médine", "À Taïf"], 0, "")),
    L("Après l'Aïd", "Les jours suivants (11-13), on poursuit la lapidation à Mina. Avant de quitter La Mecque, on accomplit un tawaf d'adieu. Le Prophète ﷺ a dit : « Prenez de moi vos rites » (Muslim 1297).",
      Q.tf("Le tawaf d'adieu est accompli avant de quitter La Mecque.", true, "")),
  ], [
    Q.order("Remets dans l'ordre.", ["Mina (8)", "Arafat (9)", "Muzdalifa", "Lapidation et sacrifice (10)", "Tawaf d'adieu"], "Question avancée."),
    Q.tf("Arafat est le moment central du Hajj.", true, ""),
    Q.mc("Que fait-on à Muzdalifa ?", ["On passe la nuit", "On sacrifie", "On fait le tawaf", "On prie Jumu'a uniquement"], 0, ""),
    Q.match("Associe.", [["Arafat", "9 Dhul-Hijja"], ["Mina", "Lapidation des stèles"], ["Kaaba", "Tawaf"]], ""),
    Q.text("Comment appelle-t-on les tours autour de la Kaaba ? (le …)", ["tawaf", "tawâf"], "Le tawaf."),
  ], "On dit « Labbayka Llâhumma labbayk » : c'est la talbiya, prononcée tout au long du Hajj."),
  ch("c78-omra", "pratique", "La omra et la talbiya", ["Bukhari 1549 (talbiya)", "Coran 2:158 (Safa et Marwa)"], [
    L("La petite visite", "La omra est accomplie toute l'année. Elle comprend l'ihram, le tawaf autour de la Kaaba, le sa'i entre Safa et Marwa, puis le rasage ou la coupe des cheveux. Coran 2:158 mentionne Safa et Marwa parmi les repères d'Allah.",
      Q.mc("Quel rite relie Safa et Marwa ?", ["Le sa'i", "Le tawaf", "La lapidation", "Le sacrifice"], 0, "")),
    L("La talbiya", "La talbiya est la réponse du pèlerin à l'appel d'Allah. Le pèlerin la répète en état d'ihram.",
      Q.tf("La talbiya est prononcée par le pèlerin.", true, "Bukhari 1549."),
      "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ", "Labbayka Llâhumma labbayk, labbayka lâ sharîka laka labbayk, inna l-hamda wa n-ni'mata laka wa l-mulk, lâ sharîka lak.", "Bukhari 1549",
      "Me voici, ô Allah, me voici. Me voici, Tu n'as pas d'associé, me voici. Certes, la louange, le bienfait et la royauté T'appartiennent. Tu n'as pas d'associé."),
  ], [
    Q.mc("Quelle différence avec le Hajj ?", ["La omra peut se faire toute l'année", "La omra est obligatoire chaque année", "La omra se fait à Médine", "La omra dure un mois"], 0, ""),
    Q.tf("Le sa'i se fait entre Safa et Marwa.", true, ""),
    Q.mc("Comment appelle-t-on la formule du pèlerin ?", ["La talbiya", "La basmala", "Le takbir", "Le tasbih"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Ihram", "Tawaf", "Sa'i", "Rasage ou coupe des cheveux"], ""),
    Q.text("Comment dit-on « petit pèlerinage » ? (la …)", ["omra", "umra", "oumra"], "La omra."),
  ], "Safa et Marwa rappellent la course de Hajar cherchant de l'eau pour Ismaïl."),
]},
{ n: 79, unit: "L'invocation", chapters: [
  ch("c79-dua", "pratique", "L'invocation (dua)", ["Coran 2:186 ; 40:60", "Coran 7:23 ; 2:201", "Bukhari 1145"], [
    L("Allah est proche", "Allah dit : « Quand Mes serviteurs t'interrogent sur Moi, Je suis tout proche : Je réponds à l'appel de celui qui M'invoque » (Coran 2:186). Le Prophète ﷺ a dit : « L'invocation, c'est l'adoration elle-même » (At-Tirmidhi 3372). Elle se fait à tout moment, dans toutes les langues.",
      Q.mc("Que signifie « dua » ?", ["Invocation", "Jeûne", "Pèlerinage", "Aumône"], 0, "")),
    L("Une invocation belle et simple", "Une invocation très connue dit : « Seigneur, accorde-nous une belle part ici-bas et une belle part dans l'au-delà, et protège-nous du châtiment du Feu » (Coran 2:201). Le dernier tiers de la nuit est un moment propice à l'invocation (Bukhari 1145).",
      Q.tf("On peut invoquer Allah dans sa propre langue.", true, ""),
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", "Rabbanâ âtinâ fî d-dunyâ hasanatan wa fî l-âkhirati hasanatan wa qinâ 'adhâba n-nâr.", "Coran 2:201",
      "Seigneur, accorde-nous belle part ici-bas, et belle part dans l'au-delà, et protège-nous du châtiment du Feu."),
  ], [
    Q.mc("Quel verset dit qu'Allah est proche de celui qui L'invoque ?", ["Coran 2:186", "Coran 112:1", "Coran 1:1", "Coran 108:1"], 0, ""),
    Q.tf("Le dernier tiers de la nuit est un moment propice à l'invocation.", true, "Bukhari 1145."),
    Q.mc("Quelle invocation demande une belle part ici-bas et dans l'au-delà ?", ["Coran 2:201", "Coran 112", "Coran 103", "Coran 108"], 0, ""),
    Q.match("Associe.", [["Dua", "Invocation"], ["Dhikr", "Rappel, évocation d'Allah"], ["Istighfar", "Demande de pardon"]], ""),
    Q.text("Comment dit-on « demander pardon » en arabe ? (istigh…)", ["far", "fâr", "istighfar"], "Istighfar."),
  ], "Adam et son épouse ont invoqué Allah avec ces mots : « Seigneur, nous nous sommes fait du tort » (Coran 7:23)."),
  ch("c79-dhikr", "pratique", "Le dhikr après la prière", ["Bukhari 843 ; Muslim 595", "Muslim 591"], [
    L("Les trois rappels", "Après la prière obligatoire, il est recommandé de dire « Subhanallah » 33 fois, « Al-hamdu lillah » 33 fois et « Allahu akbar » 33 fois (Bukhari 843 ; Muslim 595). Puis on complète à cent par « Lâ ilâha illa Llâh, wahdahu lâ sharîka lah… ».",
      Q.mc("Combien de fois dit-on chaque formule ?", ["33", "10", "100", "7"], 0, "")),
    L("Le pardon", "Après le taslim, le Prophète ﷺ demandait pardon trois fois : « Astaghfirullah » (Muslim 591). Cela rappelle que même les plus fidèles ont besoin de la miséricorde d'Allah.",
      Q.tf("Il est recommandé de dire « Astaghfirullah » après la prière.", true, "Muslim 591.")),
  ], [
    Q.mc("Que signifie « Subhanallah » ?", ["Gloire à Allah", "Louange à Allah", "Allah est grand", "Au nom d'Allah"], 0, ""),
    Q.tf("« Al-hamdu lillah » signifie « louange à Allah ».", true, ""),
    Q.mc("Que signifie « Allahu akbar » ?", ["Allah est plus grand", "Gloire à Allah", "Louange à Allah", "Il n'y a de divinité qu'Allah"], 0, ""),
    Q.match("Associe.", [["Subhanallah", "Gloire à Allah"], ["Al-hamdu lillah", "Louange à Allah"], ["Allahu akbar", "Allah est plus grand"], ["Astaghfirullah", "Je demande pardon à Allah"]], "Question avancée."),
    Q.text("Combien de fois en tout compte-t-on le tasbih, tahmid et takbir ? (33+33+33 = …)", ["99", "quatre-vingt-dix-neuf"], "99, complétés à 100."),
  ], "Ces formules sont parfois comptées à l'aide d'un chapelet (masbaha) ou des doigts."),
]},
{ n: 80, unit: "Mosquée, maladie et deuil", chapters: [
  ch("c80-mosquee", "pratique", "Les bonnes manières à la mosquée", ["Bukhari 444 (tahiyyat al-masjid)", "Bukhari 636 (aller calmement)"], [
    L("Entrer avec respect", "On entre dans la mosquée avec le pied droit en disant une invocation. Il est recommandé de prier deux rak'at avant de s'asseoir (Bukhari 444). On se rend à la prière avec calme et sérénité, sans courir (Bukhari 636).",
      Q.mc("Combien de rak'at avant de s'asseoir dans la mosquée ?", ["Deux", "Une", "Quatre", "Dix"], 0, "")),
    L("Respecter le lieu", "On éteint ou met en silence son téléphone, on évite de gêner les autres, on garde la mosquée propre et on ne passe pas devant une personne en prière. La mosquée est un lieu de rassemblement, d'enseignement et de recueillement.",
      Q.tf("On évite de gêner les autres à la mosquée.", true, "")),
  ], [
    Q.mc("Avec quel pied entre-t-on dans la mosquée ?", ["Le droit", "Le gauche", "Les deux", "Peu importe"], 0, ""),
    Q.tf("La mosquée est aussi un lieu d'enseignement.", true, ""),
    Q.mc("Comment se rend-on à la prière ?", ["Avec calme", "En courant", "En criant", "Sans ablutions"], 0, "Bukhari 636."),
    Q.match("Associe.", [["Masjid", "Mosquée"], ["Minbar", "Chaire"], ["Mihrab", "Niche de direction de prière"]], ""),
    Q.text("Comment appelle-t-on la niche qui indique la qibla ? (le …)", ["mihrab", "mihrâb"], "Le mihrab."),
  ], "Le mot « masjid » signifie « lieu de prosternation »."),
  ch("c80-deuil", "pratique", "Malades, deuil et funérailles", ["Coran 2:155-157", "Bukhari 1240 (devoirs du musulman)"], [
    L("Visiter les malades", "Visiter le malade fait partie des droits du musulman sur le musulman (Bukhari 1240). On lui parle avec douceur et on fait des invocations pour lui. Pour le malade, l'épreuve est aussi une occasion de patience.",
      Q.mc("Que fait-on envers un malade ?", ["On lui rend visite", "On l'évite", "On le blâme", "On l'oublie"], 0, "")),
    L("Le deuil", "Face à la perte, le croyant dit : « Nous sommes à Allah et c'est à Lui que nous retournerons » (Coran 2:156). Les funérailles comportent le lavage du défunt, le linceul, la prière funéraire (janaza) et l'enterrement. On soutient la famille endeuillée.",
      Q.tf("La prière funéraire est appelée janaza.", true, ""),
      "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", "Innâ li-Llâhi wa innâ ilayhi râji'ûn.", "Coran 2:156", "Nous sommes à Allah, et c'est à Lui que nous retournerons."),
  ], [
    Q.mc("Que dit-on face à une épreuve ou à un décès ?", ["Innâ li-Llâhi wa innâ ilayhi râji'ûn", "Bismillâh", "Allahu akbar", "Subhanallah"], 0, "Coran 2:156."),
    Q.tf("Visiter les malades est un droit du musulman sur le musulman.", true, ""),
    Q.mc("Comment appelle-t-on la prière funéraire ?", ["Janaza", "Jumu'a", "Tarawih", "Istisqa'"], 0, ""),
    Q.order("Remets dans l'ordre les étapes des funérailles.", ["Lavage du défunt", "Linceul", "Prière funéraire", "Enterrement"], ""),
    Q.text("Comment appelle-t-on le linceul ? (le …)", ["kafan", "kafn"], "Le kafan."),
  ], "La prière funéraire se fait debout, sans inclinaison ni prosternation."),
]}
);
buildIndex();
