// src/components/Academics.js
import React from 'react';
import { useSelector } from 'react-redux';

const Academics = () => {
  const { curriculum, teachingMethodologies, educationalResources } = useSelector((state) => state.academics);

  return (
    <div className="container mx-auto p-4">
      <h1  className="text-4xl font-semibold  text-red-900 my-4 underline">Academics</h1>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Curriculum</h2>
        <div className="space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Primary (Grades 1-5)</h3>
            <ul className="list-disc ml-5">
              {curriculum.primary.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Secondary (Grades 6-10)</h3>
            <ul className="list-disc ml-5">
              {curriculum.secondary.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Senior Secondary (Grades 11-12)</h3>
            <ul className="list-disc ml-5">
              {curriculum.seniorSecondary.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Teaching Methodologies</h2>
          <p>{teachingMethodologies}</p>
        </div>
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Educational Resources</h2>
          <p>{educationalResources}</p>
        </div>
      </section>
    </div>
  );
};

export default Academics;
