export default function Footer() {
  return (
    <footer className="bg-cream">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          pt-[10vh]
          pb-[6vh]
          border-t border-textDark/30
        "
      >
        {/* TOP ROW */}
        <div
          className="
            flex flex-col
            md:flex-row
            justify-between
            items-start
            gap-[6vh]
            mb-[6vh]
          "
        >
          {/* LEFT — NAME & LOCATION */}
          <div className="max-w-[28rem]">
            <p
              className="
                font-serif
                text-textDark
                text-[clamp(1.2rem,1.6vw,1.4rem)]
                mb-[1vh]
              "
            >
              Dr. Maya Reynolds, PsyD
            </p>

            <p
              className="
                text-textDark/70
                text-[clamp(0.95rem,1.1vw,1.05rem)]
                leading-relaxed
              "
            >
              Licensed Clinical Psychologist
              <br />
              Santa Monica, California
            </p>
          </div>

          {/* RIGHT — PRACTICE DETAILS */}
          <div className="max-w-[28rem] md:text-right">
            <p
              className="
                text-textDark/70
                text-[clamp(0.95rem,1.1vw,1.05rem)]
                leading-relaxed
              "
            >
              In-person therapy in Santa Monica
              <br />
              Secure telehealth sessions available
              <br />
              for adults across California
            </p>
          </div>
        </div>

        {/* BOTTOM — COPYRIGHT */}
        <div className="text-center">
          <p
            className="
              text-textDark/50
              text-[0.8rem]
              tracking-wide
            "
          >
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
