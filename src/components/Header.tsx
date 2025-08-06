import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/assets/company/logo.jpg"
                alt="Company Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <h1
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Bhagyashree Sales
                </h1>
                <p className="text-sm text-gray-600">Product Catalog</p>
              </div>
            </Link>
          </div>

          {/* Right: Contact Us */}
          <a
            href="#footer"
            className="text-blue-600 font-medium text-lg hover:underline"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
