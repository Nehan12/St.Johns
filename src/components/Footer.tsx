export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/sjlogonew.png" 
              alt="St. John's Logo" 
              className="h-12 w-12 mr-3"
            />
            <h3 className="text-2xl font-bold">St. John's Palliative & Wellness Residence</h3>
          </div>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Providing compassionate care with medical expertise and heartfelt dedication to ensure dignity, quality of life, and peace of mind for residents and their families.
          </p>
          <div className="border-t border-blue-800 pt-6">
            <p className="text-blue-300">
              © 2024 St. John's Palliative & Wellness Residence. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
