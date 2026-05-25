import { SectionTitle } from "../wow-components/SectionTitle";
import { experiences } from "@/lib/data.json";
import type { Experience } from "@/lib/types";

function CornerOrnament() {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full overflow-visible">
      <path
        d="M2 14 L2 2 L14 2"
        fill="none"
        stroke="var(--alpha-a70)"
        strokeWidth="1"
      />
      <rect
        x="0"
        y="0"
        width="5"
        height="5"
        rx="1"
        className="fill-(--alpha-ornament-a60) stroke-(--alpha-a70)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

// ── Type badge ────────────────────────────────────────────────────────────────

const TYPE_STYLES: Record<Experience["type"], string> = {
  fulltime:
    "bg-success-surface-a80 border-success-border-a30 text-success-text-muted",
  freelance: "bg-alpha-a12 border-alpha-a30 text-muted",
  parttime: "bg-surface-secondary border-secondary-border text-secondary-text",
  internship: "bg-intern-surface-a80 border-intern-border-a30 text-intern-text",
};

const TYPE_LABELS: Record<Experience["type"], string> = {
  fulltime: "Full-time",
  freelance: "Freelance",
  parttime: "Part-time",
  internship: "Internship",
};

const badgeBase = "font-heading text-wow-xs px-2 py-0.5 rounded-sm border";

// ── Experience card ───────────────────────────────────────────────────────────

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="group relative rounded-md overflow-hidden border border-ink-dark bg-surface-card shadow-card transition-[border-color,box-shadow] duration-200 hover:border-alpha-a45 hover:shadow-card-hover">
      <div className="absolute inset-0 rounded-md pointer-events-none z-0 bg-texture-stone-strong" />
      <div className="absolute inset-1 pointer-events-none z-10 rounded-sm border border-alpha-a30" />
      <div className="absolute inset-2 pointer-events-none z-10 rounded-[3px] border border-alpha-a10" />

      <div className="absolute top-0.75 left-0.75 w-4 h-4 z-20 pointer-events-none">
        <CornerOrnament />
      </div>
      <div className="absolute top-0.75 right-0.75 w-4 h-4 z-20 pointer-events-none scale-x-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute bottom-0.75 left-0.75 w-4 h-4 z-20 pointer-events-none scale-y-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute bottom-0.75 right-0.75 w-4 h-4 z-20 pointer-events-none scale-[-1]">
        <CornerOrnament />
      </div>

      <div className="relative z-20 px-6 pt-5 pb-5.5">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-2.5">
          <div>
            <h3 className="font-heading text-wow-xl font-bold leading-[1.1] tracking-widest uppercase text-primary text-shadow-primary">
              {item.role}
            </h3>
            <div className="flex items-center gap-1.5 font-heading text-wow-sm tracking-[0.14em] uppercase text-muted mt-1">
              <span className="w-1 h-1 rotate-45 shrink-0 inline-block bg-accent shadow-glow" />
              <span className="text-body-muted">{item.company}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1.25 shrink-0">
            <span className="font-heading text-2xs tracking-[0.14em] uppercase text-muted whitespace-nowrap">
              {item.date}
            </span>
            <span className={`${badgeBase} ${TYPE_STYLES[item.type]}`}>
              {TYPE_LABELS[item.type]}
            </span>
          </div>
        </div>

        <div className="w-full h-px bg-line-primary" />

        <p className="font-heading text-wow-sm leading-[1.9] text-body-muted tracking-wider italic mt-3 mb-3">
          {item.description}
        </p>

        <div className="flex flex-col gap-1.5">
          {item.achievements.map((ach, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-1 h-1 rotate-45 shrink-0 inline-block bg-accent shadow-glow mt-1" />
              <span className="font-heading text-2xs text-body-muted leading-[1.6] tracking-[0.04em]">
                {ach}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-heading text-2xs tracking-widest uppercase px-2 py-0.75 rounded-xs border border-alpha-a30 bg-surface-badge text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Timeline item ─────────────────────────────────────────────────────────────

function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="flex gap-6 pb-7 last:pb-0 relative">
      <div className="shrink-0 w-12 flex flex-col items-center pt-5.5 relative z-10">
        <div
          className={`w-2.5 h-2.5 rotate-45 shrink-0 ${item.current ? "bg-accent shadow-glow" : "bg-alpha-a30"}`}
        />
      </div>

      <div className="flex-1 min-w-0">
        <ExperienceCard item={item} />
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none bg-hero" />

      <div className="relative z-10 w-full max-w-225 mx-auto">
        <SectionTitle title="Experience" />

        <div className="relative mt-14 flex flex-col gap-0 before:content-[''] before:absolute before:left-6 before:top-0 before:bottom-0 before:w-px before:bg-line-primary before:pointer-events-none before:z-0">
          {experiences.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
