"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SpecialistConditions() {
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
    <div className="min-h-screen bg-white text-main">
      <Navigation />

      {/* Hero Section */}
      <section
        className="
        relative flex items-center justify-center md:py-24 pt-40 md:pt-36 pb-8
        bg-cover bg-no-repeat
        bg-center
        md:min-h-[85vh]"
        style={{
          backgroundImage: "url(/new3.jpg)",
        }}
      >
        {/* Colorful Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Specialised Conditions
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="
                hidden landscape:block md:block
                text-lg md:text-xl text-white
                max-w-3xl mt-6 md:mt-10 mx-auto
              "
            >
              At Heritage Care, specialised care means so much more than
              clinical support – it&apos;s the art of delivering exceptional,
              personalised care with warmth and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Specialist Care Designed Around You */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT – Content */}
            <div className="animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Specialised Memory Care – Luminare
              </h2>

              <p className="mb-8">
                Our pioneering memory care programme, Luminare, blends
                personalised therapies, leading healthcare technology, and a
                compassionate approach to support those living with memory loss
                – helping every day to be filled with joy and enrichment.
              </p>

              {/* Bullet list */}
              <div className="space-y-5">
                {[
                  "Personalised Cognitive Therapies",
                  "Advanced Healthcare Technology",
                  "Compassionate Support",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start group transition-all duration-300 hover:translate-x-2"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <div className="w-7 h-7 rounded-full flex items-center justify-center mr-4 mt-1 bg-secondary shadow-md group-hover:scale-110 transition-all duration-300">
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

                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – Image */}
            <div className="relative animate-fadeInUp">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-3xl shadow-xl transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: "url(/nunrse1.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/25 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialist Memory Care Programme - Luminare */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-white to-[var(--light)] relative overflow-hidden">
        {/* Ambient layers */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--primary)]/20 rounded-full -translate-x-36 -translate-y-36" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)]/20 rounded-full translate-x-48 translate-y-48" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-14 md:mb-20 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Specialist Memory Care Programme – Luminare
            </h2>
            <p className="max-w-3xl mx-auto">
              Our pioneering memory care programme, Luminare, blends
              personalised therapies, leading healthcare technology and a
              compassionate approach to support those living with memory loss –
              helping you live each day with joy and enrichment.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalised Cognitive Therapies",
                text: "Tailored cognitive stimulation programmes designed to maintain mental acuity and provide meaningful engagement.",
                iconPath:
                  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "Advanced Technology",
                text: "Leading healthcare technology and innovative tools to support memory care and enhance daily living experiences.",
                iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Compassionate Support",
                text: "A compassionate approach ensuring every moment is met with warmth, understanding and tailored engagement.",
                iconPath:
                  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.iconPath}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4 text-primary">
                  {item.title}
                </h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Care Specialists for Complex Conditions */}
      <section className="py-12 md:py-20  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Private Care Specialists for Complex Conditions
            </h2>
            <p className="max-w-3xl mx-auto px-4">
              You might benefit from private care specialists if you&apos;re
              managing conditions such as Alzheimer&apos;s, Parkinson&apos;s,
              stroke recovery, heart disease, multiple sclerosis, cancer or
              frailty-related illnesses.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24-Hour Medical Care",
                text: "Highly tailored medical care delivered by specialised teams with expertise in complex neurological and medical conditions.",
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Therapeutic Engagement",
                text: "Specialised therapeutic programmes designed to enhance mobility, cognitive function and overall quality of life.",
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c.667-2 4-2 4 0v8c0 2-3.333 2-4 0V8z"
                    />
                  </svg>
                ),
              },
              {
                title: "Couples Care",
                text: "Supporting couples to remain together even when their care needs differ, ensuring they can stay connected.",
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21c-4-4-8-8-8-11a4 4 0 018-4 4 4 0 018 4c0 3-4 7-8 11z"
                    />
                  </svg>
                ),
              },
              {
                title: "Short-term Rehabilitation",
                text: "Expert rehabilitation services for those transitioning from hospital or requiring intensive recovery support.",
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                ),
              },
              {
                title: "Long-term Support",
                text: "Comprehensive long-term care plans tailored to your evolving needs and designed to honour your wishes.",
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12h16M12 4v16"
                    />
                  </svg>
                ),
              },
              {
                title: "Family Partnership",
                text: "Open communication with families, regular updates and guidance at every stage of the care journey.",
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v8m4-4H8"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Heritage Care for Specialist Conditions */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-[var(--light)] relative overflow-hidden">
        {/* Ambient circles */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[var(--primary)]]/15 to-transparent rounded-full -translate-x-40 -translate-y-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--primary)]/10 to-transparent rounded-full translate-x-48 translate-y-48" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why Choose Heritage Care for Specialised Conditions?
            </h2>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Clinical Excellence",
                text: "Expert teams specialising in complex conditions with years of experience and clinical precision.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                ),
              },
              {
                title: "Personalised Care Plans",
                text: "Fully bespoke care plans including 24-hour nursing, memory care, therapies and enriching experiences.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Luxurious Surroundings",
                text: "Elegant residences with premium amenities designed for comfort, dignity and enhanced quality of life.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
              {
                title: "Family Support",
                text: "Comprehensive family support with regular updates, guidance and partnership throughout the care journey.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-bold mb-2 text-primary">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
