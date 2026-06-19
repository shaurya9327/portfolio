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
  SiApachekafka,
  SiRancher,
  SiContainerd,
  SiCilium,
  SiTrivy,
  SiSonatype,
  SiHetzner,
  SiRust,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";

export const profile = {
  name: "SHAURYA",
  surname: "DANDRIYAL",
  title: "DevOps & Platform Engineer",
  roles: [
    "DEVOPS ENGINEER",
    "PLATFORM ENGINEER",
    "CLOUD-NATIVE BUILDER",
    "RELIABILITY ENGINEER",
  ],
  location: "Bengaluru, India",
  email: "shaurya.dandriyal@gmail.com",
  phone: "+91-8218682008",
  github: "https://github.com/shaurya9327",
  linkedin: "https://linkedin.com/in/shaurya-dandriyal-12203b130",
  site: "shaurya-dandriyal.vercel.app",
  summary:
    "Results-driven DevOps and Platform Engineer with proven experience designing, automating, and operating production-grade cloud-native infrastructure on AWS, Hetzner, and Kubernetes. Specialized in end-to-end CI/CD on GitLab and Jenkins with isolated dev/test/prod environments, Infrastructure as Code with Terraform and Ansible, and full-stack observability with Prometheus, Grafana, Loki, and Tempo. Owns mission-critical data infrastructure (Apache Kafka, Redis, ClickHouse, Qdrant), executed a zero-downtime Kubernetes CNI migration, and ships resilient platforms that scale with the business.",
  blurb:
    "I design, automate, and operate production-grade cloud-native infrastructure on AWS, Hetzner, and Kubernetes — owning end-to-end CI/CD, Infrastructure as Code, and full-stack observability.",
  resumeHref: "/resume.pdf",
};

// hero ticker aphorisms
export const tickerItems = [
  "ZERO-DOWNTIME DEPLOYS",
  "INFRASTRUCTURE AS CODE",
  "SHIP IT. OBSERVE IT. OWN IT.",
  "12,800 OPS/SEC SUSTAINED",
  "FLANNEL → CILIUM · 0 DOWNTIME",
  "BUILD FAST. ROLL BACK SAFELY.",
  "PROMETHEUS · LOKI · TEMPO",
  "AUTOMATE THE TOIL",
];

export const stats: { value: string; label: string }[] = [
  { value: "12.8K", label: "ops/sec sustained" },
  { value: "132+", label: "workloads migrated, 0 downtime" },
  { value: "10→2", label: "min · CI build time cut" },
  { value: "2", label: "live SaaS products owned" },
];

type Skill = { name: string; icon?: IconType; color?: string };

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Cloud",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Hetzner", icon: SiHetzner, color: "#D50C2D" },
      { name: "EC2" }, { name: "S3" }, { name: "EKS" },
      { name: "VPC" }, { name: "IAM" }, { name: "CloudWatch" }, { name: "Route 53" }, { name: "GCP" },
    ],
  },
  {
    title: "Containers & Orchestration",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Helm", icon: SiHelm, color: "#0F1689" },
      { name: "Kustomize" },
      { name: "containerd", icon: SiContainerd, color: "#575757" },
      { name: "Rancher", icon: SiRancher, color: "#0075A8" },
      { name: "Fleet (GitOps)" },
      { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
    ],
  },
  {
    title: "CI/CD & GitOps",
    items: [
      { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
      { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
      { name: "Docker-in-Docker" },
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
    ],
  },
  {
    title: "Streaming & Messaging",
    items: [
      { name: "Apache Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "Kafka Consumer Groups" },
      { name: "Kafka Connect" },
      { name: "Pushgateway" },
    ],
  },
  {
    title: "Observability",
    items: [
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "Loki" },
      { name: "Tempo" },
      { name: "Alertmanager" },
      { name: "Node Exporter" },
      { name: "Process Exporter" },
      { name: "ELK Stack", icon: SiElastic, color: "#005571" },
    ],
  },
  {
    title: "Data Infrastructure",
    items: [
      { name: "ClickHouse", icon: SiClickhouse, color: "#FFCC01" },
      { name: "Qdrant" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "KVRocks" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Alembic" },
    ],
  },
  {
    title: "Networking & Security",
    items: [
      { name: "Cilium (eBPF)", icon: SiCilium, color: "#F8C517" },
      { name: "Flannel" },
      { name: "Traefik" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "HAProxy" },
      { name: "cert-manager" },
      { name: "Let's Encrypt" },
      { name: "CoreDNS" },
      { name: "TLS/SSL" },
      { name: "Vault", icon: SiHashicorp, color: "#000000" },
      { name: "NetworkPolicies" },
    ],
  },
  {
    title: "Scripting & Programming",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "YAML", icon: SiYaml, color: "#CB171E" },
      { name: "Groovy" },
      { name: "Rust", icon: SiRust, color: "#DEA584" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    title: "Operating Systems",
    items: [
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Ubuntu" }, { name: "Amazon Linux" }, { name: "Debian" },
      { name: "Systemd" }, { name: "iptables" }, { name: "sysctl" }, { name: "eBPF" },
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
];

export const experiences = [
  {
    role: "DevOps Platform Engineer",
    company: "Spizen Technologies",
    dates: "Feb 2026 — May 2026",
    tag: "",
    summary:
      "Owned end-to-end platform engineering for a live production product on a Hetzner + Proxmox-backed Kubernetes cluster.",
    bullets: [
      "Designed and owned end-to-end CI/CD on GitLab for NoLimitNodes (nolimitnodes.com) with fully isolated dev/test/prod environments, environment-scoped variables, protected branches, and manual production gates.",
      "Built multi-stage GitLab pipelines (validate, build, test, deploy) using Docker-in-Docker runners and BuildKit registry-mode caching — cut single-service build times from ~10 min to under 2 min, hardened with masked secrets, namespace-scoped RBAC, image vulnerability scanning, and immutable commit-pinned tags.",
      "Provisioned production ClickHouse and Qdrant data infrastructure using Ansible playbooks and reusable roles for idempotent installs, systemd service hardening, and post-install health verification.",
      "Operated Apache Kafka pipelines (consumer-group lag tuning, partition strategy) and Redis + KVRocks clusters with master/read-replica configurations supporting ~12,800 ops/sec.",
      "Set up Kubernetes worker nodes end-to-end on Hetzner and Proxmox-backed hosts via Rancher and Rancher Fleet (GitOps); tuned Linux/K8s nodes by resolving disk I/O contention, MTU mismatches under the Cilium VXLAN overlay, and rightsizing memory to eliminate OOM restarts.",
      "Executed zero-downtime CNI migration on a production K8s cluster from Flannel to Cilium with eBPF kube-proxy replacement, scaling 119 Deployments + 13 StatefulSets in dependency order with full validation of pod networking, CoreDNS, and Traefik.",
      "Built a company-wide Grafana dashboard suite covering K8s, GitLab, Kafka, ClickHouse, Qdrant, Redis, Proxmox, and Linux hosts — backed by Prometheus, Loki, Tempo, Alertmanager, and custom Python exporters for Kafka lag, ClickHouse freshness, and pipeline health.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Yebelo Technology Pvt. Ltd.",
    dates: "Mar 2025 — Feb 2026",
    tag: "",
    summary:
      "Sole owner of CI/CD, infrastructure, and release engineering for a 5-service SaaS across dev/UAT/prod.",
    bullets: [
      "Sole owner of CI/CD, infrastructure, and release engineering for MyBuildGuide (mybuildguide.com, app.mybuildguide.com) — a 5-service application across dev/UAT/prod on a self-managed Kubernetes cluster.",
      "Authored a multi-stage GitLab pipeline (detect-changes, build, validate, deploy) with per-service change detection — cut typical pipeline runtime by 60–80% for single-service edits.",
      "Built and operated a Helm umbrella chart with per-environment values, atomic helm upgrades with --wait and timeout, PodDisruptionBudgets, readiness/liveness probes, and explicit resource requests/limits across every workload.",
      "Architected an Alembic migration drift preflight gate that fails the pipeline within seconds with a ready-to-copy remediation command, replacing a silent multi-minute Helm rollback observed during a real production incident.",
      "Wired Traefik ingress with cert-manager + Let's Encrypt for automatic TLS, Longhorn-backed PostgreSQL StatefulSets per service with Alembic migrations as Helm post-upgrade Jobs, and a pgAdmin deployment using a read-only Postgres role for safe developer DB introspection.",
      "Owned platform-engineering delivery for multiple Propulse property-site projects — TVS Emerald Altura, TVS Emerald Auralis, and Puravankara Flow — standardizing GitLab CI/CD pipelines, container images, and release workflows so developers could ship without touching infra.",
      "Acted as the platform engineer across teams via shared Helm charts, K8s manifests, base Docker images, runbooks, and routine kubectl debugging (logs, describe, exec, port-forward) — reducing deployment friction across services.",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  stack: string[];
  summary: string;
  detail: string;
  metric: { value: string; label: string };
  link?: string;
};

export const projects: Project[] = [
  {
    name: "NoLimitNodes",
    category: "LIVE PRODUCTION PLATFORM",
    stack: ["Kubernetes", "GitLab CI", "Hetzner", "Proxmox", "Grafana", "Helm", "Cilium"],
    summary:
      "Live production deployment owned end-to-end. Fully isolated dev/test/prod GitLab environments, Hetzner + Proxmox-backed K8s cluster, Helm umbrella charts, and company-wide Grafana observability.",
    detail:
      "Zero-downtime CNI migration from Flannel to Cilium (eBPF, kube-proxy replacement) across 132+ workloads in dependency order, with full validation of pod networking, CoreDNS, and Traefik ingress before traffic resumed.",
    metric: { value: "LIVE", label: "nolimitnodes.com" },
    link: "https://nolimitnodes.com",
  },
  {
    name: "MyBuildGuide",
    category: "CI/CD PLATFORM",
    stack: ["GitLab CI", "Kubernetes", "Helm", "PostgreSQL", "Traefik", "Longhorn", "Alembic"],
    summary:
      "Sole owner of the end-to-end CI/CD platform for a 5-service stack. GitLab monorepo pipeline with per-service change detection, umbrella Helm chart across dev/UAT/prod, atomic rollbacks, Traefik TLS, Longhorn-backed Postgres StatefulSets.",
    detail:
      "Alembic migration preflight gate surfaces schema drift in seconds with a ready-to-copy remediation command — replacing a previously silent multi-minute Helm rollback from a real production incident.",
    metric: { value: "60–80%", label: "pipeline time cut per edit" },
    link: "https://mybuildguide.com",
  },
  {
    name: "AIOps Gateway",
    category: "SELF-HEALING INFRA",
    stack: ["Python", "Linux", "Telegram API", "Systemd", "Nginx"],
    summary:
      "Self-healing infrastructure assistant — Linux server administration and service recovery triggered from a Telegram bot interface.",
    detail:
      "Custom AI Skills monitor Nginx access/error logs in real time, classify anomalies, and execute remediation playbooks via least-privilege Systemd units. Role-based authorization and command audit logging prevent unauthorized actions in shared environments.",
    metric: { value: "↓ MTTR", label: "real-time auto-remediation" },
  },
  {
    name: "Medicure · InsureMe · FinanceMe",
    category: "MULTI-AZ HA PLATFORM",
    stack: ["Kubernetes", "Terraform", "AWS", "Jenkins", "Ansible", "Prometheus", "Grafana"],
    summary:
      "Highly available AWS EKS/EC2 clusters across multiple AZs provisioned with Terraform modules. Distributed Jenkins Master/Agent architecture for parallel pipeline execution, Docker Hub image distribution, and SonarQube quality gates.",
    detail:
      "Full-stack Prometheus + Grafana monitoring covering node, container, and application metrics, with Alertmanager routing for incident notifications.",
    metric: { value: "Multi-AZ", label: "HA EKS + distributed CI" },
  },
  {
    name: "Zomato Clone",
    category: "DEVSECOPS PIPELINE",
    stack: ["Jenkins", "Docker", "AWS", "SonarQube", "Trivy", "Nexus"],
    summary:
      "Full Jenkins CI/CD for a containerized full-stack web app — build, static analysis, security scanning, and deploy to AWS EC2.",
    detail:
      "SonarQube enforces 80%+ code coverage; Trivy container vulnerability scanning + OWASP dependency checks block images with high/critical CVEs; Nexus Repository Manager handles build-artifact storage and image promotion with commit-pinned releases.",
    metric: { value: "80%+", label: "enforced coverage + CVE gate" },
  },
  {
    name: "NSE Options Trading Bot",
    category: "AWS TRADING SYSTEM",
    stack: ["Rust", "Python", "AWS", "Docker", "Linux", "Systemd"],
    summary:
      "Automated NSE options trading bot on AWS — custom VPC with public/private subnets, Internet Gateway, NAT routing, and Elastic IP for stable broker-API egress.",
    detail:
      "Multi-module Rust signal engine + Python orchestrator, commit-pinned images in ECR, Systemd-managed service on EC2 with EBS-backed persistent state, IAM least-privilege, and AWS Systems Manager Parameter Store for secret management.",
    metric: { value: "End-to-End", label: "AWS topology + Rust engine" },
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

// contact intake options
export const contactGoals = [
  "DevOps / Platform role",
  "Contract / freelance infra work",
  "Cloud migration",
  "Observability setup",
  "CI/CD overhaul",
  "Just saying hi",
];

export const contactSlots = [
  { id: "morning", label: "Weekday mornings", note: "09:00 — 12:00 IST" },
  { id: "afternoon", label: "Weekday afternoons", note: "12:00 — 17:00 IST" },
  { id: "evening", label: "Weekday evenings", note: "17:00 — 20:00 IST" },
  { id: "weekend", label: "Weekends", note: "flexible IST" },
];
