import type { Question } from "./types";

/**
 * Modul 3 – Kamera konfigurieren
 * Quellen: Alte Moodle-Sektionen 7 (Menü), 8 (Richtig Belichten),
 * 9 (Richtig Fokussieren FX30), 10 (Manueller Weißabgleich).
 */
export const modul3Fragen: Question[] = [
  {
    id: "m3-1",
    modul: 3,
    type: "single",
    frage:
      "Welche Belichtungszeit ist bei 25 fps üblich – und warum?",
    optionen: [
      "1/50 s – im Nenner das Doppelte der Bilderzahl, für gewohnte Bewegungsunschärfe",
      "1/25 s – exakt eine Belichtung pro Bild",
      "1/100 s – je kürzer, desto schärfer, desto besser",
      "1/33 s – ein Drittel mehr als die Bilderzahl",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Faustregel „doppelte Bilderzahl im Nenner“ – bei 25 fps also 1/50 s. Das erzeugt die cinematisch gewohnte Bewegungsunschärfe.",
    feedbackFalsch:
      "Die Faustregel lautet: Belichtungszeit = 1 / (2 × Bilderzahl). Bei 25 fps also 1/50 s – kürzere Zeiten wirken stroboskopisch, längere verschmieren die Bewegung.",
  },
  {
    id: "m3-2",
    modul: 3,
    type: "single",
    frage: "Welche Bilderzahl (Framerate) ist in Europa üblich?",
    optionen: ["25p", "30p", "24p", "50i ausschließlich"],
    richtig: 0,
    feedbackRichtig:
      "Richtig: In Europa sind 25 Bilder pro Sekunde (25p) der Standard für normale Aufnahmen ohne Zeitlupe/Zeitraffer.",
    feedbackFalsch:
      "In Europa gilt 25p als Standard (angelehnt an das 50-Hz-Stromnetz). 30p/24p sind US- bzw. Kino-Standards – für gewöhnliche Aufnahmen hier stellst du 25p ein.",
  },
  {
    id: "m3-3",
    modul: 3,
    type: "single",
    frage:
      "Wie veränderst du Shutter, Blende und ISO an der FX30 im Betrieb manuell?",
    optionen: [
      "Über die drei Drehräder am Kamerabody",
      "Nur über das Touch-Menü unter „Belichtung“",
      "Über die Zoomwippe bei gedrückter Fn-Taste",
      "Gar nicht – im Videomodus regelt das immer die Automatik",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Die drei Drehräder sind dafür da. Beim Setup prüfst du, dass Blende, ISO und Belichtungszeit auf manuell stehen und sich über die Räder verstellen lassen.",
    feedbackFalsch:
      "An der FX30 verstellst du die „Big 3“ der Belichtung direkt über die drei Drehräder am Body – der Weg übers Menü wäre am Set viel zu langsam.",
  },
  {
    id: "m3-4",
    modul: 3,
    type: "match",
    frage: "Ordne den Codec dem passenden Einsatzzweck zu:",
    paare: [
      { links: "XAVC S HD (4:2:0, 8 bit)", rechts: "Übungen im Unterricht" },
      {
        links: "XAVC S 4K (4:2:2, 10 bit)",
        rechts: "dokumentarische / längere Studienarbeiten mit Interviews",
      },
      {
        links: "XAVC S-I 4K (Intra, 4:2:2, 10 bit)",
        rechts: "Imagefilme und szenische Drehs",
      },
      {
        links: "XAVC S-I DCI 4K (4096×2160)",
        rechts: "szenische Drehs mit Auswertung im Kino",
      },
    ],
    feedbackRichtig:
      "Sauber zugeordnet – die Codec-Wahl folgt dem Projekt: je hochwertiger die Auswertung, desto höher Datenrate, Farbabtastung und Farbtiefe.",
    feedbackFalsch:
      "Merkhilfe: Von Übung zu Kino steigen Datenrate und Qualität. HD/8bit für Übungen, 4K LongGOP für Doku/Interview, S-I (Intra) für szenisch/Image, DCI-4K für Kino.",
  },
  {
    id: "m3-5",
    modul: 3,
    type: "single",
    frage: "Was ist der wesentliche Nachteil eines ALL-I-Codecs (Intra)?",
    optionen: [
      "Deutlich höhere Datenrate – die Dateien werden groß",
      "Er lässt sich nicht in Schnittprogrammen öffnen",
      "Er ist auf 8 bit Farbtiefe begrenzt",
      "Er funktioniert nur mit Zeitlupenaufnahmen",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Intra-Codecs (an der FX30: XAVC S-I) komprimieren jedes Bild einzeln – das bringt Schnittkomfort und Qualität, kostet aber Datenrate (~250 Mbit/s bei 25 fps).",
    feedbackFalsch:
      "ALL-I/Intra heißt: jedes Einzelbild wird für sich komprimiert. Das schneidet sich leicht, erzeugt aber hohe Datenraten (XAVC S-I 4K: ~250 Mbit/s). Die ALL-I-Codecs der FX30 erkennst du am „-I“ im Namen.",
  },
  {
    id: "m3-6",
    modul: 3,
    type: "single",
    frage:
      "Wann ziehst du ein logarithmisches Bildprofil (S-Log3) einem REC709-Profil vor?",
    optionen: [
      "Wenn eine Postproduktion mit Color Grading folgt und du den größeren Dynamikumfang brauchst",
      "Wenn das Material sofort ohne Nachbearbeitung verwendet werden soll",
      "Wenn du bei einer Übung Zeit sparen willst",
      "Wenn du ausschließlich in HD aufnimmst",
    ],
    richtig: 0,
    feedbackRichtig:
      "Genau: Log lohnt sich, wenn gegradet wird – dann nutzt du bis zu 14 Blenden Dynamikumfang. Für sofort verwertbare Bilder (Übungen) bleibt REC709/PP11 die richtige Wahl.",
    feedbackFalsch:
      "Umgedreht: Log-Material ist flau und braucht zwingend Color Grading – dafür liefert es großen Dynamikumfang. Soll das Bild sofort verwendbar sein, nimmst du REC709 (z. B. PP11 Cinetone).",
  },
  {
    id: "m3-7",
    modul: 3,
    type: "gapfill",
    frage: "Dynamikumfang der Kamera je nach Bildprofil:",
    text: "In REC709 erfasst eine Kamera nur etwa ___ Blenden, die FX30 in S-Log3 dagegen bis zu ___ Blenden.",
    luecken: [
      { optionen: ["6–8", "2–3", "12–14"], richtig: 0 },
      { optionen: ["14", "8", "30"], richtig: 0 },
    ],
    feedbackRichtig:
      "Richtig: REC709 ≈ 6–8 Blenden, Log bis zu 14. Deshalb ist Log bei kontrastreichen Szenen im Vorteil – gegen die bis zu 30 Blenden der Natur kämpfen aber beide.",
    feedbackFalsch:
      "Die Größenordnungen: REC709 schafft 6–8 Blenden, die FX30 in S-Log3 bis zu 14. Richtig belichten heißt, den (oft größeren) Szenenkontrast in diesen Umfang einzupassen.",
  },
  {
    id: "m3-8",
    modul: 3,
    type: "single",
    frage: "Woran erkennst du am Sucherbild, dass du in LOG drehst?",
    optionen: [
      "Das Bild wirkt flau und kontrastarm (sofern keine Monitor-LUT aktiv ist)",
      "Das Bild ist schwarz-weiß",
      "Das Bild ist deutlich dunkler als die Szene",
      "Ein rotes „LOG“ blinkt über dem gesamten Display",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Log-Bilder sehen vor dem Grading flau und entsättigt aus. Achtung: Eine aktive Monitor-LUT kann das kaschieren – dann hilft der Blick ins Picture Profile.",
    feedbackFalsch:
      "Typisches Log-Merkmal ist das flaue, kontrastarme Bild – die Dynamik wird „flach“ gespeichert. Ein knackiges Bild spricht für REC709 oder eine eingeschaltete Monitor-LUT.",
  },
  {
    id: "m3-9",
    modul: 3,
    type: "single",
    frage: "Welche Farbtiefe wählst du bei einem logarithmischen Bildprofil?",
    optionen: [
      "10 bit (z. B. XAVC S 4K oder XAVC S-I)",
      "8 bit reicht immer",
      "12 bit RAW – anders geht Log nicht",
      "Die Farbtiefe ist bei Log egal",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Für Log-Aufzeichnung und Color Grading gehören 10 bit (und 4:2:2) dazu – sonst reißt das Material beim Graden auf (Banding).",
    feedbackFalsch:
      "Log presst einen großen Dynamikumfang in die Datei – mit nur 8 bit entstehen beim Grading Abrisse (Banding). Darum: bei Log immer einen 10-bit-Codec wählen (XAVC S 4K oder S-I).",
  },
  {
    id: "m3-10",
    modul: 3,
    type: "single",
    frage: "Du siehst kein Histogramm im Display. Was tust du?",
    optionen: [
      "Mehrmals die Disp-Taste drücken, bis die Anzeige mit Histogramm erscheint",
      "Die Kamera neu starten",
      "In den Foto-Modus wechseln – nur dort gibt es ein Histogramm",
      "Das Zebra einschalten, das ersetzt das Histogramm",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Die Disp-Taste schaltet die Display-Ansichten durch – eine davon enthält das Histogramm.",
    feedbackFalsch:
      "Kein Defekt, nur die falsche Display-Ansicht: An der FX30 drückst du mehrmals <Disp>, bis die Ansicht mit Histogramm erscheint.",
  },
  {
    id: "m3-11",
    modul: 3,
    type: "single",
    frage: "Wie belichtest du mithilfe des Histogramms richtig?",
    optionen: [
      "So einstellen, dass möglichst keine Bildanteile ganz links (schwarz) oder ganz rechts (weiß) anschlagen",
      "Der Berg muss immer exakt in der Mitte liegen",
      "Die Kurve soll möglichst flach sein",
      "Hauptsache, rechts ist mehr Fläche als links",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Links = dunkel, rechts = hell. Anschläge ganz außen bedeuten abgesoffene bzw. ausgefressene Bildteile. (Profis mit Postpro belichten zusätzlich „ETTR“ – hell, aber ohne Clipping.)",
    feedbackFalsch:
      "Das Histogramm zeigt die Helligkeitsverteilung aller Pixel: links dunkel, rechts hell. Es gibt keine „richtige Form“ – entscheidend ist, dass nichts ganz links (unterbelichtet) oder ganz rechts (überbelichtet) anschlägt.",
  },
  {
    id: "m3-12",
    modul: 3,
    type: "single",
    frage:
      "„Manual Metering“ (MM) empfiehlt dir MM 0.0 – warum kann diese Empfehlung trotzdem falsch sein?",
    optionen: [
      "Die Kamera vergleicht mit Neutralgrau – ein bildfüllend schwarzer oder weißer Vorhang würde damit mittelgrau abgebildet",
      "MM funktioniert nur bei Kunstlicht",
      "MM misst nur die Bildecken",
      "Die Anzeige reagiert zu langsam für Videoaufnahmen",
    ],
    richtig: 0,
    feedbackRichtig:
      "Genau: MM nimmt an, das Motiv sei im Schnitt neutralgrau. Bei sehr hellen oder sehr dunklen Motiven führt MM 0.0 deshalb zur Fehlbelichtung – die Kamera „weiß nicht“, was vor dem Objektiv ist.",
    feedbackFalsch:
      "Der Haken an MM: Es vergleicht den Bildausschnitt mit Neutralgrau. Ein weißer Vorhang würde bei MM 0.0 grau statt weiß – bei extremen Motiven musst du bewusst davon abweichen.",
  },
  {
    id: "m3-13",
    modul: 3,
    type: "gapfill",
    frage: "Belichten mit Zebra 70:",
    text: "Zebra 70 funktioniert nur in einem ___ -Bildprofil. Du erhöhst die Belichtung, bis helle Haut (z. B. die Stirn) das Zebra zeigt – Gesichter sollten nicht mehr als ___ Zebra aufweisen.",
    luecken: [
      { optionen: ["REC709", "S-Log3", "beliebigen"], richtig: 0 },
      { optionen: ["1/3", "2/3", "100 %"], richtig: 0 },
    ],
    feedbackRichtig:
      "Richtig: Die 70-%-Daumenregel gilt nur in REC709 – und das Zebra soll nur die hellsten Hautpartien (max. 1/3 des Gesichts) markieren.",
    feedbackFalsch:
      "Zwei Regeln: Zebra 70 setzt ein REC709-Profil voraus (in Log stimmen die Prozentwerte nicht), und richtig belichtet zeigt nur etwa 1/3 des Gesichts – die hellsten Stellen – das Zebra.",
  },
  {
    id: "m3-14",
    modul: 3,
    type: "truefalse",
    frage:
      "Zebra 100+ markiert die Bildbereiche, die 100 % Videopegel oder mehr erreichen – also an der Grenze zur Überbelichtung liegen.",
    richtig: true,
    feedbackRichtig:
      "Richtig. Ziel: Belichtung so wählen, dass möglichst nur bildunwichtige, kleine Bereiche schraffiert sind.",
    feedbackFalsch:
      "Doch, genau das tut Zebra 100+: Es schraffiert alles ab 100 % Videopegel (drohende Überbelichtung). Damit steuerst du, welche kleinen, unwichtigen Bereiche clippen dürfen.",
  },
  {
    id: "m3-15",
    modul: 3,
    type: "order",
    frage: "Bringe die 5-Schritt-Methode zum manuellen Fokussieren in die richtige Reihenfolge:",
    schritte: [
      "Blende aufmachen (geringere Schärfentiefe)",
      "Hinzoomen (längere Brennweite)",
      "Manuell scharfstellen",
      "Zurückzoomen",
      "Blende wieder schließen",
    ],
    feedbackRichtig:
      "Perfekt: Erst Schärfentiefe minimieren (Blende auf, hinzoomen), dann präzise scharfstellen, dann alles zurück. Voraussetzung: ein parfokales Zoomobjektiv.",
    feedbackFalsch:
      "Die Logik: Blende auf und hinzoomen machen die Schärfentiefe minimal – nur so sitzt der Fokus präzise. Danach in umgekehrter Reihenfolge zurück: rauszoomen, Blende schließen.",
  },
  {
    id: "m3-16",
    modul: 3,
    type: "single",
    frage:
      "Was ist die Voraussetzung dafür, dass die 3-Schritt-Methode (hinzoomen, scharfstellen, zurückzoomen) funktioniert?",
    optionen: [
      "Ein parfokales Zoomobjektiv, das die Schärfe beim Zoomen hält",
      "Ein besonders lichtstarkes Objektiv (f/1.8 oder besser)",
      "Ein aktivierter Autofokus im Hintergrund",
      "Ein eingeschaltetes Zebra",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Nur parfokale Objektive halten die Schärfe über den Zoombereich. Foto-Zooms sind das i. d. R. nicht – teste das beim Ausleihen mit einem Siemensstern.",
    feedbackFalsch:
      "Der Knackpunkt heißt „parfokal“: Das Objektiv muss die Schärfe beim Zoomen halten, sonst ist der Fokus nach dem Zurückzoomen wieder weg. Foto-Zoomobjektive erfüllen das meist nicht.",
  },
  {
    id: "m3-17",
    modul: 3,
    type: "single",
    frage: "Wann bietet sich „Focus Mag“ statt der 3-Schritt-Methode an?",
    optionen: [
      "Während einer laufenden Aufzeichnung, z. B. um im Interview den Fokus zu kontrollieren",
      "Nur bei Weitwinkelaufnahmen",
      "Wenn das Objektiv nicht parfokal, dafür aber ein Foto-Objektiv ist",
      "Wenn der Autofokus aktiviert ist",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Focus Mag vergrößert nur das Sucherbild – die Aufzeichnung bleibt unberührt. Die 3-/5-Schritt-Methode würde dagegen sichtbar ins aufgezeichnete Bild eingreifen.",
    feedbackFalsch:
      "Der Unterschied: Beim Zoomen der 3-Schritt-Methode zoomst du das AUFGEZEICHNETE Bild mit. Focus Mag vergrößert nur die Sucherdarstellung – deshalb ist es die Methode für laufende Aufnahmen.",
  },
  {
    id: "m3-18",
    modul: 3,
    type: "multiple",
    frage: "Was trifft auf „Peaking“ (Kantenanhebung) zu?",
    optionen: [
      "Scharfe, kontrastreiche Kanten werden im Sucher farbig hervorgehoben",
      "Es wird nur im Sucher angezeigt, nicht aufgezeichnet",
      "Bei kurzen Brennweiten (Weitwinkel) ist Peaking nicht verlässlich",
      "Peaking stellt automatisch scharf",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Alles richtig: Peaking ist eine reine Anzeigehilfe (Farbe einstellbar, Rot bewährt; geringe Empfindlichkeit liefert bessere Ergebnisse) – scharfstellen musst du selbst.",
    feedbackFalsch:
      "Peaking hebt scharfe Kanten nur ANZEIGEND hervor – es fokussiert nicht und wird nicht aufgezeichnet. Und Vorsicht im Weitwinkel: Dort zeigt Peaking Schärfe an, wo keine präzise ist.",
  },
  {
    id: "m3-19",
    modul: 3,
    type: "multiple",
    frage:
      "Welche Einstellungen sorgen dafür, dass du verlässlich mit dem Autofokus der FX30 arbeiten kannst?",
    optionen: [
      "Gesichtserkennung aktivieren",
      "Augenerkennung aktivieren und auf Mensch stellen",
      "Rahmen um fokussierte Gesichter/Augen anzeigen lassen, um den Fokus zu kontrollieren",
      "Fokus einmal setzen und dann nicht mehr kontrollieren – der AF ist zuverlässig genug",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Richtig: Gesichts- und Augenerkennung an, Kontrollrahmen einblenden – und trotzdem den Fokus ständig im Blick behalten.",
    feedbackFalsch:
      "Der AF der FX30 ist stark, aber kein Freifahrtschein: Gesichts- UND Augenerkennung gehören aktiviert, und mit dem eingeblendeten Rahmen kontrollierst du permanent, ob er auf dem richtigen Auge sitzt.",
  },
  {
    id: "m3-20",
    modul: 3,
    type: "single",
    frage: "Wann machst du einen (neuen) Weißabgleich?",
    optionen: [
      "Immer, wenn sich die Lichtsituation ändert (z. B. Wechsel von Tageslicht zu Kunstlicht)",
      "Nur einmal beim Ausleihen der Kamera",
      "Nur bei Aufnahmen in S-Log3",
      "Nur wenn das Bild zu dunkel ist",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Der Weißabgleich passt die Kamera an die Farbtemperatur des Lichts an – jede neue Lichtsituation braucht einen passenden (ggf. neuen manuellen) Weißabgleich.",
    feedbackFalsch:
      "Der Weißabgleich hat nichts mit Helligkeit zu tun, sondern mit der FARBE des Lichts. Er muss zur jeweiligen Lichtsituation passen – also bei jedem Lichtwechsel neu gewählt oder durchgeführt werden.",
  },
  {
    id: "m3-21",
    modul: 3,
    type: "single",
    frage:
      "Du machst einen manuellen Weißabgleich versehentlich auf ein rosafarbenes statt weißes Papier. Was passiert mit dem Bild?",
    optionen: [
      "Es bekommt einen grünlichen Farbstich",
      "Es bekommt einen noch stärkeren Rosastich",
      "Nichts – die Kamera erkennt, dass das Papier nicht weiß ist",
      "Das Bild wird insgesamt dunkler",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Die Kamera „neutralisiert“ das Rosa, indem sie in Richtung der Komplementärfarbe Grün verschiebt – alles Weiße im Bild wird dadurch grünlich.",
    feedbackFalsch:
      "Denk an die Gegenfarbe: Die Kamera hält das rosa Papier für weiß und kompensiert Rosa mit Grün. Ergebnis: grünstichiges Bild. Deshalb braucht der manuelle Weißabgleich eine wirklich weiße Fläche.",
  },
  // TODO: fachlich prüfen — Standardwerte der Farbtemperatur für Kunstlicht/
  // Tageslicht (üblich: 3200 K / 5600 K) werden im Kursmaterial abgefragt,
  // aber nirgends mit konkreten Zahlen genannt. Frage erst aufnehmen, wenn
  // die im Kurs gelehrten Werte bestätigt sind.
  // TODO: fachlich prüfen — "Was ist eine Monitor-LUT? Wo schalten Sie diese
  // ein/aus?" Das Konzept (Vorschau-LUT nur fürs Display, Aufzeichnung bleibt
  // Log) und der Menüpfad sind im vorliegenden Material nicht erklärt.
  // TODO: fachlich prüfen — Ablauf des manuellen Weißabgleichs an der FX30
  // (Custom-WB-Speicherplätze, Menüweg): Inhalt liegt nur als Video vor,
  // nicht als Text. Schrittfolge-Frage ergänzen, sobald verifiziert.
];
