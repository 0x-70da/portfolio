import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/lib/data";
import type { Project } from "@/lib/types";

function CornerOrnament() {
  return (
    <svg viewBox="0 0 20 20" className="w-full h-full overflow-visible">
      <path
        d="M2 18 L2 2 L18 2"
        fill="none"
        stroke="rgba(180,140,40,0.7)"
        strokeWidth="1"
      />
      <rect
        x="0" y="0" width="6" height="6" rx="1"
        fill="rgba(120,90,20,0.6)"
        stroke="rgba(180,140,40,0.7)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className={status === "live" ? "pc-status pc-status-live" : "pc-status pc-status-wip"}>
      {status === "live" ? "Live" : "In Progress"}
    </span>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const roman = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];

  return (
    <div className="pc-card">
      {/* frames */}
      <div className="pc-frame-outer" />
      <div className="pc-frame-inner" />

      {/* corners */}
      <div className="pc-corner pc-corner-tl"><CornerOrnament /></div>
      <div className="pc-corner pc-corner-tr"><CornerOrnament /></div>
      <div className="pc-corner pc-corner-bl"><CornerOrnament /></div>
      <div className="pc-corner pc-corner-br"><CornerOrnament /></div>

      {/* image */}
      <div className="pc-image">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover pc-image-img"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        ) : (
          <div className="pc-image-placeholder">
            <div className="pc-image-placeholder-icon" />
          </div>
        )}
        <div className="pc-image-overlay" />
        <StatusBadge status={project.status} />
      </div>

      {/* content */}
      <div className="pc-content">
        <div className="pc-header">
          <span className="pc-number">
            Project {roman[index]} of {roman[total - 1]}
          </span>
          <h3 className="pc-title">{project.title}</h3>
        </div>

        <p className="pc-desc">{project.description}</p>

        <div className="pc-divider" />

        <div className="pc-badges">
          {project.badges.map((badge) => (
            <span key={badge} className="pc-badge">{badge}</span>
          ))}
        </div>

        <div className="pc-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-link"
            >
              <Github className="w-[11px] h-[11px]" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-link"
            >
              <ExternalLink className="w-[11px] h-[11px]" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}