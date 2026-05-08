// import { CONTACT_ITEMS, FACT_ITEMS } from "@/lib/data";
import { SectionTitle } from "../wow-components/SectionTitle";
import { WowDivider } from "../wow-components/wow-divider/WowDivider";
import { ContactItem, FactItem } from "@/lib/types";
import { getIcon } from "@/lib/getIcon";

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: "mahmoud@email.com",
    href:  "mailto:mahmoud@email.com",
    icon:  "Mail",
  },
  {
    label: "GitHub",
    value: "github.com/mahmoud",
    href:  "https://github.com/",
    icon:  "Github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahmoud",
    href:  "https://linkedin.com/",
    icon:  "Linkedin",
  },
  {
    label: "X (Twitter)",
    value: "@mahmoud_dev",
    href:  "https://x.com/",
    icon:  "Twitter",
  },
];

export const FACT_ITEMS: FactItem[] = [
  {
    label: "Location",
    value: "Luxor, Egypt · Open to Remote",
    icon:  "MapPin",
  },
  {
    label: "Education",
    value: "BSc Computer Science — Luxor University",
    icon:  "GraduationCap",
  },
  {
    label: "Experience",
    value: "3+ Years · Freelance & Personal Projects",
    icon:  "Briefcase",
  },
  {
    label: "Focus",
    value: "React · TypeScript · Node.js · Supabase",
    icon:  "Code2",
  },
];


function AboutCard() {
  return (
    <div className="about-bio-card">
      <div className="about-card-frame-o" />
      <div className="about-card-frame-i" />
      <AboutCorner /><AboutCorner tr /><AboutCorner bl /><AboutCorner br />

      <div className="about-card-content">
        {/* header */}
        <div className="about-card-header">
          <div className="about-card-label">
            <span className="about-label-gem" />
            The Chronicle
          </div>
          <h3 className="about-card-title">A Full-Stack Mage of the Web</h3>
        </div>

        {/* bio paragraphs */}
        <p className="about-bio-text">
          I am a passionate full-stack engineer with 3+ years of experience
          crafting powerful digital experiences. I specialize in building
          scalable web applications using modern technologies, with a deep
          focus on clean architecture, type safety, and user experience.
        </p>
        <p className="about-bio-text">
          Currently pursuing my Computer Science degree at Luxor University
          while actively working on real-world projects — balancing the ancient
          scrolls of academia with the forge of practical engineering.
        </p>

        <WowDivider />

        {/* facts */}
        <div className="about-facts">
          {FACT_ITEMS.map((fact) => (
            <div key={fact.label} className="about-fact-row">
              <div className="about-fact-icon">{getIcon(fact.icon)}</div>
              <span className="about-fact-label">{fact.label}</span>
              <span className="about-fact-value">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactBadge({ item }: { item: ContactItem }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="about-contact-badge"
    >
      <div className="about-contact-badge-icon">{getIcon(item.icon)}</div>
      <div className="about-contact-badge-text">
        <span className="about-contact-badge-label">{item.label}</span>
        <span className="about-contact-badge-value">{item.value}</span>
      </div>
    </a>
  );
}

function AvailabilityBadge() {
  return (
    <div className="about-avail">
      <div className="about-avail-dot" />
      <span className="about-avail-text">Available for new opportunities</span>
    </div>
  );
}

function AboutCorner({ tr, bl, br }: { tr?: boolean; bl?: boolean; br?: boolean }) {
  return (
    <div
      className={[
        "about-corner",
        tr ? "about-corner-tr" : bl ? "about-corner-bl" : br ? "about-corner-br" : "about-corner-tl",
      ].join(" ")}
    >
      <svg viewBox="0 0 20 20" className="w-full h-full overflow-visible">
        <path d="M2 18 L2 2 L18 2" fill="none" stroke="rgba(180,140,40,0.7)" strokeWidth="1" />
        <rect x="0" y="0" width="6" height="6" rx="1" fill="rgba(120,90,20,0.6)" stroke="rgba(180,140,40,0.7)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-bg" />

      <div className="about-inner">
        <SectionTitle title="About Me" />

        <div className="about-grid">
          {/* left — bio */}
          <AboutCard />

          {/* right — contact badges + availability */}
          <div className="about-right">
            <div className="about-contact-label">
              <span className="about-label-gem" />
              Contact Information
            </div>

            <div className="about-contact-list">
              {CONTACT_ITEMS.map((item) => (
                <ContactBadge key={item.label} item={item} />
              ))}
            </div>

            <AvailabilityBadge />
          </div>
        </div>
      </div>
    </section>
  );
}