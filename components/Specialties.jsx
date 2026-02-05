
export default function Specialties() {
  return (
    <section className="py-[12vh] px-[6vw]">
      <h2 className="font-serif text-center text-4xl mb-20">Areas of Focus</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border p-8 bg-secondary min-h-[40vh]">Anxiety</div>
        <div className="border p-8 bg-secondary min-h-[40vh]">Trauma</div>
        <div className="border p-8 bg-secondary min-h-[40vh]">Burnout</div>
      </div>
    </section>
  );
}
