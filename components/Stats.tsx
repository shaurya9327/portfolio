"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "5×", label: "build-time speedup" },
  { value: "12.8K", label: "redis ops/sec" },
  { value: "119", label: "deployments cni-migrated" },
  { value: "0", label: "downtime migrations" },
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-panel">
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
