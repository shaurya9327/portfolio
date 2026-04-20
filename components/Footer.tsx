"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted font-mono">
        <p>
          <span className="text-accent">$</span> exit 0 &nbsp;·&nbsp; © {new Date().getFullYear()}{" "}
          {profile.name}
        </p>
        <p className="text-xs">
          built with <span className="text-fg">Next.js</span> ·{" "}
          <span className="text-fg">Tailwind</span> ·{" "}
          <span className="text-fg">Framer Motion</span> · deployed on{" "}
          <span className="text-fg">Vercel</span>
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fg transition" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg transition" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-fg transition" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
