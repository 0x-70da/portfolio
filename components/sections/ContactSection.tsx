import { contactItems } from "@/lib/data.json";
import { getIcon } from "../../lib/getIcon";
import { SectionTitle } from "../wow-components/SectionTitle"; 
import { ContactForm } from "../feature-components/ContactForm"; 
import { infoPanel } from "@/lib/translation.json";


function ContactLink({ label, value, href, icon }: typeof contactItems[0]) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="cs-contact-badge"
    >
      <div className="cs-badge-icon">{getIcon(icon)}</div>
      <div className="cs-badge-text">
        <span className="cs-badge-label">{label}</span>
        <span className="cs-badge-value">{value}</span>
      </div>
    </a>
  );
}

function AvailabilityBadge() {
  return (
    <div className="cs-avail">
      <div className="cs-avail-dot" />
      <span className="cs-avail-text">Available for new opportunities</span>
    </div>
  );
}

function InfoPanel() {
  return (
    <div className="cs-info-panel">
      {/* header */}
      <div className="cs-info-header">
        <div className="cs-info-label">
          <span className="cs-info-gem" />
          {infoPanel.header}
        </div>
        <h3 className="cs-info-title">
          {infoPanel.title}
        </h3>
        <p className="cs-info-desc">
          {infoPanel.description}
        </p>
      </div>

      {/* divider */}
      <div className="cs-info-divider" />

      {/* contact links */}
      <div className="cs-links-list">
        {contactItems.map((link) => (
          <ContactLink key={link.label} {...link} />
        ))}
      </div>

      {/* availability */}
      <AvailabilityBadge />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function ContactSection() {
  return (
    <section id="contact" className="cs-section">
      <div className="cs-bg" />

      <div className="cs-inner">
        <SectionTitle title="Contact" />

        <div className="cs-grid">
          {/* left — info */}
          <InfoPanel />

          {/* right — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}