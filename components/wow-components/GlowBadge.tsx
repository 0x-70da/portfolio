import { getIcon } from "@/lib/getIcon";
import { cn } from "@/lib/utils";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface GlowBadgeProps {
  children?: React.ReactNode;
  label?: string;
  variant?: string;
  icon?: string;
  iconsSize?: IconSize;
  corners?: boolean;
  className?: string;
}

const iconSizes: Record<IconSize, string> = {
  xs: "w-[14px] h-[14px]",
  sm: "w-[16px] h-[16px]",
  md: "w-[18px] h-[18px]",
  lg: "w-[20px] h-[20px]",
  xl: "w-[24px] h-[24px]",
};

const baseStyles =
  "inline-flex items-center gap-[6px] px-[12px] py-[5px] rounded-[2px] select-none whitespace-nowrap font-heading uppercase text-[10px] font-semibold transition-[box-shadow,border-color,text-shadow,color] duration-200 relative";

const cornerGems =
  "before:content-[''] before:absolute before:w-[4px] before:h-[4px] before:rotate-45 before:top-[-2px] before:left-[-2px] after:content-[''] after:absolute after:w-[4px] after:h-[4px] after:rotate-45 after:bottom-[-2px] after:right-[-2px]";

const variantStyles: Record<string, string> = {
  none: "text-ink-light bg-surface-card border border-alpha-a20 shadow-badge-contact before:bg-alpha-a20 after:bg-alpha-a20 hover:border-alpha-a50 hover:shadow-badge-contact-hover",

  success:
    "text-success-text-muted bg-success-surface-a80 border border-success-border-a30 shadow-[inset_0_0_0_1px_rgba(64,128,92,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-success after:bg-success hover:border-success-border-a30 hover:shadow-[inset_0_0_0_1px_rgba(64,128,92,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(64,128,92,0.2)]",

  primary:
    "text-ink-light text-shadow-badge-contact bg-surface-badge border border-alpha-a20 shadow-badge-contact before:bg-alpha-a60 after:bg-alpha-a60 hover:text-primary hover:text-shadow-primary-glow hover:border-primary hover:shadow-badge-contact-hover",

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
  children,
  label,
  variant = "primary",
  icon = "null",
  iconsSize = "xs",
  corners = true,
  className,
}: GlowBadgeProps) {
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        corners ? cornerGems : "",
        className,
      )}
    >
      {getIcon(icon, { className: `${iconSizes[iconsSize]} shrink-0` })}
      {children || label}
    </div>
  );
}
