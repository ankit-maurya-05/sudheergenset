import {
  Truck,
  ShieldCheck,
  Wallet,
  Layers,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Wide Range",
    desc: "10 KVA to 2500 KVA generators available. Silent and open models to suit every requirement.",
    icon: Layers,
  },
  {
    title: "Fast Delivery",
    desc: "Same-day service across India. 24/7 availability for emergency power requirements.",
    icon: Truck,
  },
  {
    title: "Generator Servicing & AMC",
    desc: "Expert maintenance, breakdown support, load testing and annual AMC for uninterrupted power.",
    icon: Wrench,
  },
  {
    title: "100% Reliable",
    desc: "99% uptime guarantee. Regular maintenance and quality-tested generators.",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges. Best rates across pan-India.",
    icon: Wallet,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-white">
            Why 500+ Customers Trust{" "}
            <span className="text-[#C4161C]">SudheerGenset</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your reliable power partner for rental, servicing, AMC and industrial power solutions.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group relative rounded-2xl p-8 text-center
                  bg-white dark:bg-[#0F172A]
                  border border-gray-200 dark:border-[#1F2937]
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300 hover:-translate-y-2
                "
              >
                {/* ICON */}
                <div
                  className="
                    mx-auto mb-6 flex h-20 w-20 items-center justify-center
                    rounded-full bg-[#C4161C]/10 text-[#C4161C]
                    group-hover:bg-[#C4161C] group-hover:text-white
                    transition-all duration-300
                  "
                >
                  <Icon size={34} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
