import React from 'react';
import { X, MapPin, Phone, Mail, Award, Users, Target } from 'lucide-react';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutUsModal: React.FC<AboutUsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                About Bhagyashree Sales
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            {/* Company Overview */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Bhagyashree Sales, your trusted partner for high-quality cleaning and household products. 
                Located in Akurdi, Pune, Maharashtra, we have been serving customers with premium cleaning solutions 
                that make your home and workplace spotless and hygienic.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our extensive product range includes floor cleaners, dish cleaners, naphthalene balls, floor wipers, 
                and cotton mops from renowned brands like Tiger. We are committed to providing products that deliver 
                exceptional cleaning performance while being safe for your family and environment.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide high-quality, affordable cleaning solutions that help maintain hygiene and cleanliness 
                  in homes and workplaces across Maharashtra and beyond.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Quality products from trusted brands
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Competitive and fair pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Exceptional customer service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    Environmental responsibility
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Product Range</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Floor Cleaners</h4>
                  <p className="text-sm text-blue-700">Premium concentrated cleaners for all floor types</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Dish Cleaners</h4>
                  <p className="text-sm text-green-700">Effective dishwashing solutions for spotless utensils</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Naphthalene Balls</h4>
                  <p className="text-sm text-purple-700">Protection against insects and moths</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Floor Wipers</h4>
                  <p className="text-sm text-orange-700">Durable cleaning tools for efficient floor maintenance</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-900 mb-2">Cotton Mops</h4>
                  <p className="text-sm text-teal-700">High-quality mops for thorough cleaning</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Branded Products</h4>
                  <p className="text-sm text-red-700">Trusted brands like Tiger for reliable quality</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Address</h4>
                    <p className="text-sm text-gray-600">Akurdi, Pune, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                    <p className="text-sm text-gray-600">info@bhagyashreesales.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Statement */}
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 font-medium italic">
                "At Bhagyashree Sales, customer satisfaction is our top priority. We ensure competitive pricing, 
                reliable quality, and prompt service to meet all your cleaning needs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal;