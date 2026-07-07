import type { Question } from "./types";

/**
 * Modul 4 – Ton aufnehmen
 * Quellen: Alte Moodle-Sektionen 11 (Vorbereitung), 12 (Routing),
 * 13 (Mikrofonie), 14 (Kontrolle/Abhören), 15 (Pegeln).
 */
export const modul4Fragen: Question[] = [
  {
    id: "m4-1",
    modul: 4,
    type: "multiple",
    frage:
      "Du willst an der FX30 Ton über den Audio-Handle aufnehmen. Was muss eingestellt sein?",
    optionen: [
      "Im Kamera-Menü die Audioaufnahme auf ON stellen",
      "Den Audio-Handle am kleinen Schalter am Handgriff aktivieren",
      "Den passenden INPUT-Modus (LINE / MIC / MIC+48V) für die Quelle wählen",
      "Nichts – der Handle ist automatisch aktiv, sobald ein XLR-Kabel steckt",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Richtig: Audioaufnahme ON, Handle-Schalter aktivieren, Inputs passend zur Quelle einstellen. Ohne aktivierten Handle nimmt die Kamera nur die schlechten internen Mikros auf.",
    feedbackFalsch:
      "Drei Dinge sind nötig: Audioaufnahme im Menü ON, der Handle-Schalter am Handgriff AN und die Inputs passend eingestellt. Automatisch passiert hier nichts – ein gestecktes Kabel allein reicht nicht.",
  },
  {
    id: "m4-2",
    modul: 4,
    type: "single",
    frage:
      "Der Audio-Handle ist ausgeschaltet, trotzdem siehst du eine Pegelanzeige. Warum?",
    optionen: [
      "Die Kamera nimmt über die eingebauten internen Mikrofone auf",
      "Die Pegelanzeige ist eine reine Demo-Animation",
      "Der Handle speist die Anzeige auch im ausgeschalteten Zustand",
      "Die Anzeige zeigt den Kopfhörerausgang, nicht die Aufnahme",
    ],
    richtig: 0,
    feedbackRichtig:
      "Genau – und das ist die klassische Falle: Die zuckenden Pegel stammen von den sehr schlechten internen Mikros. Nur mit Kopfhörer merkst du sofort, dass nicht dein Mikrofon aufgenommen wird.",
    feedbackFalsch:
      "Die Erklärung: Ist der Handle aus, nimmt die Kamera über die INTERNEN Mikrofone auf – die Pegelanzeige zuckt also trotzdem. Wer nur auf die Anzeige schaut, bemerkt den Fehler nicht. Deshalb: immer abhören!",
  },
  {
    id: "m4-3",
    modul: 4,
    type: "single",
    frage:
      "Trotz sichtbarer Pegelanzeige hörst du im Kopfhörer nichts. Wo suchst du zuerst?",
    optionen: [
      "Kopfhörerlautstärke und Headphone-Routing im Menü „Sound → Monitor“ prüfen (und den Kopfhöreranschluss)",
      "Die Speicherkarte neu formatieren",
      "Das Mikrofon tauschen – es ist offenbar defekt",
      "Die Kamera auf Werkseinstellungen zurücksetzen",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Wenn Pegel ankommen, liegt das Problem hinter der Aufnahme – also beim Abhörweg: Kopfhörer eingesteckt? Lautstärke hochgedreht? Richtige Channels im Monitor-Routing gewählt?",
    feedbackFalsch:
      "Denk in der Signalkette: Eine sichtbare Pegelanzeige heißt, das Signal KOMMT AN – das Mikro ist also nicht das Problem. Fehlt der Ton nur im Ohr, prüfst du den Abhörweg: Anschluss, Kopfhörerlautstärke und Headphone-Routing unter „Sound → Monitor“.",
  },
  {
    id: "m4-4",
    modul: 4,
    type: "match",
    frage:
      "Welche INPUT-Einstellung wählst du an der Kamera für welche Tonquelle?",
    paare: [
      { links: "Dynamisches Mikrofon", rechts: "MIC (ohne +48V)" },
      { links: "Kondensatormikrofon", rechts: "MIC +48V (Phantomspeisung)" },
      { links: "Mischpult / Tonmischer", rechts: "LINE" },
    ],
    feedbackRichtig:
      "Perfekt: Dynamische Mikros erzeugen ihre Spannung selbst (MIC reicht), Kondensatormikros brauchen die +48V-Phantomspeisung, und Mischer liefern bereits verstärkte Pegel (LINE).",
    feedbackFalsch:
      "Die Logik dahinter: Mischer liefern starke, bereits verstärkte Signale → LINE. Mikrofone brauchen den Vorverstärker → MIC. Und nur Kondensatormikros brauchen zusätzlich Spannung → MIC +48V. Ein dynamisches Mikro braucht keine Phantomspeisung.",
  },
  {
    id: "m4-5",
    modul: 4,
    type: "single",
    frage:
      "Wie kann INPUT 1 auf beiden Kamera-Audio-Channels (CH1 und CH2) aufgezeichnet werden – und wozu ist das gut?",
    optionen: [
      "Per Routing-Schalter „CH1/CH2 ← INPUT1“ – z. B. um dasselbe Mikro einmal höher und einmal niedriger ausgesteuert aufzunehmen",
      "Gar nicht – jeder Input ist fest mit einem Channel verdrahtet",
      "Nur über ein Y-Kabel am XLR-Eingang",
      "Über die Kopfhörereinstellung „Monitor: CH1+CH2“",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Das Audio-Routing erfolgt über die Schiebeschalter. INPUT1 auf beide Channels zu legen ist die Sicherheits-Konfiguration: ein Kanal lauter, einer leiser gepegelt.",
    feedbackFalsch:
      "Das regelt das AUDIO ROUTING per Schiebeschalter, kein Kabel: Stellung „CH1/CH2 ← INPUT1“ legt Input 1 auf beide Kanäle. Sinn: dieselbe Quelle doppelt aufnehmen – einmal höher, einmal (zur Sicherheit) niedriger ausgesteuert.",
  },
  {
    id: "m4-6",
    modul: 4,
    type: "single",
    frage:
      "Interview: Angel-Mikrofon und Ansteckmikrofon sollen getrennt aufgenommen werden, um später den besseren Ton zu wählen. Welches Routing?",
    optionen: [
      "CH1 ← INPUT 1 und CH2 ← INPUT 2",
      "CH1/CH2 ← INT",
      "CH1/CH2 ← INPUT 1",
      "Beide Mikros auf INPUT 1 zusammenstecken",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Je ein Eingang auf je einen Kanal – so bleiben Angel und Anstecker getrennt und du entscheidest dich im Schnitt für den besseren Ton.",
    feedbackFalsch:
      "Für zwei getrennte Quellen brauchst du zwei getrennte Kanäle: CH1 ← INPUT 1, CH2 ← INPUT 2. „INT“ wäre das interne Mikro, und INPUT 1 auf beide Kanäle würde nur EIN Mikro doppelt aufzeichnen.",
  },
  {
    id: "m4-7",
    modul: 4,
    type: "single",
    frage: "Wozu ist die Aufnahme mit dem internen Kameramikrofon (INT) überhaupt sinnvoll?",
    optionen: [
      "Als „Scratch-Audio“ zum Synchronisieren, wenn der eigentliche Ton auf einem separaten Gerät aufgezeichnet wird",
      "Für professionelle Interviews, wenn kein XLR-Mikro verfügbar ist",
      "Für Musikaufnahmen, weil es besonders neutral klingt",
      "Es gibt keinen sinnvollen Einsatzzweck",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig: Die internen Mikros liefern unbefriedigende Qualität – aber als Scratch-Audio erleichtern sie das Anlegen von Bild und externem Ton im Schnitt.",
    feedbackFalsch:
      "Die internen Mikros sind für professionellen Ton unbrauchbar. Ihr einziger sinnvoller Job: „Scratch-Audio“ als Synchronisierhilfe, wenn der gute Ton parallel auf einem externen Rekorder läuft.",
  },
  {
    id: "m4-8",
    modul: 4,
    type: "multiple",
    frage:
      "Wie bekommst du trotz Umgebungsgeräuschen eine klare Sprachaufnahme hin?",
    optionen: [
      "Ein Richtmikrofon (Shotgun/Keule) auf die sprechende Person „zielen“",
      "Das Mikrofon möglichst nah an die Schallquelle bringen (z. B. Handmikro 2–10 cm, Anstecker max. 20 cm)",
      "Einfach den Pegel maximal aufdrehen",
      "Das interne Kameramikrofon verwenden, weil es am nächsten an der Kamera ist",
    ],
    richtig: [0, 1],
    feedbackRichtig:
      "Genau die zwei Prinzipien: Richtcharakteristik (seitlicher Schall wird per Interferenz reduziert) und Nähe (Schalldruck nimmt im Quadrat zur Entfernung ab).",
    feedbackFalsch:
      "Es gibt genau zwei Hebel: RICHTWIRKUNG (Shotgun auf den Mund zielen) und NÄHE (Schalldruck nimmt im Quadrat zur Entfernung ab). Pegel aufdrehen verstärkt auch den Lärm mit – das hilft nicht.",
  },
  {
    id: "m4-9",
    modul: 4,
    type: "multiple",
    frage: "Was trifft auf Richtrohr-Mikrofone („Shotgun“) zu?",
    optionen: [
      "Sie sind als Kondensatormikrofone gebaut und brauchen +48V Phantomspeisung",
      "Sie sind empfindlich für Wind – Schaumstoff- oder Fell-Windschutz wird empfohlen",
      "Sie sind lang und dünn und haben seitliche Schlitze",
      "Sie sind dynamische Mikrofone und funktionieren ohne Speisung",
    ],
    richtig: [0, 1, 2],
    feedbackRichtig:
      "Alles richtig: Shotguns sind empfindliche Kondensatormikros (+48V nötig), bauartbedingt lang mit Schlitzen – und draußen nur mit Windschutz zu gebrauchen.",
    feedbackFalsch:
      "Shotgun-Mikros müssen empfindlich sein und sind deshalb KONDENSATOR-Mikros – sie brauchen +48V. Dynamisch (ohne Speisung) sind eher Handmikros, die von der Nähe zum Mund leben.",
  },
  {
    id: "m4-10",
    modul: 4,
    type: "single",
    frage: "Wo stellst du ein, welche Channels du im Kopfhörer abhörst?",
    optionen: [
      "Im Werkzeugkasten-Menü unter „Sound → Monitor“ (Headphone Routing)",
      "Am Schiebeschalter des Audio-Routings",
      "Direkt am Kopfhörerkabel",
      "Im Picture-Profile-Menü",
    ],
    richtig: 0,
    feedbackRichtig:
      "Richtig – dort legst du das Headphone-Routing fest, und im selben Menü änderst du auch die Kopfhörerlautstärke.",
    feedbackFalsch:
      "Abhören und Aufnehmen sind getrennt: Die Routing-Schalter bestimmen, was AUFGEZEICHNET wird. Was du im Kopfhörer HÖRST (und wie laut), stellst du im Menü „Sound → Monitor“ ein.",
  },
  {
    id: "m4-11",
    modul: 4,
    type: "gapfill",
    frage: "Richtig pegeln:",
    text: "Sprache pegelst du in den Spitzen auf ca. ___ dB. Erreicht das Signal ___ dB, clippt es und die Aufnahme ist unbrauchbar. Der Abstand dazwischen heißt ___ .",
    luecken: [
      { optionen: ["−18 bis −12", "−3 bis 0", "−40 bis −30"], richtig: 0 },
      { optionen: ["0", "+6", "−10"], richtig: 0 },
      { optionen: ["Headroom", "Gain", "Noise Floor"], richtig: 0 },
    ],
    feedbackRichtig:
      "Richtig: Spitzen bei −18 bis −12 dB, 0 dB ist die digitale Clipping-Grenze, und der Puffer dazwischen ist der Headroom für plötzlich lautere Ereignisse.",
    feedbackFalsch:
      "Die Zahlen: Digital ist bei 0 dB Schluss (Clipping!). Deshalb pegelst du Sprachspitzen auf ca. −18 bis −12 dB – der Rest ist HEADROOM, dein Sicherheitspuffer für laute Überraschungen.",
  },
  {
    id: "m4-12",
    modul: 4,
    type: "single",
    frage:
      "Warum solltest du in beherrschbaren Situationen (z. B. Interview) manuell statt automatisch pegeln?",
    optionen: [
      "Die Automatik zieht in Sprechpausen die Verstärkung hoch – das Grundrauschen schwillt hörbar an und der Wiedereinstieg ist zu laut",
      "Automatisches Pegeln funktioniert nur mit internen Mikrofonen",
      "Manuelles Pegeln klingt grundsätzlich besser, weil es mehr Bässe aufnimmt",
      "Die Automatik schaltet nach 10 Minuten ab",
    ],
    richtig: 0,
    feedbackRichtig:
      "Genau: In Pausen regelt die Automatik das Rauschen hoch, und wenn die Person wieder spricht, ist es erst zu laut. In planbaren Situationen pegelst du deshalb manuell.",
    feedbackFalsch:
      "Das Problem der Automatik ist die Sprechpause: Sie „sucht“ nach Lautstärke und verstärkt dabei das Grundrauschen; beim Wiedereinsetzen der Stimme ist der Ton erst übersteuert. Interviews → manuell pegeln.",
  },
  {
    id: "m4-13",
    modul: 4,
    type: "truefalse",
    frage:
      "An der FX30 ist der Limiter immer aktiv – bei anderen Kameras solltest du ihn beim manuellen Pegeln zur Sicherheit einschalten.",
    richtig: true,
    feedbackRichtig:
      "Richtig. Aber Vorsicht: Wer ständig zu hoch pegelt und den Limiter dauerhaft arbeiten lässt, produziert hörbare Artefakte – der Limiter ist Sicherheitsnetz, nicht Pegelersatz.",
    feedbackFalsch:
      "Die Aussage stimmt: Bei der FX30 ist der Limiter immer an, bei anderen Kameras schaltest du ihn beim manuellen Pegeln ein. Er verhindert Übersteuern – ersetzt aber kein sauberes Pegeln (Dauereinsatz = Artefakte).",
  },
  {
    id: "m4-14",
    modul: 4,
    type: "multiple",
    frage: "Es ist gar keine Pegelanzeige sichtbar. Was sind mögliche Gründe?",
    optionen: [
      "Die Audioaufnahme ist im Kamera-Menü deaktiviert (OFF)",
      "Die Display-Ansicht zeigt die Pegel nicht an (Disp-Taste durchschalten)",
      "Der Kopfhörer ist nicht eingesteckt",
      "Die Speicherkarte ist fast voll",
    ],
    richtig: [0, 1],
    feedbackRichtig:
      "Richtig: Ohne aktivierte Audioaufnahme gibt es nichts anzuzeigen, und in manchen Display-Ansichten fehlen die Pegel schlicht. Kopfhörer und Karte haben mit der ANZEIGE nichts zu tun.",
    feedbackFalsch:
      "Denk daran, was die Anzeige speist: die Audioaufnahme selbst (Menü: ON?) und die gewählte Display-Ansicht. Der Kopfhörer betrifft nur das Abhören, die Karte nur die Restlaufzeit – beides lässt die Pegelanzeige nicht verschwinden.",
  },
];
