"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt py-20 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">$</span> cat ~/{kicker ?? id}.md
        </p>
        <h2 className="display font-display mt-1 text-4xl md:text-5xl uppercase tracking-wide">
          {title}
        </h2>
        <div className="mt-3 h-px w-20 bg-accent" />
      </motion.div>
      {children}
    </section>
  );
}
