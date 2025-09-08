// import { useState } from "react";

// const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("languages");

//   const skillsData = {
//     languages: [
//       { name: "JavaScript", level: 85 },
//       { name: "C++", level: 75},
//       { name: "Python", level: 80 },
//       {name:"C",level:87},
//       {name:"HTML",level:95},
//       {name:"CSS",level:85},
//       {name:"JAVA",level:65}
//     ],
//     libraries: [
//       { name: "React", level: 90 },
//       { name: "Tailwind", level: 85},
//       {name:"Express",level:85},
//       {name:"Socket io",level:85}
//     ],
//     databases: [
//       { name: "MySQL", level: 70 },
//       { name: "MongoDB", level: 65 },
//     ],
//   };

//   const categories = Object.keys(skillsData);

//   return (
//     <section className="py-10">
//       {/* Tabs */}
//       <div className="flex justify-center space-x-4 mb-6">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-4 py-2 rounded-full border transition 
//               ${activeCategory === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
//           >
//             {cat.charAt(0).toUpperCase() + cat.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Skill Grid */}
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

//         {skillsData[activeCategory].map((skill) => (
//           <div key={skill.name} className="p-4 border rounded-xl shadow-md">
//             <div className="flex items-center space-x-2 mb-2">
//               <span className="text-xl">{skill.icon}</span>
//               <h4 className="font-medium">{skill.name}</h4>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className=" bg-gradient-to-r
// from-blue-500
// via-purple-500
// to-pink-500 h-2 rounded-full  transition-all duration-500"
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//             </div>
//             <p className="text-sm text-gray-500 mt-1">{skill.level}%</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import { useState } from "react";
import { FaReact } from "react-icons/fa";
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillsData = {
    languages: [
      { name: "JavaScript", level: 85, color: "bg-yellow-400" },
      { name: "C++", level: 75, color: "bg-purple-500" },
      { name: "Python", level: 80, color: "bg-green-500" },
      { name: "C", level: 87, color: "bg-blue-500" },
      { name: "HTML", level: 95, color: "bg-orange-500" },
      { name: "CSS", level: 85, color: "bg-indigo-500" },
      { name: "Java", level: 65, color: "bg-red-500" },
    ],
    libraries: [
      {name: "React", level: 90, color: "bg-grey-500", icon:<FaReact/> },
      { name: "Tailwind", level: 85, color: "bg-teal-400" },
      { name: "Express", level: 85, color: "bg-gray-700" },
      { name: "Socket.io", level: 85, color: "bg-pink-500" },
    ],
    databases: [
      { name: "MySQL", level: 70, color: "bg-orange-600" },
      { name: "MongoDB", level: 65, color: "bg-green-600" },
    ],
    ToolsandEnvironment:[
     {name:"Vs code,", level: 70, color: "bg-orange-600"},
     {name:"Postman", level:89,color:"bg-orange-500"},
     {name:"git",level:75,color:"bg-orange-400"},
     {name:"github",level:80,color:"bg-orange-500"}
    ]
  };

  const categories = Object.keys(skillsData);

  return (
    <section className="py-10">
    {/* <h2 className=" text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent md:text-6xl  mb-12  mt-4 text-center transition duration-200 ">Skills</h2> */}
    <h2 className=" text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent md:text-6xl  mb-12  mt-4 text-center transition duration-200 ">Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-4 rounded-full border text-lg font-semibold transition 
              ${activeCategory === cat ? "bg-blue-500 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData[activeCategory].map((skill) => (
          <div
            key={skill.name}
            className={`${skill.color} text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h4 className="text-xl font-bold">{skill.name}</h4>
            <div className="w-full bg-white/30 rounded-full h-3 mt-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="mt-2 font-medium">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
