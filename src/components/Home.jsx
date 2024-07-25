// src/components/Home.js
import React from "react";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container mx-auto p-4 text-justify">
        <h1 className="text-4xl font-semibold  text-red-900 my-4 underline">
          Introduction
        </h1>
        <section className="mt-8">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Welcome to Springdale Public School
          </h1>
          <div className=" block md:flex gap-4 mt-8">
            <img src="/images/school.jpg" alt="school" className="md:w-1/2 object-cover" />

            <div className="md:w-1/2 flex flex-wrap flex-col gap-4 text-xl p-2 text-gray-800">
              <p>
                At Springdale Public School, we believe in nurturing the whole
                child and preparing our students for a successful future.
                Located in the heart of Cityville, our school offers a
                supportive and vibrant learning environment that fosters
                academic excellence, creativity, and personal growth.
              </p>

              <p>
                Our dedicated team of educators is committed to delivering a
                well-rounded education through innovative teaching methods and a
                diverse curriculum that meets the needs of every student. From
                engaging classroom experiences to a wide range of
                extracurricular activities, we provide opportunities for
                students to explore their interests and develop their talents.
              </p>

              <p>
                We are proud of our strong community partnerships and active
                parent involvement, which play a crucial role in creating a
                positive and inclusive school culture. At Springdale Public
                School, every child is encouraged to reach their full potential,
                and we celebrate each student's achievements along the way.
              </p>

              <p>
                Join us in our mission to inspire and empower the next
                generation of leaders, thinkers, and innovators. Together, we
                are shaping a brighter future for our students and our
                community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
