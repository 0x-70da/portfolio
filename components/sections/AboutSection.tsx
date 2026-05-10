import { SectionTitle } from "../wow-components/SectionTitle";
import { WowDivider } from "../wow-components/wow-divider/WowDivider";
import { ContactItem } from "@/lib/types";
import { getIcon } from "@/lib/getIcon";
import { about } from "@/lib/translation.json";
import { factItems, contactItems } from "@/lib/data.json"

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
            {about.header}
          </div>
          <h3 className="about-card-title">{about.title}</h3>
        </div>

        {/* bio paragraphs */}
        {about.bio.map((paragraph, idx) => (
          <p key={idx} className="about-bio-text">
            {paragraph}
          </p>
        ))}

        <WowDivider />

        {/* facts */}
        <div className="about-facts">
          {factItems.map((fact) => (
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
              {contactItems.map((item) => (
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