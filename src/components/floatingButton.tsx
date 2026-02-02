"use client";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "94740601617";
  const message = encodeURIComponent(
    "Hello, I’d like to know more about Heritage Care services.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[999] md:hidden"
      aria-label="Contact us on WhatsApp"
    >
      <div className="w-14 h-14 rounded-full bg-[#B85C2E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <svg
          viewBox="0 0 32 32"
          className="w-10 h-10 text-white text-center"
          fill="currentColor"
        >
          <path d="M19.11 17.19c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.84c.14.18 1.95 2.98 4.72 4.18.66.28 1.17.45 1.57.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        </svg>
      </div>
    </a>
  );
}
