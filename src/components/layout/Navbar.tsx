
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { categories } from '@/data/products';

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-sinofi-purple">Sinofi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sinofi-purple transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-sinofi-purple transition-colors">
              All Products
            </Link>
            {categories.slice(0, 4).map((category) => (
              <Link 
                key={category.id}
                to={`/products?category=${category.id}`} 
                className="text-gray-700 hover:text-sinofi-purple transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right side elements - search and cart */}
          <div className="flex items-center space-x-2">
            <Link to="/search" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </Link>
            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-sinofi-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <UserRound className="h-5 w-5 text-gray-600" />
            </Link>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-40 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sinofi-purple hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sinofi-purple hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/products?category=${category.id}`} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sinofi-purple hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
