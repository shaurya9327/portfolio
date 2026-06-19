import type { Metadata } from "next";
import { Bebas_Neue, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaurya Dandriyal — DevOps & Platform Engineer",
  description:
    "DevOps / Platform Engineer building cloud-native infrastructure on AWS and Kubernetes. CI/CD, Terraform, Kafka, ClickHouse, Qdrant, Grafana observability.",
  openGraph: {
    title: "Shaurya Dandriyal — DevOps & Platform Engineer",
    description:
      "DevOps / Platform Engineer specializing in CI/CD, Kubernetes, AWS, and observability.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${oswald.variable} ${jetbrains.variable}`}
    >
      <body className="font-body antialiased bg-bg text-silver selection:text-bg">
        {children}
      </body>
    </html>
  );
}
