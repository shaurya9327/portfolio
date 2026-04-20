"use client";
import Section from "./Section";
import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education & Certifications" kicker="education">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-panel border border-border rounded-lg p-6">
          <h3 className="font-mono text-accent text-sm mb-3">education</h3>
          <p className="font-semibold">{education.degree}</p>
          <p className="text-muted">{education.school}</p>
          <p className="mt-1 font-mono text-xs text-accent">{education.dates}</p>
        </div>
        <div className="bg-panel border border-border rounded-lg p-6">
          <h3 className="font-mono text-accent text-sm mb-3">certifications</h3>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li key={c} className="text-muted flex gap-2">
                <span className="text-accent">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
