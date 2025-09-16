
import React from "react";
import Todo from "../assets/Todo.png"
import Weather from "../assets/Weather.png"
import Chat from "../assets/Chat.png"

const projects = [
  {
    title: "TodoList",
    image: Todo, // replace with actual path
    tech: "React.js, HTML,CSS,Javascript,Bootstrap",
    description:
      "A responsive TodoList application built with React.js, HTML, and CSS, allowing users to create, add, and delete tasks with a clean and intuitive interface.",
    code:"https://github.com/Hardikshiromani/todolist" ,
    demo:"https://hardikshiromani.github.io/todolist/", 
  },
  {
    title: "ChatWorld",
    image: Chat,
    tech: "React.js, Express.js,Node js,Firebase,JWT,Mysql,bootstrap",
    description:
      "ChatWorld is a real time chat web application where user can create their profile with mobile numbers and chat with another user in real time and they can do polling based messasging",
     code:"https://github.com/Hardikshiromani/Project_ChatWorld" ,
    demo:"https://project-chat-world.vercel.app",   
  },
  {
    title: "Weather",
    image: Weather,
    tech: "HTML, CSS, JavaScript, React.js, Tailwind CSS",
    description:
      "A lightweight weather application that allows users to check real-time weather conditions for their city, including temperature, wind speed, and humidity levels."
      ,
       code:"https://github.com/Hardikshiromani/weatherapp" ,
    demo:"https://weatherapp-nine-vert.vercel.app", 
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    tech: "React.js, Tailwind CSS",
    description:
      "A modern responsive portfolio website showcasing my skills, projects, and achievements with interactive UI and smooth animations.",
       code:"https://github.com/Hardikshiromani/My_portfolio" ,
    demo:"https://https://my-portfolio-gamma-navy-93.vercel.app/", 
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects"
    //  className="relative inset-0 overflow-hidden  py-16 bg-gray-950 text-white"
      className="relative overflow-x-hidden inset-0 min-h-screen w-screen bg-gray-950  text-white flex flex-col items-center px-6 py-16 gap-6"

     >
    <h2 className="text-4xl md:text-6xl font-semibold mb-8 bg-gradient-to-r from-blue-600 via-cyan-400  to-emerald-500 bg-clip-text text-transparent mt-4">Projects</h2>

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
    {/* <h3 className=" text-xl bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent md:text-6xl  mb-12  mt-4 text-center transition duration-200 ">Projects</h3> */}
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4" data-aos="fade-up">
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 max-w-4xl mx-auto px-4"> */}
      {/* <div className="flex flex-row gap-10 max-w-3xl mx-auto px-4"> */}

        {projects.map((project, index) => (
          <div
            key={index}
            // className="bg-black/60 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-500/40 hover:scale-105 transform transition duration-300"
            className="bg-black/60 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/40 flex flex-col"
  data-aos="fade-up"
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
              <button onClick={()=>window.open(project.code, "_blank")}  className="px-4 py-2 rounded-lg  bg-cyan-400 text-white gap-2 mr-2">See Code</button>
              <button  onClick={()=>window.open(project.demo, "_blank")}className="px-4 py-2 rounded-lg  bg-slate-500 text-white ml-2">Live Demo</button>
   
            </div>
          </div>
          
        ))}
      </div>
      {/* <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-10 max-w-6xl mx-auto px-4">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-black/60 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/40 flex flex-col w-full max-w-sm mx-auto"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-xs text-cyan-400 font-medium mb-2">{project.tech}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => window.open(project.code, "_blank")}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-cyan-400 text-white"
          >
            See Code
          </button>
          <button
            onClick={() => window.open(project.demo, "_blank")}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-500 text-white"
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  ))}
</div> */}

    </section>
  );
};

export default ProjectsSection;
