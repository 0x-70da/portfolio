"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { socialLinks, navItems } from "@/lib/data.json";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";
import { NavItem, SocialLink } from "@/lib/types";
import { getIcon } from "@/lib/getIcon";

// ── Sub-components ────────────────────────────────────────────────────────────

function HeaderLogo() {
  return (
    <Link
      href="#home"
      className="flex items-center gap-2.5 shrink-0 group"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {/* gem */}
      <div className="wow-header-logo-gem" />

      {/* text */}
      <div>
        <div className="font-heading text-[15px] font-bold tracking-[0.12em] uppercase leading-none text-primary text-shadow-primary-glow-soft">
          Mahmoud
        </div>
        <div className="font-heading text-2xs tracking-[0.2em] uppercase mt-0.5 leading-none text-ink">
          Full-Stack Engineer
        </div>
      </div>
    </Link>
  );
}

function NavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={`#${item.id}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className={cn("wow-nav-link", active && "wow-nav-link-active")}
    >
      {item.label}
    </Link>
  );
}

function NavSep() {
  return <div className="w-px h-3 shrink-0 bg-alpha-a15" />;
}

function SocialIconBtn({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      title={link.label}
      className="wow-social-btn"
    >
      {getIcon(link.icon)}
    </a>
  );
}

// mobile nav link
function MobileNavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={`#${item.id}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className={cn(
        "wow-mobile-nav-link",
        active && "wow-mobile-nav-link-active",
      )}
    >
      {/* left gem indicator */}
      <span
        className={cn(
          "wow-mobile-nav-gem",
          active && "wow-mobile-nav-gem-active",
        )}
      />
      {item.label}
    </Link>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function Header() {
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="wow-header">
        {/* top gold line */}
        <div className="wow-header-top-line" />

        {/* Logo */}
        <HeaderLogo />

        {/* Desktop nav — hidden on mobile */}
        <nav className="wow-header-nav hidden md:flex">
          {navItems.map((item, i) => (
            <div key={item.id} className="flex items-center">
              {i > 0 && <NavSep />}
              <NavLink
                key={item.id}
                item={item}
                active={activeSection === item.id}
                onClick={() => handleNavClick(item.id)}
              />
            </div>
          ))}
        </nav>

        {/* Socials — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1 shrink-0">
          {socialLinks.map((link) => (
            <SocialIconBtn key={link.label} link={link} />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="wow-hamburger flex md:hidden ml-auto"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* bottom center ornament */}
        <div className="wow-header-bottom-ornament">
          <div className="wow-hbo-line wow-hbo-line-rev" />
          <div className="wow-hbo-gem" />
          <div className="wow-hbo-line" />
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="wow-mobile-drawer md:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.id}
                item={item}
                active={activeSection === item.id}
                onClick={() => handleNavClick(item.id)}
              />
            ))}
          </nav>

          {/* socials in drawer */}
          <div className="wow-mobile-socials">
            {socialLinks.map((link) => (
              <SocialIconBtn key={link.label} link={link} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
