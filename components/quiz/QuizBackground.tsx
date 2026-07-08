"use client";

/**
 * Fixierter Hintergrund mit React-Bits DotGrid.
 * Rendert nur clientseitig, damit die Canvas-Animation nicht bereits
 * im SSR läuft (spart Hydration-Warnungen).
 */

import dynamic from "next/dynamic";

const DotGrid = dynamic(() => import("@/components/DotGrid.jsx"), {
  ssr: false,
});

export function QuizBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <DotGrid
        dotSize={26}
        gap={22}
        baseColor="#36008b"
        activeColor="#7c5cfb"
        proximity={150}
        speedTrigger={120}
        shockRadius={270}
        shockStrength={6}
        maxSpeed={5000}
        resistance={750}
        returnDuration={1.6}
        style={{}}
      />
    </div>
  );
}
