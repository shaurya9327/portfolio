"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMapPin } from "react-icons/fi";
import { profile } from "@/lib/data";

const roles = ["DevOps Engineer", "Platform Engineer", "SRE", "Cloud Engineer"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 noise" />
      <div className="blob blob-cyan w-[420px] h-[420px] -top-20 -left-20" />
      <div className="blob blob-violet w-[380px] h-[380px] bottom-0 right-0" />
      <div className="blob blob-pink w-[300px] h-[300px] top-1/2 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-border glass rounded-full px-3 py-1 text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-muted">available for new opportunities</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 font-mono text-accent text-sm"
          >
            <span className="text-muted">$</span> whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-fg via-fg to-accent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl md:text-3xl font-mono flex items-baseline gap-3 flex-wrap"
          >
            <span className="text-muted">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent2 terminal-caret"
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-muted leading-relaxed"
          >
            I build and operate cloud-native infrastructure on AWS and Kubernetes. I ship
            end-to-end CI/CD, run ClickHouse + Qdrant at production scale, and execute
            zero-downtime cluster migrations. Currently at{" "}
            <span className="text-fg font-semibold">Spizen Technologies</span>.
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
              className="group inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded font-medium hover:shadow-glow transition"
            >
              <FiDownload className="group-hover:translate-y-0.5 transition" /> Download Resume
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 text-sm text-muted flex items-center gap-2"
          >
            <FiMapPin /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2 gradient-border p-5 font-mono text-xs md:text-sm"
        >
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-2 text-muted">infra.yaml</span>
          </div>
          <pre className="leading-relaxed text-muted">
{`stack:
  `}<span className="text-accent">cloud</span>{`: aws
  `}<span className="text-accent">orchestration</span>{`: kubernetes
  `}<span className="text-accent">ci_cd</span>{`: gitlab, jenkins
  `}<span className="text-accent">iac</span>{`: terraform, ansible
  `}<span className="text-accent">observability</span>{`: grafana
  `}<span className="text-accent">data</span>{`: clickhouse, qdrant
current:
  `}<span className="text-accent">role</span>{`: platform_engineer
  `}<span className="text-accent">company</span>{`: spizen
  `}<span className="text-accent">status</span>{`: `}<span className="text-green-400">shipping</span>{`
`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
