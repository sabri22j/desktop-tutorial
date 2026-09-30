// Contenu pédagogique de base (notions communément admises dans l'islam sunnite).
const LESSONS = [
  {id:"piliers",title:"Les 5 piliers",items:[
    {t:"1. La Chahada (attestation de foi)",d:"Témoigner qu'il n'y a de divinité digne d'adoration qu'Allah et que Muhammad ﷺ est Son messager.",ar:"أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله",ph:"Ach-hadou an lâ ilâha illa-llâh, wa ach-hadou anna Muhammadan rasoulou-llâh"},
    {t:"2. La Salat (la prière)",d:"Cinq prières obligatoires par jour : Fajr (aube), Dhuhr (midi), Asr (après-midi), Maghrib (coucher du soleil), Isha (nuit)."},
    {t:"3. La Zakat (aumône obligatoire)",d:"Une part annuelle de la richesse (2,5 % de l'épargne dépassant le seuil, le nissab) donnée aux ayants droit."},
    {t:"4. Le Siyam (jeûne du Ramadan)",d:"S'abstenir de manger, boire et de relations conjugales de l'aube (Fajr) au coucher du soleil durant le mois de Ramadan."},
    {t:"5. Le Hajj (pèlerinage)",d:"Pèlerinage à La Mecque, obligatoire une fois dans la vie pour celui qui en a les moyens physiques et financiers."}
  ]},
  {id:"foi",title:"Les 6 piliers de la foi",items:[
    {t:"1. Croire en Allah",d:"Le Dieu unique, sans associé (Tawhid)."},
    {t:"2. Croire aux anges",d:"Créatures de lumière au service d'Allah, comme Jibril (Gabriel)."},
    {t:"3. Croire aux Livres révélés",d:"Dont le Coran, dernière révélation, préservée."},
    {t:"4. Croire aux Messagers",d:"Adam, Nouh (Noé), Ibrahim (Abraham), Moussa (Moïse), Issa (Jésus), jusqu'à Muhammad ﷺ, le dernier."},
    {t:"5. Croire au Jour dernier",d:"La résurrection, le jugement et la vie éternelle."},
    {t:"6. Croire au destin (Qadar)",d:"Le bien comme le mal arrivent par la science et la volonté d'Allah."}
  ]},
  {id:"priere",title:"Purification et prière",items:[
    {t:"Les ablutions (Woudou) — étapes",d:"1) Intention et « Bismillah » 2) Laver les mains 3) Se rincer la bouche 4) Nettoyer le nez 5) Laver le visage 6) Laver les bras jusqu'aux coudes 7) Passer la main mouillée sur la tête et les oreilles 8) Laver les pieds jusqu'aux chevilles."},
    {t:"Déroulement d'un rak'a",d:"Takbir (« Allahou akbar ») → lecture d'Al-Fatiha et d'une sourate → rukou' (inclinaison) → se relever → sujud (prosternation) → s'asseoir → second sujud."},
    {t:"Nombre de rak'at obligatoires",d:"Fajr : 2 · Dhuhr : 4 · Asr : 4 · Maghrib : 3 · Isha : 4."},
    {t:"Al-Fatiha (1er verset)",d:"Ouverture du Coran, récitée à chaque rak'a.",ar:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",ph:"Bismi-llâhi r-Rahmâni r-Rahîm. Al-hamdou li-llâhi Rabbi l-'âlamîn"}
  ]},
  {id:"invocations",title:"Invocations du quotidien",items:[
    {t:"Avant de manger",d:"Au nom d'Allah.",ar:"بِسْمِ اللَّهِ",ph:"Bismillâh"},
    {t:"Après avoir mangé",d:"Louange à Allah qui nous a nourris et abreuvés.",ar:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",ph:"Al-hamdou lillâhi lladhî at'amanâ wa saqânâ"},
    {t:"Salutation",d:"Que la paix soit sur vous. Réponse : « Et sur vous la paix ».",ar:"السَّلَامُ عَلَيْكُمْ",ph:"As-salâmou 'alaykoum"},
    {t:"Remerciement",d:"Qu'Allah te récompense en bien.",ar:"جَزَاكَ اللَّهُ خَيْرًا",ph:"Jazâka-llâhou khayran"},
    {t:"Remise à Allah",d:"Si Allah le veut (pour un projet futur).",ar:"إِنْ شَاءَ اللَّهُ",ph:"In châ' Allâh"}
  ]},
  {id:"prophetes",title:"Les prophètes",items:[
    {t:"Adam",d:"Le premier homme et premier prophète."},
    {t:"Nouh (Noé)",d:"A appelé son peuple à Allah ; l'arche et le déluge."},
    {t:"Ibrahim (Abraham)",d:"« L'ami d'Allah », modèle du monothéisme ; a bâti la Kaaba avec son fils Ismaïl."},
    {t:"Moussa (Moïse)",d:"A reçu la Torah (Tawrat) ; envoyé à Pharaon."},
    {t:"Issa (Jésus)",d:"Messager d'Allah, né de Maryam (Marie), a reçu l'Évangile (Injil)."},
    {t:"Muhammad ﷺ",d:"Né à La Mecque vers 570, premières révélations vers 610, Hégire à Médine en 622, sceau des prophètes."}
  ]}
];

const QUIZ = [
  {q:"Combien y a-t-il de piliers de l'islam ?",o:["3","5","6","7"],a:1},
  {q:"Combien de prières obligatoires par jour ?",o:["3","4","5","6"],a:2},
  {q:"Quel est le mois du jeûne ?",o:["Mouharram","Chaaban","Ramadan","Dhou l-Hijja"],a:2},
  {q:"Quelle prière compte 3 rak'at ?",o:["Fajr","Dhuhr","Maghrib","Isha"],a:2},
  {q:"Quel est le taux de la Zakat sur l'épargne ?",o:["1 %","2,5 %","10 %","20 %"],a:1},
  {q:"Quel ange a transmis la révélation au Prophète ﷺ ?",o:["Mikaïl","Israfil","Jibril","Malik"],a:2},
  {q:"Où se trouve la Kaaba ?",o:["Médine","Jérusalem","La Mecque","Le Caire"],a:2},
  {q:"Comment appelle-t-on l'unicité d'Allah ?",o:["Tawhid","Hajj","Qadar","Sunna"],a:0},
  {q:"Que signifie « Bismillah » ?",o:["Merci","Au nom d'Allah","Paix sur vous","Allah est grand"],a:1},
  {q:"Combien de rak'at pour la prière de Fajr ?",o:["2","3","4","5"],a:0}
];
