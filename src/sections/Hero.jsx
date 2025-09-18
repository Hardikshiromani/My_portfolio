import React from "react";
import Navbar from "../Comps/Navbar.jsx";
import WavesHeroDemo from "../Comps/WaveHeroDemo.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative overflow-hidden inset-0 min-h-screen w-screen bg-gray-950 text-white flex flex-col"
    >
      {/* Hero Content */}
      <Navbar />

      <div className="flex flex-1 flex-col justify-center items-center text-center w-full">
       
        <WavesHeroDemo/>
       </div> 
    
    </section>
  );
};

export default Hero;
