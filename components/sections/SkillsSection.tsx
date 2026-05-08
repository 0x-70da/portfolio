import { SectionTitle } from "../wow-components/SectionTitle"; 
import { SKILLS }        from "@/lib/data";
import type { SkillCategory } from "@/lib/types";
import { GlowBadge } from "../wow-components/GlowBadge";
import { getIcon } from "@/lib/getIcon";

// ── Corner ornament ───────────────────────────────────────────────────────────

function CornerOrnament() {
  return (
    <svg viewBox="0 0 18 18" className="w-full h-full overflow-visible">
      <path
        d="M2 16 L2 2 L16 2"
        fill="none"
        stroke="rgba(180,140,40,0.7)"
        strokeWidth="1"
      />
      <rect
        x="0" y="0" width="5" height="5" rx="1"
        fill="rgba(120,90,20,0.6)"
        stroke="rgba(180,140,40,0.7)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

// ── Category card ─────────────────────────────────────────────────────────────

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="skill-cat-card">
      {/* frame */}
      <div className="skill-cat-frame" />

      {/* corners */}
      <div className="skill-cat-corner skill-cat-corner-tl"><CornerOrnament /></div>
      <div className="skill-cat-corner skill-cat-corner-tr"><CornerOrnament /></div>
      <div className="skill-cat-corner skill-cat-corner-bl"><CornerOrnament /></div>
      <div className="skill-cat-corner skill-cat-corner-br"><CornerOrnament /></div>

      <div className="skill-cat-content">
        {/* header */}
        <div className="skill-cat-header">
          <div className="skill-cat-icon">{getIcon(category.icon)}</div>
          <div>
            <div className="skill-cat-title">{category.title}</div>
            <div className="skill-cat-subtitle">{category.subtitle}</div>
          </div>
        </div>

        {/* badges */}
        <div className="skill-cat-badges">
          {category.skills.map((skill) => (
            <GlowBadge
              key={skill}
              label={skill}
              variant={category.variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg" />

      <div className="skills-inner">
        <SectionTitle title="Skills" />

        <div className="skills-grid">
          {SKILLS.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}