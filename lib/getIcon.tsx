import * as LucideIcons from "lucide-react";
import { Github, Twitter, Linkedin } from "./data";

export function getIcon(name: string, props?: React.SVGProps<SVGSVGElement>) {
  const customIcons: Record<string, React.ReactNode> = {
    Github: <Github {...props} />,
    Twitter: <Twitter {...props} />,
    Linkedin: <Linkedin {...props} />,
  };

  if (customIcons[name]) {
    return customIcons[name];
  }

  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  
  if (LucideIcon) {
    return <LucideIcon {...props} />;
  }

  console.warn(`Icon "${name}" not found`);
  return null;
}