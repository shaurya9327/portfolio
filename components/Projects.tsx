"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" kicker="projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group gradient-border p-6 relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <FiFolder />
                </div>
                <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-accent transition"
                  aria-label={`Open ${p.name}`}
                >
                  <FiExternalLink />
                </a>
              )}
            </div>

            {p.metric && (
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent to-accent2">
                  {p.metric.value}
                </span>
                <span className="text-xs text-muted font-mono uppercase tracking-wide">
                  {p.metric.label}
                </span>
              </div>
            )}

            <p className="mt-4 text-muted text-sm leading-relaxed">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] border border-border rounded px-2 py-1 text-muted font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
