"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Stat {
  label: string;
  value: string;
}

interface InfoRow {
  label: string;
  value: string;
}

interface ProfileFlipCardProps {
  name: string;
  role: string;
  title: string;
  stats: Stat[];
  imageSrc?: string;
  backTitle: string;
  backQuote: string;
  backInfo: InfoRow[];
  backFooter?: string;
  className?: string;
}

// ── Corner ornament ───────────────────────────────────────────────────────────

function CornerOrnament({ back = false }: { back?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 22 L2 2 L22 2"
        fill="none"
        stroke="var(--alpha-a70)"
        strokeWidth="1"
      />
      <rect
        x="0"
        y="0"
        width="7"
        height="7"
        rx="1"
        fill="var(--alpha-ornament-a60)"
        stroke="var(--alpha-a70)"
        strokeWidth="0.8"
      />
      {!back && (
        <>
          <circle cx="2" cy="12" r="1.5" fill="var(--alpha-a30)" />
          <circle cx="12" cy="2" r="1.5" fill="var(--alpha-a30)" />
        </>
      )}
    </svg>
  );
}

// ── Card shell (shared between front & back) ──────────────────────────────────

function CardShell({
  children,
  back = false,
}: {
  children: React.ReactNode;
  back?: boolean;
}) {
  return (
    <div className="pfc-shell">
      {/* glow + shimmer */}
      <div className="pfc-glow" />
      {!back && <div className="pfc-shimmer" />}

      {/* border frames */}
      <div className="pfc-frame pfc-frame-outer" />
      <div className="pfc-frame pfc-frame-inner" />

      {/* corners */}
      <div className="pfc-corner pfc-corner-tl">
        <CornerOrnament back={back} />
      </div>
      <div className="pfc-corner pfc-corner-tr">
        <CornerOrnament back={back} />
      </div>
      <div className="pfc-corner pfc-corner-bl">
        <CornerOrnament back={back} />
      </div>
      <div className="pfc-corner pfc-corner-br">
        <CornerOrnament back={back} />
      </div>

      {children}
    </div>
  );
}

// ── Front face ────────────────────────────────────────────────────────────────

function FrontFace({
  name,
  role,
  title,
  stats,
  imageSrc,
}: Pick<
  ProfileFlipCardProps,
  "name" | "role" | "title" | "stats" | "imageSrc"
>) {
  return (
    <CardShell>
      <div className="pfc-content">
        {/* header */}
        <div className="pfc-header">
          <p className="pfc-class">{role}</p>
          <p className="pfc-name">{name}</p>
        </div>

        {/* photo */}
        <div className="pfc-photo-wrap">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="160px"
            />
          ) : (
            <div className="pfc-photo-placeholder">
              <div className="pfc-photo-inner" />
            </div>
          )}
        </div>

        {/* title row */}
        <div className="pfc-title-row">
          <span className="pfc-gem-sm" />
          <span className="pfc-gem" />
          <span className="pfc-role">{title}</span>
          <span className="pfc-gem" />
          <span className="pfc-gem-sm" />
        </div>

        {/* divider */}
        <div className="pfc-divider" />

        {/* stats */}
        <div className="pfc-stats">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center flex-1">
              {i > 0 && <div className="pfc-stat-sep" />}
              <div className="pfc-stat">
                <div className="pfc-stat-val">{stat.value}</div>
                <div className="pfc-stat-lbl">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* flip hint */}
      <div className="pfc-hint">✦ Click to reveal ✦</div>
    </CardShell>
  );
}

// ── Back face ─────────────────────────────────────────────────────────────────

function BackFace({
  backTitle,
  backQuote,
  backInfo,
  backFooter,
}: Pick<
  ProfileFlipCardProps,
  "backTitle" | "backQuote" | "backInfo" | "backFooter"
>) {
  return (
    <CardShell back>
      <div className="pfc-back-content">
        <div className="pfc-back-title">{backTitle}</div>

        <p className="pfc-lore">{backQuote}</p>

        <div className="pfc-divider" />

        <div className="flex flex-col gap-2">
          {backInfo.map((row) => (
            <div key={row.label} className="pfc-info-row">
              <span className="pfc-info-gem" />
              <span className="pfc-info-label">{row.label}</span>
              <span className="pfc-info-value">{row.value}</span>
            </div>
          ))}
        </div>

        {backFooter && <div className="pfc-back-footer">✦ {backFooter} ✦</div>}
      </div>
    </CardShell>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function ProfileFlipCard({
  name,
  role,
  title,
  stats,
  imageSrc,
  backTitle,
  backQuote,
  backInfo,
  backFooter,
  className,
}: ProfileFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn("pfc-scene", className)}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className="pfc-inner"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* front */}
        <div className="pfc-face">
          <FrontFace
            name={name}
            role={role}
            title={title}
            stats={stats}
            imageSrc={imageSrc}
          />
        </div>

        {/* back */}
        <div className="pfc-face pfc-face-back">
          <BackFace
            backTitle={backTitle}
            backQuote={backQuote}
            backInfo={backInfo}
            backFooter={backFooter}
          />
        </div>
      </div>
    </div>
  );
}
