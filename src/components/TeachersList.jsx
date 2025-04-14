
import React from 'react';
import { GraduationCap, Book } from 'lucide-react';

const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    qualifications: ["Ph.D. in Computer Science", "Masters in Software Engineering"],
    courses: ["Advanced JavaScript", "React Development", "Web Architecture"],
    specialty: "Frontend Development"
  },
  {
    id: 2,
    name: "Prof. David Williams",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    qualifications: ["Masters in Design", "UX Research Certification"],
    courses: ["UI/UX Fundamentals", "Design Systems", "User Research Methods"],
    specialty: "UI/UX Design"
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    qualifications: ["Ph.D. in Data Science", "M.Sc in Statistics"],
    courses: ["Data Analytics", "Machine Learning Basics", "Python for Data Science"],
    specialty: "Data Science"
  }
];

const TeachersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teachers.map((teacher) => (
        <div key={teacher.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-duration-300">
          <div className="h-48 relative">
            <img 
              src={teacher.image} 
              alt={teacher.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{teacher.name}</h2>
            <p className="text-brand-600 font-medium mb-4">{teacher.specialty}</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <GraduationCap className="h-5 w-5" />
                  <h3 className="font-medium">Qualifications</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-7">
                  {teacher.qualifications.map((qual, index) => (
                    <li key={index} className="list-disc">{qual}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <Book className="h-5 w-5" />
                  <h3 className="font-medium">Courses</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 pl-7">
                  {teacher.courses.map((course, index) => (
                    <li key={index} className="list-disc">{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeachersList;
