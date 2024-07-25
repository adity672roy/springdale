import React from 'react';

const StudentCouncil = ({ council }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6 ">
      {council.map((member) => (
        <div
          key={member.role}
          className="flex items-center mb-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-16 h-16 object-cover rounded-full mr-4 shadow-md"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">
              {member.role}: <span className="font-normal">{member.name}</span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCouncil;
