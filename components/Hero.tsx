"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMapPin } from "react-icons/fi";
import { profile } from "@/lib/data";
import { TUX_ASCII } from "./Memes";

const roles = ["DEVOPS ENGINEER", "PLATFORM ENGINEER", "SRE", "CLOUD ENGINEER"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs text-muted mb-4"
          >
            <p>$ uname -a</p>
            <p className="text-fg mt-1">
              Linux shaurya 6.8.12-amd64 #1 SMP Debian GNU/Linux x86_64
            </p>
            <p className="mt-3">$ last -n 1 shaurya</p>
            <p className="text-fg mt-1">
              shaurya  tty1  still logged in   <span className="text-accent">● available</span>
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display font-display text-6xl md:text-8xl leading-[0.9] tracking-tight uppercase"
          >
            Shaurya
            <br />
            Dandriyal
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 flex items-baseline gap-3 flex-wrap"
          >
            <span className="text-muted font-mono">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="font-display text-2xl md:text-4xl text-accent tracking-wider terminal-caret"
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-muted leading-relaxed font-mono text-sm"
          >
            I build and operate cloud-native infrastructure on AWS and Kubernetes. I ship
            end-to-end CI/CD, run ClickHouse + Qdrant at production scale, and execute
            zero-downtime cluster migrations. Currently at{" "}
            <span className="text-fg">Spizen Technologies</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 font-mono text-sm"
          >
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 hover:bg-fg transition"
            >
              <FiDownload /> wget resume.pdf
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bd hover:bd-accent hover:text-accent text-fg px-5 py-2.5 transition"
            >
              <FiMail /> mail
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bd hover:bd-accent hover:text-accent text-fg px-5 py-2.5 transition"
            >
              <FiGithub /> github
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bd hover:bd-accent hover:text-accent text-fg px-5 py-2.5 transition"
            >
              <FiLinkedin /> linkedin
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 text-sm text-muted font-mono flex items-center gap-2"
          >
            <FiMapPin /> {profile.location}
          </motion.p>
        </div>

        {/* tux + /etc/motd */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2 bd p-5 font-mono text-xs md:text-sm bg-panel relative"
        >
          <div className="flex items-center gap-1.5 mb-4 text-muted">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
            <span className="ml-2">/etc/motd</span>
          </div>
          <pre className="ascii text-accent leading-tight">{TUX_ASCII}</pre>
          <div className="mt-4 text-muted text-[11px] leading-relaxed">
            <p><span className="text-accent">hostname</span> : spizen-prod-01</p>
            <p><span className="text-accent">kernel</span>   : 6.8.12-amd64</p>
            <p><span className="text-accent">uptime</span>   : up 847 days</p>
            <p><span className="text-accent">services</span> : k8s · gitlab-ci · grafana</p>
            <p><span className="text-accent">status</span>   : <span className="text-fg">shipping</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
