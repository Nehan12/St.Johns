'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResidentialDropdownOpen, setIsResidentialDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
  ];

  const servicesItems = [
    
    { href: '/residential-care', label: 'Residential Care', hasSubDropdown: true },
    { href: '/respite', label: 'Respite' },
    { href: '/specialist-conditions', label: 'Specialist Conditions' },
  ];

  const residentialCareItems = [
    { href: '/24-hour-nursing', label: '24-Hour Nursing Care' },
    { href: '/palliative-care', label: 'Palliative Care' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled ? 'bg-white/60 shadow-md' : 'bg-white/90'
      }`}
    >
      <div className="relative max-w-12xl mx-auto px-8 sm:px-8 lg:px-32">
        <div className="flex items-center h-24 justify-between">

          {/* Left Nav */}
          <div className="hidden lg:flex items-center space-x-48">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-light text-sm text-gray-700 hover:text-[#1E93AB] transition-all duration-300"
                style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 1, y: -20 }}
            animate={isScrolled ? { scale: 0.9, y: -18 } : { scale: 1, y: -20 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="flex items-center justify-center flex-shrink-0"
          >
            <Link href="/" className="flex items-center hover:opacity-80 transition-all">
              <img
                src="/heritageCarelogo.png"
                alt="Heritage Care Logo"
                loading="lazy"
                className="h-40 w-auto transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center space-x-24">

            {/* Services Dropdown */}
            <div className="relative">
              <div
                className="relative font-light text-sm text-gray-700 hover:text-[#1E93AB] transition-all duration-300 flex items-center cursor-pointer"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
              >
                <Link href="/services" className="hover:text-[#1E93AB] transition-all duration-300">
                  SERVICES
                </Link>
                <motion.svg
                  animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4 ml-2 text-gray-700"
                  style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-lg shadow-lg border border-gray-200 bg-white/90 backdrop-blur-lg z-50"
                    style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="p-4">
                      {servicesItems.map((service) =>
                        service.hasSubDropdown ? (
                          <div key={service.href} className="relative">
                            <div
                              className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-900 group"
                              style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
                              onMouseEnter={() => setIsResidentialDropdownOpen(true)}
                              onMouseLeave={() => setIsResidentialDropdownOpen(false)}
                            >
                              <Link 
                                href={service.href} 
                                className="flex-1 group-hover:text-[#1E93AB] transition-all duration-300"
                              >
                                {service.label}
                              </Link>
                              <motion.svg
                                animate={{ rotate: isResidentialDropdownOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-4 h-4 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </motion.svg>
                            </div>

                            {/* Residential Submenu */}
                            <AnimatePresence>
                              {isResidentialDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  transition={{ duration: 0.25 }}
                                  className="absolute top-0 left-full ml-2 w-64 rounded-lg shadow-lg border border-gray-200 bg-white/95 backdrop-blur-lg z-30"
                                  onMouseEnter={() => setIsResidentialDropdownOpen(true)}
                                  onMouseLeave={() => setIsResidentialDropdownOpen(false)}
                                >
                                  {residentialCareItems.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#1E93AB] rounded-lg"
                                      style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#1B3C53' }}
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-900 hover:text-[#1E93AB]"
                          >
                            {service.label}
                          </Link>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="px-6 py-2 rounded-lg font-light text-sm border-2 border-gray-900 hover:bg-gray-800 hover:border-gray-800 hover:text-white text-gray-900 shadow-md transition-all duration-300"
              style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
            >
              Contact Us Today
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
            aria-label="Toggle menu"
          >
            <motion.div animate={isMenuOpen ? 'open' : 'closed'}>
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="block w-6 h-0.5 bg-gray-700 mb-1"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="block w-6 h-0.5 bg-gray-700 mb-1"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="block w-6 h-0.5 bg-gray-700"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#1E93AB] hover:bg-gray-100 transition-all"
                  style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <div className="px-2">
                <div className="flex justify-between items-center w-full px-2 py-3 rounded-lg text-gray-700 hover:text-[#1E93AB] hover:bg-gray-100">
                  <Link 
                    href="/services" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1"
                    style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
                  >
                    SERVICES
                  </Link>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="ml-2"
                  >
                    <motion.svg
                      animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                </div>

                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-6"
                    >
                      {servicesItems.map((service) => (
                        <div key={service.href}>
                          {service.hasSubDropdown ? (
                            <>
                              <div className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-[#1E93AB]">
                                <Link 
                                  href={service.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex-1"
                                >
                                  {service.label}
                                </Link>
                                <button
                                  onClick={() =>
                                    setIsResidentialDropdownOpen(!isResidentialDropdownOpen)
                                  }
                                  className="ml-2"
                                >
                                  <motion.svg
                                    animate={{ rotate: isResidentialDropdownOpen ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-3 h-3 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </motion.svg>
                                </button>
                              </div>

                              <AnimatePresence>
                                {isResidentialDropdownOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pl-6"
                                  >
                                    {residentialCareItems.map((sub) => (
                                      <Link
                                        key={sub.href}
                                        href={sub.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block py-2 text-gray-700 hover:text-[#1E93AB]"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link
                              href={service.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-gray-700 hover:text-[#1E93AB]"
                            >
                              {service.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-lg bg-[#1E93AB] hover:bg-[#147C90] text-white font-medium shadow-md transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
