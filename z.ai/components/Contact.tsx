"use client";
import { useEffect, useState } from "react";
import Section from "./Section";
import { profile, contactGoals, contactSlots } from "@/lib/data";
import { FiSend, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [goals, setGoals] = useState<string[]>([]);
  const [slot, setSlot] = useState<string>("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const toggleGoal = (g: string) =>
    setGoals((cur) => (cur.includes(g) ? cur.filter((x) => x !== g) : [...cur, g]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // static site — open a pre-filled mailto so the intake still lands somewhere
    const subject = encodeURIComponent(
      `[Portfolio] ${form.name || "New enquiry"} — ${goals.join(", ") || "general"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Interested in: ${goals.join(", ") || "—"}`,
        `Preferred slot: ${contactSlots.find((s) => s.id === slot)?.label ?? "—"}`,
        ``,
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setToast(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setGoals([]);
    setSlot("");
  };

  return (
    <Section id="contact" index="05" kicker="Get In Touch" title="Let's Build">
      <div className="grid lg:grid-cols-12 gap-10">
        {/* left: pitch */}
        <div className="lg:col-span-4">
          <p className="reveal text-silver text-lg leading-relaxed font-body">
            Hiring for a platform role, scoping a cloud migration, or need a CI/CD
            overhaul? I own infrastructure end-to-end and ship to production.
          </p>
          <div className="reveal mt-8 space-y-3 font-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="block text-fg hover:text-accent transition-colors"
            >
              ✉ {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="block text-fg hover:text-accent transition-colors"
            >
              ☏ {profile.phone}
            </a>
            <p className="text-muted">{profile.location}</p>
          </div>
        </div>

        {/* right: intake form */}
        <form
          onSubmit={onSubmit}
          className="reveal lg:col-span-8 brackets-4 relative panel hairline p-6 md:p-10"
        >
          <span className="bk tl" /><span className="bk tr" />
          <span className="bk bl" /><span className="bk br" />

          {/* fields */}
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <Input
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              required
            />
            <div className="sm:col-span-2">
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>
          </div>

          {/* pill goal selector */}
          <div className="mt-7">
            <p className="eyebrow text-muted mb-3">I&apos;m interested in</p>
            <div className="flex flex-wrap gap-2">
              {contactGoals.map((g) => {
                const on = goals.includes(g);
                return (
                  <button
                    type="button"
                    key={g}
                    onClick={() => toggleGoal(g)}
                    className={`px-3.5 py-2 font-body text-sm border transition-all ${
                      on
                        ? "bg-accent border-accent text-bg"
                        : "hairline text-silver hover:text-accent hover:border-accent/40"
                    }`}
                  >
                    {g}
                  </button>
                );
              })}
            </div>
          </div>

          {/* radio-card time slots */}
          <div className="mt-7">
            <p className="eyebrow text-muted mb-3">Best time to reach you</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {contactSlots.map((s) => {
                const on = slot === s.id;
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSlot(s.id)}
                    className={`text-left p-4 border transition-all relative ${
                      on
                        ? "border-accent bg-accent/10"
                        : "hairline hover:border-accent/40"
                    }`}
                  >
                    <span
                      className={`absolute top-3 right-3 w-3.5 h-3.5 rounded-full border ${
                        on ? "border-accent bg-accent" : "border-muted"
                      }`}
                    />
                    <p className={`font-body text-sm font-semibold ${on ? "text-accent" : "text-fg"}`}>
                      {s.label}
                    </p>
                    <p className="font-mono text-[0.65rem] text-muted mt-1">{s.note}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* message */}
          <div className="mt-7">
            <label className="eyebrow text-muted mb-2 block">Anything else?</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full bg-black/40 hairline px-4 py-3 text-fg font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about the role, stack, or problem…"
            />
          </div>

          <button
            type="submit"
            className="cta-glow mt-7 inline-flex items-center gap-2 bg-accent text-bg font-body font-semibold px-7 py-3.5 hover:bg-accent2 transition-colors uppercase tracking-wider text-sm"
          >
            <FiSend /> Send enquiry
          </button>
        </form>
      </div>

      {/* slide-in toast */}
      <div
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-[80] transition-all duration-500 ${
          toast ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        <div className="brackets-4 relative bg-ink hairline-accent px-6 py-4 flex items-center gap-3 max-w-sm">
          <span className="bk tl" /><span className="bk tr" />
          <span className="bk bl" /><span className="bk br" />
          <FiCheckCircle className="text-accent text-xl shrink-0" />
          <div>
            <p className="font-body text-sm text-fg font-semibold">Enquiry ready</p>
            <p className="font-mono text-xs text-muted">
              Your mail client should open — hit send and I&apos;ll reply within a day.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow text-muted mb-2 block">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/40 hairline px-4 py-3 text-fg font-body text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
