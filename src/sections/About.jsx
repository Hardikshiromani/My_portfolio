import React from 'react'

const About = () => {
  return (
    // <section
    //     id="about"
    //     className=" inset-0 min-h-screen w-screen bg-gray-900 text-white flex flex-col"
    //   >
    <section
  id="about"
  className=" relative overflow-x-hidden inset-0 min-h-screen w-screen bg-gray-950 text-white flex flex-col items-center px-6 py-16 gap-6"
>
   {/* <div className="absolute top-10 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div> */}
  {/* <div className="absolute top-10 -right-20 w-72 h-72 bg-gradient-to-bl from-green-500/40 to-cyan-600/40 rounded-full blur-3xl animate-pulse"></div> */}
 
 

{/* <div className="absolute left-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-sm
                  bg-gradient-to-r from-blue-500/30 to-transparent 
                  blur-3xl"></div> */}

<div  className="absolute -left-10 md:-left-32 lg:-left-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-blue-500/30 blur-3xl"></div>
  {/* Right semicircle */}
  {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-sm
                  bg-gradient-to-l from-cyan-500/30 to-transparent 
                  blur-3xl"></div> */}

  <div  className="absolute -right-10 md:-right-32 lg:-rightt-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-cyan-500/30 blur-3xl"></div>                
    <h2 className="text-4xl md:text-6xl font-semibold mb-8 bg-gradient-to-r from-blue-600 via-cyan-400  to-emerald-500 bg-clip-text text-transparent mt-4">About Me</h2>

<p className="text-gray-300 leading-relaxed text-center font-semibold text-xl">
I’m a Full-Stack Web Developer who thrives at the intersection of logic and creativity. From designing gradient-rich UIs to architecting scalable APIs, I enjoy transforming abstract ideas into immersive digital experiences.
My coding journey began with HTML and CSS, when I built my first static website — and discovered how much I love bringing ideas to life on the web.
During my BCA, I deepened my understanding of programming and software development, exploring technologies ranging from low-level languages like Assembly and C to concepts like Data Structures, DBMS, Networking, and the Software Development Life Cycle.
Along the way, I built several projects, including a real-time chat application, where I gained hands-on experience in full-stack development, problem-solving, and team collaboration.
These projects taught me not only how to write functional code, but also how to craft solutions that are efficient, elegant, and maintainable.
I’m methodical in troubleshooting, collaborative in design, and always chasing that “click” moment — when everything comes together visually and logically.
I’m currently seeking opportunities as a Full-Stack Developer, Frontend Engineer, or API Architect. If you’re building something bold, creative, or technically challenging, I’d love to contribute.
</p> 
    {/* </div> */}
{/* <h2 className="text-4xl font-bold text-cyan-400 mb-6">Soft Skills</h2>
 */}
    <h5 className="text-4xl md:text-6xl font-semibold mb-12 text-cyan-400 mt-4">Soft Skills</h5>

<div className="flex flex-wrap justify-center gap-6">
  {["Problem Solving", "Adaptability", "Deep Thinking", "Quick Learning"].map((skill, index) => (
    <div
      key={index}
      className="px-6 py-4 border-2 border-cyan-400 rounded-xl text-white font-medium text-lg shadow-md hover:shadow-cyan-500/50 transition duration-300"
    >
      {skill}
    </div>
  ))}
</div>
    {/* Repeat for other skills */}
  {/* </div> */}

    </section>
  )
}

export default About
