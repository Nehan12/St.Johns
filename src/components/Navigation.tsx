"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export default function Navigation() {
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDesktopServicesOpen(false);
        setDesktopResidentialOpen(false);
        setDesktopRespiteOpen(false);
        setDesktopSpecialOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
                className="hover:text-[var(--primary)] transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="hover:text-[var(--primary)] transition-colors duration-200"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div className="relative flex items-center gap-2" ref={menuRef}>
                <Link
                  href="/services"
                  className="hover:text-[var(--primary)] transition-colors duration-200"
                >
                  Services
                </Link>
                {/* Dropdown toggle button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDesktopServicesOpen((prev) => !prev);
                  }}
                  className="hover:text-[var(--primary)] transition-colors duration-200"
                >
                  ▾
                </button>
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
                            className="font-semibold flex justify-between items-center hover:text-[var(--primary)] transition-colors duration-200"
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
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
                                >
                                  24×7 Nursing Care
                                </Link>
                                <Link
                                  href="/couples-care"
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
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
                            className="font-semibold flex justify-between items-center hover:text-[var(--primary)] transition-colors duration-200"
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
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
                                >
                                  Rehabiliation
                                </Link>
                                <Link
                                  href="/holiday-stay"
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
                                >
                                  Holiday Stays
                                </Link>
                                <Link
                                  href="/post-surgery"
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
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
                            className="font-semibold flex justify-between items-center hover:text-[var(--primary)] transition-colors duration-200"
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
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
                                >
                                  Dementia Care
                                </Link>
                                <Link
                                  href="/parkinsons-care"
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
                                >
                                  Parkinson&apos;s Care
                                </Link>
                                <Link
                                  href="/alzeihmrs-care"
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
                                >
                                  Alzeihmr&apos;s Care
                                </Link>
                                <Link
                                  href="/palliative-care"
                                  className="hover:text-[var(--primary)] transition-colors duration-200"
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
                className="hover:text-[var(--primary)] transition-colors duration-200"
              >
                Fee & Pricing Breakdown
              </Link>
              <Link
                href="/activities"
                className="hover:text-[var(--primary)] transition-colors duration-200"
              >
                Activities
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[var(--primary)] transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link
                href="/knowledge-hub"
                className="hover:text-[var(--primary)] transition-colors duration-200"
              >
                Knowledge Hub
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:block ml-auto">
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:brightness-95 transition-colors duration-200 flex items-center gap-2"
              >
                <FaPhone />
                Speak to Our Care Team
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden ml-auto text-4xl font-bold"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
      <div className="fixed top-20 md:top-20 w-full z-40 bg-primary text-white text-center px-2 py-2 text-xs sm:text-sm font-medium tracking-wide">
        Senior residential, nursing, memory & rehabilitation care
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-50 h-full w-[85%] bg-gradient-to-b from-white to-gray-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b p-5">
                <h2 className="text-lg font-semibold">☰</h2>

                <button
                  className="text-2xl"
                  onClick={() => setMobileOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-2">
                {/* Simple Links */}
                <MobileLink
                  href="/"
                  label="Home"
                  setMobileOpen={setMobileOpen}
                />
                <MobileLink
                  href="/about"
                  label="About Us"
                  setMobileOpen={setMobileOpen}
                />
                <MobileLink
                  href="/services"
                  label="Services"
                  setMobileOpen={setMobileOpen}
                />

                {/* Residential */}
                <MobileSection
                  title="Residential Care"
                  href="/residential-care"
                  open={mobileResidentialOpen}
                  setOpen={setMobileResidentialOpen}
                  setMobileOpen={setMobileOpen}
                >
                  <MobileSub
                    href="/24-hour-nursing"
                    label="24×7 Nursing Care"
                    setMobileOpen={setMobileOpen}
                  />
                  <MobileSub
                    href="/couples-care"
                    label="Couples Care"
                    setMobileOpen={setMobileOpen}
                  />
                </MobileSection>

                {/* Respite */}
                <MobileSection
                  title="Respite Care"
                  href="/respite"
                  open={mobileRespiteOpen}
                  setOpen={setMobileRespiteOpen}
                  setMobileOpen={setMobileOpen}
                >
                  <MobileSub
                    href="/rehabiliation-care"
                    label="Rehabilitation"
                    setMobileOpen={setMobileOpen}
                  />
                  <MobileSub
                    href="/holiday-stay"
                    label="Holiday Stays"
                    setMobileOpen={setMobileOpen}
                  />
                  <MobileSub
                    href="/post-surgery"
                    label="Post Surgery"
                    setMobileOpen={setMobileOpen}
                  />
                </MobileSection>

                {/* Specialised */}
                <MobileSection
                  title="Specialised Conditions"
                  href="/specialised-conditions"
                  open={mobileSpecialOpen}
                  setOpen={setMobileSpecialOpen}
                  setMobileOpen={setMobileOpen}
                >
                  <MobileSub
                    href="/dementia-care"
                    label="Dementia Care"
                    setMobileOpen={setMobileOpen}
                  />
                  <MobileSub
                    href="/parkinsons-care"
                    label="Parkinson's Care"
                    setMobileOpen={setMobileOpen}
                  />
                  <MobileSub
                    href="/alzeihmrs-care"
                    label="Alzheimer's Care"
                    setMobileOpen={setMobileOpen}
                  />
                  <MobileSub
                    href="/palliative-care"
                    label="Palliative Care"
                    setMobileOpen={setMobileOpen}
                  />
                </MobileSection>

                {/* Other Links */}
                <MobileLink
                  href="/fee-and-pricing-breakdown"
                  label="Fee & Pricing Breakdown"
                  setMobileOpen={setMobileOpen}
                />
                <MobileLink
                  href="/activities"
                  label="Activities"
                  setMobileOpen={setMobileOpen}
                />
                <MobileLink
                  href="/gallery"
                  label="Gallery"
                  setMobileOpen={setMobileOpen}
                />
                <MobileLink
                  href="/knowledge-hub"
                  label="Knowledge Hub"
                  setMobileOpen={setMobileOpen}
                />
                <MobileLink
                  href="/contact"
                  label="Contact Us"
                  setMobileOpen={setMobileOpen}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

type MobileProps = {
  href: string;
  label: string;
  setMobileOpen: (value: boolean) => void;
};

function MobileLink({ href, label, setMobileOpen }: MobileProps) {
  return (
    <Link
      href={href}
      onClick={() => setMobileOpen(false)}
      className="p-3 rounded-lg hover:bg-gray-100 active:scale-[0.98] transition font-medium"
    >
      {label}
    </Link>
  );
}

function MobileSub({ href, label, setMobileOpen }: MobileProps) {
  return (
    <Link
      href={href}
      onClick={() => setMobileOpen(false)}
      className="pl-8 py-2 text-sm text-gray-600 hover:text-[var(--primary)] transition"
    >
      {label}
    </Link>
  );
}

type MobileSectionProps = {
  title: string;
  href: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  setMobileOpen: (value: boolean) => void;
  children: React.ReactNode;
};

function MobileSection({
  title,
  href,
  open,
  setOpen,
  setMobileOpen,
  children,
}: MobileSectionProps) {
  return (
    <div className="rounded-xl bg-white/60 p-2">
      <div className="flex items-center justify-between">
        <Link
          href={href}
          onClick={() => setMobileOpen(false)}
          className="flex-1 p-2 font-medium hover:text-[var(--primary)]"
        >
          {title}
        </Link>

        <button onClick={() => setOpen(!open)} className="px-3 text-lg">
          {open ? "−" : "+"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
