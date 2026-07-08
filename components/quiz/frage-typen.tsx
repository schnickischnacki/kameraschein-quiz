"use client";

/**
 * Renderer für die sechs Fragetypen.
 * Alle Komponenten sind mobile-first: große Touch-Ziele, keine Hover-only-
 * Interaktionen. Nach dem Beantworten (`gesperrt`) wird die Lösung markiert.
 */

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { mische } from "@/lib/quiz-utils";
import type {
  GapfillQuestion,
  MatchQuestion,
  MultipleChoiceQuestion,
  OrderQuestion,
  Question,
  SingleChoiceQuestion,
  TrueFalseQuestion,
} from "@/data/questions/types";

interface FrageProps<Q extends Question, A> {
  frage: Q;
  /** Wird beim Absenden mit der Antwort aufgerufen. */
  onAntwort: (antwort: A) => void;
  /** true, sobald beantwortet – dann Lösung anzeigen, Eingaben sperren. */
  gesperrt: boolean;
  /** Die abgegebene Antwort (für die Lösungsanzeige). */
  antwort?: A;
}

/* ---------- gemeinsame Bausteine ---------- */

function optionKlasse(opts: {
  gewaehlt: boolean;
  richtig?: boolean;
  gesperrt: boolean;
}) {
  return cn(
    "w-full min-h-14 rounded-xl border-2 px-4 py-3 text-left text-base leading-snug transition-colors",
    "active:scale-[0.99]",
    !opts.gesperrt && "border-border bg-card text-card-foreground",
    !opts.gesperrt && opts.gewaehlt && "border-primary bg-primary/10",
    opts.gesperrt && opts.richtig === true && "border-emerald-500 bg-emerald-50 text-emerald-950",
    opts.gesperrt &&
      opts.richtig === false &&
      opts.gewaehlt &&
      "border-red-500 bg-red-50 text-red-950",
    opts.gesperrt &&
      opts.richtig === false &&
      !opts.gewaehlt &&
      "border-border bg-muted text-muted-foreground"
  );
}

function AbsendenButton({
  bereit,
  onClick,
}: {
  bereit: boolean;
  onClick: () => void;
}) {
  return (
    <Button size="lg" className="mt-4 h-13 w-full text-base" disabled={!bereit} onClick={onClick}>
      Antworten
    </Button>
  );
}

/* ---------- Single Choice ---------- */

export function SingleChoiceFrage({
  frage,
  onAntwort,
  gesperrt,
  antwort,
}: FrageProps<SingleChoiceQuestion, number>) {
  // Optionen einmalig mischen, damit die richtige Antwort nicht immer oben steht.
  const reihenfolge = useMemo(() => mische(frage.optionen.map((_, i) => i)), [frage.id]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex flex-col gap-3">
      {reihenfolge.map((i) => (
        <button
          key={i}
          disabled={gesperrt}
          onClick={() => onAntwort(i)}
          className={optionKlasse({
            gewaehlt: antwort === i,
            richtig: gesperrt ? i === frage.richtig : undefined,
            gesperrt,
          })}
        >
          {frage.optionen[i]}
        </button>
      ))}
    </div>
  );
}

/* ---------- Multiple Choice ---------- */

export function MultipleChoiceFrage({
  frage,
  onAntwort,
  gesperrt,
  antwort,
}: FrageProps<MultipleChoiceQuestion, number[]>) {
  const [gewaehlt, setGewaehlt] = useState<number[]>([]);
  const reihenfolge = useMemo(() => mische(frage.optionen.map((_, i) => i)), [frage.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const anzeige = gesperrt ? (antwort ?? []) : gewaehlt;

  function toggle(i: number) {
    setGewaehlt((g) => (g.includes(i) ? g.filter((x) => x !== i) : [...g, i]));
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">Mehrere Antworten können richtig sein.</p>
      {reihenfolge.map((i) => (
        <button
          key={i}
          disabled={gesperrt}
          onClick={() => toggle(i)}
          className={optionKlasse({
            gewaehlt: anzeige.includes(i),
            richtig: gesperrt ? frage.richtig.includes(i) : undefined,
            gesperrt,
          })}
        >
          <span className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2",
                anzeige.includes(i) ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"
              )}
              aria-hidden
            >
              {anzeige.includes(i) ? "✓" : ""}
            </span>
            {frage.optionen[i]}
          </span>
        </button>
      ))}
      {!gesperrt && (
        <AbsendenButton bereit={gewaehlt.length > 0} onClick={() => onAntwort(gewaehlt)} />
      )}
    </div>
  );
}

/* ---------- Wahr / Falsch ---------- */

export function TrueFalseFrage({
  frage,
  onAntwort,
  gesperrt,
  antwort,
}: FrageProps<TrueFalseQuestion, boolean>) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {([true, false] as const).map((wert) => (
        <button
          key={String(wert)}
          disabled={gesperrt}
          onClick={() => onAntwort(wert)}
          className={cn(
            optionKlasse({
              gewaehlt: antwort === wert,
              richtig: gesperrt ? wert === frage.richtig : undefined,
              gesperrt,
            }),
            "min-h-16 text-center text-lg font-semibold"
          )}
        >
          {wert ? "Wahr" : "Falsch"}
        </button>
      ))}
    </div>
  );
}

/* ---------- Zuordnung ---------- */

export function MatchFrage({
  frage,
  onAntwort,
  gesperrt,
  antwort,
}: FrageProps<MatchQuestion, string[]>) {
  const rechtsOptionen = useMemo(() => mische(frage.paare.map((p) => p.rechts)), [frage.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const [zuordnung, setZuordnung] = useState<string[]>(() => frage.paare.map(() => ""));
  const anzeige = gesperrt ? (antwort ?? zuordnung) : zuordnung;

  return (
    <div className="flex flex-col gap-4">
      {frage.paare.map((paar, i) => {
        const korrekt = gesperrt ? anzeige[i] === paar.rechts : undefined;
        return (
          <div
            key={i}
            className={cn(
              "rounded-xl border-2 p-3",
              korrekt === true && "border-emerald-500 bg-emerald-50 text-emerald-950",
              korrekt === false && "border-red-500 bg-red-50 text-red-950",
              korrekt === undefined && "border-border bg-card"
            )}
          >
            <p className="mb-2 font-medium leading-snug">{paar.links}</p>
            <select
              className="h-12 w-full rounded-lg border border-input bg-background px-3 text-base"
              disabled={gesperrt}
              value={anzeige[i]}
              onChange={(e) =>
                setZuordnung((z) => z.map((v, j) => (j === i ? e.target.value : v)))
              }
            >
              <option value="" disabled>
                … passt zu …
              </option>
              {rechtsOptionen.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {korrekt === false && (
              <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-400">
                Richtig wäre: {paar.rechts}
              </p>
            )}
          </div>
        );
      })}
      {!gesperrt && (
        <AbsendenButton
          bereit={zuordnung.every((z) => z !== "")}
          onClick={() => onAntwort(zuordnung)}
        />
      )}
    </div>
  );
}

/* ---------- Reihenfolge ---------- */

export function OrderFrage({
  frage,
  onAntwort,
  gesperrt,
  antwort,
}: FrageProps<OrderQuestion, string[]>) {
  const gemischt = useMemo(() => mische(frage.schritte), [frage.id]); // eslint-disable-line react-hooks/exhaustive-deps
  // Reihenfolge der Auswahl: Tippen fügt den nächsten Platz zu, erneutes Tippen entfernt.
  const [auswahl, setAuswahl] = useState<string[]>([]);
  const anzeige = gesperrt ? (antwort ?? auswahl) : auswahl;

  function tippe(schritt: string) {
    setAuswahl((a) =>
      a.includes(schritt) ? a.filter((s) => s !== schritt) : [...a, schritt]
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">
        Tippe die Schritte in der richtigen Reihenfolge an (erneut tippen = abwählen).
      </p>
      {gemischt.map((schritt) => {
        const pos = anzeige.indexOf(schritt);
        const korrektePos = frage.schritte.indexOf(schritt);
        const korrekt = gesperrt ? pos === korrektePos : undefined;
        return (
          <button
            key={schritt}
            disabled={gesperrt}
            onClick={() => tippe(schritt)}
            className={cn(
              optionKlasse({ gewaehlt: pos >= 0, richtig: korrekt, gesperrt }),
              "flex items-start gap-3"
            )}
          >
            <span
              className={cn(
                "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                pos >= 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}
            >
              {pos >= 0 ? pos + 1 : "·"}
            </span>
            <span className="flex-1">
              {schritt}
              {gesperrt && korrekt === false && (
                <span className="mt-1 block text-sm text-emerald-700 dark:text-emerald-400">
                  Richtige Position: {korrektePos + 1}
                </span>
              )}
            </span>
          </button>
        );
      })}
      {!gesperrt && (
        <AbsendenButton
          bereit={auswahl.length === frage.schritte.length}
          onClick={() => onAntwort(auswahl)}
        />
      )}
    </div>
  );
}

/* ---------- Lückentext ---------- */

export function GapfillFrage({
  frage,
  onAntwort,
  gesperrt,
  antwort,
}: FrageProps<GapfillQuestion, number[]>) {
  const teile = frage.text.split("___");
  const [gewaehlt, setGewaehlt] = useState<number[]>(() => frage.luecken.map(() => -1));
  const anzeige = gesperrt ? (antwort ?? gewaehlt) : gewaehlt;

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border-2 border-border bg-card p-4 text-base leading-8">
        {teile.map((teil, i) => (
          <span key={i}>
            {teil}
            {i < frage.luecken.length && (
              <select
                className={cn(
                  "mx-1 inline-block h-10 max-w-full rounded-lg border-2 bg-background px-2 align-middle text-base font-medium",
                  !gesperrt && "border-input",
                  gesperrt &&
                    (anzeige[i] === frage.luecken[i].richtig
                      ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                      : "border-red-500 bg-red-50 text-red-950")
                )}
                disabled={gesperrt}
                value={anzeige[i]}
                onChange={(e) =>
                  setGewaehlt((g) =>
                    g.map((v, j) => (j === i ? Number(e.target.value) : v))
                  )
                }
              >
                <option value={-1} disabled>
                  …
                </option>
                {frage.luecken[i].optionen.map((o, oi) => (
                  <option key={oi} value={oi}>
                    {o}
                  </option>
                ))}
              </select>
            )}
          </span>
        ))}
      </div>
      {gesperrt && anzeige.some((g, i) => g !== frage.luecken[i].richtig) && (
        <p className="text-sm text-emerald-700 dark:text-emerald-400">
          Richtig:{" "}
          {frage.luecken.map((l, i) => (
            <span key={i} className="font-medium">
              {i > 0 && " · "}
              {l.optionen[l.richtig]}
            </span>
          ))}
        </p>
      )}
      {!gesperrt && (
        <AbsendenButton
          bereit={gewaehlt.every((g) => g >= 0)}
          onClick={() => onAntwort(gewaehlt)}
        />
      )}
    </div>
  );
}

/* ---------- Dispatcher ---------- */

export function FrageRenderer({
  frage,
  onAntwort,
  gesperrt,
  antwort,
}: {
  frage: Question;
  onAntwort: (antwort: unknown) => void;
  gesperrt: boolean;
  antwort?: unknown;
}) {
  switch (frage.type) {
    case "single":
      return (
        <SingleChoiceFrage frage={frage} onAntwort={onAntwort} gesperrt={gesperrt} antwort={antwort as number} />
      );
    case "multiple":
      return (
        <MultipleChoiceFrage frage={frage} onAntwort={onAntwort} gesperrt={gesperrt} antwort={antwort as number[]} />
      );
    case "truefalse":
      return (
        <TrueFalseFrage frage={frage} onAntwort={onAntwort} gesperrt={gesperrt} antwort={antwort as boolean} />
      );
    case "match":
      return (
        <MatchFrage frage={frage} onAntwort={onAntwort} gesperrt={gesperrt} antwort={antwort as string[]} />
      );
    case "order":
      return (
        <OrderFrage frage={frage} onAntwort={onAntwort} gesperrt={gesperrt} antwort={antwort as string[]} />
      );
    case "gapfill":
      return (
        <GapfillFrage frage={frage} onAntwort={onAntwort} gesperrt={gesperrt} antwort={antwort as number[]} />
      );
  }
}
