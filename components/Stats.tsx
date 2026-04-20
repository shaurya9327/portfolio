"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "companies shipped with" },
  { value: "0", label: "downtime cluster migrations" },
  { value: "80%+", label: "enforced test coverage" },
  { value: "∞", label: "curiosity about infra" },
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-panel/40">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="text-center"
          >
            <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent to-accent2">
              {s.value}
            </div>
            <div className="mt-1 text-xs md:text-sm text-muted font-mono uppercase tracking-wide">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
