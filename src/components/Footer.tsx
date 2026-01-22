import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6" style={{ backgroundColor: '#8FA68E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img 
              src="/heritageCarelogo.png" 
              alt="Heritage Care Logo" 
              className="h-24 w-48 w-auto mb-3"
            />
            <p 
              className="text-sm leading-relaxed" 
              style={{ 
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 500,
                color: '#FFFFFF'
              }}
            >
              Providing compassionate care with medical expertise and heartfelt dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-base font-semibold mb-3" 
              style={{ 
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                color: '#FFFFFF'
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:underline transition-all"
                    style={{ 
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      color: '#FFFFFF'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-base font-semibold mb-3" 
              style={{ 
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                color: '#FFFFFF'
              }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/residential-care', label: 'Residential Care' },
                { href: '/respite', label: 'Respite Care' },
                { href: '/specialist-conditions', label: 'Specialist Conditions' },
                { href: '/24-hour-nursing', label: '24-Hour Nursing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:underline transition-all"
                    style={{ 
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      color: '#FFFFFF'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-base font-semibold mb-3" 
              style={{ 
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 700,
                color: '#FFFFFF'
              }}
            >
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li 
                className="text-sm"
                style={{ 
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  color: '#ffffff'
                }}
              >
                <span className="font-semibold">Phone:</span> (555) 123-4567
              </li>
              <li 
                className="text-sm"
                style={{ 
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  color: '#ffffff'
                }}
              >
                <span className="font-semibold">Email:</span> info@heritagecare.com
              </li>
              <li 
                className="text-sm"
                style={{ 
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  color: '#ffffff'
                }}
              >
                <span className="font-semibold">Hours:</span> 24/7 Care Available
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t" style={{ borderTop: '1px solid rgba(255, 244, 230, 0.3)' }}>
          <p 
            className="text-center text-xs"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              color: '#ffffff'
            }}
          >
            © 2025 Heritage Care - Nursing & Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
