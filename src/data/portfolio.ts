import type {
  ExperienceItem,
  NavLink,
  Project,
  SiteProfile,
  SkillGroup,
  SocialLink,
} from "@/types/portfolio";

export const profile: SiteProfile = {
  name: "Nacho",
  role: "Software Engineer",
  tagline: "I build fast, accessible, and thoughtfully designed web products.",
  location: "Remote",
  email: "eiheanacho52@gmail.com",
  bio: [
    "I'm a software engineer who enjoys turning complex problems into simple, elegant interfaces.",
    "My focus is on modern web applications — from crafting pixel-perfect UIs to building the systems that power them.",
  ],
  avatar: "/avatar.svg",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Email", href: "mailto:eiheanacho52@gmail.com", icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST / GraphQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
  },
];

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A full-stack application with real-time features, built for scale and performance.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/project-one.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "A design-system-driven dashboard for visualizing complex datasets in real time.",
    tags: ["React", "D3.js", "Node.js"],
    image: "/projects/project-two.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "An open-source component library focused on accessibility and developer experience.",
    tags: ["TypeScript", "Storybook", "Tailwind CSS"],
    image: "/projects/project-three.svg",
    repoUrl: "https://github.com",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    organization: "Company Name",
    period: "2023 — Present",
    description:
      "Building and maintaining customer-facing web applications, collaborating closely with design and product to ship high quality features.",
  },
  {
    role: "Frontend Developer",
    organization: "Previous Company",
    period: "2021 — 2023",
    description:
      "Led the migration to a modern component architecture, improving performance and developer velocity.",
  },
];
