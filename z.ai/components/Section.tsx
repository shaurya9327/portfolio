"use client";
import { ReactNode } from "react";

export default function Section({
  id,
  index,
  title,
  kicker,
  children,
  className = "",
}: {
  id: string;
  index: string;
  title: string;
  kicker: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt relative py-24 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal mb-14 md:mb-20">
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-accent text-sm">{index}</span>
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow text-muted">{kicker}</span>
          </div>
          <h2 className="display text-fg text-6xl md:text-8xl uppercase tracking-tightest">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
