
import React from 'react';
import Navbar from '@/components/Navbar';
import TeachersList from '@/components/TeachersList';

const Teachers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Expert Teachers</h1>
        <TeachersList />
      </main>
    </div>
  );
};

export default Teachers;
