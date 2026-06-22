"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ShatteredName() {
  const firstName = "Mahmoud";
  const lastName = "Abdelnasser";
  const allChars = [...firstName, ...lastName];

  const positions = useMemo(
    () =>
      allChars.map((_, i) => ({
        x: i % 2 === 0 ? -100 : 100,
        y: i % 3 === 0 ? -60 : 60,
        rotate: i % 2 === 0 ? -35 : 35,
      })),
    [],
  );

  let globalIndex = 0;

  const renderWord = (word: string, offset: number) =>
    word.split("").map((char, i) => (
      <motion.span
        key={`${word}-${i}`}
        className="inline-block"
        initial={{
          opacity: 0,
          x: positions[offset + i].x,
          y: positions[offset + i].y,
          rotate: positions[offset + i].rotate,
          scale: 0.3,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: [0.3, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 0.7,
          delay: 0.6 + (offset + i) * 0.04,
          ease: [0.2, 0, 0.2, 1],
        }}
      >
        {char}
      </motion.span>
    ));

  globalIndex = firstName.length + lastName.length;

  return (
    <div className="relative inline-block">
      <motion.h1
        className="
          relative
          font-heading
          text-[clamp(36px,5vw,56px)]
          font-black
          tracking-[0.06em]
          uppercase
          text-primary
          leading-none
        "
      >
        <div>{renderWord(firstName, 0)}</div>

        <div>{renderWord(lastName, firstName.length)}</div>

        <motion.span
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: [0, 0, 1, 0],
            scale: [0.7, 1.25, 1.6],
          }}
          transition={{
            duration: 2,
            delay: 1 + globalIndex * 0.04 + 0.1,
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,48,0.45) 0%, rgba(212,168,48,0.2) 35%, transparent 75%)",
            filter: "blur(30px)",
          }}
        />
      </motion.h1>
    </div>
  );
}
