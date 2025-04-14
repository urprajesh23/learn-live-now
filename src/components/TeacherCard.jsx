
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherCard = ({ teacher }) => {
  return (
    <Link to={`/teacher/${teacher.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 w-full bg-gray-100 relative">
          <img 
            src={teacher.image} 
            alt={teacher.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{teacher.specialty}</p>
          
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < teacher.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">({teacher.reviewCount} reviews)</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2">{teacher.bio}</p>
          <div className="mt-3 text-sm text-brand-600 font-medium">
            {teacher.classCount} classes available
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeacherCard;
