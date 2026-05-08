import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type GlowBadgeVariant = "gold" | "arcane" | "stone" | "crimson";

interface GlowBadgeProps {
  label: string;
  variant?: GlowBadgeVariant;
  icon?: LucideIcon;
  className?: string;
}

const variantStyles: Record<GlowBadgeVariant, string> = {
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