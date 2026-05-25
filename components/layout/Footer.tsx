import Link from "next/link";
import { socialLinks } from "@/lib/data.json";
import { getIcon } from "@/lib/getIcon";

function TopOrnament() {
  return (
    <div className="footer-ornament-row">
      <div className="fo-line fo-line-rev" />
      <div className="fo-dot" />
      <div className="fo-gem-sm" />
      <div className="fo-gem-main" />
      <div className="fo-gem-sm" />
      <div className="fo-dot" />
      <div className="fo-line" />
    </div>
  );
}

function BottomDivider() {
  return (
    <div className="footer-bottom-line-wrap">
      <div className="footer-bottom-line" />
      <div className="footer-bottom-center">
        <div className="fbc-gem-sm" />
        <div className="fbc-gem" />
        <div className="fbc-gem-sm" />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-alpha-a18 px-8 pt-8 pb-5 bg-footer before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--alpha-bright-a50)_20%,var(--alpha-bright-a50)_80%,transparent)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-150 after:h-50 after:pointer-events-none after:bg-[radial-gradient(ellipse_at_50%_100%,var(--alpha-a04)_0%,transparent_70%)]">
      <TopOrnament />

      {/* main row */}
      <div className="flex items-start justify-between gap-8 mb-7 flex-wrap">
        {/* logo + tagline */}
        <div className="flex flex-col">
          <div className="w-2.5 h-2.5 rotate-45 bg-accent shadow-glow mb-2.5" />
          <div className="font-heading text-lg font-bold tracking-[0.12em] uppercase leading-none mb-1 text-primary text-shadow-primary-glow-soft">
            Mahmoud
          </div>
          <div className="font-heading text-2xs tracking-[0.22em] uppercase mb-3 text-ink">
            Full-Stack Engineer
          </div>
          <p className="font-heading text-wow-xs tracking-[0.08em] italic leading-[1.7] max-w-55 text-ink-dark">
            &ldquo;Forged in the fires of deadlines, tempered by a thousand
            console.log()&rdquo;
          </p>
        </div>

        {/* socials */}
        <div className="flex flex-col items-end max-[480px]:items-start">
          <div className="font-heading text-2xs tracking-[0.22em] uppercase mb-2.5 text-ink-dark">
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
                className="inline-flex items-center justify-center w-8.5 h-8.5 rounded-xs text-ink border border-alpha-a15 no-underline transition-[color,border-color,box-shadow,background-color] duration-200 hover:text-primary hover:border-alpha-a40 hover:bg-alpha-a05 hover:shadow-[0_0_8px_var(--alpha-bright-a15)]"
              >
                {getIcon(link.icon)}
              </Link>
            ))}
          </div>
          <p className="font-heading text-wow-xs tracking-widest italic text-ink-dark">
            Open to remote opportunities
          </p>
        </div>
      </div>

      <BottomDivider />

      {/* copyright bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="font-heading text-wow-xs tracking-[0.12em] uppercase text-ink-dark">
          © {new Date().getFullYear()} Mahmoud Abdelnasser. All rights reserved.
        </p>
        <p className="font-heading text-wow-xs tracking-[0.12em] uppercase italic text-ink-dark">
          Crafted with{" "}
          <span className="text-ink-dark">Next.js · TypeScript · Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
