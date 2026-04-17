"use client";

export default function FloatingContactButtons() {
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

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-center gap-3 md:hidden">
      {/* Email Button */}
      <a href={mailtoUrl} aria-label="Contact via Email">
        <div className="w-14 h-14 rounded-full bg-[#B85C2E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-white"
            fill="currentColor"
          >
            <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
          </svg>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <div className="w-14 h-14 rounded-full bg-[#B85C2E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
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
  );
}
