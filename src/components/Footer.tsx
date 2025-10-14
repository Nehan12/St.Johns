export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#1B3C53' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/sjlogonew.png" 
              alt="St. John&apos;s Logo" 
              className="h-12 w-12 mr-3"
            />
            <h3 className="text-2xl font-bold">St. John&apos;s Palliative & Wellness Residence</h3>
          </div>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#D2C1B6' }}>
            Providing compassionate care with medical expertise and heartfelt dedication to ensure dignity, quality of life, and peace of mind for residents and their families.
          </p>
          <div className="pt-6" style={{ borderTop: '1px solid #456882' }}>
            <p style={{ color: '#D2C1B6' }}>
              © 2024 St. John&apos;s Palliative & Wellness Residence. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
