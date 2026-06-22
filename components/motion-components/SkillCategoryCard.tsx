"use client";

import { SkillCategory } from "@/lib/types";
import CardShell from "../wow-components/CardShell";
import { getIcon } from "@/lib/getIcon";
import { WowDivider } from "../wow-components/WowDivider";
import { GlowBadge } from "../wow-components/GlowBadge";
import { motion, useInView } from "framer-motion";
import { fadeIn, slideFromLeft, slideFromRight } from "@/lib/animations";
import { useRef } from "react";

const directionVariant = (index: number) =>
  index % 2 === 0 ? slideFromLeft : slideFromRight;

export default function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={directionVariant(index)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.1}
    >
      <CardShell>
        <div className="relative w-full h-full z-20 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[3px] border border-alpha-a20 bg-black-a40 flex items-center justify-center shrink-0 text-primary">
              {getIcon(category.icon, { className: "w-6 h-6 shrink-0" })}
            </div>
            <div>
              <div className="font-heading text-wow-md font-bold tracking-widest uppercase text-primary">
                {category.title}
              </div>
              <div className="font-heading text-wow-xs tracking-[0.22em] uppercase text-ink-dark">
                {category.subtitle}
              </div>
            </div>
          </div>

          <WowDivider
            backgroundColor="muted-strong"
            gems={0}
            noGradient={true}
            thickness={0.5}
          />

          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.14,
                  delayChildren: 0.2 + index * 0.1,
                },
              },
            }}
          >
            {category.skills.map((skill) => (
              <motion.div
                key={skill.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                }}
              >
                <GlowBadge
                  label={skill.label}
                  icon={getIcon(skill.label, {
                    className: "w-[14px] h-[14px] shrink-0",
                  })}
                  variant={skill.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </CardShell>
    </motion.div>
  );
}
