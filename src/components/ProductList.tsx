// ProductList.tsx

import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';  // ✅ Use shared Product interface

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="overflow-y-auto px-2 lg:px-4 py-2 lg:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
