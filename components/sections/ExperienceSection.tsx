import { SectionTitle } from "../wow-components/SectionTitle";
import { experiences } from "@/lib/data.json";
import type { Experience } from "@/lib/types";
import CardShell from "../wow-components/CardShell";
import { GlowBadge } from "../wow-components/GlowBadge";

const TYPE_LABELS: Record<Experience["type"], string> = {
  fulltime: "Full-time",
  freelance: "Freelance",
  parttime: "Part-time",
  internship: "Internship",
};

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <CardShell>
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
            <GlowBadge variant={item.type === "fulltime" ? "success" : "primary"} corners={false} label={TYPE_LABELS[item.type]} className="px-0 py-0.75 text-2xs tracking-[0.16em]" />
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
    </CardShell>
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
