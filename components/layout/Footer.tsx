import Link from "next/link";
import { socialLinks } from "@/lib/data.json";
import { getIcon } from "@/lib/getIcon";

function TopOrnament() {
  return (
    <div className="mb-7 flex items-center gap-2">
      <div className="h-px flex-1 bg-[linear-gradient(90deg,var(--alpha-a30),transparent)]" />
      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-alpha-a30" />
      <div className="h-1.25 w-1.25 shrink-0 rotate-45 bg-alpha-bright-a50" />
      <div className="h-2 w-2 shrink-0 rotate-45 bg-accent shadow-glow" />
      <div className="h-1.25 w-1.25 shrink-0 rotate-45 bg-alpha-bright-a50" />
      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-alpha-a30" />
      <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,var(--alpha-a30))]" />
    </div>
  );
}

function BottomDivider() {
  return (
    <div className="relative mb-4 h-px w-full">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,var(--alpha-a25)_20%,var(--alpha-a25)_80%,transparent)]" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.25">
        <div className="h-0.75 w-0.75 shrink-0 rotate-45 bg-alpha-bright-a50" />
        <div className="h-1.25 w-1.25 shrink-0 rotate-45 bg-accent shadow-[0_0_5px_var(--alpha-bright-a20)]" />
        <div className="h-0.75 w-0.75 shrink-0 rotate-45 bg-alpha-bright-a50" />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-alpha-a18 bg-(image:--gradient-footer) px-8 pt-8 pb-5 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--alpha-bright-a50)_20%,var(--alpha-bright-a50)_80%,transparent)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-50 after:w-150 after:pointer-events-none after:bg-[radial-gradient(ellipse_at_50%_100%,var(--alpha-a04)_0%,transparent_70%)]">
      <TopOrnament />

      {/* main row */}
      <div className="flex items-start justify-between gap-8 mb-7 flex-wrap">
        {/* logo + tagline */}
        <div className="flex flex-col">
          <div className="mb-2.5 h-2.5 w-2.5 rotate-45 bg-accent shadow-glow" />
          <div className="mb-1 font-heading text-lg font-bold leading-none tracking-[0.12em] uppercase text-primary text-shadow-primary-glow-soft">
            Mahmoud
          </div>
          <div className="mb-3 font-heading text-2xs uppercase tracking-[0.22em] text-ink">
            Full-Stack Engineer
          </div>
          <p className="max-w-55 font-heading text-wow-xs italic leading-[1.7] tracking-[0.08em] text-ink-dark/80">
            &ldquo;Forged in the fires of deadlines, tempered by a thousand
            console.log()&rdquo;
          </p>
        </div>

        {/* socials */}
        <div className="flex flex-col items-end max-[480px]:items-start">
          <div className="mb-2.5 font-heading text-2xs uppercase tracking-[0.22em] text-ink-dark/80">
            Find Me
          </div>
          <div className="flex gap-1.5 mb-2.5">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-xs border border-alpha-a15 text-ink no-underline transition-[color,border-color,box-shadow,background-color] duration-200 hover:border-alpha-a40 hover:bg-alpha-a05 hover:text-primary hover:shadow-[0_0_8px_var(--alpha-bright-a15)]"
              >
                {getIcon(link.icon)}
              </Link>
            ))}
          </div>
          <p className="font-heading text-wow-xs italic tracking-widest text-ink-dark/80">
            Open to remote opportunities
          </p>
        </div>
      </div>

      <BottomDivider />

      {/* copyright bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="font-heading text-wow-xs uppercase tracking-[0.12em] text-ink-dark/80">
          © {new Date().getFullYear()} Mahmoud Abdelnasser. All rights reserved.
        </p>
        <p className="font-heading text-wow-xs uppercase italic tracking-[0.12em] text-ink-dark/80">
          Crafted with{" "}
          <span className="text-ink-dark/90">
            Next.js · TypeScript · Tailwind
          </span>
        </p>
      </div>
    </footer>
  );
}
