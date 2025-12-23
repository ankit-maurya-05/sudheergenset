import { Wrench, MapPin, ShieldCheck } from "lucide-react";

export default function PanUPGeneratorServices() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white">
            Generator Servicing Across{" "}
            <span className="text-[#C4161C]">Uttar Pradesh</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional generator servicing, AMC, and emergency support across
            Uttar Pradesh — trusted by industries, hospitals, and businesses.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* SERVICING & AMC */}
          <div className="group rounded-3xl p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40">
                <Wrench className="text-[#C4161C]" size={26} />
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Generator Servicing & AMC
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Comprehensive generator servicing including preventive
              maintenance, annual maintenance contracts (AMC), load testing,
              and performance optimization for all KVA ranges.
            </p>
          </div>

          {/* CITY COVERAGE */}
          <div className="group rounded-3xl p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/40">
                <MapPin className="text-blue-600 dark:text-blue-400" size={26} />
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Major Cities Covered
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Lucknow • Noida • Greater Noida • Ghaziabad • Kanpur • Agra •
              Prayagraj • Varanasi • Meerut • Bareilly • Gorakhpur & nearby areas.
            </p>
          </div>

          {/* EMERGENCY SUPPORT */}
          <div className="group rounded-3xl p-8 bg-gradient-to-tr from-[#C4161C] to-red-700 text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <ShieldCheck size={26} />
              </span>
              <h3 className="text-2xl font-semibold">
                Emergency Breakdown Support
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              24/7 emergency generator breakdown support with trained technicians,
              genuine spare parts, and rapid on-site resolution across Uttar Pradesh.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
