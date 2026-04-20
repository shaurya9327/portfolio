"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" kicker="experience">
      <div className="relative border-l border-border pl-6 space-y-10">
        {experiences.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-accent shadow-glow" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {e.role} <span className="text-muted">· {e.company}</span>
              </h3>
              <p className="font-mono text-xs text-accent">{e.dates}</p>
            </div>
            <ul className="mt-3 space-y-2">
              {e.bullets.map((b, j) => (
                <li key={j} className="text-muted leading-relaxed flex gap-2">
                  <span className="text-accent mt-1.5">▸</span>
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
