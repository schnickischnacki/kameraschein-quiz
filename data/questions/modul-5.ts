import type { Question } from "./types";

/**
 * Modul 5 – Generalprobe & Prüfung
 * Quellen: Alte Moodle-Sektion 16 (Prüfungskompetenzen, inkl. der
 * versteckten Seite "Sie beantworten Fragen der Prüfer_innen") sowie
 * modulübergreifende Wiederholung (Spaced Retrieval).
 */
export const modul5Fragen: Question[] = [
  {
    id: "m5-1",
    modul: 5,
    type: "multiple",
    frage: "Was wird in der Kamerascheinprüfung geprüft?",
    optionen: [
      "Auf- und Abbau der Kamera sowie Handling des Stativs",
      "Je eine Frage aus Handling, grundsätzliche Einstellungen, LOG/REC709, Fokussieren, Belichten und Weißabgleich",
      "Fragen aus dem Bereich Audio (Signalkette, Pegeln, Abhören)",
      "Eine schriftliche Klausur über Kameratheorie",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Richtig – die Prüfung ist praktisch: Auf-/Abbau und Stativ-Handling werden immer geprüft, dazu Fragen aus allen Themenbereichen inklusive Audio.",
    feedbackFalsch:
      "Die Prüfung ist eine praktische Demonstration, keine Klausur: Auf-/Abbau und Stativ-Handling gehören immer dazu, außerdem Fragen aus allen Themenbereichen – auch Audio.",
  },
  {
    id: "m5-3",
    modul: 5,
    type: "order",
    frage:
      "Kein Ton im Kopfhörer! In welcher Reihenfolge suchst du strukturiert entlang der Signalkette?",
    schritte: [
      "Mikrofon prüfen (richtig angeschlossen, passende Speisung?)",
      "Input-Einstellungen prüfen (LINE / MIC / MIC+48V, Audio-Handle aktiv?)",
      "Routing und Pegel prüfen (welcher Input auf welchem Channel, Aussteuerung?)",
      "Abhörweg prüfen (Headphone-Routing, Kopfhörerlautstärke, Anschluss)",
    ],
    feedbackRichtig:
      "Genau: immer planvoll vom Mikrofon zum Kopfhörer – so grenzt du den Fehler Schritt für Schritt ein, statt wild Einstellungen zu ändern.",
    feedbackFalsch:
      "Merke die Richtung der Signalkette: Mikrofon → Input → Routing/Pegel → Kopfhörer. Wer hinten anfängt oder springt, übersieht die Ursache – die Prüfer wollen genau dieses strukturierte Vorgehen sehen.",
  },
  {
    id: "m5-4",
    modul: 5,
    type: "truefalse",
    frage:
      "In der Prüfung wird auch erwartet, dass du weißt, die Kamera nicht nachts im Auto zu lagern und dass die Ausrüstung nicht über die Hochschule versichert ist.",
    richtig: true,
    feedbackRichtig:
      "Richtig – die Prüferfragen decken auch Organisation ab: Kamera nachts nie im Auto lagern, und die Ausrüstung ist NICHT über die Hochschule versichert (du haftest).",
    feedbackFalsch:
      "Doch: Auch Organisatorisches ist prüfungsrelevant. Die Antworten kennst du aus Modul 1: Kamera nachts nicht im Auto lagern, keine Hochschulversicherung – du haftest selbst.",
  },
  {
    id: "m5-5",
    modul: 5,
    type: "single",
    frage:
      "Prüfungsklassiker: Warum muss die Kamera zum Akkuwechsel ausgeschaltet sein?",
    optionen: [
      "Um Kurzschlüsse an den Akku-Kontakten zu vermeiden",
      "Der Akku lässt sich mechanisch nur bei ausgeschalteter Kamera entriegeln",
      "Die Kamera würde sonst automatisch formatieren",
      "Nur so wird der Akkustand korrekt angezeigt",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig – bei eingeschalteter Kamera fließt Strom über die Kontakte; ein Aus- oder Einlegen unter Last kann Kontakte und Elektronik durch Funkenschlag beschädigen. Deshalb wird in der Prüfung erwartet, dass du vor dem Wechsel sichtbar den Power-Schalter kontrollierst.",
    feedbackFalsch:
      "Der eigentliche Grund ist elektrisch, nicht mechanisch: Bei eingeschalteter Kamera fließt Strom über die Akku-Kontakte – ein Wechsel unter Last kann Kurzschlüsse und Schäden verursachen. Zeige in der Prüfung deshalb explizit, dass du den Power-Schalter kontrollierst, bevor du den Akku bewegst.",
  },
  {
    id: "m5-6",
    modul: 5,
    type: "gapfill",
    frage: "Generalprobe Belichtung – die Kernbegriffe:",
    text: "„Richtig belichten“ heißt, den oft zu hohen ___ dem geringeren ___ der Kamera anzupassen. Bildteile, die völlig weiß werden, „___“; Bildteile, die völlig schwarz werden, „crushen“.",
    luecken: [
      { optionen: ["Szenenkontrast", "Weißabgleich", "Headroom"], richtig: 0 },
      { optionen: ["Dynamikumfang", "Zoombereich", "Signal-Rauschabstand"], richtig: 0 },
      { optionen: ["clippen", "peaken", "zebra-n"], richtig: 0 },
    ],
    feedbackRichtig:
      "Richtig: Belichten ist die Kunst, den Szenenkontrast in den Dynamikumfang der Kamera einzupassen – und bewusst zu entscheiden, was clippen oder crushen darf.",
    feedbackFalsch:
      "Die Begriffe: SZENENKONTRAST (was die Szene hergibt) vs. DYNAMIKUMFANG (was die Kamera erfassen kann). Passt es nicht, musst du entscheiden: Was darf CLIPPEN (weiß) und was crushen (schwarz)?",
  },
  {
    id: "m5-7",
    modul: 5,
    type: "single",
    frage:
      "Du hast in REC709 (PP11) gedreht und sollst spontan auf Log umstellen. Was gehört alles dazu?",
    optionen: [
      "Picture Profile auf S-Log3 wechseln und einen 10-bit-Codec (z. B. XAVC S 4K) sicherstellen",
      "Nur den Codec auf XAVC S-I stellen – das Profil passt sich an",
      "Das Zebra auf 70 % stellen",
      "Den Weißabgleich auf Auto stellen",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Log = Picture Profile (S-Log3) UND passender Codec mit 10 bit. Denk auch daran, dass Zebra-70-Werte in Log nicht mehr gelten.",
    feedbackFalsch:
      "Log ist eine Profil-Entscheidung mit Folgen: Picture Profile auf S-Log3 stellen und einen 10-bit-Codec wählen (8 bit reißt beim Grading auf). Codec allein ändert das Profil nicht – und Zebra 70 gilt in Log nicht mehr.",
  },
  // TODO: fachlich prüfen — Prüferfrage "Warum ist 4K auch für eine Abgabe in
  // HD zu präferieren?" Die Begründung (vermutlich: Crop-/Reframing-Reserve
  // und besseres Downscaling) steht nicht im vorliegenden Kursmaterial.
  // Frage ergänzen, sobald die im Kurs gelehrte Begründung bestätigt ist.
];
