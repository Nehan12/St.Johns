'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for scroll animations
  const textContentRef = useRef<HTMLElement>(null);
  const coreValuesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const luxuryRef = useRef<HTMLElement>(null);

  const slides = [
    { 
      image: '/landing1.jpg', 
      alt: 'Heritage Care Facility - Main Building',
    },
    { 
      image: '/landing2.jpg', 
      alt: 'Heritage Care Facility - Garden Area',
    },
    { 
      image: '/landing3.jpg', 
      alt: 'Heritage Care Facility - Interior',
    }
  ];


  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        rootMargin: '0px 0px -100px 0px'
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

      {/* Hero Section - Business Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-30 text-center max-w-6xl mx-auto px-6 py-24">
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p 
              className="text-sm md:text-base uppercase tracking-[0.3em] text-white/90 mb-8 font-light"
              style={{ fontFamily: 'Source Sans 3, sans-serif' }}
            >
              WE ARE HERITAGE CARE
            </p>
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              style={{ 
                fontFamily: 'DobkinScript',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              We create care experiences that makes people&apos;s lives easier & better.
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/about"
              className="inline-flex items-center space-x-2 text-white text-lg hover:text-white/80 transition-all duration-300 group"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
              <span className="border-b-2 border-white pb-1">How it works?</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </Link>
              <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-white text-lg hover:text-white/80 transition-all duration-300 group"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
              <span className="border-b-2 border-white pb-1">Read the full story</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </Link>
          </div>
        </div>

        {/* Minimal Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-1.5 bg-white' 
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white" ref={textContentRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.textContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p 
              className="text-sm uppercase tracking-[0.3em] text-[#456882] mb-4"
              style={{ fontFamily: 'Source Sans 3, sans-serif' }}
            >
              OUR SERVICES
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Allrounder Monument Regular' }}
            >
              We Will Help Your<br />Family Growing
            </h2>
          </div>

          {/* Services Grid */}
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible.textContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Residential Care',
                description: 'Comprehensive 24/7 residential care services designed to provide comfort, dignity and unwavering support.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Memory Care',
                description: 'Specialized memory care programs tailored to individual needs with compassionate expert guidance.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Luxury Facilities',
                description: 'State-of-the-art boutique estate with white-glove services and gourmet culinary experiences.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1B3C53] to-[#456882] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1B3C53] transition-colors duration-300"
                  style={{ fontFamily: 'Allrounder Monument Regular' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Libre Baskerville Regular' }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gray-50" ref={coreValuesRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible.coreValues ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/landing2.jpg" 
                  alt="Heritage Care Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible.coreValues ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <p 
                className="text-sm uppercase tracking-[0.3em] text-[#456882] mb-4"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                ABOUT OUR COMPANY
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: 'Allrounder Monument Regular' }}
              >
                We are team of expert people with creativity ideas
              </h2>
              <p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                style={{ fontFamily: 'Libre Baskerville Regular' }}
              >
                At Heritage Care, we believe that exceptional care comes from a team dedicated to innovation, compassion, and excellence. Our approach combines medical expertise with personalized attention to create meaningful care experiences.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: '🎨', title: 'Designing', description: 'Expert in care planning' },
                  { icon: '💻', title: 'Development', description: 'Innovative solutions' },
                  { icon: '👥', title: 'Social Care', description: 'Community connection' },
                  { icon: '🏥', title: 'Healthcare', description: 'Medical excellence' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 text-2xl">{feature.icon}</div>
                    <div>
                      <h4 
                        className="font-bold text-gray-900 mb-1"
                        style={{ fontFamily: 'Allrounder Monument Regular' }}
                      >
                        {feature.title}
                      </h4>
                      <p 
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'Source Sans 3' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p 
              className="text-sm uppercase tracking-[0.3em] text-[#456882] mb-4"
              style={{ fontFamily: 'Source Sans 3, sans-serif' }}
            >
              ABOUT OUR COMPANY
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Allrounder Monument Regular' }}
            >
              Our care process road
            </h2>
            </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: '01.',
                title: 'Initial Assessment',
                description: 'We begin with a comprehensive evaluation to understand your unique needs and preferences.'
              },
              {
                number: '02.',
                title: 'Personalized Care Plan',
                description: 'Our team develops a customized care strategy tailored specifically for you.'
              },
              {
                number: '03.',
                title: 'Ongoing Excellence',
                description: 'Continuous monitoring and adaptation ensure the highest quality of care every day.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <span 
                    className="text-6xl font-bold text-gray-200 group-hover:text-[#1B3C53] transition-colors duration-500"
                    style={{ fontFamily: 'Allrounder Monument Regular' }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Allrounder Monument Regular' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Libre Baskerville Regular' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Gallery - Projects Style */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden" ref={whyChooseRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p 
              className="text-sm uppercase tracking-[0.3em] text-[#456882] mb-4"
              style={{ fontFamily: 'Source Sans 3, sans-serif' }}
            >
              FACILITIES WE OFFER
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Allrounder Monument Regular' }}
            >
              Our beautiful care facilities
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Libre Baskerville Regular' }}
            >
              Let&apos;s check some of our perfect spaces designed for comfort and care.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-200 ${
            isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {[
              { image: '/landing1.jpg', title: 'Main Facility', subtitle: 'Residential Care, 24/7 Support' },
              { image: '/landing2.jpg', title: 'Garden Area', subtitle: 'Outdoor Spaces, Recreation' },
              { image: '/landing3.jpg', title: 'Living Spaces', subtitle: 'Comfortable Rooms, Home-like' },
              { image: '/nunrse1.jpg', title: 'Care Team', subtitle: 'Professional Staff, Expert Care' },
              { image: '/luxury2.png', title: 'Luxury Estate', subtitle: 'Premium Facilities, Boutique' },
              { image: '/landing1.jpg', title: 'Common Areas', subtitle: 'Social Spaces, Community' }
            ].map((facility, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${facility.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Allrounder Monument Regular' }}
                    >
                      {facility.title}
              </h3>
                    <p 
                      className="text-sm text-white/90"
                      style={{ fontFamily: 'Source Sans 3' }}
                    >
                      {facility.subtitle}
                    </p>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <Link 
              href="/about" 
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#1B3C53] to-[#456882] text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              style={{ fontFamily: 'Source Sans 3' }}
            >
              <span>View all facilities</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden" ref={luxuryRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.luxury ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p 
              className="text-sm uppercase tracking-[0.3em] text-[#456882] mb-4"
              style={{ fontFamily: 'Source Sans 3, sans-serif' }}
            >
              OUR TESTIMONIALS
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Allrounder Monument Regular' }}
            >
              Our happy families
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible.luxury ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {[
              {
                quote: '"Heritage Care provided exceptional service for my mother. The professional staff and caring environment made all the difference. I highly recommend them to all families."',
                name: 'Sarah Anderson',
                role: 'Family Member',
                avatar: '👩'
              },
              {
                quote: '"I have worked with Heritage Care for both of my elderly parents. They helped us navigate difficult times with compassion and expertise. Truly outstanding care."',
                name: 'Michael Chen',
                role: 'Son of Resident',
                avatar: '👨'
              },
              {
                quote: '"The level of care and attention to detail at Heritage Care is unmatched. They treat every resident with dignity and respect. We couldn\'t be more grateful."',
                name: 'Jennifer Williams',
                role: 'Daughter of Resident',
                avatar: '👩‍⚕️'
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="text-6xl text-[#1B3C53]/20 mb-4">"</div>
                
                {/* Quote Text */}
                <p 
                  className="text-gray-700 leading-relaxed mb-6 italic"
                  style={{ fontFamily: 'Libre Baskerville Regular' }}
                >
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3C53] to-[#456882] flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 
                      className="font-bold text-gray-900"
                      style={{ fontFamily: 'Allrounder Monument Regular' }}
                    >
                      {testimonial.name}
                    </h4>
                    <p 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'Source Sans 3' }}
                    >
                      {testimonial.role}
            </p>
          </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1B3C53] to-[#456882] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Allrounder Monument Regular' }}
          >
            Ready? Start your family&apos;s<br />care journey with us
          </h2>
          <p 
            className="text-xl text-white/90 mb-10 leading-relaxed"
            style={{ fontFamily: 'Libre Baskerville Regular' }}
          >
            We are here to provide exceptional care and support for your loved ones
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-[#1B3C53] rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
            style={{ fontFamily: 'Source Sans 3' }}
          >
            <span>Contact Us Today</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
