"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PalliativeCare() {
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
          backgroundImage: "url(/palliative-care.jpg)",
        }}
      >
        {/* Colorful Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Palliative Care
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
              At Heritage Care, palliative care is our calling. We offer
              comfort, respect, and emotional support to individuals and
              families during life’s most delicate moments.
            </p>
          </div>
        </div>
      </section>

      {/* What is Palliative Care? */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                What is Palliative Care?
              </h2>

              <p className="mb-8 max-w-xl">
                Palliative care is a highly specialised and compassionate
                approach to supporting individuals with illnesses that cannot be
                cured. It focuses on comfort, dignity and enhancing quality of
                life through a deeply personalised care journey.
              </p>

              <div className="space-y-4">
                {[
                  "Progressive illnesses and cancer care",
                  "Neurological conditions",
                  "Advanced respiratory diseases",
                  "Memory care and dementia support",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start group transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 bg-secondary shadow-md group-hover:scale-110 transition-all duration-300">
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

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-slideInRight">
              <div
                className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-3xl shadow-xl transform transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: "url(/nunrse1.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/30 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Quality Palliative Care */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-[var(--light)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--primary)]/50 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[var(--primary)]/70 to-transparent rounded-full translate-x-40 translate-y-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Approach to Quality Palliative Care
            </h2>
            <p className="max-w-3xl mx-auto">
              At Heritage Care, we uphold the highest standards of palliative
              care, following the accredited Gold Standards Framework.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Palliative Care & Symptom Management",
                desc: "Ensuring relief from pain and discomfort with expert medical oversight.",
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
                title: "Dedicated Nursing Expertise",
                desc: "Delivered by our specialist team with years of palliative care experience.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                ),
              },
              {
                title: "Emotional & Spiritual Support",
                desc: "Providing guidance to both Members and their families throughout the journey.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur rounded-3xl p-8 text-center border border-[var(--primary)]/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>

                <h3 className="text-lg font-bold mb-3 text-primary">
                  {item.title}
                </h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Heritage Care for Palliative Care */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why Choose Heritage Care for Palliative Care?
            </h2>
            <p className=" max-w-3xl mx-auto">
              Our reputation is built on compassionate expertise, refined
              environments, and a deeply personal approach to end-of-life care.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Refined, Calming Environments",
                desc: "Beautifully designed residences that provide peace, comfort, and dignity.",
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
                title: "Specialist-Led Medical Care",
                desc: "Delivered by experienced professionals specialising in palliative and end-of-life support.",
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
                title: "Truly Personalised Care Plans",
                desc: "Care thoughtfully shaped around your wishes, values, and individual needs.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur rounded-3xl p-8 text-center border border-[var(--primary)]/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>

                <h3 className="text-lg font-bold mb-3 text-primary">
                  {item.title}
                </h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
