"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResidentialCare() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-10 md:py-[20%] pb-10 md:pb-[5%] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[85vh]"
        style={
          {
            backgroundImage: "url(/services.jpg)",
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
              Long-term residential care in a comfortable, home-like environment
              with 24/7 support.
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
              Residential care offers a warm, supportive environment where you
              can enjoy professional assistance with daily living while
              preserving your independence. It provides continuous support
              within a dedicated setting, ensuring expert care, enriching
              experiences and a lifestyle tailored to your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Who it’s for – Split Editorial */}
      <section className="py-24 bg-[#E7A98B]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14 items-start">
          {/* Left narrative */}
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
              When living independently becomes challenging due to physical
              health, mobility or cognitive conditions, residential care offers
              the reassurance of support without sacrificing dignity or
              independence.
            </p>

            <div className="space-y-5">
              {[
                "Physical health challenges requiring ongoing support",
                "Mobility limitations needing assistance",
                "Cognitive conditions requiring specialized care",
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

          {/* Right floating card */}
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
                "Personalized care plans",
                "24/7 professional support",
                "Enriching social experiences",
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

      {/* Services – Horizontal Card Flow */}
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
              Our Professional Care Services
            </h2>
            <p
              className="text-lg"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#5A3A2E",
              }}
            >
              Expert-led services designed to support independence, comfort and
              peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Personal Care",
                desc: "Daily living assistance delivered with dignity and respect.",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="#B85C2E"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.01-6 4.5V20h12v-2.5c0-2.49-2.69-4.5-6-4.5z"
                    />
                  </svg>
                ),
              },
              {
                title: "Medication Management",
                desc: "Professional monitoring and safe administration of medications.",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="#B85C2E"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h8M8 11h8M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Social Engagement",
                desc: "Activities that encourage connection, joy and fulfilment.",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="#B85C2E"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a4 4 0 00-4-4h-1m-10 6H2v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 0a3 3 0 100-6 3 3 0 000 6z"
                    />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-[#E7A98B]/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#E7A98B]/20 group-hover:bg-[#E7A98B]/30 transition">
                  {s.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {s.title}
                </h3>

                {/* Description */}
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

      {/* Types – Vertical Comparison */}
      <section className="py-10 bg-gradient-to-br from-white via-[#E7A98B]/10 to-[#FDF5F0]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-semibold mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#B85C2E",
              }}
            >
              Types of Residential Care
            </h2>
            <p
              className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#5A3A2E",
              }}
            >
              Heritage Care offers tailored types of residential care to suit
              your personal needs and preferences.
            </p>
          </div>

          {/* Grid of Types */}
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: "Long-term Residential Care",
                points: [
                  "Permanent accommodation",
                  "24/7 nursing support",
                  "Personalized care plans",
                ],
                icon: (
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-7 6h.01M12 20v-4"
                    />
                  </svg>
                ),
              },
              {
                title: "Short-term Respite Care",
                points: [
                  "Recovery support",
                  "Carer respite",
                  "Flexible duration",
                ],
                icon: (
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M4.5 19a9 9 0 1115 0H4.5z"
                    />
                  </svg>
                ),
              },
            ].map((type, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E7A98B]/40 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative top-left circle */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#B85C2E] to-[#E7A98B] rounded-full opacity-30 animate-pulse"></div>
                {/* Decorative bottom-right circle */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tr from-[#5A3A2E] to-[#E7A98B] rounded-full opacity-20 animate-pulse"></div>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#B85C2E] to-[#E7A98B] rounded-full mb-6 shadow-md">
                  {type.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#5A3A2E",
                  }}
                >
                  {type.title}
                </h3>

                {/* Points */}
                <ul className="space-y-4">
                  {type.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#B85C2E] to-[#E7A98B] mr-4 flex-shrink-0 shadow-sm"></div>
                      <span
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: "#5A3A2E",
                        }}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
