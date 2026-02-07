"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import RevealItem from "./RevealItem";

const officeImages = [
  "/images/office1.jpeg",
  "/images/office2.jpeg",
];

export default function Office() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      const nextIndex =
        dir === 1
          ? (prev + 1) % officeImages.length
          : (prev - 1 + officeImages.length) % officeImages.length;
      return [nextIndex, dir];
    });
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="bg-extra">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[14vh]
          grid grid-cols-1 lg:grid-cols-2
          gap-[8vh] lg:gap-[6vw]
          items-center
        "
      >
        {/* LEFT — TEXT */}
        <div className="max-w-[42rem]">
          <RevealItem delay={0.05}>
            <h2 className="font-serif text-textDark text-[clamp(2.2rem,3.5vw,3rem)] mb-[4vh]">
              A Calm Space for Healing
            </h2>
          </RevealItem>

          <RevealItem delay={0.1}>
            <p className="text-textDark/80 text-[clamp(1.05rem,1.3vw,1.25rem)] leading-relaxed mb-[3vh]">
              My Santa Monica office is a quiet, private space designed to help you
              feel grounded and supported from the moment you arrive.
            </p>
          </RevealItem>

          <RevealItem delay={0.15}>
            <p className="text-textDark/80 text-[clamp(1.05rem,1.3vw,1.25rem)] leading-relaxed mb-[3vh]">
              Natural light, a comfortable layout, and a calm, uncluttered
              environment help create a sense of safety and ease during sessions.
            </p>
          </RevealItem>

          <RevealItem delay={0.2}>
            <p className="text-textDark/60 text-[0.9rem] uppercase tracking-wide mt-[4vh]">
              Santa Monica, California · In-Person & Telehealth
            </p>
          </RevealItem>
        </div>

        {/* RIGHT — SLIDER */}
        <RevealItem delay={0.12} y={60}>
          <div className="flex flex-col items-center">
            <div
              className="
                relative
                w-[clamp(18rem,32vw,30rem)]
                aspect-square
                bg-sand
                overflow-hidden
                shadow-[0_40px_80px_rgba(0,0,0,0.08)]
              "
            >
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={officeImages[index]}
                    alt="Therapy office interior"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CONTROLS */}
            <div className="flex gap-6 mt-8">
              <button
                onClick={() => paginate(-1)}
                className="
                  border border-textDark
                  px-6 py-3
                  text-[0.85rem]
                  uppercase tracking-widest
                  hover:bg-textDark hover:text-cream
                  transition
                "
              >
                ← Previous
              </button>

              <button
                onClick={() => paginate(1)}
                className="
                  border border-textDark
                  px-6 py-3
                  text-[0.85rem]
                  uppercase tracking-widest
                  hover:bg-textDark hover:text-cream
                  transition
                "
              >
                Next →
              </button>
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
