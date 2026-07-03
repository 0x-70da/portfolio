import { socialLinks } from "@/lib/data.json";
import WowDivider from "../wow-components/WowDivider";
import Gem from "../wow-components/Gem";
import { SocialIconBtn } from "./SocialIconBtn";

const typedSocialLinks = socialLinks as import("@/lib/types").SocialLink[];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-alpha-a18 bg-(image:--gradient-footer) px-8 pt-8 pb-5 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--alpha-bright-a50)_20%,var(--alpha-bright-a50)_80%,transparent)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-50 after:w-150 after:pointer-events-none after:bg-[radial-gradient(ellipse_at_50%_100%,var(--alpha-a04)_0%,transparent_70%)]">
      <WowDivider direction="left" backgroundColor="muted" className="mb-8" />

      {/* main row */}
      <div className="flex items-start justify-between gap-8 mb-7 flex-wrap">
        {/* logo + tagline */}
        <div className="flex flex-col">
          <div className="flex gap-2 mb-1">
            <Gem size="xl" shadow="soft-glow" />
            <div className="font-heading text-3xl font-bold leading-none tracking-[0.12em] uppercase text-primary text-shadow-primary-glow-soft">
              Mahmoud
            </div>
          </div>
          <div className="mb-3 font-heading text-wow-md uppercase tracking-[0.22em] text-ink">
            Full-Stack Engineer
          </div>
          <p className="max-w-55 font-heading text-wow-sm italic leading-[1.7] tracking-[0.08em] text-ink-dark/80">
            &ldquo;Forged in the fires of deadlines, tempered by a thousand
            console.log()&rdquo;
          </p>
        </div>

        {/* socials */}
        <div className="flex flex-col items-end max-[480px]:items-start">
          <div className="mb-2.5 font-heading text-wow-md uppercase tracking-[0.22em] text-ink-dark/80">
            Find Me
          </div>
          <div className="flex gap-1.5 mb-2.5">
            {typedSocialLinks.map((link) => (
              <SocialIconBtn key={link.label} link={link} />
            ))}
          </div>
          <p className="font-heading text-wow-lg italic tracking-widest text-ink-dark/80">
            Open to remote opportunities
          </p>
        </div>
      </div>

      {/* <BottomDivider /> */}
      <WowDivider
        gems={1}
        direction="right"
        backgroundColor="muted-strong"
        className="mb-4"
      />

      {/* copyright bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="font-heading text-wow-2xl uppercase tracking-[0.12em] text-ink-dark/80">
          &copy; {new Date().getFullYear()} Mahmoud Abdelnasser. All rights
          reserved.
        </p>
        <p className="font-heading text-wow-md uppercase italic tracking-[0.12em] text-ink-dark/80">
          Crafted with{" "}
          <span className="text-ink-dark/90">
            Next.js · TypeScript · Tailwind
          </span>
        </p>
      </div>
    </footer>
  );
}
