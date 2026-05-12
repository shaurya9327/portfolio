"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TUX_ASCII, TIGER_ASCII, WOLF_ASCII } from "./Memes";

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
    filename: "/etc/tiger.ops",
    ascii: TIGER_ASCII,
    rows: [
      { key: "agility",  value: "5× build speedup" },
      { key: "patrol",   value: "31 ci jobs · 4 stages" },
      { key: "strike",   value: "atomic helm rollback" },
      { key: "prey",     value: "regressions · cves" },
      { key: "scanner",  value: "trivy · sonarqube" },
      { key: "status",   value: "tracking", valueClass: "text-fg" },
    ],
  },
  {
    filename: "/etc/wolf.pack",
    ascii: WOLF_ASCII,
    rows: [
      { key: "pack",      value: "119 deployments" },
      { key: "den",       value: "13 statefulsets" },
      { key: "senses",    value: "prometheus · loki · tempo" },
      { key: "howl",      value: "alertmanager · on-call" },
      { key: "territory", value: "dev · uat · prod" },
      { key: "status",    value: "watching", valueClass: "text-fg" },
    ],
  },
];

export default function MotdFlipboard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % faces.length), 6500);
    return () => clearInterval(id);
  }, []);
  const f = faces[i];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="md:col-span-2 bd p-5 font-mono text-xs md:text-sm bg-panel relative"
      style={{ perspective: 1000 }}
    >
      {/* window chrome with flipping filename */}
      <div className="flex items-center gap-1.5 mb-4 text-muted">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted/40" />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={f.filename}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
            className="ml-2 inline-block"
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            {f.filename}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* the flipping body: ascii + spec rows */}
      <div
        className="relative min-h-[300px] md:min-h-[340px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={i}
            initial={{ rotateX: 90, y: -20, opacity: 0 }}
            animate={{ rotateX: 0, y: 0, opacity: 1 }}
            exit={{ rotateX: -90, y: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            <pre className="ascii text-accent leading-tight">{f.ascii}</pre>
            <div className="mt-4 text-muted text-[11px] md:text-xs leading-relaxed">
              {f.rows.map((r) => (
                <p key={r.key}>
                  <span className="text-accent">{r.key.padEnd(9, " ")}</span> :{" "}
                  <span className={r.valueClass}>{r.value}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* face indicator pips */}
      <div className="absolute top-5 right-5 flex gap-1.5">
        {faces.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              idx === i ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
