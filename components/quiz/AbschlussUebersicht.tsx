"use client";

/**
 * Abschluss-Screen: Status je Modul (bestanden / noch nicht) plus
 * Gesamtstatus. Reine Bildschirmanzeige – kein Zertifikat, kein Versand.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ladeFortschritt, type Fortschritt } from "@/lib/quiz-storage";
import { module } from "@/data/questions";

export function AbschlussUebersicht() {
  const [fortschritt, setFortschritt] = useState<Fortschritt | null>(null);

  useEffect(() => {
    setFortschritt(ladeFortschritt());
  }, []);

  const bestandene = module.filter((m) => fortschritt?.module[m.id]?.bestanden);
  const allesBestanden = bestandene.length === module.length;

  return (
    <main className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold">📊 Dein Abschluss-Status</h1>
        <p className="mt-1 text-muted-foreground">
          Überblick über alle Modultests. Bestanden heißt: mindestens 80 % in
          einem Durchgang.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card
          className={
            allesBestanden ? "border-emerald-500 bg-emerald-500/10" : undefined
          }
        >
          <CardContent className="py-2 text-center">
            {allesBestanden ? (
              <>
                <p className="text-4xl" aria-hidden>
                  🎉
                </p>
                <p className="mt-2 text-lg font-bold">
                  Alle Module bestanden – du bist startklar für die Prüfung!
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Bleib trotzdem im Training: Eine Blitzrunde kurz vor dem
                  Termin frischt den Abruf nochmal auf.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg font-bold">
                  {bestandene.length} von {module.length} Modulen bestanden
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Noch nicht alles geschafft – unten siehst du, wo es sich
                  lohnt, nochmal zu üben.
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <section className="flex flex-col gap-3" aria-label="Module im Detail">
        {module.map((m) => {
          const ergebnis = fortschritt?.module[m.id];
          return (
            <Card key={m.id}>
              <CardContent className="flex items-center gap-3 py-1">
                <span className="text-2xl" aria-hidden>
                  {ergebnis?.bestanden ? "🏅" : "⬜️"}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-tight">
                    Modul {m.id}: {m.titel}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {ergebnis
                      ? `Beste Runde: ${Math.round(ergebnis.besteQuote * 100)} %`
                      : "Noch nicht geübt"}
                  </p>
                </div>
                {ergebnis?.bestanden ? (
                  <Badge className="shrink-0 bg-emerald-600 text-white">
                    bestanden
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="shrink-0">
                    offen
                  </Badge>
                )}
              </CardContent>
            </Card>
          );
        })}
      </section>

      <div className="flex flex-col gap-2">
        {!allesBestanden && (
          <Button
            size="lg"
            className="h-13 text-base"
            render={
              <Link
                href={`/modul/${
                  module.find((m) => !fortschritt?.module[m.id]?.bestanden)?.id ?? 1
                }`}
              />
            }
          >
            Weiterüben
          </Button>
        )}
        <Button
          size="lg"
          variant="secondary"
          className="h-13 text-base"
          nativeButton={false} render={<Link href="/" />}
        >
          Zur Übersicht
        </Button>
      </div>
    </main>
  );
}
