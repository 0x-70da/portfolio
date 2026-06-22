export type GlowBadgeVariant =
  | "none"
  | "success"
  | "primary"
  | "arcane"
  | "secondary"
  | "stone"
  | "crimson"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "purple"
  | "white"
  | "cyan";

export type SocialLinkVariant = "arcane" | "red" | "white" | "cyan";

export interface LabeledColorItem {
  label: string;
  color: GlowBadgeVariant;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  badges: LabeledColorItem[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  imageSrc?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  variant: string;
  icon: string;
  skills: LabeledColorItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  type: string;
  description: string;
  achievements: string[];
  tags: LabeledColorItem[];
  current?: boolean;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
  color: GlowBadgeVariant;
}

export interface FactItem {
  label: string;
  value: string;
  icon: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  color: SocialLinkVariant;
}
