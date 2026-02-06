import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-extra">
      <div className="min-h-[100vh] flex flex-col-reverse lg:flex-row">

        {/* TEXT — LEFT ON DESKTOP */}
        <div
          className="
            relative
            w-full lg:w-1/2
            px-[6vw]
            pt-[10vh]
            pb-[14vh]
            flex flex-col
            justify-between
          "
        >
          {/* CONTENT */}
          <div className="max-w-[42rem]">
            <h2
              className="
                font-serif
                text-textDark
                text-[clamp(2.4rem,4vw,3.4rem)]
                leading-tight
                mb-[4vh]
              "
            >
              You don’t have to keep pushing through alone.
            </h2>

            <p
              className="
                text-textDark/80
                text-[clamp(1.05rem,1.3vw,1.25rem)]
                leading-relaxed
                mb-[3vh]
              "
            >
              Many high-achieving, thoughtful adults appear “fine” on the
              outside while quietly feeling overwhelmed by anxiety, stress,
              or emotional exhaustion.
            </p>

            <p
              className="
                text-textDark/80
                text-[clamp(1.05rem,1.3vw,1.25rem)]
                leading-relaxed
              "
            >
              Therapy can be a space to slow down, feel supported, and
              understand both the emotional and physical patterns that keep
              you stuck.
            </p>
          </div>

          {/* BOTTOM CTA */}
          <button
            className="
              absolute bottom-0 left-0
              w-full
              border-t border-textDark
              py-[4vh]
              text-textDark
              uppercase tracking-widest
              text-[clamp(0.9rem,1vw,1rem)]
              hover:bg-olive hover:text-cream
              transition
            "
          >
            Get in Touch →
          </button>
        </div>

        {/* IMAGE — RIGHT ON DESKTOP / TOP ON MOBILE */}
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[100vh] relative">
          <div className="absolute inset-0">
            <Image
              src="/images/intro.png"   // ← replace with real image
              alt="Calm, grounding therapy space in Santa Monica"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* OPTIONAL subtle overlay for contrast */}
          <div className="absolute inset-0 bg-sand/20" />
        </div>

      </div>
    </section>
  );
}
