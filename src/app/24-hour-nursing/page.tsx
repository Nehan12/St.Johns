"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TwentyFourHourNursing() {
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
          backgroundImage: "url(/nursing.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              24-Hour Nursing Care
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
              Expert-led medical oversight with compassionate, bespoke support
              meticulously curated around your needs. Experience nursing care
              redefined.
            </p>
          </div>
        </div>
      </section>

      {/* What is 24-Hour Nursing Care? */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8 border-[var(--primary)]">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              What is 24-Hour Nursing Care?
            </h2>
            <p className="text-lg leading-relaxed max-w-4xl">
              24-hour nursing care is a specialised service that provides
              round-the-clock medical supervision for those with complex medical
              needs. At Heritage Care, you receive the highest level of care,
              tailored precisely to your health requirements and lifestyle
              choices.
            </p>
          </div>
        </div>
      </section>

      {/* Who is 24-Hour Nursing Care For? */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-[var(--light)] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--primary)] via-[var(--primary)]/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--primary)] via-[var(--primary)]/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r [var(--primary)]/20 to-[var(--primary)]]/20 rounded-full -translate-x-32 -translate-y-32"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="animate-slideInLeft space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Who is 24-Hour Nursing Care For?
            </h2>
            <p className="text-lg md:text-lg text-main mb-6">
              Our 24-hour nursing care is designed for individuals who require
              ongoing medical supervision due to chronic illnesses,
              post-surgical recovery, neurological conditions, or complex needs
              such as dementia care.
            </p>

            {/* List with Modern Icons */}
            <div className="bg-white rounded-3xl p-10 border border-[var(--primary)]/40 shadow-sm">
              <div className="space-y-6">
                {[
                  "Chronic illness management",
                  "Post-surgical recovery",
                  "Neurological conditions",
                  "Dementia and memory care",
                ].map((point, i) => {
                  return (
                    <div key={i} className="flex items-start">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white shadow-lg bg-secondary">
                        ✓
                      </span>
                      <span className="text-main">{point}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slideInRight">
            <div
              className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl overflow-hidden"
              style={{ backgroundImage: "url(/nunrse1.jpg)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C53]/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Approach to 24-Hour Nursing Care
            </h2>
            <p className="text-lg md:text-xl text-main max-w-3xl mx-auto px-4">
              A refined approach combining world-class clinical expertise with
              exceptional hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                Individuality Honoured
              </h3>
              <p>
                Your choices, personal journey and voice guide your care. Every
                detail is tailored with thoughtfulness and intuition,
                anticipating your every need and preference.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 ">
                Clinical Excellence
              </h3>
              <p>
                Your care is informed by the latest advancements in healthcare,
                delivered by highly skilled professionals and underpinned by our
                commitment to continual refinement.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Holistic Wellbeing
              </h3>
              <p>
                Every experience is curated to inspire joy, stimulate the senses
                and nurture both body and mind, ensuring daily life is enriched
                with purpose and fulfilment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-[var(--light)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              What We Offer in 24-Hour Nursing Care
            </h2>
            <p className="text-lg md:text-xl text-main max-w-3xl mx-auto px-4">
              Heritage Care provides a fully comprehensive care experience
              tailored to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Nursing Care Services",
                desc: "Expert-led medical oversight for complete reassurance and peace of mind.",
              },
              {
                title: "Complex Care Management",
                desc: "Tailored support for dementia, stroke recovery and neurological conditions.",
              },
              {
                title: "Rehabilitative Therapy",
                desc: "Physiotherapy, speech therapy and occupational therapy to enhance mobility and independence.",
              },
              {
                title: "Luxury Accommodation",
                desc: "Spacious, wheelchair-accessible suites designed for your comfort and independence.",
              },
              {
                title: "Gourmet Nutrition",
                desc: "Exquisite, chef-inspired cuisine tailored to your dietary preferences and health needs.",
              },
              {
                title: "Tailored Experiences",
                desc: "Personalised activities and programs designed to enrich your wellbeing and quality of life.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 border border-[var(--primary)]/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Heritage Care */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why Choose Heritage Care for 24-Hour Nursing Care?
            </h2>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between md:space-x-8">
            {[
              {
                title: "Unparalleled Luxury",
                desc: "Elegant surroundings, premium amenities and a warm community atmosphere.",
                icon: (
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
              },
              {
                title: "Expert-Led Care",
                desc: "Care delivered by specialists in nursing home care with years of experience.",
                icon: (
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Tailored Experiences",
                desc: "Tailored programmes to enrich your lifestyle and enhance your wellbeing.",
                icon: (
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center relative md:flex-1"
              >
                {/* Circle Icon */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg mb-4 transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
