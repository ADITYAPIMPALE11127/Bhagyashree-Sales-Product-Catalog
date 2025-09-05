import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Phone, Info } from 'lucide-react';

interface HeaderProps {
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm = '', onSearchChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-[#9EEBFF] shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo + Title */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Link to="/" className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity">
                <img
                  src="/assets/company/logo.jpg"
                  alt="Company Logo"
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                />
                <div className="flex flex-col">
                  <h1
                    className="text-lg lg:text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Bhagyashree Sales
                  </h1>
                  <p className="text-xs lg:text-sm text-gray-600">Product Catalog</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="#about"
                className="text-blue-600 font-medium text-lg hover:underline transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About Us
              </a>
              <a
                href="#footer"
                className="text-blue-600 font-medium text-lg hover:underline transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar - Below Navbar */}
        <div className="bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="block w-full pl-9 lg:pl-10 pr-3 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          />
          
          {/* Side Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-4 py-6 space-y-4">
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Info className="w-5 h-5" />
                  <span className="font-medium">About Us</span>
                </a>
                
                <a
                  href="#footer"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Contact Us</span>
                </a>
              </nav>

              {/* Menu Footer */}
              <div className="p-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Bhagyashree Sales</p>
                  <p className="text-xs text-gray-400">Product Catalog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;