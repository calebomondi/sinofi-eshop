
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductById, getBrandById, getProductsByCategory } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Fetch product details
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you are looking for does not exist.</p>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </Layout>
    );
  }
  
  const brand = getBrandById(product.brand);
  
  // Get related products (same category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="mb-6 pl-0 flex items-center text-gray-600 hover:text-sinofi-purple"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4 h-[400px] md:h-[500px]">
              <img 
                src={product.images?.[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`
                      cursor-pointer rounded-md overflow-hidden border-2
                      ${activeImageIndex === index ? 'border-sinofi-purple' : 'border-transparent'}
                    `}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product details */}
          <div>
            <div className="mb-2">
              <div className="text-sm text-gray-500 mb-1">{brand?.name}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center mb-6">
                {product.discountPrice ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">${product.discountPrice}</span>
                    <span className="ml-3 text-lg text-gray-500 line-through">${product.price}</span>
                    <span className="ml-3 text-sm font-medium text-red-600">
                      {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Stock status */}
              <div className="mb-6">
                {product.stock > 0 ? (
                  <span className="text-green-600 font-medium">In Stock ({product.stock} available)</span>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </div>
              
              {/* Add to cart */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-2 text-gray-600 hover:text-sinofi-purple disabled:text-gray-400"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-gray-900 w-12 text-center">{quantity}</span>
                  <button
                    className="px-3 py-2 text-gray-600 hover:text-sinofi-purple disabled:text-gray-400"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <Button 
                  className="flex-1 bg-sinofi-purple hover:bg-sinofi-purple/90"
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button variant="outline" className="p-2">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Features list */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-sinofi-purple mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product details tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specs">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="bg-white p-6 rounded-b-lg border">
              <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex">
                    <span className="w-1/3 font-medium text-gray-700">{key}</span>
                    <span className="w-2/3 text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="details" className="bg-white p-6 rounded-b-lg border">
              <h3 className="text-lg font-medium mb-4">Product Details</h3>
              <p className="text-gray-700">{product.description}</p>
              <ul className="mt-4 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-sinofi-purple mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="bg-white p-6 rounded-b-lg border">
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.rating.toFixed(1)} out of 5 ({product.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-600">Customer reviews will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <ProductGrid 
              products={relatedProducts} 
              title="You may also like"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
