'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = '' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'shadow-2xl backdrop-blur-sm' 
        : 'bg-transparent'
    }`} style={{
      backgroundColor: isScrolled ? '#1B3C53' : 'transparent'
    }}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <Link href="/" className="flex items-center space-x-3 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src="/sjlogonew.png" 
                  alt="St. John's Logo" 
                  className="h-12 w-12 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 filter drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className={`text-xl font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'text-white' 
                  : 'text-white drop-shadow-lg'
              }`}>
                St. John&apos;s Palliative & Wellness
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-10">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
                    currentPage === item.href
                      ? 'text-white shadow-lg'
                      : isScrolled 
                        ? 'text-white hover:text-gray-200' 
                        : 'text-white hover:text-gray-200 drop-shadow-lg'
                  }`}
                  style={{
                    backgroundColor: currentPage === item.href ? '#456882' : 'transparent',
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentPage !== item.href && (
                    <>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" style={{ backgroundColor: '#456882' }}></div>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#D2C1B6' }}></div>
                    </>
                  )}
                  {currentPage === item.href && (
                    <div className="absolute inset-0 opacity-20 animate-pulse" style={{ backgroundColor: '#456882' }}></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-white inline-flex items-center justify-center p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 hover:scale-105 ${
                !isScrolled ? 'drop-shadow-lg' : ''
              }`}
              style={{
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#456882';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div className="relative w-6 h-6">
                <svg 
                  className={`h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} 
                  stroke="currentColor" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-slideDown">
          <div className="px-2 pt-3 pb-4 space-y-2 sm:px-3" style={{ backgroundColor: '#1B3C53' }}>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.href
                    ? 'text-white shadow-lg'
                    : 'text-white hover:text-gray-200'
                }`}
                style={{
                  backgroundColor: currentPage === item.href ? '#456882' : 'transparent',
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== item.href) {
                    e.currentTarget.style.backgroundColor = '#456882';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== item.href) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
