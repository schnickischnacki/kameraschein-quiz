/**
 * Client-seitige Speicherung in localStorage.
 * Kein Server, kein Tracking – nur der eigene Lernfortschritt im Browser.
 */

export interface ModulErgebnis {
  /** Bester erreichter Anteil richtiger Fragen (0–1). */
  besteQuote: number;
  /** Wurde die 80-%-Schwelle mindestens einmal erreicht? */
  bestanden: boolean;
}

export interface Fortschritt {
  module: Record<number, ModulErgebnis>;
  blitzHighscore: number;
  /** Ergebnis der zuletzt gespielten (abgeschlossenen) Blitzrunde. */
  blitzLetzteRunde?: { richtig: number; gesamt: number; punkte: number };
}

/** Laufende, unterbrochene Quiz-Session (zum Fortsetzen). */
export interface GespeicherteSession {
  modulId: number;
  /** Fragen-IDs in der gemischten Reihenfolge dieser Session. */
  reihenfolge: string[];
  /** Index der nächsten unbeantworteten Frage. */
  index: number;
  /** Anzahl bisher richtig beantworteter Fragen. */
  richtig: number;
}

const FORTSCHRITT_KEY = "kameraschein-quiz-fortschritt-v1";
const SESSION_KEY = "kameraschein-quiz-session-v1";

export function ladeFortschritt(): Fortschritt {
  if (typeof window === "undefined") return { module: {}, blitzHighscore: 0 };
  try {
    const raw = window.localStorage.getItem(FORTSCHRITT_KEY);
    if (!raw) return { module: {}, blitzHighscore: 0 };
    const parsed = JSON.parse(raw) as Fortschritt;
    return {
      module: parsed.module ?? {},
      blitzHighscore: parsed.blitzHighscore ?? 0,
      blitzLetzteRunde: parsed.blitzLetzteRunde,
    };
  } catch {
    return { module: {}, blitzHighscore: 0 };
  }
}

function speichereFortschritt(f: Fortschritt) {
  try {
    window.localStorage.setItem(FORTSCHRITT_KEY, JSON.stringify(f));
  } catch {
    // localStorage nicht verfügbar (z. B. Private Mode) – App funktioniert trotzdem.
  }
}

export function speichereModulErgebnis(modulId: number, quote: number, bestanden: boolean) {
  const f = ladeFortschritt();
  const bisher = f.module[modulId];
  f.module[modulId] = {
    besteQuote: Math.max(bisher?.besteQuote ?? 0, quote),
    bestanden: (bisher?.bestanden ?? false) || bestanden,
  };
  speichereFortschritt(f);
}

export function speichereBlitzHighscore(punkte: number) {
  const f = ladeFortschritt();
  if (punkte > f.blitzHighscore) {
    f.blitzHighscore = punkte;
    speichereFortschritt(f);
  }
}

export function speichereBlitzLetzteRunde(runde: {
  richtig: number;
  gesamt: number;
  punkte: number;
}) {
  const f = ladeFortschritt();
  f.blitzLetzteRunde = runde;
  speichereFortschritt(f);
}

export function ladeSession(modulId: number): GespeicherteSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as GespeicherteSession;
    return s.modulId === modulId ? s : null;
  } catch {
    return null;
  }
}

export function speichereSession(s: GespeicherteSession) {
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  } catch {
    // ignorieren
  }
}

export function loescheSession() {
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignorieren
  }
}
