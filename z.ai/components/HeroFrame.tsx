"use client";
import type React from "react";

/**
 * Five stylized, high-contrast "UI frames" standing in for slow-motion
 * training footage. Pure CSS + SVG — no external images, crisp at any size.
 * Each renders full-bleed inside the hero reel; the hero wraps it in Ken Burns.
 */

function TerminalFrame() {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-3xl px-8 font-mono text-[clamp(0.7rem,1.6vw,1.05rem)] leading-relaxed">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-muted text-xs">shaurya@prod-control: ~</span>
        </div>
        <p className="text-silver">$ kubectl get nodes -o wide</p>
        <p className="text-silver">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STATUS&nbsp;&nbsp; ROLES&nbsp;&nbsp; VERSION</p>
        <p>prod-a&nbsp;&nbsp;&nbsp; <span className="text-[#28c840]">Ready</span>&nbsp;&nbsp; control&nbsp; v1.30.2</p>
        <p>prod-b&nbsp;&nbsp;&nbsp; <span className="text-[#28c840]">Ready</span>&nbsp;&nbsp; worker&nbsp;&nbsp; v1.30.2</p>
        <p>prod-c&nbsp;&nbsp;&nbsp; <span className="text-[#28c840]">Ready</span>&nbsp;&nbsp; worker&nbsp;&nbsp; v1.30.2</p>
        <p className="text-accent mt-3">$ helm upgrade nolimitnodes ./chart --atomic --wait</p>
        <p className="text-silver">Deployment "nolimitnodes" successfully rolled out.</p>
        <p className="text-silver mt-3">$ <span className="inline-block w-2.5 h-5 align-middle bg-accent live-dot" /></p>
      </div>
    </div>
  );
}

function GrafanaFrame() {
  // two area series + threshold line
  const series1 = "0,40 40,28 80,52 120,30 160,46 200,18 240,34 280,12 320,26 360,8";
  const series2 = "0,58 40,60 80,50 120,62 160,54 200,66 240,58 280,70 320,62 360,74";
  return (
    <div className="absolute inset-0 bg-[#0a0a0c] flex flex-col p-8">
      <div className="flex items-center justify-between mb-4 font-mono text-xs text-muted">
        <span>kafka consumer lag · cluster prod</span>
        <span className="text-accent live-dot">● LIVE</span>
      </div>
      <div className="relative flex-1 min-h-0">
        <svg
          viewBox="0 0 360 80"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF5400" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF5400" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8a8a8f" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8a8a8f" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[16, 32, 48, 64].map((y) => (
            <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="#1B1B20" strokeWidth="0.5" />
          ))}
          <polygon points={`${series1} 360,80 0,80`} fill="url(#g1)" />
          <polyline points={series1} fill="none" stroke="#FF5400" strokeWidth="1.4" />
          <polygon points={`${series2} 360,80 0,80`} fill="url(#g2)" />
          <polyline points={series2} fill="none" stroke="#bdbdc4" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 font-mono text-xs">
        <div>
          <p className="text-muted">throughput</p>
          <p className="text-fg text-lg font-display">12.8K<span className="text-muted text-xs">/s</span></p>
        </div>
        <div>
          <p className="text-muted">p99 latency</p>
          <p className="text-fg text-lg font-display">38<span className="text-muted text-xs">ms</span></p>
        </div>
        <div>
          <p className="text-muted">lag</p>
          <p className="text-accent text-lg font-display">↓ 0.2k</p>
        </div>
      </div>
    </div>
  );
}

function PodGridFrame() {
  const pods = Array.from({ length: 40 });
  const states = ["ok", "ok", "ok", "ok", "ok", "ok", "ok", "pending"];
  return (
    <div className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-6 p-10">
      <p className="font-mono text-xs text-muted tracking-[0.3em]">PROD · 132 WORKLOADS · ALL HEALTHY</p>
      <div className="grid grid-cols-10 gap-2 max-w-2xl">
        {pods.map((_, i) => {
          const s = states[i % states.length];
          const c =
            s === "ok" ? "bg-accent shadow-[0_0_8px_rgba(255,84,0,0.7)]"
            : s === "pending" ? "bg-[#3a3a40]"
            : "bg-muted";
          return <span key={i} className={`aspect-square rounded-[3px] ${c}`} />;
        })}
      </div>
      <p className="font-display text-6xl md:text-7xl text-fg">
        132<span className="text-accent">+</span>
      </p>
      <p className="font-mono text-xs text-muted">ZERO DOWNTIME · CILIUM eBPF</p>
    </div>
  );
}

function PipelineFrame() {
  const stages = [
    { label: "validate", state: "ok" },
    { label: "build", state: "ok" },
    { label: "test", state: "ok" },
    { label: "scan", state: "ok" },
    { label: "deploy", state: "live" },
  ];
  return (
    <div className="absolute inset-0 bg-[#0a0a0c] flex flex-col justify-center p-10">
      <p className="font-mono text-xs text-muted mb-8 tracking-[0.25em]">main · commit a1b2c3d</p>
      <div className="flex items-center justify-between gap-2 max-w-3xl mx-auto w-full">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-md flex items-center justify-center border ${
                  s.state === "live"
                    ? "border-accent bg-accent/10"
                    : "border-[#28c840]/40 bg-[#28c840]/5"
                }`}
              >
                {s.state === "live" ? (
                  <span className="w-3 h-3 rounded-full bg-accent live-dot" />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#28c840]" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className={`font-mono text-xs ${s.state === "live" ? "text-accent" : "text-muted"}`}>
                {s.label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div className="flex-1 h-px bg-gradient-to-r from-[#28c840]/60 to-[#28c840]/20 mx-2" />
            )}
          </div>
        ))}
      </div>
      <p className="text-center font-display text-5xl md:text-6xl text-fg mt-10">
        10:00 → <span className="text-accent">1:48</span>
      </p>
      <p className="text-center font-mono text-xs text-muted mt-2">BUILD TIME · 80% FASTER</p>
    </div>
  );
}

function TopologyFrame() {
  // hub + spokes topology
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 400 300" className="w-full h-full max-w-3xl">
        {/* links */}
        {[
          [200, 150, 70, 60],
          [200, 150, 330, 60],
          [200, 150, 70, 240],
          [200, 150, 330, 240],
          [200, 150, 200, 40],
          [200, 150, 200, 260],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FF5400"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
          />
        ))}
        {/* nodes */}
        {[
          [70, 60, "traefik"],
          [330, 60, "cilium"],
          [70, 240, "kafka"],
          [330, 240, "clickhouse"],
          [200, 40, "gitlab"],
          [200, 260, "qdrant"],
        ].map(([x, y, label]) => (
          <g key={label as string}>
            <circle cx={x as number} cy={y as number} r="14" fill="#0C0C0F" stroke="#7A7A82" strokeWidth="1.2" />
            <circle cx={x as number} cy={y as number} r="3" fill="#FF5400" />
            <text
              x={x as number}
              y={(y as number) + 28}
              textAnchor="middle"
              className="font-mono"
              fontSize="9"
              fill="#C9C9CE"
            >
              {label}
            </text>
          </g>
        ))}
        {/* hub */}
        <circle cx="200" cy="150" r="22" fill="#FF5400" fillOpacity="0.15" stroke="#FF5400" strokeWidth="1.5" />
        <circle cx="200" cy="150" r="6" fill="#FF5400" />
        <text x="200" y="154" textAnchor="middle" fontSize="7" fill="#000" className="font-mono" fontWeight="700">
          K8S
        </text>
      </svg>
    </div>
  );
}

export type HeroFrameId = "terminal" | "grafana" | "pods" | "pipeline" | "topology";

const frames: Record<HeroFrameId, () => React.ReactElement> = {
  terminal: TerminalFrame,
  grafana: GrafanaFrame,
  pods: PodGridFrame,
  pipeline: PipelineFrame,
  topology: TopologyFrame,
};

export const heroFrameOrder: HeroFrameId[] = [
  "terminal",
  "pods",
  "pipeline",
  "grafana",
  "topology",
];

export default function HeroFrame({ id }: { id: HeroFrameId }) {
  const Cmp = frames[id];
  return <Cmp />;
}
