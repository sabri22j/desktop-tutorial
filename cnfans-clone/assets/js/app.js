(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const app = $('#app');
  const eur = n => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const priceEur = cny => cny * CNY_TO_EUR;

  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };
  const state = { q: '', cat: 'Tous', calcW: 1 };
  const go = h => { if (location.hash === '#' + h || (!h && !location.hash)) route(); else location.hash = h; };
  let cart = store.get('cart', []);
  let orders = store.get('orders', []);
  const saveCart = () => { store.set('cart', cart); $('#cartCount').textContent = cart.reduce((n, i) => n + i.qty, 0); };

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2000);
  }

  function addToCart(item) {
    const found = cart.find(i => i.id === item.id);
    if (found) found.qty++; else cart.push({ ...item, qty: 1 });
    saveCart(); toast('Ajouté au panier');
  }

  function parseLink(text) {
    let u;
    try { u = new URL(text.trim()); } catch { return null; }
    if (!/^https?:$/.test(u.protocol)) return null;
    const h = u.hostname.toLowerCase();
    const platform = h.includes('weidian') ? 'Weidian' : h.includes('1688') ? '1688'
      : h.includes('tmall') ? 'Tmall' : h.includes('taobao') ? 'Taobao' : null;
    if (!platform) return null;
    const pid = u.searchParams.get('id') || u.searchParams.get('itemID') || u.pathname.split('/').filter(Boolean).pop() || 'inconnu';
    return { platform, pid };
  }

  const thumb = p => `<div class="thumb" style="background:${EMOJI_BG[p.id % EMOJI_BG.length]}">${p.emoji}</div>`;

  function card(p) {
    return `<article class="card">
      <a href="#produit-${p.id}">${thumb(p)}</a>
      <div class="card-body">
        <a class="card-title" href="#produit-${p.id}">${esc(p.name)}</a>
        <div class="meta">${esc(p.platform)} · ${p.sales.toLocaleString('fr-FR')} ventes</div>
        <div class="row"><div class="price">${eur(priceEur(p.cny))} <small>¥${p.cny}</small></div>
        <button class="btn small" data-add="${p.id}">+ Panier</button></div>
      </div></article>`;
  }

  function shippingCost(country, method, kg) {
    const t = SHIPPING[country][method];
    return t[0] + Math.max(0, Math.ceil(kg) - 1) * t[1];
  }

  const views = {
    home() {
      return `
      <section class="hero">
        <h1>Achetez en Chine, livré chez vous</h1>
        <p>Collez le lien d’un produit Taobao, Weidian ou 1688 : nous l’achetons, le contrôlons et l’expédions.</p>
        <form id="linkForm"><input id="linkInput" type="text" placeholder="https://item.taobao.com/item.htm?id=…" aria-label="Lien produit"><button class="btn" type="submit">Ajouter</button></form>
      </section>
      <section class="steps">
        <div class="step"><b>1</b><h3>Collez un lien</h3><p>Ou choisissez dans le catalogue.</p></div>
        <div class="step"><b>2</b><h3>Nous achetons</h3><p>Paiement unique en euros.</p></div>
        <div class="step"><b>3</b><h3>Contrôle photos</h3><p>Validez avant l’envoi.</p></div>
        <div class="step"><b>4</b><h3>Livraison</h3><p>Expédition internationale suivie.</p></div>
      </section>
      <h2>Produits populaires</h2>
      <div class="grid">${[...PRODUCTS].sort((a, b) => b.sales - a.sales).slice(0, 8).map(card).join('')}</div>`;
    },

    produits() {
      const { q, cat } = state;
      const list = PRODUCTS.filter(p => (cat === 'Tous' || p.cat === cat) && p.name.toLowerCase().includes(q.toLowerCase()));
      return `<h2>${q ? `Résultats pour « ${esc(q)} »` : 'Catalogue'}</h2>
      <div class="cats">${CATEGORIES.map(c => `<span class="chip ${c === cat ? 'on' : ''}" data-cat="${esc(c)}">${esc(c)}</span>`).join('')}</div>
      ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : '<div class="empty">Aucun produit trouvé.</div>'}`;
    },

    produit(id) {
      const p = PRODUCTS.find(x => x.id === +id);
      if (!p) return '<div class="empty">Produit introuvable.</div>';
      const fee = priceEur(p.cny) * SERVICE_FEE;
      return `<section class="product">${thumb(p)}
        <div>
          <span class="tag">${esc(p.platform)}</span>
          <h1>${esc(p.name)}</h1>
          <div class="price">${eur(priceEur(p.cny))} <small>¥${p.cny}</small></div>
          <p class="meta">Poids estimé : ${p.weight} kg · ${p.sales.toLocaleString('fr-FR')} ventes · Catégorie : ${esc(p.cat)}</p>
          <p class="meta">Frais de service (3 %) : ${eur(fee)}</p>
          <button class="btn" data-add="${p.id}">Ajouter au panier</button>
          <a class="btn alt" href="#calculateur" data-w="${p.weight}">Estimer le port</a>
        </div></section>`;
    },

    panier() {
      if (!cart.length) return '<div class="empty"><h2>Votre panier est vide</h2><a class="btn" href="#produits">Parcourir le catalogue</a></div>';
      const sub = cart.reduce((s, i) => s + priceEur(i.cny) * i.qty, 0);
      const fee = sub * SERVICE_FEE;
      return `<h2>Panier</h2>
      <table><thead><tr><th>Article</th><th>Prix</th><th>Qté</th><th></th></tr></thead><tbody>
      ${cart.map(i => `<tr><td>${esc(i.emoji)} ${esc(i.name)}<div class="meta">${esc(i.platform)}</div></td>
        <td>${eur(priceEur(i.cny))}</td>
        <td><span class="qty"><button data-dec="${esc(i.id)}">−</button>${i.qty}<button data-inc="${esc(i.id)}">+</button></span></td>
        <td><button class="btn alt small" data-del="${esc(i.id)}">Retirer</button></td></tr>`).join('')}
      </tbody></table>
      <div class="panel" style="margin-top:16px">
        <div class="row"><span>Sous-total</span><b>${eur(sub)}</b></div>
        <div class="row"><span>Frais de service (3 %)</span><b>${eur(fee)}</b></div>
        <hr><div class="row"><span>Total (hors port)</span><span class="total">${eur(sub + fee)}</span></div>
        <p class="meta">Le port international est calculé à l’expédition depuis votre entrepôt.</p>
        <button class="btn" id="checkout">Passer commande (démo)</button>
      </div>`;
    },

    calculateur() {
      const w = state.calcW;
      return `<h2>Calculateur de frais de port</h2>
      <div class="two"><div class="panel">
        <label for="cCountry">Pays</label>
        <select id="cCountry">${Object.keys(SHIPPING).map(c => `<option>${esc(c)}</option>`).join('')}</select>
        <label for="cWeight">Poids du colis (kg)</label>
        <input id="cWeight" type="number" min="0.1" step="0.1" value="${w}">
      </div><div class="panel" id="cResult"></div></div>`;
    },

    compte() {
      const user = store.get('user', null);
      if (!user) return `<h2>Mon compte</h2><div class="panel" style="max-width:420px">
        <form id="loginForm">
          <label for="uName">Nom</label><input id="uName" type="text" required>
          <label for="uMail">E-mail</label><input id="uMail" type="email" required>
          <p class="meta">Démo : les données restent dans votre navigateur.</p>
          <button class="btn" type="submit">Créer mon compte</button>
        </form></div>`;
      return `<h2>Bonjour ${esc(user.name)}</h2>
      <div class="two">
        <div class="panel"><h3>Mon entrepôt</h3><p class="meta">Adresse (démo) : ${esc(user.name)} – ID ${esc(user.id)}<br>Entrepôt Guangzhou, Baiyun District</p></div>
        <div class="panel"><h3>Mes informations</h3><p>${esc(user.email)}</p><button class="btn alt small" id="logout">Se déconnecter</button></div>
      </div>
      <h2>Mes commandes</h2>
      ${orders.length ? `<table><thead><tr><th>N°</th><th>Date</th><th>Articles</th><th>Total</th><th>Statut</th></tr></thead><tbody>
      ${orders.map(o => `<tr><td>${esc(o.id)}</td><td>${esc(o.date)}</td><td>${o.count}</td><td>${eur(o.total)}</td><td><span class="tag wait">${esc(o.status)}</span></td></tr>`).join('')}</tbody></table>` : '<div class="empty">Aucune commande pour le moment.</div>'}`;
    },

    aide() {
      return `<h2>Aide</h2><div class="faq">${FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
    }
  };

  function renderCalc() {
    const c = $('#cCountry'), w = $('#cWeight'), out = $('#cResult');
    if (!c) return;
    const upd = () => {
      const kg = Math.max(0.1, parseFloat(w.value) || 0.1);
      out.innerHTML = '<h3>Options</h3>' + Object.entries(SHIPPING[c.value]).map(([m, t]) =>
        `<div class="row" style="padding:8px 0"><div><b>${esc(m)}</b><div class="meta">${esc(t[2])}</div></div><span class="total">${eur(shippingCost(c.value, m, kg))}</span></div>`).join('');
    };
    c.onchange = upd; w.oninput = upd; upd();
  }

  function route() {
    const [name = '', arg] = location.hash.slice(1).split('-');
    let html;
    if (name === 'produit') html = views.produit(arg);
    else if (views[name]) html = views[name]();
    else html = views.home();
    app.innerHTML = html;
    window.scrollTo(0, 0);
    renderCalc();
  }

  document.addEventListener('click', e => {
    const t = e.target;
    if (t.dataset.add) addToCart(PRODUCTS.find(p => p.id === +t.dataset.add));
    if (t.dataset.cat) { state.cat = t.dataset.cat; route(); }
    if (t.dataset.w) state.calcW = parseFloat(t.dataset.w) || 1;
    const idOf = v => cart.find(i => String(i.id) === v);
    if (t.dataset.inc) { idOf(t.dataset.inc).qty++; saveCart(); route(); }
    if (t.dataset.dec) { const i = idOf(t.dataset.dec); i.qty = Math.max(1, i.qty - 1); saveCart(); route(); }
    if (t.dataset.del) { cart = cart.filter(i => String(i.id) !== t.dataset.del); saveCart(); route(); }
    if (t.id === 'checkout') {
      const sub = cart.reduce((s, i) => s + priceEur(i.cny) * i.qty, 0);
      orders.unshift({ id: 'CMD' + Date.now().toString().slice(-6), date: new Date().toLocaleDateString('fr-FR'), count: cart.reduce((n, i) => n + i.qty, 0), total: sub * (1 + SERVICE_FEE), status: 'En attente de paiement' });
      store.set('orders', orders); cart = []; saveCart(); toast('Commande créée (démo)'); go('compte');
    }
    if (t.id === 'logout') { localStorage.removeItem('user'); route(); }
  });

  document.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.id === 'searchForm') {
      const v = $('#searchInput').value.trim();
      const link = parseLink(v);
      if (link) return addLink(link);
      state.q = v; state.cat = 'Tous'; go('produits');
    }
    if (e.target.id === 'linkForm') {
      const link = parseLink($('#linkInput').value);
      if (!link) return toast('Lien non reconnu (Taobao, Weidian, 1688, Tmall)');
      addLink(link);
    }
    if (e.target.id === 'loginForm') {
      store.set('user', { name: $('#uName').value.trim(), email: $('#uMail').value.trim(), id: 'U' + Math.floor(100000 + Math.random() * 900000) });
      route();
    }
  });

  function addLink({ platform, pid }) {
    addToCart({ id: `lien-${platform}-${pid}`, name: `Article ${platform} #${pid} (prix à confirmer)`, cny: 100, weight: 0.5, platform, emoji: '🔗' });
    go('panier');
  }

  window.addEventListener('hashchange', route);
  saveCart();
  route();
})();
