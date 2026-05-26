"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const prev = () => {
    if (current > 0) goTo(current - 1);
  };
  const next = () => {
    if (current < projects.length - 1) goTo(current + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* main row */}
      <div className="flex items-center gap-4 w-full max-w-2xl">
        {/* prev arrow */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xs border border-alpha-a30 bg-surface-button text-ink-light transition-[color,border-color,box-shadow] duration-200 hover:border-alpha-a40 hover:text-primary hover:shadow-[0_0_12px_var(--alpha-bright-a15)] disabled:pointer-events-none disabled:opacity-30 max-md:h-9 max-md:w-9"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* animated card */}
        <div className="flex-1 relative min-h-115 md:min-h-100">
          <div className="absolute inset-0">
            <ProjectCard
              project={projects[current]}
              index={current}
              total={projects.length}
            />
          </div>
        </div>

        {/* next arrow */}
        <button
          onClick={next}
          disabled={current === projects.length - 1}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xs border border-alpha-a30 bg-surface-button text-ink-light transition-[color,border-color,box-shadow] duration-200 hover:border-alpha-a40 hover:text-primary hover:shadow-[0_0_12px_var(--alpha-bright-a15)] disabled:pointer-events-none disabled:opacity-30 max-md:h-9 max-md:w-9"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* indicators */}
      <div className="flex items-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={
              i === current
                ? "h-2 w-2 rotate-45 border-0 bg-primary shadow-glow transition-[background-color,box-shadow,width,height] duration-300"
                : "h-1.5 w-1.5 rotate-45 border-0 bg-alpha-a20 transition-[background-color,box-shadow,width,height] duration-300"
            }
          />
        ))}
      </div>
    </div>
  );
}
