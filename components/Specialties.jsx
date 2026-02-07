import RevealItem from "./RevealItem";

export default function Specialties() {
  return (
    <section className="bg-cream py-[14vh]">
      <div className="max-w-screen-2xl mx-auto px-[6vw]">

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
            Areas of Focus
          </h2>
        </RevealItem>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3vw]">

          {/* CARD 1 — ANXIETY */}
          <RevealItem delay={0.15}>
            <div
              className="
               group
    relative
    overflow-hidden
    bg-extra
    p-[3.2vw]
    min-h-[52vh]
    h-full
    flex flex-col
    border border-textDark/30
              "
            >
              <div
                className="
                  absolute inset-0
                  bg-olive
                  origin-bottom
                  scale-y-0
                  group-hover:scale-y-100
                  transition-transform
                  duration-[1000ms]
                  ease-out
                  z-0
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    font-serif
                    text-[clamp(1.7rem,2.2vw,2rem)]
                    mb-[3vh]
                    text-textDark
                    group-hover:text-cream
                    transition-colors
                    duration-300
                  "
                >
                  Anxiety & Panic
                </h3>

                <p
                  className="
                    text-textDark/80
                    leading-relaxed
                    text-[clamp(1.05rem,1.25vw,1.2rem)]
                    group-hover:text-cream/90
                    transition-colors
                    duration-300
                  "
                >
                  Chronic worry, racing thoughts, panic symptoms, and constant
                  tension can leave you feeling on edge and exhausted. Therapy
                  focuses on understanding both emotional patterns and nervous
                  system responses, helping you feel calmer and more grounded
                  in daily life.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* CARD 2 — TRAUMA */}
          <RevealItem delay={0.25}>
            <div
              className="
                group
    relative
    overflow-hidden
    bg-extra
    p-[3.2vw]
    min-h-[52vh]
    h-full
    flex flex-col
    border border-textDark/30
              "
            >
              <div
                className="
                  absolute inset-0
                  bg-olive
                  origin-bottom
                  scale-y-0
                  group-hover:scale-y-100
                  transition-transform
                  duration-[1000ms]
                  ease-out
                  z-0
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    font-serif
                    text-[clamp(1.7rem,2.2vw,2rem)]
                    mb-[3vh]
                    text-textDark
                    group-hover:text-cream
                    transition-colors
                    duration-300
                  "
                >
                  Trauma & Recovery
                </h3>

                <p
                  className="
                    text-textDark/80
                    leading-relaxed
                    text-[clamp(1.05rem,1.25vw,1.2rem)]
                    group-hover:text-cream/90
                    transition-colors
                    duration-300
                  "
                >
                  Past experiences—whether single events or long-standing
                  patterns—can continue to affect your sense of safety,
                  relationships, and self-trust. Trauma work is paced carefully,
                  with an emphasis on stabilization, regulation, and restoring
                  a sense of control.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* CARD 3 — BURNOUT */}
          <RevealItem delay={0.35}>
            <div
              className="
                group
    relative
    overflow-hidden
    bg-extra
    p-[3.2vw]
    min-h-[52vh]
    h-full
    flex flex-col
    border border-textDark/30
              "
            >
              <div
                className="
                  absolute inset-0
                  bg-olive
                  origin-bottom
                  scale-y-0
                  group-hover:scale-y-100
                  transition-transform
                  duration-[1000ms]
                  ease-out
                  z-0
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    font-serif
                    text-[clamp(1.7rem,2.2vw,2rem)]
                    mb-[3vh]
                    text-textDark
                    group-hover:text-cream
                    transition-colors
                    duration-300
                  "
                >
                  Burnout & High Pressure
                </h3>

                <p
                  className="
                    text-textDark/80
                    leading-relaxed
                    text-[clamp(1.05rem,1.25vw,1.2rem)]
                    group-hover:text-cream/90
                    transition-colors
                    duration-300
                  "
                >
                  Long-term stress, perfectionism, and professional pressure can
                  lead to emotional exhaustion and disconnection. Therapy becomes
                  a space to slow down, reconnect with yourself, and develop more
                  sustainable ways of living and working.
                </p>
              </div>
            </div>
          </RevealItem>

        </div>
      </div>
    </section>
  );
}
