
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, DollarSign, Upload, Plus, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Calendar from '@/components/Calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from 'sonner';

const TeacherProfile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduledClasses, setScheduledClasses] = useState([
    {
      id: '1',
      title: 'Advanced JavaScript for React Developers',
      date: '2025-05-15',
      time: '10:00 AM - 12:00 PM EST',
      price: 49.99,
      students: 8,
      maxStudents: 20
    },
    {
      id: '2',
      title: 'Introduction to GraphQL',
      date: '2025-05-20',
      time: '2:00 PM - 4:00 PM EST',
      price: 39.99,
      students: 5,
      maxStudents: 15
    }
  ]);
  
  // Form state for creating a class
  const [newClass, setNewClass] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    startTime: '',
    endTime: '',
    price: '',
    maxStudents: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setNewClass(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewClass(prev => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic would go here
    
    toast.success('Class scheduled successfully!');
    // Reset form
    setNewClass({
      title: '',
      description: '',
      category: '',
      date: '',
      startTime: '',
      endTime: '',
      price: '',
      maxStudents: '',
      image: null
    });
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
          <p className="text-gray-600">Manage your classes and schedule new sessions</p>
        </div>
        
        <Tabs defaultValue="schedule" className="mb-8">
          <TabsList className="w-full mb-8">
            <TabsTrigger value="schedule" className="flex-1">Schedule</TabsTrigger>
            <TabsTrigger value="classes" className="flex-1">My Classes</TabsTrigger>
            <TabsTrigger value="profile" className="flex-1">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Create a New Class</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Class Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={newClass.title}
                      onChange={handleInputChange}
                      placeholder="e.g. Advanced JavaScript Techniques"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={newClass.description}
                      onChange={handleInputChange}
                      placeholder="Describe what students will learn in this class"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={newClass.category}
                      onValueChange={(value) => handleSelectChange('category', value)}
                      required
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={newClass.date}
                          onChange={handleInputChange}
                          required
                        />
                        <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Start Time</Label>
                      <div className="relative">
                        <Input
                          id="startTime"
                          name="startTime"
                          type="time"
                          value={newClass.startTime}
                          onChange={handleInputChange}
                          required
                        />
                        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="endTime">End Time</Label>
                      <div className="relative">
                        <Input
                          id="endTime"
                          name="endTime"
                          type="time"
                          value={newClass.endTime}
                          onChange={handleInputChange}
                          required
                        />
                        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <div className="relative">
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          min="0"
                          step="0.01"
                          value={newClass.price}
                          onChange={handleInputChange}
                          required
                        />
                        <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="maxStudents">Maximum Students</Label>
                    <Input
                      id="maxStudents"
                      name="maxStudents"
                      type="number"
                      min="1"
                      value={newClass.maxStudents}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Class Image</Label>
                    <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg">
                      {newClass.image ? (
                        <div className="relative w-full">
                          <img
                            src={URL.createObjectURL(newClass.image)}
                            alt="Class preview"
                            className="w-full h-40 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => setNewClass(prev => ({ ...prev, image: null }))}
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="mt-2 flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-brand-600 hover:text-brand-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange}
                                accept="image/*"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-600 hover:bg-brand-700"
                  >
                    Schedule Class
                  </Button>
                </form>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Your Schedule</h2>
                <Calendar 
                  classes={scheduledClasses} 
                  onDateSelect={setSelectedDate}
                />
                
                {selectedDate && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Classes on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </h3>
                    
                    {scheduledClasses.filter(cls => 
                      new Date(cls.date).toDateString() === selectedDate.toDateString()
                    ).length > 0 ? (
                      <div className="space-y-4">
                        {scheduledClasses
                          .filter(cls => new Date(cls.date).toDateString() === selectedDate.toDateString())
                          .map(cls => (
                            <div key={cls.id} className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold">{cls.title}</h4>
                              <div className="flex items-center text-sm text-gray-500 mb-1">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{cls.time}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <DollarSign className="h-4 w-4 mr-1" />
                                <span>${cls.price}</span>
                              </div>
                              <div className="mt-2 text-sm">
                                <span className="text-green-600 font-medium">{cls.students}/{cls.maxStudents}</span> students enrolled
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    ) : (
                      <div className="text-center py-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">No classes scheduled for this date</p>
                        <Button 
                          variant="link" 
                          onClick={() => document.getElementById('title').focus()}
                          className="mt-2 text-brand-600"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add a class
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="classes" className="mt-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Upcoming Classes</h2>
              
              {scheduledClasses.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {scheduledClasses.map(cls => (
                    <div key={cls.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{cls.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{formatDate(cls.date)}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{cls.time}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                        <div className="flex items-center text-sm">
                          <span className="text-green-600 font-medium">{cls.students}/{cls.maxStudents}</span>
                          <span className="ml-1 text-gray-500">students enrolled</span>
                        </div>
                        <div className="text-lg font-bold text-gray-800 mt-1">${cls.price}</div>
                        <div className="flex space-x-2 mt-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Cancel</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4 text-4xl">📅</div>
                  <h3 className="text-lg font-semibold mb-2">No Classes Scheduled</h3>
                  <p className="text-gray-600 mb-4">You haven't scheduled any classes yet.</p>
                  <Button 
                    onClick={() => document.getElementById('schedule-tab').click()}
                    className="bg-brand-600 hover:bg-brand-700"
                  >
                    Schedule Your First Class
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="profile" className="mt-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Teacher Profile</h2>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Teacher profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md">
                        <Upload className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <h3 className="text-lg font-semibold">David Williams</h3>
                    <p className="text-gray-500">UI/UX Design Specialist</p>
                    
                    <div className="mt-4 space-y-1 text-left">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-24">Total Classes:</span>
                        <span className="font-semibold">12</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-24">Students:</span>
                        <span className="font-semibold">128</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-24">Rating:</span>
                        <span className="font-semibold">4.8/5</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 w-24">Joined:</span>
                        <span className="font-semibold">Mar 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        defaultValue="David Williams"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input
                        id="specialization"
                        defaultValue="UI/UX Design Specialist"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        defaultValue="UI/UX designer with a background in psychology and human-computer interaction. I've worked with Fortune 500 companies to create user-centered design experiences."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="david.williams@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          defaultValue="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expertise">Areas of Expertise</Label>
                      <Textarea
                        id="expertise"
                        rows={3}
                        defaultValue="User Interface Design, User Experience, Wireframing, Prototyping, Design Thinking, Figma, Adobe XD"
                      />
                    </div>
                    
                    <Button 
                      type="button" 
                      className="bg-brand-600 hover:bg-brand-700"
                      onClick={() => toast.success('Profile updated successfully!')}
                    >
                      Save Profile
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherProfile;
