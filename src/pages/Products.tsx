
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { 
  products, 
  categories, 
  brands, 
  getProductsByCategory, 
  getProductsByBrand 
} from '@/data/products';
import { Product } from '@/types/product';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const brandParam = queryParams.get('brand');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(brandParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortOption, setSortOption] = useState('featured');
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Filter products based on selected filters
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
    }

    // Filter by brand
    if (selectedBrand) {
      result = result.filter(product => product.brand === selectedBrand);
    }

    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter discounted items
    if (onlyDiscounted) {
      result = result.filter(product => product.discountPrice !== undefined);
    }

    // Filter in-stock items
    if (onlyInStock) {
      result = result.filter(product => product.stock > 0);
    }

    // Sort products
    switch (sortOption) {
      case 'priceLow':
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'priceHigh':
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedBrand, priceRange, sortOption, onlyDiscounted, onlyInStock]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedBrand) params.set('brand', selectedBrand);
    
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [selectedCategory, selectedBrand]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId === 'all' ? null : categoryId);
    setSelectedBrand(null);
  };

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId === 'all' ? null : brandId);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setPriceRange([0, 3000]);
    setSortOption('featured');
    setOnlyDiscounted(false);
    setOnlyInStock(false);
  };

  // Get a page title based on the current filters
  const getPageTitle = () => {
    if (selectedCategory) {
      const category = categories.find(cat => cat.id === selectedCategory);
      if (category) return `${category.name}`;
    }
    
    if (selectedBrand) {
      const brand = brands.find(b => b.id === selectedBrand);
      if (brand) return `${brand.name} Products`;
    }
    
    return 'All Products';
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Filters</h2>
                <Button 
                  variant="ghost" 
                  className="text-xs text-gray-500 hover:text-sinofi-purple"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer ${!selectedCategory ? 'font-medium text-sinofi-purple' : 'text-gray-700'}`}
                    onClick={() => handleCategoryChange('all')}
                  >
                    All Categories
                  </div>
                  {categories.map(category => (
                    <div 
                      key={category.id}
                      className={`cursor-pointer ${selectedCategory === category.id ? 'font-medium text-sinofi-purple' : 'text-gray-700'}`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer ${!selectedBrand ? 'font-medium text-sinofi-purple' : 'text-gray-700'}`}
                    onClick={() => handleBrandChange('all')}
                  >
                    All Brands
                  </div>
                  {brands.map(brand => (
                    <div 
                      key={brand.id}
                      className={`cursor-pointer ${selectedBrand === brand.id ? 'font-medium text-sinofi-purple' : 'text-gray-700'}`}
                      onClick={() => handleBrandChange(brand.id)}
                    >
                      {brand.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider
                  defaultValue={[0, 3000]}
                  max={3000}
                  step={100}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="mt-6"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Additional filters */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="discounted" 
                    checked={onlyDiscounted}
                    onCheckedChange={(checked) => setOnlyDiscounted(checked as boolean)}
                  />
                  <label 
                    htmlFor="discounted" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    On Sale
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="inStock" 
                    checked={onlyInStock}
                    onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
                  />
                  <label 
                    htmlFor="inStock" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    In Stock
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Title and sorting */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h1 className="text-2xl font-bold mb-4 sm:mb-0">{getPageTitle()}</h1>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Featured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="priceLow">Price: Low to High</SelectItem>
                    <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600 mb-4">No products match your filters</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
