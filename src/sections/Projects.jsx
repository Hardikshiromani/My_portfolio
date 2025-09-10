// import React from 'react'

// const Projects = () => {
//   return (
//     <section
//         id="projects"
//         className=" inset-0 min-h-screen w-screen bg-gray-900 text-white flex flex-col"
//       >
//     <div className="flex flex-1 flex-col justify-center items-center text-center w-full">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">Projects</h1>
//     </div>
//     </section>
//   )
// }

// export default Projects

import React from "react";
import Todolist from "../assets/Todolist.png"
import Weatherapp from "../assets/Weatherapp.png"
import Chatworld from "../assets/ChatWorld.png"

const projects = [
  {
    title: "TodoList",
    image: Todolist, // replace with actual path
    tech: "React.js, HTML,CSS,Javascript,Bootstrap",
    description:
      "A responsive TodoList application built with React.js, HTML, and CSS, allowing users to create, add, and delete tasks with a clean and intuitive interface.",
  },
  {
    title: "ChatWorld",
    image: Chatworld,
    tech: "React.js, Express.js,Node js,Firebase,JWL,Mysql,bootstrap",
    description:
      "ChatWorld is a real time chat web application where user can create their profile with mobile numbers and chat with another user in real time and they can do polling based messasging",
  },
  {
    title: "Weather",
    image: Weatherapp,
    tech: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
    description:
      "A lightweight weather application that allows users to check real-time weather conditions for their city, including temperature, wind speed, and humidity levels."
      ,
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    tech: "React.js, Tailwind CSS",
    description:
      "A modern responsive portfolio website showcasing my skills, projects, and achievements with interactive UI and smooth animations.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative inset-0 overflow-hidden  py-16 bg-gray-950 text-white">
      {/* <h2 className="text-4xl  text-center mb-14 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent transition duration-200">My Projects</h2> */}
       {/* <div className="relative inset-0 overflow-hidden pointer-events-none"> */}
    {/* Left semicircle */}
    {/* <div className="absolute -left-32 top-2/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div> */}
    {/* Right semicircle */}
    {/* <div className="absolute -right-32 top-2/3 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"></div> */}

    {/* <div className="absolute top-10 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div> */}
  {/* <div className="absolute bottom-10 -right-20 w-72 h-72 bg-gradient-to-bl from-purple-500/40 to-cyan-600/40 rounded-full blur-3xl animate-pulse"></div> */}
  {/* </div> */}

{/*   
<div className="absolute left-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-sm
                  bg-gradient-to-r from-blue-500/30 to-transparent 
                  blur-3xl"></div> */}

  {/* Right semicircle */}
  {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-sm
                  bg-gradient-to-l from-cyan-500/30 to-transparent 
                  blur-3xl"></div> */}

                                 
<div  className="absolute -left-10 md:-left-32 lg:-left-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-blue-500/30 blur-3xl"></div>

             
  <div  className="absolute -right-10 md:-right-32 lg:-rightt-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-cyan-500/30 blur-3xl"></div> 
    <h2 className=" text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent md:text-6xl  mb-12  mt-4 text-center transition duration-200 ">Projects</h2>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 max-w-4xl mx-auto px-4"> */}
      {/* <div className="flex flex-row gap-10 max-w-3xl mx-auto px-4"> */}

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black/60 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-500/40 hover:scale-105 transform transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              // className="w-full h-48 object-cover"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-cyan-400 font-medium mb-3">
                Tech: {project.tech}
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                {project.description}
              </p>
              <button onClick= "https://github.com/Hardikshiromani/My_portfolio" className="px-4 py-2 rounded-lg  bg-cyan-400 text-white gap-2 mr-2">See Code</button>
              <button className="px-4 py-2 rounded-lg  bg-slate-500 text-white ml-2">Live Demo</button>
   
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
