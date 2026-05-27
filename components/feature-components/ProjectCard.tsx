import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/lib/data";
import { getIcon } from "@/lib/getIcon";
import type { Project } from "@/lib/types";
import CardShell from "../wow-components/CardShell";
import { GlowBadge } from "../wow-components/GlowBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

const badgeClassName =
  "relative inline-flex items-center gap-1 rounded-[2px] border border-alpha-a30 bg-surface-badge px-2 py-[3px] font-heading text-[9px] tracking-[0.1em] uppercase text-primary before:content-[''] before:absolute before:left-[-1.5px] before:top-[-1.5px] before:h-[3px] before:w-[3px] before:rotate-45 before:bg-alpha-a25 after:content-[''] after:absolute after:right-[-1.5px] after:bottom-[-1.5px] after:h-[3px] after:w-[3px] after:rotate-45 after:bg-alpha-a25";

const linkClassName =
  "inline-flex items-center gap-1.25 rounded-[2px] border border-alpha-a20 px-[10px] py-[5px] font-heading text-[9px] tracking-[0.14em] uppercase text-ink-light transition-[color,border-color,box-shadow] duration-200 hover:border-alpha-a40 hover:text-primary hover:shadow-[0_0_8px_var(--alpha-bright-a15)]";

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  return (
    <CardShell>
      <div className="relative z-1 h-50 w-full overflow-hidden border-b border-alpha-a20">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover brightness-[0.85] saturate-[0.8] transition-[filter] duration-300 group-hover:brightness-[0.95] group-hover:saturate-[0.9]"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-ink-dark to-black-a60">
            <div className="h-12 w-12 rounded-full border border-alpha-a20 bg-alpha-a05" />
          </div>
        )}

        <div className="absolute inset-0 z-10 bg-linear-to-br from-alpha-a50 to-transparent" />
        <GlowBadge
          variant={project.status === "live" ? "success" : "primary"}
          corners={false}
          label={project.status === "live" ? "Live" : "In Progress"}
          className="absolute right-3 top-3 z-20 px-3 py-0.75 text-2xs tracking-[0.16em]"
        />
      </div>

      <div className="relative z-20 flex flex-col gap-2.5 px-5 pb-5 pt-4">
        <div className="border-b border-alpha-a25 pb-2.5">
          <span className="block font-heading text-2xs tracking-[0.2em] uppercase text-ink-dark">
            Project {roman[index]} of {roman[total - 1]}
          </span>
          <h3 className="mt-0.5 font-heading text-[18px] font-bold leading-[1.1] tracking-[0.08em] uppercase text-primary text-shadow-primary">
            {project.title}
          </h3>
        </div>

        <p className="font-heading text-wow-sm leading-[1.8] tracking-[0.04em] italic text-muted-soft">
          {project.description}
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-alpha-a30 to-transparent" />

        <div className="flex flex-wrap gap-1.5">
          {project.badges.map((badge) => (
            <span key={badge.label} className={badgeClassName}>
              {getIcon(badge.icon, { className: "h-2.75 w-2.75 shrink-0" })}
              {badge.label}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              <Github className="h-2.75 w-2.75" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              <ExternalLink className="h-2.75 w-2.75" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </CardShell>
  );
}
