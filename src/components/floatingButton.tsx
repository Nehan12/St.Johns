"use client";

import { useState, useEffect } from "react";
import { PersonStanding } from "lucide-react";

export default function FloatingContactButtons() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  const phoneNumber = "94771654202";
  const whatsappMessage = encodeURIComponent(
    "Hello, I’d like to know more about Heritage Care services.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const email = "heritagecarelk@gmail.com";
  const subject = encodeURIComponent("Inquiry about Heritage Care services");
  const body = encodeURIComponent(
    "Hello,\n\nI’d like to know more about your services.\n\nThank you.",
  );
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  // Prevent background scroll when tour modal is open
  useEffect(() => {
    document.body.style.overflow = isTourOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isTourOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsTourOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-center gap-3">
        {/* Take a Tour Button - visible on all screen sizes */}
        <button
          onClick={() => setIsTourOpen(true)}
          aria-label="Take a video tour of Heritage Care"
        >
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            {/* Tour icon */}
            <PersonStanding className="w-7 h-7 text-white" />
          </div>
        </button>

        {/* Email Button - mobile only */}
        <a
          href={mailtoUrl}
          aria-label="Contact via Email"
          className="md:hidden"
        >
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-white"
              fill="currentColor"
            >
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
            </svg>
          </div>
        </a>

        {/* WhatsApp Button - mobile only */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="md:hidden"
        >
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-white"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 0 0-8.66 15l-1.2 4.4 4.5-1.2A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 20zm4.3-5.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8c-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.5.2s-.7.7-.7 1.8.7 2.1.8 2.2c.1.1 1.3 2 3.2 2.8.5.2.9.3 1.2.4.5.1 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
            </svg>
          </div>
        </a>
      </div>

      {/* Take a Tour Video Modal */}
      {isTourOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setIsTourOpen(false)}
        >
          <div
            className="relative w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsTourOpen(false)}
              aria-label="Close video tour"
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {/* Portrait video */}
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                src="/tour-video.mp4"
                poster="/tour-poster.jpg"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
