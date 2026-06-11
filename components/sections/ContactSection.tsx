import { contactItems } from "@/lib/data.json";
import { SectionTitle } from "../wow-components/SectionTitle";
import { ContactForm } from "../feature-components/ContactForm";
import { infoPanel } from "@/lib/translation.json";
import { GlowBadge } from "../wow-components/GlowBadge";
import Gem from "../wow-components/Gem";

function InfoPanel() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-1.5 font-heading text-2xs tracking-[0.22em] uppercase text-ink-dark mb-1.5">
          <Gem size="xs" backgroundColor="muted"/>
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
        {contactItems.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
            <GlowBadge
              icon={item.icon}
              iconsSize="lg"
              variant="none"
              className="w-full px-4 py-3"
              corners={false}
            >
              {item.value}
            </GlowBadge>
          </a>
        ))}
      </div>

      <GlowBadge
        variant="success"
        corners={false}
        className="tracking-widest px-4 py-2.5"
      >
        <span className="w-2 h-2 rounded-full bg-success shadow-glow-success-8-a60 animate-pulse" />
        Available for new opportunities
      </GlowBadge>
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
