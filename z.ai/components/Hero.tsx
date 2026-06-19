"use client";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import HeroFrame, { heroFrameOrder } from "./HeroFrame";
import Marquee from "./Marquee";
import { FiDownload, FiArrowDown } from "react-icons/fi";

const CHAPTERS = [
  "01 — CONTROL PLANE",
  "02 — WORKLOADS",
  "03 — DELIVERY",
  "04 — TELEMETRY",
  "05 — MESH",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [muted, setMuted] = useState(true);
  const [prog, setProg] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const SLIDE_MS = 5000;

  // cycle frames
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroFrameOrder.length), SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  // progress bar (resets each frame)
  useEffect(() => {
    const start = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / SLIDE_MS);
      setProg(p * 100);
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [idx]);

  // hero background parallax — 0.3x scroll speed
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const loop = () => {
      const y = window.scrollY;
      if (bgRef.current && y < window.innerHeight) {
        bgRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* --- cinematic reel background --- */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <div className="absolute inset-0 bg-black" />
        {heroFrameOrder.map((f, i) => (
          <div
            key={f}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            {i === idx && <HeroFrame id={f} />}
          </div>
        ))}
        {/* noir tint + darkening for legibility */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>

      {/* --- top HUD strip --- */}
      <div className="absolute top-16 inset-x-0 z-30 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[0.65rem] md:text-xs text-silver/80">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent live-dot" />
            REC · {profile.site}
          </span>
          <span className="hidden sm:inline">BENGALURU, IN · {profile.phone}</span>
          <span>{CHAPTERS[idx]}</span>
        </div>
      </div>

      {/* --- hero content --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-center pt-28 pb-32">
        <p className="eyebrow text-accent reveal mb-4">{profile.title}</p>

        <h1 className="display text-fg reveal" style={{ ["--reveal-delay" as string]: "80ms" }}>
          <span className="block text-[14vw] md:text-[10vw] leading-[0.82] tracking-mega">
            {profile.name}
          </span>
          <span className="block text-[14vw] md:text-[10vw] leading-[0.82] tracking-mega text-transparent [-webkit-text-stroke:1.5px_#FF5400]">
            {profile.surname}
          </span>
        </h1>

        <p
          className="reveal mt-6 max-w-2xl text-silver text-base md:text-lg font-body leading-relaxed"
          style={{ ["--reveal-delay" as string]: "160ms" }}
        >
          {profile.blurb}{" "}
          <span className="text-fg">Available for new platform &amp; DevOps roles.</span>
        </p>

        {/* CTAs */}
        <div
          className="reveal mt-8 flex flex-wrap items-center gap-4"
          style={{ ["--reveal-delay" as string]: "240ms" }}
        >
          <a
            href="#contact"
            className="cta-glow inline-flex items-center gap-2 bg-accent text-bg font-body font-semibold px-7 py-3.5 hover:bg-accent2 transition-colors"
          >
            <span className="uppercase tracking-wider text-sm">Let&apos;s talk</span>
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hairline text-fg px-7 py-3.5 hover:hairline-accent hover:text-accent transition-all font-body text-sm uppercase tracking-wider"
          >
            <FiDownload /> Resume
          </a>
          <a
            href="#about"
            aria-label="scroll down"
            className="hidden md:inline-flex items-center justify-center w-12 h-12 hairline text-muted hover:text-accent hover:hairline-accent transition-all"
          >
            <FiArrowDown />
          </a>
        </div>
      </div>

      {/* --- sound bar + progress (bottom-left, video-player feel) --- */}
      <div className="absolute bottom-24 md:bottom-16 left-6 md:left-10 z-30 flex items-center gap-4">
        <button
          aria-label={muted ? "unmute reel" : "mute reel"}
          onClick={() => setMuted((m) => !m)}
          className="flex items-end gap-[3px] h-8 w-12 hairline justify-center pt-2 pb-1 hover:hairline-accent transition-all"
        >
          {[0, 1, 2, 3].map((b) => (
            <span
              key={b}
              className={`w-[3px] bg-accent ${muted ? "" : "eqbar"}`}
              style={{
                height: muted ? "8px" : undefined,
                animationDelay: `${b * 0.13}s`,
                opacity: muted ? 0.4 : 1,
              }}
            />
          ))}
        </button>
        <div className="font-mono text-xs text-silver/70">
          {muted ? "muted" : "unmuted"}
        </div>
      </div>

      {/* --- chapter progress bar (bottom-right) --- */}
      <div className="absolute bottom-24 md:bottom-16 right-6 md:right-10 z-30 w-40 md:w-56">
        <div className="flex items-center justify-between font-mono text-[0.65rem] text-silver/70 mb-2">
          <span>{String(idx + 1).padStart(2, "0")} / {String(heroFrameOrder.length).padStart(2, "0")}</span>
          <span>{CHAPTERS[idx].split("—")[1]}</span>
        </div>
        <div className="h-[2px] w-full bg-silver/15">
          <div className="h-full bg-accent shadow-[0_0_6px_rgba(255,84,0,0.9)]" style={{ width: `${prog}%` }} />
        </div>
      </div>

      {/* --- marquee ticker along hero bottom --- */}
      <div className="absolute bottom-0 inset-x-0 z-30">
        <Marquee />
      </div>
    </section>
  );
}
