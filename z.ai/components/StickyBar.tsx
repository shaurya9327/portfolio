"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { FiDownload } from "react-icons/fi";

/**
 * Slides up once the hero leaves the viewport, snaps away when the
 * booking/contact section is reached.
 */
export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const contact = document.getElementById("contact");
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      const contactTop = contact ? contact.getBoundingClientRect().top : Infinity;
      // visible only between (hero gone) and (contact reached)
      setShow(heroBottom < 0 && contactTop > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[58] transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-bg/90 backdrop-blur-md border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-2 h-2 rounded-full bg-accent live-dot shrink-0" />
            <p className="font-body text-sm text-silver truncate">
              <span className="text-fg font-semibold">Available</span>{" "}
              <span className="hidden sm:inline">for platform & DevOps roles · {profile.location}</span>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 hairline text-silver px-4 py-2 font-body text-xs uppercase tracking-wider hover:text-accent hover:hairline-accent transition-all"
            >
              <FiDownload /> Resume
            </a>
            <a
              href="#contact"
              className="cta-glow inline-flex items-center bg-accent text-bg px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider hover:bg-accent2 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
