"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO */}
            <Link
              href="/"
              className="text-xl font-bold text-[#C4161C]"
              aria-label="Kirloskar Generator Home"
            >
              SudheerGenset
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative font-medium text-sm group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-[#C4161C]"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`block h-[2px] bg-[#C4161C] transition-all duration-300 ease-in-out ${
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                </Link>
              ))}
            </nav>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              {/* CALL BUTTON */}
              <a
                href="tel:+919876543210"
                className="cta-motion flex items-center gap-1 bg-[#C4161C] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">Call</span>
              </a>
             
      

              {/* DARK MODE TOGGLE */}
              <ThemeToggle />

              {/* HAMBURGER MOBILE */}
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="md:hidden text-gray-900 dark:text-white"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b dark:border-gray-700">
          <span className="text-lg font-bold text-[#C4161C]">Kirloskar</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-gray-900 dark:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="relative font-sm text-lg group"
            >
              <span
                className={`transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-[#C4161C]"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`block h-[2px] bg-[#C4161C] transition-all duration-300 ease-in-out ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </span>
            </Link>
          ))}

          {/* CALL BUTTON MOBILE */}
          <a
            href="tel:+9198763210"
            className="mt-6 flex items-center justify-center gap-2 bg-[#C4161C] text-white px-4 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </nav>
      </aside>
    </>
  );
}
