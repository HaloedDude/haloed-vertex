/* =====================================================================
   HALOED VERTEX  |  PRODUKTE DES MARKTPLATZES
   ---------------------------------------------------------------------
   Hier trägst du alle Produkte ein. Die Seiten bauen sich automatisch.

   cat       = Bereich: "templates" (Discord-Vorlagen), "bots" (einzelne
               Bots), "bundles" (Bot-Bundles), "websites" (Website-Vorlagen)
   featured  = true -> erscheint zusätzlich auf der Startseite
   icon      = "grid", "code", "box" oder "globe"
   badge     = kleines Etikett oben rechts (leer lassen = keins)
   name, desc, features = Texte auf Englisch (en) und Deutsch (de)
   price     = Preis in Euro, z.B. 9.99
   oldPrice  = durchgestrichener Preis (nur bei Bundles), sonst weglassen
   variantId = Shopify-Varianten-ID. Leer ("") = Button "Bald verfügbar".
               Sobald das Produkt in Shopify angelegt ist, hier die ID
               eintragen, dann wird daraus automatisch "Jetzt kaufen".
   ===================================================================== */

const STORE = {
  shopifyDomain: "rhxase-g0.myshopify.com",
  email: "support@haloedvertex.com",
  discordInvite: "https://discord.gg/aYgCZS64CK",

  products: [

    /* ---------------- DISCORD-VORLAGEN ---------------- */
    {
      id: "tpl-roleplay", cat: "templates", featured: true, icon: "grid",
      badge: { en: "Bestseller", de: "Bestseller" },
      name: { en: "Roleplay Server", de: "Roleplay-Server" },
      desc: {
        en: "A complete roleplay structure with factions, departments, applications and staff areas.",
        de: "Komplette Roleplay-Struktur mit Fraktionen, Abteilungen, Bewerbungen und Teambereichen."
      },
      features: {
        en: ["60+ channels in clear categories", "35+ roles with permissions", "Rules, info and ticket channels", "Built for ER:LC and Roblox RP"],
        de: ["60+ Kanäle in klaren Kategorien", "35+ Rollen mit Rechten", "Regel-, Info- und Ticketkanäle", "Gemacht für ER:LC und Roblox-RP"]
      },
      price: 9.99, variantId: ""
    },
    {
      id: "tpl-gaming", cat: "templates", icon: "grid", badge: "",
      name: { en: "Gaming Community", de: "Gaming-Community" },
      desc: {
        en: "Everything a gaming community needs, from LFG channels to events and clips.",
        de: "Alles, was eine Gaming-Community braucht, von LFG-Kanälen bis zu Events und Clips."
      },
      features: {
        en: ["40+ channels", "Self roles for games and platforms", "Event, clips and LFG areas", "Moderation team area"],
        de: ["40+ Kanäle", "Selbstrollen für Spiele und Plattformen", "Event-, Clip- und LFG-Bereiche", "Bereich fürs Moderationsteam"]
      },
      price: 7.99, variantId: ""
    },
    {
      id: "tpl-support", cat: "templates", icon: "grid", badge: "",
      name: { en: "Support & Business", de: "Support & Business" },
      desc: {
        en: "A clean server for customer support, product updates and your team.",
        de: "Ein aufgeräumter Server für Kundensupport, Produktupdates und dein Team."
      },
      features: {
        en: ["Ticket categories ready to use", "Announcements and changelog", "Customer and staff roles", "Private team area"],
        de: ["Fertige Ticket-Kategorien", "Ankündigungen und Changelog", "Kunden- und Teamrollen", "Privater Teambereich"]
      },
      price: 7.99, variantId: ""
    },
    {
      id: "tpl-roleplay-bots", cat: "templates", featured: true, icon: "box",
      badge: { en: "Premium", de: "Premium" },
      name: { en: "Roleplay Server + Bot Setup", de: "Roleplay-Server + Bot-Setup" },
      desc: {
        en: "The Roleplay Server template plus our RP Essentials bot bundle, preconfigured for exactly this server.",
        de: "Die Roleplay-Server-Vorlage plus unser RP-Essentials-Bot-Bundle, fertig eingestellt für genau diesen Server."
      },
      features: {
        en: ["Everything in Roleplay Server", "Ticket, application and duty bot code", "Config files matching all channels and roles", "Free setup guide"],
        de: ["Alles aus Roleplay-Server", "Code für Ticket-, Bewerbungs- und Dienst-Bot", "Konfiguration passend zu allen Kanälen und Rollen", "Kostenlose Einrichtungsanleitung"]
      },
      price: 29.99, oldPrice: 44.98, variantId: ""
    },

    /* ---------------- EINZELNE BOTS ---------------- */
    {
      id: "bot-ticket", cat: "bots", icon: "code", badge: "",
      name: { en: "Ticket Bot", de: "Ticket-Bot" },
      desc: { en: "Support tickets with buttons, categories and transcripts.", de: "Support-Tickets mit Buttons, Kategorien und Verläufen." },
      features: {
        en: ["Ticket panel with buttons", "Multiple categories", "Transcripts as file", "Node.js 18+"],
        de: ["Ticket-Panel mit Buttons", "Mehrere Kategorien", "Verlauf als Datei", "Node.js 18+"]
      },
      price: 14.99, variantId: ""
    },
    {
      id: "bot-application", cat: "bots", icon: "code", badge: "",
      name: { en: "Application Bot", de: "Bewerbungs-Bot" },
      desc: { en: "Applications via forms, reviewed with one click.", de: "Bewerbungen per Formular, mit einem Klick bearbeitet." },
      features: {
        en: ["Forms via Discord pop ups", "Accept and decline buttons", "Automatic roles", "Node.js 18+"],
        de: ["Formulare als Discord-Pop-ups", "Annehmen- und Ablehnen-Buttons", "Automatische Rollen", "Node.js 18+"]
      },
      price: 14.99, variantId: ""
    },
    {
      id: "bot-duty", cat: "bots", icon: "code", badge: { en: "RP", de: "RP" },
      name: { en: "Duty & Service Number Bot", de: "Dienst- & Dienstnummer-Bot" },
      desc: { en: "Clock in and out, track duty time and assign service numbers.", de: "Ein- und Ausstempeln, Dienstzeiten erfassen und Dienstnummern vergeben." },
      features: {
        en: ["Clock in and out buttons", "Weekly duty time stats", "Service number registry", "Node.js 18+"],
        de: ["Buttons zum Ein- und Ausstempeln", "Wöchentliche Dienstzeit-Statistik", "Dienstnummer-Verwaltung", "Node.js 18+"]
      },
      price: 14.99, variantId: ""
    },
    {
      id: "bot-moderation", cat: "bots", icon: "code", badge: "",
      name: { en: "Moderation & Logs Bot", de: "Moderations- & Log-Bot" },
      desc: { en: "Warnings, timeouts and bans with complete logs.", de: "Verwarnungen, Timeouts und Banns mit vollständigen Logs." },
      features: {
        en: ["Warn, timeout, kick, ban", "Message and member logs", "Word filter", "Node.js 18+"],
        de: ["Verwarnen, Timeout, Kick, Bann", "Nachrichten- und Mitglieder-Logs", "Wortfilter", "Node.js 18+"]
      },
      price: 12.99, variantId: ""
    },
    {
      id: "bot-welcome", cat: "bots", icon: "code", badge: "",
      name: { en: "Welcome & Verify Bot", de: "Willkommens- & Verify-Bot" },
      desc: { en: "Welcome messages, auto roles and a verification button.", de: "Willkommensnachrichten, Auto-Rollen und Verifizierungs-Button." },
      features: {
        en: ["Welcome card with avatar", "Auto roles", "Verification button", "Node.js 18+"],
        de: ["Willkommenskarte mit Avatar", "Auto-Rollen", "Verifizierungs-Button", "Node.js 18+"]
      },
      price: 7.99, variantId: ""
    },

    /* ---------------- BOT-BUNDLES ---------------- */
    {
      id: "bundle-rp", cat: "bundles", featured: true, icon: "box",
      badge: { en: "Save 22 %", de: "22 % sparen" },
      name: { en: "RP Essentials Bundle", de: "RP-Essentials-Bundle" },
      desc: { en: "The three bots every roleplay server needs.", de: "Die drei Bots, die jeder Roleplay-Server braucht." },
      features: {
        en: ["Ticket Bot", "Application Bot", "Duty & Service Number Bot", "One shared setup guide"],
        de: ["Ticket-Bot", "Bewerbungs-Bot", "Dienst- & Dienstnummer-Bot", "Eine gemeinsame Anleitung"]
      },
      price: 34.99, oldPrice: 44.97, variantId: ""
    },
    {
      id: "bundle-community", cat: "bundles", icon: "box",
      badge: { en: "Save 22 %", de: "22 % sparen" },
      name: { en: "Community Starter Bundle", de: "Community-Starter-Bundle" },
      desc: { en: "Support, moderation and onboarding in one package.", de: "Support, Moderation und Onboarding in einem Paket." },
      features: {
        en: ["Ticket Bot", "Moderation & Logs Bot", "Welcome & Verify Bot", "One shared setup guide"],
        de: ["Ticket-Bot", "Moderations- & Log-Bot", "Willkommens- & Verify-Bot", "Eine gemeinsame Anleitung"]
      },
      price: 27.99, oldPrice: 35.97, variantId: ""
    },
    {
      id: "bundle-all", cat: "bundles", icon: "box",
      badge: { en: "Best value", de: "Bester Preis" },
      name: { en: "Complete Bundle", de: "Komplett-Bundle" },
      desc: { en: "All five bots at the best price.", de: "Alle fünf Bots zum besten Preis." },
      features: {
        en: ["All 5 bots", "Future updates included", "One shared setup guide", "Priority support"],
        de: ["Alle 5 Bots", "Zukünftige Updates inklusive", "Eine gemeinsame Anleitung", "Bevorzugter Support"]
      },
      price: 49.99, oldPrice: 65.95, variantId: ""
    },

    /* ---------------- WEBSITE-VORLAGEN ---------------- */
    {
      id: "web-community", cat: "websites", featured: true, icon: "globe", badge: "",
      name: { en: "Community Website", de: "Community-Website" },
      desc: { en: "A landing page for your Discord or Roblox community.", de: "Eine Startseite für deine Discord- oder Roblox-Community." },
      features: {
        en: ["Hero, team, rules and join buttons", "Mobile friendly", "Free hosting with GitHub Pages", "HTML, CSS, JavaScript"],
        de: ["Startbereich, Team, Regeln und Beitreten-Buttons", "Für Handy optimiert", "Kostenlos hostbar mit GitHub Pages", "HTML, CSS, JavaScript"]
      },
      price: 19.99, variantId: ""
    },
    {
      id: "web-portfolio", cat: "websites", icon: "globe", badge: "",
      name: { en: "Creator Portfolio", de: "Creator-Portfolio" },
      desc: { en: "Show your projects, games and socials on one page.", de: "Zeig deine Projekte, Spiele und Socials auf einer Seite." },
      features: {
        en: ["Project and game gallery", "About and contact section", "Easy to edit text file", "HTML, CSS, JavaScript"],
        de: ["Projekt- und Spielegalerie", "Über-mich- und Kontaktbereich", "Inhalte in einer einfachen Datei", "HTML, CSS, JavaScript"]
      },
      price: 14.99, variantId: ""
    },
    {
      id: "web-shop", cat: "websites", icon: "globe", badge: { en: "New", de: "Neu" },
      name: { en: "Merch Shop Page", de: "Merch-Shopseite" },
      desc: { en: "The shop system behind the D:RP Shop, with cart and Shopify checkout.", de: "Das Shopsystem hinter dem D:RP Shop, mit Warenkorb und Shopify-Kasse." },
      features: {
        en: ["Product pages with sizes and colors", "Cart and size guide", "Shopify checkout links", "Legal page templates (German)"],
        de: ["Produktseiten mit Größen und Farben", "Warenkorb und Größenberater", "Shopify-Kassenlinks", "Vorlagen für Rechtstexte (Deutsch)"]
      },
      price: 24.99, variantId: ""
    }
  ]
};
