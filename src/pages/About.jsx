import React from "react";
import { FaBrain, FaUsers, FaRocket } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            AI Resume Builder is designed to help job seekers create impressive, ATS-friendly resumes in minutes — powered by the latest AI technology.
          </p>
        </div>

        {/* Mission & Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We aim to simplify and revolutionize how people create resumes. Our goal is to empower job seekers with intelligent tools that help them tell their stories better and land opportunities faster.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium mb-2">Why We Built This</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We noticed that creating a good resume was a big challenge for many. With AI becoming more accessible, we saw the perfect opportunity to help bridge that gap with automation and smart design.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow">
            <FaBrain className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Harness the power of GPT-based AI to generate personalized and professional resumes.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow">
            <FaUsers className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">User-Centered Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with simplicity and speed in mind, anyone can use our tool with zero learning curve.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow">
            <FaRocket className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our templates and suggestions are crafted to pass ATS systems and impress recruiters.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-16">
          &copy; {new Date().getFullYear()} AI Resume Builder. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default About;
