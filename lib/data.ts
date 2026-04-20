import type { IconType } from "react-icons";
import {
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiGitlab,
  SiJenkins,
  SiGithubactions,
  SiArgo,
  SiApachemaven,
  SiSonarqubecloud,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiElastic,
  SiClickhouse,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiMongodb,
  SiPython,
  SiGnubash,
  SiYaml,
  SiGo,
  SiTypescript,
  SiNginx,
  SiHashicorp,
  SiLinux,
  SiProxmox,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";

export const profile = {
  name: "Shaurya Dandriyal",
  title: "DevOps & Platform Engineer",
  location: "Bengaluru, India",
  email: "shaurya.dandriyal@gmail.com",
  phone: "+91-8218682008",
  github: "https://github.com/shaurya9327",
  linkedin: "https://linkedin.com/in/shaurya-dandriyal-12203b130",
  summary:
    "DevOps / Platform Engineer with hands-on experience building and operating cloud-native infrastructure on AWS and Kubernetes. Skilled in end-to-end CI/CD with GitLab and Jenkins, Infrastructure as Code using Terraform and Ansible, and observability with Prometheus and Grafana. Proven track record provisioning ClickHouse and Qdrant, executing zero-downtime Kubernetes cluster migrations, and automating release pipelines for production services.",
  resumeHref: "/resume.pdf",
};

type Skill = { name: string; icon?: IconType; color?: string };

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Cloud",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "EC2" }, { name: "S3" }, { name: "EKS" },
      { name: "VPC" }, { name: "IAM" }, { name: "CloudWatch" },
    ],
  },
  {
    title: "Containers & Orchestration",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Helm", icon: SiHelm, color: "#0F1689" },
      { name: "Kustomize" },
      { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
    ],
  },
  {
    title: "CI/CD & GitOps",
    items: [
      { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
      { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "ArgoCD", icon: SiArgo, color: "#EF7B4D" },
      { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
      { name: "SonarQube", icon: SiSonarqubecloud, color: "#4E9BCD" },
    ],
  },
  {
    title: "Infrastructure as Code",
    items: [
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "CloudFormation" },
      { name: "Packer" },
    ],
  },
  {
    title: "Observability",
    items: [
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "Loki" },
      { name: "ELK Stack", icon: SiElastic, color: "#005571" },
      { name: "Alertmanager" },
    ],
  },
  {
    title: "Data Infrastructure",
    items: [
      { name: "ClickHouse", icon: SiClickhouse, color: "#FFCC01" },
      { name: "Qdrant" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Scripting & Programming",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "YAML", icon: SiYaml, color: "#CB171E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    title: "Networking & Security",
    items: [
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "HAProxy" },
      { name: "TLS/SSL" },
      { name: "Vault", icon: SiHashicorp, color: "#000000" },
      { name: "DNS" }, { name: "Load Balancing" },
    ],
  },
  {
    title: "AI & Productivity",
    items: [
      { name: "Claude Code", icon: FiCpu, color: "#D97757" },
      { name: "Prompt Engineering" },
      { name: "AIOps" },
      { name: "LLM Tooling" },
    ],
  },
  {
    title: "OS",
    items: [
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Ubuntu" }, { name: "Amazon Linux" },
      { name: "Systemd" },
    ],
  },
];

export const experiences = [
  {
    role: "DevOps Platform Engineer",
    company: "Spizen Technologies",
    dates: "Feb 2026 — Present",
    tag: "current",
    bullets: [
      "Owned end-to-end CI/CD setup in GitLab, managing pipelines, deployments, and release automation across multiple production services.",
      "Provisioned and operated core data infrastructure including ClickHouse and Qdrant, handling end-to-end setup, tuning, and day-2 operations.",
      "Executed zero-downtime Kubernetes cluster-to-cluster migrations and managed worker-node lifecycle, scaling, and cluster health.",
      "Provisioned isolated virtual-machine partitions on Proxmox for every member of the company, enabling reproducible dev environments across the team.",
      "Delivered production deployments for ezwallet, mybuildguide.com, and NoLimitNodes (nolimitnodes.com — live).",
      "Built a company-wide Grafana dashboard covering the entire pipeline for unified observability across services and infrastructure.",
      "Leveraged Claude Code and prompt engineering to accelerate platform automation, runbook generation, and incident triage.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Yebello Technology Pvt. Ltd.",
    dates: "Sep 2025 — Feb 2026",
    bullets: [
      "Designed and managed end-to-end CI/CD pipelines using GitLab CI, automating build, test, and deployment workflows across multiple production services.",
    ],
  },
  {
    role: "DevOps Intern",
    company: "HighCatch Pvt. Ltd.",
    dates: "Feb 2025 — Aug 2025",
    bullets: [
      "Automated deployment workflows using Jenkins and Docker, improving release frequency and workload visibility on AWS.",
      "Built and maintained CI pipelines, container images, and monitoring hooks for internal services.",
    ],
  },
];

export const projects = [
  {
    name: "NoLimitNodes",
    stack: ["Kubernetes", "GitLab CI", "Proxmox", "Grafana"],
    description:
      "Production deployment contribution at Spizen Technologies. Live at nolimitnodes.com — runs on infrastructure I provisioned and operate day-to-day.",
    metric: { value: "LIVE", label: "nolimitnodes.com" },
    link: "https://nolimitnodes.com",
  },
  {
    name: "MyBuildGuide CI/CD Platform",
    stack: ["GitLab CI", "Kubernetes", "Helm", "Docker", "PostgreSQL", "Traefik", "Longhorn"],
    description:
      "Sole owner of the end-to-end CI/CD platform for a 5-service stack (Flask backends, Expo/React frontend, admin, landing). Built a GitLab CI monorepo pipeline — 31 jobs across 4 stages with per-service change detection, umbrella Helm chart across dev/uat/prod on a self-managed Kubernetes cluster, atomic rollbacks, Alembic migration preflight, zero-downtime deploys. Live in production.",
    metric: { value: "60–80%", label: "pipeline time cut per edit" },
    link: "https://mybuildguide.com",
  },
  {
    name: "Autonomous AIOps Gateway",
    stack: ["Moltbot", "Linux", "Telegram API", "Systemd"],
    description:
      "Self-healing infrastructure assistant that automates Linux server administration and service recovery. Custom AI Skills monitor Nginx logs and execute automated remediation via secure Systemd integrations, reducing MTTR through real-time alerting and remote shell execution via Telegram.",
    metric: { value: "↓ MTTR", label: "real-time auto-remediation" },
  },
  {
    name: "Medicure, InsureMe & FinanceMe",
    stack: ["Kubernetes", "Terraform", "AWS", "Jenkins", "Prometheus", "Grafana"],
    description:
      "Provisioned highly available AWS EKS/EC2 clusters using Terraform for Infrastructure as Code management. Automated environment provisioning with Ansible and Jenkins pipelines. Implemented a distributed Jenkins Master-Agent architecture plus a full-stack Prometheus + Grafana monitoring solution.",
    metric: { value: "HA", label: "EKS + distributed CI" },
  },
  {
    name: "Zomato-Clone App",
    stack: ["SonarQube", "Jenkins", "Docker", "AWS"],
    description:
      "Integrated SonarQube into Jenkins pipelines to enforce 80%+ code coverage and security gates for containerized deployments, acting as an automated QA gatekeeper on every merge.",
    metric: { value: "80%+", label: "enforced coverage" },
  },
  {
    name: "NIFTY Options Algo Trading",
    stack: ["Python", "Playwright", "SQLite (WAL)", "Cron", "Linux VM", "Upstox API"],
    description:
      "Autonomous data-capture + multi-strategy backtesting pipeline for Indian index options. Cron-driven daily loop: Playwright-automated OAuth/TOTP refresh → market-hours tick capture (~7.5k polls/day across 23 instruments) → post-market backtest — zero manual intervention. Includes a stdlib Black-Scholes engine, realistic Indian retail cost model (STT/slippage/brokerage/GST), and six A/B-comparable strategy variants.",
    metric: { value: "99.97%", label: "pipeline uptime" },
    link: "https://github.com/shaurya9327/nse",
  },
];

export const certifications = [
  "Scalable Kubernetes — StarAgile",
  "Docker Essentials — StarAgile",
  "AWS Expert — StarAgile",
  "DevOps Engineer — StarAgile",
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  school: "IGNOU",
  dates: "2023 — 2025",
};
