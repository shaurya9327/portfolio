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
  name: "Shaurya Dandriyal",
  title: "DevOps & Platform Engineer",
  location: "Bengaluru, India",
  email: "shaurya.dandriyal@gmail.com",
  phone: "+91-8218682008",
  github: "https://github.com/shaurya9327",
  linkedin: "https://linkedin.com/in/shaurya-dandriyal-12203b130",
  summary:
    "Results-driven DevOps and Platform Engineer with proven experience designing, automating, and operating production-grade cloud-native infrastructure on AWS, Hetzner Cloud, and Kubernetes. Specialized in end-to-end CI/CD on GitLab and Jenkins with isolated dev/test/prod environments, Infrastructure as Code with Terraform and Ansible, and full-stack observability with Prometheus, Grafana, Loki, and Tempo. Owns mission-critical data infrastructure (Apache Kafka, Redis, ClickHouse, Qdrant), executed a zero-downtime Kubernetes CNI migration, and ships resilient platforms that scale with the business.",
  resumeHref: "/resume.pdf",
};

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
    title: "Storage",
    items: [
      { name: "Longhorn" },
      { name: "local-path-provisioner" },
      { name: "Persistent Volumes" },
      { name: "StorageClasses" },
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
    dates: "Feb 2026 — Present",
    tag: "current",
    bullets: [
      "Designed and owned end-to-end CI/CD on GitLab for NoLimitNodes (nolimitnodes.com) with fully isolated dev/test/prod environments, environment-scoped variables, protected branches, and manual production gates.",
      "Built multi-stage GitLab pipelines (validate, build, test, deploy) using Docker-in-Docker runners and BuildKit registry-mode caching — cut single-service build times from ~10 min to under 2 min, hardened with masked secrets, namespace-scoped RBAC, image vulnerability scanning, and immutable commit-pinned tags.",
      "Provisioned production ClickHouse and Qdrant data infrastructure using Ansible playbooks and reusable roles for idempotent installs, systemd service hardening, and post-install health verification.",
      "Operated Apache Kafka pipelines (consumer-group lag tuning, partition strategy) and Redis + KVRocks clusters with master/read-replica configurations supporting ~12,800 ops/sec.",
      "Set up Kubernetes worker nodes end-to-end on Hetzner and Proxmox-backed hosts via Rancher and Rancher Fleet (GitOps); tuned Linux/K8s nodes by resolving disk I/O contention, MTU mismatches under the Cilium VXLAN overlay, and rightsizing memory to eliminate OOM restarts.",
      "Executed zero-downtime CNI migration on a production K8s cluster from Flannel to Cilium with eBPF kube-proxy replacement, scaling 119 Deployments + 13 StatefulSets in dependency order with full validation of pod networking, CoreDNS, and Traefik.",
      "Built a company-wide Grafana dashboard suite covering K8s, GitLab, Kafka, ClickHouse, Qdrant, Redis, Proxmox, and Linux hosts — backed by Prometheus, Loki, Tempo, Alertmanager, and custom Python exporters for Kafka lag, ClickHouse freshness, and pipeline health.",
      "Leveraged Claude Code and prompt engineering to accelerate platform automation, runbook generation, and incident triage.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Yebello Technology Pvt. Ltd.",
    dates: "Mar 2025 — Feb 2026",
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

export const projects = [
  {
    name: "NoLimitNodes",
    stack: ["Kubernetes", "GitLab CI", "Cilium", "Proxmox", "Grafana", "Hetzner"],
    description:
      "Live production deployment owned end-to-end at Spizen Technologies. Fully isolated dev/test/prod GitLab environments, protected branches with manual production gates, running on a Hetzner + Proxmox-backed Kubernetes cluster after a zero-downtime Flannel → Cilium (eBPF) CNI migration.",
    metric: { value: "LIVE", label: "nolimitnodes.com" },
    link: "https://nolimitnodes.com",
  },
  {
    name: "MyBuildGuide CI/CD Platform",
    stack: ["GitLab CI", "Kubernetes", "Helm", "Docker", "PostgreSQL", "Traefik", "Longhorn", "Alembic"],
    description:
      "Sole owner of the end-to-end CI/CD platform for a 5-service stack (Flask backends, Expo/React frontend, admin, landing). GitLab monorepo pipeline with per-service change detection, umbrella Helm chart across dev/UAT/prod, atomic rollbacks, Alembic migration preflight, Traefik + cert-manager TLS, Longhorn-backed Postgres StatefulSets. Live in production.",
    metric: { value: "60–80%", label: "pipeline time cut per edit" },
    link: "https://mybuildguide.com",
  },
  {
    name: "Autonomous AIOps Gateway",
    stack: ["Python", "Linux", "Telegram API", "Systemd", "Nginx"],
    description:
      "Self-healing infrastructure assistant — Linux server administration and service recovery triggered from a Telegram bot. Custom AI Skills monitor Nginx access/error logs in real time, classify anomalies, and execute remediation playbooks via least-privilege Systemd units. Role-based authorization, command audit logging, and least-privilege service configs prevent unauthorized actions.",
    metric: { value: "↓ MTTR", label: "real-time auto-remediation" },
  },
  {
    name: "Medicure, InsureMe & FinanceMe",
    stack: ["Kubernetes", "Terraform", "AWS", "Jenkins", "Ansible", "Prometheus", "Grafana"],
    description:
      "Provisioned highly available AWS EKS/EC2 clusters across multiple AZs using Terraform modules for repeatable IaC management of networking, IAM, security groups, and worker node groups. Distributed Jenkins Master/Agent architecture for parallel pipeline execution, Docker Hub for image distribution, SonarQube for quality gates, and full-stack Prometheus + Grafana monitoring with Alertmanager routing.",
    metric: { value: "Multi-AZ", label: "HA EKS + distributed CI" },
  },
  {
    name: "Zomato Clone Application",
    stack: ["SonarQube", "Jenkins", "Docker", "AWS", "Trivy", "Nexus"],
    description:
      "Full Jenkins CI/CD for a containerized full-stack web app — build, static analysis, security scanning, and deploy to AWS EC2. SonarQube enforces 80%+ code coverage; Trivy container vulnerability scanning + OWASP dependency checks block images with high/critical CVEs; Nexus Repository Manager handles build-artifact storage and Docker image promotion across environments with commit-pinned versioned releases.",
    metric: { value: "80%+", label: "enforced coverage + CVE gate" },
  },
  {
    name: "NSE Options Trading Bot",
    stack: ["Rust", "Python", "AWS", "Docker", "Linux", "Systemd"],
    description:
      "Automated NSE options trading bot deployed on AWS — custom VPC with public/private subnets, Internet Gateway, NAT routing, and Elastic IP for stable broker-API egress, on a low-latency EC2 instance hardened with broker-scoped security groups. Multi-module Rust signal engine + Python orchestrator, commit-pinned images in ECR, Systemd-managed service on EC2 with EBS-backed persistent state, IAM least-privilege, and AWS Systems Manager Parameter Store for secret management.",
    metric: { value: "End-to-End", label: "AWS topology + Rust signal engine" },
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
