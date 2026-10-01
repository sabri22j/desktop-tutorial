/* Niveaux 41 à 46 : prophètes Moussa, Issa, Yusuf. Références coraniques citées par chapitre. */
LEVELS.push(
{ n: 41, unit: "Moussa (1) : de l'enfance à l'appel", chapters: [
  ch("c41-moussa-appel", "prophetes", "Moussa : l'enfance et l'appel", ["Coran 28:1-35 (Al-Qasas)", "Coran 20:9-48 (Ta-Ha)"], [
    L("Sauvé des eaux", "Moussa naît en Égypte à une époque où Pharaon opprimait les Bani Israil (Coran 28:4). Allah inspire à sa mère de le mettre dans le fleuve et de ne pas avoir peur (28:7). La famille de Pharaon le recueille. Sa mère est ensuite rendue à lui pour l'allaiter : Allah tient Sa promesse (28:13).",
      Q.mc("Où la mère de Moussa l'a-t-elle mis sur inspiration d'Allah ?", ["Dans le fleuve", "Dans une grotte", "Dans le désert", "Dans un puits"], 0, "Coran 28:7.")),
    L("Le feu et la parole d'Allah", "Après avoir fui l'Égypte, Moussa séjourne à Madyan, où il se marie et travaille. Sur le chemin du retour, il voit un feu dans la vallée sacrée de Tuwa. Allah lui parle : « C'est Moi Allah, point de divinité que Moi. Adore-Moi et accomplis la prière pour te souvenir de Moi » (Coran 20:14). Il reçoit des signes : son bâton et sa main blanche.",
      Q.mc("Comment appelle-t-on Moussa, car Allah lui a parlé directement ?", ["Kalîmullâh (celui à qui Allah a parlé)", "Khalîlullâh (l'ami d'Allah)", "Safiyyullâh", "Rûhullâh"], 0, "Coran 4:164."),
      "إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي", "Innanî anâ Llâhu lâ ilâha illâ anâ fa-'budnî wa aqimi s-salâta li-dhikrî.", "Coran 20:14",
      "En vérité, c'est Moi Allah : point de divinité que Moi. Adore-Moi donc et accomplis la Salat pour te souvenir de Moi."),
  ], [
    Q.mc("Quelle tribu opprimait Pharaon à l'époque de Moussa ?", ["Les Bani Israil", "Les Quraysh", "Les Aws", "Les Thamud"], 0, "Coran 28:4."),
    Q.tf("Moussa a été élevé dans la maison de Pharaon.", true, "Coran 28:8-9."),
    Q.mc("Dans quelle ville Moussa s'est-il réfugié après avoir quitté l'Égypte ?", ["Madyan", "Médine", "La Mecque", "Jérusalem"], 0, "Coran 28:22."),
    Q.match("Associe chaque signe ou lieu à son histoire.", [["Le feu", "Vu par Moussa dans la vallée de Tuwa"], ["Le bâton", "Un des signes donnés à Moussa"], ["Madyan", "Terre où il s'est réfugié"]], ""),
    Q.text("Comment s'appelle la sourate qui raconte longuement l'enfance de Moussa ? (Al-…)", ["qasas", "kasas"], "Sourate Al-Qasas (28)."),
  ], "Moussa est le prophète le plus cité nominativement dans le Coran."),
]},
{ n: 42, unit: "Moussa (2) : Pharaon et la sortie d'Égypte", chapters: [
  ch("c42-moussa-pharaon", "prophetes", "Moussa face à Pharaon", ["Coran 7:103-137", "Coran 26:10-68 (Ash-Shu'ara)", "Coran 10:90-92", "Coran 7:142-145"], [
    L("Le défi", "Moussa et son frère Harun appellent Pharaon à adorer Allah seul et à laisser partir les Bani Israil. Pharaon rassemble ses magiciens. Quand le bâton de Moussa avale leurs œuvres, les magiciens se prosternent et croient (Coran 7:120-122).",
      Q.tf("Les magiciens de Pharaon ont cru en Allah après avoir vu le signe.", true, "Coran 7:120-122.")),
    L("La sortie d'Égypte", "Sur ordre d'Allah, Moussa quitte l'Égypte de nuit avec les Bani Israil. Pharaon les poursuit. Allah ordonne à Moussa de frapper la mer avec son bâton : elle s'ouvre (Coran 26:63). Pharaon et son armée se noient. Allah dit que son corps sera un signe pour ceux qui viendront après (10:92).",
      Q.mc("Que se passe-t-il quand Moussa frappe la mer avec son bâton ?", ["Elle s'ouvre", "Elle devient de feu", "Elle se retire", "Rien"], 0, "Coran 26:63.")),
  ], [
    Q.mc("Qui accompagne Moussa dans sa mission ?", ["Harun (Aaron)", "Yusuf", "Ibrahim", "Nuh"], 0, "Coran 20:29-36."),
    Q.tf("Pharaon a fini par croire et être sauvé de la noyade.", false, "Il a cru trop tard, au moment de se noyer (Coran 10:90-91)."),
    Q.mc("Quel livre a reçu Moussa ?", ["La Torah (Tawrat)", "L'Évangile (Injil)", "Le Zabur", "Le Coran"], 0, "Coran 7:145."),
    Q.order("Remets dans l'ordre.", ["Défi avec les magiciens", "Départ de nuit avec les Bani Israil", "Ouverture de la mer", "Noyade de Pharaon", "Don de la Torah"], ""),
    Q.text("Quel est le frère de Moussa, aussi prophète ? (un prénom)", ["harun", "haroun", "aaron"], "Harun (Aaron)."),
  ], "Le Coran dit que le corps de Pharaon est un « signe » pour les générations suivantes (10:92)."),
]},
{ n: 43, unit: "Issa (1) : Maryam et la naissance", chapters: [
  ch("c43-issa-naissance", "prophetes", "Maryam et la naissance d'Issa", ["Coran 3:35-47 (Al-Imran)", "Coran 19:16-34 (Maryam)", "Coran 3:59"], [
    L("Maryam", "Maryam (Marie), fille d'Imran, est vouée à Allah par sa mère et grandit sous la garde de Zakariyya. Une sourate du Coran porte son nom. Le Coran la décrit comme choisie, purifiée et préférée aux femmes du monde (Coran 3:42).",
      Q.mc("Quelle sourate du Coran porte le nom de Maryam ?", ["La 19e", "La 12e", "La 1re", "La 112e"], 0, "")),
    L("La naissance et le berceau", "Les anges annoncent à Maryam la naissance d'Issa, par la parole d'Allah, sans père. Elle accouche sous un palmier. Quand les gens l'accusent, Issa, encore nourrisson, parle : « Je suis le serviteur d'Allah. Il m'a donné le Livre et m'a désigné prophète » (Coran 19:30). Le Coran compare sa création à celle d'Adam (3:59).",
      Q.tf("Issa a parlé dans son berceau, selon le Coran.", true, "Coran 19:29-33."),
      "قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا", "Qâla innî 'abdu Llâhi âtâniya l-kitâba wa ja'alanî nabiyyâ.", "Coran 19:30",
      "Il dit : Je suis vraiment le serviteur d'Allah. Il m'a donné le Livre et m'a désigné Prophète."),
  ], [
    Q.mc("Comment le Coran présente-t-il Issa ?", ["Un serviteur et messager d'Allah", "Un dieu", "Le fils d'Allah", "Un roi"], 0, "Coran 4:171 et 19:30."),
    Q.tf("Le Coran compare la création d'Issa à celle d'Adam.", true, "Coran 3:59."),
    Q.mc("Comment s'appelle la mère d'Issa ?", ["Maryam", "Asiya", "Hajar", "Sarah"], 0, ""),
    Q.match("Associe.", [["Maryam", "Mère d'Issa"], ["Zakariyya", "Gardien de Maryam"], ["Issa", "Messager d'Allah, parlant dès le berceau"]], ""),
    Q.text("Comment dit-on « Jésus » en arabe ? (un mot)", ["issa", "isa", "aissa", "eissa"], "Issa."),
  ], "Maryam est la seule femme nommée dans le Coran."),
]},
{ n: 44, unit: "Issa (2) : la mission", chapters: [
  ch("c44-issa-mission", "prophetes", "La mission d'Issa", ["Coran 3:49-55", "Coran 5:110-117", "Coran 4:157-159", "Coran 61:6"], [
    L("Des signes par la permission d'Allah", "Issa est envoyé aux Bani Israil avec des signes, toujours « par la permission d'Allah » : il guérit l'aveugle et le lépreux, redonne vie aux morts (Coran 3:49 ; 5:110). Il reçoit l'Évangile (Injil). Ses disciples, les hawariyyun, croient en lui (3:52).",
      Q.mc("Par quelle permission Issa accomplit-il des miracles ?", ["Celle d'Allah", "La sienne", "Celle des anges", "Celle des rois"], 0, "Coran 3:49.")),
    L("Ce que dit le Coran", "Le Coran dit qu'Issa n'est ni Dieu ni fils de Dieu, mais un messager (5:72-75). Selon le Coran, ils ne l'ont ni tué ni crucifié, mais cela leur est apparu ainsi ; Allah l'a élevé auprès de Lui (4:157-158). Les musulmans croient, d'après des hadiths authentiques, qu'il reviendra avant la fin des temps (Bukhari 3448 ; Muslim 155).",
      Q.tf("Selon les musulmans, Issa a été élevé auprès d'Allah.", true, "Coran 4:158.")),
  ], [
    Q.mc("Comment s'appelle le livre donné à Issa ?", ["L'Injil (Évangile)", "La Tawrat", "Le Zabur", "Le Coran"], 0, ""),
    Q.tf("Le Coran présente Issa comme un prophète et non comme Dieu.", true, "Coran 5:75."),
    Q.mc("Comment appelle-t-on les disciples d'Issa dans le Coran ?", ["Les hawariyyun", "Les ansar", "Les muhajirun", "Les ahzab"], 0, "Coran 3:52."),
    Q.match("Associe.", [["Injil", "Livre d'Issa"], ["Tawrat", "Livre de Moussa"], ["Coran", "Livre de Muhammad ﷺ"]], ""),
    Q.text("Quel prophète est mentionné comme annonçant un messager nommé Ahmad (Coran 61:6) ? (un prénom)", ["issa", "isa", "aissa", "eissa"], "Issa."),
  ], "Issa est appelé « al-Masih » (le Messie) dans le Coran."),
]},
{ n: 45, unit: "Yusuf (1) : le rêve et le puits", chapters: [
  ch("c45-yusuf-reve", "prophetes", "Yusuf : le rêve et le puits", ["Coran 12:1-20 (Yusuf)"], [
    L("Un rêve", "La sourate Yusuf (12) est appelée « le plus beau des récits » (12:3). Yusuf, fils de Yaqub (Jacob), rêve de onze étoiles, du soleil et de la lune qui se prosternent devant lui (12:4). Son père lui demande de ne pas le raconter à ses frères.",
      Q.mc("Que voit Yusuf dans son rêve ?", ["Onze étoiles, le soleil et la lune", "Un palmier", "Une montagne", "Une arche"], 0, "Coran 12:4.")),
    L("Le puits", "Ses frères, jaloux de l'affection de leur père, le jettent dans un puits (12:15). Une caravane le trouve et le vend en Égypte pour quelques pièces (12:19-20). Ses frères disent à leur père qu'un loup l'a dévoré, mais Yaqub répond : « Patience, belle patience ! » (12:18).",
      Q.tf("Yusuf a été jeté dans un puits par ses frères.", true, "Coran 12:15.")),
  ], [
    Q.mc("Comment s'appelle le père de Yusuf ?", ["Yaqub", "Ishaq", "Ibrahim", "Nuh"], 0, ""),
    Q.tf("Yusuf a été trouvé par une caravane.", true, ""),
    Q.mc("Comment le Coran appelle-t-il l'histoire de Yusuf ?", ["Le plus beau des récits", "Le plus long des récits", "Le récit des anges", "Le récit du destin"], 0, "Coran 12:3."),
    Q.order("Remets dans l'ordre.", ["Le rêve", "La jalousie des frères", "Le puits", "La vente en Égypte"], ""),
    Q.text("Que dit Yaqub : « Patience, … patience ! » (un mot)", ["belle", "beau"], "« Sabrun jamîl », une belle patience (12:18)."),
  ], "La sourate Yusuf raconte une seule histoire du début à la fin, ce qui est rare dans le Coran."),
]},
{ n: 46, unit: "Yusuf (2) : l'Égypte et le pardon", chapters: [
  ch("c46-yusuf-egypte", "prophetes", "Yusuf en Égypte et le pardon", ["Coran 12:21-101 (Yusuf)"], [
    L("L'épreuve et la prison", "En Égypte, Yusuf grandit chez un haut personnage. Il résiste à une tentation en disant : « Qu'Allah me garde ! » (12:23). Accusé à tort, il est emprisonné. En prison, il interprète les rêves de ses compagnons, puis celui du roi (sept vaches grasses et sept maigres) et conseille de stocker les récoltes (12:43-49).",
      Q.mc("Quel rêve du roi Yusuf a-t-il interprété ?", ["Sept vaches grasses et sept maigres", "Un feu dans un puits", "Une arche", "Un serpent"], 0, "Coran 12:43.")),
    L("Les retrouvailles", "Yusuf est placé à la tête des réserves du pays (12:55). Pendant la famine, ses frères viennent en Égypte. Il se fait reconnaître et leur pardonne : « Pas de reproche à vous aujourd'hui ! Qu'Allah vous pardonne » (12:92). Son père retrouve la vue, la famille s'installe en Égypte et le rêve initial se réalise (12:100).",
      Q.tf("Yusuf a pardonné à ses frères.", true, "Coran 12:92."),
      "قَالَ لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ", "Qâla lâ tathrîba 'alaykumu l-yawm, yaghfiru Llâhu lakum wa huwa arhamu r-râhimîn.", "Coran 12:92",
      "Pas de reproche à vous aujourd'hui. Qu'Allah vous pardonne, car Il est le plus miséricordieux des miséricordieux."),
  ], [
    Q.mc("Que fait Yusuf quand il retrouve ses frères ?", ["Il leur pardonne", "Il les punit", "Il les chasse", "Il les ignore"], 0, "Coran 12:92."),
    Q.tf("Yusuf a fini par diriger la gestion des réserves de l'Égypte.", true, "Coran 12:55."),
    Q.mc("Quelle qualité de Yusuf la sourate met-elle en avant ?", ["La patience et le pardon", "La richesse", "La force physique", "Le voyage"], 0, ""),
    Q.order("Remets dans l'ordre.", ["Vente en Égypte", "Prison", "Interprétation du rêve du roi", "Gestion des réserves", "Retrouvailles avec ses frères"], ""),
    Q.text("Comment dit-on « Joseph » en arabe ? (un mot)", ["yusuf", "youssouf", "yousouf", "yusuf"], "Yusuf."),
  ], "Dans le rêve du roi, sept années de récolte abondante sont suivies de sept années de disette (12:47-48)."),
]}
);
buildIndex();
