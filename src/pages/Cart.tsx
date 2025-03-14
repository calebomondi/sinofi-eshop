
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { getBrandById } from '@/data/products';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400" />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Your cart is empty</h1>
            <p className="mt-2 text-gray-500">Looks like you haven't added any products to your cart yet.</p>
            <Button 
              className="mt-6 bg-sinofi-purple hover:bg-sinofi-purple/90"
              onClick={() => navigate('/products')}
            >
              Browse Products
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b p-4 flex justify-between items-center">
                <span className="font-medium">
                  {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                </span>
                <Button 
                  variant="ghost" 
                  className="text-sm text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear Cart
                </Button>
              </div>
              
              <ul>
                {cartItems.map((item) => {
                  const brand = getBrandById(item.product.brand);
                  return (
                    <li key={item.product.id} className="border-b last:border-b-0">
                      <div className="p-4 sm:p-6 flex flex-col sm:flex-row">
                        {/* Product image */}
                        <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 flex-shrink-0">
                          <Link to={`/products/${item.product.id}`}>
                            <img 
                              src={item.product.image} 
                              alt={item.product.name}
                              className="w-full h-full object-contain"
                            />
                          </Link>
                        </div>
                        
                        {/* Product details */}
                        <div className="sm:ml-6 flex-1 flex flex-col">
                          <div className="flex justify-between">
                            <div>
                              <div className="text-sm text-gray-500">{brand?.name}</div>
                              <Link 
                                to={`/products/${item.product.id}`}
                                className="text-lg font-medium text-gray-900 hover:text-sinofi-purple"
                              >
                                {item.product.name}
                              </Link>
                            </div>
                            <div className="text-right">
                              {item.product.discountPrice ? (
                                <>
                                  <span className="font-bold text-gray-900">${item.product.discountPrice}</span>
                                  <div className="text-sm text-gray-500 line-through">${item.product.price}</div>
                                </>
                              ) : (
                                <span className="font-bold text-gray-900">${item.product.price}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-between items-center">
                            {/* Quantity controls */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                className="px-2 py-1 text-gray-600 hover:text-sinofi-purple disabled:text-gray-400"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-3 py-1 text-gray-900 w-10 text-center">{item.quantity}</span>
                              <button
                                className="px-2 py-1 text-gray-600 hover:text-sinofi-purple disabled:text-gray-400"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                disabled={item.quantity >= item.product.stock}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            
                            {/* Subtotal and remove button */}
                            <div className="flex items-center">
                              <span className="font-medium mr-4">
                                ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                              </span>
                              <Button 
                                variant="ghost" 
                                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50"
                                onClick={() => removeFromCart(item.product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-600">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-600">Calculated at checkout</span>
                </div>
                
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-lg">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-sinofi-purple hover:bg-sinofi-purple/90"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full mt-3"
                onClick={() => navigate('/products')}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
