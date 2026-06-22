import { getIcon } from "@/lib/getIcon";
import { cn } from "@/lib/utils";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface GlowBadgeProps {
  children?: React.ReactNode;
  label?: string;
  variant?: string;
  icon?: string | React.ReactNode;
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
  none: "text-ink-light bg-surface-card border border-alpha-a20 shadow-badge-contact before:bg-alpha-a20 after:bg-alpha-a20 hover:text-primary hover:border-primary hover:shadow-badge-contact-hover",

  success:
    "text-success-text-muted bg-success-surface-a80 border border-success-border-a30 shadow-[inset_0_0_0_1px_rgba(64,128,92,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-success after:bg-success hover:border-success-border-a30 hover:shadow-[inset_0_0_0_1px_rgba(64,128,92,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(64,128,92,0.2)]",

  primary:
    "text-primary text-shadow-primary bg-(image:--surface-badge) border border-alpha-a30 shadow-badge-contact before:bg-alpha-a60 after:bg-alpha-a60 hover:text-shadow-primary-glow hover:border-alpha-a50 hover:shadow-badge-contact-hover",

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

  red: "text-[rgb(235,139,128)] text-shadow-[0_0_8px_rgba(232,85,69,0.28)] bg-[linear-gradient(135deg,rgba(232,85,69,0.12)_0%,rgba(70,18,18,0.36)_100%)] border border-[rgba(232,85,69,0.35)] shadow-[inset_0_0_0_1px_rgba(232,85,69,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(232,85,69,0.62)] after:bg-[rgba(232,85,69,0.62)] hover:border-[rgba(232,85,69,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(232,85,69,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(232,85,69,0.2)] hover:text-shadow-[0_0_10px_rgba(232,85,69,0.45)]",

  green:
    "text-[rgb(104,204,141)] text-shadow-[0_0_8px_rgba(74,184,112,0.28)] bg-[linear-gradient(135deg,rgba(74,184,112,0.12)_0%,rgba(18,52,32,0.38)_100%)] border border-[rgba(74,184,112,0.35)] shadow-[inset_0_0_0_1px_rgba(74,184,112,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(74,184,112,0.62)] after:bg-[rgba(74,184,112,0.62)] hover:border-[rgba(74,184,112,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(74,184,112,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(74,184,112,0.2)] hover:text-shadow-[0_0_10px_rgba(74,184,112,0.45)]",

  yellow:
    "text-[rgb(234,198,92)] text-shadow-[0_0_8px_rgba(212,168,48,0.28)] bg-[linear-gradient(135deg,rgba(212,168,48,0.14)_0%,rgba(56,44,12,0.42)_100%)] border border-[rgba(212,168,48,0.35)] shadow-[inset_0_0_0_1px_rgba(212,168,48,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(212,168,48,0.62)] after:bg-[rgba(212,168,48,0.62)] hover:border-[rgba(212,168,48,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(212,168,48,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(212,168,48,0.2)] hover:text-shadow-[0_0_10px_rgba(212,168,48,0.45)]",

  blue: "text-[rgb(107,178,238)] text-shadow-[0_0_8px_rgba(74,158,221,0.28)] bg-[linear-gradient(135deg,rgba(74,158,221,0.12)_0%,rgba(14,36,58,0.4)_100%)] border border-[rgba(74,158,221,0.35)] shadow-[inset_0_0_0_1px_rgba(74,158,221,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(74,158,221,0.62)] after:bg-[rgba(74,158,221,0.62)] hover:border-[rgba(74,158,221,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(74,158,221,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(74,158,221,0.2)] hover:text-shadow-[0_0_10px_rgba(74,158,221,0.45)]",

  purple:
    "text-[rgb(192,155,245)] text-shadow-[0_0_8px_rgba(168,112,232,0.28)] bg-[linear-gradient(135deg,rgba(168,112,232,0.12)_0%,rgba(42,22,62,0.4)_100%)] border border-[rgba(168,112,232,0.35)] shadow-[inset_0_0_0_1px_rgba(168,112,232,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(168,112,232,0.62)] after:bg-[rgba(168,112,232,0.62)] hover:border-[rgba(168,112,232,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(168,112,232,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(168,112,232,0.2)] hover:text-shadow-[0_0_10px_rgba(168,112,232,0.45)]",

  white:
    "text-[rgb(233,236,242)] text-shadow-[0_0_8px_rgba(255,255,255,0.14)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] border border-[rgba(255,255,255,0.18)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(255,255,255,0.58)] after:bg-[rgba(255,255,255,0.58)] hover:border-[rgba(255,255,255,0.3)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(255,255,255,0.14)] hover:text-shadow-[0_0_10px_rgba(255,255,255,0.22)]",

  cyan: "text-[rgb(111,220,230)] text-shadow-[0_0_8px_rgba(64,200,216,0.28)] bg-[linear-gradient(135deg,rgba(64,200,216,0.12)_0%,rgba(10,40,45,0.4)_100%)] border border-[rgba(64,200,216,0.35)] shadow-[inset_0_0_0_1px_rgba(64,200,216,0.08),0_2px_8px_rgba(0,0,0,0.4)] before:bg-[rgba(64,200,216,0.62)] after:bg-[rgba(64,200,216,0.62)] hover:border-[rgba(64,200,216,0.65)] hover:shadow-[inset_0_0_0_1px_rgba(64,200,216,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(64,200,216,0.2)] hover:text-shadow-[0_0_10px_rgba(64,200,216,0.45)]",
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
  const iconNode =
    typeof icon === "string"
      ? getIcon(icon, { className: `${iconSizes[iconsSize]} shrink-0` })
      : icon;

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        corners ? cornerGems : "",
        className,
      )}
    >
      {iconNode}
      {children || label}
    </div>
  );
}
