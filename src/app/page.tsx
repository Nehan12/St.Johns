"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  // Refs for scroll animations
  const textContentRef = useRef<HTMLElement>(null);
  const coreValuesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const luxuryRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-section");
            if (elementId) {
              setIsVisible((prev) => ({
                ...prev,
                [elementId]: true,
              }));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const refs = [
      { ref: textContentRef, id: "textContent" },
      { ref: coreValuesRef, id: "coreValues" },
      { ref: whyChooseRef, id: "whyChoose" },
      { ref: statsRef, id: "stats" },
      { ref: servicesRef, id: "services" },
      { ref: luxuryRef, id: "luxury" },
    ];

    refs.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", id);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Navigation />

      {/* Hero Section - Carousel with Navigation Anchors */}
      <section className="relative h-[85vh] overflow-hidden w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/landing3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start z-20 px-8 md:px-16">
          <div className="text-left max-w-4xl">
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Care Beyond Compare
            </h2>
            <p
              className="text-xl md:text-4xl text-white/90 mb-8 leading-relaxed italic"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 200 }}
            >
              It must be Heritage Care.
            </p>

            <div className="flex flex-row gap-4">
              <Link
                href="/about"
                className="text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: "#D46A1F" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E7A98B")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D46A1F")
                }
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: "#D46A1F" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E7A98B")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D46A1F")
                }
              >
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Curved SVG */}
        <div className="absolute bottom-0 left-0 w-full z-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 165"
            preserveAspectRatio="none"
            className="w-full h-[140px]"
          >
            <path
              d="M-3,49S398.468,152.5,799.951,152.5C1201.47,152.5,1603,49,1603,49V167.5H-3V49Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      <section
        className="relative bg-fixed bg-cover bg-center mt-12"
        ref={servicesRef}
      >
        <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-start gap-8">
            {[
              {
                icon: "/1.png",
                title: "Luxury Senior Residential Care",
                description:
                  "Our primary goal is to help seniors maintain a familiar lifestyle in the comfort of home.",
              },
              {
                icon: "/2.png",
                title: "24/7 Nursing",
                description:
                  "We provide exceptional, compassionate care to your loved ones in the comfort of home 24/7.",
              },
              {
                icon: "/3.png",
                title: "Memory Care",
                description:
                  "Provides specialized dementia support, ensuring safety, structured care & family communication.",
              },
              {
                icon: "/4.png",
                title: "Rehabilitation",
                description:
                  "Focused on recovery & restoring independence through therapy, personalized care & progress monitoring.",
              },
            ].map((card, index) => {
              const offsets = [
                "sm:-translate-y-20",
                "sm:-translate-y-0",
                "sm:-translate-y-0",
                "sm:-translate-y-20",
              ];

              return (
                <a
                  href="#"
                  key={index}
                  className={`transform transition-all duration-300 ${offsets[index]} max-w-xs w-full`}
                  style={{ color: "#E7A98B" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D46A1F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#E7A98B";
                  }}
                >
                  <div
                    className="flex flex-col items-center text-center p-4 rounded-2xl cursor-pointer 
                            hover:scale-105 group"
                  >
                    <div
                      className="w-20 h-20 mt-6 mb-6 flex items-center justify-center rounded-full transition-colors"
                      style={{ backgroundColor: "#D46A1F" }}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={12}
                        height={12}
                        className="w-12 h-12 group-hover:filter group-hover:brightness-125 transition-all"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 transition-colors break-words">
                      {card.title}
                    </h3>
                    <p
                      className="mb-4 transition-colors break-words"
                      style={{ color: "#3F2A1E" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#060606";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#3F2A1E";
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Text Content Section */}
      <section
        className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white"
        ref={textContentRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start md:items-center">
            {/* Left Side - Image */}
            <div className="relative flex justify-center order-2 md:order-1 w-full">
              <div
                className={`aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/2] w-full max-w-sm sm:max-w-md md:max-w-lg bg-cover bg-center bg-no-repeat rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
                  isVisible.textContent
                    ? "animate-slideInLeft"
                    : "opacity-0 translate-x-[-50px]"
                }`}
                style={{
                  backgroundImage: "url(/new9.jpg)",
                  minHeight: "200px",
                  maxHeight: "400px",
                }}
              />
            </div>

            {/* Right Side - Text Content */}
            <div
              className={`order-1 md:order-2 w-full transition-all duration-1000 ${
                isVisible.textContent
                  ? "animate-slideInRight"
                  : "opacity-0 translate-x-[50px]"
              }`}
            >
              <h1
                className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight transform transition-all duration-500 hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                }}
              >
                Luxury Care, Rooted in Compassion
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed transform transition-all duration-500 hover:translate-x-2"
                style={{
                  color: "#6B6B6B",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                }}
              >
                Our commitment to care is unwavering and continuous. We are
                deeply dedicated to delivering the highest standards of 24-hour
                residential care, respite services, day programmes, and memory
                care, all supported by exceptional hospitality. Every aspect of
                our service is thoughtfully designed to promote comfort,
                dignity, and a meaningful quality of life. For us, excellence is
                not just a benchmark it is a commitment we uphold every day.
                Caring more is at the heart of everything we do.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#FBF3EE" }}
        ref={coreValuesRef}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className={`absolute top-10 left-10 w-32 h-32 rounded-full transition-all duration-1000 ${
              isVisible.coreValues ? "animate-bounce" : "opacity-0 scale-0"
            }`}
            style={{ backgroundColor: "#FBF3EE", animationDelay: "0.1s" }}
          ></div>
          <div
            className={`absolute top-32 right-20 w-24 h-24 rounded-full transition-all duration-1000 ${
              isVisible.coreValues ? "animate-bounce" : "opacity-0 scale-0"
            }`}
            style={{ backgroundColor: "#E7A98B", animationDelay: "0.3s" }}
          ></div>
          <div
            className={`absolute bottom-20 left-1/4 w-20 h-20 rounded-full transition-all duration-1000 ${
              isVisible.coreValues ? "animate-bounce" : "opacity-0 scale-0"
            }`}
            style={{ backgroundColor: "#E7A98B", animationDelay: "0.5s" }}
          ></div>
          <div
            className={`absolute bottom-32 right-1/3 w-28 h-28 rounded-full transition-all duration-1000 ${
              isVisible.coreValues ? "animate-bounce" : "opacity-0 scale-0"
            }`}
            style={{ backgroundColor: "#E7A98B", animationDelay: "0.7s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Connection */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-8">
                <div
                  className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
                  style={{ backgroundColor: "#E7A98B" }}
                >
                  <svg
                    className="w-12 h-12 transition-all duration-500 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#ffffff" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Connection
              </h3>
              <p
                className="text-lg leading-relaxed transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#3F2A1E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Building meaningful relationships between residents, families,
                and our compassionate care team.
              </p>
            </div>

            {/* Well-being */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-8">
                <div
                  className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
                  style={{ backgroundColor: "#E7A98B" }}
                >
                  <svg
                    className="w-12 h-12 transition-all duration-500 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#ffffff" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Well-being
              </h3>
              <p
                className="text-lg leading-relaxed transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#3F2A1E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Promoting physical, emotional, and spiritual wellness through
                personalized care and support.
              </p>
            </div>

            {/* Security */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mb-8">
                <div
                  className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
                  style={{ backgroundColor: "#E7A98B" }}
                >
                  <svg
                    className="w-12 h-12 transition-all duration-500 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#ffffff" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Security
              </h3>
              <p
                className="text-lg leading-relaxed transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#3F2A1E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Providing a safe, secure environment where residents and
                families feel protected and at peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 mt-6 bg-white" ref={whyChooseRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible.whyChoose
                ? "animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: "#B85C2E",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Why Choose Heritage Care?
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{
                color: "#5A3A2E",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Experience the difference of compassionate, professional care in a
              warm, welcoming environment.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Professional Team",
                text: "Skilled caregivers available 24/7, dedicated to personalised support and wellbeing.",
              },
              {
                title: "Safe & Comfortable",
                text: "Modern, secure living spaces designed for comfort, accessibility, and peace of mind.",
              },
              {
                title: "Holistic Wellbeing",
                text: "Engaging programs supporting physical, emotional, and social health.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`text-center p-6 rounded-xl shadow-md border border-[#F1D1C4] transition-transform duration-500 hover:scale-105 ${
                  isVisible.whyChoose
                    ? "animate-fadeInUp"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2 text-[#B85C2E]">
                  {item.title}
                </h3>
                <p className="text-[#5A3A2E]">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Certification Logos */}
          <div className="mt-16 text-center">
            {/* Heading */}
            <h3 className="text-xl font-semibold mb-2 text-[#B85C2E]">
              Certified & Trusted
            </h3>

            {/* Catchy line */}
            <p className="text-lg md:text-xl text-[#5A3A2E] max-w-2xl mx-auto leading-relaxed">
              Recognised and approved by leading authorities, giving you
              complete confidence in the quality, safety, and standards of care
              we provide.
            </p>

            {/* Logos */}
            <div className="mt-12 flex justify-center items-center gap-16 md:gap-32 flex-wrap">
              <Image
                src="clogo1.png"
                width={140}
                height={32}
                alt="Government Certified"
                className="h-32 md:h-40 transition-transform duration-300 hover:scale-110"
              />
              <Image
                width={150}
                height={64}
                src="clogo2.png"
                alt="NHRC Certified"
                className="h-64 md:h-40 transition-transform duration-300 hover:scale-110"
              />
              <Image
                width={140}
                height={32}
                src="clogo3.png"
                alt="Medical Council Certified"
                className="h-32 md:h-40 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5"
        style={{ backgroundColor: "#ffffff" }}
        ref={luxuryRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              style={{
                color: "#B85C2E",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Extra services for your family are here
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Doctor Visits Section */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/es1.jpg)" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3
                className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Doctor Visits
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#5A3A2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Comprehensive coordination of medical appointments with regular
                follow-ups, detailed health monitoring, and clear communication
                to ensure each resident&apos;s ongoing medical needs are
                carefully managed.
              </p>
            </div>

            {/* Physiotherapy Section */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/es2.png)" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3
                className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Physiotherapy
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#5A3A2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Personalized therapy programs developed through professional
                assessments, focusing on mobility improvement, strength
                building, pain management, and continuous progress evaluation.
              </p>
            </div>

            {/* Special Diets Section */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/es3.png)" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3
                className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Special Diets
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#5A3A2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Individually planned nutrition programs based on medical
                requirements, dietary preferences, and ongoing health reviews to
                support overall wellness and specific conditions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Transport Section */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/es4.png)" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3
                className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Transportation Services
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#5A3A2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Organized and reliable transportation services arranged with
                safety considerations, scheduling flexibility, and assistance to
                support medical visits and personal outings.
              </p>
            </div>

            {/* Dedicated Night Care Section */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/es5.png)" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3
                className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Dedicated Night Carer
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#5A3A2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Dedicated overnight support providing continuous supervision,
                immediate response assistance, comfort care, and regular
                monitoring to ensure safety and peace of mind.
              </p>
            </div>

            {/* Medication Management Section */}
            <div
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/es6.png)" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3
                className="text-xl font-bold mb-4 transform transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "#B85C2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Medication Management
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 transform transition-all duration-300 group-hover:translate-y-1"
                style={{
                  color: "#5A3A2E",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Structured medication plans including timely administration,
                dosage monitoring, coordination with healthcare professionals,
                and regular reviews to maintain optimal health outcomes.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              style={{ backgroundColor: "#B85C2E" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#E7A98B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#B85C2E";
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Care Highlights Section */}
      <section
        ref={luxuryRef}
        className="relative py-40 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url(/image.png)",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* TOP DOWNWARD ARC */}
        <div className="absolute -top-[0.5px] left-0 w-full z-10 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 165"
            preserveAspectRatio="none"
            className="w-full h-[160px]"
          >
            <path
              d="M-3,49S398.468,152.5,799.951,152.5C1201.47,152.5,1603,49,1603,49V0H-3V49Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div
            className={`mb-12 text-center transition-all duration-1000 ${
              isVisible.luxury ? "animate-fadeInUp" : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 mt-4"
              style={{
                color: "#F7F4F0",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Luxury Care, Redefined
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                color: "#EFE9E2",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Experience the pinnacle of luxury care where every detail is
              crafted for comfort, dignity, and exceptional living.
            </p>
          </div>

          {/* Description */}
          <div
            className={`text-center mb-32 transition-all duration-1000 ${
              isVisible.luxury ? "animate-fadeInUp" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <p
              className="text-xl leading-relaxed max-w-4xl mx-auto"
              style={{
                color: "#F1ECE6",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              At Heritage Care, we redefine luxury care through our exclusive
              boutique estate designed for discerning families. Our
              concierge-level medical oversight, white-glove lifestyle services,
              and gourmet culinary experiences create an unparalleled
              environment where every detail reflects our commitment to
              exceptional living.
            </p>
          </div>

          {/* TAGLINE */}
          <div
            className={`flex flex-col items-center justify-center text-center transition-all duration-1000 ${
              isVisible.luxury ? "animate-fadeInUp" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <h3
                className="text-3xl md:text-5xl font-bold"
                style={{
                  color: "#F7F4F0",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                We are ready to lend a hand
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
