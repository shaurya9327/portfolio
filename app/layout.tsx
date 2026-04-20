import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
