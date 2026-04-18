"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopResidentialOpen, setDesktopResidentialOpen] = useState(false);
  const [desktopRespiteOpen, setDesktopRespiteOpen] = useState(false);
  const [desktopSpecialOpen, setDesktopSpecialOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResidentialOpen, setMobileResidentialOpen] = useState(false);
  const [mobileRespiteOpen, setMobileRespiteOpen] = useState(false);
  const [mobileSpecialOpen, setMobileSpecialOpen] = useState(false);

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
          <div className="flex items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <Image
                src="/half-logo.png"
                alt="Heritage Care"
                width={72}
                height={20}
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex flex-1 justify-center gap-10 text-sm font-semibold text-gray-700">
              <Link
                href="/"
                className="hover:text-[#E67E5A] transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="hover:text-[#E67E5A] transition-colors duration-200"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onClick={() => {
                  setDesktopServicesOpen((prev) => !prev);
                }}
              >
                <Link
                  href="/services"
                  className="hover:text-[#E67E5A] flex items-center gap-5 transition-colors duration-200"
                >
                  Services ▾
                </Link>

                <AnimatePresence>
                  {desktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-3 w-80 bg-white border rounded-xl shadow-lg p-5"
                    >
                      <div className="flex flex-col gap-4 text-sm text-gray-700">
                        {/* Residential */}
                        <div
                          onMouseEnter={() => setDesktopResidentialOpen(true)}
                          onMouseLeave={() => setDesktopResidentialOpen(false)}
                        >
                          <Link
                            href="/residential-care"
                            className="font-semibold flex justify-between items-center hover:text-[#E67E5A] transition-colors duration-200"
                          >
                            Residential Care ▸
                          </Link>

                          {/* Nested items */}
                          <AnimatePresence>
                            {desktopResidentialOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="mt-2 ml-4 flex flex-col gap-1 text-gray-500"
                              >
                                <Link
                                  href="/24-hour-nursing"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  24×7 Nursing Care
                                </Link>
                                <Link
                                  href="/couples-care"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Couples Care
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          onMouseEnter={() => setDesktopRespiteOpen(true)}
                          onMouseLeave={() => setDesktopRespiteOpen(false)}
                        >
                          <Link
                            href="/respite"
                            className="font-semibold flex justify-between items-center hover:text-[#E67E5A] transition-colors duration-200"
                          >
                            Respite Care ▸
                          </Link>

                          {/* Nested items */}
                          <AnimatePresence>
                            {desktopRespiteOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="mt-2 ml-4 flex flex-col gap-1 text-gray-500"
                              >
                                <Link
                                  href="/rehabiliation-care"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Rehabiliation
                                </Link>
                                <Link
                                  href="/holiday-stay"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Holiday Stays
                                </Link>
                                <Link
                                  href="/post-surgery"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Post Surgery
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          onMouseEnter={() => setDesktopSpecialOpen(true)}
                          onMouseLeave={() => setDesktopSpecialOpen(false)}
                        >
                          <Link
                            href="/specialised-conditions"
                            className="font-semibold flex justify-between items-center hover:text-[#E67E5A] transition-colors duration-200"
                          >
                            Specialised Conditions ▸
                          </Link>

                          {/* Nested items */}
                          <AnimatePresence>
                            {desktopSpecialOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="mt-2 ml-4 flex flex-col gap-1 text-gray-500"
                              >
                                <Link
                                  href="/dementia-care"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Dementia Care
                                </Link>
                                <Link
                                  href="/parkinsons-care"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Parkinson&apos;s Care
                                </Link>
                                <Link
                                  href="/alzeihmrs-care"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Alzeihmr&apos;s Care
                                </Link>
                                <Link
                                  href="/palliative-care"
                                  className="hover:text-[#E67E5A] transition-colors duration-200"
                                >
                                  Palliative Care
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/fee-and-pricing-breakdown"
                className="hover:text-[#E67E5A] transition-colors duration-200"
              >
                Fee & Pricing Breakdown
              </Link>
              <Link
                href="/activities"
                className="hover:text-[#E67E5A] transition-colors duration-200"
              >
                Activities
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[#E67E5A] transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link
                href="/knowledge-hub"
                className="hover:text-[#E67E5A] transition-colors duration-200"
              >
                Knowledge Hub
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:block ml-auto">
              <Link
                href="/contact"
                className="bg-[#D46A1F] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#E67E5A] transition-colors duration-200 flex items-center gap-2"
              >
                <FaPhone />
                Speak to Our Care Team
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden ml-auto text-4xl font-bold text-[#3A2A23]"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
      <div className="fixed top-20 md:top-20 w-full z-40 bg-gradient-to-r from-[#D46A1F] to-[#E67E5A] text-white text-center px-4 py-2 text-xs sm:text-sm font-medium tracking-wide">
        Senior residential, nursing, memory & rehabilitation care
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-50 h-full w-[80%] bg-white shadow-xl"
            >
              <div className="p-6 flex flex-col gap-6 text-lg font-medium">
                <button
                  className="self-end text-2xl"
                  onClick={() => setMobileOpen(false)}
                >
                  ✕
                </button>

                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#000000] transition-colors duration-200"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#E67E5A] transition-colors duration-200"
                >
                  About Us
                </Link>

                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#E67E5A] transition-colors duration-200"
                >
                  Services
                </Link>

                {/* Residential Toggle */}
                <div className="flex items-center justify-between pl-4">
                  {/* Link */}
                  <Link
                    href="/residential-care"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-[#E67E5A] transition-colors duration-200 pl-4"
                  >
                    Residential Care
                  </Link>

                  {/* Toggle */}
                  <button
                    onClick={() =>
                      setMobileResidentialOpen(!mobileResidentialOpen)
                    }
                    className="text-xl px-2"
                    aria-label="Toggle Residential Care submenu"
                  >
                    {mobileResidentialOpen ? "−" : "+"}
                  </button>
                </div>

                {mobileResidentialOpen && (
                  <div className="pl-8 flex flex-col gap-2 text-base">
                    <Link
                      href="/24-hour-nursing"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      24×7 Nursing Care
                    </Link>
                    <Link
                      href="/couples-care"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Couples Care
                    </Link>
                  </div>
                )}

                {/* Respite Toggle */}
                <div className="flex items-center justify-between pl-4">
                  {/* Link */}
                  <Link
                    href="/respite"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-[#E67E5A] transition-colors duration-200 pl-4"
                  >
                    Respite Care
                  </Link>

                  {/* Toggle */}
                  <button
                    onClick={() => setMobileRespiteOpen(!mobileRespiteOpen)}
                    className="text-xl px-2"
                    aria-label="Toggle Respite Care submenu"
                  >
                    {mobileRespiteOpen ? "−" : "+"}
                  </button>
                </div>

                {mobileRespiteOpen && (
                  <div className="pl-8 flex flex-col gap-2 text-base">
                    <Link
                      href="/rehabiliation-care"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Rehabiliation
                    </Link>
                    <Link
                      href="/holiday-stay"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Holiday Stays
                    </Link>
                    <Link
                      href="/post-surgery"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Post Surgery
                    </Link>
                  </div>
                )}

                {/* Specialist Conditions Toggle */}
                <div className="flex items-center justify-between pl-4">
                  {/* Link */}
                  <Link
                    href="/specialised-conditions"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-[#E67E5A] transition-colors duration-200 pl-4"
                  >
                    Specialised Conditions
                  </Link>

                  {/* Toggle */}
                  <button
                    onClick={() => setMobileSpecialOpen(!mobileSpecialOpen)}
                    className="text-xl px-2"
                    aria-label="Toggle Special Conditions submenu"
                  >
                    {mobileSpecialOpen ? "−" : "+"}
                  </button>
                </div>

                {mobileSpecialOpen && (
                  <div className="pl-8 flex flex-col gap-2 text-base">
                    <Link
                      href="/dementia-care"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Dementia Care
                    </Link>
                    <Link
                      href="/parkinsons-care"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Parkinson&apos;s Care
                    </Link>
                    <Link
                      href="/alzeihmrs-care"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Alzeihmr&apos;s Care
                    </Link>
                    <Link
                      href="/palliative-care"
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-[#E67E5A] transition-colors duration-200"
                    >
                      Palliative Care
                    </Link>
                  </div>
                )}

                <Link
                  href="/fee-and-pricing-breakdown"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#E67E5A] transition-colors duration-200"
                >
                  Fee & Pricing Breakdown
                </Link>

                <Link
                  href="/activities"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#E67E5A] transition-colors duration-200"
                >
                  Activities
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#E67E5A] transition-colors duration-200"
                >
                  Gallery
                </Link>
                <Link
                  href="/knowledge-hub"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#E67E5A] transition-colors duration-200"
                >
                  Knowledge Hub
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#E67E5A] transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
