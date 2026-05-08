"use client";

import { getIcon } from "@/lib/getIcon";
import { cn } from "@/lib/utils";

type WowButtonVariant = "gold" | "ghost" | "arcane";
type WowButtonSize = "sm" | "md" | "lg";

interface WowButtonProps {
  children: React.ReactNode;
  variant?: WowButtonVariant;
  size?: WowButtonSize;
  icon?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<WowButtonVariant, string> = {
  gold:   "wow-btn-gold",
  ghost:  "wow-btn-ghost",
  arcane: "wow-btn-arcane",
};

const sizeStyles: Record<WowButtonSize, string> = {
  sm: "wow-btn-sm",
  md: "",
  lg: "wow-btn-lg",
};

function CornerGems() {
  return (
    <>
      <span className="wow-btn-corner wow-btn-corner-tl" />
      <span className="wow-btn-corner wow-btn-corner-tr" />
      <span className="wow-btn-corner wow-btn-corner-bl" />
      <span className="wow-btn-corner wow-btn-corner-br" />
    </>
  );
}

export function WowButton({
  children,
  variant = "gold",
  size = "md",
  icon,
  onClick,
  href,
  className,
  type = "button",
  disabled = false,
}: WowButtonProps) {
  const classes = cn(
    "wow-btn",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      <CornerGems />
      {getIcon(icon, { className: "wow-btn-icon" })}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}