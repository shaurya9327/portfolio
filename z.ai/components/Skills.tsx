"use client";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" index="02" kicker="Stack" title="The Arsenal">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g, gi) => (
          <div
            key={g.title}
            className="reveal panel hairline p-6 hover:border-accent/40 transition-colors"
            style={{ ["--reveal-delay" as string]: `${gi * 60}ms` }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-accent text-xs">{String(gi + 1).padStart(2, "0")}</span>
              <h3 className="font-body font-semibold uppercase tracking-wider text-fg text-sm">
                {g.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => {
                const Icon = s.icon;
                return (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 hairline px-2.5 py-1.5 font-mono text-xs text-silver hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    {Icon && (
                      <span style={{ color: s.color }} className="text-[0.85rem] leading-none">
                        <Icon />
                      </span>
                    )}
                    {s.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
