
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="inline-block mb-6">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Your booking has been confirmed. You can now access your upcoming classes from your dashboard.
          </p>
          
          <div className="space-y-3">
            <Link to="/student-dashboard">
              <Button className="w-full bg-brand-600 hover:bg-brand-700">
                Go to My Dashboard
              </Button>
            </Link>
            
            <Link to="/classes">
              <Button variant="outline" className="w-full">
                Browse More Classes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
