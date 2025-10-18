'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TwentyFourHourNursing() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/24-hour-nursing" />

      {/* Hero Section */}
      <section 
        className="relative py-[20%] pb-[5%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/services.jpg)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-50 ">
          <div className="text-center mb-1">
            <h1 className="text-7xl space-x-2  md:text-7xl font-bold text-white " style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              24-Hour Nursing Care
            </h1>
            <p className="text-xl text-white max-w-3xl mt-4 mx-auto" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              Round-the-clock professional nursing care ensuring continuous medical supervision and immediate response to any health concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Continuous Medical Supervision</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our 24-hour nursing care provides constant medical supervision, ensuring residents receive immediate attention and professional care whenever needed, day or night.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Continuous monitoring of vital signs</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Immediate response to medical emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Medication administration and management</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Wound care and medical procedures</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Our Nurses Provide</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Regular health assessments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Pain management and comfort care</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Coordination with doctors and specialists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Family communication and updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
