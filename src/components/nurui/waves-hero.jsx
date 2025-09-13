"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/nurui/button";
import Typewriter from "typewriter-effect";
import { ArrowRight } from "lucide-react";
const WavesHero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-16">
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Curved Lines */}
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Top Curves */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
            }}
            d="M 100 100 Q 300 0 500 100 T 900 100"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
              delay: 0.5,
            }}
            d="M 0 200 Q 200 100 400 200 T 800 200"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="1"
          />
          {/* Bottom Curves */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
              delay: 1,
            }}
            d="M 100 600 Q 300 500 500 600 T 900 600"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
          />
        </svg>

        {/* Straight Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "-100%",
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
              className="absolute right-0"
              style={{
                top: `${15 + i * 10}%`,
                height: "1px",
                width: "100%",
                background: `linear-gradient(90deg, transparent, ${
                  i % 2 === 0 ? "#22d3ee" : "#8b5cf6"
                }60, transparent)`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-[1]">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -left-10 md:-left-32 lg:-left-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-blue-500/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-black/40 blur-3xl"
        />
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl"
        /> */}
        {/* Right circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-10 md:-right-32 lg:-right-48 top-1/2 -translate-y-1/2 
             h-80 w-80 md:h-96 md:w-96 rounded-full 
             bg-cyan-400/30 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-[3] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hello I'm
          </h1>
          {/* <p className="mx-auto max-w-2xl text-muted text-gray-400 sm:text-xl">
            Nuestra plataforma le permite a tu negocio tener acceso a rieles de
            pagos internacionales en segundos en vez de horas
          </p> */}
          <div className="text-4xl font-bold mb-6 text-green-400">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer",
                  "React Enthusiast",
                  "API Architect",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 text-lg text-black hover:from-cyan-500 hover:to-violet-600">

              <a
                href="#projects"
                // className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
              >
              See Projects

              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white/10 text-lg text-white hover:bg-white/10"
            >
              <a
                href="#contacts"
                // className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white transition duration-200"
              >
              Connect
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default WavesHero;
