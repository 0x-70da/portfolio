import { SectionTitle } from "../wow-components/SectionTitle";
import { WowDivider } from "../wow-components/WowDivider";
import { ContactItem } from "@/lib/types";
import { getIcon } from "@/lib/getIcon";
import { about } from "@/lib/translation.json";
import { factItems, contactItems } from "@/lib/data.json";
import CardShell from "../wow-components/CardShell";
import { GlowBadge } from "../wow-components/GlowBadge";

function AboutCard() {
  return (
    <CardShell>
      <div className="relative w-full h-full z-20 p-7">
        <div className="mb-4.5 pb-3.5 border-b border-alpha-a20">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-0.75 h-0.75 rotate-45 shrink-0 inline-block bg-alpha-bright-a50" />
            <span className="font-heading text-2xs tracking-[0.22em] uppercase text-ink-dark">
              {about.header}
            </span>
          </div>

          <h3 className="font-heading text-3xl font-bold tracking-widest uppercase text-primary text-shadow-primary-soft">
            {about.title}
          </h3>
        </div>

        <div className="space-y-4">
          {about.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className="font-heading text-xs-plus leading-loose text-body-muted tracking-wider italic"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <WowDivider />

        <div className="flex flex-col gap-2.5 mt-4">
          {factItems.map((fact) => (
            <div key={fact.label} className="flex items-start gap-2.5">
              <div className="text-accent w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                {getIcon(fact.icon, { className: "w-4 h-4 shrink-0" })}
              </div>
              <span className="font-heading text-2xs tracking-[0.14em] uppercase text-ink-light w-18 shrink-0 pt-0.5">
                {fact.label}
              </span>
              <span className="font-heading text-wow-sm text-soft tracking-wider leading-[1.6] ml-1">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      <div className="relative z-10 w-full max-w-275 mx-auto">
        <SectionTitle title="About Me" />

        <div className="grid lg:grid-cols-[3fr_2fr] gap-6 md:gap-10 mt-10 md:mt-14 items-start">
          <div>
            <AboutCard />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-0.75 h-0.75 rotate-45 shrink-0 inline-block bg-alpha-bright-a50" />
              <span className="font-heading text-2xs tracking-[0.22em] uppercase text-ink-dark">
                Contact Information
              </span>
            </div>

            <div className="space-y-3">
              {contactItems.map((item: ContactItem) => (
                <GlowBadge key={item.label} icon={item.icon} iconsSize="lg" variant="primary" className="w-full px-4 py-3" corners={false}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" >
                    {item.value}
                  </a>
                </GlowBadge>
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
        </div>
      </div>
    </section>
  );
}
