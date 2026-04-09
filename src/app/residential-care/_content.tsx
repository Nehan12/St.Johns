"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResidentialCareContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
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
            backgroundImage: "url(/residential-care.jpg)",
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
              Residential Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Experience a supportive, safe, and welcoming environment designed
              for comfort, independence, and a vibrant community life.
            </p>
          </div>
        </div>
      </section>

      {/* What is Residential Care */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8" style={{ borderColor: "#E7A98B" }}>
            <h2
              className="text-4xl font-semibold mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              What is Residential Care?
            </h2>
            <p
              className="text-xl leading-relaxed max-w-4xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#5A3A2E",
              }}
            >
              Residential care provides a safe, comfortable, and nurturing
              environment where residents receive personalised support for daily
              living. Heritage Care focuses on maintaining dignity,
              independence, and a true sense of home for every resident.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 bg-[#E7A98B]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              Who is Residential Care for?
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-3xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#5A3A2E",
              }}
            >
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
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              Our Care Philosophy
            </h3>

            <div className="space-y-6">
              {[
                "Individualised care plans tailored to each resident",
                "24/7 professional support and monitoring",
                "Activities to encourage social engagement and wellbeing",
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

      {/* Residential Care Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2
              className="text-4xl font-semibold mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              Our Residential Care Services
            </h2>
            <p
              className="text-lg"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#5A3A2E",
              }}
            >
              Comprehensive support designed to ensure comfort, safety, and a
              fulfilling daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Tailored Living Plans",
                desc: "Personalised care plans that meet each resident's needs, routines, and preferences.",
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

      <Footer />
    </div>
  );
}
