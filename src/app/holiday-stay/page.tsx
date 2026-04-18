"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HolidayRespite() {
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
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[var(--primary)] border-t-transparent mx-auto mb-4"></div>
          <p className="text-primary text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative flex items-center pt-32 md:pt-24 bg-cover bg-center min-h-[60vh] md:min-h-[85vh]"
        style={
          {
            backgroundImage: "url(/hoilday-respite.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "crisp-edges",
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Holiday Stays
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4">
              Short-term luxury stays with expert care, tailored support and
              enriching experiences for older adults or couples.
            </p>
          </div>
        </div>
      </section>

      {/* What is Holiday Respite */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8 border-[var(--primary)]">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              What is Holiday Respite at Heritage Care?
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl">
              Heritage Care Holiday Respite offers short-term stays in Ragama’s
              most distinguished residences, combining luxury living,
              professional care and enriching experiences. Ideal for
              post-surgical recovery, caregiver breaks, or simply a rejuvenating
              getaway with expert support on hand.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 bg-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
              Is Holiday Respite Right for You?
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-3xl">
              Perfect for older adults needing short-term care or temporary
              support. Whether recovering from illness, requiring memory care,
              or seeking a luxury break, Heritage Care provides expert support
              with personalised plans. Couples can remain together, maintaining
              continuity and connection.
            </p>

            <div className="space-y-5">
              {[
                "Post-surgical recovery",
                "Memory or cognitive care support",
                "Temporary caregiver respite",
                "Short-term luxury stays",
                "Couples staying together",
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-4 bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-[var(--primary)]/40 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Our Approach
            </h3>
            <div className="space-y-6">
              {[
                "Personalised short-term care plans",
                "Luxury private suites with ensuite bathrooms",
                "24/7 nursing and holistic wellness support",
                "Daily enrichment and cultural activities",
                "Optional rehabilitation packages including physiotherapy & hydrotherapy",
              ].map((point, i) => (
                <div key={i} className="flex items-start">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white bg-secondary">
                    ✓
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services / Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              What’s Included in Luxury Holiday Respite
            </h2>
            <p className="text-lg">
              Every stay includes all the elegance of a luxury hotel standard,
              underpinned by expert care and tailored support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Private Suites",
                desc: "Elegantly furnished rooms with ensuite bathrooms, designed for comfort and privacy.",
              },
              {
                title: "24/7 Nursing Care",
                desc: "Professional support and medication management to ensure safety and wellbeing.",
              },
              {
                title: "Tailored Wellness Plans",
                desc: "Personalised care and therapy plans for recovery, rejuvenation or memory support.",
              },
              {
                title: "Cultural & Lifestyle Activities",
                desc: "Daily enrichment including music, art, excursions, and social events.",
              },
              {
                title: "Gourmet Dining",
                desc: "Seasonal, nutritious meals crafted by in-house chefs to meet dietary needs.",
              },
              {
                title: "Optional Rehabilitation",
                desc: "Access to physiotherapy, hydrotherapy, and specialist therapy packages.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-[var(--primary)]/40 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {s.title}
                </h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Term Care Details */}
      <section className="py-24 bg-[var(--primary)]/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6 text-center text-primary">
            Short Term & Flexible Care
          </h2>
          <p className="text-lg mb-12 text-center">
            Heritage Care Holiday Respite can be as short as two weeks or
            several months. Perfect for exploring residential care options,
            bridging between hospital and home, or simply enjoying a luxury
            short-term break with complete care support.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Full assessment and personalised care planning",
              "Seamless collaboration with hospitals and GPs",
              "Daily activities and wellness support",
              "Post-surgery or illness recovery packages",
              "Couples care and continuity support",
              "Transparent, all-inclusive pricing with no hidden costs",
            ].map((point, i) => (
              <div key={i} className="flex items-start">
                <span className="w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white bg-secondary">
                  ✓
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
