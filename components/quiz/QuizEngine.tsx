"use client";

/**
 * Engine für den Modul-Übungsmodus:
 * Intro → Frage → Feedback → … → Ergebnis (Badge bei ≥ 80 %).
 * Ein abgebrochener Durchgang kann über localStorage fortgesetzt werden.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FrageRenderer } from "@/components/quiz/frage-typen";
import { FeedbackPanel } from "@/components/quiz/FeedbackPanel";
import { ExitButton } from "@/components/quiz/ExitButton";
import { istRichtig, mische } from "@/lib/quiz-utils";
import {
  ladeSession,
  loescheSession,
  speichereModulErgebnis,
  speichereSession,
} from "@/lib/quiz-storage";
import { BESTEHENSGRENZE, type ModulInfo, type Question } from "@/data/questions";

type Phase = "intro" | "frage" | "ergebnis";

export function QuizEngine({
  modul,
  fragen,
}: {
  modul: ModulInfo;
  fragen: Question[];
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [reihenfolge, setReihenfolge] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [richtigAnzahl, setRichtigAnzahl] = useState(0);
  const [antwort, setAntwort] = useState<unknown>(undefined);
  const [beantwortet, setBeantwortet] = useState(false);
  const [warRichtig, setWarRichtig] = useState(false);
  const [fortsetzbar, setFortsetzbar] = useState(false);

  // Nach dem Mounten prüfen, ob eine unterbrochene Session existiert.
  useEffect(() => {
    const s = ladeSession(modul.id);
    if (s && s.index > 0 && s.index < s.reihenfolge.length) setFortsetzbar(true);
  }, [modul.id]);

  function starten(fortsetzen: boolean) {
    const gespeichert = fortsetzen ? ladeSession(modul.id) : null;
    if (gespeichert) {
      const nachId = new Map(fragen.map((f) => [f.id, f]));
      const wiederhergestellt = gespeichert.reihenfolge
        .map((id) => nachId.get(id))
        .filter((f): f is Question => f !== undefined);
      // Falls sich der Fragenpool geändert hat, lieber neu starten.
      if (wiederhergestellt.length === fragen.length) {
        setReihenfolge(wiederhergestellt);
        setIndex(gespeichert.index);
        setRichtigAnzahl(gespeichert.richtig);
        setPhase("frage");
        return;
      }
    }
    loescheSession();
    setReihenfolge(mische(fragen));
    setIndex(0);
    setRichtigAnzahl(0);
    setPhase("frage");
  }

  function beantworten(a: unknown) {
    if (beantwortet) return;
    const frage = reihenfolge[index];
    const korrekt = istRichtig(frage, a);
    setAntwort(a);
    setWarRichtig(korrekt);
    setBeantwortet(true);
    const neuRichtig = richtigAnzahl + (korrekt ? 1 : 0);
    setRichtigAnzahl(neuRichtig);
    // Stand nach jeder Antwort sichern → Fortsetzen möglich.
    speichereSession({
      modulId: modul.id,
      reihenfolge: reihenfolge.map((f) => f.id),
      index: index + 1,
      richtig: neuRichtig,
    });
  }

  function weiter() {
    setBeantwortet(false);
    setAntwort(undefined);
    if (index + 1 >= reihenfolge.length) {
      const quote = richtigAnzahl / reihenfolge.length;
      speichereModulErgebnis(modul.id, quote, quote >= BESTEHENSGRENZE);
      loescheSession();
      setPhase("ergebnis");
    } else {
      setIndex((i) => i + 1);
    }
  }

  /* ---------- Intro ---------- */
  if (phase === "intro") {
    return (
      <Card>
        <CardContent className="flex flex-col gap-4 pt-2">
          <div>
            <h1 className="text-xl font-bold">
              Modul {modul.id}: {modul.titel}
            </h1>
            <p className="mt-1 text-muted-foreground">{modul.beschreibung}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {fragen.length} Fragen · bestanden ab {Math.round(BESTEHENSGRENZE * 100)} % ·
            nach jeder Frage bekommst du Feedback. Du kannst den Test beliebig oft wiederholen.
          </p>
          <Button size="lg" className="h-13 text-base" onClick={() => starten(false)}>
            {fortsetzbar ? "Neu starten" : "Los geht’s"}
          </Button>
          {fortsetzbar && (
            <Button
              size="lg"
              variant="secondary"
              className="h-13 text-base"
              onClick={() => starten(true)}
            >
              Unterbrochenen Durchgang fortsetzen
            </Button>
          )}
          <Button variant="ghost" nativeButton={false} render={<Link href="/" />}>
            Zurück zur Übersicht
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* ---------- Ergebnis ---------- */
  if (phase === "ergebnis") {
    const quote = richtigAnzahl / reihenfolge.length;
    const bestanden = quote >= BESTEHENSGRENZE;
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <CardContent className="flex flex-col items-center gap-4 pt-2 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
              className={
                bestanden
                  ? "flex size-24 items-center justify-center rounded-full bg-emerald-500/15 text-5xl"
                  : "flex size-24 items-center justify-center rounded-full bg-muted text-5xl"
              }
              aria-hidden
            >
              {bestanden ? "🏅" : "📋"}
            </motion.div>
            <div>
              <h2 className="text-xl font-bold">
                {bestanden ? "Modul bestanden!" : "Noch nicht bestanden"}
              </h2>
              <p className="mt-1 text-muted-foreground">
                {richtigAnzahl} von {reihenfolge.length} Fragen richtig (
                {Math.round(quote * 100)} %)
              </p>
            </div>
            {bestanden ? (
              <p className="text-sm text-muted-foreground">
                Damit hast du dir das Badge für „{modul.titel}“ verdient. Es zählt nur,
                weil du die {Math.round(BESTEHENSGRENZE * 100)}-%-Schwelle wirklich erreicht hast.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Für das Badge brauchst du mindestens {Math.round(BESTEHENSGRENZE * 100)} %.
                Schau dir das Feedback zu den falschen Antworten an und versuch’s direkt
                nochmal – Wiederholen ist hier ausdrücklich erwünscht.
              </p>
            )}
            <div className="flex w-full flex-col gap-2">
              <Button size="lg" className="h-13 text-base" onClick={() => starten(false)}>
                Nochmal üben
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-13 text-base"
                nativeButton={false} render={<Link href="/" />}
              >
                Zur Übersicht
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  /* ---------- Frage ---------- */
  const frage = reihenfolge[index];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <ExitButton
          hinweis="Das Modul startet dann beim nächsten Mal wieder von vorn."
          onBeforeExit={() => loescheSession()}
        />
        <span className="text-sm text-white/70">
          Modul {modul.id}: {modul.titel}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Progress value={((index + (beantwortet ? 1 : 0)) / reihenfolge.length) * 100} className="h-2" />
        <span className="shrink-0 text-sm tabular-nums text-white/70">
          {index + 1}/{reihenfolge.length}
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={frage.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-4"
        >
          <h2 className="rounded-xl bg-card px-4 py-3 text-lg font-semibold leading-snug text-card-foreground ring-1 ring-foreground/10">{frage.frage}</h2>
          <FrageRenderer
            key={frage.id}
            frage={frage}
            onAntwort={beantworten}
            gesperrt={beantwortet}
            antwort={antwort}
          />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {beantwortet && (
          <FeedbackPanel
            richtig={warRichtig}
            text={warRichtig ? frage.feedbackRichtig : frage.feedbackFalsch}
            onWeiter={weiter}
            letzteFrage={index + 1 >= reihenfolge.length}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
