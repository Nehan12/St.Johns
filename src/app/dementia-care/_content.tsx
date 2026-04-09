"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DementiaCareContent() {
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
            backgroundImage: "url(/dementia-care.jpg)",
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
              Dementia Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Bespoke, person-centred memory care designed to enrich life,
              preserve dignity, and promote wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* What is Dementia Care */}
      <section className="py-24 bg-white">
        <div
          className="max-w-6xl mx-auto px-6 border-l-4 pl-8"
          style={{ borderColor: "#E7A98B" }}
        >
          <h2
            className="text-4xl font-semibold mb-6"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            What is Dementia Care?
          </h2>
          <p
            className="text-xl leading-relaxed max-w-4xl"
            style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
          >
            {`Heritage Care's dementia care, under the Luminare philosophy, is a
            personalised approach designed to enhance daily life, provide
            comfort, support cognitive function, and nurture emotional
            wellbeing. Each plan is carefully tailored to the individual,
            promoting independence, meaningful engagement, and continuity of
            care.`}
          </p>
        </div>
      </section>

      {/* Who it's for / Expertise */}
      <section className="py-24 bg-[#E7A98B]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              Our Dementia Care Professionals
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-3xl"
              style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
            >
              {`Heritage Care's expert team includes specialist dementia nurses,
              therapists, and hospitality professionals, all trained to deliver
              a world-class, personalised care experience. Their goal is to
              ensure every resident receives compassionate, highly tailored
              support while maintaining dignity, comfort, and purpose.`}
            </p>

            <div className="space-y-5">
              {[
                "24-hour specialist nursing care",
                "Multidisciplinary dementia care team",
                "Tailored cognitive and sensory therapies",
                "Emotional and social wellbeing support",
                "Meticulous attention to personal preferences",
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
                "Person-centred memory care",
                "Engaging day-to-day activities",
                "Bespoke therapeutic programmes",
                "Continuous support at every stage of dementia",
                "Integration of luxury, comfort and wellbeing",
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

      {/* Dementia Care Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-semibold mb-6"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            Personalised Dementia Care Plans
          </h2>
          <p
            className="text-lg mb-12"
            style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
          >
            Each plan is curated with meticulous attention to detail, ensuring
            care evolves alongside your needs and preferences.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Full health and lifestyle assessment",
              "Medication management",
              "Specialist memory care techniques",
              "Emotional and social wellbeing support",
              "Regular reviews to adapt to changing needs",
              "Bespoke programmes designed for engagement and fulfilment",
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

      {/* Types & Stages of Dementia */}
      <section className="py-24 bg-[#FDF5F0]/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-semibold mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            Types & Stages of Dementia
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            {/* Types */}
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#5A3A2E", fontFamily: "Poppins, sans-serif" }}
              >
                Common Types
              </h3>
              <ul className="space-y-4">
                {[
                  "Alzheimer's disease – progressive memory loss, language difficulties, problem-solving challenges",
                  "Vascular dementia – cognitive impairment due to reduced blood flow",
                  "Lewy body dementia – hallucinations, cognitive fluctuations, Parkinson's-like symptoms",
                  "Frontotemporal dementia – personality, behaviour and language changes",
                ].map((type, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-3 h-3 rounded-full bg-[#B85C2E] mr-4 mt-2 flex-shrink-0"></span>
                    <span
                      style={{
                        color: "#5A3A2E",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Stages */}
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#5A3A2E", fontFamily: "Poppins, sans-serif" }}
              >
                Stages & Care
              </h3>
              <ul className="space-y-4">
                {[
                  "Early-stage: Focus on independence, cognitive engagement, and lifestyle adaptations",
                  "Mid-stage: Increased guidance, mobility support, and emotional wellbeing strategies",
                  "Advanced-stage: Full nursing care, sensory therapies, and comfort-led approaches",
                ].map((stage, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-3 h-3 rounded-full bg-[#B85C2E] mr-4 mt-2 flex-shrink-0"></span>
                    <span
                      style={{
                        color: "#5A3A2E",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {stage}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-semibold mb-6"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            What&apos;s Included in Our Dementia Care
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              "Private luxury suites for comfort and ease",
              "24-hour specialist nursing care",
              "Personalised wellness, fitness and lifestyle programmes",
              "Award-winning dining with nutritionally balanced meals",
              "Cognitive and sensory therapies",
              "Elegantly designed communal spaces",
              "Beautiful landscaped gardens and terraces",
              "Meaningful experiences to engage and inspire",
              "Compassionate family support and guidance",
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-[#E7A98B]/40 hover:shadow-xl transition-all duration-300"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
