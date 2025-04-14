import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Calendar, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Advanced JavaScript for React Developers',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Sarah Johnson',
      date: '2025-05-15',
      time: '10:00 AM - 12:00 PM EST',
      price: 499.99, // Updated price to match ClassDetails
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'David Williams',
      date: '2025-05-18',
      time: '2:00 PM - 4:00 PM EST',
      price: 399.99, // Updated price
    }
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    // Normally this would process the payment
    // For now, just show a success message and redirect
    navigate('/checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any classes to your cart yet.</p>
          <Link to="/classes">
            <Button className="bg-brand-600 hover:bg-brand-700">
              Browse Classes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-gray-200 p-6 flex flex-col md:flex-row">
                <div className="md:w-1/4 h-32 mb-4 md:mb-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="md:w-2/4 md:px-6">
                  <h3 className="text-lg font-semibold mb-1">
                    <Link to={`/class/${item.id}`} className="hover:text-brand-600">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">Instructor: {item.teacher}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex flex-col items-end justify-between mt-4 md:mt-0">
                  <div className="text-lg font-bold text-gray-800">₹{item.price.toFixed(2)}</div>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-500 hover:text-red-500 flex items-center mt-2"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
          
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="text-gray-600 truncate pr-2">{item.title}</div>
                  <div className="text-gray-800 font-medium">₹{item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="text-gray-600">Subtotal</div>
                <div className="text-gray-800 font-medium">₹{calculateTotal()}</div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-gray-600">Tax</div>
                <div className="text-gray-800 font-medium">₹0.00</div>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <div>Total</div>
                <div>₹{calculateTotal()}</div>
              </div>
            </div>
          
            <Button
              onClick={handleCheckout}
              className="w-full bg-brand-600 hover:bg-brand-700"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
