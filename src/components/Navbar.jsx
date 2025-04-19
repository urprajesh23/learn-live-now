import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-brand-600">Thunai</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-600 transition-colors">Home</Link>
          <Link to="/classes" className="text-gray-700 hover:text-brand-600 transition-colors">Browse Classes</Link>
          <Link to="/teachers" className="text-gray-700 hover:text-brand-600 transition-colors">Teachers</Link>
          <Link to="/student-dashboard" className="text-gray-700 hover:text-brand-600 transition-colors">My Dashboard</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/teacher-profile">
            <Button variant="default" className="bg-brand-600 hover:bg-brand-700">
              Be a Teacher
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="mr-4 relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-4 pb-6 shadow-lg">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-brand-600 transition-colors py-2">Home</Link>
            <Link to="/classes" className="text-gray-700 hover:text-brand-600 transition-colors py-2">Browse Classes</Link>
            <Link to="/teachers" className="text-gray-700 hover:text-brand-600 transition-colors py-2">Teachers</Link>
            <Link to="/student-dashboard" className="text-gray-700 hover:text-brand-600 transition-colors py-2">My Dashboard</Link>
            <Link to="/account" className="text-gray-700 hover:text-brand-600 transition-colors py-2">My Account</Link>
            <Link to="/teacher-profile">
              <Button variant="default" className="w-full bg-brand-600 hover:bg-brand-700">
                Be a Teacher
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
