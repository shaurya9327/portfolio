"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" kicker="projects">
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="bd bg-panel p-6 hover:bd-accent transition"
          >
            <div className="flex items-start justify-between gap-3 font-mono">
              <div className="flex items-center gap-2 text-accent text-xs">
                <span>$</span>
                <span>cd ./projects/{p.name.toLowerCase().split(",")[0].split(" ")[0]}</span>
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

            <h3 className="display font-display text-2xl md:text-3xl uppercase mt-3 tracking-wide">
              {p.name}
            </h3>

            {p.metric && (
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-3xl text-accent">{p.metric.value}</span>
                <span className="text-[10px] text-muted font-mono uppercase tracking-widest">
                  {p.metric.label}
                </span>
              </div>
            )}

            <p className="mt-4 text-muted text-sm font-mono leading-relaxed">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] bd px-2 py-1 text-fg font-mono"
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
