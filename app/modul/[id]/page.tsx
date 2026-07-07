import { notFound } from "next/navigation";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import { fragenProModul, module } from "@/data/questions";

/** Alle Modul-Seiten werden statisch vorgerendert (kein Server nötig). */
export function generateStaticParams() {
  return module.map((m) => ({ id: String(m.id) }));
}

export default async function ModulSeite({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const modul = module.find((m) => String(m.id) === id);
  if (!modul) notFound();
  return (
    <main>
      <QuizEngine modul={modul} fragen={fragenProModul[modul.id]} />
    </main>
  );
}
