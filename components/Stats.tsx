"use client";
import { motion } from "framer-motion";
import { Pepe } from "./Memes";

const stats = [
  { value: "3", label: "companies" },
  { value: "0", label: "downtime migrations" },
  { value: "80%+", label: "enforced coverage" },
  { value: "∞", label: "curiosity" },
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-panel relative">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
        {stats.slice(0, 2).map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-6xl text-accent">{s.value}</div>
            <div className="mt-1 text-[11px] md:text-xs text-muted font-mono uppercase tracking-widest">
              {s.label}
            </div>
          </motion.div>
        ))}

        {/* Pepe - white line art in the middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-2 md:col-span-1 flex flex-col items-center justify-center text-fg"
        >
          <Pepe size={64} className="text-fg" />
          <p className="mt-2 text-[10px] font-mono text-muted uppercase tracking-wider">
            feels shippable man
          </p>
        </motion.div>

        {stats.slice(2).map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx + 2) * 0.05 }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-6xl text-accent">{s.value}</div>
            <div className="mt-1 text-[11px] md:text-xs text-muted font-mono uppercase tracking-widest">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
