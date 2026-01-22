"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left Nav */}
          <div className="hidden lg:flex items-center space-x-10 text-sm font-semibold text-gray-700">
            <Link href="/" className="hover:text-[#E67E5A]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#E67E5A]">
              About Us
            </Link>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#E67E5A]">
                Services
                <span className="text-xs">▾</span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-[420px] rounded-xl bg-white shadow-xl border p-6"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <Link
                        href="/residential-care"
                        className="hover:text-[#E67E5A]"
                      >
                        Residential Care
                      </Link>
                      <Link
                        href="/24-hour-nursing"
                        className="hover:text-[#E67E5A]"
                      >
                        24-Hour Nursing
                      </Link>
                      <Link
                        href="/palliative-care"
                        className="hover:text-[#E67E5A]"
                      >
                        Palliative Care
                      </Link>
                      <Link href="/respite" className="hover:text-[#E67E5A]">
                        Respite Care
                      </Link>
                      <Link
                        href="/specialist-conditions"
                        className="hover:text-[#E67E5A] col-span-2"
                      >
                        Specialist Conditions
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Logo */}
          <Link href="/" className="flex justify-center">
            <img
              src="/heritageCarelogo.png"
              alt="Heritage Care"
              className="h-24 w-auto"
            />
          </Link>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-[#E67E5A] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#D86A45] transition"
            >
              Speak to Our Care Team
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-white border-t shadow-inner overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 text-sm font-medium">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
              <Link href="/services" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[#E67E5A] text-white rounded-lg py-3 mt-4"
              >
                Speak to Our Care Team
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
