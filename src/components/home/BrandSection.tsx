
import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '@/data/products';

const BrandSection: React.FC = () => {
  return (
    <div className="bg-sinofi-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Top Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/products?brand=${brand.id}`}
              className="flex items-center justify-center"
            >
              <div className="bg-white rounded-lg shadow-sm p-4 h-20 w-full flex items-center justify-center hover:shadow-md transition-shadow">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
