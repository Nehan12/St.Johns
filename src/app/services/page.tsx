'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-[20%] pb-10 md:pb-[5%] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[85vh]"
        style={{
          backgroundImage: 'url(/services.jpg)',
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Our Services
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
              Comprehensive care services designed to meet the unique needs of each resident at Bedrock Care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#456882]/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#1B3C53]/15 to-transparent rounded-full translate-y-36 -translate-x-36"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Our Core Services
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>
              At Bedrock Care, we provide comprehensive care services tailored to meet the unique needs of each resident.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* 24-Hour Nursing Care */}
            <div className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#456882]/10 rounded-lg p-8 border border-[#D2C1B6]/30 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#456882' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                24-Hour Nursing Care
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Round-the-clock professional nursing care ensuring residents receive immediate attention and medical support whenever needed.
              </p>
              <Link 
                href="/24-hour-nursing"
                className="inline-block bg-gradient-to-r from-[#1B3C53] to-[#456882] hover:from-[#456882] hover:to-[#1B3C53] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
              >
                Learn More
              </Link>
            </div>

            {/* Palliative Care */}
            <div className="bg-gradient-to-br from-[#456882]/20 to-[#1B3C53]/10 rounded-lg p-8 border border-[#456882]/30 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#1B3C53' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Palliative Care
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Compassionate care focused on comfort, dignity, and quality of life for residents with serious illnesses.
              </p>
              <Link 
                href="/palliative-care"
                className="inline-block bg-gradient-to-r from-[#1B3C53] to-[#456882] hover:from-[#456882] hover:to-[#1B3C53] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
              >
                Learn More
              </Link>
            </div>

            {/* Respite Care */}
            <div className="bg-gradient-to-br from-[#1B3C53]/20 to-[#D2C1B6]/10 rounded-lg p-8 border border-[#1B3C53]/30 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Respite Care
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Short-term support providing professional nursing care while offering carers the opportunity to rest and recharge.
              </p>
              <Link 
                href="/respite"
                className="inline-block bg-gradient-to-r from-[#1B3C53] to-[#456882] hover:from-[#456882] hover:to-[#1B3C53] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Additional Services */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Additional Services
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>
              We also provide specialized care for residents with specific conditions and comprehensive support services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Specialist Conditions */}
            <div className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#456882]/10 rounded-lg p-8 border border-[#D2C1B6]/30 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Specialist Conditions Care
              </h3>
              <p className="text-gray-700 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Specialized care for residents with dementia, Alzheimer&apos;s, Parkinson&apos;s, and other complex conditions requiring expert attention and support.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Dementia and memory care support
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Neurological condition management
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Specialized therapy programs
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Family education and support
                </li>
              </ul>
              <Link 
                href="/specialist-conditions"
                className="inline-block bg-gradient-to-r from-[#1B3C53] to-[#456882] hover:from-[#456882] hover:to-[#1B3C53] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
              >
                Learn More
              </Link>
            </div>

            {/* Residential Care */}
            <div className="bg-gradient-to-br from-[#456882]/20 to-[#1B3C53]/10 rounded-lg p-8 border border-[#456882]/30 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Residential Care
              </h3>
              <p className="text-gray-700 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Long-term residential care providing comprehensive support for residents who need ongoing assistance with daily activities and medical care.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Daily living assistance
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Medication management
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Social activities and engagement
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#1B3C53' }}></div>
                  Nutritious meals and dietary support
                </li>
              </ul>
              <Link 
                href="/residential-care"
                className="inline-block bg-gradient-to-r from-[#1B3C53] to-[#456882] hover:from-[#456882] hover:to-[#1B3C53] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Support Services */}
          <div className="bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/20 rounded-lg p-8 border border-[#D2C1B6]/30">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Support Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#456882' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>Pharmacy Services</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>On-site pharmacy and medication management</p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#1B3C53' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>Recreation Therapy</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Engaging activities and social programs</p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>Educational Programs</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Health education and wellness programs</p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#456882' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>24/7 Support</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Emergency response and family support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
