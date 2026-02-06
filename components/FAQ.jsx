"use client";

import { useState } from "react";

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
          py-[12vh]
        "
      >
        {/* HEADING */}
        <h2
          className="
            font-serif
            text-textDark
            text-[clamp(2.2rem,3.5vw,3rem)]
            mb-[8vh]
            text-center
          "
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="max-w-[52rem] mx-auto border-t border-textDark/30">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b border-textDark/30"
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="
                  w-full
                  py-[4vh]
                  flex items-start
                  gap-[2rem]
                  text-left
                "
              >
                {/* PLUS / MINUS ICON */}
                <span
                  className="
                    text-[2.4rem]
                    leading-none
                    text-textDark
                    font-light
                    mt-[-0.2rem]
                  "
                >
                  {open === i ? "−" : "+"}
                </span>

                {/* QUESTION TEXT */}
                <span
                  className="
                    font-serif
                    text-textDark
                    text-[clamp(1.6rem,2.4vw,2rem)]
                    leading-snug
                  "
                >
                  {item.q}
                </span>
              </button>

              {/* ANSWER */}
              {open === i && (
                <div className="pl-[4.4rem] pb-[4vh]">
                  <p
                    className="
                      text-textDark/80
                      text-[clamp(1.05rem,1.3vw,1.2rem)]
                      leading-relaxed
                    "
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
