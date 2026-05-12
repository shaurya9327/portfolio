"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Face = { value: string; label: string };

const tiles: Face[][] = [
  [
    { value: "5×", label: "build-time speedup" },
    { value: "10m → 2m", label: "single-service build" },
    { value: "BuildKit", label: "registry-mode cache" },
  ],
  [
    { value: "12.8K", label: "redis ops/sec" },
    { value: "KVRocks", label: "backing store" },
    { value: "M + R/R", label: "redis topology" },
  ],
  [
    { value: "119", label: "deployments migrated" },
    { value: "13", label: "statefulsets migrated" },
    { value: "F → Cilium", label: "cni migration" },
  ],
  [
    { value: "0", label: "downtime migrations" },
    { value: "99.97%", label: "pipeline uptime" },
    { value: "60–80%", label: "pipeline time cut" },
  ],
];

function FlipTile({ faces, startDelay }: { faces: Face[]; startDelay: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    const t = setTimeout(() => {
      interval = setInterval(() => {
        setI((x) => (x + 1) % faces.length);
      }, 4800);
    }, startDelay);
    return () => {
      clearTimeout(t);
      if (interval) clearInterval(interval);
    };
  }, [faces.length, startDelay]);

  const f = faces[i];

  return (
    <div
      className="relative h-24 md:h-28 select-none"
      style={{ perspective: 800 }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={i}
          initial={{ rotateX: 90, y: -16, opacity: 0 }}
          animate={{ rotateX: 0, y: 0, opacity: 1 }}
          exit={{ rotateX: -90, y: 16, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center origin-center"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="font-display text-5xl md:text-6xl text-accent leading-none">
            {f.value}
          </div>
          <div className="mt-2 text-[11px] md:text-xs text-muted font-mono uppercase tracking-widest text-center">
            {f.label}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* tiny progress pips so visitors know it cycles */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {faces.map((_, idx) => (
          <span
            key={idx}
            className={`h-1 w-1 rounded-full transition-colors ${
              idx === i ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-border bg-panel">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {tiles.map((faces, idx) => (
          <FlipTile key={idx} faces={faces} startDelay={idx * 1100} />
        ))}
      </div>
    </section>
  );
}
