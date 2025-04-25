import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Contact Us</h1>

        <p className="text-lg mb-6 text-gray-300">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello — reach out anytime.
        </p>

        <div className="space-y-4 text-lg mb-10">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-400" />
            <span>+1 231-234-5678</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400" />
            <span>trulink@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>We work remotely 🌍</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-300">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-300">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
