"use client";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import Section from "./Section";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    offset: 0, // current translateX
    velocity: 0,
  });
  const raf = useRef(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovering, setHovering] = useState(false);

  const count = projects.length;

  // ---------- helpers ----------
  const maxScroll = () => {
    const t = trackRef.current;
    if (!t) return 0;
    return Math.max(0, t.scrollWidth - t.parentElement!.clientWidth);
  };

  const setOffset = (o: number) => {
    drag.current.offset = o;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-o}px,0,0)`;
    }
  };

  const clampEdge = (o: number) => {
    const max = maxScroll();
    // rubber-band: drag past ends resisted at 0.35x
    if (o < 0) return o * 0.35;
    if (o > max) return max + (o - max) * 0.35;
    return o;
  };

  const snapToActive = (o: number) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 24; // gap-6 = 24px
    const nearest = Math.round(o / step);
    const clamped = Math.max(0, Math.min(count - 1, nearest));
    const target = clamped * step;
    animateTo(target);
    setActiveIdx(clamped);
  };

  const animateTo = (target: number) => {
    const start = drag.current.offset;
    const delta = target - start;
    const t0 = performance.now();
    const dur = 480;
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
    cancelAnimationFrame(raf.current);
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      setOffset(start + delta * ease(p));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };

  // ---------- momentum loop ----------
  useEffect(() => {
    const loop = () => {
      if (!drag.current.active && Math.abs(drag.current.velocity) > 0.4) {
        let o = drag.current.offset + drag.current.velocity;
        drag.current.velocity *= 0.92; // friction
        const max = maxScroll();
        if (o < 0 || o > max) {
          // bounce back from rubber-band
          drag.current.velocity *= 0.5;
          o = clampEdge(o);
        }
        setOffset(o);
        if (Math.abs(drag.current.velocity) < 0.4) {
          drag.current.velocity = 0;
          snapToActive(o);
        }
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- auto-advance ----------
  useEffect(() => {
    if (hovering) return;
    const t = setInterval(() => {
      const next = (activeIdx + 1) % count;
      const card =
        trackRef.current?.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      const step = card.offsetWidth + 24;
      animateTo(next * step);
      setActiveIdx(next);
    }, 4500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering, activeIdx, count]);

  // ---------- pointer drag ----------
  const onPointerDown = (e: React.PointerEvent) => {
    // ignore clicks on the flip-card links so they stay interactive
    if ((e.target as HTMLElement).closest("a, button")) return;
    drag.current.active = true;
    drag.current.moved = false;
    drag.current.startX = e.clientX;
    drag.current.startY = e.clientY;
    drag.current.lastX = e.clientX;
    drag.current.velocity = 0;
    cancelAnimationFrame(raf.current);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    (e.currentTarget as HTMLElement).style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.lastX;
    const dy = e.clientY - drag.current.startY;
    // if vertical movement dominates, treat as scroll (mobile)
    if (!drag.current.moved && Math.abs(e.clientY - drag.current.startY) > Math.abs(e.clientX - drag.current.startX) + 6) {
      drag.current.active = false;
      return;
    }
    drag.current.moved = true;
    drag.current.lastX = e.clientX;
    drag.current.velocity = dx;
    setOffset(clampEdge(drag.current.offset - dx));
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    (e.currentTarget as HTMLElement).style.cursor = "";
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    if (drag.current.moved) {
      snapToActive(drag.current.offset);
    }
  };

  const goTo = (i: number) => {
    const card = trackRef.current?.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 24;
    animateTo(i * step);
    setActiveIdx(i);
  };

  return (
    <Section
      id="projects"
      index="04"
      kicker="Selected Work"
      title="Projects"
    >
      <div
        className="reveal"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* viewport */}
        <div
          className="overflow-hidden cursor-grab touch-pan-y select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{ transform: "translate3d(0,0,0)" }}
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>

        {/* controls */}
        <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              aria-label="previous"
              onClick={() => goTo(Math.max(0, activeIdx - 1))}
              className="w-11 h-11 hairline flex items-center justify-center text-silver hover:text-accent hover:hairline-accent transition-all"
            >
              <FiChevronLeft />
            </button>
            <button
              aria-label="next"
              onClick={() => goTo(Math.min(count - 1, activeIdx + 1))}
              className="w-11 h-11 hairline flex items-center justify-center text-silver hover:text-accent hover:hairline-accent transition-all"
            >
              <FiChevronRight />
            </button>
            <span className="font-mono text-xs text-muted ml-2">
              {String(activeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>

          {/* progress dots */}
          <div className="flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.name}
                aria-label={`go to ${p.name}`}
                onClick={() => goTo(i)}
                className="group py-2"
              >
                <span
                  className={`block h-[3px] transition-all duration-300 ${
                    i === activeIdx
                      ? "w-10 bg-accent shadow-[0_0_6px_rgba(255,84,0,0.8)]"
                      : "w-5 bg-border group-hover:bg-silver"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div
      data-card
      className="flip-card relative shrink-0 w-[86vw] sm:w-[440px] h-[460px]"
      tabIndex={0}
    >
      <div className="flip-inner w-full h-full">
        {/* FRONT */}
        <div className="flip-face brackets-4 panel hairline overflow-hidden flex flex-col">
          <span className="bk tl" /><span className="bk tr" />
          <span className="bk bl" /><span className="bk br" />

          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-5">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                {p.category}
              </span>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={`open ${p.name}`}
                >
                  <FiExternalLink />
                </a>
              )}
            </div>

            <h3 className="display text-4xl md:text-5xl text-fg leading-[0.95] uppercase">
              {p.name}
            </h3>

            <div className="my-6 h-px w-12 bg-accent" />

            <p className="text-silver text-sm leading-relaxed font-body flex-1">
              {p.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {p.stack.slice(0, 5).map((s) => (
                <span
                  key={s}
                  className="font-mono text-[0.65rem] hairline px-2 py-1 text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="display text-accent text-3xl">{p.metric.value}</span>
              <span className="font-mono text-[0.65rem] text-muted">{p.metric.label}</span>
            </div>
            <p className="font-mono text-[0.6rem] text-muted/70 mt-3 tracking-wider uppercase">
              hover · flip for detail
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back brackets-4 bg-accent text-bg overflow-hidden flex flex-col p-6">
          <span className="bk tl" style={{ borderColor: "#000" }} />
          <span className="bk tr" style={{ borderColor: "#000" }} />
          <span className="bk bl" style={{ borderColor: "#000" }} />
          <span className="bk br" style={{ borderColor: "#000" }} />

          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] mb-3">
            ⚙ Detail
          </span>
          <h3 className="display text-4xl leading-[0.95] uppercase mb-4">{p.name}</h3>
          <p className="text-sm leading-relaxed font-body flex-1">{p.detail}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {p.stack.map((s) => (
              <span key={s} className="font-mono text-[0.65rem] border border-bg/40 px-2 py-1">
                {s}
              </span>
            ))}
          </div>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-bg text-accent px-4 py-2 font-body text-sm font-semibold uppercase tracking-wider w-fit"
            >
              Visit <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
