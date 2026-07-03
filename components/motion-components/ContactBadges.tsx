"use client";

import { ContactItem } from "@/lib/types";
import { GlowBadge } from "../wow-components/GlowBadge";
import { contactItems } from "@/lib/data.json";
import Gem from "../wow-components/Gem";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { flickerIn, slideFromRight, slideFromLeft } from "@/lib/animations";

const typedContactItems = contactItems as ContactItem[];

const ContactBadges = ({
  slideDirection,
}: {
  slideDirection: "left" | "right";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div className="flex items-center gap-1.5 mb-1">
        <Gem size="xs" backgroundColor="muted" />
        <span className="font-heading text-wow-xs tracking-[0.22em] uppercase text-ink-dark">
          Contact Information
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {typedContactItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={
              slideDirection === "left" ? slideFromLeft : slideFromRight
            }
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i * 0.1}
          >
            <GlowBadge
              icon={item.icon}
              iconsSize="lg"
              variant={item.color}
              className="w-full px-4 py-3"
              corners={false}
            >
              {item.value}
            </GlowBadge>
          </motion.a>
        ))}
      </div>

      <motion.div
        variants={flickerIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <GlowBadge
          variant="success"
          corners={false}
          className="w-full tracking-widest px-4 py-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-success shadow-glow-success-8-a60 animate-pulse" />
          Available for new opportunities
        </GlowBadge>
      </motion.div>
    </div>
  );
};

export default ContactBadges;
