
export default function Intro() {
  return (
    <section className="bg-secondary min-h-[100vh] flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-[6vw] flex flex-col justify-between">
        <h2 className="font-serif text-primary text-4xl">
          You don’t have to keep pushing through alone.
        </h2>
        <button className="border-t border-primary py-6 uppercase tracking-widest">
          Get in Touch →
        </button>
      </div>
      <div className="lg:w-1/2 bg-accent" />
    </section>
  );
}
