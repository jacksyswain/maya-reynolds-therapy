export default function Specialties() {
  return (
    <section className="bg-cream py-[14vh]">
      <div className="max-w-screen-2xl mx-auto px-[6vw]">

        {/* HEADING */}
        <h2
          className="
            font-serif
            text-textDark
            text-center
            text-[clamp(2.2rem,3.5vw,3rem)]
            mb-[10vh]
          "
        >
          Areas of Focus
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3vw]">

          {/* ANXIETY */}
          <div
            className="
              bg-extra
              border border-textDark/40
              p-[3vw]
              min-h-[50vh]
              flex flex-col
            "
          >
            <h3 className="font-serif text-[clamp(1.6rem,2vw,1.9rem)] mb-[3vh]">
              Anxiety
            </h3>

            <p className="text-textDark/80 leading-relaxed text-[clamp(1rem,1.2vw,1.15rem)]">
              Ongoing worry, racing thoughts, and physical tension can make it
              difficult to feel calm or present. Therapy focuses on understanding
              both emotional patterns and nervous system responses.
            </p>
          </div>

          {/* TRAUMA */}
          <div
            className="
              bg-extra
              border border-textDark/40
              p-[3vw]
              min-h-[50vh]
              flex flex-col
            "
          >
            <h3 className="font-serif text-[clamp(1.6rem,2vw,1.9rem)] mb-[3vh]">
              Trauma
            </h3>

            <p className="text-textDark/80 leading-relaxed text-[clamp(1rem,1.2vw,1.15rem)]">
              Past experiences can continue to impact how you feel in your body,
              relationships, and sense of safety. Trauma work is paced carefully
              with an emphasis on stabilization and regulation.
            </p>
          </div>

          {/* BURNOUT */}
          <div
            className="
              bg-extra
              border border-textDark/40
              p-[3vw]
              min-h-[50vh]
              flex flex-col
            "
          >
            <h3 className="font-serif text-[clamp(1.6rem,2vw,1.9rem)] mb-[3vh]">
              Burnout
            </h3>

            <p className="text-textDark/80 leading-relaxed text-[clamp(1rem,1.2vw,1.15rem)]">
              Long-term stress, high internal pressure, and overworking can lead
              to exhaustion and disconnection. Therapy becomes a space to slow
              down and rebuild sustainable ways of living.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
