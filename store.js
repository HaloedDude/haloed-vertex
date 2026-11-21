/* =====================================================================
   HALOED VERTEX  |  Marktplatz: Produktkarten und Anfrageformulare
   Nicht bearbeiten. Produkte stehen in store-data.js.
   ===================================================================== */
(() => {
  const L = () => (window.HV ? window.HV.lang : 'en');
  const t = (k, f) => (window.HV ? window.HV.t(k, f) : f);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pick = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[L()] ?? v.en) : v;
  const money = n => L() === 'de' ? n.toFixed(2).replace('.', ',') + ' €' : '€' + n.toFixed(2);

  const ICONS = {
    grid:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/></svg>',
    code:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/></svg>',
    box:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>'
  };
  const COLOR = { templates: 'p-indigo', bots: 'p-green', bundles: 'p-green', websites: 'p-blue' };

  function card(p) {
    const feats = pick(p.features) || [];
    const badge = pick(p.badge);
    const live = typeof STORE !== 'undefined' && STORE.shopifyDomain && p.variantId;
    const btn = live
      ? `<a class="btn btn-blue" href="https://${esc(STORE.shopifyDomain)}/cart/${encodeURIComponent(p.variantId)}:1">${t('btn.buy', 'Buy now')}</a>`
      : `<span class="btn btn-ghost">${t('btn.soon', 'Coming soon')}</span>`;
    return `
    <article class="product ${COLOR[p.cat] || 'p-indigo'}">
      <div class="product-top">
        <span class="product-icon">${ICONS[p.icon] || ICONS.grid}</span>
        ${badge ? `<span class="badge">${esc(badge)}</span>` : ''}
      </div>
      <h3>${esc(pick(p.name))}</h3>
      <p>${esc(pick(p.desc))}</p>
      <ul class="feat">${feats.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
      <div class="product-foot">
        <div class="price">${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ''}<strong>${money(p.price)}</strong></div>
        ${btn}
      </div>
    </article>`;
  }

  function render() {
    if (typeof STORE === 'undefined') return;
    document.querySelectorAll('.products[data-cat]').forEach(g => {
      g.innerHTML = STORE.products.filter(p => p.cat === g.dataset.cat).map(card).join('');
    });
    const f = document.getElementById('featured');
    if (f) f.innerHTML = STORE.products.filter(p => p.featured).map(card).join('');
  }
  render();
  if (window.HV) window.HV.onChange(render);

  /* ---------- Anfrageformulare: öffnen das E-Mail-Programm ---------- */
  document.querySelectorAll('form[data-mailform]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const grouped = {};
      for (const [k, v] of data.entries()) {
        if (k.startsWith('_') || String(v).trim() === '') continue;
        (grouped[k] = grouped[k] || []).push(String(v).trim());
      }
      const body = Object.entries(grouped).map(([k, v]) => `${k}: ${v.join(', ')}`).join('\n\n')
        + `\n\nLanguage: ${L().toUpperCase()}\nSent from: ${location.href}`;
      const to = (typeof STORE !== 'undefined' && STORE.email) || 'support@haloedvertex.com';
      const subject = `${form.dataset.subject || 'Request'}: ${grouped['Name'] ? grouped['Name'][0] : ''}`;
      location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const ok = form.querySelector('.form-ok');
      if (ok) ok.style.display = 'block';
    });
  });
})();
