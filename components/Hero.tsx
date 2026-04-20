"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-accent"
        >
          <span className="text-muted">$</span> whoami
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-5xl md:text-7xl font-bold tracking-tight"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-2xl md:text-3xl text-muted font-mono terminal-caret"
        >
          &gt; {profile.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-muted leading-relaxed"
        >
          I build and operate cloud-native infrastructure on AWS and Kubernetes. I ship
          end-to-end CI/CD, run ClickHouse + Qdrant at production scale, and execute
          zero-downtime cluster migrations. Currently at{" "}
          <span className="text-fg">Spizen Technologies</span> in{" "}
          <span className="text-fg">{profile.location}</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded font-medium hover:shadow-glow transition"
          >
            <FiDownload /> Download Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-border hover:border-accent text-fg px-5 py-2.5 rounded transition"
          >
            <FiMail /> Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-accent text-fg px-5 py-2.5 rounded transition"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-accent text-fg px-5 py-2.5 rounded transition"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
