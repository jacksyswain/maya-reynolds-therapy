"use client";

import { useState } from "react";
import RevealItem from "./RevealItem";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "I do not accept insurance directly. However, I can provide superbills for clients who wish to seek out-of-network reimbursement from their insurance provider.",
  },
  {
    q: "What issues do you specialize in?",
    a: "I specialize in working with adults experiencing anxiety, panic, trauma, burnout, and chronic stress—especially high-achieving professionals who feel emotionally exhausted or overwhelmed.",
  },
  {
    q: "Do you offer virtual sessions?",
    a: "Yes. I offer both in-person therapy at my Santa Monica office and secure telehealth sessions for clients located anywhere in California.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-cream">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[14vh]
        "
      >
        {/* HEADING */}
        <RevealItem delay={0.05}>
          <h2
            className="
              font-serif
              text-textDark
              text-center
              text-[clamp(2.3rem,3.8vw,3.2rem)]
              mb-[10vh]
            "
          >
            Frequently Asked Questions
          </h2>
        </RevealItem>

        {/* FAQ LIST */}
        <div className="max-w-[56rem] mx-auto border-t border-textDark/30">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <RevealItem key={i} delay={0.1 + i * 0.08}>
                <div
                  className="
                    relative
                    overflow-hidden
                    border-b border-textDark/30
                  "
                >
                  {/* LEFT → RIGHT FILL */}
                  <div
                    className={`
                      absolute inset-0
                      bg-olive
                      origin-left
                      scale-x-0
                      transition-transform
                      duration-[1000ms]
                      ease-out
                      z-0
                      ${isOpen ? "scale-x-100" : ""}
                    `}
                  />

                  {/* CONTENT */}
                  <div className="relative z-10">
                    {/* QUESTION */}
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="
                        w-full
                        py-[4vh]
                        flex items-start
                        gap-[2rem]
                        text-left
                      "
                    >
                      {/* ICON */}
                      <span
                        className={`
                          text-[2.6rem]
                          leading-none
                          font-light
                          transition-colors
                          duration-300
                          ${isOpen ? "text-cream" : "text-textDark"}
                        `}
                      >
                        {isOpen ? "−" : "+"}
                      </span>

                      {/* QUESTION TEXT */}
                      <span
                        className={`
                          font-serif
                          text-[clamp(1.6rem,2.4vw,2rem)]
                          leading-snug
                          transition-colors
                          duration-300
                          ${isOpen ? "text-cream" : "text-textDark"}
                        `}
                      >
                        {item.q}
                      </span>
                    </button>

                    {/* ANSWER */}
                    {isOpen && (
                      <div className="pl-[4.6rem] pb-[4vh]">
                        <p
                          className="
                            text-cream/90
                            text-[clamp(1.05rem,1.3vw,1.2rem)]
                            leading-relaxed
                          "
                        >
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
