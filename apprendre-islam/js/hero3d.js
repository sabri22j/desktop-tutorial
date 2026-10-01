/* Sirâj et le diamant en vrai 3D (WebGL, bibliothèque three.js, licence MIT, copie locale dans js/vendor).
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

  function lantern(T) {
    const g = new T.Group(), amber = new T.MeshStandardMaterial({ color: 0xe9a62a, emissive: 0xd9801a, emissiveIntensity: 0.35, roughness: 0.35, metalness: 0.05 }), green = new T.MeshStandardMaterial({ color: 0x0f8a5f, roughness: 0.45, metalness: 0.15 });
    const prof = [[0.0, -1.0], [0.42, -0.98], [0.6, -0.8], [0.68, -0.4], [0.7, 0.05], [0.64, 0.5], [0.5, 0.78], [0.0, 0.85]].map(p => new T.Vector2(p[0], p[1]));
    const body = new T.Mesh(new T.LatheGeometry(prof, 40), amber); g.add(body);
    const cap = new T.Mesh(new T.ConeGeometry(0.85, 0.55, 40), green); cap.position.y = 1.1; g.add(cap);
    const rim = new T.Mesh(new T.TorusGeometry(0.7, 0.07, 12, 40), green); rim.rotation.x = Math.PI / 2; rim.position.y = 0.85; g.add(rim);
    const base = new T.Mesh(new T.CylinderGeometry(0.45, 0.5, 0.18, 32), green); base.position.y = -1.05; g.add(base);
    const ring = new T.Mesh(new T.TorusGeometry(0.17, 0.045, 10, 24), green); ring.position.y = 1.5; g.add(ring);
    const dark = new T.MeshStandardMaterial({ color: 0x2a1a05, roughness: 0.6 }), pink = new T.MeshStandardMaterial({ color: 0xff8a7a, roughness: 0.8 });
    const eyes = []; [-0.25, 0.25].forEach(x => { const e = new T.Mesh(new T.SphereGeometry(0.1, 20, 16), dark); e.position.set(x, 0.15, 0.62); e.scale.set(1, 1.35, 0.6); g.add(e); eyes.push(e);
      const h = new T.Mesh(new T.SphereGeometry(0.03, 10, 8), new T.MeshBasicMaterial({ color: 0xffffff })); h.position.set(x + 0.03, 0.2, 0.69); g.add(h);
      const c = new T.Mesh(new T.CircleGeometry(0.09, 20), pink); c.position.set(x * 1.6, -0.1, 0.62); c.lookAt(x * 4, -0.1, 3); g.add(c); });
    const smile = new T.Mesh(new T.TorusGeometry(0.16, 0.03, 8, 24, Math.PI), dark); smile.position.set(0, -0.04, 0.65); smile.rotation.z = Math.PI; g.add(smile);
    const glow = new T.PointLight(0xffb23a, 1.6, 6); glow.position.set(0, 0, 0.2); g.add(glow);
    return { obj: g, eyes, amber, glow, y0: 0 };
  }
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
      const sc = new T.Scene(), cam = new T.PerspectiveCamera(32, w / h, 0.1, 50); cam.position.set(0, 0.1, kind === "gem" ? 5.2 : 6.4);
      sc.add(new T.AmbientLight(0xffffff, 0.75)); const key = new T.DirectionalLight(0xffffff, 1.1); key.position.set(2, 3, 4); sc.add(key);
      const m = kind === "gem" ? gem(T) : lantern(T); sc.add(m.obj); host.appendChild(r.domElement); host.classList.add("on3d");
      let tx = 0, ty = 0, spin = 0; const t0 = performance.now(), mv = e => { const b = host.getBoundingClientRect(); tx = Math.max(-1, Math.min(1, (e.clientX - b.left - b.width / 2) / 220)); ty = Math.max(-1, Math.min(1, (e.clientY - b.top - b.height / 2) / 220)); };
      addEventListener("pointermove", mv, { passive: true }); host.addEventListener("pointerdown", () => { spin = 1; }, { passive: true });
      let raf = 0, visible = true; const io = "IntersectionObserver" in window ? new IntersectionObserver(es => { visible = es[0].isIntersecting; }) : null; io && io.observe(host);
      const loop = now => {
        if (!host.isConnected) { cancelAnimationFrame(raf); removeEventListener("pointermove", mv); io && io.disconnect(); r.dispose(); try { r.forceContextLoss(); } catch {} live--; return; }
        raf = requestAnimationFrame(loop); if (!visible || document.hidden) return;
        const t = (now - t0) / 1000;
        if (kind === "gem") { m.obj.rotation.y = t * 1.4; m.obj.position.y = Math.sin(t * 2) * 0.12; m.obj.rotation.x = 0.2 * Math.sin(t); }
        else { m.obj.position.y = Math.sin(t * 2.2) * 0.1; spin = Math.max(0, spin - 0.016);
          m.obj.rotation.y = Math.sin(t * 0.9) * 0.35 + tx * 0.5 + (spin ? (1 - spin) * Math.PI * 2 : 0); m.obj.rotation.x = ty * 0.2 + (spin ? Math.sin((1 - spin) * Math.PI) * -0.25 : 0);
          m.amber.emissiveIntensity = 0.32 + Math.sin(t * 3) * 0.1; m.glow.intensity = 0.9 + Math.sin(t * 3) * 0.25;
          const bl = (t % 4) > 3.88 ? 0.1 : 1.35; m.eyes.forEach(e => { e.scale.y = bl; }); }
        r.render(sc, cam);
      };
      raf = requestAnimationFrame(loop);
    }).catch(() => { live--; delete host.dataset.h3; });
  }
  /* Cherche dans la page tous les emplacements 3D et les active */
  const scan = root => (root || document).querySelectorAll(".s3d:not([data-h3])").forEach(h => mount(h, h.dataset.k || "lantern"));
  return { scan, mount };
})();
