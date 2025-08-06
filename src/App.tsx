import { useState, useMemo } from 'react';
import { Package } from 'lucide-react';
// import Sidebar from './components/Sidebar';
import MobileFilters from './components/MobileFilters';
// import ProductCard from './components/ProductCard';
import productsData from './data/products.json';
import Footer from './components/Footer';
import ProductList from './components/ProductList';


interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  available: boolean;
  price: string;
  quantity: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const products: Product[] = productsData;

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
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Left: Logo + Title */}
<div className="flex items-center gap-3">
  <img
    src="/assets/company/logo.jpg"
    alt="Company Logo"
    className="w-10 h-10 object-contain"
  />
  <div className="flex flex-col">
    <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
  Bhagyashree Sales
</h1>

      <a href="#footer"style={{ fontFamily: "'Playfair Display', serif" }} className=" text-blue-600  font-medium text-l">
        Contact Us
      </a>
    </div>
    <p className="text-sm text-gray-600">Product Catalog</p>
  </div>
</div>



            {/* Center: Search + Select */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:max-w-2xl">
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

          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar (Only categories, optional now) */}
          {/* <div className="hidden lg:block w-80 flex-shrink-0">
            <Sidebar
              searchTerm=""
              setSearchTerm={() => {}}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div> */}

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
<div id="footer"> <Footer /></div>
     
    </div>
  );
}

export default App;
