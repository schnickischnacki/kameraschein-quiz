import type { Question } from "./types";

/**
 * Modul 1 – Equipment übernehmen
 * Quellen: Alte Moodle-Sektionen 2 (Ausleihe, Versicherung, Schäden)
 * und 3 (Transport und Aufbewahrung).
 */
export const modul1Fragen: Question[] = [
  {
    id: "m1-1",
    modul: 1,
    type: "single",
    frage:
      "Wer prüft beim Ausleihen das Equipment auf Vollständigkeit und Funktionsfähigkeit?",
    optionen: [
      "Du selbst – mit dem Empfang quittierst du beides",
      "Das Verleih-Team, bevor es das Equipment herausgibt",
      "Die Hochschule über eine Sichtprüfung nach der Rückgabe",
      "Niemand – kleinere Mängel werden bei der Rückgabe verrechnet",
    ],
    richtig: 0,
    feedbackRichtig:
      "Genau: Mit dem Empfang quittierst du Vollständigkeit und Funktionsfähigkeit. Deshalb: alles kontrollieren, Fotos machen, Mängel sofort protokollieren lassen.",
    feedbackFalsch:
      "Die Verantwortung liegt bei dir: Mit dem Empfang quittierst du Vollständigkeit und Funktionsfähigkeit. Spätere Reklamationen werden nicht berücksichtigt – wie beim Autoverleih.",
  },
  {
    id: "m1-2",
    modul: 1,
    type: "single",
    frage:
      "Bei der Rückgabe werden Schäden am Equipment festgestellt. Wer haftet?",
    optionen: [
      "Du als ausleihende Person",
      "Die Hochschule über ihre Geräteversicherung",
      "Der AV-Verleih, weil er das Equipment herausgegeben hat",
      "Niemand, solange der Schaden unabsichtlich entstanden ist",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig. Das Material ist nicht über die Hochschule versichert – Schäden und Verluste musst du begleichen, ggf. kommen sogar Leihkosten für Ersatzequipment dazu.",
    feedbackFalsch:
      "Häufiges Missverständnis: Das Equipment ist NICHT über die Hochschule versichert. Du haftest selbst – kümmere dich daher rechtzeitig um eigenen Versicherungsschutz (z. B. Haftpflicht prüfen).",
  },
  {
    id: "m1-3",
    modul: 1,
    type: "multiple",
    frage: "Welche Aussagen zu Versicherung und Haftung treffen zu?",
    optionen: [
      "Das Material aus dem AV-Verleih ist nicht über die Hochschule versichert",
      "Für Versicherungsschutz bist du selbst zuständig (ggf. deckt die Haftpflicht etwas ab)",
      "Bei Reparatur- oder Ausfallzeiten können zusätzlich Leihkosten für Ersatzequipment fällig werden",
      "Kleinere Schäden übernimmt automatisch der Verleih",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Alles richtig eingeordnet: keine Hochschulversicherung, Eigenverantwortung, und im Schadensfall drohen auch Folgekosten für Ersatzbeschaffung.",
    feedbackFalsch:
      "Merke: Der Verleih übernimmt keine Schäden. Es gibt keine Hochschulversicherung, du bist selbst verantwortlich – und bei Ausfallzeiten können zusätzlich Leihkosten entstehen.",
  },
  {
    id: "m1-4",
    modul: 1,
    type: "order",
    frage:
      "Bringe die Schritte zur Sensor-Kontrolle (Fussel/Staub) beim Ausleihvorgang in die richtige Reihenfolge:",
    schritte: [
      "Kamera auf eine nahe, helle, homogen weiße Fläche richten",
      "Hineinzoomen",
      "Objektiv manuell unscharf stellen (auf unendlich)",
      "Nach leicht unscharfen dunklen Flecken suchen",
    ],
    feedbackRichtig:
      "Perfekt – so machst du Sensorflecken sichtbar: weiße Fläche, zoomen, bewusst unscharf stellen, dann erscheinen Flecken als dunkle unscharfe Punkte.",
    feedbackFalsch:
      "Die Logik: Erst die weiße Fläche anvisieren und hineinzoomen, dann UNSCHARF stellen – erst durch die Unschärfe heben sich Sensorflecken als dunkle Punkte vom Bild ab.",
  },
  {
    id: "m1-5",
    modul: 1,
    type: "truefalse",
    frage:
      "Wenn du beim Ausleihen Fussel auf dem Sensor entdeckst, entfernst du sie selbst vorsichtig mit einem Tuch.",
    richtig: false,
    feedbackRichtig:
      "Richtig erkannt: Den Sensor reinigst du niemals selbst. Das übernimmt der Verleih bzw. ein autorisierter Fachhändler mit dem passenden Equipment.",
    feedbackFalsch:
      "Vorsicht – genau das nicht! Selbst reinigen kann den Sensor beschädigen (teure Reparatur). Melde den Befund dem Verleih; nur er oder ein Fachhändler darf reinigen.",
  },
  {
    id: "m1-6",
    modul: 1,
    type: "gapfill",
    frage: "Welches Aufnahmemedium gehört ins FX30-Set?",
    text: "Im Set muss eine ___-Karte „Sony Tough“ mit ___ GB enthalten sein.",
    luecken: [
      { optionen: ["CF-Express", "SD", "microSD"], richtig: 0 },
      { optionen: ["160", "64", "512"], richtig: 0 },
    ],
    feedbackRichtig:
      "Richtig: CF-Express „Sony Tough“ mit 160 GB. Kontrolliere das direkt beim Ausleihvorgang – falsches Medium fällt sonst erst am Set auf.",
    feedbackFalsch:
      "Für die FX30 gehört eine CF-Express-Karte „Sony Tough“ mit 160 GB ins Set. Prüfe das Aufnahmemedium immer schon bei der Übernahme.",
  },
  {
    id: "m1-7",
    modul: 1,
    type: "multiple",
    frage: "Transport und Aufbewahrung: Welche Regeln gelten?",
    optionen: [
      "Nachts darf Kamera-/Ton-/Lichtequipment nicht im Auto verbleiben",
      "Kameras und Akkus sind im Allgemeinen nur zwischen 0 °C und 40 °C zu betreiben",
      "Nach einem kalten Außeneinsatz die Kamera mindestens 30 Minuten akklimatisieren lassen",
      "Das Sucherdisplay bleibt beim Transport aufgeklappt, damit es schneller einsatzbereit ist",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Alles korrekt. Und fürs Display gilt das Gegenteil der letzten Option: nach innen einklappen, damit die Bildschirmoberfläche geschützt ist.",
    feedbackFalsch:
      "Drei Regeln stimmen: nachts nie im Auto, Betrieb nur zwischen 0–40 °C, nach Kälte 30 Minuten akklimatisieren. Das Display wird dagegen mit der Oberfläche nach INNEN eingeklappt.",
  },
  {
    id: "m1-8",
    modul: 1,
    type: "truefalse",
    frage:
      "Wenn du den Rückgabetermin nicht halten kannst, reicht es, das Equipment am nächsten Werktag unkommentiert zurückzubringen.",
    richtig: false,
    feedbackRichtig:
      "Genau: Kontaktiere unbedingt vorher den Verleih. Bei nicht abgesprochener verspäteter Rückgabe können Kosten entstehen oder du wirst für künftige Ausleihen gesperrt.",
    feedbackFalsch:
      "Riskant: Unabgesprochene Verspätung kann Kosten auslösen (z. B. Ersatz-Leihgebühren für andere Studierende) und zur Sperrung führen. Immer vorher den Verleih kontaktieren.",
  },
  {
    id: "m1-9",
    modul: 1,
    type: "multiple",
    frage: "Wie gibst du das Equipment korrekt zurück?",
    optionen: [
      "So verpackt, wie du es bei der Ausleihe erhalten hast",
      "Akkus nach Möglichkeit geladen",
      "Speichermedien formatiert",
      "Speichermedien mit deinem Material, damit der Verleih ein Backup hat",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Richtig: verpackt wie erhalten, Akkus geladen, Karten formatiert. Dein Material sicherst du vorher selbst – der Verleih macht keine Backups.",
    feedbackFalsch:
      "Merke die Rückgabe-Trias: verpackt wie erhalten, Akkus geladen, Speichermedien FORMATIERT. Deine Aufnahmen musst du vorher selbst sichern – der Verleih übernimmt das nicht.",
  },
];
