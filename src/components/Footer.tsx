import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-primary text-main">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN FOOTER CONTENT — HIDDEN ON MOBILE */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Logo & Description */}
          <div>
            <Image
              height={90}
              width={200}
              src="/mainLogo-green.png"
              alt="Heritage Care Logo"
              className="mb-3"
            />
            <p className="text-sm leading-relaxed">
              Providing compassionate care with medical expertise and heartfelt
              dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/costs", label: "Fee & Pricing Breakdown" },
                { href: "/activities", label: "Activities" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#2F3E2F] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-bold font-semibold mb-3">Services</h4>
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
                    className="text-sm text-main hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-main">
              Contact Us
            </h4>

            <ul className="space-y-2 text-sm text-main">
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+94771654202">+94 77 165 4202 /+94 77 725 3873</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:heritagecarelk@gmail.com">
                  heritagecarelk@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaClock />
                <span>24/7 Care Available</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-main">
              <a
                href="https://www.facebook.com/share/1FcQ1eSrEM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-120"
              >
                <FaFacebook size={25} />
              </a>

              <a
                href="https://www.instagram.com/heritagecarelk?igsh=dWZkNDljMmEwMXNq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-120"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT — ALWAYS VISIBLE */}
        <div className="pt-0 md:pt-4 border-t-0 md:border-t border-[rgba(255,244,230,0.3)]">
          <p className="text-center text-xs text-main">
            © 2026 Heritage Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
