"use client";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Section from "./Section";
import { profile } from "@/lib/data";
import { HAPPY_WOJAK } from "./Memes";

export default function Contact() {
  const telHref = `tel:${profile.phone.replace(/\s+/g, "")}`;
  return (
    <Section id="contact" title="Contact" kicker="contact">
      <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
        {/* /etc/mood terminal panel — matches the Hero /etc/motd aesthetic */}
        <div className="bd bg-panel p-5 font-mono text-xs md:text-sm">
          <div className="flex items-center gap-1.5 mb-4 text-muted">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
            <span className="ml-2">/etc/mood</span>
          </div>
          <pre className="ascii text-accent leading-tight">{HAPPY_WOJAK}</pre>
          <div className="mt-4 text-muted text-[11px] leading-relaxed">
            <p><span className="text-accent">mood</span>    : <span className="text-fg">feels_shippable</span></p>
            <p><span className="text-accent">status</span>  : <span className="text-fg">open_to_work</span></p>
            <p><span className="text-accent">reply</span>   : &lt; 24h</p>
          </div>
        </div>

        {/* Contact actions */}
        <div className="bd bg-panel p-6 md:p-10 font-mono">
          <p className="text-xs text-muted mb-2">$ ssh shaurya@inbox</p>
          <p className="text-fg text-sm leading-relaxed">
            Open to DevOps, Platform, and SRE roles. The fastest way to reach me is email —
            I reply within a day. Prefer to talk?  Just dial.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 hover:bg-fg transition"
            >
              <FiMail /> {profile.email}
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 bd-accent text-accent hover:bg-accent hover:text-bg px-5 py-2.5 transition"
            >
              <FiPhone /> {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bd hover:bd-accent hover:text-accent text-fg px-5 py-2.5 transition"
            >
              <FiGithub /> github
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bd hover:bd-accent hover:text-accent text-fg px-5 py-2.5 transition"
            >
              <FiLinkedin /> linkedin
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
