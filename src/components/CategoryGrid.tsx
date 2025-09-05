import React from 'react';
import { Package, Droplets, Sparkles, Utensils } from 'lucide-react';

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
      case 'floor wiper':
        return <Droplets className="w-12 h-12 text-blue-600" />;
      case 'cotton mop':
        return <Sparkles className="w-12 h-12 text-purple-600" />;
      case 'dish cleaner':
        return <Utensils className="w-12 h-12 text-green-600" />;
      default:
        return <Package className="w-12 h-12 text-gray-600" />;
    }
  };

  const getCategoryImage = (category: string) => {
    switch (category.toLowerCase()) {
      case 'floor cleaner':
        return '/assets/category/floor-cleaner.png';
      case 'naphthalene balls':
        return '/assets/category/napthaline-balls.png';
      case 'floor wiper':
        return '/assets/category/floor-wiper.png';
      case 'cotton mop':
        return '/assets/category/cotton-mop.png';
      case 'dish cleaner':
        return '/assets/category/dish-wash-cleaner.png';
      default:
        return '/assets/category/floor-cleaner.png';
    }
  };

  return (
    <div className="mb-6 lg:mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className="group flex flex-col items-center transition-all duration-200 hover:scale-105"
          >
            {/* Category Image - Larger Size */}
            <div className="w-16 h-16 lg:w-24 lg:h-24 mb-2 lg:mb-3 overflow-hidden flex items-center justify-center bg-gray-50 rounded-lg">
              <img
                src={getCategoryImage(category)}
                alt={category}
                className="w-full h-full object-cover hover:opacity-80 transition-opacity"
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
            <h3 className="text-xs lg:text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
              {category}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;