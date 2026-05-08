function Dot() {
  return (
    <div
      className="w-0.75 h-0.75 rounded-full shrink-0"
      style={{ background: "rgba(180,140,40,0.4)" }}
    />
  );
}

function GemSm() {
  return (
    <div
      className="w-1 h-1 rotate-45 shrink-0"
      style={{ background: "rgba(200,152,40,0.5)" }}
    />
  );
}

function GemMain() {
  return (
    <div
      className="w-1.75 h-1.75 rotate-45 shrink-0"
      style={{
        background: "#c89828",
        boxShadow: "0 0 8px rgba(200,152,40,0.7)",
      }}
    />
  );
}

function DividerLine() {
  return (
    <div className="wow-divider-line flex-1 h-px relative" />
  );
}

export function WowDivider() {
  return (
    <div className="flex items-center w-full">
      <DividerLine />

      <div className="flex items-center gap-2 px-3 shrink-0">
        <Dot />
        <GemSm />
        <GemMain />
        <GemSm />
        <Dot />
      </div>

      <DividerLine />
    </div>
  );
}