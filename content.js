/* =====================================================================
   HALOED VERTEX  |  INHALTE DER WEBSITE
   ---------------------------------------------------------------------
   Hier trägst du Spiele, Roblox Gruppen und Discord Server ein.
   Du musst NUR diese Datei bearbeiten, die Seiten bauen sich automatisch.

   Regeln:
   - Jeder Eintrag steht in { geschweiften Klammern } und endet mit einem Komma.
   - Texte immer in "Anführungszeichen".
   - Neuer Eintrag: einen kompletten Block kopieren, darunter einfügen, ändern.
   - Eintrag löschen: den kompletten Block von { bis }, löschen.
   - Bilder einfach in denselben Ordner wie diese Datei kopieren und bei
     image nur den Dateinamen eintragen, z.B. image: "mein-spiel.png".
     Fehlt das Bild, zeigt die Seite automatisch einen Platzhalter.
   ===================================================================== */

const SITE = {

  /* ------------------------------------------------------------------
     ROBLOX SPIELE  (Seite robloxgames.html)
     name    = Name des Spiels
     status  = kleiner Text unter dem Bild, z.B. "Released", "In Development"
     live    = true -> grüner Punkt, false -> goldener Punkt
     image   = Bild im Querformat 4:3 (z.B. 1200x900)
     link    = Roblox Link zum Spiel. Leer lassen ("") = Button "Coming Soon"
     button  = Text auf dem Button, z.B. "Play Now"
     ------------------------------------------------------------------ */
  games: [
    {
      name: "Game Name 1",
      status: "Released",
      live: true,
      image: "game-1.png",
      link: "",
      button: "Play Now"
    },
    {
      name: "Game Name 2",
      status: "In Development",
      live: false,
      image: "game-2.png",
      link: "",
      button: "Play Now"
    },
    {
      name: "Game Name 3",
      status: "Coming Soon",
      live: false,
      image: "game-3.png",
      link: "",
      button: "Play Now"
    },
  ],

  /* ------------------------------------------------------------------
     ROBLOX GRUPPEN  (Seite robloxgroups.html)
     name        = Name der Gruppe
     role        = kurze Zeile in Rot unter dem Namen
     description = 1 bis 2 Sätze
     image       = Logo, quadratisch (z.B. 512x512)
     link        = Roblox Link zur Gruppe. Leer lassen = kein Button
     ------------------------------------------------------------------ */
  groups: [
    {
      name: "Haloed Vertex",
      role: "Investment & Growth",
      description: "Short description of the group.",
      image: "HV.png",
      link: "https://www.roblox.com/communities/199941252/Haloed-Vertex#!/about"
    },
    {
      name: "Group Name 2",
      role: "Game Development",
      description: "Short description of the group.",
      image: "group-2.png",
      link: ""
    },
  ],

  /* ------------------------------------------------------------------
     DISCORD SERVER  (Seite discord.html)
     name     = Name des Servers
     subtitle = kleine Zeile unter dem Namen
     image    = Server Icon, quadratisch (z.B. 512x512)
     invite   = Einladungslink, z.B. "https://discord.gg/abc123".
                Leer lassen = Join Button ausgegraut
     ------------------------------------------------------------------ */
  discord: [
    {
      name: "Server Name 1",
      subtitle: "Main Community",
      image: "server-1.png",
      invite: ""
    },
    {
      name: "Server Name 2",
      subtitle: "Support",
      image: "server-2.png",
      invite: ""
    },
    {
      name: "Server Name 3",
      subtitle: "Roleplay",
      image: "server-3.png",
      invite: ""
    },
  ],

};
