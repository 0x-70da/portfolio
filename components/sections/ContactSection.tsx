import { contactItems } from "@/lib/data.json";
import { getIcon } from "../../lib/getIcon";
import { SectionTitle } from "../wow-components/SectionTitle";
import { ContactForm } from "../feature-components/ContactForm";
import { infoPanel } from "@/lib/translation.json";

function ContactLink({ label, value, href, icon }: (typeof contactItems)[0]) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-4 py-3 rounded-sm border border-alpha-a20 bg-surface-card shadow-badge-contact hover:border-alpha-a50 hover:shadow-badge-contact-hover transition-[border-color,box-shadow] duration-200 no-underline overflow-hidden relative"
    >
      <span className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-line-primary" />
      <div className="w-8 h-8 rounded-xs border border-alpha-a20 bg-black-a40 flex items-center justify-center shrink-0 text-muted group-hover:text-primary transition-colors duration-200">
        {getIcon(icon, { className: "w-5 h-5 shrink-0" })}
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-wow-sm text-muted-soft tracking-[0.06em] group-hover:text-primary transition-colors duration-200">
          {label}
        </span>
        <span className="font-heading text-wow-sm text-primary">{value}</span>
      </div>
    </a>
  );
}

function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-success-border-a30 bg-success-surface-a80">
      <span className="w-2 h-2 rounded-full bg-success shadow-glow-success-8-a60" />
      <span className="font-heading text-wow-xs tracking-wider text-success-text-muted">
        Available for new opportunities
      </span>
    </div>
  );
}

function InfoPanel() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-1.5 font-heading text-2xs tracking-[0.22em] uppercase text-ink-dark mb-1.5">
          <span className="w-0.75 h-0.75 rotate-45 shrink-0 inline-block bg-alpha-bright-a50" />
          {infoPanel.header}
        </div>
        <h3 className="font-heading text-[15px] font-bold leading-[1.3] tracking-widest uppercase text-primary text-shadow-primary-soft mb-2.5">
          {infoPanel.title}
        </h3>
        <p className="font-heading text-2xs leading-[1.9] text-body-muted tracking-wider italic">
          {infoPanel.description}
        </p>
      </div>

      <div className="w-full h-px bg-line-primary" />

      <div className="flex flex-col gap-2.5">
        {contactItems.map((link) => (
          <ContactLink key={link.label} {...link} />
        ))}
      </div>

      <AvailabilityBadge />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >

      <div className="relative z-10 w-full max-w-275 mx-auto">
        <SectionTitle title="Contact" />

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 mt-14 md:mt-14 max-md:gap-8 max-md:mt-10">
          {/* left — info */}
          <InfoPanel />

          {/* right — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
