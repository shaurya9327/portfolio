"use client";
import { tickerItems } from "@/lib/data";

/** Horizontal marquee of brand aphorisms, seamless loop, pauses on hover. */
export default function Marquee({
  items = tickerItems,
  reverse = false,
}: {
  items?: string[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-border bg-ink/60 py-3 select-none">
      <div
        className="marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-display text-2xl md:text-3xl tracking-wide text-silver whitespace-nowrap"
          >
            <span>{t}</span>
            <span className="text-accent text-sm">✦</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
