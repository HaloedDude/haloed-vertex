/* =========================================================
   D:RP SHOP  |  Alle Einstellungen und Produkte
   Hier änderst du Preise, Bilder und die Shopify-Verknüpfung.
   Sonst musst du in keiner anderen Datei etwas anfassen.
   ========================================================= */
const SHOP = {
  /* ---------- Shopify ----------
     Deine Shopify-Adresse, z. B. "drp-shop.myshopify.com".
     Solange hier nichts steht, zeigen die Produkte "Bald verfügbar". */
  shopifyDomain: "",

  /* ---------- Steuern ----------
     true  = Kleinunternehmer (§ 19 UStG), es wird keine Umsatzsteuer ausgewiesen
     false = Preise enthalten 19 % MwSt. */
  kleinunternehmer: true,

  /* ---------- Versand (muss zu deinen Shopify-Versandeinstellungen passen) ---------- */
  versandLand: "Deutschland und Österreich",
  versandkosten: 5.90,          // Pauschale pro Bestellung in Euro
  versandfreiAb: null,          // z. B. 60 für versandkostenfrei ab 60 €, sonst null
  lieferzeit: "5 bis 8 Werktage",
  lieferzeitInfo: "Jedes Teil wird erst nach deiner Bestellung für dich gedruckt (ca. 1 bis 3 Werktage). Danach geht es per Paketdienst mit Sendungsverfolgung zu dir (ca. 4 bis 5 Werktage).",

  /* ---------- Zahlungsarten (so, wie du sie in Shopify freischaltest) ---------- */
  zahlungsarten: ["PayPal", "Kredit- und Debitkarte", "Apple Pay", "Google Pay", "Klarna"],

  /* ---------- Größentabellen (Maße am flach liegenden Teil, in cm) ----------
     Werte nach Herstellerangaben (Gildan 18500 / 18000).
     Hoodie mit Gelatos Größentabelle abgeglichen (15.11.2026). */
  groessen: {
    hoodie: {
      name: "Hoodie (Gildan Heavy Blend 18500)",
      spalten: ["Größe", "Körpergröße ca.", "Breite (A)", "Länge (B)", "Ärmel (C)"],
      zeilen: [
        ["S",   "155 bis 170", 51, 69, 85],
        ["M",   "170 bis 178", 56, 71, 88],
        ["L",   "178 bis 185", 61, 74, 90],
        ["XL",  "185 bis 191", 66, 76, 93],
        ["XXL", "191 bis 196", 71, 79, 95],
        ["3XL", "ab 196",      76, 81, 98]
      ]
    },
    tshirt: {
      name: "T-Shirt (Gildan Heavy Cotton 5000)",
      spalten: ["Größe", "Körpergröße ca.", "Breite (A)", "Länge (B)"],
      zeilen: [
        ["S",   "155 bis 170", 46, 71],
        ["M",   "170 bis 178", 51, 74],
        ["L",   "178 bis 185", 56, 76],
        ["XL",  "185 bis 191", 61, 79],
        ["XXL", "191 bis 196", 66, 81],
        ["3XL", "ab 196",      71, 84]
      ]
    },
    sweatshirt: {
      name: "Sweatshirt (Gildan Heavy Blend 18000)",
      spalten: ["Größe", "Körpergröße ca.", "Breite (A)", "Länge (B)", "Ärmel (C)"],
      zeilen: [
        ["S",   "155 bis 168", 51, 69, 85],
        ["M",   "168 bis 176", 56, 71, 88],
        ["L",   "176 bis 184", 61, 74, 90],
        ["XL",  "184 bis 190", 66, 76, 93],
        ["XXL", "190 bis 196", 71, 79, 95],
        ["3XL", "ab 196",      76, 81, 98]
      ]
    }
  },

  /* ---------- Produkte ----------
     tragebilder: Fotos mit Personen (aus Gelato), erscheinen nach Vorne/Hinten in der Galerie.
     preis: Verkaufspreis in Euro
     varianten: Shopify-Varianten-ID je Farbe und Größe (Zahl aus Shopify, siehe Anleitung).
     Leere IDs = diese Variante ist noch nicht kaufbar.
     tragebild: optionales Foto einer Person mit dem Produkt (aus dem Gelato-Mockup-Generator). */
  produkte: [
    {
      id: "hoodie",
      name: "D:RP Hoodie",
      kurz: "Kapuzenpulli mit Logo auf der Brust und großem Wappen mit Schriftzug auf dem Rücken.",
      preis: 44.99,
      preisJeGroesse: { "S": 44.99, "M": 44.99, "L": 44.99, "XL": 44.99, "XXL": 47.99, "3XL": 49.99 },
      groessentabelle: "hoodie",
      farben: {
        schwarz: { name: "Schwarz", hex: "#1c1c1e", bilder: ["img/hoodie-schwarz-vorne.jpg", "img/hoodie-schwarz-hinten.jpg"], tragebilder: ["img/hoodie-schwarz-getragen.jpg", "img/hoodie-schwarz-getragen-hinten.jpg", "img/hoodie-schwarz-getragen-2.jpg", "img/hoodie-schwarz-getragen-3.jpg"] },
        weiss:   { name: "Weiß",    hex: "#f4f4f2", bilder: ["img/hoodie-weiss-vorne.jpg",   "img/hoodie-weiss-hinten.jpg"],   tragebilder: ["img/hoodie-weiss-getragen.jpg", "img/hoodie-weiss-getragen-hinten.jpg", "img/hoodie-weiss-getragen-2.jpg", "img/hoodie-weiss-getragen-3.jpg"] }
      },
      groessenListe: ["S", "M", "L", "XL", "XXL", "3XL"],
      varianten: {
        /* Beispiel: "schwarz-M": "45123456789012", */
      },
      beschreibung: [
        "Der offizielle Hoodie für alle aus der Deutschland Roleplay Community. Vorne sitzt das D:RP Logo klein auf der linken Brust, hinten das große Wappen mit Skyline, Flagge und dem Schriftzug „Deutschland Roleplay“.",
        "Schön dick und warm, mit doppellagiger Kapuze, Kordel und Kängurutasche. Unisex geschnitten, also für alle gleich."
      ],
      details: [
        "50 % Baumwolle, 50 % Polyester",
        "Mittelschwerer Stoff, ca. 270 g/m²",
        "Doppellagige Kapuze mit Kordel, Kängurutasche",
        "Druck vorne (Brust links) und hinten (groß)",
        "Unisex, normale Passform"
      ],
      pflege: "Auf links drehen, bei 30 °C waschen, nicht in den Trockner, nicht direkt auf dem Druck bügeln."
    },
    {
      id: "sweatshirt",
      name: "D:RP Sweatshirt",
      kurz: "Pulli ohne Kapuze mit Logo auf der Brust und großem Wappen mit Schriftzug auf dem Rücken.",
      preis: 39.99,
      preisJeGroesse: { "S": 39.99, "M": 39.99, "L": 39.99, "XL": 39.99, "XXL": 42.99, "3XL": 44.99 },
      groessentabelle: "sweatshirt",
      farben: {
        schwarz: { name: "Schwarz", hex: "#1c1c1e", bilder: ["img/sweatshirt-schwarz-vorne.jpg", "img/sweatshirt-schwarz-hinten.jpg"], tragebilder: ["img/sweatshirt-schwarz-getragen.jpg", "img/sweatshirt-schwarz-getragen-hinten.jpg", "img/sweatshirt-schwarz-getragen-2.jpg"] },
        weiss:   { name: "Weiß",    hex: "#f4f4f2", bilder: ["img/sweatshirt-weiss-vorne.jpg",   "img/sweatshirt-weiss-hinten.jpg"], tragebilder: ["img/sweatshirt-weiss-getragen.jpg", "img/sweatshirt-weiss-getragen-hinten.jpg", "img/sweatshirt-weiss-getragen-2.jpg"] }
      },
      groessenListe: ["S", "M", "L", "XL", "XXL", "3XL"],
      varianten: {},
      beschreibung: [
        "Der klassische Rundhals-Pulli im D:RP Look. Vorne das Logo klein auf der linken Brust, hinten das große Wappen mit dem Schriftzug „Deutschland Roleplay“.",
        "Weich, warm und ohne Kapuze, perfekt für Schule, Zocken oder unterwegs."
      ],
      details: [
        "50 % Baumwolle, 50 % Polyester",
        "Mittelschwerer Stoff, ca. 270 g/m²",
        "Rundhalsausschnitt, Rippbündchen an Ärmeln und Saum",
        "Druck vorne (Brust links) und hinten (groß)",
        "Unisex, normale Passform"
      ],
      pflege: "Auf links drehen, bei 30 °C waschen, nicht in den Trockner, nicht direkt auf dem Druck bügeln."
    },
    {
      id: "tshirt",
      name: "D:RP T-Shirt",
      kurz: "Schweres Baumwoll-Shirt mit Logo auf der Brust und großem Wappen mit Schriftzug auf dem Rücken.",
      preis: 29.99,
      groessentabelle: "tshirt",
      farben: {
        schwarz: { name: "Schwarz", hex: "#1c1c1e", bilder: ["img/tshirt-schwarz-vorne.jpg", "img/tshirt-schwarz-hinten.jpg"], tragebilder: ["img/tshirt-schwarz-getragen.jpg", "img/tshirt-schwarz-getragen-hinten.jpg", "img/tshirt-schwarz-getragen-2.jpg"] },
        weiss:   { name: "Weiß",    hex: "#f4f4f2", bilder: ["img/tshirt-weiss-vorne.jpg",   "img/tshirt-weiss-hinten.jpg"],   tragebilder: ["img/tshirt-weiss-getragen.jpg", "img/tshirt-weiss-getragen-hinten.jpg", "img/tshirt-weiss-getragen-2.jpg"] }
      },
      groessenListe: ["S", "M", "L", "XL", "XXL", "3XL"],
      varianten: {},
      beschreibung: [
        "Das D:RP Shirt für jeden Tag. Vorne das Logo klein auf der linken Brust, hinten das große Wappen mit dem Schriftzug „Deutschland Roleplay“.",
        "Aus dicker, robuster Baumwolle, die auch nach vielen Wäschen in Form bleibt."
      ],
      details: [
        "Schwere Baumwolle, robust und langlebig",
        "Rundhalsausschnitt",
        "Druck vorne (Brust links) und hinten (groß)",
        "Unisex, normale Passform"
      ],
      pflege: "Auf links drehen, bei 30 °C waschen, nicht in den Trockner, nicht direkt auf dem Druck bügeln."
    },
    {
      id: "tasse",
      name: "D:RP Tasse",
      kurz: "Weiße Keramiktasse mit dem D:RP Wappen.",
      preis: 17.99,
      farben: {
        weiss: { name: "Weiß", hex: "#ffffff", bilder: ["img/tasse.jpg", "img/tasse-rechts.jpg"], tragebilder: ["img/tasse-szene.jpg"] }
      },
      groessenListe: ["325 ml"],
      varianten: {},
      beschreibung: [
        "Für den Kakao beim Zocken oder den Kaffee beim Moderieren: die D:RP Tasse mit dem Wappen in voller Farbe."
      ],
      details: [
        "Keramik, weiß glänzend",
        "Füllmenge 325 ml (11 oz)",
        "Motiv auf beiden Seiten"
      ],
      pflege: "Damit der Druck lange schön bleibt, am besten von Hand spülen."
    }

  ]
};
