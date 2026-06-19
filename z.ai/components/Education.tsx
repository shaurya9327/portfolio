"use client";
import Section from "./Section";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" index="06" kicker="Credentials" title="Education">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* education */}
        <div className="reveal brackets-4 relative panel hairline p-8">
          <span className="bk tl" /><span className="bk tr" />
          <span className="bk bl" /><span className="bk br" />
          <p className="eyebrow text-accent mb-4">Degree</p>
          <h3 className="display text-4xl text-fg leading-tight">{education.degree}</h3>
          <p className="font-body text-silver mt-2">{education.school}</p>
          <p className="font-mono text-xs text-muted mt-1">{education.dates}</p>
        </div>

        {/* certifications */}
        <div className="reveal brackets-4 relative panel hairline p-8">
          <span className="bk tl" /><span className="bk tr" />
          <span className="bk bl" /><span className="bk br" />
          <p className="eyebrow text-accent mb-4">Certifications</p>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex items-center gap-3 font-body text-silver">
                <span className="text-accent">✦</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
