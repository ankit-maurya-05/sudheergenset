"use client";

import { Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function FloatingCTA({ phoneNumber = "+911234567890" }) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50 sm:bottom-4 sm:right-4 md:gap-3">

      {/* CALL BUTTON */}
      <div className="flex flex-col items-center relative">
       
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Kirloskar Generator"
          className="relative flex items-center justify-center p-4 rounded-full shadow-lg bg-[#C4161C] text-white transform transition-all duration-300 hover:bg-red-700 hover:scale-110 hover:shadow-2xl"
        >
          {/* Pulsing Background */}
          <span className="absolute inset-0 rounded-full bg-[#C4161C] opacity-30 animate-pulse-slow"></span>
          <Phone size={24} className="relative z-10" />
        </a>
         <span className="bg-[#C4161C] text-white text-xs font-semibold px-3 py-1 rounded-full mt-1 shadow-md">
          Call Now
        </span>
      </div>

      {/* WHATSAPP BUTTON */}
      <div className="flex flex-col items-center relative">
       
        <a
          href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Kirloskar Generator"
          className="relative flex items-center justify-center p-4 rounded-full shadow-lg bg-[#25D366] text-white transform transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-2xl"
        >
          {/* Pulsing Background */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-pulse-slow"></span>
          <BsWhatsapp size={24} className="relative z-10" />
        </a>
         <span className="bg-[#C4161C] text-white text-xs font-semibold px-3 py-1 rounded-full mt-1 shadow-md">
          Chat with us
        </span>
      </div>

    </div>
  );
}
