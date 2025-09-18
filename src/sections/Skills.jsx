import React from "react";
import SkillsSection from "../Comps/SkillSection";

const Skills = () => {
  return (
    <section
      id="skills"
      // className="relative overflow-hidden min-h-screen w-full bg-gray-950 text-white py-16"
      className="relative overflow-x-hidden inset-0 min-h-screen w-screen bg-gray-950  text-white flex flex-col items-center px-6 py-16 gap-6"
    >
      <div
        className="absolute -left-10 md:-left-32 lg:-left-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-blue-500/30 blur-3xl"
      ></div>

      <div
        className="absolute -right-10 md:-right-32 lg:-rightt-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-cyan-500/30 blur-3xl"
      ></div>
      <h2
        className="relative z-10 text-4xl md:text-6xl font-semibold 
             bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500 
             bg-clip-text text-transparent 
             mb-2 mt-8 text-center transition duration-200 "
        data-aos="fade-right"
      >
        Skills
      </h2>
      {/* <div  className="max-w-6xl mx-auto px-6"> */}

      <SkillsSection />

      {/* </div> */}
    </section>
  );
};

export default Skills;
