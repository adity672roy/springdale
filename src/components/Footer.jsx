import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-800  text-white p-8 mt-8">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-4 justify-center items-center py-8">
          <img
            src="/images/logo.png"
            alt="School Logo"
            className="h-16 md:h-20"
          />
          <p className="text-lg text-center max-w-4xl text-semibold ">
            Springdales School is an established private school, recognized and
            approved by the MOE and is affiliated to the Central Board of
            Secondary Education, India. Springdale Public School, where we
            nurture young minds for a brighter future.
          </p>
        </div>

        <hr></hr>

        <div className=" text-center flex flex-col gap-2 py-8 text-sm">
          <p>123 Education Lane, Cityville, State, ZIP Code</p>
          <p className=" ">Phone: +1 (123) 456-7890</p>
          <p>Email: info@springdale.edu</p>
          <p>
            &copy; {new Date().getFullYear()} Springdale Public School. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
