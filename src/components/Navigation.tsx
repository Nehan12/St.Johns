"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAV BAR */}
      <nav
        className={`fixed top-0 z-50 w-full transition ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-gray-700">
              <Link href="/" className="hover:text-[#E67E5A]">Home</Link>
              <Link href="/about" className="hover:text-[#E67E5A]">About Us</Link>

              <div
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button className="hover:text-[#E67E5A] flex items-center gap-1">
                  Services ▾
                </button>

                <AnimatePresence>
                  {desktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-3 w-72 bg-white border rounded-xl shadow-lg p-4"
                    >
                      <div className="flex flex-col gap-3 text-sm">
                        <Link href="/residential-care">Residential Care</Link>
                        <Link href="/24-hour-nursing">24-Hour Nursing</Link>
                        <Link href="/palliative-care">Palliative Care</Link>
                        <Link href="/respite">Respite Care</Link>
                        <Link href="/specialist-conditions">Specialist Conditions</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/gallery" className="hover:text-[#E67E5A]">Gallery</Link>
            </div>

            {/* Logo */}
            <Link href="/">
              <img src="/heritageCarelogo.png" alt="Heritage Care" className="h-16" />
            </Link>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#E67E5A] text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                Speak to Our Care Team
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-4xl font-bold text-[#3A2A23]"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-50 h-full w-[80%] bg-white shadow-xl"
            >
              <div className="p-6 flex flex-col gap-6 text-lg font-medium text-[#3A2A23]">

                {/* Close */}
                <button
                  className="self-end text-2xl"
                  onClick={() => setMobileOpen(false)}
                >
                  ✕
                </button>

                {/* ONE ITEM PER ROW */}
                <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>

                {/* Services Dropdown */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between items-center"
                >
                  Services
                  <span>{mobileServicesOpen ? "−" : "+"}</span>
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-4 text-base text-[#5C4033]">
                    <Link href="/residential-care" onClick={() => setMobileOpen(false)}>Residential Care</Link>
                    <Link href="/24-hour-nursing" onClick={() => setMobileOpen(false)}>24-Hour Nursing</Link>
                    <Link href="/palliative-care" onClick={() => setMobileOpen(false)}>Palliative Care</Link>
                    <Link href="/respite" onClick={() => setMobileOpen(false)}>Respite Care</Link>
                    <Link href="/specialist-conditions" onClick={() => setMobileOpen(false)}>Specialist Conditions</Link>
                  </div>
                )}
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Gallery</Link>
                <Link href="/gallery" onClick={() => setMobileOpen(false)}>Contact Us</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
