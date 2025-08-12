import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Package, ArrowLeft } from 'lucide-react';
import CategoryGrid from './components/CategoryGrid';
import productsData from './data/products.json';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import { Product } from '../src/types/Product';

function App() {
  const products: Product[] = productsData.map(p => ({
  ...p,
  available: p.available ?? false,
  price: p.price ?? 'N/A',
}));

  return (
    <div className="min-h-screen bg-[#10707A]">
      <Header />
<div className="bg-[#E8F9FF] min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>

      <div id="footer">
        <Footer />
      </div>
    </div>
    </div>
  );
}

function HomePage({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, [products]);

const filteredProducts = useMemo(() => {
  return products.filter(product => {
    const name = product.name || '';  // fallback to empty string if undefined
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}, [products, searchTerm, selectedCategory]);


  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search when selecting category
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setSearchTerm('');
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category View or Product View */}
      {selectedCategory ? (
        // Category-specific view
        <div>
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </button>
          </div>

          {/* Category Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedCategory}</h1>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {/* Search Bar for Category */}
          <div className="mb-6">
            <input
              type="text"
              placeholder={`Search in ${selectedCategory}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Products in Category */}
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? `No products found matching "${searchTerm}" in ${selectedCategory}`
                  : `No products available in ${selectedCategory}`
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        // Home view with categories and all products
        <div>
          {/* Category Grid */}
          <CategoryGrid 
            categories={categories} 
            onCategorySelect={handleCategorySelect}
          />

          {/* Search Bar for All Products */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search all products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* All Products */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All Products</h2>
            <p className="text-gray-600 mb-6">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? `No products found matching "${searchTerm}"`
                  : "No products available"
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
