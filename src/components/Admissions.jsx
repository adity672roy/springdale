// src/components/Admissions.js
import React from 'react';
import { useSelector } from 'react-redux';

const Admissions = () => {
  const {
    process,
    criteria,
    importantDates: {
      formAvailability = '',
      lastDateForSubmission = '',
      entranceTest = '',
      announcementOfResults = '',
    } = {},
  } = useSelector((state) => state.admissions || {});

  if (!process) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1  className="text-4xl font-semibold  text-red-900 my-4 underline">Admissions</h1>
      <section className="space-y-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Admission Process</h2>
          <p>{process}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Admission Criteria</h2>
          <p>{criteria}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Important Dates</h2>
          <ul className="list-disc ml-5">
            <li><strong>Admission Form Availability:</strong> {formAvailability}</li>
            <li><strong>Last Date for Submission:</strong> {lastDateForSubmission}</li>
            <li><strong>Entrance Test:</strong> {entranceTest}</li>
            <li><strong>Announcement of Results:</strong> {announcementOfResults}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
