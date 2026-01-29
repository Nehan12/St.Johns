"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
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

      {/* Hero Section with Image */}
      <section
        className="relative pt-32 md:pt-0 py-20 md:py-[20%] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[85vh]"
        style={{
          backgroundImage: "url(/about.jpg)",
        }}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C53]/80 via-[#456882]/70 to-[#D2C1B6]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C53]/40 via-transparent to-[#D2C1B6]/30"></div> */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              About Us
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Excellence in luxury care, where compassion meets innovation in
              the heart of Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-[#F1D1C4] shadow-sm">
            {/* Accent strip */}
            <div className="absolute inset-y-0 left-0 w-2 bg-[#E67E5A]" />

            <div className="p-10 md:p-14 pl-12 md:pl-16">
              <h2
                className="text-3xl font-bold mb-6"
                style={{
                  color: "#3A2A23",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Our Mission
              </h2>

              <p
                className="text-lg md:text-xl leading-relaxed max-w-4xl"
                style={{ color: "#5C4033", fontFamily: "Poppins, sans-serif" }}
              >
                To provide exceptional, compassionate care that enhances quality
                of life while honoring dignity, comfort, and personal wellbeing
                for every individual we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#FFF4EE]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: "#3A2A23",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Our Approach to Care
            </h2>
            <p
              className="text-lg"
              style={{ color: "#5C4033", fontFamily: "Poppins, sans-serif" }}
            >
              A carefully guided process designed to ensure comfort, trust, and
              continuous support at every stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Timeline */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-2 top-0 bottom-0 w-px bg-[#E67E5A]/40" />

              {[
                {
                  title: "Assessment & Planning",
                  text: "We carefully assess medical needs, emotional wellbeing, and personal preferences.",
                },
                {
                  title: "Personalized Care",
                  text: "Dedicated caregivers deliver compassionate support tailored to each resident.",
                },
                {
                  title: "Ongoing Support",
                  text: "Continuous monitoring and close communication with families ensure peace of mind.",
                },
              ].map((item, index) => (
                <div key={index} className="relative mb-14 flex gap-6">
                  <div className="w-4 h-4 mt-2 rounded-full bg-[#E67E5A]" />
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{
                        color: "#3A2A23",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "#5C4033",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image + Stats */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: "url(/landing2.jpg)" }}
                />
              </div>

              {/* Stats */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-md border border-[#F1D1C4]">
                <p className="text-2xl font-bold text-[#E67E5A]">24/7</p>
                <p className="text-sm text-[#5C4033]">Care & Support</p>
              </div>

              <div className="absolute top-6 right-6 bg-white rounded-2xl p-5 shadow-md border border-[#F1D1C4]">
                <p className="text-2xl font-bold text-[#E67E5A]">98%</p>
                <p className="text-sm text-[#5C4033]">Family Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
