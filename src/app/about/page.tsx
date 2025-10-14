'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Our Facility
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Sri Lanka, we provide exceptional care in a warm, welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-700 mb-6">
                At St. John&apos;s Palliative & Wellness Residence, we understand that choosing a care facility is one of the most important decisions you&apos;ll make. Our dedicated team of healthcare professionals is committed to providing the highest quality of care while maintaining the dignity and comfort of each resident.
              </p>
              <p className="text-lg text-gray-700">
                We believe that every individual deserves compassionate, person-centered care that respects their unique needs, preferences, and life experiences. Our approach combines medical expertise with heartfelt care to create an environment where residents can thrive.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Nursing Care</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Compassionate</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">5★</div>
                  <div className="text-sm text-gray-600">Quality Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Compassion</h3>
                <p className="text-gray-600">Treating every resident with empathy, kindness, and understanding.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Maintaining the highest standards of care and professionalism.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Respect</h3>
                <p className="text-gray-600">Honoring the dignity and autonomy of every individual.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Continuously improving our care through modern practices.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Team</h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              Our multidisciplinary team of healthcare professionals includes registered nurses, certified nursing assistants, 
              physical therapists, occupational therapists, social workers, and spiritual care providers. Each team member 
              is carefully selected for their expertise, compassion, and commitment to providing exceptional care.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Medical Team</h3>
                <p className="text-gray-600">Board-certified physicians and specialists providing comprehensive medical care.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Nursing Staff</h3>
                <p className="text-gray-600">Experienced registered nurses and certified nursing assistants available 24/7.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Support Services</h3>
                <p className="text-gray-600">Therapists, social workers, and spiritual care providers supporting holistic wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
