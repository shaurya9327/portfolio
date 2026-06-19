"use client";
import { useEffect, useRef } from "react";

/**
 * Fractal-noise grain overlay that drifts vertically with scroll using
 * lerp smoothing. Fixed, above content, below modals.
 */
export default function GrainOverlay() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;

    const onScroll = () => {
      target.current = window.scrollY * 0.12;
    };
    const loop = () => {
      current.current += (target.current - current.current) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(0, ${current.current.toFixed(
          2
        )}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={ref} className="grain-layer" aria-hidden />;
}
