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
      className="relative overflow-hidden min-h-screen w-full bg-gray-900 text-white py-16"
    >
  <div className="absolute top-10 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 -right-20 w-72 h-72 bg-gradient-to-bl from-purple-500/40 to-cyan-600/40 rounded-full blur-3xl animate-pulse"></div>
    {/* <div className="flex flex-1 flex-col justify-center items-center text-center w-full"> */}
      <div className="max-w-6xl mx-auto px-6">
      <SkillsSection/>
  

</div>
    </section>
  )
}

export default Skills
