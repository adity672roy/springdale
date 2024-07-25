import React from "react";
import { useSelector } from "react-redux";
import StudentAchievements from "./StudentAchievements";
import StudentCouncil from "./StudentCouncil";

const Students = () => {
  const studentAchievements = useSelector((state) => state.students.achievements);
  const studentCouncil = useSelector((state) => state.students.council);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-red-900 my-4  underline">
        Students
      </h1>
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className=" grid grid-col-1 md:grid-cols-2 gap-4">
            {studentAchievements.map((achievement, index) => (
              <StudentAchievements key={index} achievement={achievement} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Student Council</h2>
          <StudentCouncil council={studentCouncil} />
        </div>
      </section>
    </div>
  );
};

export default Students;
