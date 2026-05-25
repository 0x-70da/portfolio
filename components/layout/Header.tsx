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
      <div className="relative h-2.5 w-2.5 shrink-0 rotate-45 bg-accent shadow-[0_0_10px_var(--alpha-bright-a70),0_0_20px_var(--alpha-bright-a20)] after:content-[''] after:absolute after:inset-[2px] after:bg-alpha-bright-a40" />

      {/* text */}
      <div>
        <div className="font-heading text-3xl font-bold leading-none tracking-[0.12em] uppercase text-primary text-shadow-primary-glow-soft">
          Mahmoud
        </div>
        <div className="mt-0.5 font-heading text-2xs leading-none tracking-[0.2em] uppercase text-ink">
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
      className={cn(
        "relative whitespace-nowrap rounded-xs px-3.5 py-1.5 font-heading text-md font-semibold tracking-[0.14em] uppercase text-ink transition-colors duration-200 hover:text-muted-strong",
        active &&
          "text-primary text-shadow-primary before:content-[''] before:absolute before:left-1/2 before:top-0.5 before:h-1 before:w-1 before:-translate-x-1/2 before:rotate-45 before:bg-accent before:shadow-glow-subtle after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-5 after:-translate-x-1/2 after:bg-line-primary-strong after:shadow-[0_0_6px_var(--alpha-bright-a15)]",
      )}
    >
      {item.label}
    </Link>
  );
}

function NavSep() {
  return <div className="h-3 w-px shrink-0 bg-alpha-a15" />;
}

function SocialIconBtn({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      title={link.label}
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xs border border-transparent text-ink transition-[color,border-color,box-shadow,background-color] duration-200 hover:border-alpha-a20 hover:bg-alpha-a05 hover:text-primary hover:shadow-[0_0_8px_var(--alpha-bright-a15)]"
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
        "flex items-center gap-3.5 border-b border-alpha-a06 px-8 py-3.5 font-heading text-lg font-semibold tracking-[0.14em] uppercase text-ink transition-[color,background-color] duration-200 hover:bg-alpha-a05 hover:text-muted-strong",
        active && "bg-alpha-a05 text-primary text-shadow-primary/80",
      )}
    >
      {/* left gem indicator */}
      <span
        className={cn(
          "h-1.5 w-1.5 shrink-0 rotate-45 bg-alpha-a20 transition-[background-color,box-shadow] duration-200",
          active && "bg-accent shadow-glow-subtle",
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
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center gap-6 border-b border-alpha-a20 bg-[image:var(--gradient-header)] px-8 shadow-header backdrop-blur-md">
        {/* top gold line */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-line-primary-strong" />

        {/* Logo */}
        <HeaderLogo />

        {/* Desktop nav — hidden on mobile */}
        <nav className="mx-auto hidden items-center gap-0 md:flex">
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
        <div className="hidden shrink-0 items-center gap-1 md:flex">
          {socialLinks.map((link) => (
            <SocialIconBtn key={link.label} link={link} />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xs border border-alpha-a20 bg-transparent text-ink transition-[color,border-color] duration-200 hover:border-alpha-a45 hover:text-primary md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* bottom center ornament */}
        <div className="pointer-events-none absolute bottom-[-3px] left-1/2 flex -translate-x-1/2 items-center gap-1.5">
          <div className="h-px w-20 bg-line-primary-strong rotate-180" />
          <div className="h-1.25 w-1.25 shrink-0 rotate-45 bg-accent shadow-glow-subtle" />
          <div className="h-px w-20 bg-line-primary-strong" />
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed left-0 right-0 top-16 z-49 border-b border-alpha-a20 bg-[image:var(--gradient-header)] px-0 pb-5 pt-3 shadow-[0_8px_32px_var(--black-a60)] backdrop-blur-md md:hidden">
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
          <div className="mt-2.5 flex items-center gap-2 border-t border-alpha-a10 px-8 pt-4">
            {socialLinks.map((link) => (
              <SocialIconBtn key={link.label} link={link} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
