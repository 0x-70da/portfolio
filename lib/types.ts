export interface Project {
  id: string;
  title: string;
  description: string;
  badges: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  imageSrc?: string;
}

export interface SkillCategory {
  id:       string;
  title:    string;
  subtitle: string;
  variant:  string;
  icon:     string;
  skills:   string[];
}

export interface Experience {
  id:           string;
  role:         string;
  company:      string;
  date:         string;
  type:         string;
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
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}