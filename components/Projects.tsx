"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
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
            className="group bg-panel border border-border hover:border-accent/60 rounded-lg p-6 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-fg transition"
                  aria-label={`Open ${p.name}`}
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
            <p className="mt-3 text-muted text-sm leading-relaxed">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs border border-border rounded px-2 py-1 text-muted font-mono"
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
