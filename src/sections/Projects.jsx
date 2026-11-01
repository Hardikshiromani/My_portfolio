import React from "react";
import { useState, useEffect } from "react";
import Todo from "../assets/Todo.png";
import Weather from "../assets/Weather.png";
import Chat from "../assets/Chat.png";
import Portfolio from "../assets/Portfolio.png";
import Doucblitz from "../assets/Docublitz.png";
import Ignamecraft from "../assets/Ignamecraft.png";
import { ChevronRight, ChevronLeft } from "lucide-react";

const projects = [
  {
    title: "DocuBlitzTools",
    image: Doucblitz,
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Ghostscript",
      "Docker",
      "AWS",
      "CloudFront",
    ],
    description:
      "A web-based PDF and image tools platform offering document compression, conversion, merging, splitting, and image processing. Built with a Next.js frontend and Node.js backend, with containerized deployment and AWS infrastructure.",
    demo: "https://www.docublitztools.com",
  },
  {
    title: "IGNameCraft",
    image: Ignamecraft,
    tech: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
    description:
      "An Instagram username generator that helps users discover creative usernames through personalized categories and styles, with AI-powered generation and username availability checking.",
    demo: "https://www.ignamecraft.com",
  },
  {
    title: "ChatWorld",
    image: Chat,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Socket.IO",
      "JWT",
      "Firebase",
      "Cloudinary",
    ],
    description:
      "A real-time chat application featuring private and group conversations, user authentication, profile management, and real-time message delivery using Socket.IO.",
    code: "https://github.com/Hardikshiromani/Project_ChatWorld",
    demo: "https://project-chat-world.vercel.app",
  },
  {
    title: "Weather App",
    image: Weather,
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Weather API"],
    description:
      "A responsive weather application that retrieves current weather information for different cities, including temperature, humidity, and wind speed.",
    code: "https://github.com/Hardikshiromani/weatherapp",
    demo: "https://weatherapp-nine-amber.vercel.app",
  },
  {
    title: "TodoList",
    image: Todo,
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    description:
      "A responsive task management application that allows users to create, organize, and delete tasks through a simple interface.",
    code: "https://github.com/Hardikshiromani/todolist",
    demo: "https://hardikshiromani.github.io/todolist/",
  },
];

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2); // cards shown at once

  // 2 cards on md+ screens, 1 on mobile
  useEffect(() => {
    const update = () => setVisible(window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, projects.length - visible);

  // keep index valid when the screen size changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  return (
    <section
      id="projects"
      //  className="relative inset-0 overflow-hidden  py-16 bg-gray-950 text-white"
      className="relative overflow-x-hidden inset-0 min-h-screen w-screen bg-gray-950  text-white flex flex-col items-center px-6 py-16 gap-6"
    >
      <h2 className="text-4xl md:text-6xl font-semibold mb-8 bg-gradient-to-r from-blue-600 via-cyan-400  to-emerald-500 bg-clip-text text-transparent mt-4">
        Projects
      </h2>

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
      {/* <h3 className=" text-xl bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent md:text-6xl  mb-12  mt-4 text-center transition duration-200 ">Projects</h3> */}

      <div className="w-full max-w-6xl mx-auto px-4">
        {/* viewport: hides the cards outside the window */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous project"
            className="absolute left-0 xl:-left-14 top-1/2 -translate-y-1/2 z-20
        h-11 w-11 rounded-full bg-gray-900/80 backdrop-blur border border-cyan-400/40
        text-cyan-300 flex items-center justify-center transition
        hover:bg-cyan-400/20 hover:scale-110
        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Next project"
            className="absolute right-0 xl:-right-14 top-1/2 -translate-y-1/2 z-20
        h-11 w-11 rounded-full bg-gray-900/80 backdrop-blur border border-cyan-400/40
        text-cyan-300 flex items-center justify-center transition
        hover:bg-cyan-400/20 hover:scale-110
        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight />
          </button>
          <div className="overflow-hidden">
            {/* track: slides left/right */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {console.log("Projects count:", projects.length)}
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="shrink-0 p-4" // p-4 gives room for the hover scale + shadow
                  style={{ width: `${100 / visible}%` }}
                >
                  <div className="h-full bg-black/60 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/40 flex flex-col">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mt-auto flex items-center gap-3">
                        {project.code && (
                          <button
                            onClick={() => window.open(project.code, "_blank")}
                            className="px-4 py-2 rounded-lg bg-cyan-400 text-white"
                          >
                            See Code
                          </button>
                        )}
                        <button
                          onClick={() => window.open(project.demo, "_blank")}
                          className="px-4 py-2 rounded-lg bg-slate-500 text-white"
                        >
                          Live Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
