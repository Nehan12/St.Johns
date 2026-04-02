"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PostSurgeryCare() {
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
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#B85C2E] border-t-transparent mx-auto mb-4"></div>
          <p
            className="text-[#B85C2E] text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
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
        className="relative flex items-center pt-32 md:pt-24 bg-cover bg-center min-h-[60vh] md:min-h-[85vh]"
        style={
          {
            backgroundImage: "url(/post-surgery.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "crisp-edges",
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Post Surgery Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Restorative, personalised recovery support in luxury surroundings
              for seniors and adults recovering from surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Who it’s for */}
      <section className="py-24 bg-[#E7A98B]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              Who is Post-Surgery Care For?
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-3xl"
              style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
            >
              Heritage Care post-surgery care is ideal for seniors recovering
              from complex surgeries, those requiring support after chemotherapy
              or cardiac procedures, individuals living alone during early
              recovery, or people with mobility or cognitive challenges.
              Families seeking respite support also benefit from our bespoke,
              personalised approach.
            </p>

            <div className="space-y-5">
              {[
                "Hip, knee, or cardiac procedure recovery",
                "Post-chemotherapy or radiotherapy support",
                "Early-stage recovery for those living alone",
                "Mobility and cognitive assistance",
                "Family carer respite support",
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <span
                    className="w-3 h-3 rounded-full mr-4"
                    style={{ backgroundColor: "#B85C2E" }}
                  />
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#5A3A2E",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-[#E7A98B]/40 shadow-sm">
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              Our Approach
            </h3>
            <div className="space-y-6">
              {[
                "Personalised recovery plans tailored to your needs",
                "24/7 nursing and clinical support",
                "Private suites with ensuite bathrooms",
                "Therapies including physiotherapy and mobility assistance",
                "Curated social, wellness and cultural programmes",
                "Chef-prepared meals designed for healing",
              ].map((point, i) => (
                <div key={i} className="flex items-start">
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white"
                    style={{ backgroundColor: "#E7A98B" }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#5A3A2E",
                    }}
                  >
                    {point}
                  </span>
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
            <h2
              className="text-4xl font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              What’s Included in Our Post-Surgery Care
            </h2>
            <p
              className="text-lg"
              style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
            >
              Every stay combines world-class clinical care with luxury
              hotel-style surroundings, helping you heal faster, stronger, and
              in comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Private Luxury Suites",
                desc: "Fully furnished suites with ensuite bathrooms and state-of-the-art care technology.",
              },
              {
                title: "24/7 Nursing Care",
                desc: "Personalised support from a multidisciplinary team including nurses, physiotherapists and occupational therapists.",
              },
              {
                title: "Tailored Recovery Plans",
                desc: "Care plans designed to meet your medical, physical and emotional recovery needs.",
              },
              {
                title: "Therapies & Support",
                desc: "Physiotherapy, mobility assistance, cognitive support, and specialist rehabilitation therapies.",
              },
              {
                title: "Gourmet Healing Cuisine",
                desc: "Chef-prepared nutritious meals designed to support recovery and wellbeing.",
              },
              {
                title: "Wellness & Activities",
                desc: "Spa, salon, gardens, cultural programmes and social events to enhance mental and emotional recovery.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-[#E7A98B]/40 hover:shadow-xl transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Details */}
      <section className="py-24 bg-[#FDF5F0]/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-semibold mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            Structured Recovery Support
          </h2>
          <p
            className="text-lg mb-12 text-center"
            style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
          >
            Heritage Care's post-surgery care ensures a seamless, supportive
            journey from hospital to home, with everything needed to restore
            strength, confidence and independence.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Pre-admission consultation and personalised assessment",
              "Daily support from multidisciplinary medical team",
              "Specialist therapies including physiotherapy and mobility programmes",
              "Cognitive engagement and support where needed",
              "Access to spa, salon, library, and gardens",
              "Laundry, housekeeping and concierge services",
            ].map((point, i) => (
              <div key={i} className="flex items-start">
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white"
                  style={{ backgroundColor: "#E7A98B" }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
