import type { ModulInfo, Question } from "./types";
import { modul1Fragen } from "./modul-1";
import { modul2Fragen } from "./modul-2";
import { modul3Fragen } from "./modul-3";
import { modul4Fragen } from "./modul-4";
import { modul5Fragen } from "./modul-5";

export * from "./types";

/** Modul-Metadaten (Reihenfolge = Anzeige auf der Startseite). */
export const module: ModulInfo[] = [
  {
    id: 1,
    titel: "Equipment übernehmen",
    beschreibung: "Ausleihe, Haftung, Schadensfall, Transport",
    alteSektionen: "Alte Sektionen 2–3",
  },
  {
    id: 2,
    titel: "Drehfertig machen",
    beschreibung: "Akku, Stativ, Objektivwechsel, Speichermedium",
    alteSektionen: "Alte Sektionen 4–6",
  },
  {
    id: 3,
    titel: "Kamera konfigurieren",
    beschreibung: "Menü, Belichten, Fokussieren, Weißabgleich",
    alteSektionen: "Alte Sektionen 7–10",
  },
  {
    id: 4,
    titel: "Ton aufnehmen",
    beschreibung: "Vorbereitung, Routing, Mikrofonie, Abhören, Pegeln",
    alteSektionen: "Alte Sektionen 11–15",
  },
  {
    id: 5,
    titel: "Generalprobe & Prüfung",
    beschreibung: "Prüfungsablauf und modulübergreifende Wiederholung",
    alteSektionen: "Alte Sektionen 16–18",
  },
];

/** Alle Fragen, gruppiert nach Modul. */
export const fragenProModul: Record<number, Question[]> = {
  1: modul1Fragen,
  2: modul2Fragen,
  3: modul3Fragen,
  4: modul4Fragen,
  5: modul5Fragen,
};

/** Gesamter Fragenpool (u. a. für die Blitzrunde). */
export const alleFragen: Question[] = [
  ...modul1Fragen,
  ...modul2Fragen,
  ...modul3Fragen,
  ...modul4Fragen,
  ...modul5Fragen,
];

/** Bestehensgrenze für Modultests (analog Lernpfad-Logik im Moodle-Konzept). */
export const BESTEHENSGRENZE = 0.8;
