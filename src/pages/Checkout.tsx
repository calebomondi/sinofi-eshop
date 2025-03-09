
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { 
  CreditCard, 
  Check, 
  MapPin, 
  Truck,
  ChevronRight
} from 'lucide-react';

const Checkout: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePlaceOrder = () => {
    // In a real app, we would send the order to a backend
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase.",
    });
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Your cart is empty</h1>
            <p className="mt-2 text-gray-500">You need to add items to your cart before checking out.</p>
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Shipping address */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-sinofi-purple" />
                      Shipping Address
                    </h2>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="123 Main St"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Zip Code
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="10001"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>China</option>
                        <option>Japan</option>
                        <option>Germany</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shipping method */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <h2 className="text-lg font-medium flex items-center">
                      <Truck className="mr-2 h-5 w-5 text-sinofi-purple" />
                      Shipping Method
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center border border-gray-200 rounded-md p-4 cursor-pointer bg-gray-50">
                      <input 
                        type="radio" 
                        name="shipping" 
                        id="standard" 
                        className="mr-3 h-4 w-4 text-sinofi-purple focus:ring-sinofi-purple"
                        defaultChecked
                      />
                      <label htmlFor="standard" className="flex-1 cursor-pointer">
                        <div className="font-medium">Standard Shipping</div>
                        <div className="text-sm text-gray-500">Delivery in 3-5 business days</div>
                      </label>
                      <div className="font-medium">$9.99</div>
                    </div>
                    
                    <div className="flex items-center border border-gray-200 rounded-md p-4 cursor-pointer">
                      <input 
                        type="radio" 
                        name="shipping" 
                        id="express" 
                        className="mr-3 h-4 w-4 text-sinofi-purple focus:ring-sinofi-purple"
                      />
                      <label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="font-medium">Express Shipping</div>
                        <div className="text-sm text-gray-500">Delivery in 1-2 business days</div>
                      </label>
                      <div className="font-medium">$19.99</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-sinofi-purple" />
                      Payment Method
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="**** **** **** ****"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration Date
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="***"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sinofi-purple focus:border-sinofi-purple"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                  <span className="font-medium">$9.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-lg">
                    ${(getTotalPrice() + 9.99 + getTotalPrice() * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-sm text-gray-500 flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Your personal data will be used to process your order, support your experience, and for other purposes described in our privacy policy.</span>
                </p>
                
                <Button 
                  className="w-full bg-sinofi-purple hover:bg-sinofi-purple/90 flex items-center justify-center"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/cart')}
                >
                  Return to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
