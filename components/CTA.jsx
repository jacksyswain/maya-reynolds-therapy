export default function CTA() {
  return (
    <section className="bg-olive">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[14vh]
          text-center
          flex flex-col
          items-center
        "
      >
        {/* HEADING */}
        <h2
          className="
            font-serif
            text-cream
            text-[clamp(2.4rem,3.8vw,3.4rem)]
            leading-tight
            mb-[4vh]
            max-w-[42rem]
          "
        >
          Begin Therapy in Santa Monica, California
        </h2>

        {/* SUBTEXT */}
        <p
          className="
            text-cream/85
            text-[clamp(1.05rem,1.3vw,1.25rem)]
            leading-relaxed
            mb-[6vh]
            max-w-[36rem]
          "
        >
          Whether you’re struggling with anxiety, burnout, or the impact of
          past experiences, therapy can be a supportive space to slow down,
          feel more regulated, and reconnect with yourself.
        </p>

        {/* CTA BUTTON */}
        <button
          className="
            inline-flex items-center gap-3
            border border-cream
            text-cream
            px-[clamp(2.6rem,3.2vw,3.6rem)]
            py-[clamp(1rem,1.6vh,1.2rem)]
            text-[clamp(0.9rem,1vw,1rem)]
            tracking-widest uppercase
            transition
            hover:bg-cream hover:text-olive
          "
        >
          Schedule a Consultation
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
