"use client";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" index="03" kicker="Track Record" title="Experience">
      <div className="relative">
        {/* vertical spine */}
        <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-16">
          {experiences.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className="reveal relative md:grid md:grid-cols-2 md:gap-12"
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              >
                {/* node */}
                <span
                  className={`absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-accent md:-translate-x-1/2 shadow-[0_0_12px_rgba(255,84,0,0.8)] ring-4 ring-bg z-10 ${
                    exp.tag === "current" ? "live-dot" : ""
                  }`}
                />

                {/* card */}
                <div
                  className={`pl-10 md:pl-0 ${
                    left ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="panel hairline p-6 md:p-7 hover:border-accent/40 transition-colors">
                    <div className={`flex items-center gap-3 mb-2 ${left ? "md:justify-end" : ""}`}>
                      {exp.tag === "current" && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-accent">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent live-dot" /> Now
                        </span>
                      )}
                      <span className="font-mono text-xs text-muted">{exp.dates}</span>
                    </div>
                    <h3 className="display text-3xl md:text-4xl text-fg leading-tight">
                      {exp.role}
                    </h3>
                    <p className="font-body text-accent font-medium mt-1">{exp.company}</p>
                    <p className="mt-4 text-silver text-sm leading-relaxed font-body">
                      {exp.summary}
                    </p>
                    <ul className={`mt-5 space-y-2.5 ${left ? "md:text-left" : ""}`}>
                      {exp.bullets.slice(0, 4).map((b, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2.5 text-sm text-muted leading-relaxed font-body"
                        >
                          <span className="text-accent mt-[2px] shrink-0">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
