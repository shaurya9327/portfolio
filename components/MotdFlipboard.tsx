"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TUX_ASCII, FOX_ASCII, SMILEY_ASCII } from "./Memes";

type Face = {
  filename: string;
  ascii: string;
  rows: { key: string; value: string; valueClass?: string }[];
};

const faces: Face[] = [
  {
    filename: "/etc/motd",
    ascii: TUX_ASCII,
    rows: [
      { key: "hostname", value: "spizen-prod-01" },
      { key: "kernel",   value: "6.8.12-amd64" },
      { key: "cloud",    value: "aws · hetzner · proxmox" },
      { key: "data",     value: "clickhouse · qdrant · kafka" },
      { key: "monitor",  value: "grafana · loki · tempo" },
      { key: "status",   value: "shipping", valueClass: "text-fg" },
    ],
  },
  {
    filename: "/etc/fox.ops",
    ascii: FOX_ASCII,
    rows: [
      { key: "agility",  value: "5× build speedup" },
      { key: "patrol",   value: "31 ci jobs · 4 stages" },
      { key: "strike",   value: "atomic helm rollback" },
      { key: "prey",     value: "regressions · cves" },
      { key: "scanner",  value: "trivy · sonarqube" },
      { key: "status",   value: "prowling", valueClass: "text-fg" },
    ],
  },
  {
    filename: "/etc/all_green",
    ascii: SMILEY_ASCII,
    rows: [
      { key: "dashboards", value: "grafana · company-wide" },
      { key: "metrics",    value: "prometheus + exporters" },
      { key: "logs",       value: "loki" },
      { key: "traces",     value: "tempo" },
      { key: "alerts",     value: "alertmanager · on-call" },
      { key: "status",     value: "all_green :)", valueClass: "text-fg" },
    ],
  },
];

export default function MotdFlipboard() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((x) => (x + 1) % faces.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const f = faces[i];

  return (
    <div
      className="md:col-span-2 bd p-5 font-mono text-xs md:text-sm bg-panel relative overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 mb-4 text-muted">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={f.filename}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
            className="ml-2"
          >
            {f.filename}
          </motion.span>
        </AnimatePresence>

        {/* face indicator pips */}
        <div className="ml-auto flex gap-1.5">
          {faces.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                idx === i ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* flipping body */}
      <div className="relative min-h-[320px] md:min-h-[360px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            initial={{ rotateX: -100, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 100, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.34, 1.2, 0.64, 1] }}
            className="absolute inset-0 origin-center"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <pre className="ascii text-accent leading-tight">{f.ascii}</pre>
            <div className="mt-4 text-muted text-[11px] md:text-xs leading-relaxed">
              {f.rows.map((r) => (
                <p key={r.key}>
                  <span className="text-accent">{r.key.padEnd(10, " ")}</span> :{" "}
                  <span className={r.valueClass}>{r.value}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
