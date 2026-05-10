import { BookText, Briefcase, Code2, Database, Eye, GraduationCap, Mail, MapPin, Server, Wrench } from "lucide-react";
import { Github, Twitter, Linkedin } from "./data";

export function getIcon(name: string, props?: React.SVGProps<SVGSVGElement>) {
  const icons: Record<string, React.ReactNode> = {
    Github: <Github key={name} {...props} />,
    Twitter: <Twitter key={name} {...props} />,
    Linkedin: <Linkedin key={name} {...props} />,
    Code2: <Code2 key={name} {...props} />,
    Server: <Server key={name} {...props} />,
    Database: <Database key={name} {...props} />,
    Wrench: <Wrench key={name} {...props} />,
    Mail: <Mail key={name} {...props} />,
    MapPin: <MapPin key={name} {...props} />,
    GraduationCap: <GraduationCap key={name} {...props} />,
    Briefcase: <Briefcase key={name} {...props} />,
    Eye: <Eye key={name} {...props} />,
    BookText: <BookText key={name} {...props} />,
  };

  return icons[name] || null;
}