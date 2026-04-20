"use client";
import Section from "./Section";
import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education & Certs" kicker="education">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bd bg-panel p-6 font-mono text-sm">
          <h3 className="text-xs text-accent uppercase tracking-widest mb-3">// education</h3>
          <p className="display font-display text-xl uppercase tracking-wide">
            {education.degree}
          </p>
          <p className="text-muted mt-1">{education.school}</p>
          <p className="mt-2 text-xs text-accent">{education.dates}</p>
        </div>
        <div className="bd bg-panel p-6 font-mono text-sm">
          <h3 className="text-xs text-accent uppercase tracking-widest mb-3">
            // certifications
          </h3>
          <ul className="space-y-1.5">
            {certifications.map((c) => (
              <li key={c} className="text-fg flex gap-2">
                <span className="text-accent">[x]</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
