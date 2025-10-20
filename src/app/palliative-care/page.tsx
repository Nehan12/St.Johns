'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PalliativeCare() {
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
          backgroundImage: 'url(/new8.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges'
        } as React.CSSProperties}
      >
        {/* Colorful Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C53]/80 via-[#456882]/70 to-[#D2C1B6]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C53]/40 via-transparent to-[#D2C1B6]/30"></div> */}
           <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              Palliative Care              
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
            At Bredrock Care, palliative care is our calling. We offer comfort, respect, and emotional support to individuals and families during life’s most delicate moments.
            </p>
          </div>
        </div>
      </section>

      {/* What is Palliative Care? */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#D2C1B6] via-[#F5F1ED] to-[#E8D5C4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#456882]/20 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1B3C53]/20 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                What is Palliative Care?
              </h2>
              <p className="text-lg mb-8" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                Palliative care is a highly specialised and compassionate approach to supporting individuals with illnesses that cannot be cured. It is about enhancing your quality of life, alleviating discomfort and providing a personalised care journey that respects your wishes and values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#D2C1B6] to-[#456882] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Progressive illnesses and cancer care</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.1s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#456882] to-[#1B3C53] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Neurological conditions</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.2s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Advanced respiratory diseases</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.3s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#D2C1B6] to-[#456882] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>Memory care and dementia support</span>
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

      {/* Our Approach to Quality Palliative Care */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury2.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#456882]/20 to-transparent rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1B3C53]/15 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Our Approach to Quality Palliative Care
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
              At Bredrock Care, we uphold the highest standards of palliative care, following the accredited Gold Standards Framework.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Palliative Care & Symptom Management
              </h3>
              <p className="text-sm transform transition-all duration-300 group-hover:translate-y-1" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                Ensuring relief from pain and discomfort with expert medical oversight.
              </p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Dedicated Nursing Expertise
              </h3>
              <p className="text-sm transform transition-all duration-300 group-hover:translate-y-1" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                Delivered by our specialist team with years of palliative care experience.
              </p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 transform transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Emotional & Spiritual Support
              </h3>
              <p className="text-sm transform transition-all duration-300 group-hover:translate-y-1" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                Providing guidance to both Members and their families throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bredrock Care for Palliative Care */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury2.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#456882]/15 to-transparent rounded-full -translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1B3C53]/10 to-transparent rounded-full translate-x-48 translate-y-48"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Why Choose Bredrock Care for Palliative Care?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
              Bredrock Care&apos;s reputation for excellence is built upon our commitment to providing unparalleled end of life care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 transform transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Unparalleled Luxury
              </h3>
              <p className="text-sm transform transition-all duration-300 group-hover:translate-y-1" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                Elegant surroundings with premium amenities and warm hospitality.
              </p>
            </div>

            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 transform transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Expert-Led Medical Care
              </h3>
              <p className="text-sm transform transition-all duration-300 group-hover:translate-y-1" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                Care delivered by specialists in palliative and end-of-life care.
              </p>
            </div>

            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 transform transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Bespoke Care Plans
              </h3>
              <p className="text-sm transform transition-all duration-300 group-hover:translate-y-1" style={{ fontFamily: 'Rosehot, sans-serif', color: '#456882' }}>
                Tailored programmes designed around your personal preferences and needs.
              </p>
            </div>

            {/* <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12" style={{ backgroundColor: '#D2C1B6' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1B3C53' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 transform transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#D2C1B6' }}>
                Award-Winning Care
              </h3>
              <p className="text-sm transform transition-all duration-300 group-hover:translate-y-1" style={{ fontFamily: 'Rosehot, sans-serif', color: '#F5F1ED' }}>
                Recognised for excellence in palliative care and exceptional service delivery.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

