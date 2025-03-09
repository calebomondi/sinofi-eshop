
import React from 'react';
import ProductGrid from '../products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ProductGrid products={featuredProducts} title="Featured Products" />
    </div>
  );
};

export default FeaturedProducts;
