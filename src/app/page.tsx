'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  
  // Refs for scroll animations
  const textContentRef = useRef<HTMLElement>(null);
  const coreValuesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const luxuryRef = useRef<HTMLElement>(null);

  const slides = [
    { 
      image: '/landing1.jpg', 
      alt: 'Bedrock Care Facility - Main Building',
      title: 'Care Beyond Boundarie',
      subtitle: 'Dedicated to delivering personalized comfort, dignity, and unwavering support for every resident',
      description: 'Experience world-class palliative care in a warm, welcoming environment designed for comfort and dignity.'
    },
    { 
      image: '/landing2.jpg', 
      alt: 'Bedrock Care Facility - Garden Area',
      title: 'Excellence in Every Moment',
      subtitle: 'Wh ere compassion, professionalism, and innovation come together for holistic care',
      description: 'Our beautiful outdoor spaces provide the perfect setting for relaxation, reflection, and recovery.'
    },
    { 
      image: '/landing3.jpg', 
      alt: 'Bedrock Care Facility - Interior',
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

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-section');
            if (elementId) {
              setIsVisible(prev => ({
                ...prev,
                [elementId]: true
              }));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const refs = [
      { ref: textContentRef, id: 'textContent' },
      { ref: coreValuesRef, id: 'coreValues' },
      { ref: whyChooseRef, id: 'whyChoose' },
      { ref: luxuryRef, id: 'luxury' }
    ];

    refs.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', id);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

      <Navigation />

      {/* Hero Section - Auto Slider */}
      <section className="relative h-[85vh] overflow-hidden w-full max-w-full">

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
        <div className="absolute inset-0 flex items-end justify-center z-30 px-8 pb-20">
          <div className="text-center max-w-4xl">
            <h2 
              className="text-4xl md:text-6xl font-bold text-white mb-20 leading-tight animate-fadeInUp"
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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white" ref={textContentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start md:items-center">
            {/* Left Side - Image */}
            <div className="relative flex justify-center order-2 md:order-1 w-full">
              <div 
                className={`aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/2] w-full max-w-sm sm:max-w-md md:max-w-lg bg-cover bg-center bg-no-repeat rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
                  isVisible.textContent ? 'animate-slideInLeft' : 'opacity-0 translate-x-[-50px]'
                }`}
                style={{
                  backgroundImage: 'url(/landing2.jpg)',
                  minHeight: '200px',
                  maxHeight: '400px',
                }}
              />
            </div>

            {/* Right Side - Text Content */}
            <div className={`order-1 md:order-2 w-full transition-all duration-1000 ${
              isVisible.textContent ? 'animate-slideInRight' : 'opacity-0 translate-x-[50px]'
            }`}>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight transform transition-all duration-500 hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, serif' }}>
                Luxury Care, Rooted in Compassion
                </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed transform transition-all duration-500 hover:translate-x-2" style={{ fontFamily: 'Libre Baskerville Regular, sans-serif' }}>
              At Bedrock Care, we&apos;re devoted to providing exceptional 24-hour residential, respite, and memory care. Every detail is crafted to bring comfort, fulfilment, and refined living — because we simply couldn&apos;t care more.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F3EF' }} ref={coreValuesRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute top-10 left-10 w-32 h-32 rounded-full transition-all duration-1000 ${
            isVisible.coreValues ? 'animate-bounce' : 'opacity-0 scale-0'
          }`} style={{ backgroundColor: '#1B3C53', animationDelay: '0.1s' }}></div>
          <div className={`absolute top-32 right-20 w-24 h-24 rounded-full transition-all duration-1000 ${
            isVisible.coreValues ? 'animate-bounce' : 'opacity-0 scale-0'
          }`} style={{ backgroundColor: '#456882', animationDelay: '0.3s' }}></div>
          <div className={`absolute bottom-20 left-1/4 w-20 h-20 rounded-full transition-all duration-1000 ${
            isVisible.coreValues ? 'animate-bounce' : 'opacity-0 scale-0'
          }`} style={{ backgroundColor: '#D2C1B6', animationDelay: '0.5s' }}></div>
          <div className={`absolute bottom-32 right-1/3 w-28 h-28 rounded-full transition-all duration-1000 ${
            isVisible.coreValues ? 'animate-bounce' : 'opacity-0 scale-0'
          }`} style={{ backgroundColor: '#1B3C53', animationDelay: '0.7s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B3C53' }}>
              Our Core Values
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#456882' }}>
              The foundation of everything we do at Bedrock Care
            </p>
          </div> */}

          <div className="grid md:grid-cols-3 gap-8">
            {/* Connection */}
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-12 h-12 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1B3C53' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Connection</h3>
              <p className="text-lg leading-relaxed transform transition-all duration-300 group-hover:translate-y-1" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
                Building meaningful relationships between residents, families, and our compassionate care team.
              </p>
            </div>

            {/* Well-being */}
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-12 h-12 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1B3C53' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Well-being</h3>
              <p className="text-lg leading-relaxed transform transition-all duration-300 group-hover:translate-y-1" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
                Promoting physical, emotional, and spiritual wellness through personalized care and support.
              </p>
            </div>

            {/* Security */}
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-12 h-12 transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1B3C53' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Security</h3>
              <p className="text-lg leading-relaxed transform transition-all duration-300 group-hover:translate-y-1" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
                Providing a safe, secure environment where residents and families feel protected and at peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" ref={whyChooseRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.whyChoose ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Why Choose Bedrock Care?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
              Experience the difference of compassionate, professional care in a warm, welcoming environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Nurse Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/nunrse1.jpg" 
                  alt="Compassionate nursing care at Bedrock Care" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Our Dedicated Care Team
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed transform transition-all duration-500 hover:translate-x-2" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, sans-serif' }}>
                At Bedrock Care, our experienced nursing staff provides round-the-clock care with compassion, 
                expertise, and genuine concern for each resident&apos;s well-being. We understand that quality 
                care goes beyond medical treatment—it&apos;s about creating meaningful connections and ensuring 
                comfort in every moment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  <span style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>24/7 Professional Nursing Care</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  <span style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>Personalized Care Plans</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  <span style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>Family-Centered Approach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* 24/7 Care Section */}
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/landing1.jpg)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                24/7 Professional Nursing Care
              </h3>
              <p className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
                Round-the-clock professional nursing care with continuous monitoring, emergency response, and medication management ensuring residents receive immediate attention whenever needed.
              </p>
            </div>

            {/* Compassionate Care Section */}
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/landing2.jpg)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Compassionate Care
              </h3>
              <p className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
                Personalized care plans with individual assessments, personal preferences, and regular reviews tailored to each resident&apos;s specific needs.
              </p>
            </div>

            {/* Comfort Environment Section */}
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/landing3.jpg)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Comfortable Environment
              </h3>
              <p className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
                A warm, welcoming environment with home-like spaces, garden areas, and common areas designed to promote healing and a sense of home.
              </p>
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
      <section className="py-20" style={{ backgroundColor: '#F9F3EF' }} ref={luxuryRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 text-center transition-all duration-1000 ${
            isVisible.luxury ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Luxury Care, Redefined
            </h2>
            <p className="text-lg md:text-xl" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
              Experience the pinnacle of luxury care where every detail is crafted for comfort, dignity, and exceptional living.
            </p>
          </div>

          {/* Luxury Care Description */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.luxury ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.2s' }}>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#456882', fontFamily: 'Libre Baskerville Regular, serif' }}>
              At Bedrock Care, we redefine luxury care through our exclusive boutique estat
              e designed for discerning families. 
              Our concierge-level medical oversight, white-glove lifestyle services, and gourmet culinary experiences create 
              an unparalleled environment where every detail reflects our commitment to exceptional living. From bespoke memory 
              care programs to curated wellness experiences, we provide the highest standard of personalized care in an intimate, 
              elegant setting that feels like home.
            </p>
          </div>

          {/* Luxury Estate Image */}
          <div className={`relative overflow-hidden rounded-2xl shadow-2xl group transition-all duration-1000 ${
            isVisible.luxury ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="aspect-[16/9] bg-cover bg-center bg-no-repeat transform transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(/luxury2.png)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
