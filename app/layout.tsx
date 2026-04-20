import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaurya Dandriyal — DevOps & Platform Engineer",
  description:
    "DevOps / Platform Engineer building cloud-native infrastructure on AWS and Kubernetes. CI/CD, Terraform, ClickHouse, Qdrant, Grafana observability.",
  openGraph: {
    title: "Shaurya Dandriyal — DevOps & Platform Engineer",
    description:
      "DevOps / Platform Engineer specializing in CI/CD, Kubernetes, AWS, and observability.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bebas.variable}>
      <body className="font-sans antialiased bg-bg text-fg">{children}</body>
    </html>
  );
}
