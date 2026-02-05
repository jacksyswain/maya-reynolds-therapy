
export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-screen-2xl mx-auto px-[6vw] grid lg:grid-cols-2 gap-12">
        <div className="aspect-[3/4] bg-accent rounded-t-[999px]" />
        <div className="flex items-center">
          <h1 className="font-serif text-primary text-[clamp(2.8rem,6vw,5rem)]">
            Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA
          </h1>
        </div>
      </div>
    </section>
  );
}
