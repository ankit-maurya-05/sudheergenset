"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full z-50 bg-white dark:bg-gray-900 shadow-top">

      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-[#C4161C] tracking-wide">
            KIRLOSKAR
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Authorized Kirloskar generator dealer providing diesel generator
            rental, servicing and AMC solutions across Uttar Pradesh including
            Ayodhya.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-[#C4161C]">Home</Link></li>
            <li><Link href="/products" className="hover:text-[#C4161C]">Generators</Link></li>
            <li><Link href="/services" className="hover:text-[#C4161C]">Rental & AMC</Link></li>
            <li><Link href="/contact" className="hover:text-[#C4161C]">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-[#C4161C]" />
              <a href="tel:8802360635" className="hover:text-[#C4161C]">
                +91 88023 60635
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-[#C4161C]" />
              <a href="mailto:info@kirloskargenerator.in" className="hover:text-[#C4161C]">
                info@kirloskargenerator.in
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-[#C4161C]" />
              <span>Uttar Pradesh (Ayodhya & nearby cities)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* FULL WIDTH COPYRIGHT BAR */}
      <div className="w-full border-t border-gray-200 dark:border-[#1F2937] py-5 text-center text-xs text-gray-500">
        © {currentYear} Kirloskar Generator Services. All Rights Reserved.
      </div>

    </footer>
  );
}
