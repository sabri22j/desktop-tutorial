/* Le diamant en vrai 3D (WebGL, bibliothèque three.js, licence MIT, copie locale dans js/vendor).
   Chargement à la demande ; si le 3D n'est pas possible (WebGL absent, hors ligne sans cache), l'image SVG reste affichée. */
const H3D = (() => {
  let lib = null, live = 0;
  const load = () => lib || (lib = new Promise((res, rej) => {
    if (window.THREE) return res(window.THREE);
    const add = src => new Promise((ok, ko) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = ko; document.head.appendChild(s); });
    add("js/vendor/three.min.js").catch(() => add("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js")).then(() => window.THREE ? res(window.THREE) : rej(), rej);
  }));
  const hasGL = () => { try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; } };
  const still = () => matchMedia("(prefers-reduced-motion:reduce)").matches;

  function gem(T) {
    const g = new T.Group(), m = new T.MeshStandardMaterial({ color: 0x3ab0ff, emissive: 0x0a5fa8, emissiveIntensity: 0.5, roughness: 0.12, metalness: 0.35, flatShading: true });
    const top = new T.Mesh(new T.OctahedronGeometry(1, 0), m); top.scale.set(0.8, 1.15, 0.8); g.add(top);
    const edge = new T.LineSegments(new T.EdgesGeometry(top.geometry), new T.LineBasicMaterial({ color: 0xcdeeff })); edge.scale.copy(top.scale); g.add(edge);
    return { obj: g, eyes: [], amber: m, glow: null };
  }

  function mount(host, kind) {
    if (!hasGL() || live >= 3 || host.dataset.h3 || still()) return; host.dataset.h3 = "1"; live++;
    load().then(T => {
      if (!host.isConnected) { live--; return; }
      const w = host.clientWidth || 110, h = host.clientHeight || 110, r = new T.WebGLRenderer({ antialias: true, alpha: true });
      r.setPixelRatio(Math.min(2, devicePixelRatio || 1)); r.setSize(w, h); r.domElement.className = "h3c"; r.domElement.setAttribute("aria-hidden", "true");
      const sc = new T.Scene(), cam = new T.PerspectiveCamera(32, w / h, 0.1, 50); cam.position.set(0, 0.1, 5.2);
      sc.add(new T.AmbientLight(0xffffff, 0.75)); const key = new T.DirectionalLight(0xffffff, 1.1); key.position.set(2, 3, 4); sc.add(key);
      const m = gem(T); sc.add(m.obj); host.appendChild(r.domElement); host.classList.add("on3d");
       const t0 = performance.now();
      let raf = 0, visible = true; const io = "IntersectionObserver" in window ? new IntersectionObserver(es => { visible = es[0].isIntersecting; }) : null; io && io.observe(host);
      const loop = now => {
        if (!host.isConnected) { cancelAnimationFrame(raf); io && io.disconnect(); r.dispose(); try { r.forceContextLoss(); } catch {} live--; return; }
        raf = requestAnimationFrame(loop); if (!visible || document.hidden) return;
        const t = (now - t0) / 1000;
        m.obj.rotation.y = t * 1.4; m.obj.position.y = Math.sin(t * 2) * 0.12; m.obj.rotation.x = 0.2 * Math.sin(t);
        r.render(sc, cam);
      };
      raf = requestAnimationFrame(loop);
    }).catch(() => { live--; delete host.dataset.h3; });
  }
  /* Cherche dans la page tous les emplacements 3D et les active */
  const scan = root => (root || document).querySelectorAll(".s3d:not([data-h3])").forEach(h => mount(h, h.dataset.k || "lantern"));
  return { scan, mount };
})();
