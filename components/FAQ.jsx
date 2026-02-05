
"use client";
import { useState } from "react";
export default function FAQ() {
  const [o,setO]=useState(null);
  return (
    <section className="py-[12vh] px-[6vw]">
      <h2 className="font-serif text-4xl mb-12">FAQs</h2>
      <div className="border-t">
        {[1,2,3].map((_,i)=>(
          <div key={i} className="border-b py-6">
            <button onClick={()=>setO(o===i?null:i)} className="flex gap-6">
              <span className="text-3xl">{o===i?"−":"+"}</span>
              <span className="text-2xl">Question</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
