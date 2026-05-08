function TopOrnament() {
  return (
    <div className="flex items-center gap-2 mb-2.5">
      <div
        className="w-12 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(180,140,40,0.5))",
        }}
      />
      <div
        className="w-0.75 h-0.75 rounded-full shrink-0"
        style={{ background: "rgba(180,140,40,0.45)" }}
      />
      <div
        className="w-1.5 h-1.5 rotate-45 shrink-0"
        style={{
          background: "#c89828",
          boxShadow: "0 0 8px rgba(200,152,40,0.7)",
        }}
      />
      <div
        className="w-0.75 h-0.75 rounded-full shrink-0"
        style={{ background: "rgba(180,140,40,0.45)" }}
      />
      <div
        className="w-12 h-px"
        style={{
          background: "linear-gradient(90deg, rgba(180,140,40,0.5), transparent)",
        }}
      />
    </div>
  );
}

function BottomDivider() {
  return (
    <div className="flex items-center w-full mt-3">
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,140,40,0.4) 50%, transparent)",
        }}
      />
      <div className="flex items-center gap-1.5 px-2.5 shrink-0">
        <div
          className="w-1 h-1 rotate-45 shrink-0"
          style={{ background: "rgba(200,152,40,0.5)" }}
        />
        <div
          className="w-1.5 h-1.5 rotate-45 shrink-0"
          style={{
            background: "#c89828",
            boxShadow: "0 0 6px rgba(200,152,40,0.6)",
          }}
        />
        <div
          className="w-1 h-1 rotate-45 shrink-0"
          style={{ background: "rgba(200,152,40,0.5)" }}
        />
      </div>
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,140,40,0.4) 50%, transparent)",
        }}
      />
    </div>
  );
}

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <TopOrnament />
      <h2
        className="font-heading text-[22px] font-bold tracking-[0.12em] uppercase leading-none"
        style={{
          color: "#d4a830",
          textShadow:
            "0 0 24px rgba(212,168,48,0.35), 0 0 2px rgba(212,168,48,0.2)",
        }}
      >
        {title}
      </h2>
      <BottomDivider />
    </div>
  );
}