'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
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

      {/* Hero Section with Image */}
      <section 
        className="relative py-20 md:py-[20%] pb-10 md:pb-[5%] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[85vh]"
        style={{
          backgroundImage: 'url(/about.jpg)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              About Us              
            </h1>
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              Excellence in luxury care, where compassion meets innovation in the heart of Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Our Story
            </h2>
            <p className="text-xl max-w-4xl mx-auto" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>
              Founded on the principles of compassion, excellence, and innovation, Bredrock Care has been transforming lives through exceptional healthcare services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                  <span className="text-2xl font-bold" style={{ color: '#1B3C53' }}>2010</span>
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, #D2C1B6, transparent)' }}></div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Foundation</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>
                Bredrock Care was established with a vision to provide world-class healthcare services in Sri Lanka.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                  <span className="text-2xl font-bold" style={{ color: '#1B3C53' }}>2015</span>
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, #D2C1B6, transparent)' }}></div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Expansion</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>
                Expanded our services to include specialized care programs and luxury amenities.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                  <span className="text-2xl font-bold" style={{ color: '#1B3C53' }}>2024</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Innovation</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>
                Leading the industry with cutting-edge technology and personalized care approaches.
              </p>
            </div>
          </div> */}

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-[#1B3C53] to-[#456882] rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Our Mission
            </h3>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Rosehot, sans-serif' }}>
              To provide exceptional, compassionate care that enhances the quality of life for our residents while maintaining the highest standards of medical excellence and personal dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F3EF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Our Approach to Care
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>
              A holistic approach that combines medical expertise with personalized attention
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1B3C53' }}>
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Assessment & Planning</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                      Comprehensive evaluation of each resident&apos;s needs, preferences, and medical requirements to create personalized care plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#456882' }}>
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Implementation</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                      Dedicated care team works closely with residents and families to ensure all needs are met with compassion and expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D2C1B6' }}>
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Monitoring & Adjustment</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Rosehot, sans-serif' }}>
                      Continuous monitoring and regular adjustments to care plans ensure optimal outcomes and resident satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

    
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/landing2.jpg)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
          
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#1B3C53' }}>98%</div>
                  <div className="text-sm" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>Satisfaction Rate</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#1B3C53' }}>24/7</div>
                  <div className="text-sm" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>Care Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
              Leadership & Recognition
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>
              Recognized excellence in healthcare delivery and patient outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: '#1B3C53' }}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Excellence Award</h3>
              <p className="text-sm" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>Healthcare Quality 2023</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: '#456882' }}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Certification</h3>
              <p className="text-sm" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>ISO 9001:2015</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: '#D2C1B6' }}>
                  <svg className="w-10 h-10" style={{ color: '#1B3C53' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Patient Safety</h3>
              <p className="text-sm" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>Zero Incidents 2023</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: '#1B3C53' }}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Compassion Award</h3>
              <p className="text-sm" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>Family Choice 2023</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1B3C53] to-[#456882] rounded-2xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80" style={{ fontFamily: 'Rosehot, sans-serif' }}>Healthcare Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80" style={{ fontFamily: 'Rosehot, sans-serif' }}>Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/80" style={{ fontFamily: 'Rosehot, sans-serif' }}>Lives Touched</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80" style={{ fontFamily: 'Rosehot, sans-serif' }}>Care Available</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
