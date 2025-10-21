export default function Footer() {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: '#1B3C53' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img 
            src="/logo6.png" 
            alt="Bedrock Care Logo" 
            className="h-40 w-auto mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Allrounder Monument Regular, sans-serif' }}>Bedrock Care - Nursing & Wellness</h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ fontFamily:'Libre Baskerville Regular, sans-serif' }}>
            Providing compassionate care with medical expertise and heartfelt dedication to ensure dignity, quality of life, and peace of mind for residents and their families.
          </p>
          <div className="pt-6" style={{ borderTop: '1px solid #456882' }}>
            <p style={{fontFamily:'Libre Baskerville Regular, sans-serif' }}>
              © 2025 Bedrock Care - Nursing & Wellness. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
