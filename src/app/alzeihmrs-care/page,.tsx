"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AlzheimersCare() {
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
            backgroundImage: "url(/alzheimers-care.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              Alzheimer’s Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Personalised, compassionate care in luxury surroundings,
              supporting cognition, wellbeing and daily life.
            </p>
          </div>
        </div>
      </section>

      {/* What is Alzheimer’s Care */}
      <section className="py-24 bg-white">
        <div
          className="max-w-6xl mx-auto px-6 border-l-4 pl-8"
          style={{ borderColor: "#E7A98B" }}
        >
          <h2
            className="text-4xl font-semibold mb-6"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            Understanding Alzheimer’s Disease
          </h2>
          <p
            className="text-xl leading-relaxed max-w-4xl"
            style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
          >
            Alzheimer’s disease is the most common cause of dementia, affecting
            memory, cognition, and daily living skills. Loveday provides bespoke
            Alzheimer’s care tailored to every stage, helping you enjoy
            enriched, meaningful days while supporting both you and your family.
          </p>
        </div>
      </section>

      {/* Who it’s for / Expertise */}
      <section className="py-24 bg-[#E7A98B]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
            >
              Who is Alzheimer’s Care For?
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-3xl"
              style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
            >
              Loveday’s specialist Alzheimer’s care is designed for all stages,
              from early diagnosis to advanced progression. Whether you require
              daily living assistance, cognitive engagement, or long-term memory
              care solutions, our expert team provides personalised support in
              an environment designed for familiarity, comfort, and enrichment.
            </p>

            <div className="space-y-5">
              {[
                "Early to advanced-stage Alzheimer’s support",
                "Tailored cognitive therapies and engagement programmes",
                "24/7 professional nursing care",
                "Nutritionally balanced, award-winning dining",
                "Holistic wellness and lifestyle support",
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
              The Luminare Approach
            </h3>
            <div className="space-y-6">
              {[
                "Clinical excellence with specialist Alzheimer’s nurses and carers",
                "Cognitive engagement through music, art, and reminiscence therapy",
                "Personalised, evolving care plans",
                "Refined, comfortable living environments for enhanced wellbeing",
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

      {/* Alzheimer’s Care Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-semibold mb-6"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            Our Alzheimer’s Care Services
          </h2>
          <p
            className="text-lg mb-12"
            style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
          >
            Loveday’s services blend clinical excellence with luxury living.
            Every resident benefits from bespoke memory care, therapeutic
            engagement, nutritional support, and an enriched lifestyle designed
            to enhance quality of life.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              "24/7 professional care tailored to each stage",
              "Cognitive therapies and memory engagement programmes",
              "Refined residential environment for comfort and familiarity",
              "Award-winning, nutritionally balanced dining experiences",
              "Wellness and lifestyle programmes for holistic wellbeing",
              "Family support, guidance and reassurance",
            ].map((service, i) => (
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
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alzheimer’s Care Plan */}
      <section className="py-24 bg-[#FDF5F0]/70">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-semibold mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif", color: "#B85C2E" }}
          >
            Personalised Alzheimer’s Care Plans
          </h2>
          <p
            className="text-lg text-center mb-12"
            style={{ fontFamily: "Poppins, sans-serif", color: "#5A3A2E" }}
          >
            Each resident receives a bespoke care plan, continuously refined to
            adapt to evolving needs. Loveday integrates medical expertise with
            therapeutic engagement to ensure meaningful, fulfilling days.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Tailored cognitive and sensory therapies",
              "Medication and symptom management",
              "Therapeutic and wellness programmes",
              "Enriched daily activities and experiences",
              "Nutritious, award-winning dining",
              "Refined residential environment with comfort and familiarity",
            ].map((point, i) => (
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
                  {point}
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
