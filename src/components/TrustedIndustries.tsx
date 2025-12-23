import {
  Building2,
  PartyPopper,
  HardHat,
  Factory,
  Landmark,
  Home,
} from "lucide-react";

const industries = [
  { title: "Commercial Offices", icon: Building2 },
  { title: "Weddings & Events", icon: PartyPopper },
  { title: "Construction Sites", icon: HardHat },
  { title: "Industries", icon: Factory },
  { title: "Government Projects", icon: Landmark },
  { title: "Residential", icon: Home },
];

export default function PoweringEveryNeed() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Powering Every Need
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by diverse industries across India
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {industries.map(({ title, icon: Icon }, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              rounded-2xl p-8 text-center transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-black/40"
            >

              {/* 🔥 PRO ICON */}
              <div
                className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center
                rounded-2xl bg-gradient-to-br from-red-500 to-red-700
                ring-1 ring-red-200/60 dark:ring-red-900/40
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-lg"                
              >
                <Icon className="h-8 w-8 text-white drop-shadow-sm" />
              </div>

              {/* Title */}
              <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
