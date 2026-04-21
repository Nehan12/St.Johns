"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResidentialCare() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
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
          backgroundImage: "url(/residential-care.png)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Residential Care
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
              Experience a supportive, safe, and welcoming environment designed
              for comfort, independence, and a vibrant community life.
            </p>
          </div>
        </div>
      </section>

      {/* What is Residential Care */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8 border-[var(--primary)]">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              What is Residential Care?
            </h2>
            <p className="leading-relaxed max-w-4xl">
              Residential care provides a safe, comfortable, and nurturing
              environment where residents receive personalised support for daily
              living. Heritage Care focuses on maintaining dignity,
              independence, and a true sense of home for every resident.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 bg-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
              Who is Residential Care for?
            </h2>
            <p className="leading-relaxed mb-10 max-w-3xl">
              Ideal for individuals who need support with daily living, memory
              care, or recovery after hospital stays. Our residential care
              ensures personalised routines, privacy, and compassionate support.
            </p>

            <div className="space-y-5">
              {[
                "Individuals needing assistance with daily tasks",
                "Memory or cognitive care support",
                "Post-hospital recovery or short-term respite",
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
              Our Care Philosophy
            </h3>

            <div className="space-y-6">
              {[
                "Individualised care plans tailored to each resident",
                "24/7 professional support and monitoring",
                "Activities to encourage social engagement and wellbeing",
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

      {/* Residential Care Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              Our Residential Care Services
            </h2>
            <p>
              Comprehensive support designed to ensure comfort, safety, and a
              fulfilling daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tailored Living Plans",
                desc: "Personalised care plans that meet each resident’s needs, routines, and preferences.",
              },
              {
                title: "24/7 Skilled Support",
                desc: "Professional care and monitoring available at all times, ensuring safety and wellbeing.",
              },
              {
                title: "Enriching Community Life",
                desc: "Social, recreational, and wellness activities that foster engagement and connection.",
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

      <Footer />
    </div>
  );
}
