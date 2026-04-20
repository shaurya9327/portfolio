"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";
import { HappyWojak } from "./Memes";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-10 font-mono">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 flex flex-col items-center gap-6 text-muted">
        <div className="text-fg/90">
          <HappyWojak size={72} className="text-fg" />
        </div>
        <p className="text-xs tracking-widest uppercase text-muted">
          [ shipping.pid — always on ]
        </p>

        <div className="w-full border-t border-border pt-6 grid md:grid-cols-3 gap-3 items-center text-sm">
          <p>
            <span className="text-accent">$</span> exit 0 &nbsp;·&nbsp; © {new Date().getFullYear()}{" "}
            {profile.name}
          </p>
          <p className="text-center text-xs text-muted">
            # built with next.js · tailwind · framer-motion · deployed on vercel
          </p>
          <div className="flex items-center justify-center md:justify-end gap-4 text-base">
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
      </div>
    </footer>
  );
}
