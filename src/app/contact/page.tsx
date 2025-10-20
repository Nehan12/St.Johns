'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/landing3.jpg)',
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Rosehot, sans-serif' }}>
              We&apos;re here to help. Contact us to learn more about our services or to schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#456882]/20 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1B3C53]/20 to-transparent rounded-full translate-x-40 translate-y-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D2C1B6] to-[#456882] rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Location</h3>
                    <p style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>123 Care Street<br />Colombo, Sri Lanka 01000</p>
                  </div>
                </div>

                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.1s' }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#456882] to-[#1B3C53] rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Phone</h3>
                    <p style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>+94 (0) 11 234 5678</p>
                    <p style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>+94 (0) 11 234 5679 (Emergency)</p>
                  </div>
                </div>

                <div className="flex items-start group transform transition-all duration-300 hover:translate-x-2" style={{ transitionDelay: '0.2s' }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1B3C53] to-[#D2C1B6] rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Email</h3>
                    <p style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>info@stjohnspalliative.lk</p>
                    <p style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>admissions@stjohnspalliative.lk</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/30 rounded-lg p-8 shadow-lg border border-[#D2C1B6]/20">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#D2C1B6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#456882] focus:border-transparent transition-all duration-300"
                    style={{ fontFamily: 'Rosehot, sans-serif', color: '#1B3C53' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#D2C1B6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#456882] focus:border-transparent transition-all duration-300"
                    style={{ fontFamily: 'Rosehot, sans-serif', color: '#1B3C53' }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#D2C1B6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#456882] focus:border-transparent transition-all duration-300"
                    style={{ fontFamily: 'Rosehot, sans-serif', color: '#1B3C53' }}
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                    Type of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#D2C1B6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#456882] focus:border-transparent transition-all duration-300"
                    style={{ fontFamily: 'Rosehot, sans-serif', color: '#1B3C53' }}
                  >
                    <option value="general">General Information</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#D2C1B6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#456882] focus:border-transparent transition-all duration-300"
                    placeholder="Please tell us how we can help you..."
                    style={{ fontFamily: 'Rosehot, sans-serif', color: '#1B3C53'  }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1B3C53] to-[#456882] hover:from-[#456882] hover:to-[#1B3C53] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FA] via-[#E8F4FD] to-[#D2C1B6]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#456882]/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#1B3C53]/15 to-transparent rounded-full translate-y-36 -translate-x-36"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Find Us</h2>
            <p className="text-lg md:text-xl" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>
              Visit our facility to see the warm, welcoming environment we provide for our residents.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD] rounded-lg shadow-lg p-8 border border-[#D2C1B6]/20">
            <div className="bg-gradient-to-br from-[#D2C1B6]/20 to-[#456882]/10 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1B3C53] to-[#456882] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold mb-2" style={{ color: '#1B3C53', fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Interactive Map Coming Soon</p>
                <p className="text-sm" style={{ color: '#456882', fontFamily: 'Rosehot, sans-serif' }}>123 Care Street, Colombo, Sri Lanka 01000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
