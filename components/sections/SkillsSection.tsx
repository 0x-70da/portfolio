import { SectionTitle } from "../wow-components/SectionTitle";
import type { SkillCategory } from "@/lib/types";
import { GlowBadge } from "../wow-components/GlowBadge";
import { getIcon } from "@/lib/getIcon";
import { skills } from "@/lib/data.json";
import CardShell from "../wow-components/CardShell";

// ── Category card ─────────────────────────────────────────────────────────────

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <CardShell>
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
            <GlowBadge
              key={skill.label}
              label={skill.label}
              icon={skill.icon}
              variant={category.variant}
            />
          ))}
        </div>
      </div>
    </CardShell>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
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
