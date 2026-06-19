"use client";
import { useEffect, useState } from "react";

/** Thin neon progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 h-[3px] z-[70] bg-transparent">
      <div
        className="h-full bg-accent shadow-[0_0_10px_rgba(255,84,0,0.8)] transition-[width] duration-75"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
