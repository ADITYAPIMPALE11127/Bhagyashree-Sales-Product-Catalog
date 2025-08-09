const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Address Section */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p className="text-sm">
              Bhagyashree Sales<br />
              Akurdi, Pune, Maharashtra
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">
              Phone: +91 98765 43210<br />
              WhatsApp: +91 98765 43210
            </p>
          </div>

          {/* Email Section */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <p className="text-sm">
              support@bhagyashreesales.com<br />
              info@bhagyashreesales.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
