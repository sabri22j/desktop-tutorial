(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const app = $('#app');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const priceEur = cny => cny * CNY_TO_EUR;

  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  let lang = store.get('lang', 'en');
  if (!LANGS[lang]) lang = 'en';
  const has = k => k in I18N[lang] || k in I18N.en;
  const t = (k, p = {}) => (I18N[lang][k] ?? I18N.en[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => p[n] ?? '');
  const eur = n => n.toLocaleString(LOCALES[lang], { style: 'currency', currency: 'EUR' });
  const num = n => n.toLocaleString(LOCALES[lang]);

  const img = n => (typeof ASSETS !== 'undefined' && ASSETS[n]) || 'assets/images/' + n;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) document.querySelector('.logo-vid video')?.pause();
  { const th = store.get('theme', null); if (th) document.documentElement.dataset.theme = th; }

  const state = { q: '', cat: 'all', calcW: 1 };
  const go = h => { if (location.hash === '#' + h || (!h && !location.hash)) route(); else location.hash = h; };
  let sbUser = null;
  let cart = store.get('cart', []);
  let orders = store.get('orders', []);
  const saveCart = () => {
    store.set('cart', cart);
    const el = $('#cartCount'), n = cart.reduce((n, i) => n + i.qty, 0);
    if (el.textContent !== String(n)) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    el.textContent = n; el.hidden = n === 0;
  };
  const itemName = i => i.title ? i.title : typeof i.id === 'number' ? t('prod.' + i.id) : i.pid ? t('item.imported', { id: i.pid }) : (i.name || '');
  const prodName = p => t('prod.' + p.id);

  const MOODS = { face: 'buddy-face.png', happy: 'buddy-happy.png', surprised: 'buddy-surprised.png', sad: 'buddy-sad.png' };
  const buddy = {
    el: $('#buddy'), img: $('#buddyImg'), bubble: $('#buddyBubble'), t1: 0,
    say(msg, mood = 'face', ms = 3200) {
      this.img.src = img(MOODS[mood]);
      this.bubble.textContent = msg; this.bubble.classList.add('show');
      this.el.classList.remove('jump'); void this.el.offsetWidth; if (mood === 'happy') this.el.classList.add('jump');
      clearTimeout(this.t1);
      this.t1 = setTimeout(() => { this.bubble.classList.remove('show'); this.img.src = img(MOODS.face); }, ms);
    }
  };

  function flyToCart(from, emoji) {
    const target = $('a[href="#cart"]');
    if (reduceMotion || !from || !target || !from.animate) return;
    const a = from.getBoundingClientRect(), b = target.getBoundingClientRect();
    const f = document.createElement('div');
    f.className = 'fly'; f.textContent = emoji;
    f.style.left = a.left + a.width / 2 - 16 + 'px'; f.style.top = a.top + a.height / 2 - 16 + 'px';
    document.body.appendChild(f);
    const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
    f.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${dx * .5}px,${dy * .5 - 60}px) scale(1.4)`, opacity: 1, offset: .5 }, { transform: `translate(${dx}px,${dy}px) scale(.3)`, opacity: .2 }], { duration: 750, easing: 'ease-in-out' }).onfinish = () => f.remove();
  }

  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 2000);
  }

  function addToCart(item, from) {
    const found = cart.find(i => i.id === item.id);
    if (found) found.qty++; else cart.push({ ...item, qty: item.qty || 1 });
    saveCart(); toast(t('toast.added'));
    flyToCart(from, item.emoji);
    buddy.say(t('buddy.added'), 'happy');
  }

  const LINK_HOSTS = ['taobao.com', 'tmall.com', 'tmall.hk', '1688.com', 'weidian.com', 'koudai.com', 'goofish.com', 'xianyu.com', 'tb.cn'];
  function parseLink(text) {
    let u;
    try { u = new URL(text.trim()); } catch { return null; }
    if (!/^https?:$/.test(u.protocol)) return null;
    const h = u.hostname.toLowerCase();
    if (!LINK_HOSTS.some(d => h === d || h.endsWith('.' + d))) return null;
    const pid = u.searchParams.get('id') || u.searchParams.get('itemID') || u.searchParams.get('itemId') || u.pathname.split('/').filter(Boolean).pop() || '';
    return { url: u.href, pid };
  }

  const mascot = name => `<img class="mascot" src="${img(name + '.jpg')}" alt="${esc(t('alt.mascot'))}">`;
  const HOW_IMG = ['step-1.webp', 'step-2.webp', 'step-3.webp'];
  const howHtml = n => `<img class="how-img" src="${img(HOW_IMG[n])}" alt="${esc(t('alt.mascot'))}"><div><h3>${t(`how.${n + 1}t`)}</h3><p>${t(`how.${n + 1}d`)}</p></div>`;
  const thumb = p => `<div class="thumb" style="background:${EMOJI_BG[p.id % EMOJI_BG.length]}">${p.emoji}</div>`;

  function card(p, i = 0) {
    return `<article class="card" style="--i:${i}">
      <a href="#product-${p.id}">${thumb(p)}</a>
      <div class="card-body">
        <a class="card-title" href="#product-${p.id}">${esc(prodName(p))}</a>
        <div class="meta">${t('sales', { n: num(p.sales) })}</div>
        <div class="row"><div class="price">${eur(priceEur(p.cny))} <small>¥${p.cny}</small></div>
        <button class="btn small" data-add="${p.id}">${t('addMini')}</button></div>
      </div></article>`;
  }

  function shippingCost(country, method, kg) {
    const r = SHIPPING[country][method];
    return r[0] + Math.max(0, Math.ceil(kg) - 1) * r[1];
  }

  const views = {
    home() {
      return `
      <section class="hero">
        <h1>${t('hero.title')}</h1>
        <p>${t('hero.sub')}</p>
      </section>
      <section class="panel why">
        <h2>${t('why.title')}</h2>
        <ul class="checks">${[1, 2, 3, 4, 5, 6].map(n => `<li>${t('why.' + n)}</li>`).join('')}</ul>
      </section>
      <section class="how">
        <div class="panel">
          <h2>${t('how.title')}</h2>
          <div class="how-body">
            <div class="tabs" role="tablist">${[0, 1, 2].map(i => `<button class="tab ${i ? '' : 'on'}" role="tab" data-tab="${i}">${t('how.step', { n: i + 1 })}</button>`).join('')}</div>
            <div id="howBody">${howHtml(0)}</div>
          </div>
        </div>
      </section>
      <h2>${t('home.popular')}</h2>
      <div class="grid">${[...PRODUCTS].sort((a, b) => b.sales - a.sales).slice(0, 8).map(card).join('')}</div>`;
    },

    products() {
      const { q, cat } = state;
      const list = PRODUCTS.filter(p => (cat === 'all' || p.cat === cat) && prodName(p).toLowerCase().includes(q.toLowerCase()));
      return `<h2>${q ? t('res.title', { q: esc(q) }) : t('catalog')}</h2>
      <div class="cats">${CATEGORIES.map(c => `<span class="chip ${c === cat ? 'on' : ''}" data-cat="${c}">${t('cat.' + c)}</span>`).join('')}</div>
      ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : `<div class="empty">${mascot('fox-surprised')}<p>${t('none')}</p></div>`}`;
    },

    product(id) {
      const p = PRODUCTS.find(x => x.id === +id);
      if (!p) return `<div class="empty">${mascot('fox-surprised')}<p>${t('notfound')}</p></div>`;
      const fee = priceEur(p.cny) * SERVICE_FEE;
      return `<section class="product">${thumb(p)}
        <div>
          <span class="tag">${t('cat.' + p.cat)}</span>
          <h1>${esc(prodName(p))}</h1>
          <div class="price">${eur(priceEur(p.cny))} <small>¥${p.cny}</small></div>
          <p class="meta">${t('weight', { w: p.weight })} · ${t('sales', { n: num(p.sales) })} · ${t('categoryLine', { c: t('cat.' + p.cat) })}</p>
          <p class="meta">${t('fee', { fee: eur(fee) })}</p>
          <button class="btn" data-add="${p.id}">${t('addCart')}</button>
          <a class="btn alt" href="#shipping" data-w="${p.weight}">${t('estimate')}</a>
        </div></section>`;
    },

    cart() {
      if (!cart.length) return `<div class="empty">${mascot('fox-sad')}<h2>${t('cart.empty')}</h2><a class="btn" href="#products">${t('cart.browse')}</a></div>`;
      const sub = cart.reduce((s, i) => s + priceEur(i.cny) * i.qty, 0);
      const fee = sub * SERVICE_FEE;
      return `<h2>${t('cart.title')}</h2>
      <table><thead><tr><th>${t('cart.item')}</th><th>${t('cart.price')}</th><th>${t('cart.qty')}</th><th></th></tr></thead><tbody>
      ${cart.map(i => `<tr><td>${esc(i.emoji)} ${esc(itemName(i))}${i.opts ? `<div class="meta">${esc(i.opts)}</div>` : ''}</td>
        <td>${eur(priceEur(i.cny))}</td>
        <td><span class="qty"><button data-dec="${esc(i.id)}">−</button>${i.qty}<button data-inc="${esc(i.id)}">+</button></span></td>
        <td><button class="btn alt small" data-del="${esc(i.id)}">${t('cart.remove')}</button></td></tr>`).join('')}
      </tbody></table>
      <div class="panel" style="margin-top:16px">
        <div class="row"><span>${t('cart.sub')}</span><b>${eur(sub)}</b></div>
        <div class="row"><span>${t('cart.fee')}</span><b>${eur(fee)}</b></div>
        <hr><div class="row"><span>${t('cart.total')}</span><span class="total">${eur(sub + fee)}</span></div>
        <p class="meta">${t('cart.note')}</p>
        <button class="btn" id="checkout">${t('cart.checkout')}</button>
      </div>`;
    },

    shipping() {
      return `<h2>${t('calc.title')}</h2>
      <div class="two"><div class="panel">
        <label for="cCountry">${t('calc.country')}</label>
        <select id="cCountry">${Object.keys(SHIPPING).map(c => `<option value="${c}">${t('country.' + c)}</option>`).join('')}</select>
        <label for="cWeight">${t('calc.weight')}</label>
        <input id="cWeight" type="number" min="0.1" step="0.1" value="${state.calcW}">
      </div><div class="panel" id="cResult"></div></div>`;
    },

    account() {
      if (!sbUser) return `<h2>${t('acc.title')}</h2><div class="panel" style="max-width:420px">
        <button class="btn" id="googleSignIn" style="display:flex;align-items:center;gap:10px;justify-content:center">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.8 2.5 30.2 0 24 0 14.7 0 6.9 5.5 3.3 13.5l7.8 6C13 13.6 18.1 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.6-4.9 7.4l7.6 5.9c4.5-4.1 7.1-10.2 7.1-17.6z"/><path fill="#FBBC05" d="M11.1 28.5c-.6-1.6-.9-3.2-.9-5s.3-3.4.9-5l-7.8-6C1.2 15.6 0 19.7 0 24s1.2 8.4 3.3 11.9l7.8-6z"/><path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.6-5.9c-2 1.4-4.6 2.2-7.6 2.2-5.9 0-10.9-4-12.7-9.3l-7.8 6C6.9 42.5 14.7 48 24 48z"/></svg>
          ${t('acc.google')}
        </button></div>`;
      const name = sbUser.user_metadata?.full_name || sbUser.email;
      return `<h2>${t('acc.hello', { name: esc(name) })}</h2>
      <div class="two">
        <div class="panel"><h3>${t('acc.info')}</h3><p>${esc(sbUser.email)}</p><button class="btn alt small" id="logout">${t('acc.logout')}</button></div>
      </div>
      <h2>${t('acc.orders')}</h2>
      ${orders.length ? `<table><thead><tr><th>${t('acc.no')}</th><th>${t('acc.date')}</th><th>${t('acc.items')}</th><th>${t('acc.total')}</th><th>${t('acc.status')}</th></tr></thead><tbody>
      ${orders.map(o => `<tr><td>${esc(o.id)}</td><td>${esc(o.ts ? new Date(o.ts).toLocaleDateString(LOCALES[lang]) : o.date)}</td><td>${o.count}</td><td>${eur(o.total)}</td><td><span class="tag wait">${esc(has('status.' + o.status) ? t('status.' + o.status) : o.status)}</span></td></tr>`).join('')}</tbody></table>` : `<div class="empty">${mascot('fox-look')}<p>${t('acc.none')}</p></div>`}`;
    },

    add() {
      const L = state.pending;
      if (!L) return `<div class="empty">${mascot('fox-look')}<p>${t('add.empty')}</p></div>`;
      return `<h2>${t('add.title')}</h2>
      <div class="panel" style="max-width:560px">
        <img id="addPreview" hidden style="width:100%;max-height:260px;object-fit:contain;border-radius:12px;margin-bottom:12px">
        <form id="addForm">
          <label for="aLink">${t('add.link')}</label><input id="aLink" type="text" value="${esc(L.url)}" readonly>
          <label for="aName">${t('add.name')}</label><input id="aName" type="text" required maxlength="140" placeholder="${esc(t('add.name.ph'))}">
          <div class="row2">
            <div><label for="aPrice">${t('add.price')}</label><input id="aPrice" type="number" min="0.01" step="0.01" required></div>
            <div><label for="aQty">${t('add.qty')}</label><input id="aQty" type="number" min="1" max="999" step="1" value="1" required></div>
          </div>
          <label for="aOpts">${t('add.opts')}</label><input id="aOpts" type="text" maxlength="140" placeholder="${esc(t('add.opts.ph'))}">
          <p class="meta" id="addEst">${t('add.est', { eur: eur(0) })}</p>
          <p class="meta">${t('add.note')}</p>
          <button class="btn" type="submit">${t('add.submit')}</button>
        </form></div>`;
    },

    page(slug) {
      if (!PAGES.includes(slug)) return views.home();
      return `<article class="doc"><h2>${t(`page.${slug}.t`)}</h2><p>${t(`page.${slug}.1`)}</p><p>${t(`page.${slug}.2`)}</p><a class="btn alt" href="#help">${t('nav.help')}</a></article>`;
    },

    help() {
      return `<h2>${t('help.title')}</h2><div class="faq">${[1, 2, 3, 4, 5].map(n => `<details><summary>${t('faq.q' + n)}</summary><p>${t('faq.a' + n)}</p></details>`).join('')}</div>`;
    }
  };

  function renderCalc() {
    const c = $('#cCountry'), w = $('#cWeight'), out = $('#cResult');
    if (!c) return;
    const upd = () => {
      const kg = Math.max(0.1, parseFloat(w.value) || 0.1);
      out.innerHTML = `<h3>${t('calc.options')}</h3>` + Object.entries(SHIPPING[c.value]).map(([m, r]) =>
        `<div class="row" style="padding:8px 0"><div><b>${t('calc.' + m)}</b><div class="meta">${t('calc.days', { a: r[2], b: r[3] })}</div></div><span class="total">${eur(shippingCost(c.value, m, kg))}</span></div>`).join('');
    };
    c.onchange = upd; w.oninput = upd; upd();
  }

  const FOOTER = [
    ['f.service', [['f.service.1', 'page-contact']]],
    ['f.guide', [['f.guide.1', 'page-guide'], ['f.guide.2', 'page-fees'], ['f.guide.3', 'page-guide'], ['f.guide.4', 'page-returns']]],
    ['f.pay', [['f.pay.1', 'page-payment'], ['f.pay.2', 'page-payment'], ['f.pay.3', 'page-payment']]],
    ['f.deliv', [['f.deliv.1', 'page-delivery'], ['f.deliv.2', 'page-delivery'], ['f.deliv.3', 'shipping'], ['f.deliv.4', 'page-delivery']]],
    ['f.wh', [['f.wh.1', 'page-delivery'], ['f.wh.2', 'page-returns'], ['f.wh.3', 'page-storage'], ['f.wh.4', 'page-returns']]]
  ];
  const LEGAL = ['page-terms', 'page-privacy', 'page-about'];

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = 'FoxBuy – ' + t('hero.title');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
    $('#catnav').innerHTML = CATEGORIES.map(c => `<a href="#products" data-gocat="${c}">${c === 'all' ? '☰ ' : ''}${t('cat.' + c)}</a>`).join('');
    $('#footerCols').innerHTML = FOOTER.map(([h, links]) => `<div><h4>${t(h)}</h4>${links.map(([k, to]) => `<a href="#${to}">${t(k)}</a>`).join('')}</div>`).join('');
    $('#legal').innerHTML = LEGAL.map((to, i) => `<a href="#${to}">${t('legal.' + (i + 1))}</a>`).join('');
    $('#langMenu').innerHTML = Object.entries(LANGS).map(([k, name]) => `<li><button type="button" role="menuitem" data-lang="${k}" class="${k === lang ? 'on' : ''}" lang="${k}">${name}</button></li>`).join('');
  }

  function setLang(l) {
    if (!LANGS[l]) return;
    lang = l; store.set('lang', l);
    applyStatic(); route();
  }

  function toggleTheme() {
    const root = document.documentElement;
    const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next; store.set('theme', next);
  }

  function decorate(name) {
    const displayName = sbUser ? (sbUser.user_metadata?.full_name || sbUser.email) : null;
    $('#accountBtn').textContent = displayName || t('nav.signup');
    const hero = $('.hero');
    if (hero && !reduceMotion) {
      for (let i = 0; i < 12; i++) {
        const e = document.createElement('span'); e.className = 'ember';
        e.style.cssText = `left:${Math.random() * 100}%;--d:${(5 + Math.random() * 6).toFixed(1)}s;--w:${(Math.random() * 8).toFixed(1)}s;--s:${(4 + Math.random() * 6).toFixed(0)}px`;
        hero.appendChild(e);
      }
    }
    if (name === '' && !decorate.welcomed) { decorate.welcomed = true; setTimeout(() => buddy.say(t('buddy.welcome'), 'happy', 4500), 700); }
    else if (name === 'cart' && !cart.length) buddy.say(t('buddy.empty'), 'sad');
    else if (name === 'products' && !$('.card')) buddy.say(t('buddy.none'), 'surprised');
  }

  function route() {
    const [name = '', arg] = location.hash.slice(1).split('-');
    let html;
    if (name === 'product') html = views.product(arg);
    else if (name === 'page') html = views.page(arg);
    else if (views[name]) html = views[name]();
    else html = views.home();
    app.innerHTML = html;
    window.scrollTo(0, 0);
    renderCalc();
    decorate(name);
  }

  document.addEventListener('click', e => {
    const el = e.target;
    const langMenu = $('#langMenu'), langBtn = $('#langBtn');
    if (el.closest('#langBtn')) { langMenu.hidden = !langMenu.hidden; langBtn.setAttribute('aria-expanded', String(!langMenu.hidden)); }
    else if (!langMenu.hidden) { langMenu.hidden = true; langBtn.setAttribute('aria-expanded', 'false'); }
    const lb = el.closest('[data-lang]');
    if (lb) setLang(lb.dataset.lang);
    if (el.dataset.add) { const p = PRODUCTS.find(x => x.id === +el.dataset.add); addToCart({ id: p.id, cny: p.cny, weight: p.weight, emoji: p.emoji }, el); }
    if (el.closest('.searchbar') && !el.closest('button')) $('#searchInput').focus();
    if (el.closest('#themeBtn')) toggleTheme();
    const gc = el.closest('[data-gocat]');
    if (gc) { e.preventDefault(); state.cat = gc.dataset.gocat; state.q = ''; go('products'); }
    if (el.dataset.tab) {
      document.querySelectorAll('.tab').forEach(b => b.classList.toggle('on', b === el));
      $('#howBody').innerHTML = howHtml(+el.dataset.tab);
    }
    if (el.closest('#buddy')) buddy.say(t('tip.' + (1 + Math.floor(Math.random() * 4))), 'happy');
    if (el.dataset.cat) { state.cat = el.dataset.cat; route(); }
    if (el.dataset.w) state.calcW = parseFloat(el.dataset.w) || 1;
    const idOf = v => cart.find(i => String(i.id) === v);
    if (el.dataset.inc) { idOf(el.dataset.inc).qty++; saveCart(); route(); }
    if (el.dataset.dec) { const i = idOf(el.dataset.dec); i.qty = Math.max(1, i.qty - 1); saveCart(); route(); }
    if (el.dataset.del) { cart = cart.filter(i => String(i.id) !== el.dataset.del); saveCart(); route(); }
    if (el.id === 'checkout') {
      const sub = cart.reduce((s, i) => s + priceEur(i.cny) * i.qty, 0);
      orders.unshift({ id: 'ORD' + Date.now().toString().slice(-6), ts: Date.now(), count: cart.reduce((n, i) => n + i.qty, 0), total: sub * (1 + SERVICE_FEE), status: 'pending' });
      store.set('orders', orders); cart = []; saveCart(); toast(t('toast.order')); buddy.say(t('buddy.order'), 'happy', 4000); go('account');
    }
    if (el.id === 'googleSignIn') sbAuth.signInWithGoogle();
    if (el.id === 'logout') sbAuth.signOut().then(() => { sbUser = null; route(); });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { const m = $('#langMenu'); if (!m.hidden) { m.hidden = true; $('#langBtn').setAttribute('aria-expanded', 'false'); $('#langBtn').focus(); } }
  });

  document.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.id === 'searchForm') {
      const v = $('#searchInput').value.trim();
      const link = parseLink(v);
      if (link) {
        state.pending = link;
        $('#searchInput').value = '';
        go('add');
        fetchProductInfo(link);
        return;
      }
      if (/^https?:\/\//i.test(v)) { toast(t('link.unsupported')); buddy.say(t('link.unsupported'), 'surprised', 4500); return; }
      state.q = v; state.cat = 'all'; go('products');
    }
    if (e.target.id === 'addForm') {
      const L = state.pending, cny = parseFloat($('#aPrice').value), qty = Math.max(1, parseInt($('#aQty').value, 10) || 1);
      if (!L || !(cny > 0)) return;
      addToCart({ id: 'link-' + Date.now(), pid: L.pid, url: L.url, title: $('#aName').value.trim(), opts: $('#aOpts').value.trim(), cny, qty, weight: 0.5, emoji: '🔗' });
      state.pending = null; go('cart');
    }
  });

  async function fetchProductInfo(link) {
    const aName = $('#aName'), aPrice = $('#aPrice'), aImg = $('#addPreview');
    if (!aName) return;
    if (aName) aName.placeholder = t('add.loading') || 'Loading…';
    try {
      const res = await fetch('https://mbewxqwdjyjqapxmcsxg.supabase.co/functions/v1/get-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': 'sb_publishable_EVf69i7P2I3JWpmeilR8Vg_l2cvdK7G' },
        body: JSON.stringify({ url: link.url })
      });
      const data = await res.json();
      if (data.name && $('#aName')) $('#aName').value = data.name;
      if (data.price && $('#aPrice')) { $('#aPrice').value = data.price; $('#aPrice').dispatchEvent(new Event('input')); }
      if (data.image && $('#addPreview')) { $('#addPreview').src = data.image; $('#addPreview').hidden = false; }
    } catch {}
    if ($('#aName')) $('#aName').placeholder = t('add.name.ph') || '';
  }

  document.addEventListener('input', e => {
    if (!e.target.closest('#addForm')) return;
    const cny = parseFloat($('#aPrice').value) || 0, qty = Math.max(1, parseInt($('#aQty').value, 10) || 1);
    $('#addEst').textContent = t('add.est', { eur: eur(priceEur(cny) * qty * (1 + SERVICE_FEE)) });
  });

  window.addEventListener('hashchange', route);
  applyStatic();
  saveCart();
  if (typeof sbAuth !== 'undefined') {
    sbAuth.onAuthChange(u => { sbUser = u; route(); });
    sbAuth.getUser().then(u => { sbUser = u; route(); });
  } else {
    route();
  }
})();
