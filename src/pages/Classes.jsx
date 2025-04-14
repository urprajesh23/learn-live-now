
import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ClassCard from '@/components/ClassCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from '@/components/ui/slider';

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [filteredClasses, setFilteredClasses] = useState([]);
  
  // Sample class data
  const allClasses = [
    {
      id: '1',
      title: 'Advanced JavaScript for React Developers',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Sarah Johnson',
      date: '2025-05-15',
      time: '10:00 AM - 12:00 PM EST',
      price: 49.99,
      category: 'Programming',
      level: 'Intermediate'
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'David Williams',
      date: '2025-05-18',
      time: '2:00 PM - 4:00 PM EST',
      price: 39.99,
      category: 'Design',
      level: 'Beginner'
    },
    {
      id: '3',
      title: 'Data Science for Beginners',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Michael Chen',
      date: '2025-05-20',
      time: '6:00 PM - 8:00 PM EST',
      price: 44.99,
      category: 'Data Science',
      level: 'Beginner'
    },
    {
      id: '4',
      title: 'Digital Marketing Masterclass',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Emily Rodriguez',
      date: '2025-05-22',
      time: '1:00 PM - 3:30 PM EST',
      price: 59.99,
      category: 'Marketing',
      level: 'Advanced'
    },
    {
      id: '5',
      title: 'Introduction to Mobile App Development',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'James Wilson',
      date: '2025-05-25',
      time: '11:00 AM - 1:00 PM EST',
      price: 34.99,
      category: 'Programming',
      level: 'Beginner'
    },
    {
      id: '6',
      title: 'Advanced Python: Building AI Applications',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Lisa Wong',
      date: '2025-05-28',
      time: '4:00 PM - 6:30 PM EST',
      price: 69.99,
      category: 'Programming',
      level: 'Advanced'
    },
  ];

  const categories = ['Programming', 'Design', 'Marketing', 'Data Science', 'Business'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  // Apply filters when any filter changes
  useEffect(() => {
    let results = allClasses;
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.teacher.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      results = results.filter(item => item.category === selectedCategory);
    }
    
    // Apply level filter
    if (selectedLevel) {
      results = results.filter(item => item.level === selectedLevel);
    }
    
    // Apply price range filter
    results = results.filter(item => 
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    
    setFilteredClasses(results);
  }, [searchTerm, selectedCategory, selectedLevel, priceRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
    setPriceRange([0, 100]);
  };

  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Browse Live Classes</h1>
        
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder="Search classes..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex items-center md:hidden"
                onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="flex items-center"
              >
                <X className="h-5 w-5 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Level
                  </label>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Levels</SelectItem>
                      {levels.map(level => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6"
                  />
                </div>
                
                <Button 
                  onClick={resetFilters}
                  variant="outline" 
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {isFiltersVisible && (
            <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsFiltersVisible(false)}
                    size="icon"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Categories</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Level
                    </label>
                    <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Levels</SelectItem>
                        {levels.map(level => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <Slider
                      defaultValue={[0, 100]}
                      max={100}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-6"
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => {
                        resetFilters();
                        setIsFiltersVisible(false);
                      }}
                      variant="outline" 
                      className="flex-1"
                    >
                      Reset
                    </Button>
                    <Button 
                      onClick={() => setIsFiltersVisible(false)}
                      className="flex-1 bg-brand-600 hover:bg-brand-700"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Class Listing */}
          <div className="lg:col-span-3">
            {filteredClasses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClasses.map(classItem => (
                  <ClassCard key={classItem.id} classItem={classItem} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No Classes Found</h3>
                <p className="text-gray-600 mb-4">We couldn't find any classes matching your filters.</p>
                <Button onClick={resetFilters} variant="outline">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
