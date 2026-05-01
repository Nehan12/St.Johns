"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Replace these with your actual Cloudinary details
const CLOUDINARY_UPLOAD_PRESET = "heritage-care-resumes";
const CLOUDINARY_CLOUD_NAME = "dcxv1iqij";

export default function Contact() {
  type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    inquiryType: string;
    cv: File | null;
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "general",
    cv: null,
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { name, email, message } = formData;
    setIsValid(
      name.trim() !== "" && email.trim() !== "" && message.trim() !== "",
    );
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        setAlert({ type: "error", message: "Please upload a PDF file." });
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
    }
  };

  // Helper to upload to Cloudinary (Free & No Credit Card Required)
  const uploadToCloudinary = async (file: File) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    // We use "raw" for PDFs to ensure they are handled correctly
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`, // Use 'auto' here
      { method: "POST", body: data },
    );

    if (!response.ok) throw new Error("Cloudinary upload failed");
    const result = await response.json();
    return result.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setAlert(null);

    try {
      let cvUrl = "No file attached";

      // 1. Upload CV to Cloudinary if it exists
      if (formData.cv) {
        cvUrl = await uploadToCloudinary(formData.cv);
      }

      // 2. Send Email via EmailJS with the link
      await emailjs.send(
        "service_ks635ew",
        "template_52yguaa",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "N/A",
          message: formData.message,
          inquiry_type: formData.inquiryType,
          cv_link: cvUrl, // Make sure {{cv_link}} is in your EmailJS template!
        },
        "0yFoQkadMtGQe6Gyf",
      );

      setAlert({
        type: "success",
        message: "Thank you! Your message and CV have been sent.",
      });

      // Reset form (note: file input needs manual reset or key change)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        inquiryType: "general",
        cv: null,
      });

      // Clear file input manually
      const fileInput = document.getElementById(
        "cv-upload",
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (err) {
      console.error(err);
      setAlert({
        type: "error",
        message: "Submission failed. Please check file size or try again.",
      });
    } finally {
      setLoading(false);
    }
  };

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
        className="relative flex items-center justify-center md:py-24 pt-40 md:pt-36 pb-8 bg-cover bg-no-repeat bg-center md:min-h-[85vh]"
        style={{ backgroundImage: "url(/contactPage.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white pb-4 md:pb-6">
              Contact Us
            </h1>
            <div className="underline mx-auto mt-2"></div>
            <p className="hidden landscape:block md:block text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto">
              We&apos;re here to help. Contact us to learn more about our
              services or to schedule a visit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Location",
                    content:
                      "Heritage Care Residence, Diyagala Boys Town, Ragama, Sri Lanka",
                    icon: (
                      <path d="M12 11a3 3 0 100-6 3 3 0 000 6zM12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
                    ),
                  },
                  {
                    title: "Phone",
                    content: "+94 77 165 4202 / +94 77 725 3873",
                    icon: (
                      <path d="M3 5a2 2 0 012-2h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2C9 21 3 15 3 7V5z" />
                    ),
                  },
                  {
                    title: "Email",
                    content: "heritagecarelk@gmail.com",
                    icon: <path d="M3 7l9 6 9-6v10H3V7zM3 7l9-5 9 5" />,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md">
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
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl p-8 shadow-lg border border-[var(--primary)] bg-light">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                {[
                  { id: "name", label: "Full Name *", type: "text" },
                  { id: "email", label: "Email Address *", type: "email" },
                  { id: "phone", label: "Phone Number", type: "tel" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={
                        formData[
                          field.id as keyof Omit<FormData, "cv">
                        ] as string
                      }
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* CV Upload Field */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Upload CV (PDF only) *
                  </label>
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--secondary)] cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-opacity-80"
                    required
                  />
                  {formData.cv && (
                    <p className="text-xs text-green-600 mt-2">
                      Selected: {formData.cv.name}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className={`w-full bg-primary hover:brightness-90 text-white py-3 rounded-lg font-semibold shadow-md transition flex justify-center items-center gap-2 ${
                    !isValid || loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {alert && (
                  <div
                    className={`mt-4 p-4 rounded-lg text-white ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                  >
                    {alert.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
