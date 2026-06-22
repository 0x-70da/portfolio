import { SectionTitle } from "../wow-components/SectionTitle";
import type { SkillCategory } from "@/lib/types";
import { skills } from "@/lib/data.json";
import SkillCategoryCard from "../motion-components/SkillCategoryCard";

const skillCategories = skills as SkillCategory[];

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
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
