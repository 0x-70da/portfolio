import { SectionTitle } from "../wow-components/SectionTitle";
import { ContactForm } from "../feature-components/ContactForm";
import ContactBadges from "../motion-components/ContactBadges";

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
          <ContactBadges slideDirection="left" />

          {/* right — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
