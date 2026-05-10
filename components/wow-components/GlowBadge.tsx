import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface GlowBadgeProps {
  label: string;
  variant?: string;
  icon?: LucideIcon;
  className?: string;
}

const variantStyles: Record<string, string> = {
  gold:    "wow-badge-gold",
  arcane:  "wow-badge-arcane",
  stone:   "wow-badge-stone",
  crimson: "wow-badge-crimson",
};

export function GlowBadge({
  label,
  variant = "gold",
  icon: Icon,
  className,
}: GlowBadgeProps) {
  return (
    <span className={cn("wow-badge", variantStyles[variant], className)}>
      {Icon && <Icon className="wow-badge-icon" />}
      {label}
    </span>
  );
}