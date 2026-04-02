"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RehabilitationCare() {
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
            backgroundImage: "url(/rehab-care.jpg)",
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
              Luxury Rehabilitation Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Personalized rehabilitation programmes with clinical excellence,
              world-class hospitality, and holistic support to restore your
              strength, confidence, and independence.
            </p>
          </div>
        </div>
      </section>

      {/* What is Rehabilitation Care */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8" style={{ borderColor: "#E7A98B" }}>
            <h2
              className="text-4xl font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              What is Rehabilitation Care?
            </h2>
            <p
              className="text-xl leading-relaxed max-w-4xl"
              style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
            >
              Rehabilitation care at Heritage Care provides structured,
              specialist support for recovery after surgery, illness, or injury.
              Each stay combines clinical excellence, personalised therapy plans
              and luxurious surroundings to create a healing environment that
              promotes independence, wellbeing, and confidence.
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
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              Who is Rehabilitation Care for?
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-3xl"
              style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
            >
              Suitable for older adults recovering from orthopaedic or
              neurological conditions, post-operative care, or hospital
              discharge. It’s also ideal for temporary respite stays, caregiver
              breaks, or anyone seeking structured rehabilitation in a luxury
              environment.
            </p>

            <div className="space-y-5">
              {[
                "Post-surgery recovery",
                "Neurological or musculoskeletal rehabilitation",
                "Temporary respite or caregiver support",
                "Falls prevention and strength rebuilding",
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
              Our Care Philosophy
            </h3>
            <div className="space-y-6">
              {[
                "Tailored rehabilitation programmes",
                "24/7 clinical support from specialist therapists",
                "Holistic care including physical, cognitive & emotional support",
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

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2
              className="text-4xl font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              Our Rehabilitation Services
            </h2>
            <p
              className="text-lg"
              style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
            >
              Heritage Care combines world-class hospitality with clinical
              excellence for a truly restorative experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Hydrotherapy & Hydro Treadmill",
                desc: "Advanced water-based therapy to rebuild strength, improve balance, and support recovery from surgery or neurological conditions.",
              },
              {
                title: "Physiotherapy & Occupational Therapy",
                desc: "Specialist rehabilitation sessions tailored to your mobility, strength and daily living goals.",
              },
              {
                title: "Structured Recovery Plans",
                desc: "Clinical assessment, therapy scheduling, progress tracking, and collaborative reviews with your medical team.",
              },
              {
                title: "Cognitive Rehabilitation",
                desc: "Therapies designed to support memory, focus, and mental resilience during recovery.",
              },
              {
                title: "Luxury Accommodation",
                desc: "Private suites with en-suite bathrooms, award-winning meals, concierge and chauffeur services.",
              },
              {
                title: "Wellbeing & Social Engagement",
                desc: "Curated cultural and social activities to support emotional and holistic recovery.",
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

      {/* Structured Care Plans */}
      <section className="py-24 bg-[#FDF5F0]/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-semibold mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            Structured Care Plans
          </h2>
          <p
            className="text-lg mb-12 text-center"
            style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
          >
            Every rehabilitation plan at Heritage Care is tailored to your pace,
            needs, and personal goals, combining clinical guidance with
            emotional and social support.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Clinical assessment and hospital discharge planning",
              "Collaboration with GP and medical team",
              "Therapy scheduling: physio, occupational & cognitive rehab",
              "Progress monitoring and outcome tracking",
              "Regular family updates and collaborative reviews",
              "Holistic support for physical, cognitive and emotional recovery",
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
