"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" kicker="skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="gradient-border p-5"
          >
            <h3 className="text-sm font-mono text-accent mb-4">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.name}
                    className="group inline-flex items-center gap-1.5 text-xs border border-border rounded px-2.5 py-1.5 text-muted hover:text-fg hover:border-accent/50 transition bg-bg/40"
                  >
                    {Icon ? (
                      <Icon
                        className="shrink-0 transition-colors"
                        style={{ color: s.color }}
                        size={14}
                        aria-hidden
                      />
                    ) : null}
                    <span>{s.name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
