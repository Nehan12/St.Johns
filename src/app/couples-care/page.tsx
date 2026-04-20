"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CouplesCare() {
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
        className="relative flex items-center pt-32 md:pt-24 bg-cover bg-center min-h-[60vh] md:min-h-[85vh]"
        style={
          {
            backgroundImage: "url(/couples-care.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "crisp-edges",
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Couples Care
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-lg text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4">
              Continue living together with bespoke support, comfort and
              meaningful experiences in a beautifully appointed environment.
            </p>
          </div>
        </div>
      </section>

      {/* What is Couples Care */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 pl-8 border-[var(--primary)]">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              What is Couples Care?
            </h2>
            <p className="text-lg leading-relaxed max-w-4xl">
              Couples care ensures both partners can continue living together
              while receiving tailored support. Heritage Care provides
              personalised care plans, luxurious private suites, and enriching
              activities that nurture connection, wellbeing and independence.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 bg-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
              Who is Couples Care for?
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-3xl">
              Ideal for partners with varying care needs, from mild support to
              complex conditions including memory care. Heritage Care ensures
              each couple’s routine, privacy and preferences are fully
              respected.
            </p>

            <div className="space-y-5">
              {[
                "Partners needing different levels of support",
                "Memory or cognitive care requirements",
                "Post-hospital recovery or respite stays",
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
                "Tailored care plans for both partners",
                "24/7 expert support and monitoring",
                "Shared activities to nurture connection",
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

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-semibold mb-6 text-primary">
              Our Couples Care Services
            </h2>
            <p className="text-lg">
              Comprehensive services designed to support wellbeing, comfort, and
              togetherness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Personalised Care Plans",
                desc: "Plans designed for both partners’ individual and shared needs.",
              },
              {
                title: "Memory & Health Support",
                desc: "Specialist dementia and clinical care delivered with dignity.",
              },
              {
                title: "Shared Activities",
                desc: "Meaningful engagement including arts, gardening, and social events.",
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
