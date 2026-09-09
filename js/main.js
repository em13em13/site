(function(){
  initLang();
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // ===== CART =====
  let cart = JSON.parse(localStorage.getItem('kb.cart') || '[]');
  function saveCart() { localStorage.setItem('kb.cart', JSON.stringify(cart)); }
  function addToCart(id) {
    const exists = cart.find(i => i.id === id);
    if (exists) { exists.qty++; }
    else { cart.push({ id, qty: 1 }); }
    saveCart();
    toast(t('added'));
    updateCartBadge();
  }
  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartBadge();
  }
  function updateQty(id, d) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += d;
    if (item.qty < 1) item.qty = 1;
    saveCart();
  }
  function cartTotal() {
    return cart.reduce((s, i) => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  }
  function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
  function updateCartBadge() {
    const b = $('.cart-badge');
    if (b) { const c = cartCount(); b.textContent = c; b.style.display = c ? 'grid' : 'none'; }
  }

  // ===== FAVORITES =====
  let favs = JSON.parse(localStorage.getItem('kb.favs') || '[]');
  function toggleFav(id) {
    const idx = favs.indexOf(id);
    if (idx > -1) favs.splice(idx, 1);
    else favs.push(id);
    localStorage.setItem('kb.favs', JSON.stringify(favs));
    const btn = $(`[data-fav="${id}"]`);
    if (btn) btn.classList.toggle('on', favs.includes(id));
  }

  // ===== WISHLIST BADGE =====
  function updateFavBadge() {
    const b = $('.fav-badge');
    if (b) { b.textContent = favs.length; b.style.display = favs.length ? 'grid' : 'none'; }
  }

  // ===== TOAST =====
  function toast(msg, err) {
    const zone = document.querySelector('.toast-zone') || (() => { const d = document.createElement('div'); d.className='toast-zone'; document.body.appendChild(d); return d; })();
    const el = document.createElement('div');
    el.className = 'toast' + (err ? ' err' : '');
    el.innerHTML = `<div class="t-icon">${err ? '✕' : '✓'}</div><span>${msg}</span>`;
    zone.appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, 2500);
  }

  // ===== AUTH MODAL =====
  function showLogin() { const m = $('#authModal'); if (m) { m.classList.add('show'); document.body.classList.add('lock'); } }
  function closeLogin() { const m = $('#authModal'); if (m) { m.classList.remove('show'); document.body.classList.remove('lock'); } }

  // ===== HERO SLIDER =====
  let heroIdx = 0;
  function slideHero(dir) {
    const slides = $$('.hero-slide');
    if (!slides.length) return;
    slides[heroIdx].classList.remove('active');
    heroIdx = (heroIdx + dir + slides.length) % slides.length;
    slides[heroIdx].classList.add('active');
    $$('.hero-dots button').forEach((d, i) => d.classList.toggle('active', i === heroIdx));
  }

  // ===== SCROLL ROW =====
  function scrollRow(btn, dir) {
    const row = btn.closest('.product-row, .videos-section')?.querySelector('.row-window');
    if (row) row.scrollBy({ left: dir * 300, behavior: 'smooth' });
  }

  // ===== BACK TOP =====
  function initBackTop() {
    const btn = $('.back-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('show', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ===== RENDER PRODUCTS =====
  function renderProducts(container, list) {
    const el = document.querySelector(container);
    if (!el) return;
    el.innerHTML = list.map(p => `
      <div class="prod-card">
        <div class="prod-img" style="background-image:url('${p.img}');background-size:cover;background-position:center;">
          ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}
        </div>
        <div class="prod-body">
          <div class="prod-cat">${CATS.find(c => c.id === p.cat)?.fa || ''}</div>
          <div class="prod-name">${L(p.name)}</div>
          <div class="prod-price">
            <span class="current">${money(p.price)}</span>
            ${p.old ? `<span class="old">${money(p.old)}</span>` : ''}
          </div>
          <button class="prod-add" onclick="KBA.addCart('${p.id}')">${t('addCart')}</button>
        </div>
      </div>
    `).join('');
  }

  // ===== RENDER VIDEOS =====
  function renderVideos(container, list) {
    const el = document.querySelector(container);
    if (!el) return;
    el.innerHTML = list.map(v => `
      <div class="video-card">
        <div class="vid-thumb" style="background-image:url('${v.img}');background-size:cover;background-position:center;">
          <div class="play">▶</div>
          <span class="dur">${v.dur}</span>
        </div>
        <div class="vid-body">
          <span class="vid-level ${v.level}">${v.cat}</span>
          <div class="vid-title">${L(v.title)}</div>
          <div class="vid-meta"><span>👁 ${v.views}</span><span>⏱ ${v.dur}</span></div>
        </div>
      </div>
    `).join('');
  }

  // ===== RENDER EVENTS =====
  function renderEvents(container, list) {
    const el = document.querySelector(container);
    if (!el) return;
    el.innerHTML = list.map(e => `
      <div class="event-card" style="background-image:url('${e.img}');background-size:cover;background-position:center;">
        <div class="event-overlay"></div>
        <div class="event-date"><div class="day">${e.day}</div><div class="month">${e.month}</div></div>
        <div class="event-info">
          <h3>${L(e.title)}</h3>
          <p>${L(e.desc)}</p>
        </div>
        <span class="event-tag ${e.type}">${e.type === 'exam' ? 'آزمون' : e.type === 'competition' ? 'مسابقه' : e.type === 'camp' ? 'کمپ' : 'سمینار'}</span>
        ${e.reg ? `<button class="event-reg" onclick="KBA.toast('${t('registered')}')">${t('register')}</button>` : ''}
      </div>
    `).join('');
  }

  // ===== RENDER LEADERBOARD =====
  function renderLeaderboard(container) {
    const el = document.querySelector(container);
    if (!el) return;
    el.innerHTML = LEADERBOARD.map((l, i) => `
      <div class="event-card lb-card">
        <div class="lb-avatar"><img src="${l.avatar}" alt="${l.name}"></div>
        <div class="event-info">
          <h3>${l.name}</h3>
          <p>${l.rank} — ${num(l.xp)} XP</p>
        </div>
        <div class="lb-rank">#${i+1}</div>
      </div>
    `).join('');
  }

  // ===== RENDER TEAM =====
  function renderTeam(container) {
    const el = document.querySelector(container);
    if (!el || typeof TEAM === 'undefined') return;
    el.innerHTML = TEAM.map(m => `
      <div class="team-card">
        <div class="team-avatar"><img src="${m.img}" alt="${m.name}"></div>
        <h3>${m.name}</h3>
        <div class="role">${m.role}</div>
        <div class="bio">${m.bio}</div>
      </div>
    `).join('');
  }

  // ===== RENDER DASHBOARD =====
  function renderDashboard() {
    const dashMain = $('.dash-main');
    if (!dashMain) return;
    const student = { name: 'علی محمدی', rank: ' Samurai', rankFa: 'سامورایی', xp: 1250, nextXp: 2000, sessions: 8, insurance: true };
    const pct = (student.xp / student.nextXp * 100).toFixed(0);
    dashMain.innerHTML = `
      <div class="dash-top">
        <div class="dash-stat"><div class="ic" style="background-image:url('images/u-1521572163474-6864f9cf17ab.jpg')"></div><div><div class="val">${student.sessions}</div><div class="lbl">${t('dashSessions')}</div></div></div>
        <div class="dash-stat"><div class="ic" style="background-image:url('images/u-1568602471122-7832951cc4c5.jpg')"></div><div><div class="val">${num(student.xp)}</div><div class="lbl">${t('dashXp')}</div></div></div>
        <div class="dash-stat"><div class="ic" style="background-image:url('images/u-1555597673-b21d5c935865.jpg')"></div><div><div class="val">${student.rankFa}</div><div class="lbl">${t('dashRank')}</div></div></div>
        <div class="dash-stat"><div class="ic" style="background-image:url('images/u-1554224155-6726b3ff858f.jpg')"></div><div><div class="val">${student.insurance ? 'معتبر' : 'منقضی'}</div><div class="lbl">${t('dashInsurance')}</div></div></div>
      </div>
      <div class="loyalty-card">
        <div class="loyalty-header">
          <div class="rank-info">
            <div class="rank-icon"><img src="images/u-1555597673-b21d5c935865.jpg" alt="Samurai"></div>
            <div><div class="rank-name">${student.rankFa}</div><div class="rank-en">SAMURAI</div></div>
          </div>
          <div class="xp-text">${num(student.xp)} / ${num(student.nextXp)} XP</div>
        </div>
        <div class="xp-bar"><div class="xp-fill" style="width:${pct}%"></div></div>
        <div class="loyalty-bottom">
          <div class="info">${t('loyaltyNext')}: <b>${num(student.nextXp - student.xp)} XP</b></div>
          <div class="info">تخفیف فروشگاه: <b>۱۵٪</b></div>
        </div>
      </div>
      <div class="events-list">
        <h3 style="margin-bottom:12px;font-size:17px;font-weight:800">${t('dashAttendance')}</h3>
        <div class="event-card"><div class="event-date"><div class="day" style="color:#00c851">✓</div><div class="month">۱۲ شهریور</div></div><div class="event-info"><h3>حضور در جلسه تمرین</h3><p>تمرین کومیته — ساعت ۱۸:۰۰</p></div></div>
        <div class="event-card"><div class="event-date"><div class="day" style="color:#dc143c">✕</div><div class="month">۱۰ شهریور</div></div><div class="event-info"><h3>غیبت ثبت شده</h3><p>جلسه کاتا — بهانه ثبت نشده</p></div></div>
        <div class="event-card"><div class="event-date"><div class="day" style="color:#00c851">✓</div><div class="month">۰۸ شهریور</div></div><div class="event-info"><h3>حضور در جلسه تمرین</h3><p>تمرین تکنیک پایه — ساعت ۱۸:۰۰</p></div></div>
      </div>
    `;
  }

  // ===== GLOBAL API =====
  window.KBA = { addToCart, removeFromCart, updateQty, cart, cartTotal, cartCount, toggleFav, favs, showLogin, closeLogin, slideHero, scrollRow, toast, renderProducts, renderVideos, renderEvents, renderLeaderboard, renderDashboard, renderTeam, toggleLang };

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateFavBadge();
    initBackTop();
    renderDashboard();
    renderTeam('#teamGrid');
  });
})();
