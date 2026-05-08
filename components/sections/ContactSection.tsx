import { Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/lib/data";
import { SectionTitle } from "../wow-components/SectionTitle"; 
import { ContactForm } from "../feature-components/ContactForm"; 

// ── Data ──────────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "mahmoud@email.com",
    href:  "mailto:mahmoud@email.com",
    icon:  <Mail className="w-[14px] h-[14px]" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahmoud",
    href:  "https://linkedin.com/",
    icon:  <Linkedin className="w-[14px] h-[14px]" />,
  },
  {
    label: "GitHub",
    value: "github.com/mahmoud",
    href:  "https://github.com/",
    icon:  <Github className="w-[14px] h-[14px]" />,
  },
  {
    label: "X (Twitter)",
    value: "@mahmoud_dev",
    href:  "https://x.com/",
    icon:  (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ContactLink({ label, value, href, icon }: typeof CONTACT_LINKS[0]) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="cs-contact-badge"
    >
      <div className="cs-badge-icon">{icon}</div>
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
          Send a Scroll
        </div>
        <h3 className="cs-info-title">
          Let's Forge Something Together
        </h3>
        <p className="cs-info-desc">
          Whether you have a quest in mind, a project to discuss,
          or simply wish to forge an alliance — my inbox is always open.
        </p>
      </div>

      {/* divider */}
      <div className="cs-info-divider" />

      {/* contact links */}
      <div className="cs-links-list">
        {CONTACT_LINKS.map((link) => (
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