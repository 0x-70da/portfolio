import { WowButton } from "../wow-components/WowButton";
import { ProfileFlipCard } from "../feature-components/ProfileFlipCard";
import { hero } from "@/lib/translation.json";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-5 pt-22 pb-12 md:px-8 md:pt-20 md:pb-15"
    >
      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none bg-hero" />
      <div className="absolute top-16 left-0 right-0 h-px bg-line-primary" />

      <div className="relative z-10 w-full max-w-275 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* ── LEFT: text + CTAs ── */}
        <div className="flex-1 flex flex-col items-center text-center w-full md:items-start md:text-left md:w-auto">
          {/* eyebrow */}
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
            <div className="w-8 h-px bg-alpha-a40" />
            <span className="w-1.25 h-1.25 rotate-45 shrink-0 inline-block bg-accent shadow-glow" />
            <span className="font-heading text-wow-xs tracking-[0.22em] uppercase text-ink-dark">
              {hero.eyebrow}
            </span>
          </div>

          {/* greeting + name */}
          <p className="font-heading text-wow-xl tracking-[0.18em] uppercase text-ink-dark mb-2">
            {hero.greeting}
          </p>
          <h1 className="font-heading text-[clamp(36px,5vw,56px)] font-black tracking-[0.06em] uppercase text-primary text-shadow-primary-strong leading-none mb-3">
            Mahmoud
            <br />
            Abdelnasser
          </h1>

          {/* title */}
          <div className="flex items-center justify-center md:justify-start gap-2 my-6 font-heading text-hero-title tracking-[0.14em] uppercase text-muted">
            <span className="w-1 h-1 rotate-45 shrink-0 inline-block bg-alpha-a40" />
            <span>{hero.title}</span>
            <span className="w-1 h-1 rotate-45 shrink-0 inline-block bg-alpha-a40" />
          </div>

          {/* description */}
          <p className="font-heading text-wow-md leading-[1.9] text-body tracking-[0.06em] italic mb-8 max-w-120 md:max-w-120 max-md:max-w-full border-t border-alpha-a20 pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-4">
            {hero.description}
          </p>

          <div className="w-full h-px bg-line-primary my-3" />

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 max-[480px]:flex-col max-[480px]:w-full">
            <WowButton
              variant="primary"
              icon="Eye"
              href="#projects"
              className="max-[480px]:w-full"
            >
              {hero.ctas.projects}
            </WowButton>
            <WowButton
              variant="ghost"
              icon="Mail"
              href="#contact"
              className="max-[480px]:w-full"
            >
              {hero.ctas.contact}
            </WowButton>
            <WowButton
              variant="secondary"
              icon="BookText"
              href="/resume.pdf"
              className="max-[480px]:w-full"
            >
              {hero.ctas.resume}
            </WowButton>
          </div>
        </div>

        {/* ── RIGHT: flip card ── */}
        <div className="w-full md:w-auto shrink-0 flex justify-center md:justify-start">
          <ProfileFlipCard
            name="Mahmoud"
            role="Full-Stack Developer"
            title="Artisan of the Web"
            imageSrc="/profile.jpg"
            stats={[
              { label: "Years", value: "1+" },
              { label: "Projects", value: "5" },
              { label: "Language", value: "TS" },
            ]}
            backTitle="Chronicle of the Developer"
            backQuote='"Forged in the fires of deadlines, tempered by a thousand console.log()"'
            backInfo={[
              { label: "City", value: "Luxor, Egypt" },
              { label: "Class", value: "Full-Stack Developer" },
              { label: "Spec", value: "React · TypeScript · Node" },
              { label: "Guild", value: "Open to Opportunities" },
              { label: "Status", value: "Seeking New Quests" },
            ]}
            backFooter="Click to return · Est. 2026"
          />
        </div>
      </div>
    </section>
  );
}
