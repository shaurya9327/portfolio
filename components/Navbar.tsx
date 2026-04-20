"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-bg/95 border-b border-border backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-mono text-sm">
        <a href="#top" className="text-accent font-bold flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(255,176,0,0.8)]" />
          root@shaurya:~#
        </a>
        <ul className="hidden md:flex gap-5 text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-fg transition-colors">
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block bd-accent text-accent px-3 py-1.5 hover:bg-accent hover:text-bg transition-colors"
          >
            ./resume.pdf
          </a>
          <button
            aria-label="menu"
            className="md:hidden text-muted hover:text-fg"
            onClick={() => setOpen(!open)}
          >
            {open ? "[x]" : "[ ≡ ]"}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-sm">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 font-mono text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1 hover:text-fg">
                  ./{l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 bd-accent text-accent px-3 py-1.5"
              >
                ./resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
