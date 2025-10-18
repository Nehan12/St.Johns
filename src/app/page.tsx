'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      image: '/landing1.jpg', 
      alt: 'St. John&apos;s Facility - Main Building',
      title: 'Care Beyond Boundarie',
      subtitle: 'Dedicated to delivering personalized comfort, dignity, and unwavering support for every resident',
      description: 'Experience world-class palliative care in a warm, welcoming environment designed for comfort and dignity.'
    },
    { 
      image: '/landing2.jpg', 
      alt: 'St. John&apos;s Facility - Garden Area',
      title: 'Excellence in Every Moment',
      subtitle: 'Wh ere compassion, professionalism, and innovation come together for holistic care',
      description: 'Our beautiful outdoor spaces provide the perfect setting for relaxation, reflection, and recovery.'
    },
    { 
      image: '/landing3.jpg', 
      alt: 'St. John&apos;s Facility - Interior',
      title: 'Home Away From Home',
      subtitle: 'Elegant interiors designed with love, comfort, and the highest standards of care',
      description: 'Every detail has been thoughtfully crafted to create a haven of peace and healing for our residents.'
    }
  ];


  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/" />

      {/* Hero Section - Auto Slider */}
      <section className="relative h-[85vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full transform transition-transform duration-[8000ms] ease-in-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Center Text Content */}
        <div className="absolute inset-0 flex items-center justify-center z-30 px-8">
          <div className="text-center max-w-4xl">
            <h2 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp"
              style={{ 
                fontFamily: 'Allrounder Monument Regular, serif',
                animationDuration: '1s',
                animationTimingFunction: 'ease-in-out'
              }}
            >
              Care beyond Compare
            </h2>
            {/* <p 
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeInUp"
              style={{ 
                fontFamily: 'Source Sans 3, sans-serif',
                animationDuration: '1s',
                animationTimingFunction: 'ease-in-out',
                animationDelay: '0.2s'
              }}
            >
              Our commitment to care is uncompromising and never-ending. We&apos;re passionately devoted to providing the highest standards of 24 hour residential care, respite, day club experiences and memory care, all delivered with unparalleled standards of hospitality.
            </p> */}
            {/* <div className="flex space-x-4 justify-center">
              <Link
                href="/about"
                className="group bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                <span className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white/50 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                <span className="flex items-center space-x-2">
                  <span>Contact Us</span>
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Text Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div 
                className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
                style={{
                  backgroundImage: 'url(/landing2.jpg)',
                }}
              />
            </div>

            {/* Right Side - Text Content */}
            <div>
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Allrounder Monument Regular, serif' }}>
                  Luxury nursing care in Sri Lanka: At Bredrock Care, care is at our core
                </h1>
              <p className="text-md text-gray-600 leading-relaxed" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Our commitment to care is uncompromising and never-ending. We&apos;re passionately devoted to providing the highest standards of 24 hour residential care, respite, day club experiences and memory care, all delivered with unparalleled standards of hospitality. Every element of our approach is meticulously curated to create a life of fulfilment, comfort and refinement. At Bredrock Care, excellence isn&apos;t just a standard, it&apos;s a promise. We simply couldn&apos;t care more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F3EF' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#1B3C53' }}></div>
          <div className="absolute top-32 right-20 w-24 h-24 rounded-full" style={{ backgroundColor: '#456882' }}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full" style={{ backgroundColor: '#D2C1B6' }}></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 rounded-full" style={{ backgroundColor: '#1B3C53' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B3C53' }}>
              Our Core Values
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#456882' }}>
              The foundation of everything we do at St. John&apos;s
            </p>
          </div> */}

          <div className="grid md:grid-cols-3 gap-8">
            {/* Connection */}
            <div className="text-center group">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-12 h-12 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1B3C53' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B3C53' }}>Connection</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#456882' }}>
                Building meaningful relationships between residents, families, and our compassionate care team.
              </p>
            </div>

            {/* Well-being */}
            <div className="text-center group">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-12 h-12 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1B3C53' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B3C53' }}>Well-being</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#456882' }}>
                Promoting physical, emotional, and spiritual wellness through personalized care and support.
              </p>
            </div>

            {/* Security */}
            <div className="text-center group">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-12 h-12 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1B3C53' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B3C53' }}>Security</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#456882' }}>
                Providing a safe, secure environment where residents and families feel protected and at peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3C53' }}>
              Why Choose St. John&apos;s?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#456882' }}>
              Experience the difference of compassionate, professional care in a warm, welcoming environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Nurse Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/nunrse1.jpg" 
                  alt="Compassionate nursing care at St. John's" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1B3C53' }}>
                Our Dedicated Care Team
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#456882' }}>
                At St. John&apos;s, our experienced nursing staff provides round-the-clock care with compassion, 
                expertise, and genuine concern for each resident&apos;s well-being. We understand that quality 
                care goes beyond medical treatment—it&apos;s about creating meaningful connections and ensuring 
                comfort in every moment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  <span style={{ color: '#456882' }}>24/7 Professional Nursing Care</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  <span style={{ color: '#456882' }}>Personalized Care Plans</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  <span style={{ color: '#456882' }}>Family-Centered Approach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 24/7 Care Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#F9F3EF' }}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#1B3C53' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1B3C53' }}>24/7 Care</h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#456882' }}>
                  Round-the-clock professional nursing care ensuring residents receive immediate attention whenever needed.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Compassionate Care Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#F9F3EF' }}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#1B3C53' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1B3C53' }}>Compassionate Care</h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#456882' }}>
                  Personalized care plans tailored to each resident&apos;s specific needs and preferences.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Comfort Environment Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#F9F3EF' }}>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#1B3C53' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1B3C53' }}>Comfort Environment</h3>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#456882' }}>
                  A warm, welcoming environment designed to promote healing and a sense of home.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              style={{ backgroundColor: '#1B3C53' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#456882';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1B3C53';
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Care Highlights Section */}
      <section className="py-20" style={{ backgroundColor: '#F9F3EF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3C53' }}>
              Comprehensive Care, Thoughtfully Designed
            </h2>
            <p className="text-lg md:text-xl" style={{ color: '#456882' }}>
              We blend clinical excellence with everyday comfort to support residents and families.
            </p>
          </div>

          {/* Two-column, category-led layout to differentiate offerings */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Clinical Care */}
            <div className="rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#1B3C53' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a2 2 0 012-2h2m4-4h-3V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v3H5a2 2 0 00-2 2v2a2 2 0 002 2h3v3a2 2 0 002 2h2a2 2 0 002-2v-3h3a2 2 0 002-2v-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1B3C53' }}>Clinical Care</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>24/7 oversight & medication management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>Regular medical checkups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>Physiotherapy support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Daily Living & Comfort */}
            <div className="rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#1B3C53' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M10 11v6m4-6v6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1B3C53' }}>Daily Living & Comfort</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>Housekeeping & in‑house laundry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>Activities & wellness sessions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Specialized Programs */}
            <div className="rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#1B3C53' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1B3C53' }}>Specialized Programs</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>Dementia & Alzheimer’s care</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Environment & Nutrition */}
            <div className="rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#1B3C53' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1B3C53' }}>Environment & Nutrition</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>Boutique estate location (15–20 residents)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#456882' }}></span>
                    <span className="text-base md:text-lg" style={{ color: '#456882' }}>Nutrition‑guided meals (5 per day)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
