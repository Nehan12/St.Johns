'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TwentyFourHourNursing() {
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
          backgroundImage: 'url(/new7.jpg)',
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
              24-Hour Nursing Care              
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
            Expert-led medical oversight with compassionate, bespoke support meticulously curated around your needs. Experience nursing care redefined.
            </p>
          </div>
        </div>
      </section>

      {/* What is 24-Hour Nursing Care? */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#D2C1B6] via-[#F5F1ED] to-[#E8D5C4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#456882]/20 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1B3C53]/20 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              What is 24-Hour Nursing Care?
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto px-4" style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>
              24-hour nursing care is a specialised service that provides round-the-clock medical supervision for those with complex medical needs. At Bedrock Care, you receive the highest level of care, tailored precisely to your health requirements and lifestyle choices.
            </p>
          </div>
        </div>
      </section>

      {/* Who is 24-Hour Nursing Care For? */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D2C1B6] via-[#456882]/30 to-transparent opacity-30 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#456882] via-[#1B3C53]/20 to-transparent opacity-25 rounded-full translate-y-40 -translate-x-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#D2C1B6]/20 to-[#456882]/20 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Who is 24-Hour Nursing Care For?
              </h2>
              <p className="text-lg mb-8" style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>
                Our 24-hour nursing care is designed for individuals who require ongoing medical supervision due to chronic illnesses, post-surgical recovery, neurological conditions, or complex needs such as dementia care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#D2C1B6] to-[#456882] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>Chronic illness management</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.1s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#456882] to-[#1B3C53] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>Post-surgical recovery</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.2s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>Neurological conditions</span>
                </div>
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.3s' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#D2C1B6] to-[#456882] shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'white' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>Dementia and memory care</span>
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

      {/* Our Approach */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#456882]/20 to-transparent rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1B3C53]/15 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Our Approach to 24-Hour Nursing Care
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
              A refined approach combining world-class clinical expertise with exceptional hospitality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Individuality Honoured
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Your choices, personal journey and voice guide your care. Every detail is tailored with thoughtfulness and intuition, anticipating your every need and preference.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Clinical Excellence
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Your care is informed by the latest advancements in healthcare, delivered by highly skilled professionals and underpinned by our commitment to continual refinement.
              </p>
            </div>
            
              <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Holistic Wellbeing
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Every experience is curated to inspire joy, stimulate the senses and nurture both body and mind, ensuring daily life is enriched with purpose and fulfilment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D2C1B6]/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#456882]/15 to-transparent rounded-full translate-y-36 -translate-x-36"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              What We Offer in 24-Hour Nursing Care
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
              Bedrock Care provides a fully comprehensive care experience tailored to you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#456882]/10 rounded-lg p-6 border border-[#D2C1B6]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                24/7 Nursing Care Services
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Expert-led medical oversight for complete reassurance and peace of mind.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#456882]/20 to-[#1B3C53]/10 rounded-lg p-6 border border-[#456882]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Complex Care Management
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Tailored support for dementia, stroke recovery and neurological conditions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#1B3C53]/20 to-[#D2C1B6]/10 rounded-lg p-6 border border-[#1B3C53]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Rehabilitative Therapy
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Physiotherapy, speech therapy and occupational therapy to enhance mobility and independence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#456882]/10 rounded-lg p-6 border border-[#D2C1B6]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Luxury Accommodation
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Spacious, wheelchair-accessible suites designed for your comfort and independence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#456882]/20 to-[#1B3C53]/10 rounded-lg p-6 border border-[#456882]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Gourmet Nutrition
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Exquisite, chef-inspired cuisine tailored to your dietary preferences and health needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1B3C53]/20 to-[#D2C1B6]/10 rounded-lg p-6 border border-[#1B3C53]/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Bespoke Experiences
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Personalized activities and programs designed to enrich your wellbeing and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bedrock Care */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#456882]/15 to-transparent rounded-full -translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1B3C53]/10 to-transparent rounded-full translate-x-48 translate-y-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Why Choose Bedrock Care for 24-Hour Nursing Care?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Unparalleled Luxury
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Elegant surroundings, premium amenities and a warm community atmosphere.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Expert-Led Care
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Care delivered by specialists in nursing home care with years of experience.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Bespoke Experiences
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Tailored programmes to enrich your lifestyle and enhance your wellbeing.
              </p>
            </div>

            {/* <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                Award-Winning Care
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Recognised for excellence in nursing care and exceptional service delivery.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

