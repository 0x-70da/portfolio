import { SectionTitle } from "../wow-components/SectionTitle";
import type { SkillCategory } from "@/lib/types";
import { GlowBadge } from "../wow-components/GlowBadge";
import { getIcon } from "@/lib/getIcon";
import { skills } from "@/lib/data.json";

function CornerOrnament() {
  return (
    <svg viewBox="0 0 18 18" className="w-full h-full overflow-visible">
      <path
        d="M2 16 L2 2 L16 2"
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
        fill="var(--alpha-ornament-a60)"
        stroke="var(--alpha-a70)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

// ── Category card ─────────────────────────────────────────────────────────────

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="w-full h-full rounded-md relative border border-ink-dark overflow-hidden bg-surface-card shadow-card">
      <div className="absolute inset-0 rounded-md pointer-events-none z-0 bg-texture-stone-strong" />
      <div className="absolute pointer-events-none rounded-sm z-10 border border-alpha-a45 inset-1.25" />
      <div className="absolute pointer-events-none rounded-md z-10 border border-alpha-a15 inset-2" />

      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none top-1 left-1">
        <CornerOrnament />
      </div>
      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none top-1 right-1 scale-x-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none bottom-1 left-1 scale-y-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none bottom-1 right-1 scale-[-1]">
        <CornerOrnament />
      </div>

      <div className="relative w-full h-full z-20 p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-[3px] border border-alpha-a20 bg-black-a40 flex items-center justify-center shrink-0 text-primary">
            {getIcon(category.icon, { className: "w-6 h-6 shrink-0" })}
          </div>
          <div>
            <div className="font-heading text-wow-md font-bold tracking-widest uppercase text-primary">
              {category.title}
            </div>
            <div className="font-heading text-wow-xs tracking-[0.22em] uppercase text-ink-dark">
              {category.subtitle}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <GlowBadge key={skill} label={skill} variant={category.variant} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none bg-hero" />

      <div className="relative z-10 w-full max-w-275 mx-auto">
        <SectionTitle title="Skills" />

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {skills.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
