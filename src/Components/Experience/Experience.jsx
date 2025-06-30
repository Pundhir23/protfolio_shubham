import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon, FaGithub } from "react-icons/fa"
import { SiRedux, SiBootstrap, SiTailwindcss, SiExpress, SiPython, SiNodedotjs } from "react-icons/si"
import { RiNetflixFill } from "react-icons/ri"
import { DiJava } from "react-icons/di"
import { GiArtificialIntelligence } from "react-icons/gi"
//import {Cohyve} from "../../assets/cohyvelogo.svg";
import Cohyve from "../../assets/cohyvelogo.svg";
import Ducat from "../../assets/ducat.png";


const Experience = () => {
  const skills = [
    { icon: <FaJs />, name: "JAVASCRIPT", color: "#F7DF1E" },
    { icon: <FaReact />, name: "REACTJS", color: "#61DAFB" },
    { icon: <SiTailwindcss />, name: "TAILWIND", color: "#38BDF8" },
    { icon: <FaFigma />, name: "FIGMA", color: "#F24E1E" },
    { icon: <SiBootstrap />, name: "BOOTSTRAP", color: "#7952B3" },
    { icon: <SiRedux />, name: "REDUX", color: "#764ABC" },
    { icon: <FaGithub />, name: "GITHUB", color: "#fff" },
    { icon: <DiJava />, name: "JAVA", color: "#f44336" },
    { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
   { icon: <SiPython />, name: "PYTHON", color: "#3776AB" },
    { icon: <SiNodedotjs />, name: "NODE.JS", color: "#339933" },
    { icon: <SiExpress />, name: "EXPRESS.JS", color: "#aaa" },
  ]

  return (
    <div
      className="min-h-screen p-6 md:p-20"

    >
      <div className="flex flex-col lg:flex-row gap-12 min-h-screen items-center">
        {/* Skills Section - Left Column */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Skills Title */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-12 text-center tracking-wider"
            style={{
              background: "linear-gradient(45deg, #ff6b9d, #c44569, #f8b500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SKILLS
          </h1>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-4 justify-center max-w-lg">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-black bg-opacity-60 backdrop-blur-sm border border-gray-700 rounded-full px-5 py-2 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-opacity-80 hover:border-gray-500"
              >
                <span className="text-xl" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <span className="tracking-wide">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      

      {/* Experience Section */}
      <div id="Experience" className=" flex-1 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-10 text-center lg:text-left tracking-wider">
          EXPERIENCE
        </h1>

        <div className="flex flex-col gap-6">
          {/* Google */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center hover:scale-[1.02] hover:border-l-4 hover:border-blue-400 transition-all duration-300">
            
           <img src={Cohyve} alt="Cohyve Logo" className="w-[40px] h-[40px] invert brightness-200" />

            <div className="text-white">
              <h2 className="font-semibold">Cohyve Tech Private Limited</h2>
              <p className="text-sm font-thin">15th May, 2025 - Present</p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Front-End Developer Intern</li>
               
              </ul>
            </div>
          </div>

          {/* Netflix */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center hover:scale-[1.02] hover:border-l-4 hover:border-red-500 transition-all duration-300">
            <img src={Ducat} alt="Cohyve Logo" className="w-[40px] h-[40px] " />
            <div className="text-white">
              <h2 className="font-semibold">DUCAT-Training Institute</h2>
              <p className="text-sm font-thin">Feb 2023 -- Feb 2024</p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Java full Stack</li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

  )
}
export default Experience
