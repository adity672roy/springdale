// src/components/FacultyProfile.js
import React from 'react';

const FacultyProfile = ({ profile }) => {
   

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <img
        src={profile.img}
        alt={profile.name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
      <p><strong>Position:</strong> {profile.position}</p>
      <p><strong>Qualifications:</strong> {profile.qualifications}</p>
      <p><strong>Experience:</strong> {profile.experience} years</p>
    </div>
  );
};

export default FacultyProfile;
