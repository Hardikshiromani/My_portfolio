import React from "react";
import Navbar from "../Comps/Navbar.jsx";
import WavesHeroDemo from "../Comps/WaveHeroDemo.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative overflow-hidden inset-0 min-h-screen w-screen bg-gray-900 text-white flex flex-col"
    >
      {/* Hero Content */}
      <Navbar />

      <div className="flex flex-1 flex-col justify-center items-center text-center w-full">
        {/* <h2 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
          Hi, I'm Hardik
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          A Full Stack Developer who loves building modern web apps 🚀
        </p>
        <div className="text-4xl font-bold mb-6 text-green-400">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "React Enthusiast",
                "API Architect",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
 <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition" >
          See My Work
        </a>  */}
        <WavesHeroDemo/>
       </div> 
    
    </section>
  );
};

export default Hero;
