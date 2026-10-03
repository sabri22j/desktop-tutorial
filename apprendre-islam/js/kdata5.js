/* Monde 5 : Les 5 piliers de l'islam */
K.world({ id: "w5", n: "Les 5 piliers", e: "🕌", c: "#c98d10", d: "Les cinq bases de la pratique d'un musulman.", adv: [
  K.adv("w5a1", "Les 5 piliers, c'est quoi ?", "🏛️", [
    K.c("🏛️", "Une maison solide", "L'islam repose sur cinq piliers, comme une maison tient sur ses colonnes. Le Prophète ﷺ les a enseignés à ses compagnons."),
    K.c("☝️", "1 et 2", "Premier pilier : la Chahada, le témoignage de foi. Deuxième pilier : la Salat, la prière cinq fois par jour."),
    K.c("💝", "3 et 4", "Troisième pilier : la Zakat, l'aumône obligatoire. Quatrième pilier : le Siyam, le jeûne du mois de Ramadan."),
    K.c("🕋", "5", "Cinquième pilier : le Hadj, le pèlerinage à La Mecque, pour ceux qui en ont la possibilité."),
  ], [
    K.mc("Combien y a-t-il de piliers de l'islam ?", "5", "3", "7"),
    K.order("Remets les piliers dans l'ordre.", "La Chahada", "La prière", "La Zakat", "Le jeûne", "Le Hadj"),
    K.match("Relie chaque pilier à son nom français.", ["La Salat", "La prière"], ["La Zakat", "L'aumône obligatoire"], ["Le Siyam", "Le jeûne"]),
    K.tf("Le Hadj est le troisième pilier.", false, "Le Hadj est le cinquième pilier."),
    K.mc("Quel pilier est le témoignage de foi ?", "La Chahada", "Le Hadj", "La Zakat"),
  ]),
  K.adv("w5a2", "La Chahada", "☝️", [
    K.c("📣", "Les deux phrases", "La Chahada se dit : « Ash-hadu an lâ ilâha illa Allâh, wa ash-hadu anna Muhammadan rasûlu Allâh ». C'est-à-dire : je témoigne qu'il n'y a de dieu qu'Allah et que Muhammad est Son messager.", "أشهد أن لا إله إلا الله وأن محمدا رسول الله"),
    K.c("💬", "Dire et croire", "On la dit avec sincérité, du fond du cœur. Cela veut dire qu'on adore Allah seul et qu'on suit le Prophète ﷺ."),
    K.c("🚪", "L'entrée dans l'islam", "Dire la Chahada avec sincérité est la porte de l'islam. Les musulmans la répètent aussi dans la prière."),
    K.c("💚", "Un cœur qui change", "Croire en cette phrase, c'est aussi essayer de bien se comporter : dire la vérité, aider et être gentil."),
  ], [
    K.mc("La Chahada, c'est…", "Le témoignage de foi", "Le jeûne", "Le voyage"),
    K.tf("On dit la Chahada avec sincérité.", true, "C'est un témoignage du cœur."),
    K.mc("Qui est le messager d'Allah dans la Chahada ?", "Muhammad ﷺ", "Nouh", "Un ange"),
    K.mc("Que dit la première partie de la Chahada ?", "Il n'y a de dieu qu'Allah", "Il y a plusieurs dieux", "Allah est loin"),
    K.tf("La Chahada est le premier pilier.", true, "Elle ouvre la porte de l'islam."),
  ]),
  K.adv("w5a3", "La Salat : la prière", "🤲", [
    K.c("🌅", "Cinq fois par jour", "Les musulmans prient cinq fois par jour : à l'aube, à midi, l'après-midi, au coucher du soleil et la nuit."),
    K.c("💫", "Pourquoi prier ?", "La prière est un rendez-vous avec Allah. Elle nous rappelle Allah, nous calme et nous aide à bien nous comporter."),
    K.c("👨‍👩‍👧", "Ensemble", "On peut prier seul, en famille ou à la mosquée. Prier en groupe est très beau, surtout le vendredi."),
    K.c("🧼", "Propre et prêt", "Avant de prier, on fait les ablutions, on porte des vêtements propres et on se tourne vers la Kaaba."),
  ], [
    K.mc("Combien de prières par jour ?", "5", "2", "9"),
    K.mc("Vers quoi se tourne-t-on pour prier ?", "La Kaaba", "Le soleil", "La mer"),
    K.tf("La prière nous rappelle Allah.", true, "C'est un rendez-vous avec Allah."),
    K.mc("Avant de prier, on fait…", "Les ablutions", "Un gâteau", "Un dessin"),
    K.tf("On peut prier seul ou en groupe.", true, "Les deux sont possibles."),
  ]),
  K.adv("w5a4", "La Zakat et la générosité", "💝", [
    K.c("💝", "Donner aux autres", "La Zakat est une part de nos biens que l'on donne aux personnes dans le besoin, chaque année, quand on possède assez."),
    K.c("🧮", "Une petite part", "Elle représente une petite part de l'argent épargné : 2,5 % pour l'argent mis de côté. Elle nettoie le cœur de l'avarice."),
    K.c("🤲", "Pour qui ?", "Elle est donnée aux pauvres, aux personnes endettées et à d'autres catégories citées dans le Coran."),
    K.c("🌟", "La sadaqa", "En plus, on peut donner à tout moment une sadaqa : un peu d'argent, de la nourriture, un sourire ou un bon conseil. Même un sourire est une sadaqa."),
  ], [
    K.mc("Que fait-on avec la Zakat ?", "On donne aux personnes dans le besoin", "On achète des jouets", "On la cache"),
    K.mc("Quel pourcentage de l'épargne donne-t-on pour la Zakat ?", "2,5 %", "50 %", "100 %"),
    K.tf("Un sourire peut être une sadaqa.", true, "Le Prophète ﷺ l'a dit."),
    K.tf("La Zakat se donne seulement aux riches.", false, "Elle est donnée aux personnes dans le besoin."),
    K.mc("Comment s'appelle l'aumône que l'on peut donner à tout moment ?", "La sadaqa", "Le Hadj", "L'adhan"),
  ]),
  K.adv("w5a5", "Le jeûne du Ramadan", "🌙", [
    K.c("🌙", "Le mois béni", "Le Ramadan est le neuvième mois du calendrier musulman. C'est le mois où le Coran a commencé à être révélé."),
    K.c("🍽️", "Jeûner", "Les adultes en bonne santé ne mangent pas et ne boivent pas de l'aube jusqu'au coucher du soleil. Les enfants peuvent s'entraîner doucement, avec leurs parents."),
    K.c("🤗", "Plus que ne pas manger", "Le jeûne, c'est aussi éviter les mauvaises paroles et les disputes, être patient et être plus gentil."),
    K.c("🌅", "La rupture", "Au coucher du soleil, on rompt le jeûne avec des dattes et de l'eau : c'est l'iftar. On se réunit en famille."),
  ], [
    K.mc("Quel mois jeûne-t-on ?", "Ramadan", "Mouharram", "Rajab"),
    K.mc("Avec quoi aime-t-on rompre le jeûne ?", "Des dattes et de l'eau", "Des bonbons", "Du chocolat seulement"),
    K.tf("Le jeûne, c'est aussi éviter les mauvaises paroles.", true, "Il nous apprend la patience."),
    K.mc("Comment s'appelle le repas de la rupture du jeûne ?", "L'iftar", "Le suhoor", "L'adhan"),
    K.tf("Le jeûne dure toute la journée et toute la nuit.", false, "De l'aube jusqu'au coucher du soleil."),
  ]),
  K.adv("w5a6", "Le Hadj", "🕋", [
    K.c("🕋", "Le pèlerinage", "Le Hadj est le voyage à La Mecque pour adorer Allah. Il est obligatoire une fois dans sa vie, pour celui qui en a les moyens et la santé."),
    K.c("⚪", "Tous égaux", "Les pèlerins portent des vêtements simples et blancs (pour les hommes). Riches ou pauvres, ils sont tous égaux devant Allah."),
    K.c("🚶", "Les gestes", "Pendant le Hadj, on tourne autour de la Kaaba, on marche entre Safa et Marwa, on se rend à la plaine d'Arafa et on fait d'autres gestes."),
    K.c("🐑", "L'Aïd al-Adha", "À la fin du Hadj, c'est la fête de l'Aïd al-Adha, qui rappelle l'histoire d'Ibrahim. Les musulmans du monde entier la fêtent."),
  ], [
    K.mc("Où a lieu le Hadj ?", "À La Mecque", "À Paris", "Au désert du Nil"),
    K.tf("Le Hadj est obligatoire une fois pour celui qui en a les moyens.", true, "C'est le cinquième pilier."),
    K.mc("Que fait-on autour de la Kaaba ?", "On tourne autour", "On saute", "On dort"),
    K.mc("Quelle fête suit le Hadj ?", "L'Aïd al-Adha", "L'Aïd al-Fitr", "Le Ramadan"),
    K.tf("Les pèlerins sont égaux devant Allah.", true, "Riches ou pauvres."),
  ]),
] });
