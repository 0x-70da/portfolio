"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CornerOrnament = () => (
  <svg
    viewBox="0 0 22 22"
    className="w-full h-full overflow-visible"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20 L2 2 L20 2"
      fill="none"
      stroke="rgba(180,140,40,0.7)"
      strokeWidth="1"
    />
    <rect
      x="0" y="0" width="6" height="6" rx="1"
      fill="rgba(120,90,20,0.6)"
      stroke="rgba(180,140,40,0.7)"
      strokeWidth="0.8"
    />
    <circle cx="2"  cy="11" r="1.5" fill="rgba(180,140,40,0.35)" />
    <circle cx="11" cy="2"  r="1.5" fill="rgba(180,140,40,0.35)" />
  </svg>
);

function Gem() {
  return (
    <div
      className="w-1.25 h-1.25 rotate-45 shrink-0"
      style={{
        background: "#c89828",
        boxShadow: "0 0 6px rgba(200,152,40,0.6)",
      }}
    />
  );
}

interface WowCardFrontProps {
  name: string;
  role: string;
  title: string;
  stats: { label: string; value: string }[];
  imageSrc?: string;
}

export function WowCardFront({
  name,
  role,
  title,
  stats,
  imageSrc,
}: WowCardFrontProps) {
  return (
    <>
      {/* Header */}
      <div className="w-full text-center pb-2.5 mb-2.5 border-b border-[rgba(180,140,40,0.3)]">
        <p
          className="font-heading text-[8px] tracking-[0.2em] uppercase"
          style={{ color: "#8a7030" }}
        >
          {role}
        </p>
        <p
          className="font-heading text-sm font-bold tracking-[0.08em] leading-tight mt-0.5"
          style={{
            color: "#d4a830",
            textShadow: "0 0 12px rgba(212,168,48,0.5)",
          }}
        >
          {name}
        </p>
      </div>

      {/* Photo */}
      <div
        className="w-37 h-37 rounded-lg mb-2.5 overflow-hidden flex items-center justify-center"
        style={{
          border: "1px solid rgba(180,140,40,0.5)",
          boxShadow: "inset 0 0 0 2px rgba(180,140,40,0.15), 0 4px 16px rgba(0,0,0,0.6)",
          background: "#1a1510",
        }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={150}
            height={150}
            loading="eager"
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg,#2a2010,#3a2e14)",
              border: "1px solid rgba(180,140,40,0.3)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full"
              style={{
                background: "rgba(180,140,40,0.2)",
                border: "1px solid rgba(180,140,40,0.3)",
              }}
            />
          </div>
        )}
      </div>

      {/* Title row */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <Gem />
        <span
          className="font-heading text-[10px] tracking-[0.12em] uppercase"
          style={{ color: "#c89828" }}
        >
          {title}
        </span>
        <Gem />
      </div>

      {/* Divider */}
      <div
        className="w-full h-px my-1.5"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(180,140,40,0.4) 20%,rgba(180,140,40,0.4) 80%,transparent)",
        }}
      />

      {/* Stats */}
      <div className="flex justify-between w-full px-0.5 mt-1">
        {stats.map((stat, i) => (
          <>
            {i > 0 && (
              <div
                key={`sep-${i}`}
                className="w-px my-0.5"
                style={{ background: "rgba(180,140,40,0.2)" }}
              />
            )}
            <div key={stat.label} className="flex-1 text-center">
              <div
                className="font-heading text-base font-bold leading-none"
                style={{
                  color: "#d4a830",
                  textShadow: "0 0 8px rgba(212,168,48,0.4)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="font-heading text-[7px] tracking-[0.12em] uppercase mt-0.5"
                style={{ color: "#6b5828" }}
              >
                {stat.label}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

interface InfoRow {
  label: string;
  value: string;
}

interface WowCardBackProps {
  title: string;
  quote: string;
  info: InfoRow[];
  footer?: string;
}

export function WowCardBack({
  title,
  quote,
  info,
  footer,
}: WowCardBackProps) {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Title */}
      <div
        className="font-heading text-xs font-bold tracking-widest text-center pb-2"
        style={{
          color: "#d4a830",
          textShadow: "0 0 10px rgba(212,168,48,0.4)",
          borderBottom: "1px solid rgba(180,140,40,0.3)",
        }}
      >
        {title}
      </div>

      {/* Lore quote */}
      <p
        className="font-heading text-[8.5px] leading-[1.7] text-center italic tracking-[0.04em] px-1"
        style={{ color: "#a08840" }}
      >
        {quote}
      </p>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(180,140,40,0.4) 20%,rgba(180,140,40,0.4) 80%,transparent)",
        }}
      />

      {/* Info grid */}
      <div className="flex flex-col gap-1.5">
        {info.map((row) => (
          <div key={row.label} className="flex items-start gap-1.5">
            <div
              className="w-1 h-1 rotate-45 shrink-0 mt-1"
              style={{
                background: "#c89828",
                boxShadow: "0 0 4px rgba(200,152,40,0.5)",
              }}
            />
            <span
              className="font-heading text-[7.5px] tracking-widest uppercase w-13 shrink-0 pt-px"
              style={{ color: "#8a6e28" }}
            >
              {row.label}
            </span>
            <span
              className="font-heading text-[8px] leading-normal"
              style={{ color: "#c8a848" }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      {footer && (
        <div
          className="mt-auto font-heading text-[7px] tracking-[0.18em] uppercase text-center pt-1.5"
          style={{
            color: "#6b5828",
            borderTop: "1px solid rgba(180,140,40,0.2)",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}


interface WowCardProps {
  front?: React.ReactNode;
  back?: React.ReactNode;
  className?: string;
}

export function WowCard({ front, back, className }: WowCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn("wow-card-scene", className)}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className="wow-card-inner"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="wow-card-face wow-card-front">
          <CardShell>{front}</CardShell>
        </div>

        {/* Back */}
        <div className="wow-card-face wow-card-back">
          <CardShell>{back}</CardShell>
        </div>
      </div>
    </div>
  );
}

function CardShell({ children }: { children?: React.ReactNode }) {
  return (
    <div className="wow-card-shell">
      <div className="wow-glow-layer" />
      <div className="wow-shimmer" />
      <div className="wow-frame-outer" />
      <div className="wow-frame-inner" />

      {/* Corners */}
      <div className="wow-corner wow-corner-tl"><CornerOrnament /></div>
      <div className="wow-corner wow-corner-tr"><CornerOrnament /></div>
      <div className="wow-corner wow-corner-bl"><CornerOrnament /></div>
      <div className="wow-corner wow-corner-br"><CornerOrnament /></div>

      <div className="wow-card-content">{children}</div>
    </div>
  );
}