"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" kicker="experience">
      <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-1 before:top-2 before:bottom-2 before:w-px before:bg-border">
        {experiences.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative bd bg-panel p-6 hover:bd-accent transition"
          >
            <span className="absolute -left-[27px] top-7 w-3 h-3 bg-accent ring-4 ring-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="display font-display text-2xl uppercase tracking-wide">
                {e.role}{" "}
                <span className="text-muted font-normal normal-case tracking-normal text-base">
                  @ {e.company}
                </span>
              </h3>
              <div className="flex items-center gap-2">
                {e.tag && (
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bd-accent text-accent">
                    {e.tag}
                  </span>
                )}
                <p className="font-mono text-xs text-accent">{e.dates}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {e.bullets.map((b, j) => (
                <li key={j} className="text-muted leading-relaxed flex gap-2">
                  <span className="text-accent mt-0.5">&gt;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
