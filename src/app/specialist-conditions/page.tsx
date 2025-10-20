'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SpecialistConditions() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#1B3C53] border-t-transparent mx-auto mb-4"></div>
          <p className="text-[#1B3C53] text-lg" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-[20%] pb-10 md:pb-[5%] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[85vh]"
        style={{
          backgroundImage: 'url(/new3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges'
        } as React.CSSProperties}
      >
        {/* Colorful Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C53]/80 via-[#456882]/70 to-[#D2C1B6]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C53]/40 via-transparent to-[#D2C1B6]/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              Specialist Conditions
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              At Bredrock Care, specialist care means so much more than clinical support – it&apos;s the art of delivering exceptional, personalised care with warmth and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Specialist Care Designed Around You */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#D2C1B6] via-[#F5F1ED] to-[#E8D5C4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#456882]/20 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1B3C53]/20 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Specialist Care Designed Around You
              </h2>
              <p className="text-lg mb-8" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                As a Bredrock Care Member, you&apos;ll be supported by expert teams who specialise in complex and long-term conditions including Alzheimer&apos;s, Parkinson&apos;s and end-of-life care. Every element of your care is guided by clinical precision and heartfelt understanding, tailored to enhance both your health and happiness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#D2C1B6] to-[#456882] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Alzheimer&apos;s and dementia care</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.1s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#456882] to-[#1B3C53] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Parkinson&apos;s disease management</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.2s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Stroke recovery and rehabilitation</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.3s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#D2C1B6] to-[#456882] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Multiple sclerosis and complex conditions</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slideInRight">
              <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl" style={{ backgroundImage: 'url(/nunrse1.jpg)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C53]/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialist Memory Care Programme - Luminare */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury2.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#456882]/20 to-transparent rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1B3C53]/15 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Our Specialist Memory Care Programme - Luminare
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
              Our pioneering memory care programme, Luminare, blends personalised therapies, leading healthcare technology and a compassionate approach to support those living with memory loss – helping you live each day with joy and enrichment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Personalised Cognitive Therapies
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Tailored cognitive stimulation programmes designed to maintain mental acuity and provide meaningful engagement.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Advanced Technology
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Leading healthcare technology and innovative tools to support memory care and enhance daily living experiences.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Compassionate Support
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                A compassionate approach ensuring every moment is met with warmth, understanding and tailored engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Care Specialists for Complex Conditions */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D2C1B6]/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#456882]/15 to-transparent rounded-full translate-y-36 -translate-x-36"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Private Care Specialists for Complex Conditions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Rosehot, sans-serif' }}>
              You might benefit from private care specialists if you&apos;re managing conditions such as Alzheimer&apos;s, Parkinson&apos;s, stroke recovery, heart disease, multiple sclerosis, cancer or frailty-related illnesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#456882]/10 rounded-lg p-6 border border-[#D2C1B6]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                24-Hour Medical Care
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Highly tailored medical care delivered by specialist teams with expertise in complex neurological and medical conditions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#456882]/20 to-[#1B3C53]/10 rounded-lg p-6 border border-[#456882]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Therapeutic Engagement
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Specialised therapeutic programmes designed to enhance mobility, cognitive function and overall quality of life.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#1B3C53]/20 to-[#D2C1B6]/10 rounded-lg p-6 border border-[#1B3C53]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Couples Care
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Supporting couples to remain together even when their care needs differ, ensuring they can stay connected.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#456882]/10 rounded-lg p-6 border border-[#D2C1B6]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Short-term Rehabilitation
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Expert rehabilitation services for those transitioning from hospital or requiring intensive recovery support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#456882]/20 to-[#1B3C53]/10 rounded-lg p-6 border border-[#456882]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Long-term Support
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Comprehensive long-term care plans tailored to your evolving needs and designed to honour your wishes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1B3C53]/20 to-[#D2C1B6]/10 rounded-lg p-6 border border-[#1B3C53]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Family Partnership
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Open communication with families, regular updates and guidance at every stage of the care journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bredrock Care for Specialist Conditions */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#456882]/15 to-transparent rounded-full -translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1B3C53]/10 to-transparent rounded-full translate-x-48 translate-y-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Why Choose Bredrock Care for Specialist Conditions?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Clinical Excellence
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Expert teams specialising in complex conditions with years of experience and clinical precision.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Personalised Care Plans
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Fully bespoke care plans including 24-hour nursing, memory care, therapies and enriching experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Luxurious Surroundings
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Elegant residences with premium amenities designed for comfort, dignity and enhanced quality of life.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Family Support
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                Comprehensive family support with regular updates, guidance and partnership throughout the care journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}