"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Respite() {
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
        className="relative pt-32 md:pt-0 py-20 md:py-[20%] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[85vh]"
        style={
          {
            backgroundImage: "url(/new4.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "crisp-edges",
          } as React.CSSProperties
        }
      >
        {/* Colorful Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C53]/80 via-[#456882]/70 to-[#D2C1B6]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C53]/40 via-transparent to-[#D2C1B6]/30"></div> */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Respite Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              At Heritage Care, we recognise that respite care can be a
              transformative experience, elevating your overall wellbeing,
              promoting recovery and enriching your quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* What is Respite Care? */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#FFF6EE] to-[#FFEDE0] relative overflow-hidden">
        {/* Decorative accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E7A98B]/30 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B85C2E]/20 rounded-full translate-x-40 translate-y-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Content */}
            <div className="animate-fadeInUp">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#B85C2E",
                }}
              >
                What is Respite Care?
              </h2>

              <p
                className="text-lg mb-8"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#5A3A2E",
                }}
              >
                Respite care provides short-term support, allowing individuals
                to benefit from professional nursing while giving carers time to
                rest and recharge. Whether for recovery following surgery,
                specialist palliative support, or a restorative stay, our luxury
                care homes offer tailored solutions designed to enhance everyday
                life.
              </p>

              {/* Bullet list */}
              <div className="space-y-5">
                {[
                  "Rehabilitation and post-surgery respite care",
                  "Palliative respite care",
                  "Holiday stays and short-term respite care",
                  "Specialist memory care support",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start group transition-all duration-300 hover:translate-x-2"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <div className="w-7 h-7 rounded-full flex items-center justify-center mr-4 mt-1 bg-gradient-to-br from-[#B85C2E] to-[#E7A98B] shadow-md group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <span
                      className="text-sm md:text-base"
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

            {/* Image */}
            <div className="relative animate-fadeInUp">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-3xl shadow-xl transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: "url(/nunrse1.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#B85C2E]/25 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Quality Respite Care */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#FFF6EE] to-[#FFEDE0] relative overflow-hidden">
        {/* Ambient accents */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#E7A98B]/30 rounded-full -translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B85C2E]/20 rounded-full translate-x-48 translate-y-48"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14 md:mb-18 animate-fadeInUp">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              Our Approach to Quality Respite Care
            </h2>

            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#5A3A2E",
              }}
            >
              At Heritage Care, we are dedicated to delivering excellence in
              respite care through a bespoke approach that combines medical
              expertise with refined hospitality.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rehabilitation & Recovery",
                desc: "Expert nursing, physiotherapy and personalised recovery plans designed to optimise wellbeing and support a confident return to independence.",
              },
              {
                title: "Compassionate Palliative Support",
                desc: "Specialist respite care focused on comfort, symptom management and emotional wellbeing, delivered with dignity and sensitivity.",
              },
              {
                title: "Luxury Holiday Stays",
                desc: "A refined short-term retreat offering professional nursing care, engaging experiences and exceptional hospitality.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur rounded-3xl p-8 border border-[#E7A98B]/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#B85C2E] to-[#E7A98B] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {/* Text */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#B85C2E",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included in Our Respite Services */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#FFF6EE] to-[#FFEDE0] relative overflow-hidden">
        {/* Ambient accents */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#E7A98B]/30 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B85C2E]/20 rounded-full translate-y-40 -translate-x-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 md:mb-18">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              What&apos;s Included in Our Respite Services
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#5A3A2E",
              }}
            >
              Heritage Care’s respite services deliver an elevated experience,
              thoughtfully tailored to your medical, personal and lifestyle
              needs.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24-Hour Nursing Care",
                desc: "Expert-led medical oversight and personalised care delivered around the clock for complete peace of mind.",
                icon: <path d="M12 4v16m8-8H4" />,
              },
              {
                title: "Rehabilitation Therapies",
                desc: "Physiotherapy and occupational therapy designed to restore mobility, independence and confidence.",
                icon: <path d="M9 12l2 2 4-4" />,
              },
              {
                title: "Nutritious Meals",
                desc: "Freshly prepared Sri Lankan and English cuisine, tailored to your dietary requirements and preferences.",
                icon: <path d="M4 19h16M6 5h12l-1 9H7L6 5z" />,
              },
              {
                title: "Luxury Accommodation",
                desc: "Beautifully appointed private suites with premium amenities designed for comfort and relaxation.",
                icon: (
                  <path d="M3 10l9-6 9 6v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
                ),
              },
              {
                title: "Bespoke Engagement",
                desc: "Individually curated activities that support emotional wellbeing and meaningful daily engagement.",
                icon: <path d="M12 20l9-7-9-7-9 7 9 7z" />,
              },
              {
                title: "Family Involvement",
                desc: "Open communication and family participation to ensure reassurance, connection and transparency.",
                icon: (
                  <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z" />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur rounded-3xl p-8 border border-[#E7A98B]/40 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#B85C2E] to-[#E7A98B] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#B85C2E",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Heritage Care for Respite Care */}
      <section className="py-14 md:py-24 bg-gradient-to-br from-[#FFF6EE] via-[#FDF5F0] to-[#FFEDE0] relative overflow-hidden">
        {/* Ambient shapes */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#E7A98B]/30 rounded-full -translate-x-40 -translate-y-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B85C2E]/20 rounded-full translate-x-48 translate-y-48" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 md:mb-18">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              Why Choose Heritage Care for 24-Hour Nursing Care?
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Unparalleled Luxury",
                desc: "Elegant surroundings, premium amenities and a warm community atmosphere.",
                icon: (
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                ),
              },
              {
                title: "Expert-Led Care",
                desc: "Care delivered by specialists in nursing home care with years of experience.",
                icon: (
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                title: "Bespoke Experiences",
                desc: "Tailored programmes to enrich your lifestyle and enhance your wellbeing.",
                icon: (
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur rounded-3xl p-10 border border-[#E7A98B]/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#B85C2E] to-[#E7A98B] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>

                <h3
                  className="text-xl font-semibold mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#B85C2E",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
