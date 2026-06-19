"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[65] transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-2 h-2 rounded-full bg-accent live-dot shadow-[0_0_8px_rgba(255,84,0,0.9)]" />
          <span className="font-display text-xl tracking-wider text-fg group-hover:text-accent transition-colors">
            SHAURYA<span className="text-accent">.</span>D
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wider text-silver">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative hover:text-accent transition-colors py-1">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center bg-accent text-bg font-body font-semibold text-sm uppercase tracking-wider px-5 py-2.5 hover:bg-accent2 transition-colors"
          >
            Hire me
          </a>
          <button
            aria-label="menu"
            className="md:hidden text-silver hover:text-accent transition-colors"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="font-display text-2xl">{open ? "✕" : "≡"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1 font-body text-base uppercase tracking-wider text-silver">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
