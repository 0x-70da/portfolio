import { WowDivider } from "@/components/wow-components/WowDivider";

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <WowDivider
        gems={1}
        direction="middle"
        backgroundColor="primary"
        length={6}
        className="mb-2.5"
      />
      <h2 className="font-heading text-[22px] font-bold tracking-[0.12em] uppercase leading-none text-primary text-shadow-primary-strong">
        {title}
      </h2>
      <WowDivider
        gems={3}
        direction="middle"
        backgroundColor="primary"
        length="full"
        className="mt-3"
      />
    </div>
  );
}
