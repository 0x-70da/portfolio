"use client";

import { useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [current, setCurrentRaw] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragStartX = useRef<number | null>(null);
  const dragEndX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrentRaw(index);
  };

  const prev = () => {
    if (current > 0) goTo(current - 1);
  };
  const next = () => {
    if (current < projects.length - 1) goTo(current + 1);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragEndX.current = e.clientX;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current !== null) dragEndX.current = e.clientX;
  };
  const handlePointerUp = () => {
    if (dragStartX.current === null || dragEndX.current === null) return;
    const delta = dragEndX.current - dragStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0 && current < projects.length - 1) goTo(current + 1);
      if (delta > 0 && current > 0) goTo(current - 1);
    }
    dragStartX.current = null;
    dragEndX.current = null;
  };
  const handlePointerCancel = () => {
    dragStartX.current = null;
    dragEndX.current = null;
  };

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-6 w-full"
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={0}
    >
      <div className="flex items-center gap-4 w-full max-w-2xl">
        <button
          onClick={prev}
          disabled={current === 0}
          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xs border border-alpha-a30 bg-surface-button text-ink-light transition-[color,border-color,box-shadow] duration-200 hover:border-alpha-a40 hover:text-primary hover:shadow-[0_0_12px_var(--alpha-bright-a15)] disabled:pointer-events-none disabled:opacity-30 md:inline-flex"
          aria-label="Previous project"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>

        {/* animated card */}
        <div
          className="flex-1 relative min-h-115 touch-pan-y cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onPointerLeave={handlePointerCancel}
          style={{ touchAction: "pan-y" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <ProjectCard
                project={projects[current]}
                index={current}
                total={projects.length}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          disabled={current === projects.length - 1}
          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xs border border-alpha-a30 bg-surface-button text-ink-light transition-[color,border-color,box-shadow] duration-200 hover:border-alpha-a40 hover:text-primary hover:shadow-[0_0_12px_var(--alpha-bright-a15)] disabled:pointer-events-none disabled:opacity-30 md:inline-flex"
          aria-label="Next project"
        >
          <FaChevronRight className="h-5 w-5" />
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
                ? "h-2 w-2 rotate-45 border-0 bg-primary shadow-glow transition-all duration-300 cursor-pointer"
                : "h-1.5 w-1.5 rotate-45 border-0 bg-alpha-a20 transition-all duration-300 cursor-pointer"
            }
          />
        ))}
      </div>
    </motion.div>
  );
}
