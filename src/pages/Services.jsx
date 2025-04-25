import React from "react";
import { FaRobot, FaFilePdf } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "AI-Powered Resume Generation",
      description:
        "Generate job-ready resumes instantly using advanced AI tailored to your skills and industry.",
      icon: <FaRobot className="text-blue-500 text-3xl" />,
    },
    {
      title: "PDF Export & Print Ready",
      description:
        "Download your resume as a high-quality PDF, perfect for job applications and interviews.",
      icon: <FaFilePdf className="text-blue-500 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 py-10 px-6 dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Our Services</h1>
        <p className="text-lg mb-10 text-gray-700 dark:text-gray-300">
          We offer tools that help you build powerful resumes faster, smarter, and with more confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
