/* =====================================================================
   HALOED VERTEX  |  KOPF- UND FUSSZEILE
   Wird auf jeder Seite automatisch eingesetzt. Navigation nur hier ändern.
   ===================================================================== */
(() => {
  const page = document.body.dataset.page || '';
  const INVITE = 'https://discord.gg/aYgCZS64CK';

  const I = {
    grid:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/></svg>',
    code:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
    shirt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 3 2.5 6.2l2.3 5 2.2-1V21h10V10.2l2.2 1 2.3-5L16 3a4 4 0 0 1-8 0Z"/></svg>'
  };

  const tabs = [
    { id: 'templates', cls: 'tab-indigo', href: 'discord-templates.html', icon: 'grid',  key: 'nav.templates', en: 'Discord Templates' },
    { id: 'bots',      cls: 'tab-green',  href: 'bot-code.html',          icon: 'code',  key: 'nav.bots',      en: 'Bot Code' },
    { id: 'websites',  cls: 'tab-blue',   href: 'websites.html',          icon: 'globe', key: 'nav.websites',  en: 'Websites' },
    { id: 'merch',     cls: 'tab-gold',   href: 'creator-merch.html',     icon: 'shirt', key: 'nav.merch',     en: 'Creator Merch' }
  ];

  const logo = size => `<a href="index.html" class="logo" aria-label="Haloed Vertex home"><img src="HVLogo.jpg" alt=""${size ? ` style="width:${size}px;height:${size}px"` : ''}><span class="logo-text"><span class="silver">Haloed</span> <span class="vertex">Vertex</span></span></a>`;

  const h = document.getElementById('site-header');
  if (h) h.innerHTML = `
  <div class="nav">
    ${logo()}
    <ul class="tabs">
      ${tabs.map(t => `<li class="tab ${t.cls}"><a href="${t.href}"${t.id === page ? ' class="active" aria-current="page"' : ''}>${I[t.icon]}<span data-i18n="${t.key}">${t.en}</span></a></li>`).join('')}
    </ul>
    <div class="lang-switch" role="group" aria-label="Language">
      <button type="button" data-lang="en">EN</button><button type="button" data-lang="de">DE</button>
    </div>
  </div>`;

  const f = document.getElementById('site-footer');
  if (f) f.innerHTML = `
  <div class="foot">
    ${logo(34)}
    <nav>
      <a href="discord-templates.html" data-i18n="nav.templates">Discord Templates</a>
      <a href="bot-code.html" data-i18n="nav.bots">Bot Code</a>
      <a href="websites.html" data-i18n="nav.websites">Websites</a>
      <a href="creator-merch.html" data-i18n="nav.merch">Creator Merch</a>
      <a href="support.html" data-i18n="nav.support">Support</a>
      <a href="${INVITE}" target="_blank" rel="noopener">Discord</a>
    </nav>
    <nav class="foot-sub">
      <a href="about-me.html" data-i18n="foot.about">About Founder</a>
      <a href="robloxgames.html" data-i18n="foot.games">Roblox Games</a>
      <a href="discord.html" data-i18n="foot.communities">Communities</a>
      <a href="drp-shop/">D:RP Shop</a>
      <a href="impressum.html" data-i18n="foot.legal">Legal Notice</a>
      <a href="privacy.html" data-i18n="foot.privacy">Privacy Policy</a>
    </nav>
    <small>&copy; ${new Date().getFullYear()} Haloed Vertex &nbsp;&bull;&nbsp; <span data-i18n="foot.small">Digital marketplace for Discord templates, bot code, websites and creator merch. Not affiliated with Discord Inc. or Roblox Corporation.</span></small>
  </div>`;
})();
