"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ParkinsonsCare() {
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
          backgroundImage: "url(/parkinson-care.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Parkinson’s Care
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
              Personalised, compassionate care designed to support mobility,
              cognition, and overall wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* What is Parkinson’s Care */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8 border-[var(--primary)]">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              What is Parkinson&apos;s Disease ?
            </h2>
            <p className="leading-relaxed max-w-4xl">
              Parkinson&apos;s disease (PD) is a progressive neurological
              condition affecting movement, cognition, and emotional wellbeing.
              Symptoms evolve over time and can include tremors, rigidity,
              balance challenges, cognitive changes, anxiety, depression, and
              disrupted sleep. At Heritage Care, our approach evolves with your
              needs, ensuring personalised, compassionate care at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Who it’s for / Expertise */}
      <section className="py-12 bg-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
              Who is Parkinson’s Care For?
            </h2>
            <p className="leading-relaxed mb-10 max-w-3xl">
              Heritage Care&apos;s Parkinson&apos;s care is tailored for
              individuals at all stages of the condition. Whether you need
              assistance with daily routines, medication, cognitive support, or
              therapeutic interventions, our specialist team delivers care with
              meticulous attention to detail in an environment designed for
              comfort and enrichment.
            </p>

            <div className="space-y-5">
              {[
                "Early-stage or advanced Parkinson’s support",
                "Medication management for optimal neurological function",
                "Tailored physiotherapy, speech and movement therapies",
                "Emotional and psychological wellbeing support",
                "Nutritional guidance for neurological health",
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
              Our Parkinson’s Care Philosophy
            </h3>
            <div className="space-y-6">
              {[
                "Clinical excellence with specialist neurologists and geriatricians",
                "Dynamic, personalised care plans tailored to you",
                "Cognitive, physical and emotional engagement therapies",
                "Elevated living environments for comfort and enrichment",
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

      {/* Parkinson’s Care Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6 text-primary">
            Parkinson’s Care Services
          </h2>
          <p>
            Our approach combines medical expertise with refined living,
            ensuring that each resident receives personalised, dynamic care in a
            supportive and stimulating environment.
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {[
              "Medication management under expert supervision",
              "Physiotherapy, speech therapy and movement-focused exercises",
              "Cognitive engagement and emotional support",
              "Nutritional guidance for neurological health",
              "Bespoke wellness programmes integrating movement and therapy",
              "Support and guidance for families",
            ].map((service, i) => (
              <div key={i} className="flex items-start">
                <span className="w-8 h-8 flex items-center justify-center mr-4 text-main ">
                  ✓
                </span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parkinson’s Care Plan */}
      <section className="py-12 bg-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6 text-center text-primary">
            Bespoke Parkinson’s Care Plans
          </h2>
          <p className="text-center mb-12">
            Every resident receives a personalised care plan developed with
            medical professionals, family and specialist staff. Plans are
            continuously refined as your needs evolve, ensuring dynamic,
            responsive care every day.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Tailored therapeutic interventions",
              "Medication and symptom management",
              "Cognitive and physical therapies",
              "Emotional and psychological support",
              "Nutritionally designed dining experiences",
              "Elevated living environments for comfort and wellbeing",
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
