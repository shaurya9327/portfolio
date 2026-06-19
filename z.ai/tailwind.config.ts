import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        ink: "#08080A",
        panel: "#0C0C0F",
        border: "#1B1B20",
        muted: "#7A7A82",
        silver: "#C9C9CE",
        fg: "#E8E8EC",
        accent: "#FF5400", // neon orange
        accent2: "#FF8A3D",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        mega: "-0.06em",
      },
    },
  },
  plugins: [],
};
export default config;
