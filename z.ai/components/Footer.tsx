"use client";
import { profile } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <a href="#top" className="display text-5xl md:text-6xl text-fg leading-none hover:text-accent transition-colors">
              SHAURYA<span className="text-accent">.</span>D
            </a>
            <p className="font-body text-muted text-sm mt-3 max-w-md">
              DevOps &amp; Platform Engineer. Building and operating cloud-native
              infrastructure that scales.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: profile.github, icon: <FiGithub />, label: "GitHub" },
              { href: profile.linkedin, icon: <FiLinkedin />, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: <FiMail />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-11 h-11 hairline flex items-center justify-center text-silver hover:text-accent hover:hairline-accent transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
          <p>© {new Date().getFullYear()} Shaurya Dandriyal. All systems nominal.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent live-dot" />
            built with Next.js · Tailwind · caffeine
          </p>
        </div>
      </div>
    </footer>
  );
}
