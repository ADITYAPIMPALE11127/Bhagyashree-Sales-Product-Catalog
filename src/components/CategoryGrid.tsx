import React from 'react';
import { Package, Droplets, Sparkles } from 'lucide-react';

interface CategoryGridProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onCategorySelect }) => {
  // Map categories to appropriate icons and images
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'floor cleaner':
        return <Droplets className="w-12 h-12 text-blue-600" />;
      case 'naphthalene balls':
        return <Sparkles className="w-12 h-12 text-purple-600" />;
      default:
        return <Package className="w-12 h-12 text-gray-600" />;
    }
  };

  const getCategoryImage = (category: string) => {
    switch (category.toLowerCase()) {
      case 'floor cleaner':
        return '/assets/products/floor-cleaner/tiger-green-strong-concentrated-floor-cleaner-500ml-1697454820978-1000x1000.webp';
      case 'naphthalene balls':
        return '/assets/products/naphthalene-balls/200gm-tiger-naphthalene-balls-1000x1000.jpg';
      default:
        return '/assets/products/floor-cleaner/tiger-green-strong-concentrated-floor-cleaner-500ml-1697454820978-1000x1000.webp';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300 hover:scale-105"
          >
            {/* Category Image */}
            <div className="w-16 h-16 mb-3 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
              <img
                src={getCategoryImage(category)}
                alt={category}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const iconContainer = target.parentElement;
                  if (iconContainer) {
                    iconContainer.innerHTML = '';
                    const iconElement = getCategoryIcon(category);
                    iconContainer.appendChild(iconElement.props.children ? document.createElement('div') : document.createElement('div'));
                  }
                }}
              />
            </div>
            
            {/* Category Title */}
            <h3 className="text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
              {category}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;