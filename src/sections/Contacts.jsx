import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { EmailJSResponseStatus } from "@emailjs/browser";
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nebuhwh", // from EmailJS dashboard
        "template_zumae6b", // from EmailJS template
        form.current,
        "0ZUWh9KO4oY5SvNz4" // from EmailJS account (Public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
        },
        (error) => {
          console.log(error);
          alert("Something went wrong ❌");
        }
      );
  };
  return (
    <section
      id="contacts"
      className="relative overflow-x-hidden inset-0 min-h-screen w-screen bg-gray-950  text-white flex flex-col items-center px-6 py-16 gap-6"
    >
      {/* Background Semi Circles */}
      {/* <div className="absolute top-10 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-10 -right-20 w-72 h-72 bg-gradient-to-bl from-purple-500/40 to-cyan-600/40 rounded-full blur-3xl animate-pulse"></div> */}
      {/* <h1 className="text-4xl md:text-6xl font-bold mb-12 text-blue-400 mt-5">Contact Me</h1> */}

      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-sm
                  bg-gradient-to-r from-blue-500/30 to-transparent 
                  blur-3xl"></div> */}

      {/* Right semicircle */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 
                  w-72 h-72 rounded-full
                  bg-gradient-to-l from-cyan-500/30 to-transparent 
                  blur-3xl"></div> */}

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
      <h2 className=" text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent md:text-6xl  mb-12  mt-4 text-center transition duration-200 ">
        Contacts
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl mt-10">
        {/* Connect with Me */}
        <div className="flex flex-col items-center text-center px-4">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            Connect with Me
          </h2>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="mailto:your.email@example.com"
              className="p-4 bg-cyan-500 rounded-full hover:bg-cyan-600 transition text-white text-2xl"
            >
              <MdOutlineEmail />
            </a>
            <a
              href="https://x.com/Hardik_1014"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-500 rounded-full hover:bg-blue-600 transition text-white text-2xl"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/hardik-shiromani123/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-700 rounded-full hover:bg-blue-800 transition text-white text-2xl"
            >
              <BiLogoLinkedinSquare />
            </a>
            <a
              href="https://github.com/hardikshiromani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition text-white text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Send a Message */}
        <div className="flex flex-col items-center text-center px-4">
          <h2 className="text-2xl font-semibold text-purple-400 mb-6">
            Send a Message
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 w-full max-w-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="Email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
            />
            <textarea
              placeholder="Your Message"
              name="Message"
              rows="5"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
