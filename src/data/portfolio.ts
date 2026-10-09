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
  role: "Backend & platform engineer",
  location: "Lagos, NG",
  timezone: "Africa/Lagos",
  email: "eiheanacho52@gmail.com",
  heroName: ["Iheanacho", "Emmanuel"],
  heroBio:
    "I design and run backend systems in production: APIs, payments, real-time and IoT, and the cloud infrastructure and pipelines underneath them. FastAPI and Go on PostgreSQL and Redis, shipped on AWS with Terraform.",
  aboutBio:
    "Engineering Lead at JéGO, where I lead a team of six and am the main author of the platform behind EV rentals, payments, fleet financing and EV charging in Africa. I own systems end to end, from data model and APIs to infrastructure, CI/CD and production incidents. I care about the unglamorous parts that keep systems reliable: migrations, idempotency, observability and rollbacks. I also ship frontend and mobile when it helps close the loop.",
  stats: [
    { value: "4+ yrs", label: "professional backend/fullstack" },
    { value: "6", label: "engineers led at JéGO" },
    { value: "1,900+", label: "automated tests in the JéGO backend" },
  ],
  contactHeading: "Let's build something that holds.",
  contactBio:
    "Open to backend and platform engineering roles and interesting collaborations. Reach out directly or find me on the platforms below.",
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
    href: "https://www.linkedin.com/in/iheancho-emmanuel-ebere/",
    icon: "linkedin",
  },
  { label: "Dev.to", href: "https://dev.to/nachothegre8t", icon: "devto" },
  { label: "Email", href: "mailto:eiheanacho52@gmail.com", icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Go (Gin)",
      "Node.js",
      "SQLAlchemy",
      "Alembic",
      "WebSockets",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Redis", "MongoDB", "Firestore"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (ECS Fargate, Lambda, SQS, RDS)",
      "GCP",
      "Terraform",
      "CDK / CDKTF",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    label: "Payments & IoT",
    items: [
      "Paystack",
      "Stripe",
      "Wallets & ledgers",
      "OCPP 1.6J",
      "MQTT / EMQX",
    ],
  },
  {
    label: "Frontend & Mobile",
    items: [
      "Next.js",
      "React",
      "Vue / Ionic",
      "Flutter",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    label: "Testing & Tools",
    items: ["pytest", "Playwright", "Jest", "Sentry", "CloudWatch", "Postmark"],
  },
  {
    label: "AI",
    items: [
      "Claude API (tool calling)",
      "OpenAI API",
      "AI-assisted engineering",
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "burst-notifier — debounced webhook notifier",
    description:
      "Collapses a burst of events into one signed webhook. Quiet-window plus max-wait debouncing, idempotent ingestion, retries with backoff and stable batch IDs for receiver-side dedupe. Live demo deployed on Render.",
    tech: "Go / HTTP / Docker / Render",
    link: "https://github.com/manlikeNacho/burst-notifier",
  },
  {
    index: "02",
    title: "ocpp-lab — OCPP 1.6J simulator and central system",
    description:
      "In progress. Charge point simulator and minimal central system in Go, built around routing a command to a charger connected to a different worker using a Redis ownership registry and pub/sub. OCPP-J framing is done and tested.",
    tech: "Go / WebSockets / Redis",
    link: "https://github.com/manlikeNacho/ocpp-lab",
  },
  {
    index: "03",
    title: "Sissors — URL shortener",
    description:
      "URL shortener API in Go with a layered controller, service and repository structure, MongoDB storage and generated Swagger docs.",
    tech: "Go (Gin) / MongoDB / Swagger",
    link: "https://github.com/manlikeNacho/Sissors",
  },
  {
    index: "04",
    title: "GmailLoader — email classifier",
    description:
      "Gmail OAuth2 integration that pulls a user's email and classifies it with the OpenAI API.",
    tech: "Express / Next.js / OAuth2 / OpenAI",
    link: "https://github.com/manlikeNacho/gmailLoader",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Engineering Lead",
    company: "JéGO Technologies",
    link: "https://www.jegopods.com/",
    dates: "Feb 2025 — Present",
    summary:
      "Lead a team of six and author most of the FastAPI/PostgreSQL platform behind EV rentals, payments, fleet financing and charging. Built the B2B fleet-partner platform, an OCPP 1.6J charging backend with a Redis command bus across workers, MQTT telemetry and end-to-end Paystack payments. Moved production to ECS Fargate with Terraform and gated GitHub Actions pipelines (76 resources on locked S3 state), replaced Celery with Lambda and SQS, and shipped a Claude-based booking assistant.",
  },
  {
    role: "Engineer, NYSC Corps Member",
    company: "Eko Electricity Distribution Company",
    link: "https://ekedp.com/",
    dates: "Jun 2026 — Present",
    summary:
      "Model and simulate low-voltage distribution networks in PSS SINCAL across 20+ injection substations, and built a Python desktop tool that tracks an approvals workflow with SLA reporting and Excel dashboards.",
  },
  {
    role: "Full-Stack Engineer (Backend-focused)",
    company: "Outset Wellness",
    link: "https://www.outsetwellness.com/",
    dates: "Jul 2024 — Jan 2026",
    summary:
      "Built the serverless backend for a wellness app on Firebase and Google Cloud Functions, managed with CDKTF. Handled Stripe subscription flows and webhook edge cases, lifecycle email on Postmark, and shipped Vue 3 and Ionic features.",
  },
  {
    role: "Junior Full-Stack Engineer",
    company: "Sircle",
    link: "https://sirclecompany.com/",
    dates: "Jun 2023 — Jul 2024",
    summary:
      "Built concurrent Go (Gin) REST APIs and goroutine-based background pipelines, improved response times through query optimisation and Redis caching on PostgreSQL, and containerised services into CI/CD.",
  },
  {
    role: "Frontend Intern",
    company: "Macif",
    link: "#",
    dates: "Aug 2022 — Dec 2022",
    summary:
      "Built a landing page and dashboard in React for a new SaaS product, contributing to a 15% rise in engagement, and cut page load times by over 50% with Redux Toolkit Query caching.",
  },
  {
    role: "Frontend Intern",
    company: "Ardency",
    link: "https://ardency.sh/",
    dates: "May 2022 — Jul 2022",
    summary:
      "Turned design mockups into responsive interfaces in HTML, SCSS and MUI, and fixed critical frontend bugs.",
  },
];
