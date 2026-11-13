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
      name: "Be a Stone!",
      status: "Released",
      live: true,
      image: "BaS.png",
      link: "https://www.roblox.com/games/75183517512024/Be-a-Stone",
      button: "Play Now"
    },
    {
      name: "President for 5 Minutes",
      status: "Released",
      live: true,
      image: "Pf5M.png",
      link: "https://www.roblox.com/games/91922845881273/President-for-5-Minutes",
      button: "Play Now"
    },
    {
      name: "TaskForce Germany: MilSim",
      status: "Coming Soon",
      live: false,
      image: "TaskForce.png",
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
      description: "We empower talented developers and creative studios by providing capital, marketing backing, and strategic direction to bring high-potential experiences to life.",
      image: "HVLogo.jpg",
      link: "https://www.roblox.com/communities/199941252/Haloed-Vertex#!/about"
    },
    {
      name: "Demon Lemon Studio",
      role: "Game Development",
      description: "The in house game studio of Haloed Vertex. We design, build and run our own Roblox experiences, from first idea to live updates.",
      image: "DLStudio.jpg",
      link: "https://www.roblox.com/communities/149381929/Demon-Lemon-Studio#!/about"
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
      name: "Haloed Vertex",
      subtitle: "Main Community",
      image: "HVLogo.jpg",
      invite: "https://discord.gg/aYgCZS64CK"
    },
    {
      name: "Demon Lemon Studio",
      subtitle: "Game Development",
      image: "DLStudio.jpg",
      invite: "https://discord.gg/WX3bDvw3QJ"
    },
  ],

};
