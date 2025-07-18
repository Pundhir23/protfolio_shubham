import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="w-full animate-fade-in-up">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">About</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-8">
          {/* Profile Image with animation */}
          <div className="relative group">
            <div className="before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:blur-xl before:opacity-30 group-hover:before:opacity-60 transition-opacity duration-500">
              <img
                className="relative z-10 w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white/20 group-hover:scale-105 transition-transform duration-500"
                src={Profile}
                alt="Profile"
              />
            </div>
          </div>

          {/* Skills */}
          <ul className="space-y-8 mt-10 px-10 md:mt-0">
            {/* Frontend */}
            <li className="flex gap-3 items-start animate-fade-in-up delay-200">
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <div className="w-96">
                <h1 className="text-xl md:text-2xl leading-normal font-semibold">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md text-[#649ba0] leading-tight mt-3">
                  Skilled in HTML, CSS, JavaScript, Bootstrap, and React.js.
                  Built responsive UI projects like an Amazon Clone and a personal portfolio site.
                  Focused on clean design, mobile-first layout, and smooth user experience.
                </p>
              </div>
            </li>

            {/* Backend */}
            <li className="flex gap-3 items-start animate-fade-in-up delay-400">
              <IoArrowForward size={30} className="mt-1 text-purple-400" />
              <div className="w-96">
                <h2 className="text-xl md:text-2xl leading-normal font-semibold">
                  Backend Developer
                </h2>
                <p className="text-sm md:text-md text-[#649ba0] leading-tight mt-3">
                  Trained in Java and Python for backend logic and data handling. 
                  Built a QR Code Encoder/Decoder using Python, OpenCV, and PIL.
                  Understanding of API integration, server-side logic, and full-stack principles.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
