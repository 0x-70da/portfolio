const CornerOrnament = () => (
  <svg
    viewBox="0 0 22 22"
    className="w-full h-full overflow-visible"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20 L2 2 L20 2"
      fill="none"
      style={{ stroke: "var(--alpha-a70)" }}
      strokeWidth="1"
    />
    <rect
      x="0"
      y="0"
      width="6"
      height="6"
      rx="1"
      fill="var(--alpha-ornament-a60)"
      style={{ stroke: "var(--alpha-a70)" }}
      strokeWidth="0.8"
    />
    <circle cx="2" cy="11" r="1.5" style={{ fill: "var(--alpha-a35)" }} />
    <circle cx="11" cy="2" r="1.5" style={{ fill: "var(--alpha-a35)" }} />
  </svg>
);

const CardShell = ({
  children,
  className,
  shimmer,
}: {
  children?: React.ReactNode;
  className?: string;
  shimmer?: boolean;
}) => {
  return (
    <div
      className={`w-full h-full rounded-md relative border border-ink-dark overflow-hidden bg-surface-card shadow-card ${className} ${shimmer ? 'after:content-[""] after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none after:opacity-0 after:transition-opacity after:duration-150 after:bg-sheen after:bg-size-[200%_100%] after:bg-[-100%_0] hover:after:opacity-100 hover:after:animate-[fx-shimmer-sweep_0.8s_ease_forwards]' : ""}`}
    >
      <div />
      {/* Stone texture */}
      <div className="absolute inset-0 rounded-[6px] pointer-events-none z-0 bg-texture-stone-strong" />

      {/* Outer border frame */}
      <div className="absolute pointer-events-none rounded-lg z-10 border border-alpha-a45 inset-1.25" />

      {/* Inner border frame */}
      <div className="absolute pointer-events-none rounded-md z-10 border border-alpha-a15 inset-2" />

      {/* Corner ornaments */}
      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none top-1 left-1">
        <CornerOrnament />
      </div>
      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none top-1 right-1 scale-x-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none bottom-1 left-1 scale-y-[-1]">
        <CornerOrnament />
      </div>
      <div className="absolute w-5.5 h-5.5 z-20 pointer-events-none bottom-1 right-1 scale-[-1]">
        <CornerOrnament />
      </div>

      {/* Content slot */}
      <div className={`relative w-full h-full`}>{children}</div>
    </div>
  );
};

export default CardShell;
