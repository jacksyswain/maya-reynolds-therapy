export default function Hero() {
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
        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="
              w-[clamp(16rem,30vw,28rem)]
              aspect-[3/4]
              bg-sand
              rounded-t-[999px]
            "
          />
        </div>

        {/* CONTENT */}
        <div className="text-center lg:text-left max-w-[40rem]">
          <h1
            className="
              font-serif
              text-textDark
              text-[clamp(2.6rem,5vw,4.8rem)]
              leading-[1.1]
              mb-[4vh]
            "
          >
            Therapy for Anxiety, Trauma & Burnout
            <br className="hidden sm:block" />
            in Santa Monica, CA
          </h1>

          <p
            className="
              text-textDark/80
              text-[clamp(1.05rem,1.3vw,1.25rem)]
              leading-relaxed
              mb-[5vh]
            "
          >
            Support for adults who feel overwhelmed, emotionally exhausted,
            or stuck in cycles of stress and overthinking. A grounded,
            collaborative approach to help you feel more regulated and at ease.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              className="
                inline-flex items-center gap-3
                border border-olive
                text-olive
                px-[clamp(2.2rem,3vw,3rem)]
                py-[clamp(0.9rem,1.4vh,1.1rem)]
                text-[clamp(0.9rem,1vw,1rem)]
                tracking-widest uppercase
                hover:bg-olive hover:text-cream
                transition
              "
            >
              Schedule a Consultation
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
