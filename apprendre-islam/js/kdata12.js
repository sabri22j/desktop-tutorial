/* Monde 12 : Invocations et vie de tous les jours */
K.world({ id: "w12", n: "Invocations du quotidien", e: "✨", c: "#7a4fd0", d: "Les petites phrases et douas pour chaque moment de la journée.", adv: [
  K.adv("w12a1", "Le salam", "👋", [
    K.c("👋", "As-salamou 'alaykoum", "On se salue en disant « As-salamou 'alaykoum », qui veut dire : que la paix soit sur vous. On peut ajouter « wa rahmatoullahi wa barakatouh ».", "السلام عليكم ورحمة الله وبركاته"),
    K.c("🤝", "On répond", "On répond « Wa 'alaykoumou-s-salam », et sur vous la paix. C'est même obligatoire de répondre au salut."),
    K.c("🌍", "Salam à tous", "On salue les gens que l'on connaît et ceux que l'on ne connaît pas. C'est une belle façon de faire naître l'amitié."),
    K.c("🏠", "En entrant chez soi", "On salue aussi en rentrant à la maison. Cela attire les bénédictions sur la famille."),
  ], [
    K.mc("Que veut dire « As-salamou 'alaykoum » ?", "Que la paix soit sur vous", "Au revoir", "Merci"),
    K.mc("Comment répond-on à ce salut ?", "Wa 'alaykoumou-s-salam", "Bismillah", "Alhamdoulillah"),
    K.tf("On peut saluer aussi les gens qu'on ne connaît pas.", true, "Le salam rapproche les gens."),
    K.tf("On ne répond jamais au salam.", false, "Répondre est important."),
    K.mc("Où dit-on aussi salam ?", "En rentrant chez soi", "Jamais", "Seulement à la mosquée"),
  ]),
  K.adv("w12a2", "Les mots d'Allah", "💬", [
    K.c("🌟", "Bismillah", "« Bismillah » veut dire : au nom d'Allah. On le dit avant de commencer une chose : manger, écrire, voyager, lire.", "بسم الله"),
    K.c("🙏", "Alhamdoulillah", "« Alhamdoulillah » veut dire : louange à Allah. On le dit pour remercier et quand on est content.", "الحمد لله"),
    K.c("🌈", "Soubhanallah", "« Soubhanallah » veut dire : gloire à Allah. On le dit quand on admire quelque chose de beau.", "سبحان الله"),
    K.c("🌅", "Machaa Allah et Inchaa Allah", "« Machaa Allah » : ce qu'Allah a voulu, pour dire que c'est beau, sans jalousie. « Inchaa Allah » : si Allah le veut, quand on parle de l'avenir.", "ما شاء الله إن شاء الله"),
  ], [
    K.match("Relie chaque expression à son sens.", ["Bismillah", "Au nom d'Allah"], ["Alhamdoulillah", "Louange à Allah"], ["Soubhanallah", "Gloire à Allah"]),
    K.mc("« Inchaa Allah » veut dire…", "Si Allah le veut", "C'est beau", "Merci"),
    K.mc("Quand dit-on Bismillah ?", "Avant de commencer", "Après avoir fini seulement", "Jamais"),
    K.tf("On dit Alhamdoulillah pour remercier Allah.", true, "C'est une belle façon de dire merci."),
    K.mc("Que dit-on devant quelque chose de très beau ?", "Machaa Allah", "Au revoir", "Bonne nuit"),
  ]),
  K.adv("w12a3", "Avant et après le repas", "🍽️", [
    K.c("🍽️", "Avant de manger", "On dit « Bismillah ». Si on l'a oublié, on peut dire « Bismillahi awwalahou wa akhirahou » : au nom d'Allah au début et à la fin."),
    K.c("🥤", "Mains et manières", "On mange avec la main droite, on mange ce qui est devant soi, on prend de petites bouchées et on ne gaspille pas."),
    K.c("🙏", "Après avoir mangé", "On peut dire : « Alhamdoulillahi-l-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwa » : louange à Allah qui m'a nourri de ceci, sans force ni puissance de ma part.", "الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني ولا قوة"),
    K.c("💚", "Penser aux autres", "Avant de manger, on peut penser à ceux qui n'ont pas à manger et partager, si l'on peut."),
  ], [
    K.mc("Que dit-on avant de manger ?", "Bismillah", "Alhamdoulillah", "Salam"),
    K.mc("Avec quelle main mange-t-on ?", "La main droite", "La main gauche", "Les deux"),
    K.tf("Après le repas, on peut remercier Allah.", true, "On dit Alhamdoulillah."),
    K.mc("Si on oublie Bismillah au début, on peut dire…", "Bismillahi awwalahou wa akhirahou", "Rien", "Au revoir"),
    K.tf("Il est bien de gaspiller la nourriture.", false, "On ne gaspille pas."),
  ]),
  K.adv("w12a4", "Dormir et se réveiller", "😴", [
    K.c("🛏️", "Avant de dormir", "On se lave les mains, on se couche sur le côté droit, et on dit : « Bismika Allahouma amoutou wa ahya » : avec Ton nom, ô Allah, je meurs et je vis.", "باسمك اللهم أموت وأحيا"),
    K.c("📖", "Des sourates", "Avant de dormir, le Prophète ﷺ récitait Al-Ikhlas, Al-Falaq et An-Nas, puis il passait ses mains sur son corps."),
    K.c("🌅", "Au réveil", "En se réveillant, on dit : « Alhamdoulillahi-l-ladhi ahyana ba'da ma amatana wa ilayhi-n-nouchour » : louange à Allah qui nous a rendu la vie après nous avoir fait mourir.", "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور"),
    K.c("🕊️", "Une bonne nuit", "On pardonne à ceux qui nous ont fait du mal, on remercie Allah pour la journée, et on dort tranquille."),
  ], [
    K.mc("Sur quel côté se couche-t-on pour dormir ?", "Le côté droit", "Le ventre", "Le dos"),
    K.mc("Quelles sourates récitait le Prophète ﷺ avant de dormir ?", "Al-Ikhlas, Al-Falaq et An-Nas", "Al-Baqara", "Al-Fatiha seulement"),
    K.tf("Au réveil, on remercie Allah.", true, "Il nous a rendu la vie."),
    K.mc("On commence la dou'a du coucher par…", "Bismika Allahouma", "Allahou akbar", "Salam"),
    K.tf("Avant de dormir, on pardonne à ceux qui nous ont fait du mal.", true, "On dort le cœur léger."),
  ]),
  K.adv("w12a5", "Sortir, entrer et voyager", "🚪", [
    K.c("🚪", "En sortant", "On dit : « Bismillahi tawakkaltou 'ala Allah, wa la hawla wa la quwwata illa billah » : au nom d'Allah, je m'en remets à Allah, il n'y a de force ni de puissance qu'en Allah.", "بسم الله توكلت على الله ولا حول ولا قوة إلا بالله"),
    K.c("🏠", "En entrant", "En rentrant, on dit « Bismillah » et « Salam ». On entre avec le sourire et on salue sa famille."),
    K.c("🚿", "Aux toilettes", "On y entre du pied gauche et on dit : « Allahouma inni a'oudhou bika mina-l-khoubouthi wal-khaba'ith » : ô Allah, je cherche refuge auprès de Toi contre le mal.", "اللهم إني أعوذ بك من الخبث والخبائث"),
    K.c("🚗", "En voyage", "Quand on monte dans une voiture, on dit « Bismillah » puis « Soubhana-l-ladhi sakhkhara lana hadha » : gloire à Celui qui a mis ceci à notre service."),
  ], [
    K.mc("Que dit-on en sortant de chez soi ?", "Bismillahi tawakkaltou 'ala Allah", "Bonne nuit", "Rien"),
    K.mc("Avec quel pied entre-t-on aux toilettes ?", "Le gauche", "Le droit", "Les deux"),
    K.tf("On dit Salam en rentrant à la maison.", true, "On salue la famille."),
    K.mc("Que dit-on en montant en voiture ?", "Soubhana-l-ladhi sakhkhara lana hadha", "Salam", "Au revoir"),
    K.mc("« Tawakkaltou 'ala Allah » veut dire…", "Je m'en remets à Allah", "Je pars en voyage", "Je suis fatigué"),
  ]),
  K.adv("w12a6", "Éternuer et remercier", "🤧", [
    K.c("🤧", "Quand on éternue", "Quand on éternue, on dit « Alhamdoulillah ». Cela nous rappelle de remercier Allah pour la santé."),
    K.c("🤝", "On répond", "Celui qui entend dit : « Yarhamouka Allah » : qu'Allah te fasse miséricorde. Puis l'éternueur répond : « Yahdikoumou Allah wa youslihou balakoum » : qu'Allah vous guide et améliore votre état.", "يرحمك الله"),
    K.c("🙏", "Jazak Allahou khayran", "Pour remercier quelqu'un, on peut dire « Jazak Allahou khayran » : qu'Allah te récompense en bien. C'est un très beau merci.", "جزاك الله خيرا"),
    K.c("🕊️", "S'excuser", "Quand on fait une erreur, on dit « Désolé » et « Astaghfirullah », et on essaie de réparer. S'excuser est un signe de courage."),
  ], [
    K.mc("Que dit-on quand on éternue ?", "Alhamdoulillah", "Bismillah", "Salam"),
    K.mc("Que répond-on à quelqu'un qui éternue et dit Alhamdoulillah ?", "Yarhamouka Allah", "Au revoir", "Bonne nuit"),
    K.mc("Que veut dire « Jazak Allahou khayran » ?", "Qu'Allah te récompense en bien", "Bonne nuit", "À demain"),
    K.tf("S'excuser est un signe de courage.", true, "Cela montre qu'on est honnête."),
    K.tf("On dit Jazak Allahou khayran pour remercier.", true, "C'est un très beau merci."),
  ]),
] });
