"use client";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About" kicker="about">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bd bg-panel p-6 font-mono text-sm">
          <p className="text-muted text-xs mb-3">$ cat ./bio.txt</p>
          <p className="text-fg leading-relaxed">{profile.summary}</p>
          <p className="mt-4 text-fg leading-relaxed">
            I care about the whole lifecycle — build, deploy, observe, recover. I lean
            into infrastructure-as-code, good dashboards, and platforms that make teams
            faster. When systems break at 3am, I'd rather have a solid runbook than a
            hero.
          </p>
        </div>
        <div className="bd bg-panel p-6 font-mono text-xs">
          <p className="text-muted mb-3">$ whoami --verbose</p>
          <dl className="space-y-1.5">
            <div className="flex gap-2">
              <dt className="text-accent w-24">location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-accent w-24">email</dt>
              <dd className="break-all">{profile.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-accent w-24">phone</dt>
              <dd>{profile.phone}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-accent w-24">shell</dt>
              <dd>/bin/zsh</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-accent w-24">editor</dt>
              <dd>neovim</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-accent w-24">daily-driver</dt>
              <dd>Arch + Linux</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-accent w-24">status</dt>
              <dd className="text-accent">open to roles</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
