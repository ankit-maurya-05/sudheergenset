import { PhoneCall, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-white">
            Get in Touch with{" "}
            <span className="text-[#C4161C]">Sudheer Genset</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Need a generator on rent or service support? Our team is available
            24/7 to assist you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}
          <div className="group bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-[#1F2937]
            rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
              bg-[#C4161C]/10 text-[#C4161C] group-hover:bg-[#C4161C] group-hover:text-white transition">
              <PhoneCall size={28} />
            </div>
            <h3 className="font-bold text-lg text-[#111827] dark:text-white mb-2">
              Call Us
            </h3>
            <a
              href="tel:8802360635"
              className="text-gray-600 dark:text-gray-400 font-medium hover:text-[#C4161C]"
            >
              +91 88023 60635
            </a>
          </div>

          {/* WhatsApp */}
          <div className="group bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-[#1F2937]
            rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
              bg-[#C4161C]/10 text-[#C4161C] group-hover:bg-[#C4161C] group-hover:text-white transition">
              <MessageCircle size={28} />
            </div>
            <h3 className="font-bold text-lg text-[#111827] dark:text-white mb-2">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/918802360635"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 font-medium hover:text-[#C4161C]"
            >
              Chat Instantly
            </a>
          </div>

          {/* Email */}
          <div className="group bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-[#1F2937]
            rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
              bg-[#C4161C]/10 text-[#C4161C] group-hover:bg-[#C4161C] group-hover:text-white transition">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-lg text-[#111827] dark:text-white mb-2">
              Email Us
            </h3>
            <a
              href="mailto:info@rdhegenerators.com"
              className="text-gray-600 dark:text-gray-400 font-medium hover:text-[#C4161C]"
            >
              info@rdhegenerators.com
            </a>
          </div>

          {/* Location */}
          <div className="group bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-[#1F2937]
            rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
              bg-[#C4161C]/10 text-[#C4161C] group-hover:bg-[#C4161C] group-hover:text-white transition">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-lg text-[#111827] dark:text-white mb-2">
              Office Address
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Pan-India Coverage
            </p>
          </div>

        </div>

       
      </div>
    </section>
  );
}
