"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  // Form data type-safe
  type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    inquiryType: string;
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "general",
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    // Show a temporary alert
    alert("Thank you for your message. We will get back to you soon!");

    // Optional: reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      inquiryType: "general",
    });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
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
            backgroundImage: "url(/landing3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "crisp-edges",
          } as React.CSSProperties
        }
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Us
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We&apos;re here to help. Contact us to learn more about our
              services or to schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-[#FFF4EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-10"
                style={{ color: "#3A2A23", fontFamily: "Poppins, sans-serif" }}
              >
                Get in Touch
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Location",
                    content: (
                      <>
                        Heritage Care Residence
                        <br />
                        Diyagala Boys Town <br />
                        Ragama, Sri Lanka
                      </>
                    ),
                    icon: (
                      <path d="M12 11a3 3 0 100-6 3 3 0 000 6zM12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
                    ),
                  },
                  {
                    title: "Phone",
                    content: (
                      <>
                        +94 77 165 4202
                        <br />
                        +94 77 725 3873
                      </>
                    ),
                    icon: (
                      <path d="M3 5a2 2 0 012-2h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2C9 21 3 15 3 7V5z" />
                    ),
                  },
                  {
                    title: "Email",
                    content: <>info@heritagecare.lk</>,
                    icon: <path d="M3 7l9 6 9-6v10H3V7zM3 7l9-5 9 5" />,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E67E5A] rounded-lg flex items-center justify-center shadow-md">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-1"
                        style={{
                          color: "#3A2A23",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "#5C4033",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F1D1C4]">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#3A2A23", fontFamily: "Poppins, sans-serif" }}
              >
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Full Name *", type: "text" },
                  { id: "email", label: "Email Address *", type: "email" },
                  { id: "phone", label: "Phone Number", type: "tel" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#3A2A23" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof FormData]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#F1D1C4] focus:ring-2 focus:ring-[#E67E5A] focus:outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#3A2A23" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#F1D1C4] focus:ring-2 focus:ring-[#E67E5A] focus:outline-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E67E5A] hover:bg-[#D86A45] text-white py-3 rounded-lg font-semibold shadow-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
