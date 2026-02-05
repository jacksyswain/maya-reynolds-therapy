
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const last = useRef(0);
  const [hide, setHide] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      if (y < 120) return setHide(false);
      setHide(y > last.current);
      last.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header animate={{ y: hide ? "-100%" : "0%" }} className={solid ? "bg-secondary sticky top-0 z-50" : "bg-transparent sticky top-0 z-50"}>
      <div className="max-w-screen-2xl mx-auto px-[6vw] py-4 flex justify-between">
        <p className="font-serif text-2xl">Dr. Maya Reynolds, PsyD</p>
        <nav className="flex gap-6"><a>Blog</a><a>Contact</a></nav>
      </div>
    </motion.header>
  );
}
