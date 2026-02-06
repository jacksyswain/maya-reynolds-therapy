"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // background toggle
      setScrolled(currentY > 40);

      // keep visible at top
      if (currentY < 120) {
        setHidden(false);
      } else {
        setHidden(currentY > lastScrollY.current);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: hidden ? "-100%" : "0%",
        opacity: 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        sticky top-0 z-50
        transition-colors duration-300
        ${scrolled ? "bg-secondary shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-screen-2xl mx-auto px-[6vw] py-[1.2rem] flex items-center justify-between">
        
        {/* LOGO / NAME */}
        <p className="font-serif text-[clamp(1.3rem,2vw,1.7rem)] font-medium text-textDark">
          Dr. Maya Reynolds, PsyD
        </p>

        {/* NAV */}
        <nav className="flex gap-[2.5vw] text-[clamp(0.9rem,1vw,1rem)]">
          <a
            href="#blog"
            className="hover:opacity-70 transition"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="hover:opacity-70 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
