import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Package } from 'lucide-react';
import MobileFilters from './components/MobileFilters';
import productsData from './data/products.json';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';


interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  available: boolean;
  price: string;
  quantity: string;
  MRP: string;
  Packaging_Size?: string;
  pack_type?: string;
  'Usage/Application'?: string;
  shelf_life?: string;
  product_brand?: string;
  'Selling rate'?: string;
  features?: string[];
}

function App() {
  const products: Product[] = productsData;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

function HomePage({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {/* Mobile Filters */}
          <div className="lg:hidden mb-4">
            <MobileFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:max-w-2xl mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or clearing the filters.
              </p>
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
