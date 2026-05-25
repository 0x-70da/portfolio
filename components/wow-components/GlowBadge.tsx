import { getIcon } from "@/lib/getIcon";
import { cn } from "@/lib/utils";

interface GlowBadgeProps {
  label: string;
  variant?: string;
  icon?: string;
  className?: string;
}

const baseStyles =
  "inline-flex items-center gap-[6px] px-[12px] py-[5px] rounded-[2px] select-none whitespace-nowrap font-heading uppercase text-[10px] font-semibold transition-[box-shadow,border-color,text-shadow,color] duration-200 relative" +
  " before:content-[''] before:absolute before:w-[4px] before:h-[4px] before:rotate-45 before:top-[-2px] before:left-[-2px] after:content-[''] after:absolute after:w-[4px] after:h-[4px] after:rotate-45 after:bottom-[-2px] after:right-[-2px]";

const variantStyles: Record<string, string> = {
  // keep old & new variant names in sync
  gold:
    // Gold / parchment look (alias for primary)
    "text-primary text-shadow-primary bg-[linear-gradient(135deg,#1e1808_0%,#2a2210_100%)] border border-[rgba(180,140,40,0.35)] shadow-[inset_0_0_0_1px_rgba(180,140,40,0.08),0_2px_8px_rgba(0,0,0,0.5)] before:bg-[rgba(180,140,40,0.6)] after:bg-[rgba(180,140,40,0.6)] hover:text-shadow-primary-glow hover:border-[rgba(180,140,40,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(180,140,40,0.12),0_2px_12px_rgba(0,0,0,0.5),0_0_10px_rgba(180,140,40,0.2)]",

  primary:
    // Gold / parchment look
    "text-primary text-shadow-primary bg-[linear-gradient(135deg,#1e1808_0%,#2a2210_100%)] border border-[rgba(180,140,40,0.35)] shadow-[inset_0_0_0_1px_rgba(180,140,40,0.08),0_2px_8px_rgba(0,0,0,0.5)] before:bg-[rgba(180,140,40,0.6)] after:bg-[rgba(180,140,40,0.6)] hover:text-shadow-primary-glow hover:border-[rgba(180,140,40,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(180,140,40,0.12),0_2px_12px_rgba(0,0,0,0.5),0_0_10px_rgba(180,140,40,0.2)]",

  arcane:
    // Arcane (alias for secondary)
    "text-[rgb(152,128,208)] text-shadow-[0_0_8px_rgba(140,110,230,0.3)] bg-[linear-gradient(135deg,#12101e_0%,#1a1630_100%)] border border-[rgba(130,100,220,0.35)] shadow-[inset_0_0_0_1px_rgba(130,100,220,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(130,100,220,0.6)] after:bg-[rgba(130,100,220,0.6)] hover:border-[rgba(130,100,220,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(130,100,220,0.12),0_2px_12px_rgba(0,0,0,0.5),0_0_10px_rgba(130,100,220,0.2)] hover:text-shadow-[0_0_10px_rgba(140,110,230,0.5)]",

  secondary:
    // Arcane alias for backward compatibility
    "text-[rgb(152,128,208)] text-shadow-[0_0_8px_rgba(140,110,230,0.3)] bg-[linear-gradient(135deg,#12101e_0%,#1a1630_100%)] border border-[rgba(130,100,220,0.35)] shadow-[inset_0_0_0_1px_rgba(130,100,220,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(130,100,220,0.6)] after:bg-[rgba(130,100,220,0.6)] hover:border-[rgba(130,100,220,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(130,100,220,0.12),0_2px_12px_rgba(0,0,0,0.5),0_0_10px_rgba(130,100,220,0.2)] hover:text-shadow-[0_0_10px_rgba(140,110,230,0.5)]",

  stone:
    // Stone / muted
    "text-[rgb(122,112,96)] bg-[linear-gradient(135deg,#181614_0%,#201e1a_100%)] border border-[rgba(140,120,80,0.25)] shadow-[inset_0_0_0_1px_rgba(140,120,80,0.06),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(140,120,80,0.4)] after:bg-[rgba(140,120,80,0.4)] hover:border-[rgba(140,120,80,0.45)] hover:text-[rgb(154,144,128)] hover:shadow-[inset_0_0_0_1px_rgba(140,120,80,0.08),0_2px_10px_rgba(0,0,0,0.4)]",

  crimson:
    // Crimson / danger-ish
    "text-[rgb(192,80,80)] text-shadow-[0_0_8px_rgba(200,80,80,0.3)] bg-[linear-gradient(135deg,#1e0c0c_0%,#2a1010_100%)] border border-[rgba(180,60,60,0.35)] shadow-[inset_0_0_0_1px_rgba(180,60,60,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(180,60,60,0.6)] after:bg-[rgba(180,60,60,0.6)] hover:border-[rgba(180,60,60,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(180,60,60,0.12),0_2px_12px_rgba(0,0,0,0.5),0_0_10px_rgba(180,60,60,0.2)] hover:text-shadow-[0_0_10px_rgba(200,80,80,0.5)]",
};

export function GlowBadge({
  label,
  variant = "primary",
  icon = "null",
  className,
}: GlowBadgeProps) {
  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {getIcon(icon, { className: "w-[14px] h-[14px] shrink-0" })}
      {label}
    </span>
  );
}
