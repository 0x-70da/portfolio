import { SectionTitle } from "../wow-components/SectionTitle";
import { WowDivider } from "../wow-components/WowDivider";
import { ContactItem } from "@/lib/types";
import { getIcon } from "@/lib/getIcon";
import { about } from "@/lib/translation.json";
import { factItems, contactItems } from "@/lib/data.json";

type CornerPosition = "tl" | "tr" | "bl" | "br";

const cornerPositionClasses: Record<CornerPosition, string> = {
  tl: "top-1 left-1",
  tr: "top-1 right-1 scale-x-[-1]",
  bl: "bottom-1 left-1 scale-y-[-1]",
  br: "bottom-1 right-1 scale-[-1]",
};

function AboutCorner({ position }: { position: CornerPosition }) {
  return (
    <div
      className={`absolute w-5.5 h-5.5 z-20 pointer-events-none ${cornerPositionClasses[position]}`}
    >
      <svg viewBox="0 0 22 22" className="w-full h-full overflow-visible">
        <path
          d="M2 20 L2 2 L20 2"
          fill="none"
          stroke="var(--alpha-a70)"
          strokeWidth="1"
        />
        <rect
          x="0"
          y="0"
          width="6"
          height="6"
          rx="1"
          fill="var(--alpha-ornament-a60)"
          stroke="var(--alpha-a70)"
          strokeWidth="0.8"
        />
        <circle cx="2" cy="11" r="1.5" fill="var(--alpha-a35)" />
        <circle cx="11" cy="2" r="1.5" fill="var(--alpha-a35)" />
      </svg>
    </div>
  );
}

function AboutCard() {
  return (
    <div className="w-full h-full rounded-md relative border border-ink-dark overflow-hidden bg-surface-card shadow-card">
      <div className="absolute inset-0 rounded-md pointer-events-none z-0 bg-texture-stone-strong" />
      <div className="absolute pointer-events-none rounded-sm z-10 border border-alpha-a35 inset-1.25" />
      <div className="absolute pointer-events-none rounded-[3px] z-10 border border-alpha-a10 inset-2" />
      <AboutCorner position="tl" />
      <AboutCorner position="tr" />
      <AboutCorner position="bl" />
      <AboutCorner position="br" />

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
    </div>
  );
}

function ContactBadge({ item }: { item: ContactItem }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group relative overflow-hidden flex items-center gap-3 px-4 py-3 rounded-sm border border-alpha-a20 bg-surface-card shadow-badge-contact hover:border-alpha-a50 hover:shadow-badge-contact-hover transition-[border-color,box-shadow] duration-200 no-underline"
    >
      <span className="pointer-events-none absolute -top-px -left-px -right-px h-px bg-line-primary" />

      <div className="w-8 h-8 rounded-xs border border-alpha-a20 bg-black-a40 flex items-center justify-center shrink-0 text-muted group-hover:text-primary transition-colors duration-200">
        {getIcon(item.icon, { className: "w-5 h-5 shrink-0" })}
      </div>

      <div className="flex flex-col">
        <span className="font-heading text-2xs tracking-[0.14em] uppercase text-ink-dark">
          {item.label}
        </span>
        <span className="font-heading text-wow-sm text-muted-soft tracking-[0.06em] group-hover:text-primary transition-colors duration-200">
          {item.value}
        </span>
      </div>
    </a>
  );
}

function AvailabilityBadge() {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm border border-success-border-a30 bg-success-surface-a80 mt-1">
      <span className="w-2 h-2 rounded-full bg-success shadow-glow-success-8-a60 animate-pulse" />
      <span className="font-heading text-wow-xs tracking-[0.14em] uppercase text-success-text-muted">
        Available for new opportunities
      </span>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none bg-hero" />

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
