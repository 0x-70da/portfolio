"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => { if (current > 0) goTo(current - 1); };
  const next = () => { if (current < projects.length - 1) goTo(current + 1); };

  return (
    <div className="flex flex-col items-center gap-6 w-full">

      {/* main row */}
      <div className="flex items-center gap-4 w-full max-w-2xl">

        {/* prev arrow */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="pc-arrow"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* animated card */}
        <div className="flex-1 relative min-h-115 md:min-h-100">
            <div
              className="absolute inset-0"
            >
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
          className="pc-arrow"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* indicators */}
      <div className="flex items-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={i === current ? "pc-indicator pc-indicator-active" : "pc-indicator"}
          />
        ))}
      </div>

    </div>
  );
}