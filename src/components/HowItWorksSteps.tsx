import { PhoneCall, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Tell Us Your Requirement",
    description:
      "Call, WhatsApp, or fill out our form. Our experts will guide you to the right generator.",
    icon: PhoneCall,
  },
  {
    step: "2",
    title: "Confirm & Schedule",
    description:
      "Receive a transparent quote and select your preferred delivery time and duration.",
    icon: CheckCircle2,
  },
  {
    step: "3",
    title: "We Deliver & Install",
    description:
      "Same-day delivery with free installation and testing. Reliable power, guaranteed.",
    icon: Truck,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#111827] dark:text-white">
            Get Your Generator in 3 Simple Steps
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Quick and hassle-free rental process
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-20 md:grid-cols-3">

          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[78px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          {steps.map(({ step, title, description, icon: Icon }, index) => (
            <div key={index} className="relative text-center group">

              {/* Step Number */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2
                h-9 w-9 rounded-full bg-[#C4161C] text-white
                text-sm font-semibold flex items-center justify-center shadow"
              >
                {step}
              </span>

              {/* Icon Wrapper */}
              <div
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center
                rounded-full bg-white dark:bg-[#1F2937]
                border border-gray-200 dark:border-gray-700
                shadow-md transition-all duration-300
                group-hover:shadow-xl group-hover:-translate-y-1"
              >
                <Icon className="h-9 w-9 text-[#C4161C]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
