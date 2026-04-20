"use client";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Section from "./Section";
import { profile } from "@/lib/data";
import { HAPPY_WOJAK } from "./Memes";

export default function Contact() {
  const telHref = `tel:${profile.phone.replace(/\s+/g, "")}`;
  return (
    <Section id="contact" title="Contact" kicker="contact">
      <div className="bd bg-panel p-6 md:p-10 grid md:grid-cols-[auto,1fr] gap-8 items-center">
        {/* ASCII dot-matrix Happy Wojak */}
        <div className="flex flex-col items-center md:items-start">
          <pre className="ascii text-fg text-[7px] md:text-[9px] leading-[1.05] select-none">
            {HAPPY_WOJAK}
          </pre>
          <p className="mt-3 text-[10px] font-mono text-muted uppercase tracking-widest text-center md:text-left">
            [ status: feels_shippable.bin ]
          </p>
        </div>

        <div className="font-mono">
          <p className="text-xs text-muted mb-2">$ ssh shaurya@inbox</p>
          <p className="text-fg text-sm leading-relaxed">
            Open to DevOps, Platform, and SRE roles. The fastest way to reach me is email —
            I reply within a day. Quick chat?  Just dial.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 hover:bg-fg transition"
            >
              <FiMail /> {profile.email}
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 bd-accent text-accent hover:bg-accent hover:text-bg px-5 py-2.5 transition"
            >
              <FiPhone /> {profile.phone}
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
          </div>
        </div>
      </div>
    </Section>
  );
}
