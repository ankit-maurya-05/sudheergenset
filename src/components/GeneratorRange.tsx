import GeneratorCard from "@/components/GeneratorCard";

export default function GeneratorRange() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#111827] dark:text-white mb-4">
          Complete Range of Generators
        </h2>

        <p className="text-center text-[#6B7280] dark:text-gray-400 mb-14 max-w-2xl mx-auto">
          From residential backup to large-scale industrial power — reliable diesel generators available for rent across India.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <GeneratorCard
            capacity="10–50 KVA"
            title="Residential & Small Commercial"
            features={[
              "Homes & Apartments",
              "Small Offices",
              "Retail Shops",
            ]}
          />

          <GeneratorCard
            capacity="62–250 KVA"
            title="Commercial & Events"
            features={[
              "Events & Weddings",
              "Construction Sites",
              "Medium Offices",
            ]}
          />

          <GeneratorCard
            capacity="250–1000 KVA"
            title="Enterprise & Healthcare"
            popular
            features={[
              "Industries",
              "IT Parks & Offices",
              "Hospitals & Hotels",
            ]}
          />

          <GeneratorCard
            capacity="1000–2500 KVA"
            title="Heavy Industrial"
            features={[
              "Large Factories",
              "Infrastructure Projects",
              "Industrial Estates",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
