'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResidentialDropdownOpen, setIsResidentialDropdownOpen] = useState(false);

  // Handle scroll effect
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
    // { href: '/contact', label: 'CONTACT' },
  ];

  const servicesNavItem = { href: '/services', label: 'SERVICES', hasDropdown: true };

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
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/50 shadow-lg' 
          : 'bg-white'
      }`}>

        <div className="relative max-w-12xl mx-auto px-8 sm:px-8 lg:px-32">
          <div className="flex items-center h-16">
            {/* Left Navigation */}
            <div className="flex-1 flex justify-start">
              <div className="hidden lg:flex items-center space-x-48">
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative font-light text-sm transition-colors duration-300 hover:text-[#1E93AB] text-gray-700`}
                    style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center flex-shrink-0">
              <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-80">
                <div className="relative">
                  <img 
                    src="/logo5.png" 
                    alt="St. John's Logo" 
                    className={`transition-all duration-300 ${
                      isScrolled ? 'h-12 w-40' : 'h-16 w-52'
                    }`}
                  />
                </div>
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex-1 flex justify-end">
              <div className="hidden lg:flex items-center space-x-24">
                {/* Services Dropdown */}
                <div className="relative">
                  {servicesNavItem.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="flex items-center">
                        <Link
                          href={servicesNavItem.href}
                          className={`relative font-light text-sm transition-colors duration-300 hover:text-[#1E93AB] text-gray-700`}
                          style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}
                        >
                          {servicesNavItem.label}
                        </Link>
                        <div className="ml-2">
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 text-gray-700 ${
                              isServicesDropdownOpen ? 'rotate-180' : ''
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-80 rounded-lg shadow-xl border border-gray-200/50 transition-all duration-300 bg-white/95 ${
                        isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`} style={{backdropFilter: 'blur(10px)'}}>
                        <div className="p-4 relative">
                          {/* Blur background overlay */}
                          <div className={`absolute inset-0 rounded-lg bg-white/90`} style={{backdropFilter: 'blur(10px)'}}></div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="space-y-2">
                              {servicesItems.map((service) => (
                                <div key={service.href} className="relative">
                                  {service.hasSubDropdown ? (
                                    <div
                                      className="relative"
                                      onMouseEnter={() => setIsResidentialDropdownOpen(true)}
                                      onMouseLeave={() => setIsResidentialDropdownOpen(false)}
                                    >
                                      <div className="flex items-center">
                                        <Link
                                          href={service.href}
                                          className={`flex-1 p-3 rounded-lg transition-colors duration-200 group hover:bg-gray-100`}
                                          onClick={() => setIsServicesDropdownOpen(false)}
                                        >
                                          <div className={`font-medium transition-colors duration-200 text-gray-900 group-hover:text-[#1E93AB]`}>
                                            {service.label}
                                          </div>
                                        </Link>
                                        <div className="p-3">
                                          <svg 
                                            className={`w-4 h-4 transition-transform duration-300 text-gray-700 ${
                                              isResidentialDropdownOpen ? 'rotate-90' : ''
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </div>
                                      </div>
                                      
                                      {/* Sub-dropdown Menu */}
                                      <div className={`absolute left-full top-0 ml-6 w-64 rounded-lg shadow-xl border border-gray-200/50 transition-all duration-300 bg-white/95 ${
                                        isResidentialDropdownOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'
                                      }`} style={{backdropFilter: 'blur(10px)'}}>
                                        <div className="p-3 relative">
                                          <div className={`absolute inset-0 rounded-lg bg-white/90`} style={{backdropFilter: 'blur(10px)'}}></div>
                                          
                                          <div className="relative z-10 space-y-1">
                                            {residentialCareItems.map((item) => (
                                              <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`block p-2 rounded-lg transition-colors duration-200 group hover:bg-gray-100`}
                                                onClick={() => {
                                                  setIsServicesDropdownOpen(false);
                                                  setIsResidentialDropdownOpen(false);
                                                }}
                                              >
                                                <div className={`text-sm font-medium transition-colors duration-200 text-gray-900 group-hover:text-[#1E93AB]`}>
                                                  {item.label}
                                                </div>
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      href={service.href}
                                      className={`block p-3 rounded-lg transition-colors duration-200 group hover:bg-gray-100`}
                                      onClick={() => setIsServicesDropdownOpen(false)}
                                    >
                                      <div className={`font-medium transition-colors duration-200 text-gray-900 group-hover:text-[#1E93AB]`}>
                                        {service.label}
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={servicesNavItem.href}
                      className={`relative font-light text-sm transition-colors duration-300 hover:text-[#1E93AB] text-gray-700`}
                      style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}
                    >
                      {servicesNavItem.label}
                    </Link>
                  )}
                </div>

                {/* Contact Link */}
                {/* <Link
                  href="/contact"
                  className={`relative font-light text-sm transition-colors duration-300 hover:text-[#1E93AB] text-gray-700`}
                  style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}
                >
                  CONTACT
                </Link> */}
                
                {/* CTA Button */}
                <Link
                  href="/contact"
                  className={`px-6 py-2 rounded-lg font-light text-sm shadow-md hover:text- transition-all duration-300 border-2 border-gray-900 hover:bg-[#1E93AB] hover:text-white text-gray-900`}
                  style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}
                >
                  Contact Us Today
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center absolute right-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <span className={`block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
                  <span className={`block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-white'
                  } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
