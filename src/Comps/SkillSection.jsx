import { useState } from "react";
import { FaCode } from "react-icons/fa6";
// import { IoExtensionPuzzle } from "react-icons/io5";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { FiDatabase } from "react-icons/fi";
import { GiPlatform } from "react-icons/gi";
// import { FaReact } from "react-icons/fa";
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillsData = {
    languages: [
      {
        icon: <i className="devicon-javascript-plain colored text-4xl"></i>,
        name: "JavaScript",
        level: 85,
        color: "bg-gray-900",
        barColor:
          "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500",
        hoverColor: "hover:border-yellow-400 hover:shadow-yellow-400/50",
      },
      {
        icon: <i className="devicon-cplusplus-plain colored"></i>,
        name: "C++",
        level: 75,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600",
        hoverColor: "hover:border-blue-400 hover:shadow-blue-400/50",
      },
      {
        icon: <i className="devicon-python-plain-wordmark colored"></i>,
        name: "Python",
        level: 80,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-700",
        hoverColor: "hover:border-sky-400 hover:shadow-sky-400/50",
      },
      {
        icon: <i className="devicon-c-original colored"></i>,
        name: "C",
        level: 87,
        color: "bg-gray-900",
        barColor: "bg-slate-400",
        hoverColor: "hover:border-slate-400 hover:shadow-slate-400/50",
      },
      {
        icon: <i className="devicon-html5-plain colored"></i>,
        name: "HTML",
        level: 95,
        color: "bg-gray-900",
        barColor:
          "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600",
        hoverColor: "hover:border-orange-400 hover:shadow-orange-400/50",
      },
      {
        icon: <i className="devicon-css3-plain colored"></i>,
        name: "CSS",
        level: 85,
        color: "bg-gray-900",
        barColor: "bg-sky-300",
        hoverColor: "hover:border-sky-400 hover:shadow-sky-400/50",
      },
      {
        icon: <i className="devicon-java-plain colored"></i>,
        name: "Java",
        level: 65,
        color: "bg-gray-900",
        barColor:
          "bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 ",
        hoverColor: "hover:border-yellow-400 hover:shadow-yellow-400/50",
      },
    ],
    libraries: [
      {
        icon: <i className="devicon-react-original colored text-6xl"></i>,
        name: "React",
        level: 90,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600",
        hoverColor: "hover:border-cyan-400 hover:shadow-cyan-400/50",
      },
      {
        icon: <i className="devicon-tailwindcss-original colored"></i>,
        name: "Tailwind",
        level: 85,
        color: "bg-gray-900",
        barColor: "bg-cyan-500",
        hoverColor: "hover:border-blue-400 hover:shadow-blue-400/50",
      },
      {
        icon: <i className="devicon-bootstrap-plain colored"></i>,
        name: "Bootstrap",
        level: 85,
        color: "bg-gray-900",
        barColor:
          "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700",
        hoverColor: "hover:border-purple-400 hover:shadow-purple-400/50",
      },
      {
        icon: <i className="devicon-express-original colored"></i>,
        name: "Express",
        level: 85,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600",
        hoverColor: "hover:border-gray-400 hover:shadow-gray-400/50",
      },
      {
        icon: <i className="devicon-socketio-original colored"></i>,
        name: "Socket.io",
        level: 85,
        color: "bg-gray-900",
        barColor:
          "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600",
        hoverColor: "hover:border-emerald-400 hover:shadow-emerald-400/50",
      },
    ],
    databases: [
      {
        icon: <i className="devicon-mysql-plain-wordmark colored"></i>,
        name: "MySQL",
        level: 70,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-sky-400 via-orange-500 to-orange-400",
        hoverColor: "hover:border-orange-400 hover:shadow-sky-400/50",
      },
      {
        icon: <i className="devicon-mongodb-plain colored"></i>,
        name: "MongoDB",
        level: 65,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
        hoverColor: "hover:border-green-400 hover:shadow-green-400/50",
      },
    ],
    ToolsAndEnvironment: [
      {
        icon: <i class="devicon-nodejs-plain colored"></i>,
        name: "Node,",
        level: 70,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-lime-400 via-lime-500 to-lime-700",
        hoverColor: "hover:border-lime-600 hover:shadow-lime-700/50",
      },
      {
        icon: <i class="devicon-vscode-plain colored"></i>,
        name: "Vs code,",
        level: 70,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600",
        hoverColor: "hover:border-sky-400 hover:shadow-sky-400/50",
      },
      {
        icon: <i class="devicon-postman-plain colored"></i>,
        name: "Postman",
        level: 89,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500",
        hoverColor: "hover:border-amber-400 hover:shadow-amber-400/50",
      },
      {
        icon: <i class="devicon-git-plain colored"></i>,
        name: "git",
        level: 75,
        color: "bg-gray-900",
        barColor: "bg-orange-500",
        hoverColor: "hover:border-orange-400 hover:shadow-orange-400/50",
      },
      {
        icon: <i class="devicon-github-original"></i>,
        name: "github",
        level: 80,
        color: "bg-gray-900",
        barColor: "bg-white",
        hoverColor: "hover:border-white-400 hover:shadow-white-400/50",
      },
    ],
    PlatformsServices: [
      {
        icon: <i class="devicon-vercel-original"></i>,
        name: "Vercel,",
        level: 70,
        color: "bg-gray-900",
        barColor: "bg-white",
        hoverColor: "hover:border-white hover:shadow-sky-400/50",
      },
      {
        icon: <i class="devicon-netlify-plain colored"></i>,
        name: "netlify,",
        level: 70,
        color: "bg-gray-900",
        barColor: "bg-teal-400",
        hoverColor: "hover:border-teal-300 hover:shadow-teal-400/50",
      },
      {
        icon: <i class="devicon-npm-original-wordmark colored"></i>,
        name: "NPM",
        level: 70,
        color: "bg-gray-900",
        barColor: "bg-gradient-to-r from-red-400 via-red-500 to-red-600",
        hoverColor: "hover:border-sky-400 hover:shadow-sky-400/50",
      },
      {
        icon: <i class="devicon-firebase-plain colored"></i>,
        name: "firebase",
        level: 70,
        color: "bg-gray-900",
        barColor: "bg-yellow-400",
        hoverColor: "hover:border-yellow-400 hover:shadow-yellow-400/50",
      },
    ],
  };

  const categoryIcons = {
    languages: <FaCode />,
    libraries: <IoExtensionPuzzleOutline />, // 🧩
    ToolsAndEnvironment: <VscTools />, // 🧰
    databases: <FiDatabase />,
    PlatformsServices: <GiPlatform />,
  };
  const categories = Object.keys(skillsData);

  return (
    <section
      className="py-10"
      // className="relative overflow-x-hidden inset-0 min-h-screen w-screen bg-gray-950  text-white flex flex-col items-center px-6 py-16 gap-6"
    >
      {/* <h2 className="text-4xl md:text-6xl font-semibold mb-8 bg-gradient-to-r from-blue-600 via-cyan-400  to-emerald-500 bg-clip-text text-transparent mt-4">About Me</h2> */}

      <h2 className=" text-4xl bg-gradient-to-r from-blue-600   to-emerald-500 bg-clip-text text-transparent md:text-6xl  mb-12  mt-4 text-center transition duration-200 ">
        Skills
      </h2>

      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center justify-center w-12 h-12 md:w-auto md:h-auto 
        px-0 md:px-6 py-0 md:py-3 rounded-full border text-lg font-semibold transition
        ${
          activeCategory === cat
            ? "bg-blue-500 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
          >
            {/* Icon */}
            <span className="text-xl">{categoryIcons[cat]}</span>

            {/* Show text only on md+ screens */}
            <span className="hidden md:inline ml-2">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* On mobile: show selected category name under icons */}
      {/* <p className="text-center text-white font-semibold md:hidden mb-6">
  {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
</p> */}

      <p className=" text-sm bg-gradient-to-r from-cyan-400   to-emerald-500 bg-clip-text text-transparent md:text-2xl  mb-12  mt-4 text-center transition duration-200 ">
        {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
      </p>
      <div
        className="grid 
      grid-cols-1   /* Mobile full width */
      sm:grid-cols-2 
      md:grid-cols-3 
      gap-4 sm:gap-6 
      max-w-6xl mx-auto px-2 sm:px-6"
      >
        {skillsData[activeCategory].map((skill) => (
          <div
            key={skill.name}
            // className={`${skill.color} text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
            className={`${skill.color} text-white p-6 rounded-2xl shadow-lg border 
              transform transition duration-300 hover:scale-105 hover:shadow-2xl 
              ${skill.hoverColor}`}
          >
            {/* Gradient Hover Glow */}
            <div
              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500 ${skill.hoverGradient}`}
            ></div>
            <div className="flex items-center gap-4">
              {/* Icon on the left */}
              <div className="text-5xl flex-shrink-0">{skill.icon}</div>

              {/* Right side: name + progress */}
              <div className="flex-1">
                <h4 className="text-xl font-bold">{skill.name}</h4>
                <div className="w-full bg-white/30 rounded-full h-3 mt-2">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${skill.barColor}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-1 font-medium">{skill.level}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
