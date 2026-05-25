import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/lib/data";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

function CornerOrnament() {
  return (
    <svg viewBox="0 0 20 20" className="h-full w-full overflow-visible">
      <path
        d="M2 18 L2 2 L18 2"
        fill="none"
        className="stroke-(--alpha-a70)"
        strokeWidth="1"
      />
      <rect
        x="0"
        y="0"
        width="6"
        height="6"
        rx="1"
        className="fill-(--alpha-ornament-a60) stroke-(--alpha-a70)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const isLive = status === "live";

  return (
    <span
      className={cn(
        "absolute right-3 top-3 z-20 rounded-xs border px-2 py-0.75 font-heading text-2xs tracking-[0.16em] uppercase",
        isLive
          ? "border-success-border-a30 bg-success-surface-a80 text-success-text-muted"
          : "border-alpha-a40 bg-surface-badge text-primary",
      )}
    >
      {isLive ? "Live" : "In Progress"}
    </span>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

const badgeClassName =
  "relative rounded-[2px] border border-alpha-a30 bg-surface-badge px-2 py-[3px] font-heading text-[9px] tracking-[0.1em] uppercase text-primary before:content-[''] before:absolute before:left-[-1.5px] before:top-[-1.5px] before:h-[3px] before:w-[3px] before:rotate-45 before:bg-alpha-a25 after:content-[''] after:absolute after:right-[-1.5px] after:bottom-[-1.5px] after:h-[3px] after:w-[3px] after:rotate-45 after:bg-alpha-a25";

const linkClassName =
  "inline-flex items-center gap-1.25 rounded-[2px] border border-alpha-a20 px-[10px] py-[5px] font-heading text-[9px] tracking-[0.14em] uppercase text-ink-light transition-[color,border-color,box-shadow] duration-200 hover:border-alpha-a40 hover:text-primary hover:shadow-[0_0_8px_var(--alpha-bright-a15)]";

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-md border border-ink-dark bg-surface-card shadow-card before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:z-10 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,var(--alpha-white-a012)_3px,var(--alpha-white-a012)_4px),repeating-linear-gradient(90deg,transparent,transparent_3px,var(--alpha-white-a008)_3px,var(--alpha-white-a008)_4px)]">
      <div className="absolute inset-1.25 z-20 pointer-events-none rounded-sm border border-alpha-a40" />
      <div className="absolute inset-2 z-20 pointer-events-none rounded-[3px] border border-alpha-a10" />

      <div className="absolute left-1 top-1 z-30 h-5 w-5 pointer-events-none">
        <CornerOrnament />
      </div>
      <div className="absolute right-1 top-1 z-30 h-5 w-5 pointer-events-none scale-x-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute bottom-1 left-1 z-30 h-5 w-5 pointer-events-none scale-y-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute bottom-1 right-1 z-30 h-5 w-5 pointer-events-none scale-[-1]">
        <CornerOrnament />
      </div>

      <div className="relative z-10 h-50 w-full overflow-hidden border-b border-alpha-a20">
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

        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_40%,var(--black-a60)_100%)]" />
        <StatusBadge status={project.status} />
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
            <span key={badge} className={badgeClassName}>
              {badge}
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
    </div>
  );
}
