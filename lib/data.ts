import { createLucideIcon } from "lucide-react";
import type { ContactItem, Experience, FactItem, NavItem, Project, SkillCategory, SocialLink } from "./types";

const Github = createLucideIcon("Github", [
  ['path', { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}],
]);

const Twitter = createLucideIcon("Twitter", [
  ['path', { d: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"}],
]);

const Linkedin = createLucideIcon("Linkedin", [
  ['path', { d: "M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zM5.379 4.768h1.74c.147 0 .288.004.424.01a.376.376 0 01.303.152.684.684 0 01.11.364c.007.149.01.31.01.484v12.093c0 .176.004.37.01.587.006.216-.024.377-.091.485-.054.094-.174.17-.363.222a.754.754 0 01-.304.02 2.533 2.533 0 00-.323-.02H5.702c-.149 0-.286-.006-.415-.02a.572.572 0 01-.314-.12.48.48 0 01-.12-.304 4.164 4.164 0 01-.02-.424V6.203c0-.188-.004-.41-.01-.667-.007-.255.024-.437.09-.545a.595.595 0 01.264-.202c.04 0 .078-.004.11-.01a.536.536 0 01.092-.011zm10.527 3.687c.201-.008.386-.001.548.019.565.032 1.053.144 1.464.338.539.257.963.634 1.273 1.133.095.148.168.307.222.475.055.169.11.34.164.515.026.108.042.21.05.304.005.094.023.19.05.284 0 .08.007.134.02.16.027.19.04.385.04.587v5.661c0 .257-.004.503-.01.738-.008.237-.105.39-.294.456a.91.91 0 01-.283.04h-1.415c-.163 0-.307-.01-.435-.03a.418.418 0 01-.293-.173.613.613 0 01-.09-.313 8.825 8.825 0 01-.01-.416v-4.426c0-.5-.02-.961-.06-1.386-.042-.424-.163-.785-.365-1.082a1.427 1.427 0 00-.668-.51c-.186-.095-.488-.156-.827-.156-.397 0-.74.083-.912.207-.139.057-.26.124-.362.197-.433.31-.688.762-.77 1.354-.08.594-.123 1.261-.123 2.002v4.125c0 .121-.02.223-.06.304a.42.42 0 01-.323.262c-.149.027-.33.04-.545.04H10.88c-.15 0-.297-.006-.446-.02-.148-.013-.256-.06-.323-.142-.095-.12-.139-.294-.131-.525.006-.23.009-.446.009-.647V9.6c0-.147.004-.282.01-.403a.507.507 0 01.112-.305.24.24 0 01.132-.09c.06-.02.124-.037.191-.05h.102c.068-.014.138-.022.212-.022h1.06c.109 0 .214.005.316.012.1.006.19.023.271.05.095.04.16.1.193.181.03.072.03.147.054.24.056.23.118.486.291.508.08.01.159-.025.224-.09.031-.022.114-.11.14-.144.095-.114.28-.278.388-.346.078-.058.142-.1.202-.136.192-.134.483-.261.832-.36.014-.006.028-.012.042-.016.112-.036.225-.062.342-.077l.159-.029c.224-.038.442-.06.643-.068Z"}],
]);

export { Github, Twitter, Linkedin };

export const PROJECTS: Project[] = [
  {
    id: "horus-shop",
    title: "Horus Shop",
    description:
      "A full-stack e-commerce platform forged with React and Node, featuring JWT auth, product filtering, and a Supabase-powered dungeon of data.",
    badges: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind"],
    status: "wip",
    githubUrl: "https://github.com/",
    liveUrl: "",
    imageSrc: "",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "A World of Warcraft-themed portfolio forged with Next.js and Framer Motion. Every pixel enchanted, every component a legendary drop.",
    badges: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    status: "live",
    githubUrl: "https://github.com/",
    liveUrl: "https://yoursite.com",
    imageSrc: "",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    id:       "frontend",
    title:    "Frontend",
    subtitle: "The Art of the Interface",
    variant:  "gold",
    icon:     "Code2",
    skills:   ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "HTML5", "CSS3"],
  },
  {
    id:       "backend",
    title:    "Backend",
    subtitle: "The Forge of Logic",
    variant:  "crimson",
    icon:     "Server",
    skills:   ["Node.js", "Express.js", "Supabase", "PostgreSQL", "REST APIs", "JWT Auth", "Zod"],
  },
  {
    id:       "state",
    title:    "State & Data",
    subtitle: "The Flow of Power",
    variant:  "arcane",
    icon:     "Database",
    skills:   ["TanStack Query", "Zustand", "React Hook Form", "Context API"],
  },
  {
    id:       "tools",
    title:    "Tools & DevOps",
    subtitle: "The Arsenal",
    variant:  "stone",
    icon:     "Wrench",
    skills:   ["Git", "GitHub", "pnpm", "Vite", "ESLint", "Prettier", "Vercel"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id:          "freelance",
    role:        "Full-Stack Developer",
    company:     "Freelance",
    date:        "2022 — Present",
    type:        "freelance",
    current:     true,
    description: "Crafting bespoke web solutions for clients across multiple domains, delivering full-stack applications from concept to deployment.",
    achievements: [
      "Built and deployed 10+ client projects using React, Node.js, and various databases",
      "Implemented secure authentication systems and RESTful APIs for multiple clients",
      "Maintained long-term relationships with 5+ recurring clients",
    ],
    tags: ["React", "Node.js", "TypeScript", "Supabase"],
  },
  {
    id:          "startup",
    role:        "Frontend Developer",
    company:     "Tech Startup — Remote",
    date:        "2023 — 2024",
    type:        "parttime",
    current:     false,
    description: "Contributed to building a SaaS dashboard product, focusing on component architecture and performance optimization.",
    achievements: [
      "Rebuilt the core UI component library using React and TypeScript",
      "Reduced bundle size by 40% through code splitting and lazy loading",
    ],
    tags: ["React", "TypeScript", "Tailwind"],
  },
];

// ── Data ──────────────────────────────────────────────────────────────────────

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: "mahmoud@email.com",
    href:  "mailto:mahmoud@email.com",
    icon:  "Mail",
  },
  {
    label: "GitHub",
    value: "github.com/mahmoud",
    href:  "https://github.com/",
    icon:  "Github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahmoud",
    href:  "https://linkedin.com/",
    icon:  "Linkedin",
  },
  {
    label: "X (Twitter)",
    value: "@mahmoud_dev",
    href:  "https://x.com/",
    icon:  "Twitter",
  },
];

export const FACT_ITEMS: FactItem[] = [
  {
    label: "Location",
    value: "Luxor, Egypt · Open to Remote",
    icon:  "MapPin",
  },
  {
    label: "Education",
    value: "BSc Computer Science — Luxor University",
    icon:  "GraduationCap",
  },
  {
    label: "Experience",
    value: "3+ Years · Freelance & Personal Projects",
    icon:  "Briefcase",
  },
  {
    label: "Focus",
    value: "React · TypeScript · Node.js · Supabase",
    icon:  "Code2",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home",       id: "home"       },
  { label: "About",      id: "about"      },
  { label: "Skills",     id: "skills"     },
  { label: "Projects",   id: "projects"   },
  { label: "Experience", id: "experience" },
  { label: "Contact",    id: "contact"    },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub",    href: "https://github.com/",    icon: "Github" },
  { label: "LinkedIn",  href: "https://linkedin.com/",  icon: "Linkedin" },
  { label: "Email",     href: "mailto:you@email.com",   icon: "Mail" },
  { label: "Twitter",   href: "https://x.com/",        icon: "Twitter" },
];