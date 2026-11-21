/* =====================================================================
   HALOED VERTEX  |  SPRACHEN (Englisch / Deutsch)
   ---------------------------------------------------------------------
   Englisch steht direkt im HTML. Hier stehen nur die deutschen Texte.
   Jedes Element mit data-i18n="schluessel" bekommt auf Deutsch den Text
   aus DE["schluessel"]. Fehlt ein Schluessel, bleibt der englische Text.
   ===================================================================== */
window.HV = (() => {
  const INVITE = 'https://discord.gg/aYgCZS64CK';
  const DE = {
    /* Navigation & Footer */
    'nav.templates': 'Discord-Vorlagen',
    'nav.bots': 'Bot-Code',
    'nav.websites': 'Websites',
    'nav.merch': 'Creator-Merch',
    'nav.support': 'Support',
    'foot.about': 'Über den Gründer',
    'foot.communities': 'Communitys',
    'foot.games': 'Roblox-Spiele',
    'foot.legal': 'Impressum',
    'foot.privacy': 'Datenschutz',
    'foot.small': 'Digitaler Marktplatz für Discord-Vorlagen, Bot-Code, Websites und Creator-Merch. Nicht verbunden mit Discord Inc. oder der Roblox Corporation.',

    /* Allgemein */
    'btn.buy': 'Jetzt kaufen',
    'btn.soon': 'Bald verfügbar',
    'price.note': 'Einmalpreise. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmer).',

    /* Startseite */
    'home.eyebrow': 'DIGITALER MARKTPLATZ &bull; DISCORD &bull; BOTS &bull; WEBSITES',
    'home.lead': 'Fertige Discord-Server-Vorlagen, Bot-Code und Website-Vorlagen, dazu individuelle Websites und Merch-Shops für Creator. Einmal kaufen, in Minuten eingerichtet.',
    'home.cta1': 'Vorlagen ansehen',
    'home.cta2': 'Merch-Shop starten',
    'home.t1': 'Komplette Server mit Kanälen, Rollen und Rechten. Sofort per Discord-Bot geliefert.',
    'home.t1go': 'Vorlagen ansehen →',
    'home.t2': 'Quellcode für Ticket-, Bewerbungs-, Moderations- und Roleplay-Bots. Einzeln oder im Bundle.',
    'home.t2go': 'Bot-Code ansehen →',
    'home.t3': 'Website-Vorlagen zum Download und individuelle Websites nach deiner Beschreibung.',
    'home.t3go': 'Websites entdecken →',
    'home.t4': 'Dein eigener Merch-Shop für deine Community. Wir hosten, du verdienst an jedem Verkauf.',
    'home.t4go': 'Mehr erfahren →',
    'home.popular': 'Gerade beliebt',
    'home.how': "So funktioniert's",
    'home.s1t': 'Produkt wählen',
    'home.s1p': 'Vorlagen, Bot-Code oder Websites. Bei jedem Produkt steht genau, was enthalten ist.',
    'home.s2t': 'Sicher bezahlen',
    'home.s2p': 'Kasse über Shopify mit PayPal, Karte, Apple Pay, Google Pay oder Klarna.',
    'home.s3t': 'Sofort erhalten',
    'home.s3p': 'Discord-Vorlagen kommen über unseren Bot, Code und Website-Dateien als Download. Anleitungen sind immer kostenlos.',
    'trust.1t': 'Sofortige Lieferung',
    'trust.1p': 'Automatisch, rund um die Uhr',
    'trust.2t': 'Sichere Kasse',
    'trust.2p': 'Über Shopify',
    'trust.3t': 'Kostenlose Anleitungen',
    'trust.3p': 'Schritt für Schritt',
    'trust.4t': 'Echter Support',
    'trust.4p': 'Discord und E-Mail',

    /* Discord-Vorlagen */
    'tpl.eyebrow': 'DISCORD-SERVER-VORLAGEN',
    'tpl.lead': 'Komplette Server-Strukturen mit Kanälen, Rollen, Rechten und Regeln. Vorlage anwenden und dein Server steht in Sekunden.',
    'tpl.howTitle': "So läuft die Lieferung",
    'tpl.howLead': 'Komplett automatisch, meist innerhalb einer Minute nach der Zahlung.',
    'tpl.s1t': 'Vorlage kaufen',
    'tpl.s1p': 'Sicher über unsere Kasse bezahlen.',
    'tpl.s2t': 'Bestellnummer merken',
    'tpl.s2p': 'In deiner Bestellbestätigung per E-Mail steht deine Bestellnummer, zum Beispiel #1003.',
    'tpl.s3t': 'Auf Discord einlösen',
    'tpl.s3p': `Tritt dem <a href="${INVITE}" target="_blank" rel="noopener">Haloed Vertex Discord</a> bei und gib <code>/redeem</code> mit Bestellnummer und E-Mail ein.`,
    'tpl.s4t': 'Vorlage erhalten',
    'tpl.s4p': 'Unser Bot schickt dir Vorlagen-Link, Beschreibung und Einrichtungsanleitung per Direktnachricht.',
    'tpl.info': 'Tipp: Erlaube Direktnachrichten von Servermitgliedern, damit unser Bot dich erreicht. Jede Bestellung kann von einem Discord-Account eingelöst werden.',

    /* Bot-Code */
    'bots.eyebrow': 'BOT-QUELLCODE',
    'bots.lead': 'Quellcode für Community-Bots, bereit für deinen eigenen Server. Zu jedem Kauf gibt es eine kostenlose Schritt-für-Schritt-Anleitung.',
    'bots.single': 'Einzelne Bots',
    'bots.bundles': 'Bundles',
    'bots.bundlesLead': 'Spare bis zu 25 % mit unseren Bot-Bundles.',
    'bots.getTitle': 'Das bekommst du',
    'bots.g1t': 'Kompletter Quellcode',
    'bots.g1p': 'Sauberer, kommentierter Code, den du beliebig anpassen kannst.',
    'bots.g2t': 'Kostenlose Anleitung',
    'bots.g2p': 'Bot im Discord Developer Portal erstellen, Token eintragen, starten, fertig.',
    'bots.g3t': 'Sofortiger Download',
    'bots.g3p': 'Download-Link direkt nach der Zahlung und zusätzlich per E-Mail.',
    'bots.info': 'Den Bot hostest du selbst, zum Beispiel auf deinem PC, einem Raspberry Pi oder einem kleinen VPS. Die Voraussetzungen stehen bei jedem Produkt. Der Code darf für eigene Server genutzt werden, ein Weiterverkauf ist nicht erlaubt.',

    /* Websites */
    'web.eyebrow': 'WEBSITES',
    'web.lead': 'Website-Vorlagen zum Download oder eine individuelle Website, genau nach deiner Beschreibung gebaut.',
    'web.tplTitle': 'Website-Vorlagen',
    'web.customTitle': 'Individuelle Website',
    'web.customLead': 'Beschreib deine Website und erhalte innerhalb von 48 Stunden ein kostenloses, unverbindliches Angebot. Individuelle Websites gibt es ab 149 €.',
    'web.s1t': 'Beschreiben',
    'web.s1p': 'Fülle das Formular aus: Zweck, Seiten, Funktionen und Stil.',
    'web.s2t': 'Angebot',
    'web.s2p': 'Du bekommst einen Festpreis und einen Zeitplan. Erst wenn du zustimmst, geht es los.',
    'web.s3t': 'Bauen und starten',
    'web.s3p': 'Wir bauen, du gibst Feedback, dann geht deine Website online.',
    'web.f.type': 'Art der Website',
    'web.o.community': 'Community oder Discord-Server',
    'web.o.portfolio': 'Portfolio',
    'web.o.business': 'Unternehmen',
    'web.o.shop': 'Onlineshop',
    'web.o.other': 'Sonstiges',
    'web.f.pages': 'Anzahl Seiten',
    'web.o.p1': '1 Seite',
    'web.o.p2': '2 bis 5 Seiten',
    'web.o.p3': '6 oder mehr Seiten',
    'web.f.budget': 'Budget',
    'web.o.b1': 'unter 150 €',
    'web.o.b2': '150 bis 300 €',
    'web.o.b3': '300 bis 600 €',
    'web.o.b4': 'über 600 €',
    'web.f.deadline': 'Gewünschter Start (optional)',
    'web.f.desc': 'Beschreib deine Website',
    'web.f.descPh': 'Wofür ist sie, welche Seiten und Funktionen brauchst du, welche Farben oder Websites gefallen dir?',

    /* Formulare allgemein */
    'f.name': 'Name',
    'f.email': 'E-Mail',
    'f.discord': 'Discord-Name (optional)',
    'f.consent': 'Ich bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage genutzt werden (siehe <a href="privacy.html">Datenschutz</a>).',
    'f.send': 'Anfrage senden',
    'f.hint': 'Öffnet dein E-Mail-Programm mit deiner fertigen Anfrage.',
    'f.ok': 'Dein E-Mail-Programm wurde geöffnet. Bitte dort auf Senden klicken.',

    /* Creator-Merch */
    'merch.eyebrow': 'CREATOR-MERCH',
    'merch.lead': 'Dein eigener Merch-Shop für deine Community, deinen Stream oder deinen Server. Keine Vorkosten, kein Lager, kein Stress. Wir bauen und betreiben ihn, du verdienst an jedem Verkauf.',
    'merch.s1t': 'Bewerben',
    'merch.s1p': 'Erzähl uns von deiner Community und schick uns dein Logo.',
    'merch.s2t': 'Wir designen und bauen',
    'merch.s2p': 'Hoodies, Sweatshirts, T-Shirts und Tassen mit deinem Logo, dazu deine eigene Shopseite auf haloedvertex.com.',
    'merch.s3t': 'Starten und bewerben',
    'merch.s3p': 'Du teilst deinen Shop mit deiner Community. Gedruckt wird erst nach jeder Bestellung.',
    'merch.s4t': 'Monatlich Geld erhalten',
    'merch.s4p': 'Für jeden verkauften Artikel bekommst du deinen Anteil, monatlich ausgezahlt mit Abrechnung.',
    'merch.t1t': 'Keine Vorkosten',
    'merch.t1p': 'Kein Risiko für dich',
    'merch.t2t': 'Print on Demand',
    'merch.t2p': 'Kein Lager, keine Reste',
    'merch.t3t': 'Versand DE und AT',
    'merch.t3p': 'Direkt an deine Fans',
    'merch.t4t': 'Monatliche Auszahlung',
    'merch.t4p': 'Mit klarer Abrechnung',
    'merch.liveTitle': 'Live-Beispiel',
    'merch.drpText': 'Offizieller Merch von Deutschland Roleplay. Hoodies, Sweatshirts, T-Shirts und Tassen, komplett von uns gebaut und betrieben.',
    'merch.drpBtn': 'Shop ansehen',
    'merch.applyTitle': 'Jetzt bewerben',
    'merch.applyLead': 'Dein Anteil pro Artikel wird individuell vereinbart und vor dem Start schriftlich festgehalten.',
    'merch.f.community': 'Name der Community',
    'merch.f.link': 'Link (Discord, Twitch, YouTube, TikTok …)',
    'merch.f.size': 'Größe der Community',
    'merch.f.logo': 'Logo',
    'merch.o.logo1': 'Ja, ich habe ein Logo',
    'merch.o.logo2': 'Nein, ich brauche Hilfe',
    'merch.o.logo3': 'Weiß ich noch nicht',
    'merch.f.products': 'Gewünschte Produkte',
    'merch.o.mug': 'Tasse',
    'merch.f.msg': 'Nachricht (optional)',
    'merch.f.age': 'Ich bin mindestens 18 Jahre alt oder habe die Erlaubnis meiner Eltern.',
    'merch.f.send': 'Bewerbung senden',

    /* Support */
    'sup.lead': 'Fragen zu einer Bestellung, einer Vorlage oder einem Bot? Wir helfen dir.',
    'sup.dcTitle': 'Support auf Discord',
    'sup.dcText': 'Öffne ein Ticket auf unserem Server. Der schnellste Weg zu Hilfe.',
    'sup.dcGo': 'Server beitreten →',
    'sup.mailTitle': 'E-Mail-Support',
    'sup.mailText': 'support@haloedvertex.com, Antwort innerhalb von 48 Stunden.',
    'sup.mailGo': 'E-Mail schreiben →',
    'sup.faq': 'Häufige Fragen',
    'sup.q1': 'Wie bekomme ich meine Discord-Vorlage?',
    'sup.a1': 'Tritt unserem Discord-Server bei und gib <code>/redeem</code> mit der Bestellnummer aus deiner Bestellbestätigung und deiner E-Mail-Adresse ein. Unser Bot schickt dir dann Vorlagen-Link und Anleitung per Direktnachricht.',
    'sup.q2': 'Der Bot findet meine Bestellung nicht.',
    'sup.a2': 'Prüfe, ob Bestellnummer und E-Mail genau wie bei deinem Kauf eingegeben sind. Klappt es dann immer noch nicht, öffne auf Discord ein Ticket mit deiner Bestellnummer.',
    'sup.q3': 'Was brauche ich, um den Bot-Code zu nutzen?',
    'sup.a3': 'Einen PC, Raspberry Pi oder VPS, der online bleibt, und Node.js oder Python, wie beim Produkt angegeben. Die kostenlose Anleitung führt dich durch jeden Schritt.',
    'sup.q4': 'Kann ich digitale Produkte zurückgeben?',
    'sup.a4': 'Digitale Produkte werden sofort geliefert. Stimmst du dem an der Kasse zu, endet dein Widerrufsrecht mit Beginn der Lieferung. Funktioniert etwas nicht wie beschrieben, melde dich bei uns und wir finden eine Lösung.',
    'sup.q5': 'Ich habe eine Frage zu meiner Merch-Bestellung.',
    'sup.a5': 'Merch wird nach Bestellung gedruckt. Infos zur Lieferung findest du auf der <a href="drp-shop/versand-zahlung.html">Versandseite</a>. Für alles andere schreib uns mit deiner Bestellnummer.',
    'sup.q6': 'Darf ich Vorlagen oder Code weiterverkaufen?',
    'sup.a6': 'Nein. Käufe gelten für deine eigenen Server und Projekte. Weiterverkauf oder Weitergabe ist nicht erlaubt.'
  };

  const KEY = 'hv-lang';
  let lang = 'en';
  try {
    const q = new URLSearchParams(location.search).get('lang');
    const s = (q || localStorage.getItem(KEY) || '').toLowerCase();
    if (s === 'de' || s === 'en') lang = s;
  } catch (e) {}

  const subs = [];
  const t = (k, fallback) => (lang === 'de' && DE[k] != null) ? DE[k] : (fallback ?? k);

  function apply() {
    const root = document.documentElement;
    root.lang = lang;
    if (root.dataset.titleEn === undefined) root.dataset.titleEn = document.title;
    const tDe = document.body && document.body.dataset.titleDe;
    document.title = (lang === 'de' && tDe) ? tDe : root.dataset.titleEn;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      const k = el.dataset.i18n;
      el.innerHTML = (lang === 'de' && DE[k] != null) ? DE[k] : el.dataset.en;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder;
      const k = el.dataset.i18nPh;
      el.placeholder = (lang === 'de' && DE[k] != null) ? DE[k] : el.dataset.enPh;
    });
    document.querySelectorAll('.lang-switch button').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });
  }

  function setLang(l) {
    if (l !== 'en' && l !== 'de') return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply();
    subs.forEach(f => { try { f(l); } catch (e) {} });
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('.lang-switch button');
    if (b) setLang(b.dataset.lang);
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();

  return { get lang() { return lang; }, t, apply, setLang, onChange: f => subs.push(f) };
})();
