"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-10 font-mono">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-4 items-center text-xs text-muted">
        <p>
          <span className="text-accent">$</span> exit 0
          <span className="text-border"> · </span>© {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-center">
          # built: next.js · tailwind · framer-motion · deployed on vercel
        </p>
        <div className="flex items-center justify-end gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent transition" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
