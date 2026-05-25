"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CardShell from "./CardShell";
import Gem from "./Gem";

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
      <div className="w-full text-center pb-2.5 mb-2.5 border-b border-alpha-a30">
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-muted">
          {role}
        </p>
        <p className="font-heading text-sm font-bold tracking-[0.08em] leading-tight mt-0.5 text-primary text-shadow-primary-strong">
          {name}
        </p>
      </div>

      {/* Photo */}
      <div className="w-37 h-37 mx-auto rounded-lg mb-2.5 overflow-hidden flex items-center justify-center bg-stone-1 border border-alpha-a50 shadow-photo-frame">
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
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-photo-placeholder border border-alpha-a30">
            <div className="w-9 h-9 rounded-full bg-alpha-a20 border border-alpha-a30" />
          </div>
        )}
      </div>

      {/* Title row */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <Gem size="xs" backgroundColor="muted" />
        <Gem size="small" />
        <span className="font-heading text-md tracking-[0.12em] uppercase text-accent">
          {title}
        </span>
        <Gem size="small" />
        <Gem size="xs" backgroundColor="muted" />
      </div>

      {/* Divider */}
      <div className="w-full h-px my-1.5 bg-line-primary-strong" />

      {/* Stats */}
      <div className="flex justify-between w-full px-0.5 mt-1">
        {stats.map((stat, i) => (
          <>
            {i > 0 && (
              <div key={`sep-${i}`} className="w-px my-0.5 bg-alpha-a20" />
            )}
            <div key={stat.label} className="flex-1 text-center">
              <div className="font-heading text-base font-bold leading-none text-primary text-shadow-primary-soft">
                {stat.value}
              </div>
              <div className="font-heading text-3xs tracking-[0.12em] uppercase mt-0.5 text-ink">
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

export function WowCardBack({ title, quote, info, footer }: WowCardBackProps) {
  return (
    <div className="w-full flex flex-col gap-2.5">
      {/* Title */}
      <div className="font-heading text-xs font-bold tracking-widest text-center pb-2 text-primary text-shadow-primary border-b border-alpha-a30">
        {title}
      </div>

      {/* Lore quote */}
      <p className="font-heading text-xs-plus leading-[1.7] text-center italic tracking-[0.04em] px-1 text-muted-soft">
        {quote}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-line-primary-strong" />

      {/* Info grid */}
      <div className="flex flex-col gap-1.5">
        {info.map((row) => (
          <div key={row.label} className="flex items-start gap-1.5">
            <div className="w-1 h-1 rotate-45 shrink-0 mt-1 bg-accent shadow-glow-subtle" />
            <span className="font-heading text-2xs tracking-widest uppercase w-13 shrink-0 pt-px text-muted">
              {row.label}
            </span>
            <span className="font-heading text-xs leading-normal text-soft">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      {footer && (
        <div className="mt-auto font-heading text-3xs tracking-[0.18em] uppercase text-center pt-1.5 text-ink border-t border-alpha-a20">
          {footer}
        </div>
      )}
    </div>
  );
}

interface WowCardProps {
  front?: React.ReactNode;
  back?: React.ReactNode;
  shimmer?: boolean;
  className?: string;
}

export function WowCard({ front, back, shimmer, className }: WowCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn(
        "perspective-[1000px] cursor-pointer w-75 h-100",
        className,
      )}
      onClick={() => setFlipped((prev) => (back ? !prev : false))}
    >
      <div
        className="w-full h-full relative transform-3d transition-transform duration-[0.75s] ease-in-out"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-md">
          <CardShell className="p-4" shimmer={shimmer}>
            {front}
          </CardShell>
        </div>

        {/* Back */}
        {back && (
          <div className="absolute inset-0 backface-hidden rounded-md transform-[rotateY(180deg)]">
            <CardShell className="p-4" shimmer={shimmer}>
              {back}
            </CardShell>
          </div>
        )}
      </div>
    </div>
  );
}
