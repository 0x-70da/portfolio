import type { SocialLink } from "@/lib/types";
import { getIcon } from "@/lib/getIcon";
import { cn } from "@/lib/utils";

interface SocialIconBtnProps {
  link: SocialLink;
  className?: string;
}

const variantStyles = {
  arcane:
    "border border-[rgba(130,100,220,0.35)] bg-[linear-gradient(135deg,rgba(18,16,30,0.96)_0%,rgba(26,22,48,0.94)_100%)] text-[rgb(218,208,246)] shadow-[inset_0_0_0_1px_rgba(130,100,220,0.08),0_2px_8px_rgba(0,0,0,0.35)] hover:border-[rgba(130,100,220,0.6)] hover:text-[rgb(232,225,255)] hover:shadow-[inset_0_0_0_1px_rgba(130,100,220,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(130,100,220,0.18)]",
  red: "border border-[rgba(232,85,69,0.35)] bg-[linear-gradient(135deg,rgba(232,85,69,0.12)_0%,rgba(70,18,18,0.36)_100%)] text-[rgb(239,173,165)] shadow-[inset_0_0_0_1px_rgba(232,85,69,0.08),0_2px_8px_rgba(0,0,0,0.35)] hover:border-[rgba(232,85,69,0.6)] hover:text-[rgb(247,214,210)] hover:shadow-[inset_0_0_0_1px_rgba(232,85,69,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(232,85,69,0.18)]",
  white:
    "border border-[rgba(255,255,255,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] text-[rgb(235,239,245)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.35)] hover:border-[rgba(255,255,255,0.3)] hover:text-[rgb(255,255,255)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(255,255,255,0.12)]",
  cyan: "border border-[rgba(64,200,216,0.35)] bg-[linear-gradient(135deg,rgba(64,200,216,0.12)_0%,rgba(10,40,45,0.4)_100%)] text-[rgb(165,235,241)] shadow-[inset_0_0_0_1px_rgba(64,200,216,0.08),0_2px_8px_rgba(0,0,0,0.35)] hover:border-[rgba(64,200,216,0.6)] hover:text-[rgb(214,250,252)] hover:shadow-[inset_0_0_0_1px_rgba(64,200,216,0.12),0_2px_12px_rgba(0,0,0,0.45),0_0_10px_rgba(64,200,216,0.18)]",
} as const;

export function SocialIconBtn({ link, className }: SocialIconBtnProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      title={link.label}
      aria-label={link.label}
      className={cn(
        "inline-flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-xs transition-[color,border-color,box-shadow,background-color] duration-200",
        variantStyles[link.color],
        className,
      )}
    >
      {getIcon(link.icon, { className: "h-4 w-4" })}
    </a>
  );
}
