"use client";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About" kicker="about">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-muted leading-relaxed">{profile.summary}</p>
          <p className="mt-4 text-muted leading-relaxed">
            I care about the whole lifecycle — build, deploy, observe, recover. I lean into
            infrastructure-as-code, good dashboards, and platforms that make teams faster.
          </p>
        </div>
        <div className="bg-panel border border-border rounded-lg p-6 font-mono text-sm">
          <p className="text-muted"># profile</p>
          <p><span className="text-accent">location</span> = "{profile.location}"</p>
          <p><span className="text-accent">email</span> = "{profile.email}"</p>
          <p><span className="text-accent">phone</span> = "{profile.phone}"</p>
          <p><span className="text-accent">status</span> = "open to roles"</p>
        </div>
      </div>
    </Section>
  );
}
