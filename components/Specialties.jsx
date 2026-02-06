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
            text-[clamp(2.3rem,3.8vw,3.2rem)]
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
              p-[3.2vw]
              min-h-[52vh]
              flex flex-col
              border border-textDark/30
            "
          >
            <h3 className="font-serif text-[clamp(1.7rem,2.2vw,2rem)] mb-[3vh]">
              Anxiety & Panic
            </h3>

            <p className="text-textDark/80 leading-relaxed text-[clamp(1.05rem,1.25vw,1.2rem)]">
              Chronic worry, racing thoughts, panic symptoms, and constant
              tension can leave you feeling on edge and exhausted. Therapy
              focuses on understanding both emotional patterns and nervous
              system responses, helping you feel calmer and more grounded
              in daily life.
            </p>
          </div>

          {/* TRAUMA */}
          <div
            className="
              bg-extra
              p-[3.2vw]
              min-h-[52vh]
              flex flex-col
              border border-textDark/30
            "
          >
            <h3 className="font-serif text-[clamp(1.7rem,2.2vw,2rem)] mb-[3vh]">
              Trauma & Recovery
            </h3>

            <p className="text-textDark/80 leading-relaxed text-[clamp(1.05rem,1.25vw,1.2rem)]">
              Past experiences—whether single events or long-standing patterns—
              can continue to affect your sense of safety, relationships, and
              self-trust. Trauma work is paced carefully, with an emphasis on
              stabilization, regulation, and restoring a sense of control.
            </p>
          </div>

          {/* BURNOUT */}
          <div
            className="
              bg-extra
              p-[3.2vw]
              min-h-[52vh]
              flex flex-col
              border border-textDark/30
            "
          >
            <h3 className="font-serif text-[clamp(1.7rem,2.2vw,2rem)] mb-[3vh]">
              Burnout & High Pressure
            </h3>

            <p className="text-textDark/80 leading-relaxed text-[clamp(1.05rem,1.25vw,1.2rem)]">
              Long-term stress, perfectionism, and professional pressure can
              lead to emotional exhaustion and disconnection. Therapy becomes
              a space to slow down, reconnect with yourself, and develop more
              sustainable ways of living and working.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
