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
    <footer className="wow-footer">
      <TopOrnament />

      {/* main row */}
      <div className="footer-main">

        {/* logo + tagline */}
        <div className="footer-logo-col">
          <div className="footer-logo-gem" />
          <div
            className="font-heading text-lg font-bold tracking-[0.12em] uppercase leading-none mb-1"
            style={{ color: "#d4a830", textShadow: "0 0 14px rgba(212,168,48,0.35)" }}
          >
            Mahmoud
          </div>
          <div
            className="font-heading text-[8px] tracking-[0.22em] uppercase mb-3"
            style={{ color: "#6b5828" }}
          >
            Full-Stack Engineer
          </div>
          <p
            className="font-heading text-[9px] tracking-[0.08em] italic leading-[1.7] max-w-55"
            style={{ color: "#4a3c18" }}
          >
            &ldquo;Forged in the fires of deadlines, tempered by a thousand console.log()&rdquo;
          </p>
        </div>

        {/* socials */}
        <div className="footer-socials-col">
          <div
            className="font-heading text-[8px] tracking-[0.22em] uppercase mb-2.5"
            style={{ color: "#4a3c18" }}
          >
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
                className="wow-footer-social-btn"
              >
                {getIcon(link.icon)}
              </Link>
            ))}
          </div>
          <p
            className="font-heading text-[9px] tracking-widest italic"
            style={{ color: "#4a3c18" }}
          >
            Open to remote opportunities
          </p>
        </div>

      </div>

      <BottomDivider />

      {/* copyright bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Mahmoud Abdelnasser. All rights reserved.
        </p>
        <p className="footer-built">
          Crafted with{" "}
          <span style={{ color: "#5a4820" }}>
            Next.js · TypeScript · Tailwind
          </span>
        </p>
      </div>
    </footer>
  );
}