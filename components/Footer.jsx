export default function Footer() {
  return (
    <footer className="bg-cream">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[8vh]
          border-t border-textDark/30
          text-center
        "
      >
        {/* NAME */}
        <p className="font-serif text-textDark text-[clamp(1.1rem,1.4vw,1.3rem)] mb-2">
          Dr. Maya Reynolds, PsyD
        </p>

        {/* LOCATION */}
        <p className="text-textDark/70 text-[clamp(0.9rem,1vw,1rem)] mb-4">
          Licensed Clinical Psychologist · Santa Monica, California
        </p>

        {/* COPYRIGHT */}
        <p className="text-textDark/60 text-[0.85rem]">
          © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
