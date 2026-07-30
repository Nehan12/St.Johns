"use client";

import { useState, useEffect } from "react";

export default function TakeTourButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Take a video tour of Heritage Care"
        className="fixed bottom-28 left-5 z-[999] flex items-center gap-2 bg-primary text-white font-semibold pl-3 pr-5 py-3 rounded-full shadow-lg hover:scale-105 hover:brightness-90 transition-all"
      >
        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-white"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="whitespace-nowrap text-sm md:text-base">
          Take a Tour
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
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
