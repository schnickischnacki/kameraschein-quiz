"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Lernbezogenes Feedback nach jeder Antwort – bei falschen Antworten mit
 * Hinweis auf den Denkfehler (Ansatz „falsche Antworten produktiv“).
 */
export function FeedbackPanel({
  richtig,
  text,
  onWeiter,
  letzteFrage,
  weiterLabel,
}: {
  richtig: boolean;
  text: string;
  onWeiter: () => void;
  letzteFrage?: boolean;
  weiterLabel?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className={cn(
        "rounded-xl border-2 p-4",
        richtig
          ? "border-emerald-500 bg-emerald-500/10"
          : "border-amber-500 bg-amber-500/10"
      )}
    >
      <p className="font-semibold">{richtig ? "✅ Richtig!" : "❌ Nicht ganz."}</p>
      <p className="mt-1 text-sm leading-relaxed">{text}</p>
      <Button size="lg" className="mt-3 h-13 w-full text-base" onClick={onWeiter} autoFocus>
        {weiterLabel ?? (letzteFrage ? "Zum Ergebnis" : "Weiter")}
      </Button>
    </motion.div>
  );
}
