import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6" style={{ backgroundColor: "#E7A98B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN FOOTER CONTENT — HIDDEN ON MOBILE */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Logo & Description */}
          <div>
            <Image
              height={24}
              width={48}
              src="/mainLogo.png"
              alt="Heritage Care Logo"
              className="h-24 w-auto mb-3"
            />
            <p
              className="text-sm leading-relaxed text-black"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Providing compassionate care with medical expertise and heartfelt
              dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/residential-care", label: "Residential Care" },
                { href: "/respite", label: "Respite Care" },
                {
                  href: "/specialist-conditions",
                  label: "Specialist Conditions",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <strong>Phone:</strong> (555) 123-4567
              </li>
              <li>
                <strong>Email:</strong> info@heritagecare.com
              </li>
              <li>
                <strong>Hours:</strong> 24/7 Care Available
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT — ALWAYS VISIBLE */}
        <div className="pt-0 md:pt-4 border-t-0 md:border-t border-[rgba(255,244,230,0.3)]">
          <p className="text-center text-xs text-white">
            © 2025 Heritage Care - Nursing & Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
