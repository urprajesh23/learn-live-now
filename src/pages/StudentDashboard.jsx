
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Calendar from '@/components/Calendar';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from 'sonner';

const StudentDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Sample data - in a real app, this would come from an API
  const upcomingClasses = [
    {
      id: '1',
      title: 'Advanced JavaScript for React Developers',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Sarah Johnson',
      date: '2025-05-15',
      time: '10:00 AM - 12:00 PM EST',
      videoLink: 'https://meet.google.com/abc-defg-hij'
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'David Williams',
      date: '2025-05-18',
      time: '2:00 PM - 4:00 PM EST',
      videoLink: 'https://meet.google.com/jkl-mnop-qrs'
    }
  ];
  
  const pastClasses = [
    {
      id: '3',
      title: 'Introduction to Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Michael Chen',
      date: '2025-04-20',
      time: '6:00 PM - 8:00 PM EST',
      recordingAvailable: true
    },
    {
      id: '4',
      title: 'Digital Marketing Basics',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      teacher: 'Emily Rodriguez',
      date: '2025-04-10',
      time: '1:00 PM - 3:00 PM EST',
      recordingAvailable: true
    }
  ];

  const joinClass = (classItem) => {
    // In a real app, this would open the video call
    toast.success(`Joining ${classItem.title}...`);
    window.open(classItem.videoLink, '_blank');
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
          <p className="text-gray-600">Manage your enrolled classes and learning journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-brand-100 rounded-full p-4 mr-4">
              <CalendarIcon className="h-8 w-8 text-brand-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{upcomingClasses.length}</h3>
              <p className="text-gray-600">Upcoming Classes</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-green-100 rounded-full p-4 mr-4">
              <Video className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{pastClasses.length}</h3>
              <p className="text-gray-600">Completed Classes</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="bg-yellow-100 rounded-full p-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15c1.93 0 3.5-1.57 3.5-3.5S13.93 8 12 8s-3.5 1.57-3.5 3.5S10.07 15 12 15Z" />
                <path d="M13.25 16.9c2.4.6 4.5 1.9 6.25 3.6-1.5 1.5-3.25 2-5.5 2-.7 0-1.4-.05-2-.15C14.05 20.7 15.5 18.05 15.75 15c0-.45-.05-.9-.15-1.35.4-.1.9-.15 1.4-.15 4 0 7.2 3.2 7.2 7.2V22H19" />
                <path d="M2 21h6c1.5 0 3-.5 3.5-2 .35-1.05.15-2.1-.5-3-.65-.9-1.8-1.5-3-1.5-.5 0-1 .05-1.5.25-1.2.5-2 1.6-2 2.75 0 1.45 1.15 2.5 2.5 2.5h4" />
                <path d="M11 9.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">2</h3>
              <p className="text-gray-600">Favorite Teachers</p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="upcoming" className="flex-1">Upcoming Classes</TabsTrigger>
            <TabsTrigger value="past" className="flex-1">Past Classes</TabsTrigger>
            <TabsTrigger value="calendar" className="flex-1">My Calendar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {upcomingClasses.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="p-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0">
                          <img
                            src={classItem.image}
                            alt={classItem.title}
                            className="h-40 w-full object-cover rounded-md"
                          />
                        </div>
                        <div className="md:w-2/4 md:px-6">
                          <h3 className="text-lg font-semibold mb-2">{classItem.title}</h3>
                          <p className="text-gray-500 mb-4">Instructor: {classItem.teacher}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            <span>{formatDate(classItem.date)}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{classItem.time}</span>
                          </div>
                        </div>
                        <div className="md:w-1/4 flex md:flex-col md:items-end justify-between mt-4 md:mt-0">
                          <Button
                            onClick={() => joinClass(classItem)}
                            className="bg-brand-600 hover:bg-brand-700 flex items-center"
                          >
                            <Video className="h-4 w-4 mr-2" />
                            Join Class
                          </Button>
                          
                          <a 
                            href={`/class/${classItem.id}`} 
                            className="text-brand-600 hover:text-brand-700 text-sm flex items-center mt-2"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold mb-2">No Upcoming Classes</h3>
                  <p className="text-gray-600 mb-4">You haven't enrolled in any classes yet.</p>
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    Browse Classes
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="mt-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {pastClasses.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {pastClasses.map((classItem) => (
                    <div key={classItem.id} className="p-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0">
                          <img
                            src={classItem.image}
                            alt={classItem.title}
                            className="h-40 w-full object-cover rounded-md"
                          />
                        </div>
                        <div className="md:w-2/4 md:px-6">
                          <h3 className="text-lg font-semibold mb-2">{classItem.title}</h3>
                          <p className="text-gray-500 mb-4">Instructor: {classItem.teacher}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            <span>{formatDate(classItem.date)}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{classItem.time}</span>
                          </div>
                        </div>
                        <div className="md:w-1/4 flex md:flex-col md:items-end justify-between mt-4 md:mt-0">
                          {classItem.recordingAvailable ? (
                            <Button
                              variant="outline"
                              className="border-brand-600 text-brand-600 hover:bg-brand-50 flex items-center"
                            >
                              <Video className="h-4 w-4 mr-2" />
                              Watch Recording
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              disabled
                              className="flex items-center"
                            >
                              <Video className="h-4 w-4 mr-2" />
                              No Recording
                            </Button>
                          )}
                          
                          <a 
                            href="#" 
                            className="text-brand-600 hover:text-brand-700 text-sm flex items-center mt-2"
                            onClick={(e) => {
                              e.preventDefault();
                              toast.success('Certificate downloaded!');
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M8 2h8a2 2 0 0 1 2 2v8h2v2h-2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8H4v-2h2V4a2 2 0 0 1 2-2Z" />
                              <path d="M12 4v4" />
                              <path d="M12 17v-5" />
                              <path d="M8 16h8" />
                              <path d="M8 10h8" />
                            </svg>
                            Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="text-xl font-semibold mb-2">No Completed Classes</h3>
                  <p className="text-gray-600 mb-4">You haven't completed any classes yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Calendar 
                classes={[...upcomingClasses, ...pastClasses]} 
                onDateSelect={setSelectedDate}
              />
              
              {selectedDate && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Classes on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </h3>
                  
                  {[...upcomingClasses, ...pastClasses].filter(cls => 
                    new Date(cls.date).toDateString() === selectedDate.toDateString()
                  ).length > 0 ? (
                    <div className="space-y-4">
                      {[...upcomingClasses, ...pastClasses]
                        .filter(cls => new Date(cls.date).toDateString() === selectedDate.toDateString())
                        .map(cls => (
                          <div key={cls.id} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold">{cls.title}</h4>
                            <p className="text-sm text-gray-500 mb-1">Instructor: {cls.teacher}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{cls.time}</span>
                            </div>
                            <div className="mt-2">
                              {new Date(cls.date) > new Date() ? (
                                <Button
                                  size="sm"
                                  onClick={() => joinClass(cls)}
                                  className="bg-brand-600 hover:bg-brand-700 text-xs"
                                >
                                  Join Class
                                </Button>
                              ) : (
                                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Completed</span>
                              )}
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ) : (
                    <div className="text-center py-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-500">No classes scheduled for this date</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
