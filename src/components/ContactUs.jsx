import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitContactForm } from "../redux/slices/contactSlice"; // Ensure this path is correct

const ContactUs = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-red-900 my-4 underline">
        Contact Us
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-1 order-2 space-y-6 bg-white shadow-lg rounded-lg lg:p-6 p-4">
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-gray-800">Address</p>
              <p className="text-gray-600">
                Springdale Public School, 123 Education Lane, Cityville, State,
                ZIP Code
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">Phone</p>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">info@springdale.edu</p>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224033.50356209773!2d77.13283108671878!3d28.673983099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf04d7a4e4e71%3A0xa5ae75a6475e73cb!2sSpring%20Dale%20School!5e0!3m2!1sen!2sin!4v1721910580248!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:order-2  order-1 justify-center space-y-4  bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              We'd love to hear from you! Feel free to reach out with any
              questions or feedback.
            </p>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
