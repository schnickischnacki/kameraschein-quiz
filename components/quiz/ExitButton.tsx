"use client";

/**
 * "Zurück zum Menü"-Button für die aktive Fragephase.
 * Bei Klick öffnet sich ein Bestätigungsdialog, der explizit darauf hinweist,
 * dass der aktuelle Runden-Stand nicht gespeichert wird.
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function ExitButton({
  hinweis,
  onBeforeExit,
}: {
  /** Zusätzlicher Hinweistext im Dialog (z. B. "Der Blitzstand geht verloren."). */
  hinweis?: string;
  /** Wird direkt vor der Navigation ausgeführt (z. B. Session löschen). */
  onBeforeExit?: () => void;
}) {
  const router = useRouter();
  const [offen, setOffen] = useState(false);

  function beenden() {
    onBeforeExit?.();
    router.push("/");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOffen(true)}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        aria-label="Zurück zum Menü"
      >
        <span aria-hidden>←</span> Menü
      </button>

      <AnimatePresence>
        {offen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-dialog-titel"
            onClick={() => setOffen(false)}
          >
            <motion.div
              className="w-full max-w-sm rounded-2xl bg-card p-5 text-card-foreground shadow-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="exit-dialog-titel" className="text-lg font-semibold">
                Session wirklich beenden?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Der aktuelle Stand wird nicht gespeichert.
                {hinweis ? <> {hinweis}</> : null}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  size="lg"
                  variant="destructive"
                  className="h-12 text-base"
                  onClick={beenden}
                >
                  Ja, zum Menü
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 text-base"
                  onClick={() => setOffen(false)}
                  autoFocus
                >
                  Weiter üben
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
