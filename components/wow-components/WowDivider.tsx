import React from "react";
import Gem from "./Gem";
import { cn } from "@/lib/utils";

type BackgroundColor = "primary" | "muted" | "muted-strong";
type Direction = "left" | "middle" | "right"; // where the glowing part starts
type LengthMode = "full" | number;

interface WowDividerProps {
  gems?: number; // 1, 3 or 5 (visual presets)
  direction?: Direction; // start of glow: left, middle, right
  backgroundColor?: BackgroundColor;
  length?: LengthMode; // full width or cut (fixed width)
  thickness?: number; // px
  noGradient?: boolean; // if true, uses solid color instead of gradient
  className?: string;
}

interface DividerLineProps {
  direction: Direction;
  backgroundColor: BackgroundColor;
  thickness: number;
  noGradient?: boolean;
}

const backgroundColors: Record<BackgroundColor, string> = {
  primary: "var(--color-primary)",
  muted: "var(--color-muted)",
  "muted-strong": "var(--color-muted-strong)",
};

const gemInfo: Record<
  number,
  Array<{
    size: "dot" | "small" | "medium" | "large";
    backgroundColor: BackgroundColor;
  }>
> = {
  1: [{ size: "medium", backgroundColor: "primary" }],
  2: [
    { size: "small", backgroundColor: "primary" },
    { size: "small", backgroundColor: "primary" },
  ],
  3: [
    { size: "small", backgroundColor: "muted" },
    { size: "medium", backgroundColor: "primary" },
    { size: "small", backgroundColor: "muted" },
  ],
  4: [
    { size: "dot", backgroundColor: "muted" },
    { size: "small", backgroundColor: "primary" },
    { size: "small", backgroundColor: "primary" },
    { size: "dot", backgroundColor: "muted" },
  ],
  5: [
    { size: "dot", backgroundColor: "muted-strong" },
    { size: "small", backgroundColor: "muted" },
    { size: "medium", backgroundColor: "primary" },
    { size: "small", backgroundColor: "muted" },
    { size: "dot", backgroundColor: "muted-strong" },
  ],
};

function DividerLine({
  direction,
  backgroundColor,
  thickness,
  noGradient = false,
}: DividerLineProps) {
  const background = noGradient
    ? backgroundColors[backgroundColor]
    : direction === "middle"
      ? `linear-gradient(90deg, transparent, ${backgroundColors[backgroundColor]} 50%, transparent)`
      : direction === "left"
        ? `linear-gradient(90deg, ${backgroundColors[backgroundColor]}, transparent)`
        : `linear-gradient(90deg, transparent, ${backgroundColors[backgroundColor]})`;
  return (
    <div
      className="relative h-px flex-1 top-0.75 after:absolute after:inset-0 after:rounded-full after:opacity-70"
      style={{
        height: `${thickness}px`,
        background: background,
      }}
    />
  );
}

export const WowDivider: React.FC<WowDividerProps> = ({
  gems = 5,
  direction = "middle",
  backgroundColor = "primary",
  length = "full",
  thickness = 1,
  noGradient = false,
  className,
}) => {
  const gemList =
    gemInfo[Math.min(5, Math.max(1, Math.floor(gems)))] ?? gemInfo[5];
  const revDirection =
    direction === "left" ? "right" : direction === "right" ? "left" : direction;

  if (gems === 0) {
    return (
      <div
        className={cn("flex items-center mx-auto", className)}
        style={{
          width: length === "full" ? "100%" : `${length}rem`,
        }}
      >
        <DividerLine
          direction={direction}
          backgroundColor={backgroundColor}
          thickness={thickness}
          noGradient={noGradient}
        />
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center mx-auto", className)}
      style={{
        width: length === "full" ? "100%" : `${length}rem`,
      }}
    >
      <DividerLine
        direction={direction}
        backgroundColor={backgroundColor}
        thickness={thickness}
        noGradient={noGradient}
      />

      <div className="flex items-center gap-2 px-3 shrink-0">
        {gemList.map((info, index) => (
          <Gem
            key={index}
            size={info.size}
            backgroundColor={info.backgroundColor}
          />
        ))}
      </div>

      <DividerLine
        direction={revDirection}
        backgroundColor={backgroundColor}
        thickness={thickness}
        noGradient={noGradient}
      />
    </div>
  );
};

export default WowDivider;
