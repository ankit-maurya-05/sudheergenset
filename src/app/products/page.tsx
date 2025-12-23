// app/products/page.tsx
export default function Products() {
  return (
    <section className="pt-24 max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Our Generators</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["5kVA", "15kVA", "25kVA"].map((item) => (
          <div key={item} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{item} Kirloskar Generator</h3>
            <p className="text-sm mt-2">Fuel Efficient & Reliable</p>
          </div>
        ))}
      </div>
    </section>
  );
}
