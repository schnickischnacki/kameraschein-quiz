/**
 * Fragetypen für das Kameraschein-Übungsquiz.
 *
 * Jede Frage ist ein Objekt mit einem `type`-Feld, das bestimmt, wie die
 * Frage dargestellt und ausgewertet wird. Alle Typen sind automatisch
 * (deterministisch, client-seitig) auswertbar — kein Freitext.
 *
 * Neue Frage hinzufügen:
 *  1. Passende Datei öffnen (modul-1.ts … modul-5.ts).
 *  2. Ein Objekt nach dem Muster der vorhandenen Fragen ergänzen.
 *  3. `id` muss eindeutig sein (Konvention: "m<Modul>-<laufende Nummer>").
 *  4. Feedback immer für richtig UND falsch angeben — bei falsch bitte den
 *     typischen Denkfehler ansprechen, nicht nur "leider falsch".
 */

/** Gemeinsame Felder aller Fragen. */
interface BaseQuestion {
  /** Eindeutige ID, z. B. "m1-3". Wird für Speicherung/Fortsetzen genutzt. */
  id: string;
  /** Modul-Zuordnung 1–5 (siehe data/questions/index.ts). */
  modul: 1 | 2 | 3 | 4 | 5;
  /** Die eigentliche Fragestellung (Du-Ansprache). */
  frage: string;
  /** Feedback bei richtiger Antwort — kurz, lernbezogen. */
  feedbackRichtig: string;
  /** Feedback bei falscher Antwort — benennt den Denkfehler / die Regel. */
  feedbackFalsch: string;
  /**
   * Für die Blitzrunde geeignet? Nur schnell beantwortbare Typen (ein Tap).
   * Wird automatisch aus dem Typ abgeleitet, kann hier aber pro Frage
   * überschrieben werden (z. B. `blitz: false` für sehr lange Fragen).
   */
  blitz?: boolean;
}

/** Genau EINE richtige Antwort aus 3–4 Optionen. */
export interface SingleChoiceQuestion extends BaseQuestion {
  type: "single";
  optionen: string[];
  /** Index der richtigen Option in `optionen` (0-basiert). */
  richtig: number;
}

/** MEHRERE richtige Antworten; alle richtigen müssen gewählt werden. */
export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple";
  optionen: string[];
  /** Indizes ALLER richtigen Optionen (0-basiert). */
  richtig: number[];
}

/** Aussage, die als wahr oder falsch bewertet wird. */
export interface TrueFalseQuestion extends BaseQuestion {
  type: "truefalse";
  /** true = die Aussage in `frage` ist wahr. */
  richtig: boolean;
}

/**
 * Zuordnung: Jedem linken Begriff wird per Auswahl der passende rechte
 * Begriff zugeordnet. Die rechten Begriffe werden in der UI gemischt.
 */
export interface MatchQuestion extends BaseQuestion {
  type: "match";
  paare: { links: string; rechts: string }[];
}

/**
 * Reihenfolge: `schritte` steht hier in der KORREKTEN Reihenfolge.
 * Die UI mischt die Schritte und lässt sie per Tap sortieren.
 */
export interface OrderQuestion extends BaseQuestion {
  type: "order";
  schritte: string[];
}

/**
 * Lückentext mit Wortauswahl: `text` enthält `___` als Platzhalter,
 * pro Lücke gibt es in `luecken` eine kleine Optionsliste (kein Tippen).
 * Anzahl der `___` im Text muss der Länge von `luecken` entsprechen.
 */
export interface GapfillQuestion extends BaseQuestion {
  type: "gapfill";
  text: string;
  luecken: {
    optionen: string[];
    /** Index der richtigen Option (0-basiert). */
    richtig: number;
  }[];
}

export type Question =
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | MatchQuestion
  | OrderQuestion
  | GapfillQuestion;

/** Metadaten eines Moduls (Anzeige auf der Startseite). */
export interface ModulInfo {
  id: 1 | 2 | 3 | 4 | 5;
  titel: string;
  beschreibung: string;
  /** Alte Moodle-Sektionen, aus denen die Fragen stammen (Doku). */
  alteSektionen: string;
}

/** Ist eine Frage standardmäßig blitzrunden-tauglich? (Ein-Tap-Typen) */
export function istBlitzTauglich(q: Question): boolean {
  if (q.blitz !== undefined) return q.blitz;
  return q.type === "single" || q.type === "truefalse";
}
