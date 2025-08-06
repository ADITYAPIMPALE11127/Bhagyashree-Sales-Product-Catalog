import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  side_image?: string;
  available: boolean;
  price: string;
  quantity: string;
  MRP: string;
  Packaging_Size?: string;
  'Usage/Application'?: string;
  shelf_life?: string;
  product_brand?: string;
  'Selling rate'?: string;
  features?: string[];
}

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<'main' | 'side'>('main');
  
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Product not found</h3>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const productDetails = [
    { label: 'Category', value: product.category },
    { label: 'MRP', value: product.MRP },
    { label: 'Quantity', value: product.quantity },
    ...(product.Packaging_Size ? [{ label: 'Packaging Size', value: product.Packaging_Size }] : []),
    ...(product['Usage/Application'] ? [{ label: 'Usage/Application', value: product['Usage/Application'] }] : []),
    ...(product.shelf_life ? [{ label: 'Shelf Life', value: product.shelf_life }] : []),
    ...(product.product_brand ? [{ label: 'Brand', value: product.product_brand }] : []),
    ...(product['Selling rate'] ? [{ label: 'Selling Rate', value: product['Selling rate'] }] : []),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image Display */}
            <div className="w-full h-96 bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={selectedImage === 'main' ? product.image : (product.side_image || product.image)}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Image Selection */}
            {product.side_image && (
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedImage('main')}
                  className={`flex-1 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === 'main' 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={product.image}
                    alt="Main view"
                    className="w-full h-full object-contain p-2 bg-gray-50"
                  />
                </button>
                <button
                  onClick={() => setSelectedImage('side')}
                  className={`flex-1 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === 'side' 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={product.side_image}
                    alt="Side view"
                    className="w-full h-full object-contain p-2 bg-gray-50"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            {/* Product Details Table */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h2>
              <div className="space-y-3">
                {productDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{detail.label}:</span>
                    <span className="text-gray-900 font-semibold">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Availability Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-medium ${product.available ? 'text-green-700' : 'text-red-700'}`}>
                {product.available ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;