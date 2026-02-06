"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto change every 2s (plus animation time)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2s hold + 0.5s slide

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-cream min-h-[90vh] flex items-center">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[10vh]
          grid grid-cols-1 lg:grid-cols-2
          gap-[8vh] lg:gap-[6vw]
          items-center
        "
      >
        {/* IMAGE SLIDER */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="
              relative
              w-[clamp(18rem,32vw,30rem)]
              aspect-[3/4]
              rounded-t-[999px]
              overflow-hidden
              bg-sand
              shadow-[0_40px_80px_rgba(0,0,0,0.08)]
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt="Dr. Maya Reynolds, PsyD – Santa Monica therapist"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center lg:text-left max-w-[42rem]">
          <h1
            className="
              font-serif
              text-textDark
              text-[clamp(2.8rem,5.5vw,5.2rem)]
              leading-[1.05]
              mb-[3vh]
            "
          >
            Therapy for Anxiety, Trauma & Burnout
            <br className="hidden sm:block" />
            in Santa Monica, CA
          </h1>

          <p
            className="
              text-textDark/75
              text-[clamp(1.05rem,1.35vw,1.3rem)]
              leading-relaxed
              mb-[5vh]
            "
          >
            Compassionate therapy for adults who feel overwhelmed, emotionally
            exhausted, or stuck in cycles of stress and overthinking.
            Sessions available in-person in Santa Monica and via secure
            telehealth across California.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              className="
                inline-flex items-center gap-3
                bg-olive text-cream
                px-[clamp(2.4rem,3vw,3.2rem)]
                py-[clamp(1rem,1.6vh,1.2rem)]
                text-[clamp(0.9rem,1vw,1rem)]
                tracking-widest uppercase
                hover:bg-textDark
                transition
              "
            >
              Schedule a Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
