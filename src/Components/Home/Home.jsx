import React from "react";
import avatarImg from "../../assets/laptopimage.png";
import TextChange from "../TextChange";
import { Import } from "lucide-react";
//import Resume from "../../assets/Shubham_Pundhir_Resume.pdf";
//import Foo from "../../public/assets/Shubham_Pundhir_Resume.pdf"; // Ensure this path is correct



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
        <a
          href="/Shubham_Pundhir_Resume.pdf"
          download="Shubham_Pundhir_Resume.pdf" // Optional: forces filename
          className="inline-block mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Download CV
        </a>

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
