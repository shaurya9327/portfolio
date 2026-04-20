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

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Cloud", items: ["AWS", "EC2", "S3", "IAM", "VPC", "EKS", "CloudWatch", "Route 53", "ELB", "GCP"] },
  { title: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Helm", "Kustomize", "Proxmox VE"] },
  { title: "CI/CD & GitOps", items: ["GitLab CI", "Jenkins", "GitHub Actions", "ArgoCD", "Maven", "SonarQube"] },
  { title: "Infrastructure as Code", items: ["Terraform", "Ansible", "CloudFormation", "Packer"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "Loki", "ELK Stack", "CloudWatch", "Alertmanager"] },
  { title: "Data Infra", items: ["ClickHouse", "Qdrant", "PostgreSQL", "MySQL", "Redis", "MongoDB"] },
  { title: "Scripting & Programming", items: ["Python", "Bash", "YAML", "Groovy", "Go (basics)", "TypeScript"] },
  { title: "Networking & Security", items: ["Nginx", "HAProxy", "TLS/SSL", "DNS", "Load Balancing", "IAM", "HashiCorp Vault"] },
  { title: "AI & Productivity", items: ["Claude Code", "Prompt Engineering", "AIOps", "LLM tooling"] },
];

export const experiences = [
  {
    role: "DevOps Platform Engineer",
    company: "Spizen Technologies",
    dates: "Feb 2026 — Present",
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
    name: "Autonomous AIOps Gateway",
    stack: ["Moltbot", "Linux", "Telegram API", "Systemd"],
    description:
      "Self-healing infrastructure assistant that automates Linux server administration and service recovery. Custom AI Skills monitor Nginx logs and execute automated remediation via secure Systemd integrations, reducing MTTR through real-time alerting and remote shell execution via Telegram.",
    highlights: ["Self-healing", "MTTR reduction", "AI-driven remediation"],
  },
  {
    name: "Medicure, InsureMe & FinanceMe",
    stack: ["Kubernetes", "Terraform", "AWS", "Jenkins", "Docker", "Prometheus", "Grafana"],
    description:
      "Provisioned highly available AWS EKS/EC2 clusters using Terraform for Infrastructure as Code management. Automated environment provisioning with Ansible and Jenkins pipelines. Implemented a distributed Jenkins Master-Agent architecture plus a full-stack Prometheus + Grafana monitoring solution.",
    highlights: ["IaC", "Distributed CI", "Full-stack observability"],
  },
  {
    name: "Zomato-Clone App",
    stack: ["SonarQube", "Jenkins", "Docker", "AWS"],
    description:
      "Integrated SonarQube into Jenkins pipelines to enforce 80%+ code coverage and security gates for containerized deployments, acting as an automated QA gatekeeper on every merge.",
    highlights: ["Quality gates", "Security scanning", "80%+ coverage"],
  },
  {
    name: "NoLimitNodes",
    stack: ["Kubernetes", "GitLab CI", "Proxmox", "Grafana"],
    description: "Live production deployment contribution at Spizen Technologies — nolimitnodes.com.",
    highlights: ["Live", "Production"],
    link: "https://nolimitnodes.com",
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
