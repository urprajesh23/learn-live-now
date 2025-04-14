
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { formatIndianPrice, formatIndianDate } from '@/utils/localization';

const ClassCard = ({ classItem }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      toast.success(`Added "${classItem.title}" to cart!`);
    }, 500);
  };

  return (
    <Link to={`/class/${classItem.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 bg-gray-200">
          <img 
            src={classItem.image} 
            alt={classItem.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-brand-600 text-white text-sm font-semibold py-1 px-3 rounded-bl-lg">
            {formatIndianPrice(classItem.price)}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{classItem.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <User className="h-4 w-4 mr-1 text-gray-400" />
            <span>{classItem.teacher}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-brand-600 font-semibold">
              <span>{formatIndianPrice(classItem.price)}</span>
            </div>
            <Button 
              onClick={handleAddToCart} 
              variant="outline"
              className="border-brand-600 text-brand-600 hover:bg-brand-50"
              disabled={isAddingToCart}
            >
              {isAddingToCart ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClassCard;
