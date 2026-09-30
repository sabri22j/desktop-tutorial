const $ = s => document.querySelector(s);
const nav = $("#nav"), content = $("#content");
const load = () => { try { return JSON.parse(localStorage.getItem("islam-done")) || {}; } catch { return {}; } };
const save = d => { try { localStorage.setItem("islam-done", JSON.stringify(d)); } catch {} };
let done = load();

const tabs = [...LESSONS.map(l => ({id: l.id, title: l.title})), {id: "quiz", title: "Quiz"}];
let current = tabs[0].id;

function esc(s){ const e = document.createElement("div"); e.textContent = s; return e.innerHTML; }

function updateProgress(){
  const n = LESSONS.filter(l => done[l.id]).length;
  $("#bar").style.width = (n / LESSONS.length * 100) + "%";
  $("#progressText").textContent = `${n}/${LESSONS.length} leçons terminées`;
}

function renderNav(){
  nav.innerHTML = "";
  tabs.forEach(t => {
    const b = document.createElement("button");
    b.textContent = (done[t.id] ? "✓ " : "") + t.title;
    if (t.id === current) b.className = "active";
    b.onclick = () => { current = t.id; render(); };
    nav.appendChild(b);
  });
}

function renderLesson(l){
  content.innerHTML = `<h2>${esc(l.title)}</h2>` + l.items.map(i => `
    <div class="card"><h3>${esc(i.t)}</h3>
      ${i.ar ? `<div class="ar">${esc(i.ar)}</div>` : ""}
      ${i.ph ? `<div class="phon">${esc(i.ph)}</div>` : ""}
      <p class="tr">${esc(i.d)}</p></div>`).join("") +
    `<button class="primary ${done[l.id] ? "done" : ""}" id="mark">${done[l.id] ? "✓ Leçon terminée" : "Marquer comme terminée"}</button>`;
  $("#mark").onclick = () => { done[l.id] = !done[l.id]; save(done); render(); };
}

function renderQuiz(){
  let i = 0, score = 0;
  const show = () => {
    if (i >= QUIZ.length){
      content.innerHTML = `<div class="card"><p class="score">Score : ${score} / ${QUIZ.length}</p>
        <p class="score">${score >= 8 ? "Excellent, que Dieu vous facilite ! 🌟" : score >= 5 ? "Bien, continuez à réviser 📖" : "Relisez les leçons puis réessayez 💪"}</p>
        <button class="primary" id="again">Recommencer</button></div>`;
      $("#again").onclick = renderQuiz;
      return;
    }
    const q = QUIZ[i];
    content.innerHTML = `<div class="card"><small>Question ${i + 1}/${QUIZ.length}</small><h3>${esc(q.q)}</h3>` +
      q.o.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join("") + `</div>`;
    content.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const k = +b.dataset.k;
      content.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add("ok"); });
      if (k === q.a) score++; else b.classList.add("ko");
      setTimeout(() => { i++; show(); }, 900);
    });
  };
  show();
}

function render(){
  renderNav(); updateProgress();
  if (current === "quiz") renderQuiz();
  else renderLesson(LESSONS.find(l => l.id === current));
}
render();
