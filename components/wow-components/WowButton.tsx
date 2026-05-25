"use client";

import { getIcon } from "@/lib/getIcon";
import { cn } from "@/lib/utils";

type WowButtonVariant = "primary" | "ghost" | "secondary";
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

const btnBase =
  "inline-flex items-center justify-center gap-2 font-heading text-[11px] font-semibold tracking-[0.14em] uppercase cursor-pointer border-none outline-none relative overflow-hidden no-underline px-6 h-11 rounded-[3px] whitespace-nowrap select-none transition-transform duration-150 active:scale-[0.97] " +
  "after:content-[''] after:absolute after:inset-0 after:bg-sheen after:bg-size-[200%_100%] after:[background-position:-100%_0] after:opacity-0 after:transition-opacity after:duration-150 after:pointer-events-none hover:after:opacity-100 hover:after:animate-[wow-btn-shimmer_0.8s_ease_forwards]";

const variantStyles: Record<WowButtonVariant, string> = {
  primary:
    "bg-surface-button text-primary border border-ink-dark shadow-btn text-shadow-primary " +
    "hover:border-muted hover:shadow-btn-hover hover:text-shadow-primary-glow",
  ghost:
    "bg-transparent text-muted-soft border border-alpha-a30 shadow-[inset_0_0_0_1px_var(--alpha-a06),0_2px_8px_var(--black-a30)] " +
    "hover:text-primary hover:border-alpha-a60 hover:shadow-[inset_0_0_0_1px_var(--alpha-a10),0_2px_12px_var(--black-a40),0_0_12px_var(--alpha-bright-a15)] hover:text-shadow-primary-glow-soft",
  secondary:
    "bg-surface-secondary text-secondary-text border border-secondary-border shadow-secondary text-shadow-secondary " +
    "hover:border-secondary-border-strong hover:shadow-secondary-hover hover:text-shadow-secondary-strong",
};

const cornerGemStyles: Record<WowButtonVariant, string> = {
  primary: "before:bg-accent before:shadow-glow",
  ghost: "before:bg-alpha-a50",
  secondary: "before:bg-secondary before:shadow-secondary-glow",
};

const sizeStyles: Record<WowButtonSize, string> = {
  sm: "h-[34px] px-4 text-[10px]",
  md: "",
  lg: "h-[52px] px-8 text-[12px] tracking-[0.16em]",
};

function CornerGems({ variant = "primary" }: { variant?: WowButtonVariant }) {
  const gemBase =
    "absolute w-[5px] h-[5px] pointer-events-none z-[2] " +
    "before:content-[''] before:absolute before:w-[5px] before:h-[5px] before:rotate-45";
  const gemVariant = cornerGemStyles[variant];
  return (
    <>
      <span className={`${gemBase} -top-0.5 -left-0.5 ${gemVariant}`} />
      <span className={`${gemBase} -top-0.5 -right-0.5 ${gemVariant}`} />
      <span className={`${gemBase} -bottom-0.5 -left-0.5 ${gemVariant}`} />
      <span className={`${gemBase} -bottom-0.5 -right-0.5 ${gemVariant}`} />
    </>
  );
}

export function WowButton({
  children,
  variant = "primary",
  size = "md",
  icon = "null",
  onClick,
  href,
  className,
  type = "button",
  disabled = false,
}: WowButtonProps) {
  const classes = cn(
    btnBase,
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 pointer-events-none",
    className,
  );

  const content = (
    <>
      <CornerGems variant={variant} />
      {getIcon(icon, { className: "w-[14px] h-[14px] shrink-0" })}
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
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
