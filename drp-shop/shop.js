/* =========================================================
   D:RP SHOP  |  Logik (Kopf, Fuß, Produkte, Größen, Warenkorb)
   Normalerweise musst du hier nichts ändern: Einstellungen in shop-data.js
   ========================================================= */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const eur = n => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  const page = document.body.dataset.page || '';
  const P = id => SHOP.produkte.find(p => p.id === id);
  const priceOf = (p, g) => (p.preisJeGroesse && p.preisJeGroesse[g]) || p.preis;
  const variantOf = (p, f, g) => (p.varianten || {})[`${f}-${g}`] || '';
  const live = p => !!SHOP.shopifyDomain && Object.values(p.varianten || {}).some(Boolean);
  const taxLine = () => (SHOP.kleinunternehmer
    ? 'Endpreis, gemäß § 19 UStG ohne Umsatzsteuer'
    : 'inkl. 19 % MwSt.') + ', zzgl. <a href="versand-zahlung.html">Versandkosten</a>';

  const ICON = {
    cart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 2h2.4l3.2 11.2a2 2 0 0 0 1.9 1.5h7.8a2 2 0 0 0 1.9-1.4L22 6H7.2l-.8-2.8A2 2 0 0 0 4.5 2H3Z"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5h12v10H2V5Zm13 3h4l3 4v3h-7V8ZM6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></svg>',
    print: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12v5H6V2Zm-2 6h16a2 2 0 0 1 2 2v7h-4v5H6v-5H2v-7a2 2 0 0 1 2-2Zm4 9v3h8v-3H8Z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 0 0-5 5v3H5v12h14V10h-2V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"/></svg>',
    ruler: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m3 15 12-12 6 6L9 21l-6-6Zm5.2-1.8 1.4-1.4-1.4-1.4-1.4 1.4 1.4 1.4Zm2.8-2.8 1.4-1.4L11 7.6l-1.4 1.4 1.4 1.4Zm2.8-2.8 1.4-1.4-1.4-1.4-1.4 1.4 1.4 1.4Z"/></svg>'
  };

  /* ---------- Kopf und Fuß ---------- */
  const cur = name => page === name ? ' aria-current="page"' : '';
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="bg-image" aria-hidden="true"></div>
    <canvas id="network" aria-hidden="true"></canvas>
    <header class="shop-header"><div class="nav">
      <a href="index.html" class="shop-brand" aria-label="D:RP Shop Startseite">
        <img src="img/drp-logo.png" alt="">
        <span><b>D:RP Shop</b><small>Deutschland Roleplay Merch</small></span>
      </a>
      <nav class="shop-nav" aria-label="Shop">
        <a href="index.html"${cur('home')}>Produkte</a>
        <a href="groessen.html"${cur('groessen')}>Größen</a>
        <a href="versand-zahlung.html"${cur('versand')}>Versand &amp; Zahlung</a>
        <button class="cart-btn" type="button" id="cartOpen">${ICON.cart}<span class="lbl">Warenkorb</span><span class="cart-count" id="cartCount" data-n="0">0</span></button>
      </nav>
    </div></header>`);
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="shop-foot"><div class="foot">
      <a href="index.html" class="shop-brand"><img src="img/drp-logo.png" alt="" style="width:34px;height:34px"><span><b style="font-size:1.05rem">D:RP Shop</b></span></a>
      <nav>
        <a href="index.html">Produkte</a>
        <a href="groessen.html">Größentabelle</a>
        <a href="versand-zahlung.html">Versand &amp; Zahlung</a>
        <a href="agb.html">AGB</a>
        <a href="widerruf.html">Widerruf</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="impressum.html">Impressum</a>
      </nav>
      <small>Ein Shop von <a href="../index.html">Haloed Vertex</a> &nbsp;&bull;&nbsp; Verkauf mit Erlaubnis der Deutschland Roleplay (D:RP) Serverleitung &nbsp;&bull;&nbsp; Nicht verbunden mit der Roblox Corporation.</small>
    </div></footer>
    <div class="overlay" id="overlay"></div>
    <aside class="drawer" id="drawer" aria-label="Warenkorb" aria-hidden="true">
      <div class="drawer-head"><h2>Warenkorb</h2><button class="x" type="button" data-close aria-label="Schließen">&times;</button></div>
      <div class="drawer-items" id="cartItems"></div>
      <div class="drawer-foot" id="cartFoot"></div>
    </aside>
    <div class="modal" id="sizeModal" role="dialog" aria-modal="true" aria-labelledby="sizeTitle">
      <button class="x" type="button" data-close aria-label="Schließen">&times;</button>
      <div id="sizeModalBody"></div>
    </div>`);

  /* ---------- Warenkorb ---------- */
  let mem = [];
  const load = () => { try { return JSON.parse(localStorage.getItem('drpCart') || '[]'); } catch { return mem; } };
  const save = c => { mem = c; try { localStorage.setItem('drpCart', JSON.stringify(c)); } catch {} renderCart(); };
  const add = (pid, farbe, groesse, qty) => {
    const c = load(); const hit = c.find(i => i.pid === pid && i.farbe === farbe && i.groesse === groesse);
    if (hit) hit.qty = Math.min(10, hit.qty + qty); else c.push({ pid, farbe, groesse, qty });
    save(c); openDrawer();
  };
  function renderCart() {
    const c = load().filter(i => P(i.pid));
    const n = c.reduce((s, i) => s + i.qty, 0);
    const cc = $('#cartCount'); cc.textContent = n; cc.dataset.n = n;
    const box = $('#cartItems'), foot = $('#cartFoot');
    if (!c.length) { box.innerHTML = '<p class="empty">Dein Warenkorb ist noch leer.</p>'; foot.innerHTML = ''; return; }
    box.innerHTML = c.map((i, k) => {
      const p = P(i.pid), f = p.farben[i.farbe];
      return `<div class="citem">
        <img src="${esc(f.bilder[0])}" alt="">
        <div><b>${esc(p.name)}</b><small>${Object.keys(p.farben).length > 1 ? esc(f.name) + ' · ' : ''}${esc(i.groesse)}</small>
          <div class="qty"><button type="button" data-q="${k}" data-d="-1" aria-label="Weniger">−</button><span>${i.qty}</span><button type="button" data-q="${k}" data-d="1" aria-label="Mehr">+</button></div>
          <button class="rm" type="button" data-rm="${k}">Entfernen</button></div>
        <div class="cp">${eur(priceOf(p, i.groesse) * i.qty)}</div></div>`;
    }).join('');
    const sub = c.reduce((s, i) => s + priceOf(P(i.pid), i.groesse) * i.qty, 0);
    const ship = SHOP.versandfreiAb && sub >= SHOP.versandfreiAb ? 0 : SHOP.versandkosten;
    const ok = !!SHOP.shopifyDomain && c.every(i => variantOf(P(i.pid), i.farbe, i.groesse));
    foot.innerHTML = `
      <div class="sum"><span>Zwischensumme</span><span>${eur(sub)}</span></div>
      <div class="sum"><span>Versand nach ${esc(SHOP.versandLand)}</span><span>${ship ? eur(ship) : 'kostenlos'}</span></div>
      <div class="sum total"><span>Gesamt</span><span>${eur(sub + ship)}</span></div>
      <small class="tax">${taxLine()}</small>
      <button class="btn btn-drp" type="button" id="checkout"${ok ? '' : ' disabled'}>${ICON.lock} Zur Kasse</button>
      <p class="note">${ok ? 'Du wirst zum sicheren Checkout von Shopify weitergeleitet. Dort gibst du Adresse und Zahlungsart ein und schließt die Bestellung ab.' : 'Der Shop öffnet bald. Bestellen ist in Kürze möglich.'}
      <br>Unter 18? Bitte bestell gemeinsam mit deinen Eltern, siehe <a href="agb.html#minderjaehrige">AGB</a>.</p>`;
  }
  document.addEventListener('click', e => {
    const t = e.target.closest('button'); if (!t) return;
    if (t.dataset.q !== undefined) { const c = load(); const it = c[+t.dataset.q]; it.qty = Math.max(1, Math.min(10, it.qty + +t.dataset.d)); save(c); }
    if (t.dataset.rm !== undefined) { const c = load(); c.splice(+t.dataset.rm, 1); save(c); }
    if (t.id === 'checkout') {
      const items = load().map(i => `${variantOf(P(i.pid), i.farbe, i.groesse)}:${i.qty}`).join(',');
      location.href = `https://${SHOP.shopifyDomain}/cart/${items}`;
    }
  });
  const ov = $('#overlay'), dr = $('#drawer'), md = $('#sizeModal');
  function openDrawer() { dr.classList.add('open'); dr.setAttribute('aria-hidden', 'false'); ov.classList.add('open'); }
  function closeAll() { dr.classList.remove('open'); dr.setAttribute('aria-hidden', 'true'); md.classList.remove('open'); ov.classList.remove('open'); }
  $('#cartOpen').addEventListener('click', openDrawer);
  ov.addEventListener('click', closeAll);
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeAll));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
  renderCart();

  /* ---------- Größentabellen ---------- */
  const MEASURE_SVG = `<svg viewBox="0 0 200 190" aria-hidden="true"><path d="M62 18 40 24 14 60 4 120l20 4 10-60 6-12 2 140h116l2-140 6 12 10 60 20-4-10-60-26-36-22-6c-6 14-22 22-38 22s-32-8-38-22Z" fill="#1d2440" stroke="#9aa5c4" stroke-width="2"/>
    <g stroke="#fccf0a" stroke-width="3" fill="#fccf0a"><line x1="44" y1="84" x2="156" y2="84"/><text x="100" y="78" font-size="16" text-anchor="middle" stroke="none" font-family="sans-serif" font-weight="700">A</text>
    <line x1="170" y1="22" x2="170" y2="176" stroke="#2fa8ff"/><text x="184" y="104" font-size="16" fill="#2fa8ff" stroke="none" font-family="sans-serif" font-weight="700">B</text>
    <polyline points="100,16 140,22 162,52 172,110" fill="none" stroke="#ff4d5e" transform="translate(0,-6)"/><text x="132" y="12" font-size="16" fill="#ff4d5e" stroke="none" font-family="sans-serif" font-weight="700">C</text></g></svg>`;
  const tableHTML = (key, pick) => {
    const t = SHOP.groessen[key];
    return `<div class="size-wrap"><table class="sizes"><thead><tr>${t.spalten.map(s => `<th>${esc(s)}</th>`).join('')}</tr></thead><tbody>
      ${t.zeilen.map(r => `<tr${r[0] === pick ? ' class="pick"' : ''}>${r.map((v, i) => `<td>${esc(v)}${i > 1 ? ' cm' : i === 1 ? ' cm' : ''}</td>`).join('')}</tr>`).join('')}
      </tbody></table></div>`;
  };
  const guideHTML = key => `
    <div class="kid-tip"><b>Du bist zwischen 12 und 14 Jahre alt?</b> Dann passt meistens <b>S</b>. Die Teile sind Erwachsenengrößen und fallen normal bis etwas weit aus. Bist du kleiner als 155 cm, wird S eher locker sitzen.</div>
    <div class="finder"><label for="hgt-${key}"><b>Wie groß bist du?</b></label>
      <input id="hgt-${key}" type="number" inputmode="numeric" min="120" max="220" placeholder="z. B. 158"> <span>cm</span>
      <output id="out-${key}" aria-live="polite"></output></div>
    ${tableHTML(key)}
    <div class="measure">${MEASURE_SVG}
      <ol><li><b>Nimm einen Pulli, der dir gut passt</b>, und leg ihn flach auf den Tisch.</li>
        <li><b>A Breite:</b> von Achsel zu Achsel quer messen.</li>
        <li><b>B Länge:</b> vom höchsten Punkt der Schulter bis zum unteren Rand.</li>
        <li><b>C Ärmel:</b> von der Mitte des Nackens über die Schulter bis zum Ärmelende.</li>
        <li>Such in der Tabelle die Größe, deren Zahlen deinem Pulli am nächsten kommen.</li></ol></div>
    <p class="tax">Die Maße können je nach Herstellung um 2 bis 3 cm abweichen. Die Körpergröße ist nur ein Richtwert.</p>`;
  const sizeFromHeight = (key, cm) => {
    for (const r of SHOP.groessen[key].zeilen) {
      const m = String(r[1]).match(/(\d+)\D+(\d+)/), ab = String(r[1]).match(/ab (\d+)/);
      if (m && cm >= +m[1] && cm < +m[2]) return r[0];
      if (ab && cm >= +ab[1]) return r[0];
    }
    return cm < 150 ? SHOP.groessen[key].zeilen[0][0] : null;
  };
  const wireFinder = (root, key, onPick) => {
    const inp = $(`#hgt-${key}`, root), out = $(`#out-${key}`, root);
    if (!inp) return;
    inp.addEventListener('input', () => {
      const cm = +inp.value; if (!cm || cm < 100) { out.textContent = ''; return; }
      const s = sizeFromHeight(key, cm);
      out.textContent = s ? `Wir empfehlen dir Größe ${s}` + (cm < 150 ? ' (eventuell noch etwas groß)' : '') : '';
      root.querySelectorAll('table.sizes tbody tr').forEach(tr => tr.classList.toggle('pick', tr.firstElementChild.textContent === s));
      if (s && onPick) onPick(s);
    });
  };
  function openSizes(key, onPick) {
    $('#sizeModalBody').innerHTML = `<h2 id="sizeTitle">Welche Größe passt dir?</h2><p class="tax" style="margin-bottom:12px">${esc(SHOP.groessen[key].name)}</p>${guideHTML(key)}`;
    wireFinder($('#sizeModalBody'), key, onPick);
    md.classList.add('open'); ov.classList.add('open');
  }

  /* ---------- Startseite: Produktliste ---------- */
  const grid = $('#productGrid');
  if (grid) grid.innerHTML = SHOP.produkte.map(p => {
    const f = Object.values(p.farben)[0];
    const from = p.preisJeGroesse ? 'ab ' : '';
    return `<a class="pcard reveal" href="produkt.html?p=${p.id}">
      <div class="pimg"><img src="${esc(f.bilder[0])}" alt="${esc(p.name)}" loading="lazy">${f.bilder[1] ? `<img class="alt" src="${esc(f.bilder[1])}" alt="" loading="lazy">` : ''}${live(p) ? '' : '<span class="badge-soon">Bald verfügbar</span>'}</div>
      <div class="pbody"><h3>${esc(p.name)}</h3><p>${esc(p.kurz)}</p>
        ${Object.keys(p.farben).length > 1 ? `<div class="swatches">${Object.values(p.farben).map(c => `<i style="background:${c.hex}" title="${esc(c.name)}"></i>`).join('')}</div>` : ''}
        <span class="price">${from}${eur(p.preis)}</span></div></a>`;
  }).join('');
  document.querySelectorAll('[data-lieferzeit]').forEach(el => el.textContent = SHOP.lieferzeit);
  document.querySelectorAll('[data-versand]').forEach(el => el.textContent = eur(SHOP.versandkosten));
  document.querySelectorAll('[data-versandfrei]').forEach(el => el.textContent = SHOP.versandfreiAb ? `Ab ${eur(SHOP.versandfreiAb)} Bestellwert ist der Versand kostenlos.` : '');
  document.querySelectorAll('[data-zahlung]').forEach(el => el.textContent = SHOP.zahlungsarten.join(', '));
  document.querySelectorAll('[data-steuer]').forEach(el => el.textContent = SHOP.kleinunternehmer
    ? 'Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen (Kleinunternehmerregelung). Alle Preise sind Endpreise.'
    : 'Alle Preise enthalten die gesetzliche Umsatzsteuer von 19 %.');

  /* ---------- Größenseite ---------- */
  const sp = $('#sizePage');
  if (sp) {
    sp.innerHTML = Object.keys(SHOP.groessen).map(k => `<section class="legal reveal" id="${k}"><h2>${esc(SHOP.groessen[k].name)}</h2>${guideHTML(k)}</section>`).join('');
    Object.keys(SHOP.groessen).forEach(k => wireFinder(sp, k));
  }

  /* ---------- Produktseite ---------- */
  const pr = $('#product');
  if (pr) {
    const p = P(new URLSearchParams(location.search).get('p')) || SHOP.produkte[0];
    document.title = `${p.name} | D:RP Shop`;
    const colors = Object.keys(p.farben);
    const st = { farbe: colors[0], groesse: p.groessenListe.length === 1 ? p.groessenListe[0] : '', qty: 1, img: 0 };
    const gLabel = p.groessenLabel || 'Größe';
    const pics = () => { const f = p.farben[st.farbe]; const l = f.bilder.map((src, i) => ({ src, label: f.bilder.length === 2 && p.groessentabelle ? (i ? 'Hinten' : 'Vorne') : (p.id === 'sticker' ? (i ? '10er-Set' : '5er-Set') : 'Ansicht') })); if (f.tragebild) l.push({ src: f.tragebild, label: 'Getragen' }); (f.tragebilder || []).forEach(src => l.push({ src, label: 'Getragen' })); return l; };

    pr.innerHTML = `
      <p class="crumbs"><a href="index.html">Produkte</a> › ${esc(p.name)}</p>
      <div class="product">
        <div><div class="gallery-main"><img id="mainImg" alt=""><span class="label" id="mainLbl"></span></div><div class="thumbs" id="thumbs"></div></div>
        <div class="info">
          <h1>${esc(p.name)}</h1>
          <p class="lead">${esc(p.kurz)}</p>
          <div class="price" id="price"></div>
          <div class="tax">${taxLine()}</div>
          ${colors.length > 1 ? `<div class="opt"><div class="opt-head"><b>Farbe: <span id="colorName"></span></b></div><div class="chips" id="colors">${colors.map(c => `<button class="chip" type="button" data-c="${c}" aria-pressed="false"><i style="background:${p.farben[c].hex}"></i>${esc(p.farben[c].name)}</button>`).join('')}</div></div>` : ''}
          ${p.groessenListe.length > 1 || p.groessentabelle ? `<div class="opt"><div class="opt-head"><b>${gLabel}: <span id="sizeName">bitte wählen</span></b>${p.groessentabelle ? '<button class="linkish" type="button" id="sizeHelp">Welche Größe passt mir?</button>' : ''}</div>
            <div class="chips" id="sizes">${p.groessenListe.map(g => `<button class="chip" type="button" data-g="${esc(g)}" aria-pressed="false">${esc(g)}</button>`).join('')}</div></div>` : ''}
          <div class="buy-row">
            <div class="qty"><button type="button" id="qm" aria-label="Weniger">−</button><span id="qn">1</span><button type="button" id="qp" aria-label="Mehr">+</button></div>
            <button class="btn btn-drp" type="button" id="addBtn">${ICON.cart} In den Warenkorb</button>
          </div>
          <p class="hint" id="hint"></p>
          <div class="delivery">${ICON.truck}<div><b>Lieferzeit: ${esc(SHOP.lieferzeit)}</b><span>${esc(SHOP.lieferzeitInfo)}</span></div></div>
          <div class="acc">
            <details open><summary>Beschreibung</summary><div class="acc-body">${p.beschreibung.map(t => `<p>${esc(t)}</p>`).join('')}</div></details>
            <details><summary>Material und Pflege</summary><div class="acc-body"><ul>${p.details.map(d => `<li>${esc(d)}</li>`).join('')}</ul><p style="margin-top:10px"><b>Pflege:</b> ${esc(p.pflege)}</p></div></details>
            ${p.groessentabelle ? `<details><summary>Größentabelle</summary><div class="acc-body">${tableHTML(p.groessentabelle)}<p style="margin-top:10px"><a href="groessen.html#${p.groessentabelle}">So misst du richtig →</a></p></div></details>` : ''}
            <details><summary>Versand und Logistik</summary><div class="acc-body">
              <p>Wir verschicken innerhalb von ${esc(SHOP.versandLand)}. Versandkosten: ${eur(SHOP.versandkosten)} pro Bestellung${SHOP.versandfreiAb ? `, ab ${eur(SHOP.versandfreiAb)} kostenlos` : ''}.</p>
              <p>Dein Artikel wird erst nach deiner Bestellung bei unserem Produktionspartner in der EU gedruckt und von dort direkt an dich geschickt. Du bekommst per E-Mail eine Sendungsnummer, sobald das Paket unterwegs ist. Bestellst du mehrere Artikel, können sie in getrennten Paketen ankommen.</p>
              <p><a href="versand-zahlung.html">Alle Infos zu Versand und Zahlung →</a></p></div></details>
            <details><summary>Bezahlung</summary><div class="acc-body">
              <p>Du bezahlst sicher im Checkout von Shopify. Möglich sind: ${esc(SHOP.zahlungsarten.join(', '))}.</p>
              <p>Unter 18? Dann bestell bitte zusammen mit deinen Eltern, da für die Zahlung ein Konto eines Erwachsenen nötig ist.</p></div></details>
            <details><summary>Umtausch und Rückgabe</summary><div class="acc-body">
              <p>Du hast ein 14-tägiges Widerrufsrecht. Alle Details findest du in der <a href="widerruf.html">Widerrufsbelehrung</a>. Bei Druckfehlern oder Schäden melde dich bitte mit einem Foto, dann bekommst du Ersatz oder dein Geld zurück.</p>
              <p>Tipp: Schau vor dem Bestellen in die Größentabelle. So sparst du dir das Zurückschicken.</p></div></details>
          </div>
        </div>
      </div>`;

    const upd = () => {
      const l = pics(); if (st.img >= l.length) st.img = 0;
      $('#mainImg').src = l[st.img].src; $('#mainImg').alt = `${p.name} ${l[st.img].label}`; $('#mainLbl').textContent = l[st.img].label;
      $('#thumbs').innerHTML = l.length > 1 ? l.map((x, i) => `<button type="button" data-i="${i}" aria-pressed="${i === st.img}"><img src="${esc(x.src)}" alt=""><small>${esc(x.label)}</small></button>`).join('') : '';
      $('#price').textContent = eur(priceOf(p, st.groesse || p.groessenListe[0]) * st.qty);
      if ($('#colorName')) $('#colorName').textContent = p.farben[st.farbe].name;
      if ($('#sizeName')) $('#sizeName').textContent = st.groesse || 'bitte wählen';
      pr.querySelectorAll('[data-c]').forEach(b => b.setAttribute('aria-pressed', b.dataset.c === st.farbe));
      pr.querySelectorAll('[data-g]').forEach(b => b.setAttribute('aria-pressed', b.dataset.g === st.groesse));
      $('#qn').textContent = st.qty;
      const add = $('#addBtn'), hint = $('#hint');
      if (!live(p)) { add.disabled = true; hint.className = 'hint'; hint.textContent = 'Bald verfügbar. Der Shop öffnet in Kürze.'; }
      else if (st.groesse && !variantOf(p, st.farbe, st.groesse)) { add.disabled = true; hint.className = 'hint'; hint.textContent = 'Diese Variante ist gerade nicht verfügbar.'; }
      else { add.disabled = false; if (!hint.classList.contains('err')) hint.textContent = ''; }
    };
    pr.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.c) { st.farbe = b.dataset.c; st.img = 0; }
      if (b.dataset.g) { st.groesse = b.dataset.g; $('#hint').className = 'hint'; $('#hint').textContent = ''; if (p.id === 'sticker') st.img = p.groessenListe.indexOf(b.dataset.g); }
      if (b.dataset.i) st.img = +b.dataset.i;
      if (b.id === 'qm') st.qty = Math.max(1, st.qty - 1);
      if (b.id === 'qp') st.qty = Math.min(10, st.qty + 1);
      if (b.id === 'sizeHelp') openSizes(p.groessentabelle, s => { if (p.groessenListe.includes(s)) { st.groesse = s; upd(); } });
      if (b.id === 'addBtn') {
        if (!st.groesse) { const h = $('#hint'); h.className = 'hint err'; h.textContent = `Bitte wähle zuerst ${gLabel === 'Größe' ? 'deine Größe' : 'die Anzahl'}.`; return; }
        add(p.id, st.farbe, st.groesse, st.qty); st.qty = 1;
      }
      upd();
    });
    upd();
  }
})();
