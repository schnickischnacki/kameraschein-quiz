import type { Question } from "@/data/questions/types";

/** Fisher-Yates-Shuffle (nicht mutierend). */
export function mische<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Antwort einer Frage deterministisch auswerten.
 * `antwort` ist je nach Fragetyp unterschiedlich strukturiert:
 *  - single:    number (gewählter Options-Index)
 *  - multiple:  number[] (gewählte Options-Indizes)
 *  - truefalse: boolean
 *  - match:     string[] (gewählter rechter Begriff je linkem Begriff, in Paar-Reihenfolge)
 *  - order:     string[] (Schritte in der vom User gewählten Reihenfolge)
 *  - gapfill:   number[] (gewählter Options-Index je Lücke)
 */
export function istRichtig(frage: Question, antwort: unknown): boolean {
  switch (frage.type) {
    case "single":
      return antwort === frage.richtig;
    case "multiple": {
      const gewaehlt = [...(antwort as number[])].sort((a, b) => a - b);
      const richtig = [...frage.richtig].sort((a, b) => a - b);
      return (
        gewaehlt.length === richtig.length &&
        gewaehlt.every((v, i) => v === richtig[i])
      );
    }
    case "truefalse":
      return antwort === frage.richtig;
    case "match": {
      const gewaehlt = antwort as string[];
      return frage.paare.every((p, i) => gewaehlt[i] === p.rechts);
    }
    case "order": {
      const gewaehlt = antwort as string[];
      return frage.schritte.every((s, i) => gewaehlt[i] === s);
    }
    case "gapfill": {
      const gewaehlt = antwort as number[];
      return frage.luecken.every((l, i) => gewaehlt[i] === l.richtig);
    }
  }
}

/** Punkte für die Blitzrunde: Basis + Geschwindigkeitsbonus (Kahoot-Prinzip). */
export function blitzPunkte(richtig: boolean, restSekunden: number, gesamtSekunden: number): number {
  if (!richtig) return 0;
  const basis = 100;
  const bonus = Math.round(100 * Math.max(0, restSekunden) / gesamtSekunden);
  return basis + bonus;
}
