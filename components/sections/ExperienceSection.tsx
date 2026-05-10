import { SectionTitle } from "../wow-components/SectionTitle";
import { experiences } from "@/lib/data.json";
import type { Experience } from "@/lib/types";

// ── Corner ornament ───────────────────────────────────────────────────────────

function CornerOrnament() {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full overflow-visible">
      <path
        d="M2 14 L2 2 L14 2"
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

// ── Type badge ────────────────────────────────────────────────────────────────

const TYPE_STYLES: Record<Experience["type"], string> = {
  fulltime:   "exp-type-badge exp-type-full",
  freelance:  "exp-type-badge exp-type-free",
  parttime:   "exp-type-badge exp-type-part",
  internship: "exp-type-badge exp-type-intern",
};

const TYPE_LABELS: Record<Experience["type"], string> = {
  fulltime:   "Full-time",
  freelance:  "Freelance",
  parttime:   "Part-time",
  internship: "Internship",
};

// ── Experience card ───────────────────────────────────────────────────────────

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="exp-card">
      {/* frame */}
      <div className="exp-card-frame" />

      {/* corners */}
      <div className="exp-card-corner exp-card-corner-tl"><CornerOrnament /></div>
      <div className="exp-card-corner exp-card-corner-tr"><CornerOrnament /></div>
      <div className="exp-card-corner exp-card-corner-bl"><CornerOrnament /></div>
      <div className="exp-card-corner exp-card-corner-br"><CornerOrnament /></div>

      <div className="exp-card-content">
        {/* top row */}
        <div className="exp-card-top">
          <div className="exp-card-left">
            <h3 className="exp-role">{item.role}</h3>
            <div className="exp-company">
              <span className="exp-company-gem" />
              {item.company}
            </div>
          </div>
          <div className="exp-card-right">
            <span className="exp-date">{item.date}</span>
            <span className={TYPE_STYLES[item.type]}>
              {TYPE_LABELS[item.type]}
            </span>
          </div>
        </div>

        <div className="exp-divider" />

        {/* description */}
        <p className="exp-desc">{item.description}</p>

        {/* achievements */}
        <div className="exp-achievements">
          {item.achievements.map((ach, i) => (
            <div key={i} className="exp-ach-row">
              <span className="exp-ach-gem" />
              <span className="exp-ach-text">{ach}</span>
            </div>
          ))}
        </div>

        {/* tags */}
        <div className="exp-tags">
          {item.tags.map((tag) => (
            <span key={tag} className="exp-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Timeline item ─────────────────────────────────────────────────────────────

function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="exp-timeline-item">
      {/* node */}
      <div className="exp-node">
        <div className={item.current ? "exp-node-gem" : "exp-node-gem exp-node-gem-dim"} />
      </div>

      {/* card */}
      <ExperienceCard item={item} />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function ExperienceSection() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-bg" />

      <div className="exp-inner">
        <SectionTitle title="Experience" />

        <div className="exp-timeline">
          {experiences.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}