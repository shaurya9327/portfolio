"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Section from "./Section";
import { profile } from "@/lib/data";

const cards = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, primary: true },
  { icon: FiPhone, label: "Call", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: FiGithub, label: "GitHub", value: "shaurya9327", href: profile.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "shaurya-dandriyal", href: profile.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact" kicker="contact">
      <div className="bd bg-panel p-6 md:p-10 font-mono">
        <p className="text-sm text-muted mb-3">$ ssh shaurya@inbox</p>
        <p className="text-fg text-lg md:text-xl leading-relaxed max-w-2xl">
          Open to <span className="text-accent">DevOps</span>,{" "}
          <span className="text-accent">Platform</span>, and{" "}
          <span className="text-accent">SRE</span> roles. I reply within 24 hours. Email or
          call — no recruiter spam please.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`group bd p-5 flex flex-col gap-2 hover:bd-accent transition ${
                  c.primary ? "bg-accent text-bg" : "bg-bg text-fg"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} className={c.primary ? "text-bg" : "text-accent"} />
                  <span className="text-[11px] uppercase tracking-widest opacity-70">
                    {c.label}
                  </span>
                </div>
                <span
                  className={`text-sm md:text-base font-medium break-all ${
                    c.primary ? "text-bg" : "text-fg"
                  }`}
                >
                  {c.value}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
