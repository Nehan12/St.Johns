'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Respite() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
              Respite Care
            </h1>
            <p className="text-xl text-white max-w-3xl mt-4 mx-auto" style={{ fontFamily: 'Allrounder Monument Medium, sans-serif' }}>
              Short-term care services to provide relief for families and caregivers while ensuring quality care for your loved one.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Temporary Care Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our respite care services provide temporary relief for families and caregivers, ensuring your loved one receives quality care while you take a well-deserved break.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Flexible short-term stays (1-30 days)</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Professional nursing care and supervision</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Emergency respite for urgent situations</span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 mr-3 w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>Peace of mind for families and caregivers</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When to Consider Respite Care</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Family vacation or travel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Caregiver burnout or illness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Medical appointments or procedures</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Trial period before permanent care</span>
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
