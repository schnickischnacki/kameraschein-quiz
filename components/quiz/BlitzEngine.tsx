"use client";

/**
 * Blitzrunde (Kahoot-Charakter): 12 Fragen aus dem Gesamtpool, pro Frage
 * 15 Sekunden Countdown. Punkte = Basis + Geschwindigkeitsbonus.
 * Es kommen nur schnell beantwortbare Fragetypen in den Pool
 * (Single Choice, Wahr/Falsch – ein Tap genügt).
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FrageRenderer } from "@/components/quiz/frage-typen";
import { FeedbackPanel } from "@/components/quiz/FeedbackPanel";
import { blitzPunkte, istRichtig, mische } from "@/lib/quiz-utils";
import { ladeFortschritt, speichereBlitzHighscore } from "@/lib/quiz-storage";
import { alleFragen, istBlitzTauglich, type Question } from "@/data/questions";

const FRAGEN_PRO_RUNDE = 12;
const SEKUNDEN_PRO_FRAGE = 15;

type Phase = "intro" | "frage" | "ergebnis";

export function BlitzEngine() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [runde, setRunde] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [punkte, setPunkte] = useState(0);
  const [richtigAnzahl, setRichtigAnzahl] = useState(0);
  const [antwort, setAntwort] = useState<unknown>(undefined);
  const [beantwortet, setBeantwortet] = useState(false);
  const [warRichtig, setWarRichtig] = useState(false);
  const [zeitAbgelaufen, setZeitAbgelaufen] = useState(false);
  const [letzterBonus, setLetzterBonus] = useState(0);
  const [restSekunden, setRestSekunden] = useState(SEKUNDEN_PRO_FRAGE);
  const [highscore, setHighscore] = useState(0);
  const frageStart = useRef(0);

  useEffect(() => {
    setHighscore(ladeFortschritt().blitzHighscore);
  }, []);

  // Countdown pro Frage.
  useEffect(() => {
    if (phase !== "frage" || beantwortet) return;
    frageStart.current = Date.now();
    setRestSekunden(SEKUNDEN_PRO_FRAGE);
    const interval = setInterval(() => {
      const vergangen = (Date.now() - frageStart.current) / 1000;
      const rest = Math.max(0, SEKUNDEN_PRO_FRAGE - vergangen);
      setRestSekunden(rest);
      if (rest <= 0) {
        clearInterval(interval);
        // Zeit abgelaufen → zählt als falsch.
        setZeitAbgelaufen(true);
        setWarRichtig(false);
        setBeantwortet(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [phase, index, beantwortet]);

  function starten() {
    const pool = mische(alleFragen.filter(istBlitzTauglich));
    setRunde(pool.slice(0, FRAGEN_PRO_RUNDE));
    setIndex(0);
    setPunkte(0);
    setRichtigAnzahl(0);
    setBeantwortet(false);
    setZeitAbgelaufen(false);
    setAntwort(undefined);
    setPhase("frage");
  }

  function beantworten(a: unknown) {
    if (beantwortet) return;
    const frage = runde[index];
    const korrekt = istRichtig(frage, a);
    const rest = Math.max(0, SEKUNDEN_PRO_FRAGE - (Date.now() - frageStart.current) / 1000);
    const p = blitzPunkte(korrekt, rest, SEKUNDEN_PRO_FRAGE);
    setAntwort(a);
    setWarRichtig(korrekt);
    setLetzterBonus(p);
    setBeantwortet(true);
    if (korrekt) {
      setPunkte((x) => x + p);
      setRichtigAnzahl((x) => x + 1);
    }
  }

  function weiter() {
    setBeantwortet(false);
    setZeitAbgelaufen(false);
    setAntwort(undefined);
    if (index + 1 >= runde.length) {
      speichereBlitzHighscore(punkte);
      setHighscore((h) => Math.max(h, punkte));
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
            <h1 className="text-xl font-bold">⚡ Blitzrunde</h1>
            <p className="mt-1 text-muted-foreground">
              {FRAGEN_PRO_RUNDE} Fragen quer durch alle Module. Pro Frage hast du{" "}
              {SEKUNDEN_PRO_FRAGE} Sekunden – je schneller du richtig antwortest,
              desto mehr Punkte gibt es.
            </p>
          </div>
          {highscore > 0 && (
            <p className="text-sm text-muted-foreground">
              Dein Highscore: <span className="font-semibold">{highscore} Punkte</span>
            </p>
          )}
          <Button size="lg" className="h-13 text-base" onClick={starten}>
            Blitzrunde starten
          </Button>
          <Button variant="ghost" nativeButton={false} render={<Link href="/" />}>
            Zurück zur Übersicht
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* ---------- Ergebnis ---------- */
  if (phase === "ergebnis") {
    const neuerHighscore = punkte >= highscore && punkte > 0;
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <CardContent className="flex flex-col items-center gap-4 pt-2 text-center">
            <motion.p
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="text-5xl font-black tabular-nums"
            >
              {punkte}
            </motion.p>
            <div>
              <h2 className="text-xl font-bold">
                {neuerHighscore ? "Neuer Highscore! ⚡" : "Runde beendet"}
              </h2>
              <p className="mt-1 text-muted-foreground">
                {richtigAnzahl} von {runde.length} Fragen richtig
                {!neuerHighscore && highscore > 0 && <> · Highscore: {highscore}</>}
              </p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <Button size="lg" className="h-13 text-base" onClick={starten}>
                Noch eine Runde
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
  const frage = runde[index];
  const zeitAnteil = restSekunden / SEKUNDEN_PRO_FRAGE;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="tabular-nums">
          Frage {index + 1}/{runde.length}
        </span>
        <span className="font-semibold tabular-nums text-foreground">{punkte} Punkte</span>
      </div>
      {/* Countdown-Balken */}
      <div className="h-3 overflow-hidden rounded-full bg-muted" aria-hidden>
        <motion.div
          className={
            zeitAnteil > 0.4
              ? "h-full rounded-full bg-emerald-500"
              : zeitAnteil > 0.15
                ? "h-full rounded-full bg-amber-500"
                : "h-full rounded-full bg-red-500"
          }
          animate={{ width: `${zeitAnteil * 100}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
      <p className="text-center text-2xl font-bold tabular-nums" aria-live="polite">
        {Math.ceil(restSekunden)}
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={frage.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-lg font-semibold leading-snug">{frage.frage}</h2>
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
            text={
              zeitAbgelaufen
                ? `⏱ Zeit abgelaufen! ${frage.feedbackFalsch}`
                : warRichtig
                  ? `+${letzterBonus} Punkte. ${frage.feedbackRichtig}`
                  : frage.feedbackFalsch
            }
            onWeiter={weiter}
            weiterLabel={index + 1 >= runde.length ? "Zum Ergebnis" : "Nächste Frage"}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
