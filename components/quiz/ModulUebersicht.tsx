"use client";

/**
 * Startseite: Modulübersicht mit Fortschrittsanzeige und Badges.
 * Fortschritt kommt aus localStorage und wird erst nach dem Mounten gelesen
 * (vermeidet Hydration-Konflikte).
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ladeFortschritt, type Fortschritt } from "@/lib/quiz-storage";
import { fragenProModul, module } from "@/data/questions";

export function ModulUebersicht() {
  const [fortschritt, setFortschritt] = useState<Fortschritt | null>(null);

  useEffect(() => {
    setFortschritt(ladeFortschritt());
  }, []);

  const bestandenAnzahl = module.filter(
    (m) => fortschritt?.module[m.id]?.bestanden
  ).length;

  return (
    <main className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold">🎬 Kameraschein-Quiz</h1>
        <p className="mt-1 text-muted-foreground">
          Üb hier für die praktische Kamerascheinprüfung – Modul für Modul oder
          quer durch alles in der Blitzrunde. Alles bleibt auf deinem Gerät.
        </p>
      </header>

      {/* Gesamtfortschritt */}
      <section aria-label="Gesamtfortschritt">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium">Dein Fortschritt</span>
          <span className="tabular-nums text-muted-foreground">
            {bestandenAnzahl}/{module.length} Module bestanden
          </span>
        </div>
        <Progress value={(bestandenAnzahl / module.length) * 100} className="h-3" />
      </section>

      {/* Module */}
      <section className="flex flex-col gap-3" aria-label="Module">
        {module.map((m, i) => {
          const ergebnis = fortschritt?.module[m.id];
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/modul/${m.id}`} className="block">
                <Card className="transition-colors active:bg-accent">
                  <CardContent className="flex items-center gap-3 py-1">
                    <div
                      className={
                        ergebnis?.bestanden
                          ? "flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-2xl"
                          : "flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-lg font-bold text-muted-foreground"
                      }
                      aria-hidden
                    >
                      {ergebnis?.bestanden ? "🏅" : m.id}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold leading-tight">
                        Modul {m.id}: {m.titel}
                      </p>
                      <p className="mt-0.5 truncate text-sm text-muted-foreground">
                        {m.beschreibung}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {fragenProModul[m.id].length} Fragen
                        {ergebnis && (
                          <>
                            {" · beste Runde: "}
                            {Math.round(ergebnis.besteQuote * 100)} %
                          </>
                        )}
                      </p>
                    </div>
                    {ergebnis?.bestanden ? (
                      <Badge className="shrink-0 bg-emerald-600 text-white">bestanden</Badge>
                    ) : ergebnis ? (
                      <Badge variant="secondary" className="shrink-0">geübt</Badge>
                    ) : null}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </section>

      {/* Blitzrunde + Abschluss */}
      <section className="flex flex-col gap-3" aria-label="Weitere Modi">
        <Button
          size="lg"
          className="h-14 text-base"
          nativeButton={false} render={<Link href="/blitzrunde" />}
        >
          ⚡ Blitzrunde – gegen die Zeit
          {fortschritt && fortschritt.blitzHighscore > 0 && (
            <span className="ml-1 font-normal opacity-80">
              (Highscore: {fortschritt.blitzHighscore})
            </span>
          )}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="h-14 text-base"
          nativeButton={false} render={<Link href="/abschluss" />}
        >
          📊 Mein Abschluss-Status
        </Button>
      </section>

      <footer className="text-center text-xs text-muted-foreground">
        Kein Login, keine Datenübertragung – dein Übungsstand wird nur lokal im
        Browser gespeichert.
      </footer>
    </main>
  );
}
