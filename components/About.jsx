import Image from "next/image";
import RevealItem from "./RevealItem";

export default function About() {
  return (
    <section className="bg-cream">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[15vh]
          grid grid-cols-1 lg:grid-cols-2
          gap-[9vh] lg:gap-[7vw]
          items-center
        "
      >
        {/* TEXT CONTENT */}
        <div className="max-w-[46rem]">
          <RevealItem delay={0.05}>
            <h2
              className="
                font-serif
                text-textDark
                text-[clamp(2.4rem,3.8vw,3.2rem)]
                leading-tight
                mb-[4.5vh]
              "
            >
              Meet Dr. Maya Reynolds, PsyD
            </h2>
          </RevealItem>

          <RevealItem delay={0.1}>
            <p
              className="
                text-textDark/85
                text-[clamp(1.1rem,1.35vw,1.3rem)]
                leading-relaxed
                mb-[3.5vh]
              "
            >
              I’m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, chronic stress, or the lingering effects of past
              experiences.
            </p>
          </RevealItem>

          <RevealItem delay={0.15}>
            <p
              className="
                text-textDark/80
                text-[clamp(1.05rem,1.3vw,1.25rem)]
                leading-relaxed
                mb-[3.5vh]
              "
            >
              Many of the people I work with are high-achieving, thoughtful, and
              self-aware—yet internally feel exhausted, stuck in overthinking, or
              emotionally on edge. Others are navigating trauma, burnout, or the
              long-term impact of earlier life experiences.
            </p>
          </RevealItem>

          <RevealItem delay={0.2}>
            <p
              className="
                text-textDark/80
                text-[clamp(1.05rem,1.3vw,1.25rem)]
                leading-relaxed
              "
            >
              My approach is warm, collaborative, and grounded. I integrate
              evidence-based methods such as CBT, EMDR, mindfulness, and
              body-oriented techniques to help clients feel more regulated,
              resilient, and connected to themselves over time.
            </p>
          </RevealItem>
        </div>

        {/* IMAGE — TOP & BOTTOM ARCHED */}
        <RevealItem delay={0.12} y={60}>
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-[clamp(18rem,32vw,28rem)]
                aspect-[3/4]
                rounded-t-[999px]
                rounded-b-[999px]
                overflow-hidden
                shadow-[0_40px_80px_rgba(0,0,0,0.08)]
                bg-sand
              "
            >
              <Image
                src="/images/Dr.Maya.png"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 80vw"
              />
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
