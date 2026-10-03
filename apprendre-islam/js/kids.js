/* Espace enfants : petites leçons illustrées lues par Sirâj, quiz sans pression, étoiles et album d'autocollants.
   Contenu simple et prudent ; à faire relire par une personne qualifiée avant diffusion large.
   Audio : audio/kids/<clé>.mp3 (voix de Sirâj) ; sinon, voix de l'appareil. */
const KIDS = [
  { id: "allah", e: "🌍", n: "Allah", c: "#0f8a5f", st: "🌟", cards: [
    { e: "🌍", t: "Le Créateur", x: "Allah a créé le ciel, la terre, les montagnes, les animaux… et toi aussi !" },
    { e: "☝️", t: "Allah est Un", x: "Il n'y a qu'un seul Dieu : Allah. Il n'a pas d'associé et personne ne Lui ressemble." },
    { e: "💚", t: "Allah est bon", x: "Allah nous voit, nous entend et nous aime beaucoup. Il est très miséricordieux." }],
    quiz: [
      { q: "Qui a créé le ciel et la terre ?", o: [["☝️", "Allah"], ["👑", "Un roi"], ["❓", "Personne"]] },
      { q: "Combien y a-t-il de Dieu ?", o: [["1️⃣", "Un seul"], ["2️⃣", "Deux"], ["3️⃣", "Trois"]] },
      { q: "Allah nous…", o: [["👀", "voit et nous entend"], ["🙈", "ne voit pas"], ["😴", "dort"]] }] },
  { id: "prophete", e: "🌙", n: "Le Prophète Muhammad ﷺ", c: "#3b6fd8", st: "🌙", cards: [
    { e: "🕋", t: "Né à La Mecque", x: "Muhammad ﷺ est né dans la ville de La Mecque. Il est le dernier prophète envoyé par Allah." },
    { e: "🤝", t: "Al-Amin, l'honnête", x: "Quand il était jeune, tout le monde l'appelait « Al-Amin », celui en qui on a confiance, parce qu'il disait toujours la vérité." },
    { e: "📖", t: "Le Coran", x: "L'ange Jibril lui a apporté le Coran de la part d'Allah. Muhammad ﷺ a appris aux gens à être doux et gentils." }],
    quiz: [
      { q: "Dans quelle ville est né le Prophète ﷺ ?", o: [["🕋", "La Mecque"], ["🏙️", "Le Caire"], ["🗼", "Paris"]] },
      { q: "Comment l'appelait-on quand il était jeune ?", o: [["🤝", "Al-Amin, l'honnête"], ["🤥", "Le menteur"], ["👑", "Le roi"]] },
      { q: "Quel ange lui a apporté le Coran ?", o: [["😇", "Jibril"], ["🌧️", "Mikaïl"], ["🎺", "Israfil"]] }] },
  { id: "piliers", e: "🕌", n: "Les 5 piliers", c: "#c98d10", st: "🏛️", cards: [
    { e: "🏛️", t: "Comme des colonnes", x: "L'islam repose sur 5 piliers, comme une maison tient sur ses colonnes : la Chahada, la prière, la Zakat, le jeûne et le Hadj." },
    { e: "🤲", t: "Chahada et prière", x: "La Chahada, c'est dire qu'il n'y a de dieu qu'Allah et que Muhammad ﷺ est Son messager. La prière, on la fait 5 fois par jour." },
    { e: "🕋", t: "Zakat, jeûne et Hadj", x: "La Zakat, c'est donner aux pauvres. Le jeûne, c'est celui du Ramadan. Le Hadj, c'est le voyage à La Mecque." }],
    quiz: [
      { q: "Combien y a-t-il de piliers de l'islam ?", o: [["5️⃣", "Cinq"], ["3️⃣", "Trois"], ["7️⃣", "Sept"]] },
      { q: "Quel pilier consiste à donner aux pauvres ?", o: [["💝", "La Zakat"], ["🌙", "Le jeûne"], ["🤲", "La prière"]] },
      { q: "Où va-t-on pour le Hadj ?", o: [["🕋", "À La Mecque"], ["🏫", "À l'école"], ["🏖️", "À la mer"]] }] },
  { id: "priere", e: "🤲", n: "La prière", c: "#8e6ad8", st: "🕊️", cards: [
    { e: "🌅", t: "5 prières par jour", x: "Le musulman prie 5 fois par jour : Fajr à l'aube, Dhouhr à midi, Asr l'après-midi, Maghrib au coucher du soleil et Icha le soir." },
    { e: "💧", t: "Se laver avant", x: "Avant de prier, on fait les ablutions : on se lave les mains, la bouche, le nez, le visage, les bras, la tête et les pieds." },
    { e: "🕋", t: "Vers la Kaaba", x: "Pour prier, on se tourne vers la Kaaba, à La Mecque. On dit « Allahou Akbar », qui veut dire : Allah est le plus grand." }],
    quiz: [
      { q: "Combien de prières par jour ?", o: [["5️⃣", "Cinq"], ["2️⃣", "Deux"], ["9️⃣", "Neuf"]] },
      { q: "Avant de prier, on fait…", o: [["💧", "les ablutions"], ["🍰", "un gâteau"], ["🎨", "un dessin"]] },
      { q: "« Allahou Akbar » veut dire…", o: [["🌟", "Allah est le plus grand"], ["👋", "Bonjour"], ["🙏", "Merci"]] }] },
  { id: "ramadan", e: "🌟", n: "Le Ramadan", c: "#e08a1e", st: "🎉", cards: [
    { e: "🌙", t: "Le mois du jeûne", x: "Le Ramadan est un mois spécial. Les grands ne mangent pas et ne boivent pas de l'aube jusqu'au coucher du soleil." },
    { e: "🤗", t: "Être gentil", x: "Pendant le Ramadan, on prie plus, on lit le Coran, on partage avec les autres et on essaie d'être encore plus gentil." },
    { e: "🎉", t: "La fête de l'Aïd", x: "À la fin du Ramadan, c'est la fête de l'Aïd ! On remercie Allah et on se retrouve en famille." }],
    quiz: [
      { q: "Pendant le jeûne, les grands ne mangent pas…", o: [["☀️", "dans la journée"], ["🌙", "toute la nuit"], ["📅", "toute l'année"]] },
      { q: "Comment s'appelle la fête de la fin du Ramadan ?", o: [["🎉", "L'Aïd"], ["🛒", "Le marché"], ["🕋", "Le Hadj"]] },
      { q: "Pendant le Ramadan, on essaie d'être…", o: [["🤗", "plus gentil"], ["😠", "plus fâché"], ["🏃", "plus pressé"]] }] },
  { id: "manieres", e: "💚", n: "Les belles manières", c: "#e5584a", st: "💚", cards: [
    { e: "👋", t: "Salam !", x: "Quand on rencontre quelqu'un, on dit « As-salamou alaykoum », qui veut dire : que la paix soit sur toi." },
    { e: "🍽️", t: "Avant et après manger", x: "Avant de manger, on dit « Bismillah », au nom d'Allah. Après, on dit « Alhamdoulillah », qui veut dire merci Allah." },
    { e: "😊", t: "Sourire et partager", x: "Le Prophète ﷺ a dit que sourire à ton frère est une aumône. On aime aussi dire la vérité, partager et respecter ses parents." }],
    quiz: [
      { q: "Que dit-on avant de manger ?", o: [["🍽️", "Bismillah"], ["🌙", "Bonne nuit"], ["🚪", "Au revoir"]] },
      { q: "« As-salamou alaykoum » veut dire…", o: [["🕊️", "Que la paix soit sur toi"], ["👋", "Au revoir"], ["🎁", "Bon anniversaire"]] },
      { q: "Pour remercier Allah, on dit…", o: [["🙏", "Alhamdoulillah"], ["🍽️", "Bismillah"], ["🌟", "Allahou Akbar"]] }] },
  { id: "prophetes", e: "📖", n: "Les prophètes", c: "#2b9d9d", st: "⛵", cards: [
    { e: "🌱", t: "Adam, le premier", x: "Adam est le premier homme et le premier prophète. Allah l'a créé et lui a appris le nom de toutes choses." },
    { e: "⛵", t: "Nouh et le bateau", x: "Le prophète Nouh a construit un grand bateau, sur l'ordre d'Allah, pour sauver les croyants et les animaux du déluge." },
    { e: "🔥", t: "Ibrahim et Moussa", x: "Ibrahim adorait Allah seul : le feu est devenu frais pour lui. Moussa a parlé avec Allah et a reçu la Torah." }],
    quiz: [
      { q: "Qui est le premier prophète ?", o: [["🌱", "Adam"], ["⛵", "Nouh"], ["🔥", "Ibrahim"]] },
      { q: "Que construit Nouh ?", o: [["⛵", "Un grand bateau"], ["🏠", "Une maison"], ["🗼", "Une tour"]] },
      { q: "Qu'est devenu le feu pour Ibrahim ?", o: [["❄️", "Frais et sans danger"], ["🌋", "Encore plus chaud"], ["💙", "Tout bleu"]] }] },
  { id: "coran", e: "📗", n: "Le Coran", c: "#2a8a4a", st: "📗", cards: [
    { e: "📖", t: "La parole d'Allah", x: "Le Coran est le livre d'Allah. Il a été révélé en arabe à notre Prophète Muhammad ﷺ par l'ange Jibril." },
    { e: "🔢", t: "114 sourates", x: "Le Coran a 114 chapitres qu'on appelle des sourates. La première s'appelle Al-Fatiha, et la dernière An-Nas." },
    { e: "🧼", t: "Lire avec respect", x: "On lit le Coran avec respect : on se lave les mains, on dit « Bismillah » et on essaie de comprendre ses beaux messages." }],
    quiz: [
      { q: "Combien le Coran a-t-il de sourates ?", o: [["🔢", "114"], ["9️⃣", "9"], ["3️⃣", "30"]] },
      { q: "Quelle est la première sourate ?", o: [["🌅", "Al-Fatiha"], ["🧒", "An-Nas"], ["🐄", "Al-Baqara"]] },
      { q: "Dans quelle langue le Coran a-t-il été révélé ?", o: [["📜", "En arabe"], ["🥖", "En français"], ["🗽", "En anglais"]] }] },
  { id: "mots", e: "✨", n: "Les mots magiques", c: "#d8559a", st: "✨", cards: [
    { e: "🌟", t: "Bismillah", x: "« Bismillah » veut dire : au nom d'Allah. On le dit avant de commencer : manger, travailler, jouer, lire…" },
    { e: "🌈", t: "Machaa Allah, Inchaa Allah", x: "« Machaa Allah » : c'est ce qu'Allah a voulu, pour dire que c'est beau. « Inchaa Allah » : si Allah le veut, pour parler de demain." },
    { e: "🦋", t: "Soubhanallah", x: "« Soubhanallah » veut dire : gloire à Allah. On le dit quand on admire une belle création : un arc-en-ciel, un coucher de soleil, un papillon…" }],
    quiz: [
      { q: "« Inchaa Allah » veut dire…", o: [["🌅", "Si Allah le veut"], ["🍰", "J'ai faim"], ["🚪", "Au revoir"]] },
      { q: "On dit « Machaa Allah » quand…", o: [["🌈", "c'est beau"], ["😠", "on est fâché"], ["😴", "on a sommeil"]] },
      { q: "« Soubhanallah » veut dire…", o: [["🦋", "Gloire à Allah"], ["🌙", "Bonne nuit"], ["🙏", "Merci"]] }] },
];
const KMSG_OK = ["Bravo !", "Super !", "Machallah !"], KMSG_KO = ["Essaie encore !", "Presque ! Réessaie."];

const kidsData = () => { const s = E.S.kids = E.S.kids || { stars: 0, done: {}, stickers: {} }; return s; };
const kidsAudio = (() => {
  let a = null;
  const stop = () => { if (a) { try { a.pause(); } catch {} a = null; } };
  const play = (key, text) => {
    stop(); VOICE.stop();
    const say = () => { if (!VOICE.play("none", 0, text.replace(/ﷺ/g, ", paix sur lui"))) { /* pas de voix disponible */ } };
    try { const el = new Audio(`audio/kids/${key}.mp3`); a = el; el.volume = 1; el.onerror = say; el.play().catch(() => { if (a === el) say(); }); } catch { say(); }
  };
  return { play, stop };
})();
addEventListener("hashchange", () => kidsAudio.stop());

const kidSky = () => `<div class="kd-sky" aria-hidden="true"><i style="left:8%;top:10%">✨</i><i style="left:84%;top:6%">⭐</i><i style="left:70%;top:22%">✨</i><i style="left:20%;top:30%">🌙</i></div>`;
const kidStars = n => `<span class="kd-stars">⭐ ${n}</span>`;

V.kids = (id) => {
  if (id) return kidTheme(id);
  const D = kidsData(), done = KIDS.filter(t => D.done[t.id]).length;
  return `<div class="kd">${kidSky()}
  <div class="kd-hero"><div class="kd-sj">${siraj3d(done ? "proud" : "happy", 120)}</div><div class="bubble kd-bub">Salam petit explorateur ! Choisis une aventure et apprends avec moi.</div></div>
  <div class="kd-top">${kidStars(D.stars)}<a class="kd-album" href="#/album">🎖️ Mon album ${done}/${KIDS.length}</a></div>
  <div class="kd-grid">${KIDS.map((t, i) => `<a class="kd-card${D.done[t.id] ? " done" : ""}" href="#/kids/${t.id}" style="--c:${t.c}"><span class="kd-e">${t.e}</span><b>${esc(t.n)}</b><small>${D.done[t.id] ? "Terminé " + t.st : "3 petites leçons"}</small></a>`).join("")}</div>
  <p class="muted small" style="text-align:center">Pour les enfants, avec un adulte. Contenu à faire relire par une personne qualifiée.</p></div>`;
};

V.album = () => { const D = kidsData(), done = KIDS.filter(t => D.done[t.id]).length;
  return `<div class="kd">${kidSky()}<a class="back" href="#/kids">${ico("back", 18)} Espace enfants</a><h2>🎖️ Mon album</h2><p class="muted">Termine une aventure pour gagner son autocollant.</p>
  <div class="kd-top">${kidStars(D.stars)}<span class="kd-album">${done}/${KIDS.length} autocollants</span></div>
  <div class="kd-grid st">${KIDS.map(t => D.done[t.id] ? `<a class="kd-sticker on" href="#/kids/${t.id}" style="--c:${t.c}"><span>${t.st}</span><small>${esc(t.n)}</small></a>` : `<div class="kd-sticker"><span>❔</span><small>${esc(t.n)}</small></div>`).join("")}</div></div>`; };

/* ---- leçon + quiz d'un thème ---- */
let KS = null;
function kidTheme(id) {
  const t = KIDS.find(x => x.id === id); if (!t) return V.kids();
  KS = { t, ph: "cards", i: 0, qi: 0, first: true, got: 0 };
  setTimeout(kidShow, 0);
  return `<div class="kd">${kidSky()}<a class="back" href="#/kids">${ico("back", 18)} Espace enfants</a><div id="kstage" style="--c:${t.c}"></div></div>`;
}
function kidShow(auto = true) {
  const st = document.getElementById("kstage"); if (!st || !KS) return; const { t } = KS;
  const dots = n => `<div class="kd-dots">${Array.from({ length: n }, (_, k) => `<i class="${k < (KS.ph === "cards" ? KS.i : KS.qi) ? "on" : k === (KS.ph === "cards" ? KS.i : KS.qi) ? "cur" : ""}"></i>`).join("")}</div>`;
  if (KS.ph === "cards") {
    const c = t.cards[KS.i];
    st.innerHTML = `${dots(3)}<div class="kd-pane"><div class="kd-big">${c.e}</div><h2>${esc(c.t)}</h2><p class="kd-text">${esc(c.x)}</p>
      <div class="kd-say">${siraj("happy", 70, "float")}<button class="kd-listen" data-kplay>🔊 Écouter</button></div>
      <button class="btn kd-next" data-knext>${KS.i < 2 ? "Suivant ▶" : "Place au quiz ! 🎯"}</button></div>`;
    if (auto) kidsAudio.play(`${t.id}-c${KS.i}`, c.t + ". " + c.x);
  } else if (KS.ph === "quiz") {
    const q = t.quiz[KS.qi]; KS.order = KS.order && KS.order.q === KS.qi ? KS.order : { q: KS.qi, a: q.o.map((_, k) => k).sort(() => Math.random() - .5) };
    st.innerHTML = `${dots(3)}<div class="kd-pane"><h2 class="kd-q">${esc(q.q)}</h2>
      <div class="kd-opts">${KS.order.a.map(k => `<button class="kd-opt" data-kopt="${k}"><span>${q.o[k][0]}</span><b>${esc(q.o[k][1])}</b></button>`).join("")}</div>
      <div class="kd-say">${siraj("think", 70, "float")}<button class="kd-listen" data-kplay>🔊 Écouter</button></div><div id="kfb" class="kd-fb"></div></div>`;
    KS.first = true;
    if (auto) kidsAudio.play(`${t.id}-q${KS.qi}`, q.q);
  } else {
    const D = kidsData(); D.done[t.id] = true; D.stickers[t.id] = true; E.save();
    st.innerHTML = `<div class="kd-pane kd-end"><div class="kd-big kd-pop">${t.st}</div><h2>Bravo !</h2><p class="kd-text">Tu as gagné l'autocollant « ${esc(t.n)} » et ${KS.got} étoile${KS.got > 1 ? "s" : ""} ⭐</p>
      <div class="kd-say">${siraj3d("proud", 110)}</div><a class="btn" href="#/kids">Autre aventure</a><a class="btn sec" href="#/album" style="margin-top:8px">Voir mon album</a></div>`;
    SND.win(); confetti(); kidsAudio.play("fx-end", "Bravo ! Tu as gagné un autocollant !");
  }
}
document.addEventListener("click", e => {
  const t = e.target.closest("[data-kplay],[data-knext],[data-kopt],[data-knext2]"); if (!t || !KS) return;
  if (t.matches("[data-kplay]")) { const c = KS.ph === "cards" ? KS.t.cards[KS.i] : KS.t.quiz[KS.qi]; kidsAudio.play(`${KS.t.id}-${KS.ph === "cards" ? "c" + KS.i : "q" + KS.qi}`, KS.ph === "cards" ? c.t + ". " + c.x : c.q); }
  else if (t.matches("[data-knext]")) { if (KS.ph === "cards") { if (KS.i < 2) KS.i++; else { KS.ph = "quiz"; KS.qi = 0; } } kidShow(); window.scrollTo(0, 0); }
  else if (t.matches("[data-knext2]")) { if (KS.qi < 2) KS.qi++; else KS.ph = "end"; kidShow(); window.scrollTo(0, 0); }
  else if (t.matches("[data-kopt]")) {
    if (t.classList.contains("ok") || t.classList.contains("no")) return;
    const q = KS.t.quiz[KS.qi], k = +t.dataset.kopt, fb = document.getElementById("kfb");
    if (k === 0) { // la bonne réponse est toujours en position 0 dans les données
      document.querySelectorAll(".kd-opt").forEach(b => { b.disabled = true; if (+b.dataset.kopt !== 0) b.classList.add("dim"); }); t.classList.add("ok");
      if (KS.first) { KS.got++; kidsData().stars++; E.save(); }
      SND.correct(); const m = KMSG_OK[Math.floor(Math.random() * KMSG_OK.length)]; fb.innerHTML = `<b>${m} ${KS.first ? "⭐" : ""}</b><button class="btn kd-next" data-knext2>${KS.qi < 2 ? "Question suivante ▶" : "Terminer 🎉"}</button>`;
      confetti(); kidsAudio.play("fx-ok" + (KMSG_OK.indexOf(m) + 1), m);
    } else { KS.first = false; t.classList.add("no"); t.disabled = true; SND.wrong(); const m = KMSG_KO[Math.floor(Math.random() * KMSG_KO.length)]; fb.innerHTML = `<b>${m}</b>`; kidsAudio.play("fx-ko" + (KMSG_KO.indexOf(m) + 1), m); }
  }
});
document.addEventListener("change", e => {
  if (e.target.id !== "set-kid") return;
  E.S.settings.kid = e.target.checked; E.save(); location.hash = e.target.checked ? "#/kids" : "#/home";
});
