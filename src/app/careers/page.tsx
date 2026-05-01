"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import {
  Shield,
  BookOpen,
  Clock,
  Users,
  DollarSign,
  Heart,
  Briefcase,
  MapPin,
} from "lucide-react";

export default function Careers() {
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  useEffect(() => {
    if (selectedRole) {
      setFormData((prev) => ({
        ...prev,
        role: selectedRole,
      }));
    }
  }, [selectedRole]);
  const formRef = useRef<HTMLDivElement | null>(null);

  type Job = {
    title: string;
    type: string;
    role: string;
    location: string;
    shift: string;
    description: string;
  };

  const jobs: Job[] = [
    {
      title: "Registered Nurse — Residential Care",
      type: "Full Time",
      role: "Nursing",
      location: "Colombo",
      shift: "Day/Night Shifts",
      description:
        "Provide compassionate, professional nursing care for elderly residents with a focus on dignity and wellbeing.",
    },
    {
      title: "Memory Care Specialist",
      type: "Full Time",
      role: "Care Support",
      location: "Colombo",
      shift: "Rotating Shifts",
      description:
        "Assist residents with daily living activities while ensuring comfort, safety, and emotional support.",
    },
    {
      title: "Physiotherapist",
      type: "Part Time",
      role: "Allied Health",
      location: "Colombo",
      shift: "Weekday Mornings",
      description:
        "Deliver rehabilitation programs tailored to improve mobility and independence.",
    },
    {
      title: "Care Support Worker",
      type: "Full Time",
      role: "Care Support",
      location: "Colombo",
      shift: "Flexible Shifts",
      description:
        "Deliver rehabilitation programs tailored to improve mobility and independence.",
    },
    {
      title: "Care Coordinator",
      type: "Contract",
      role: "Administration",
      location: "Colombo",
      shift: "Office Hours",
      description:
        "Deliver rehabilitation programs tailored to improve mobility and independence.",
    },
  ];

  const features = [
    {
      title: "Stable, meaningful work",
      desc: "Join a growing, government-certified care provider with long-term career paths.",
      icon: Shield,
    },
    {
      title: "Training & certification",
      desc: "Sponsored CPD, nursing certifications and professional development programmes.",
      icon: BookOpen,
    },
    {
      title: "Flexible shift patterns",
      desc: "Day, night and rotating schedules to fit your lifestyle and commitments.",
      icon: Clock,
    },
    {
      title: "Supportive team culture",
      desc: "Work alongside experienced nurses, therapists and care coordinators who mentor you.",
      icon: Users,
    },
    {
      title: "Competitive compensation",
      desc: "Market-rate salaries with performance reviews and allowances.",
      icon: DollarSign,
    },
    {
      title: "Make a real difference",
      desc: "Your work directly improves the daily lives of Sri Lanka's senior community.",
      icon: Heart,
    },
  ];

  const steps = [
    {
      id: "1",
      title: "Apply online",
      desc: "Fill in our short form below — takes less than 5 minutes",
    },
    {
      id: "2",
      title: "Initial call",
      desc: "A friendly 15-minute conversation with our care team",
    },
    {
      id: "3",
      title: "In-person interview",
      desc: "Meet the team and tour our care facility",
    },
    {
      id: "4",
      title: "Reference check",
      desc: "We verify credentials and contact your referees",
    },
    {
      id: "5",
      title: "Welcome aboard",
      desc: "Offer letter, induction programme and onboarding",
    },
  ];

  const [activeRole, setActiveRole] = useState<string>("All");

  const roles = ["All", ...Array.from(new Set(jobs.map((j) => j.role)))];

  const filteredJobs =
    activeRole === "All" ? jobs : jobs.filter((job) => job.role === activeRole);

  const CLOUDINARY_UPLOAD_PRESET =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

  const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    experience: string;
    about: string;
    cv: File | null;
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    about: "",
    cv: null,
  });

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  //   const [isValid, setIsValid] = useState(false);

  const isValid =
    formData.firstName !== "" &&
    formData.lastName !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.role !== "" &&
    formData.experience !== "" &&
    formData.about !== "";

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

  const uploadToCloudinary = async (file: File) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    // We use "raw" for PDFs to ensure they are handled correctly
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
      { method: "POST", body: data },
    );

    if (!response.ok) throw new Error("Cloudinary upload failed");
    const result = await response.json();
    return result.secure_url;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_RESUME_TEMPLATE_ID!,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone || "N/A",
          experience: formData.experience,
          about: formData.about,
          role: formData.role,
          cv_link: cvUrl,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setAlert({
        type: "success",
        message: "Thank you! Your message and CV have been sent.",
      });

      // Reset form (note: file input needs manual reset or key change)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        about: "",
        cv: null,
      });

      if (!isValid) {
        setAlert({
          type: "error",
          message: "Please fill in all required fields.",
        });
        return;
      }

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

      {/* Hero */}
      <section
        className="relative flex items-center justify-center pt-40 md:pt-36 pb-12 md:min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/careers.png)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white pb-4 md:pb-6">
              Join Our Team
            </h1>
            <div className="underline mx-auto mt-2"></div>
            <p className="hidden landscape:block md:block text-lg md:text-xl text-white max-w-3xl mt-6 md:mt-10 mx-auto">
              Care for Others. Grow with Us.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Careers at Heritage Care
        </h2>
        <p className="text-main max-w-3xl mx-auto">
          Heritage Care is Sri Lanka&apos;s most compassionate senior care
          provider. We&apos;re looking for dedicated professionals who believe
          that great care changes lives.
        </p>
      </section>

      {/* Stats */}
      <div className="py-12 px-36 text-primary text-center grid md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-5xl font-bold">24/7</h1>
          <p>Care operations</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold">100%</h1>
          <p>Certified & trusted</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold">4</h1>
          <p>Specialised services</p>
        </div>
      </div>

      {/* Why Work Section */}
      <section className="bg-[var(--primary)]/20 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            Why work at Heritage Care?
          </h2>
          <p className="text-main max-w-3xl mb-4">
            A career with purpose, training, and a team that supports you.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group bg-white/70 backdrop-blur rounded-3xl p-8 border border-[var(--primary)]/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--light)]/40 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-12 bg-gradient-to-br from-white to-[var(--secondary)]/20">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-4xl font-bold text-primary text-center mb-10">
            Current Openings
          </h3>
          <p className="text-main max-w-3xl mb-4">
            All roles are based in Sri Lanka. Some positions allow hybrid
            scheduling.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {roles.map((role, i) => (
              <button
                key={i}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  activeRole === role
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-[var(--primary)]/40 hover:bg-[var(--primary)]/10"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          <div className=" space-y-6">
            {filteredJobs.map((job, i) => (
              <div
                key={i}
                className="bg-white p-5 md:p-8 rounded-xl border border-[var(--primary)]/40"
              >
                {/* Header */}
                <div className="flex flex-col gap-4">
                  {/* Top Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    {/* Left */}
                    <div>
                      <span
                        className={`inline-block text-xs px-3 py-1 rounded-full mb-2 ${
                          job.type === "Full Time"
                            ? "bg-green-100 text-green-700"
                            : job.type === "Part Time"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {job.type}
                      </span>

                      <h4 className="text-base md:text-lg font-semibold leading-snug">
                        {job.title}
                      </h4>
                    </div>

                    {/* Apply Button */}
                    <button
                      onClick={() => {
                        setSelectedRole(job.title);
                        formRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className="text-primary font-semibold text-sm sm:text-base hover:underline whitespace-nowrap self-start sm:self-auto"
                    >
                      Apply Now →
                    </button>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {job.role}
                    </span>

                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {job.shift}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--primary)]/20 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl text-primary font-semibold mb-3">
            Our hiring process
          </h2>
          <p className="mb-16">
            Simple, respectful, and transparent from start to finish.
          </p>

          {/* Steps Wrapper */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-7 left-0 w-full h-[1px] bg-[var(--primary)]/40"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 relative">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  {/* Circle */}
                  <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-lg mb-4 bg-primary text-white">
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3 className="text-primary font-semibold text-lg mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-primary mb-4 text-center">
            Apply to join Heritage Care
          </h2>
          <p className="text-main max-w-3xl mb-4 text-center mx-auto">
            Tell us about yourself — we&apos;ll be in touch within 3 business
            days.
          </p>
          <div className="max-w-3xl mx-auto bg-[var(--primary)]/20 p-8 rounded-2xl border border-[var(--primary)]/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Ayesha"
                    className="w-full p-3 rounded-lg border border-[var(--primary)]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Fernando"
                    className="w-full p-3 rounded-lg border border-[var(--primary)]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg border border-[var(--primary)]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+94 77 000 0000"
                  className="w-full p-3 rounded-lg border border-[var(--primary)]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Role you&apos;re applying for{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-[var(--primary)]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">Select a position...</option>
                  {jobs.map((job, i) => (
                    <option key={i} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Years of relevant experience{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-[var(--primary)]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  <option value="">Select...</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              {/* About */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Tell us about yourself & why Heritage Care{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="A brief introduction..."
                  className="w-full p-3 rounded-lg border border-[var(--primary)]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Upload your CV / Resume(PDF only){" "}
                </label>

                {/* Hidden input */}
                <input
                  type="file"
                  id="cv-upload"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--primary)]/40 bg-white cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--primary)]/20 file:text-main hover:file:bg-opacity-80"
                />

                {formData.cv && (
                  <p className="text-xs text-main mt-2">
                    Selected: {formData.cv.name}
                  </p>
                )}
              </div>

              {/* {"Submit Button */}
              <button
                disabled={!isValid || loading}
                type="submit"
                className={`w-full bg-primary hover:brightness-90 text-white py-3 rounded-lg font-semibold shadow-md transition flex justify-center items-center gap-2 ${
                  !isValid || loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              {alert && (
                <div
                  className={`mt-4 p-4 rounded-lg text-white ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                >
                  {alert.message}
                </div>
              )}

              {/* Footer text */}
              <p className="text-center text-sm text-gray-500">
                Your information is kept confidential and used only for
                recruitment purposes.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
