# Kameraschein-Quiz

Mobile-first Übungsquiz zur Vorbereitung auf die praktische Kamerascheinprüfung
an der HS Ansbach (Sony FX30). Rein client-seitig: kein Login, kein Backend,
kein Tracking – der Übungsstand liegt ausschließlich im localStorage des Browsers.

## Setup

```bash
npm install
npm run dev        # Entwicklung: http://localhost:3000
npm run build      # Produktions-Build (Standard-Next.js, keine Env-Variablen nötig)
```

Deployment: Das Projekt ist ohne Zusatzkonfiguration über Vercel
„Import Git Repository“ deploybar.

## Modi

- **Übungsmodus (Modul 1–5):** Alle Fragen eines Moduls in zufälliger
  Reihenfolge, mit lernbezogenem Feedback nach jeder Antwort. Ab **80 %**
  gilt das Modul als bestanden und es gibt ein Badge. Ein abgebrochener
  Durchgang kann fortgesetzt werden.
- **Blitzrunde:** 12 Fragen quer durch alle Module, 15 Sekunden pro Frage,
  Punkte mit Geschwindigkeitsbonus (Kahoot-Prinzip). Nur Ein-Tap-Fragetypen.
- **Abschluss-Status:** Übersicht bestanden/offen je Modul plus Gesamtstatus
  (reine Bildschirmanzeige).

## Struktur der Fragendateien

Die Fragen liegen getrennt von der UI in `data/questions/`:

```
data/questions/
├── types.ts      # Typdefinitionen + Kommentare zu jedem Fragetyp
├── modul-1.ts    # Equipment übernehmen   (alte Moodle-Sektionen 2–3)
├── modul-2.ts    # Drehfertig machen      (Sektionen 4–6)
├── modul-3.ts    # Kamera konfigurieren   (Sektionen 7–10)
├── modul-4.ts    # Ton aufnehmen          (Sektionen 11–15)
├── modul-5.ts    # Generalprobe & Prüfung (Sektion 16)
└── index.ts      # Modul-Metadaten, Gesamtpool, Bestehensgrenze (80 %)
```

### Neue Frage hinzufügen

1. Passende Datei öffnen (z. B. `data/questions/modul-2.ts`).
2. Ein Objekt nach dem Muster der vorhandenen Fragen ergänzen. Es gibt sechs
   Typen: `single`, `multiple`, `truefalse`, `match`, `order`, `gapfill`
   (alle in `types.ts` dokumentiert).
3. `id` eindeutig vergeben (Konvention `m<Modul>-<Nummer>`, z. B. `m2-10`).
4. Beide Feedback-Texte schreiben: `feedbackRichtig` und `feedbackFalsch` —
   bei falsch bitte den Denkfehler erklären, nicht nur korrigieren.

Beispiel (Single Choice):

```ts
{
  id: "m2-10",
  modul: 2,
  type: "single",
  frage: "Deine Frage?",
  optionen: ["Richtige Antwort", "Distraktor A", "Distraktor B"],
  richtig: 0, // Index in `optionen`
  feedbackRichtig: "Kurz bestätigen und einordnen.",
  feedbackFalsch: "Denkfehler benennen und die Regel erklären.",
},
```

Mehr ist nicht nötig – Startseite, Modultest und (bei `single`/`truefalse`)
auch die Blitzrunde nehmen die neue Frage automatisch auf.

## Offene fachliche Prüfpunkte (`// TODO: fachlich prüfen`)

Diese Fragen/Fakten gehen nicht eindeutig aus dem alten Kursmaterial hervor
und wurden deshalb **nicht** geraten, sondern als Kommentar in den Fragendateien
markiert. Bitte fachlich klären, bevor Studierende die App nutzen:

| Datei | Punkt |
|---|---|
| `data/questions/modul-2.ts` | Wann nutzt man die **Auszieh-Funktion der Bodenspinne**? (Prüfungsfrage vorhanden, Antwort im Material nicht erklärt) |
| `data/questions/modul-3.ts` | **Standardwerte Farbtemperatur** Kunstlicht/Tageslicht (üblich 3200 K / 5600 K – im Kurs nicht beziffert) |
| `data/questions/modul-3.ts` | **Monitor-LUT**: Konzept und Menüpfad zum Ein-/Ausschalten |
| `data/questions/modul-3.ts` | **Ablauf manueller Weißabgleich an der FX30** (Inhalt liegt nur als Video vor) |
| `data/questions/modul-5.ts` | Begründung, warum **4K auch für HD-Abgabe** zu präferieren ist |

Zusätzlich inhaltlich abgesichert, aber erwähnenswert: Die Antwort zu `m5-5`
(Akkuwechsel nur bei ausgeschalteter Kamera) gibt die Kursregel wieder; eine
technische Begründung nennt das Material nicht.

## Tech-Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui (nur Button, Card, Progress, Badge)
- [motion](https://motion.dev) für Übergänge, Countdown und Feedback-Animationen
