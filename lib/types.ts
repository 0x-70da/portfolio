import { SectionId } from "@/hooks/useActiveSection";

export interface Project {
  id: string;
  title: string;
  description: string;
  badges: string[];
  status: "live" | "wip";
  githubUrl?: string;
  liveUrl?: string;
  imageSrc?: string;
}

export interface SkillCategory {
  id:       string;
  title:    string;
  subtitle: string;
  variant:  "gold" | "arcane" | "crimson" | "stone";
  icon:     string;
  skills:   string[];
}

export interface Experience {
  id:           string;
  role:         string;
  company:      string;
  date:         string;
  type:         "fulltime" | "freelance" | "parttime" | "internship";
  description:  string;
  achievements: string[];
  tags:         string[];
  current?:     boolean;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface FactItem {
  label: string;
  value: string;
  icon:  string;
}

export interface NavItem {
  label: string;
  id: SectionId;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}