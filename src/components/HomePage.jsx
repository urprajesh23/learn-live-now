import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ClassCard from './ClassCard';
import TeacherCard from './TeacherCard';
import { formatIndianPrice, formatIndianDate, formatIndianTime } from '@/utils/localization';

const HomePage = () => {
  // Sample data - in a real app, this would come from an API
  const featuredClasses = [
    {
      id: '1',
      title: 'Advanced JavaScript for React Developers',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Sarah Johnson',
      date: '2025-05-15',
      time: '10:00',
      price: 4999
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'David Williams',
      date: '2025-05-18',
      time: '14:00',
      price: 3999
    },
    {
      id: '3',
      title: 'Data Science for Beginners',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Michael Chen',
      date: '2025-05-20',
      time: '18:00',
      price: 4499
    },
  ];

  const popularTeachers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      specialty: 'Frontend Development',
      rating: 4.9,
      reviewCount: 235,
      bio: 'Expert React and JavaScript developer with 10+ years of experience in teaching and building web applications.',
      classCount: 8
    },
    {
      id: '2',
      name: 'David Williams',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      specialty: 'UI/UX Design',
      rating: 4.7,
      reviewCount: 189,
      bio: 'UI/UX designer with a background in psychology and human-computer interaction.',
      classCount: 5
    },
    {
      id: '3',
      name: 'Michael Chen',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      specialty: 'Data Science',
      rating: 4.8,
      reviewCount: 175,
      bio: 'Data scientist with experience in machine learning and statistical analysis.',
      classCount: 6
    },
  ];

  const categories = [
    { name: 'Programming & Development', icon: '💻' },
    { name: 'Design & Creativity', icon: '🎨' },
    { name: 'Business & Marketing', icon: '📊' },
    { name: 'Personal Development', icon: '🧠' },
    { name: 'Data Science & Analytics', icon: '📈' },
    { name: 'Health & Fitness', icon: '💪' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Live from Expert Instructors</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join interactive live classes taught by industry professionals and enhance your skills in real-time.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Input 
              type="text" 
              placeholder="Search for classes..." 
              className="pl-10 py-6 rounded-full text-gray-900"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-brand-600 hover:bg-brand-700">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Upcoming Live Classes</h2>
            <Link to="/classes" className="text-brand-600 font-semibold hover:text-brand-700">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClasses.map(classItem => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse & Select</h3>
              <p className="text-gray-600">Explore our catalog of live classes and choose the ones that match your learning goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Pay</h3>
              <p className="text-gray-600">Secure your spot by booking the class and completing the payment process.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Join & Learn</h3>
              <p className="text-gray-600">Attend the live virtual class, interact with the instructor, and enhance your skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">Explore Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link key={index} to="/classes" className="group">
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center justify-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-gray-800 font-medium group-hover:text-brand-600 transition-colors">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Teachers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Popular Teachers</h2>
            <Link to="/teachers" className="text-brand-600 font-semibold hover:text-brand-700">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTeachers.map(teacher => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Share Your Knowledge and Earn</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you an expert in your field? Join our platform as a teacher and start hosting live classes.
          </p>
          <Link to="/teacher-profile">
            <Button className="bg-brand-600 hover:bg-brand-700 text-lg py-6 px-8">
              Become a Teacher
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
