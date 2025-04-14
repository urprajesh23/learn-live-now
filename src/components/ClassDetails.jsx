
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, DollarSign, User, Video, Users, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const ClassDetails = () => {
  const { id } = useParams();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Normally this would come from an API call
  const classData = {
    id: id,
    title: "Advanced JavaScript for React Developers",
    description: "Join this comprehensive live class to gain an in-depth understanding of advanced JavaScript concepts that will help you build better React applications. This session will be interactive with hands-on coding exercises and Q&A.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    teacher: "Sarah Johnson",
    teacherImage: "https://randomuser.me/api/portraits/women/44.jpg",
    teacherBio: "Sarah has over 10 years of experience in frontend development and has taught at companies like Google and Amazon.",
    rating: 4.8,
    reviewCount: 247,
    date: "2025-05-15",
    time: "10:00 AM - 12:00 PM EST",
    duration: "2 hours",
    price: 49.99,
    studentsEnrolled: 24,
    maxStudents: 30,
    prerequisites: "Basic JavaScript knowledge, familiarity with React",
    level: "Intermediate",
    topics: [
      "Closures and Scope",
      "Prototypal Inheritance",
      "ES6+ Features",
      "Asynchronous JavaScript",
      "State Management Patterns",
      "Performance Optimization"
    ],
    whatYouWillLearn: [
      "Understand advanced JavaScript concepts that React uses under the hood",
      "Master asynchronous programming with Promises and async/await",
      "Implement efficient state management strategies",
      "Write cleaner, more maintainable React code",
      "Debug complex React applications more effectively"
    ]
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      toast.success(`Added "${classData.title}" to cart!`);
    }, 800);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Link to="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to="/classes" className="hover:text-brand-600">Classes</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-700">JavaScript</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{classData.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden mb-8 shadow-md">
            <img
              src={classData.image}
              alt={classData.title}
              className="w-full h-80 object-cover"
            />
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
              <TabsTrigger 
                value="overview" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="instructor" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Instructor
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">About This Class</h2>
                  <p className="text-gray-700">{classData.description}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">What You'll Learn</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {classData.whatYouWillLearn.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 text-brand-600">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.4 6.2L7.6 10.8C7.5 10.9 7.3 11 7.2 11C7.1 11 6.9 10.9 6.8 10.8L4.6 8.2C4.4 8 4.4 7.6 4.6 7.4C4.8 7.2 5.2 7.2 5.4 7.4L7.2 9.5L10.6 5.5C10.8 5.3 11.2 5.3 11.4 5.5C11.6 5.7 11.6 6.1 11.4 6.2Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">Topics Covered</h2>
                  <div className="flex flex-wrap gap-2">
                    {classData.topics.map((topic, index) => (
                      <span key={index} className="bg-brand-50 text-brand-700 text-sm px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
                  <p className="text-gray-700">{classData.prerequisites}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="instructor" className="mt-0">
              <div className="flex items-start space-x-4">
                <img
                  src={classData.teacherImage}
                  alt={classData.teacher}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-1">{classData.teacher}</h2>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(classData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{classData.rating} ({classData.reviewCount} reviews)</span>
                  </div>
                  <p className="text-gray-700">{classData.teacherBio}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-4">${classData.price}</div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-brand-600" />
                  <div>
                    <div className="text-sm text-gray-500">Date</div>
                    <div className="font-medium">{formatDate(classData.date)}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-brand-600" />
                  <div>
                    <div className="text-sm text-gray-500">Time</div>
                    <div className="font-medium">{classData.time}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Video className="h-5 w-5 mr-3 text-brand-600" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium">{classData.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-brand-600" />
                  <div>
                    <div className="text-sm text-gray-500">Enrollment</div>
                    <div className="font-medium">{classData.studentsEnrolled} of {classData.maxStudents} spots filled</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3 text-brand-600" />
                  <div>
                    <div className="text-sm text-gray-500">Level</div>
                    <div className="font-medium">{classData.level}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleAddToCart} 
              className="w-full mb-3 bg-brand-600 hover:bg-brand-700"
              disabled={isAddingToCart}
            >
              {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
            </Button>
            
            <Button variant="outline" className="w-full border-gray-300">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Star({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default ClassDetails;
