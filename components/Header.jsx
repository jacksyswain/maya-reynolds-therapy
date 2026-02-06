"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y < 120) {
        setHidden(false);
      } else {
        setHidden(y > lastScrollY.current);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER BAR */}
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: hidden ? "-100%" : "0%", opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-olive"
      >
        <div className="max-w-screen-2xl mx-auto px-[6vw] py-[1.3rem] flex items-center justify-between">
          
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-cream text-[28px] leading-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "≡"}
          </button>

          {/* LOGO / NAME */}
          <p className="font-serif text-cream text-[clamp(1.3rem,2vw,1.7rem)] font-medium">
            Dr. Maya Reynolds, PsyD
          </p>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-[2.5vw] text-cream text-[clamp(0.9rem,1vw,1rem)]">
            <a href="#blog" className="hover:opacity-80 transition">
              Blog
            </a>
            <a href="#contact" className="hover:opacity-80 transition">
              Contact
            </a>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-olive flex flex-col items-center justify-center gap-[6vh]"
          >
            <a
              href="#blog"
              className="font-serif text-cream text-[clamp(2rem,6vw,3rem)] hover:opacity-80 transition"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>

            <a
              href="#contact"
              className="font-serif text-cream text-[clamp(2rem,6vw,3rem)] hover:opacity-80 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
