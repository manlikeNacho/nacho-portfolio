import type {
  ExperienceItem,
  NavLink,
  Project,
  SiteProfile,
  SkillGroup,
  SocialLink,
} from "@/types/portfolio";

export const profile: SiteProfile = {
  name: "Iheanacho Emmanuel",
  brand: "Iheanacho",
  role: "Backend-focused fullstack engineer",
  location: "Lagos, NG",
  timezone: "Africa/Lagos",
  email: "eiheanacho52@gmail.com",
  heroName: ["Iheanacho", "Emmanuel"],
  heroBio:
    "I architect scalable systems, resilient payment infrastructure and event-driven cloud services — from FastAPI and Go backends to Terraform-provisioned AWS environments that hold up in production.",
  aboutBio:
    "Versatile, backend-focused full-stack engineer with a track record of architecting scalable systems, robust cloud infrastructure, and high-performance APIs — spanning event-driven cloud architectures, IoT telemetry integrations, and resilient payment gateways. Skilled in automation with Terraform and CDKTF, with hands-on technical leadership managing engineering squads to ship product value and long-term system stability.",
  stats: [
    { value: "3+ yrs", label: "professional backend/fullstack" },
    { value: "6", label: "engineers led at Jego Technologies" },
    { value: "5", label: "companies shipped to production" },
  ],
  contactHeading: "Let's build something that holds.",
  contactBio:
    "Open to backend and fullstack roles, and infrastructure-heavy projects. Reach out directly or find me on the platforms below.",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/manlikeNacho", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-iheanacho",
    icon: "linkedin",
  },
  { label: "Dev.to", href: "https://dev.to/iheanachoebere", icon: "devto" },
  { label: "Email", href: "mailto:eiheanacho52@gmail.com", icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "HTML", "SCSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Go (Gin)", "FastAPI", "Python", "Celery", "Firebase / GCF"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Firestore"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS (ECS, ECR, Route53)", "GCP", "Terraform", "CDKTF", "Docker", "GitHub Actions"],
  },
  {
    label: "Testing & Tools",
    items: ["Jest", "Mocha", "MQTT", "Postmark", "Paystack", "Stripe"],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "Ledger — reconciliation engine",
    description:
      "Event-driven service reconciling Stripe and Paystack webhooks against internal ledgers, with automated retry and drift alerts.",
    tech: "FastAPI / PostgreSQL / Celery",
    link: "https://github.com/manlikeNacho",
  },
  {
    index: "02",
    title: "Pulse — telemetry gateway",
    description:
      "MQTT ingestion layer streaming live device telemetry into a time-series store, with a WebSocket feed for dashboards.",
    tech: "Go / MQTT / Redis",
    link: "https://github.com/manlikeNacho",
  },
  {
    index: "03",
    title: "Foundry — Terraform modules",
    description:
      "Reusable CDKTF module set for spinning up isolated, reproducible ECS environments across staging and production.",
    tech: "Terraform / CDKTF / AWS ECS",
    link: "https://github.com/manlikeNacho",
  },
  {
    index: "04",
    title: "Relay — presence service",
    description:
      "Real-time in-app messaging with Redis-backed session sync and live presence tracking at scale.",
    tech: "Node.js / WebSockets / Redis",
    link: "https://github.com/manlikeNacho",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Backend Engineer",
    company: "Jego Technologies",
    link: "https://www.jegopods.com/",
    dates: "Feb 2025 — Present",
    summary:
      "Directs a 6-engineer squad; scaled FastAPI REST/WebSocket services on PostgreSQL, hardened Paystack webhook pipelines, and architected containerized AWS ECS infrastructure via Terraform.",
  },
  {
    role: "Backend Engineer",
    company: "Outset Wellness",
    link: "https://www.outsetwellness.com/",
    dates: "Jul 2024 — Present",
    summary:
      "Automated infrastructure with CDKTF, designed a serverless Firebase/GCP backend, and optimized Stripe subscription webhook handling and retries.",
  },
  {
    role: "Junior Fullstack",
    company: "Sircle",
    link: "https://sirclecompany.com/",
    dates: "Jun 2023 — Jul 2024",
    summary:
      "Built concurrent Go (Gin) REST APIs, improved response times via query optimization and Redis caching, and containerized services into GitHub Actions CI/CD.",
  },
  {
    role: "Frontend Intern",
    company: "Macif",
    link: "#",
    dates: "Aug 2022 — Dec 2022",
    summary:
      "Built a landing page and dashboard in React/Bootstrap driving a 15% engagement increase; cut load times over 50% with Redux Toolkit Query.",
  },
  {
    role: "Frontend Intern",
    company: "Ardency",
    link: "https://ardency.sh/",
    dates: "May 2022 — Jul 2022",
    summary:
      "Resolved critical frontend bugs and translated design mockups into pixel-perfect, responsive UIs in HTML, SCSS and MUI.",
  },
];
