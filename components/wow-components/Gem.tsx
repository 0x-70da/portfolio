import { cn } from "@/lib/utils";

type Size = "dot" | "xs" | "small" | "medium" | "large" | "xl";
type BackgroundColor = "primary" | "muted" | "muted-strong";
type Shadow = "none" | "soft-glow" | "glow" | "intense-glow" | "green-glow";

interface GemProps {
  size?: Size;
  backgroundColor?: BackgroundColor;
  shadow?: Shadow;
  innerGlow?: boolean;
  className?: string;
}

const backgroundColord: Record<BackgroundColor, string> = {
  primary: "bg-accent",
  muted: "bg-alpha-bright-a40",
  "muted-strong": "bg-alpha-a30",
};

const sizes: Record<Size, string> = {
  dot: "w-[3px] h-[3px] rounded-full",
  xs: "w-[4px] h-[4px]",
  small: "w-[5px] h-[5px]",
  medium: "w-[6px] h-[6px]",
  large: "w-[8px] h-[8px]",
  xl: "w-[10px] h-[10px]",
};

const shadows: Record<Shadow, string> = {
  none: "",
  "soft-glow": "shadow-glow",
  glow: "shadow-glow",
  "intense-glow": "shadow-glow-strong",
  "green-glow": "shadow-glow-success-12-a60",
};

const Gem = ({ size, backgroundColor, shadow, innerGlow }: GemProps) => {
  return (
    <>
      <span
        className={cn(
          "relative inline-flex rotate-45 shrink-0 items-center justify-center align-middle",
          sizes[size || "medium"],
          backgroundColord[backgroundColor || "primary"],
          shadows[shadow || "none"],
        )}
      >
        {innerGlow && (
          <span className="absolute inset-0.5 pointer-events-none bg-soft" />
        )}
      </span>
    </>
  );
};

export default Gem;
