(function () {
  var b = document.querySelector(".burger"), m = document.getElementById("menu");
  if (b && m) {
    b.addEventListener("click", function () { var o = m.classList.toggle("open"); b.setAttribute("aria-expanded", o ? "true" : "false"); });
    m.addEventListener("click", function (e) { if (e.target.tagName === "A") { m.classList.remove("open"); b.setAttribute("aria-expanded", "false"); } });
  }
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();
