// src/components/Faculty.js
import React from 'react';
import { useSelector } from 'react-redux';
import FacultyProfile from './FacultyProfile';

const Faculty = () => {
  const facultyMembers = useSelector((state) => state.faculty);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold  text-red-900 my-4 underline">Faculty</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyMembers.map((member) => (
          <FacultyProfile key={member.id} profile={member} />
        ))}
      </section>
    </div>
  );
};

export default Faculty;
