import { Truck, Wrench } from "lucide-react";

export default function UPRentalServicing() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-white">
            Generator Rental & Servicing in{" "}
            <span className="text-[#C4161C]">Uttar Pradesh</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            End-to-end diesel generator solutions including rental, installation,
            servicing and AMC across Uttar Pradesh — with fast response teams in{" "}
            <strong className="text-[#111827] dark:text-white">Ayodhya</strong>.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* GENERATOR RENTAL */}
          <div
            className="
              group relative overflow-hidden rounded-3xl p-10
              bg-white dark:bg-[#0F172A]
              border border-gray-200 dark:border-[#1F2937]
              shadow-xl hover:shadow-2xl
              transition-all duration-300 hover:-translate-y-2
            "
          >
            {/* Accent Bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-[#C4161C]" />

            {/* Icon */}
            <div
              className="
                mb-6 flex h-20 w-20 items-center justify-center rounded-2xl
                bg-[#C4161C]/10 text-[#C4161C]
                group-hover:bg-[#C4161C] group-hover:text-white
                transition-all duration-300
              "
            >
              <Truck size={34} />
            </div>

            <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-4">
              Generator Rental
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Diesel generators from <strong>10 KVA to 2500 KVA</strong> available
              for short-term and long-term rental. Suitable for events, hospitals,
              construction sites, temples, factories and emergency power backup.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              ✔ Silent & Open DG Sets <br />
              ✔ Same-Day Delivery in UP Cities <br />
              ✔ Free Installation & Load Testing
            </p>
          </div>

          {/* SERVICING & AMC */}
          <div
            className="
              group relative overflow-hidden rounded-3xl p-10
              bg-white dark:bg-[#0F172A]
              border border-gray-200 dark:border-[#1F2937]
              shadow-xl hover:shadow-2xl
              transition-all duration-300 hover:-translate-y-2
            "
          >
            {/* Accent Bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-[#1F2937]" />

            {/* Icon */}
            <div
              className="
                mb-6 flex h-20 w-20 items-center justify-center rounded-2xl
                bg-[#1F2937]/10 text-[#1F2937]
                dark:bg-white/10 dark:text-white
                group-hover:bg-[#1F2937] group-hover:text-white
                transition-all duration-300
              "
            >
              <Wrench size={34} />
            </div>

            <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-4">
              Generator Servicing & AMC
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Professional generator servicing and Annual Maintenance Contracts
              (AMC) to ensure maximum uptime. Rapid breakdown support available
              in <strong>Ayodhya</strong> and across Uttar Pradesh.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              ✔ Preventive Maintenance <br />
              ✔ Emergency Breakdown Support <br />
              ✔ Trained & Certified Engineers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
