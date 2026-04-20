"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Stack" kicker="skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="bd bg-panel p-5 hover:bd-accent transition"
          >
            <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
              // {g.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.name}
                    className="inline-flex items-center gap-1.5 text-sm bd px-3 py-1.5 text-fg font-mono bg-bg hover:border-accent transition"
                  >
                    {Icon ? (
                      <Icon
                        className="shrink-0"
                        style={{ color: s.color }}
                        size={13}
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
