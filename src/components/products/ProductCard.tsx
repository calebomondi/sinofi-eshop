
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { getBrandById } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const brand = getBrandById(product.brand);

  return (
    <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Product image with overlay */}
      <div className="relative h-64 overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Discount badge */}
        {product.discountPrice && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
          </div>
        )}
        
        {/* "New" badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-sinofi-purple text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {/* Quick add to cart button */}
        <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="w-full bg-sinofi-purple hover:bg-sinofi-purple/90"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        {/* Brand */}
        <div className="text-xs text-gray-500 mb-1">
          {brand?.name}
        </div>
        
        {/* Product name */}
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-1 truncate group-hover:text-sinofi-purple transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center">
          {product.discountPrice ? (
            <>
              <span className="text-lg font-bold text-gray-900">${product.discountPrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
