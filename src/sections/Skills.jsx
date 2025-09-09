import React from 'react'
import SkillsSection from '../Comps/SkillSection'

const Skills = () => {
  return (
    //  <section
    //     id="skills"
    //     className=" inset-0 min-h-screen w-full bg-gray-900 text-white flex flex-col"
    //   >
    <section
      id="skills"
      className="relative overflow-hidden min-h-screen w-full bg-gray-950 text-white py-16"
    >
  {/* <div className="absolute top-1/2 -left-0 w-72 h-72 bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div> */}
  {/* <div className="absolute bottom-1/2 -right-0 w-72 h-72 bg-gradient-to-bl from-purple-500/40 to-cyan-600/40 rounded-full blur-3xl animate-pulse"></div> */}
    {/* <div className="flex flex-1 flex-col justify-center items-center text-center w-full"> */}
    
{/* <div className="absolute left-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-sm
                  bg-gradient-to-r from-blue-500/30 to-transparent 
                  blur-3xl"></div> */}

  {/* Right semicircle */}
  {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-sm
                  bg-gradient-to-l from-cyan-400/30 to-transparent 
                  blur-3xl"></div> */}

                  
<div  className="absolute -left-10 md:-left-32 lg:-left-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-blue-500/30 blur-3xl"></div>

             
  <div  className="absolute -right-10 md:-right-32 lg:-rightt-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-cyan-500/30 blur-3xl"></div> 
      <div className="max-w-6xl mx-auto px-6">
      <SkillsSection/>
  

</div>
    </section>
  )
}

export default Skills
