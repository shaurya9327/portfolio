# z.ai — Portfolio Redesign

Modern, cinematic DevOps portfolio built with Next.js 16, React 19, Tailwind CSS, and TypeScript.

## Design Language

- **Pure black canvas** with neon orange `#FF5400` accents and metallic silver text
- **Cinematic hero reel** — 5 stylized UI frames (terminal, Grafana, pods, pipeline, topology) cycling every 5s with Ken Burns zoom, progress bar, chapter counter, and sound toggle
- **Grain overlay** — SVG fractal-noise drifts with scroll via lerp smoothing
- **Staggered reveals** — IntersectionObserver-driven fade + translate with configurable delay
- **Custom drag carousel** — mouse-drag, touch-swipe, momentum tracking, rubber-band edge easing (0.35×), auto-advance 4.5s
- **3D flip cards** — project cards flip on hover to reveal detail
- **Intake-style contact form** — pill goal selector, radio-card time slots, corner brackets, toast confirmation
- **Sticky bottom bar** — slides up past hero, snaps away at contact
- **Marquee ticker** — brand aphorisms, seamless loop, pauses on hover

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 3 |
| Language | TypeScript 5 |
| Animation | CSS keyframes + IntersectionObserver (no Framer Motion) |
| Icons | react-icons |
| Fonts | Bebas Neue, Oswald, JetBrains Mono (Google Fonts via next/font) |

## Run Locally

```bash
cd z.ai
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Content

All resume data, project info, skills, and contact config lives in `lib/data.ts`.
The downloadable resume is `public/resume.pdf` (ATS-optimized version).
