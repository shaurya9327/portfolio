"use client";
import Section from "./Section";
import { profile, stats } from "@/lib/data";
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

export default function About() {
  return (
    <Section id="about" index="01" kicker="Who" title="The Engineer">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* left: narrative */}
        <div className="lg:col-span-7">
          <p className="reveal text-silver font-body text-lg md:text-xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="reveal mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5 font-mono text-sm">
            <Field icon={<FiMapPin />} label="Location" value={profile.location} />
            <Field
              icon={<FiPhone />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            />
            <Field
              icon={<FiMail />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <Field
              icon={<FiGithub />}
              label="GitHub"
              value="shaurya9327"
              href={profile.github}
            />
            <Field
              icon={<FiLinkedin />}
              label="LinkedIn"
              value="shaurya-dandriyal"
              href={profile.linkedin}
            />
            <Field
              icon={<span className="font-bold">↗</span>}
              label="Site"
              value={profile.site}
              href={`https://${profile.site}`}
            />
          </div>
        </div>

        {/* right: stat cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal brackets-4 relative panel p-6"
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <span className="bk tl" />
              <span className="bk tr" />
              <span className="bk bl" />
              <span className="bk br" />
              <p className="display text-accent text-5xl md:text-6xl">{s.value}</p>
              <p className="mt-2 font-mono text-xs text-muted leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Field({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="text-accent mt-0.5">{icon}</span>
      <div>
        <p className="text-muted uppercase tracking-wider text-[0.65rem]">{label}</p>
        <p className="text-fg group-hover:text-accent transition-colors break-all">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="group">
      {inner}
    </a>
  ) : (
    <div className="group">{inner}</div>
  );
}
