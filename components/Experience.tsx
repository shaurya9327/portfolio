"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" kicker="experience">
      <div className="relative pl-6 space-y-10 before:content-[''] before:absolute before:left-1 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent before:via-accent2 before:to-transparent">
        {experiences.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative gradient-border p-6"
          >
            <span className="absolute -left-[27px] top-6 w-3.5 h-3.5 rounded-full bg-accent shadow-glow ring-4 ring-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">
                  {e.role}{" "}
                  <span className="text-muted font-normal">· {e.company}</span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {e.tag && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/30">
                    {e.tag}
                  </span>
                )}
                <p className="font-mono text-xs text-accent">{e.dates}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {e.bullets.map((b, j) => (
                <li key={j} className="text-muted leading-relaxed flex gap-2">
                  <span className="text-accent mt-1.5 text-[10px]">▸</span>
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
