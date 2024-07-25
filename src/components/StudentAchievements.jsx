import React from "react";

const StudentAchievements = ({ achievement }) => {
  return (
    <div className="h-full  mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl sm:max-w-md md:max-w-lg">
      <img
        src={achievement.img}
        alt={achievement.title}
        className="w-full h-56 object-cover object-center sm:h-64 md:h-72"
      />
      <div className="p-5 sm:p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 sm:text-3xl md:text-4xl">
          {achievement.title}
        </h3>
        <p className="text-gray-700 sm:text-lg md:text-xl">
          {achievement.description}
        </p>
      </div>
    </div>
  );
};

export default StudentAchievements;
