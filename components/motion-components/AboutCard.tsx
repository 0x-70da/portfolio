'use client';

import CardShell from "../wow-components/CardShell";
import Gem from "../wow-components/Gem";
import { about } from "@/lib/translation.json";
import { factItems } from "@/lib/data.json";
import WowDivider from "../wow-components/WowDivider";
import { getIcon } from "@/lib/getIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "@/lib/animations";

export default function AboutCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={0}
    >
    <CardShell>
      <div className="relative w-full h-full z-20 p-7">
        <div className="mb-4.5 pb-3.5 border-b border-alpha-a20">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Gem size="xs" backgroundColor="muted" />
            <span className="font-heading text-2xs tracking-[0.22em] uppercase text-ink-dark">
              {about.header}
            </span>
          </div>

          <h3 className="font-heading text-3xl font-bold tracking-widest uppercase text-primary text-shadow-primary-soft">
            {about.title}
          </h3>
        </div>

        <div className="space-y-4">
          {about.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className="font-heading text-xs-plus leading-loose text-body-muted tracking-wider italic"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <WowDivider backgroundColor="muted" className="my-4" />

        <div className="flex flex-col gap-2.5 mt-4">
          {factItems.map((fact) => (
            <div key={fact.label} className="flex items-start gap-2.5">
              <div className="text-accent w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center">
                {getIcon(fact.icon, { className: "w-4 h-4 shrink-0" })}
              </div>
              <span className="font-heading text-2xs tracking-[0.14em] uppercase text-ink-light w-18 shrink-0 pt-0.5">
                {fact.label}
              </span>
              <span className="font-heading text-wow-sm text-soft tracking-wider leading-[1.6] ml-1">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CardShell>
    </motion.div>
  );
}