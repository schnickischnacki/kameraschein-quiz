import type { Question } from "./types";

/**
 * Modul 2 – Drehfertig machen
 * Quellen: Alte Moodle-Sektionen 4 (Akku), 5 (Handling Stativ),
 * 6 (Kamera vorbereiten).
 */
export const modul2Fragen: Question[] = [
  {
    id: "m2-1",
    modul: 2,
    type: "order",
    frage: "Bringe die Schritte beim Einlegen des Akkus in die richtige Reihenfolge:",
    schritte: [
      "Kontrollieren, ob die Kamera ausgeschaltet ist",
      "Kontakte am Akku identifizieren",
      "Kontakte in der Kamera identifizieren",
      "Akku einlegen, bis das Einrastgeräusch hörbar ist",
    ],
    feedbackRichtig:
      "Genau so – und die Grundregel zuerst: Der Akku wird nie bei eingeschalteter Kamera eingelegt oder entnommen.",
    feedbackFalsch:
      "Erster Schritt ist immer der Blick auf den Power-Schalter: Kamera aus! Dann Kontakte an Akku und Kamera identifizieren und den Akku bis zum hörbaren Einrasten einschieben.",
  },
  {
    id: "m2-2",
    modul: 2,
    type: "single",
    frage: "Du willst den Akku herausnehmen. Was ist zu beachten?",
    optionen: [
      "Kamera ausschalten und die Akku-Arretierung lösen",
      "Einfach kräftig am Akku ziehen, die Arretierung gibt automatisch nach",
      "Die Kamera kann anbleiben, wenn der Wechsel schnell geht",
      "Erst das Objektiv abnehmen, damit die Kamera leichter ist",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Kamera aus, dann die Akku-Arretierung lösen. Nie mit Gewalt ziehen und nie bei eingeschalteter Kamera entnehmen.",
    feedbackFalsch:
      "Zwei Dinge sind Pflicht: Die Kamera muss ausgeschaltet sein (auch bei schnellen Wechseln!) und die Akku-Arretierung muss gelöst werden – niemals einfach ziehen.",
  },
  {
    id: "m2-3",
    modul: 2,
    type: "order",
    frage: "Sortiere die Schritte beim Stativ-Aufbau in die richtige Reihenfolge:",
    schritte: [
      "Sicherungsschnur entfernen (nicht „schnalzen“ lassen)",
      "Schwenkhebel rausklappen und fixieren – vor dem Aufklappen",
      "Bodenspinne ausklappen bzw. bei anderem Untergrund Spikes nutzen",
      "Stativ auf Arbeitshöhe bringen, alle Beine ähnlich weit ausziehen",
      "Kamera mit Verschiebeplatte aufschieben und festklemmen",
    ],
    feedbackRichtig:
      "Sauber aufgebaut! Wichtig am Ende: prüfen, dass die Kamera nicht nach vorne oder hinten herausrutschen kann, bevor du sie loslässt.",
    feedbackFalsch:
      "Die Reihenfolge folgt dem Aufbau von unten nach oben: Schnur ab, Schwenkhebel VOR dem Aufklappen fixieren, Untergrund-Frage (Spinne/Spikes), Arbeitshöhe, erst zuletzt die Kamera drauf.",
  },
  {
    id: "m2-4",
    modul: 2,
    type: "single",
    frage: "Wie bereitest du das Stativ auf den Betrieb in einer feuchten Wiese vor?",
    optionen: [
      "Bodenspinne entfernen und die Spikes verwenden",
      "Bodenspinne ausklappen, damit das Stativ nicht einsinkt",
      "Die Beine nur halb ausziehen, um den Schwerpunkt zu senken",
      "Ein Stativbein anheben, damit weniger Kontakt zum nassen Boden besteht",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Die Bodenspinne ist für feste, flache, glatte Untergründe gedacht. Auf Wiese, Erde & Co. kommt sie weg und die Spikes greifen in den Boden.",
    feedbackFalsch:
      "Andersherum gedacht: Die Bodenspinne gehört auf feste, flache, glatte Untergründe (z. B. Studio-Boden). In der feuchten Wiese entfernst du die Spinne und nutzt die Spikes.",
  },
  {
    id: "m2-5",
    modul: 2,
    type: "match",
    frage: "Ordne die Stativ-Funktionen ihrer richtigen Verwendung zu:",
    paare: [
      {
        links: "Pan-/Tilt-Bremse anziehen",
        rechts: "wenn du von der Kamera zurücktrittst",
      },
      {
        links: "Starke Dämpfung",
        rechts: "langsame Schwenks mit langer Brennweite",
      },
      {
        links: "Schwache Dämpfung",
        rechts: "schnelle Schwenks mit kürzerer Brennweite",
      },
      {
        links: "Libelle",
        rechts: "Stativ „ins Wasser“ stellen (ausrichten)",
      },
    ],
    feedbackRichtig:
      "Genau: Die Bremse sichert die Kamera, sobald du sie loslässt – die Dämpfung gestaltet den Schwenk und wird nach Brennweite und Tempo gewählt.",
    feedbackFalsch:
      "Bremse und Dämpfung nicht verwechseln: Die BREMSE fixiert (immer anziehen, wenn du zurücktrittst), die DÄMPFUNG macht Schwenks geschmeidig – stark für langsam/lange Brennweite, schwach für schnell/kurze Brennweite.",
  },
  {
    id: "m2-6",
    modul: 2,
    type: "multiple",
    frage: "Sachgerechter Objektivwechsel an der FX30 – worauf achtest du?",
    optionen: [
      "Kamera ausschalten",
      "Kamera eher nach unten, keinesfalls nach oben neigen",
      "Wechselobjektiv vorher bereitlegen und zügig arbeiten",
      "Kamera nach oben richten, damit das Objektiv nicht herausfällt",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Alles richtig – so bleibt der Sensor sauber: Kamera aus, Öffnung nach unten, und der Wechsel ist vorbereitet, damit der Body nur kurz offen ist.",
    feedbackFalsch:
      "Merke: Kamera AUS, Öffnung nach UNTEN (sonst fällt Staub auf den Sensor) und zügig wechseln – das neue Objektiv liegt vorher bereit, nur der hintere Deckel ist schon ab.",
  },
  {
    id: "m2-7",
    modul: 2,
    type: "gapfill",
    frage: "Drehrichtungen beim Objektivwechsel (FX30):",
    text: "Zum Abnehmen drückst du den Release-Knopf und drehst das Objektiv nach ___ . Das neue Objektiv setzt du am ___ an und drehst es nach rechts, bis der Knopf hörbar ___ .",
    luecken: [
      { optionen: ["links (gegen den Uhrzeigersinn)", "rechts (im Uhrzeigersinn)"], richtig: 0 },
      { optionen: ["Index-Punkt", "roten Aufnahmeknopf", "Bajonett-Griffstück"], richtig: 0 },
      { optionen: ["klickt", "leuchtet", "vibriert"], richtig: 0 },
    ],
    feedbackRichtig:
      "Richtig: lösen nach links, ansetzen am Index-Punkt, festdrehen nach rechts bis zum hörbaren Klick des Arretierungsknopfs.",
    feedbackFalsch:
      "Eselsbrücke wie beim Schraubverschluss: gegen den Uhrzeigersinn lösen, im Uhrzeigersinn festdrehen. Beim Ansetzen müssen die Index-Punkte übereinstimmen, fertig ist es erst mit hörbarem Klick.",
  },
  {
    id: "m2-8",
    modul: 2,
    type: "single",
    frage:
      "Welche Zoom-Option im FX30-Menü solltest du NICHT verwenden, weil die Auflösung sichtbar schlechter wird?",
    optionen: [
      "Digitaler Zoom",
      "Optischer Zoom",
      "Klarbild-Zoom (Clear Image Zoom)",
      "Zoomen über den Zoomring am Objektiv",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Der digitale Zoom vergrößert das Bild nur digital und kostet Auflösung. Der Klarbild-Zoom (bis Faktor 2) ist dagegen durchaus nutzbar, wenn die Brennweite mal nicht reicht.",
    feedbackFalsch:
      "Der DIGITALE Zoom ist tabu – er vergrößert nur digital und verschlechtert die Auflösung. Standard ist der optische Zoom; der Klarbild-Zoom ist ein brauchbarer Kompromiss bis Faktor 2.",
  },
  {
    id: "m2-9",
    modul: 2,
    type: "order",
    frage:
      "Nach dem Einlegen der Speicherkarte: In welcher Reihenfolge stellst du die Aufnahmebereitschaft sicher?",
    schritte: [
      "Speicherslot für die Aufnahme im Menü bestimmen",
      "Speicherkarte formatieren (Menü)",
      "Testaufnahme machen und Tally-Licht kontrollieren",
      "Testaufnahme im Wiedergabe-Modus kontrollieren",
    ],
    feedbackRichtig:
      "Genau – erst Slot und Formatierung, dann beweist die kontrollierte Testaufnahme, dass die Kette wirklich funktioniert.",
    feedbackFalsch:
      "Erst die Karte einsatzbereit machen (Slot wählen, formatieren), DANN testen: Aufnahme starten, Tally prüfen, und die Testaufnahme in der Wiedergabe ansehen. Ohne Kontrolle weißt du nicht, ob wirklich aufgezeichnet wurde.",
  },
  // TODO: fachlich prüfen — Die alte Prüfungsfrage "Wann nutzen Sie die
  // AUSZIEH-Funktion der BODENSPINNE?" ist im Kursmaterial nicht erklärt
  // (die Texte behandeln nur Spinne vs. Spikes). Bitte korrekte Antwort
  // ergänzen und daraus eine Single-Choice-Frage bauen.
];
