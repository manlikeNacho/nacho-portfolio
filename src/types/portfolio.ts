export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "devto" | "mail";
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  index: string;
  title: string;
  description: string;
  tech: string;
  link: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  link: string;
  dates: string;
  summary: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteProfile {
  name: string;
  brand: string;
  role: string;
  location: string;
  timezone: string;
  email: string;
  heroName: [string, string];
  heroBio: string;
  aboutBio: string;
  stats: Stat[];
  contactHeading: string;
  contactBio: string;
}
