"use client";

import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";

export default function EnterpriseLeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Don't show again in same session
    if (sessionStorage.getItem("leadPopupShown")) return;

    // Delay popup (6 seconds)
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("leadPopupShown", "true");
    }, 6000);

    // Exit intent (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("leadPopupShown", "true");
      }
    };

    if (window.innerWidth > 768) {
      document.addEventListener("mouseout", handleMouseLeave);
    }

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[100]"
        onClick={() => setOpen(false)}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center px-4">
        <div className="relative w-full max-w-md bg-white dark:bg-[#111827] rounded-xl shadow-2xl p-6 animate-scaleIn">
          
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            aria-label="Close popup"
          >
            <X />
          </button>

          {/* Content */}
          <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-2">
            Need a DG Set Urgently?
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get Kirloskar Diesel Generators on rent with same-day delivery
            across India.
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:88060635"
              className="flex items-center justify-center gap-2 bg-[#C4161C] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/9182360635"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Enquiry
            </a>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            ISO Certified • CPCB IV+ • 24/7 Support
          </p>
        </div>
      </div>
    </>
  );
}
