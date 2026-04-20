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
    <section id={id} className="scroll-mt py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="font-mono text-accent text-sm">
          <span className="text-muted">$</span> cat {kicker ?? id}.md
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <div className="mt-3 h-px w-16 bg-accent" />
      </motion.div>
      {children}
    </section>
  );
}
