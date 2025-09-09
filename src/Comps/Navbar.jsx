// import React from "react";
// // import { a } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div>
//       {/* <h1> The Navbar</h1>
//        */}
//       {/* <nav className="flex justify-between  px-4 py-4 fixed top-0 w-full bg-gray-900 bg-opacity-90 shadow-md z-50">
//         <h1 className="text-2xl font-bold text-blue-500">MyPortfolio</h1>
        
//         <ul className="flex space-x-7 text-center ">
//           <li><a href="#home" className="text-4l font-bold bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500 bg-clip-text text-transparent hover:text-white">Home</a></li>
//           <li><a href="#about" className="text-4l font-bold text-blue-500 hover:text-white">About</a></li>
//           <li><a href="#skills" className="text-4l font-bold text-blue-500 hover:text-white">Skills</a></li>
//           <li><a href="#projects" className="text-4l font-bold text-blue-500 hover:text-white">Projects</a></li>
//           <li><a href="#contacts" className="text-4l font-bold text-blue-500 hover:text-white">Contact</a></li>
//         </ul>
        
//       </nav> */}
//       <nav className="flex justify-between px-6 py-5 fixed top-0 w-full bg-gray-950 bg-opacity-90 shadow-md z-50">
//         <h1 className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent font-sans text-4xl">
//           MyPortfolio
//         </h1>

//         <ul className="flex space-x-8 items-center">
//           <li>
//             <a
//               href="#home"
//               className="text-xl font-semibold bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500 bg-clip-text text-transparent hover:text-white transition duration-200"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="text-xl font-semibold  bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#skills"
//               className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent  hover:text-white transition duration-200"
//             >
//               Skills
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contacts"
//               className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between px-6 py-5 fixed top-0 w-full bg-gray-950 bg-opacity-90 shadow-md z-50">
      {/* Logo */}
      <h1 className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent font-sans text-4xl">
        MyPortfolio
      </h1>

      {/* Desktop Menu (kept your styling) */}
      <ul className="hidden md:flex space-x-8 items-center">
        <li>
          <a
            href="#home"
            className="text-xl font-semibold bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500 bg-clip-text text-transparent hover:text-white transition duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-20 right-6 bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 md:hidden">
          <li>
            <a
              href="#home"
              className="block text-lg font-semibold text-white hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-lg font-semibold text-white hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-lg font-semibold text-white hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-lg font-semibold text-white hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="block text-lg font-semibold text-white hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
