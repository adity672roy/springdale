// src/components/AboutUs.js
import React from "react";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const { history, vision, mission, principalMessage, infrastructure } =
    useSelector((state) => state.aboutUs);

  return (
    <div className="container mx-auto p-4">
      <h1  className="text-4xl font-semibold  text-red-900 my-4 underline">
        About
      </h1>

      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="flex flex-wrap
          flex-col gap-4 text-xl text-gray-800"
          >
            <p>
              Springdales School is one of India’s most distinguished private
              schools. Established in 1955 by veteran British educationist Mrs.
              Rajni Kumar, the school quickly grew from a small nursery to a
              full-fledged educational institution and made a distinct mark with
              its vibrancy and fresh approach.
            </p>

            <p>
              Over the last 68 years, the school has earned a reputation for
              being a progressive institution that helps students build
              character through its values-based education. It has received
              national and international recognition for its high level of
              academic excellence, innovative educational practices, holistic
              approach, and emphasis on performing arts, internationalism, and
              humanitarian ethos.
            </p>

            <p>
              Springdales is known for its pioneering role in education in
              India, and many of the innovative practices implemented by the
              school have been adopted by schools across India.
            </p>
          </div>

          <img src="/images/about.jpg" alt="about" className="h-full " />
        </div>

        <div className="flex text-lg flex-wrap my-20 justify-center lg:justify-between items-center gap-4">
          <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl text-center  font-semibold mb-2">
              History
            </h2>
            <p className="text-justify">{history}</p>
          </div>

          <div className="w-64  h-64 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl text-center  font-semibold mb-2">Vision</h2>
            <p className="text-justify">{vision}</p>
          </div>

          <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl text-center  font-semibold mb-2">
              Mission
            </h2>
            <p className="text-justify">{mission}</p>
          </div>
        </div>

        <div className="text-xl">
          <h2 className="text-2xl font-semibold my-10 ">
            Message from the Principal
          </h2>
          <div className="block md:grid grid-cols-2 gap-6">
            <img
              src="/images/principal.jpg"
              alt="principal"
              className="w-full"
            />

            <div className="flex flex-col gap-4">
              <p className="text-end font-semibold mb-2">
                " {principalMessage} " <br></br> Mrs. Mala
              </p>
              <p>
                The vision of our founding principal, Dr. Rajni Kumar, has
                always been to create a learning space committed to providing a
                joyous and spirited environment for our children. Today, that
                vision is being taken forward by Dr. Jyoti Bose under whose
                guidance we at Springdales, Pusa Road strive to develop studies
                and skills in our children that will help them become confident
                and responsible global citizens.
              </p>

              <p>
                We firmly believe that today's youth is capable of bringing
                great changes, helping the nation progress in every field. It is
                with this hope and faith that we seek to instil in our children
                values of empathy, leadership and the passion to follow their
                dreams.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 mt-20">
            Infrastructure and Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            {infrastructure.map((item, index) => (
              <div key={index} className="relative">
                <img src={item.img} alt={item.title} className="w-full" />
                <p className="absolute p-4 bottom-0 right-0 w-full bg-black/50 text-xl text-white text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
