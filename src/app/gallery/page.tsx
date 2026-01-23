'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Gallery() {
  const images = ['/room1.jpeg', '/room2.jpeg', '/room3.jpeg'];
  const pdfUrl = '/room-plan.pdf';

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-[20%] pb-10 md:pb-[5%] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[85vh]"
        style={{
          backgroundImage: 'url(/landing3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges'
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6"
              style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}
            >
              Gallery
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: 'Libre Baskerville Regular, serif' }}
            >
              Explore our comfortable and modern rooms designed for your wellbeing and peace of mind.
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-lg bg-[#E67E5A] text-white font-semibold shadow-md hover:bg-[#D86A45] transition"
            >
              View Room Plan PDF
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={src}
                  alt={`Room ${i + 1}`}
                  className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
