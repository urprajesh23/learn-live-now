
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const cartItems = [
    {
      id: '1',
      title: 'Advanced JavaScript for React Developers',
      teacher: 'Sarah Johnson',
      date: '2025-05-15',
      time: '10:00 AM - 12:00 PM EST',
      price: 499.99, // Updated price to match other components
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      teacher: 'David Williams',
      date: '2025-05-18',
      time: '2:00 PM - 4:00 PM EST',
      price: 399.99, // Updated price
    }
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store cart items in localStorage to make them available in the dashboard
    const existingCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    const newCourses = [...existingCourses, ...cartItems];
    localStorage.setItem('enrolledCourses', JSON.stringify(newCourses));
    
    // Show success message and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Successfully enrolled in courses!');
      navigate('/student-dashboard');
    }, 1500);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Information</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input 
                    id="cardName"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input 
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      pattern="[0-9\s]{13,19}"
                      maxLength={19}
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expDate">Expiration Date</Label>
                    <Input 
                      id="expDate"
                      placeholder="MM/YY"
                      required
                      pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input 
                      id="cvv"
                      placeholder="123"
                      required
                      pattern="[0-9]{3,4}"
                      maxLength={4}
                      type="password"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                
              </div>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="font-medium mb-1">{item.title}</div>
                  <div className="text-sm text-gray-500 mb-1">Instructor: {item.teacher}</div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{item.time}</span>
                  </div>
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
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : `Pay ₹${calculateTotal()}`}
            </Button>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
