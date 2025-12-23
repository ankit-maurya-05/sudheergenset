import Image from "next/image";
import GeneratorRange from "@/components/GeneratorRange";
import WhyChooseUs from "@/components/WhyChooseUs";
import PanUPGeneratorServices from "@/components/PanUPGeneratorServices";
import  PoweringEveryNeed from "@/components/TrustedIndustries"
import HowItWorksSteps from "@/components/HowItWorksSteps";
import Contact from "@/app/contact/page";
import UPRentalServicing from "@/components/UPRentalServicing";



export const metadata = {
  title: "Diesel Generator on Rent Across India | Kirloskar DG Sets",
  description:
    "Rent reliable Kirloskar diesel generators from 10 KVA to 2500 KVA across India. Sales, installation, AMC & repair services and rental with same-day delivery.",
};

export default function Home() {
  return (
    <>
    <div className="bg-page-gradient">
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-5 overflow-hidden ">

       
        

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">

          {/* IMAGE — TOP ON MOBILE */}
          <div className="relative order-1 lg:order-2 w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]">
            <Image
              src="/generator.png"
              alt="Kirloskar Diesel Generator on Rent"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-white leading-tight mb-6">
  Reliable Diesel Generator <br className="hidden sm:block" />
  Rental & Services Across UttarPardesh
</h1>


            <p className="text-lg text-[#1F2937] dark:text-gray-300 mb-4">
              10 KVA to 2500 KVA | Silent & Open Models | Same Day Delivery |
              Pan-UttarPardesh Services and Rental
            </p>

            <div className="flex flex-wrap gap-6 mt-6 mb-10 text-[#1F2937] dark:text-gray-300">
              <Feature>500+ Happy Customers</Feature>
              <Feature>24/7 Support</Feature>
              <Feature>CPCB IV+ DG Sets</Feature>
            </div>

           
{/* CTA */}
<div className="flex flex-wrap gap-4 justify-center lg:justify-start text-center lg:text-left">
  <a
    href="/contact"
    className="
      cta-motion
      bg-[#C4161C] hover:bg-red-800
      text-white
      px-8 py-4
      rounded-lg
      font-semibold
      shadow-lg
      w-full sm:w-auto
    "
  >
    Get Instant Quote
  </a>

  <a
    href="tel:8802360635"
    className="
      cta-motion
      bg-[#1F2937] hover:bg-black
      text-white
      px-8 py-4
      rounded-lg
      font-semibold
      shadow-lg
      w-full sm:w-auto
    "
  >
    📞 Call: 8802360635
  </a>
</div>
</div>
        </div>
      </section>
       <UPRentalServicing/>
      <GeneratorRange />
      <PanUPGeneratorServices/>
      <WhyChooseUs/>
      <PoweringEveryNeed/>
      <HowItWorksSteps/>
      <Contact/>
</div>
    </>
  );
}

/* HELPERS */

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 font-medium">
      <span className="text-[#C4161C]">✔</span>
      {children}
    </span>
  );
}

