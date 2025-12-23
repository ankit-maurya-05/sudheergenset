"use client";

import { useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(value / 50);
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}+</span>;
}

export default function Stats() {
  return (
    <section className="bg-[#1F2937] text-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-center">
        <div>
          <Counter value={500} />
          <p>Clients Served</p>
        </div>
        <div>
          <Counter value={2500} />
          <p>KVA Capacity</p>
        </div>
        <div>
          <Counter value={15} />
          <p>Years Experience</p>
        </div>
        <div>
          <Counter value={24} />
          <p>Support Hours</p>
        </div>
      </div>
    </section>
  );
}
