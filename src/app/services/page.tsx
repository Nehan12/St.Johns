"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Services() {
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
          relative
          flex items-center
          pt-32 md:pt-24
          bg-cover bg-center bg-no-repeat
          min-h-[60vh] md:min-h-[85vh]
        "
        style={
          {
            backgroundImage: "url(/new1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "crisp-edges",
          } as React.CSSProperties
        }
      >
        {/* Colorful Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Our Services
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4">
              Comprehensive care services designed to meet the unique needs of
              each resident at Heritage Care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-br from-white to-[var(--light)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--primary)]/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[var(--primary)]/15 to-transparent rounded-full translate-y-36 -translate-x-36"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Core Services
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
              At Heritage Care, we provide comprehensive care services tailored
              to meet the unique needs of each resident.
            </p>
          </div>
          <section className="max-w-7xl mx-auto px-4 mb-20">
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {/* Residential Care */}
              <div className="bg-white rounded-lg p-8 border border-[var(--primary)]/30 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg bg-primary">
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
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Residential Care
                </h3>
                <p className="mb-6">
                  Long-term residential care with full support for daily living
                  and medical needs.
                </p>
                <Link
                  href="/residential-care"
                  className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Learn More
                </Link>
              </div>

              {/* Respite Care */}
              <div className="bg-white rounded-lg p-8 border border-[var(--primary)]/30 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg bg-primary">
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Respite Care
                </h3>
                <p className="mb-6">
                  Short-term professional care giving carers time to rest and
                  recharge.
                </p>
                <Link
                  href="/respite"
                  className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Learn More
                </Link>
              </div>

              {/* Specialist Conditions Care */}
              <div className="bg-white rounded-lg p-8 border border-[var(--primary)]/30 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg bg-primary">
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
                      d="M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Specialised Conditions Care
                </h3>
                <p className="mb-6">
                  Expert care for dementia, Alzheimer’s, Parkinson’s, and
                  complex conditions.
                </p>
                <Link
                  href="/specialised-conditions"
                  className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
          {/* Additional Services */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Additional Services
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
              Supporting services that enhance the quality of life and
              well-being of our residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Nutrition Services */}
            <div
              className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 text-center
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md bg-primary">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 tracking-wide text-primary">
                Nutrition Services
              </h3>

              {/* Short intro */}
              <p className="text-sm text-gray-500 mb-5">
                Thoughtfully planned meals for healthier living
              </p>

              {/* Description */}
              <p className="text-[15px] leading-relaxed mb-6">
                Our nutrition services focus on creating balanced, enjoyable
                meal plans tailored to individual health goals, preferences, and
                medical needs.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 text-sm text-left max-w-xs mx-auto">
                {[
                  "Customized meal planning",
                  "Personalised dietary consultation",
                  "Support for special dietary needs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary/15">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Physiotherapy */}
            <div
              className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 text-center
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md bg-primary">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 tracking-wide text-primary">
                Physiotherapy
              </h3>

              {/* Short intro */}
              <p className="text-sm mb-5">
                Restoring strength, balance, and everyday mobility
              </p>

              {/* Main description */}
              <p className="text-[15px] leading-relaxed mb-6">
                Our physiotherapy services are designed to support recovery,
                reduce discomfort, and improve movement through guided,
                personalized care.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 text-sm text-left max-w-xs mx-auto">
                {[
                  "Improves mobility and flexibility",
                  "Supports pain relief and recovery",
                  "Enhances balance and fall prevention",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[var(--primary)]/15">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Occupational Therapy */}
            <div
              className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 text-center
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md bg-primary">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 tracking-wide text-primary">
                Occupational Therapy
              </h3>

              {/* Short intro */}
              <p
                className="text-sm text-gray-500 mb-5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Helping residents maintain independence and quality of life
              </p>

              {/* Description */}
              <p
                className="text-[15px] leading-relaxed text-gray-600 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Support for daily living activities and cognitive rehabilitation
                tailored to individual needs.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 text-sm text-gray-700 text-left max-w-xs mx-auto">
                {[
                  "Daily living skills",
                  "Cognitive rehabilitation",
                  "Adaptive equipment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[var(--primary)]/15">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pharmacy Services */}
            <div
              className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 text-center
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md bg-primary">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2 tracking-wide text-primary">
                Pharmacy Services
              </h3>

              <p
                className="text-sm text-gray-500 mb-5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                On-site support ensuring residents have safe and accurate
                medication.
              </p>

              <p
                className="text-[15px] leading-relaxed text-gray-600 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Comprehensive medication management, drug interaction
                monitoring, and prescription coordination for peace of mind.
              </p>

              <ul className="space-y-3 text-sm text-gray-700 text-left max-w-xs mx-auto">
                {[
                  "Medication management",
                  "Drug interaction monitoring",
                  "Prescription coordination",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[var(--primary)]/15">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span style={{ fontFamily: "Poppins, sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recreation Therapy */}
            <div
              className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 text-center
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md bg-primary">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2 tracking-wide text-primary">
                Recreation Therapy
              </h3>

              <p
                className="text-sm text-gray-500 mb-5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Fun activities that promote mental health and social engagement
              </p>

              <p
                className="text-[15px] leading-relaxed text-gray-600 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Engaging programs for cognitive stimulation, social interaction,
                and creative expression.
              </p>

              <ul className="space-y-3 text-sm text-gray-700 text-left max-w-xs mx-auto">
                {[
                  "Social activities",
                  "Cognitive stimulation",
                  "Creative arts programs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[var(--primary)]/15">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span style={{ fontFamily: "Poppins, sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 24/7 Support */}
            <div
              className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 text-center
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md bg-primary">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2 tracking-wide text-primary">
                24/7 Support
              </h3>

              <p
                className="text-sm text-gray-500 mb-5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Always there to ensure safety and peace of mind
              </p>

              <p
                className="text-[15px] leading-relaxed text-gray-600 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Round-the-clock assistance and emergency response, keeping
                residents and families confident and secure.
              </p>

              <ul className="space-y-3 text-sm text-gray-700 text-left max-w-xs mx-auto">
                {[
                  "Emergency response",
                  "Family support",
                  "Crisis intervention",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[var(--primary)]/15">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span style={{ fontFamily: "Poppins, sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Heritage Care */}
          <div className="bg-white rounded-lg p-8 border border-[var(--primary)]/10">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              Why Choose Heritage Care?
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        Experienced Professional Team
                      </h3>
                      <p
                        className="text-gray-600"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        Our dedicated healthcare professionals bring years of
                        experience in specialised care, ensuring your loved ones
                        receive the highest quality support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        Compassionate Care Approach
                      </h3>
                      <p
                        className="text-gray-600"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        We believe in treating every resident with dignity,
                        respect, and genuine compassion, creating a warm and
                        supportive environment for healing and comfort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        Personalised Care Plans
                      </h3>
                      <p
                        className="text-gray-600"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        Every resident receives a customised care plan tailored
                        to their unique needs, preferences, and health
                        conditions, ensuring optimal outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    width={64}
                    height={64}
                    src="/nunrse1.jpg"
                    alt="Professional healthcare team providing compassionate care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
