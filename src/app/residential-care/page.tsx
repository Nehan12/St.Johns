'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ResidentialCare() {
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
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Residential Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
              Long-term residential care in a comfortable, home-like environment with 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* What is Residential Care */}
      <section className="py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              What is Residential Care?
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto" style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>
              Residential care offers a warm, supportive environment where you can enjoy professional assistance with daily living while preserving your independence and living a fulfilled life. Unlike domiciliary care, which takes place in your own home, residential care provides continuous support within a dedicated setting, ensuring expert care, enriching experiences and a lifestyle tailored to your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Who is Residential Care for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Who is Residential Care for?
              </h2>
              <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                If living independently has become challenging due to physical health, mobility limitations or cognitive conditions, residential care offers the perfect balance of support and independence. More than just assistance, it offers a lively and welcoming environment, expert-led professional care services and a lifestyle designed to enhance your wellbeing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Physical health challenges requiring ongoing support</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Mobility limitations needing assistance</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Cognitive conditions requiring specialized care</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/20 rounded-lg p-8 border border-[#D2C1B6]/30">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Our Approach to Professional Care
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Heritage Care sets the benchmark for residential care by blending expert-led healthcare with uncompromising comfort and wellbeing. Our holistic approach ensures you receive outstanding physical, emotional and social support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Personalized care plans</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>24/7 professional support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Enriching social experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Professional Care Services */}
      <section className="py-20 bg-gradient-to-br from-[#1B3C53]/5 to-[#D2C1B6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Our Professional Care Services
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>
              With a dedication to excellence, Heritage Care offers care services that are highly personalized. Our approach respects your individuality, supporting independence while providing the highest standard of professional care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-[#D2C1B6]/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Personal Care
              </h3>
              <p className="text-gray-600 text-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Assistance with daily living activities, personal hygiene, and maintaining dignity and independence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border border-[#D2C1B6]/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Medication Management
              </h3>
              <p className="text-gray-600 text-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Professional oversight of medication schedules, administration, and health monitoring.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border border-[#D2C1B6]/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Social Engagement
              </h3>
              <p className="text-gray-600 text-center" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                Enriching activities, social events, and opportunities to build meaningful relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Residential Care */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
              Types of Residential Care
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Libre Baskerville Regular, serif', color: '#456882' }}>
              Heritage Care offers tailored types of residential care to suit your personal needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/20 rounded-lg p-8 border border-[#D2C1B6]/30">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Long-term Residential Care
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                A permanent, supportive home with 24-hour nursing care, designed for those who need ongoing assistance and a comfortable living environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#456882] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Permanent accommodation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#456882] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>24/7 nursing support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#456882] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Personalized care plans</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#E8F4FD] via-[#F8F9FA] to-[#D2C1B6]/20 rounded-lg p-8 border border-[#456882]/30">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif', color: '#1B3C53' }}>
                Short-term Respite Care
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>
                For recovery after illness or surgery, or when primary carers need a break. Short-term stays with full care support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1B3C53] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Recovery support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1B3C53] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Carer respite</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1B3C53] rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Libre Baskerville Regular, serif' }}>Flexible duration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
