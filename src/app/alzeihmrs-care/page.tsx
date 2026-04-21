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
          backgroundImage: "url(/alzeihmrs-care.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Alzheimer’s Care
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
              Personalised, compassionate care in luxury surroundings,
              supporting cognition, wellbeing and daily life.
            </p>
          </div>
        </div>
      </section>

      {/* What is Alzheimer’s Care */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8 border-[var(--primary)]">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              What is Alzheimer’s Disease
            </h2>
            <p className="leading-relaxed max-w-4xl">
              Alzheimer’s disease is the most common cause of dementia,
              affecting memory, cognition, and daily living skills. Heritage
              Care provides bespoke Alzheimer’s care tailored to every stage,
              helping you enjoy enriched, meaningful days while supporting both
              you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Who it’s for / Expertise */}
      <section className="py-16 bg-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
              Who is Alzheimer&apos;s Care For?
            </h2>
            <p className="leading-relaxed mb-10 max-w-3xl">
              Heritage Care&apos;s specialist Alzheimer&apos;s care is designed
              for all stages, from early diagnosis to advanced progression.
              Whether you require daily living assistance, cognitive engagement,
              or long-term memory care solutions, our expert team provides
              personalised support in an environment designed for familiarity,
              comfort, and enrichment.
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
                  <span className="w-3 h-3 rounded-full mr-4 bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-[var(--primary)]/40 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              The Luminare Approach
            </h3>
            <div className="space-y-6">
              {[
                "Clinical excellence with specialist Alzheimer’s nurses and carers",
                "Cognitive engagement through music, art, and reminiscence therapy",
                "Personalised, evolving care plans which fits you the most",
                "Refined, comfortable living environments for enhanced wellbeing",
              ].map((point, i) => (
                <div key={i} className="flex items-start">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full mr-4 text-E7A98B">
                    ✓
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alzheimer’s Care Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6 text-primary">
            Our Alzheimer&apos;s Care Services
          </h2>
          <p className=" mb-12">
            Heritage Care&apos;s services blend clinical excellence with luxury
            living. Every resident benefits from bespoke memory care,
            therapeutic engagement, nutritional support, and an enriched
            lifestyle designed to enhance quality of life.
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
                <span className="w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white bg-secondary">
                  ✓
                </span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alzheimer’s Care Plan */}
      <section className="py-24 bg-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6 text-center text-primary">
            Personalised Alzheimer’s Care Plans
          </h2>
          <p className="text-center mb-12">
            Each resident receives a bespoke care plan, continuously refined to
            adapt to evolving needs. Heritage Care integrates medical expertise
            with therapeutic engagement to ensure meaningful, fulfilling days.
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
                className="group bg-white rounded-2xl p-6 border border-[var(--primary)]/40 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-semibold mb-2">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
