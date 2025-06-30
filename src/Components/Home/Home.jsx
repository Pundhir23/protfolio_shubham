import React from "react";
import avatarImg from "../../assets/laptopimage.png";
import TextChange from "../TextChange";
import { Import } from "lucide-react";
//import Resume from "../../assets/Shubham_Pundhir_Resume.pdf";
//import Resume from '../assets/Shubham_Pundhir_Resume.pdf';




const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h3 className="text-sm md:text-5xl flex leading-normal tracking-tighter justify-center md:justify-start">
          <TextChange />
        </h3>
        <p className="text-sm md:text-2xl tracking-tight mt-6">
          Aspiring Software Developer skilled in front-end and Python, passionate about building responsive web apps and real-world solutions to drive innovation and impact.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300">
        <a href="/Shubham_Pundhir.pdf" download={true}>
          Download CV
        </a>
        </button>

      </div>

      <div className="mt-10 md:mt-0 relative mr-4 group perspective-1000">
        {/* Background Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

        {/* Image with Tilt on Hover */}
        <div className="w-64 h-64 rounded-full shadow-2xl border-4 border-white/20 relative z-10 transform-gpu transition-transform duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6">
          <img
            className="w-full h-full object-cover rounded-full"
            src={avatarImg}
            alt="Avatar"
          />
        </div>
      </div>
    </div>

  );
};

export default Home;
