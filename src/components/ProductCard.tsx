import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getTextSizeClass = (text: string) => {
    const length = text.length;
    if (length <= 30) return 'text-lg';
    if (length <= 50) return 'text-lg';
    if (length <= 70) return 'text-base';
    return 'text-xs';
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg lg:rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 overflow-hidden w-full max-w-[380px] mx-auto block cursor-pointer hover:scale-105"
    >
      {/* Product Image */}
      <div className="w-full h-36 lg:h-48 bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain p-2 lg:p-4"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 lg:p-4 flex flex-col gap-2">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full w-fit">
          {product.category}
        </span>

        <h3
          className={`${getTextSizeClass(
            product.name
          )} font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem]`}
        >
          {product.name}
        </h3>

        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold text-blue-600 text-xs lg:text-sm">
            MRP: ₹{product.MRP}
          </span>
    {product.category !== 'Floor Wiper' && product.Packaging_Size && (
    <span className="text-xs lg:text-sm text-gray-600 bg-green-100 px-2 py-1 rounded">
      {product.Packaging_Size}
    </span>
  )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
