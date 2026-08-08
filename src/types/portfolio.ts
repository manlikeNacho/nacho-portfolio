export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "instagram";
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface SiteProfile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  bio: string[];
  resumeUrl?: string;
  avatar: string;
}
