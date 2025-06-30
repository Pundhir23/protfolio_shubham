import React from "react";
import Jokes from "../../assets/JokeGenerator.png";
import Tilt from "react-parallax-tilt";
import Amazon from "../../assets/amazon.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website (Amazon Clone)",
      main: "Built a basic Amazon-style e-commerce site with HTML, CSS, and Bootstrap. Features product listings, user-friendly UI.",
      image: Amazon,
      link: "https://amazon-gold-eight.vercel.app/", // add real project link here
    },
    {
      title: "Joke Generator",
      main: "A fun app that serves up random dad jokes to keep you laughing, one click at a time.",
      image: Jokes,
      link: "https://joke-generator-one-kohl.vercel.app/", // add real project link here
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Projects</h1>
      <div className="py-0 px-6 flex flex-wrap gap-5">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-cyan-500/20 transition-all duration-300 w-full md:w-[45%]"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{project.main}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition duration-300"
            >
              View Project
            </a>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
