"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" kicker="contact">
      <div className="gradient-border p-8 md:p-10 text-center">
        <p className="text-muted max-w-xl mx-auto">
          Open to DevOps, Platform, and SRE roles. The fastest way to reach me is email —
          I reply within a day.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded font-medium hover:shadow-glow transition"
          >
            <FiMail /> {profile.email}
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
        </div>
      </div>
    </Section>
  );
}
