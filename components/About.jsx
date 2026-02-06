export default function About() {
  return (
    <section className="bg-cream">
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
        {/* TEXT CONTENT */}
        <div className="max-w-[44rem]">
          <h2
            className="
              font-serif
              text-textDark
              text-[clamp(2.2rem,3.5vw,3rem)]
              mb-[4vh]
              leading-tight
            "
          >
            Meet Dr. Maya Reynolds, PsyD
          </h2>

          <p
            className="
              text-textDark/80
              text-[clamp(1.05rem,1.3vw,1.25rem)]
              leading-relaxed
              mb-[3vh]
            "
          >
            I’m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, chronic stress, or the lingering effects of past
            experiences.
          </p>

          <p
            className="
              text-textDark/80
              text-[clamp(1.05rem,1.3vw,1.25rem)]
              leading-relaxed
              mb-[3vh]
            "
          >
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware—yet internally feel exhausted, stuck in overthinking, or
            emotionally on edge. Others are navigating trauma, burnout, or the
            long-term impact of earlier life experiences.
          </p>

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
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              w-[clamp(18rem,32vw,28rem)]
              aspect-[3/4]
              bg-sand
              rounded-t-[999px]
            "
          />
        </div>
      </div>
    </section>
  );
}
