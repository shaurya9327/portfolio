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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-bg/80 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between font-mono text-sm">
        <a href="#top" className="text-accent font-bold">~/shaurya</a>
        <ul className="hidden md:flex gap-6 text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-fg transition-colors">
                <span className="text-accent">$</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="border border-accent text-accent px-3 py-1.5 rounded hover:bg-accent hover:text-bg transition-colors"
        >
          resume.pdf
        </a>
      </nav>
    </header>
  );
}
