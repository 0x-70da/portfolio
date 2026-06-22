'use client';

import { hero } from "@/lib/translation.json";
import { motion } from "framer-motion";
import { WowButton } from "../wow-components/WowButton";

const HeroCTAs = () => {
  const ctaDelay = 0.6 + "Mahmoud Abdelnasser".length * 0.03 + 0.5;

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 max-[480px]:flex-col max-[480px]:w-full">
      {[
        {
          variant: "primary",
          icon: "Eye",
          href: "#projects",
          label: hero.ctas.projects,
        },
        {
          variant: "ghost",
          icon: "Mail",
          href: "#contact",
          label: hero.ctas.contact,
        },
        {
          variant: "secondary",
          icon: "BookText",
          href: "/cv.pdf",
          label: hero.ctas.cv,
        },
      ].map((btn, i) => (
        <motion.div
          key={btn.label}
          className="max-[480px]:w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: ctaDelay + i * 0.1,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <WowButton
            variant={btn.variant as "primary" | "ghost" | "secondary"}
            icon={btn.icon as "Eye" | "Mail" | "BookText"}
            href={btn.href}
            className="max-[480px]:w-full"
          >
            {btn.label}
          </WowButton>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroCTAs;
