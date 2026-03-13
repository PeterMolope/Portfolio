"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[linear-gradient(249.1deg,_rgba(11,206,250,1)_-6.5%,_rgba(65,46,248,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,_rgba(25,0,184,1)_0%,_rgba(0,0,0,1)_90%)]">
      {/* Content */}
      <div className="relative z-10 text-center ">
        <div className="sm:mb-6">
          <span className="inline-flex item-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0 self-center"></span>
            On the market for a Job
          </span>
        </div>
        {/* title */}
        <h1 className="text-4-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-purple-800 dark:text-yellow-300 [-webkit-text-stroke:2px_black]">
            Peter Molope
          </span>
        </h1>
        {/* type witer animation */}

        <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Software Engineer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
            className="font-mono"
          />
        </div>

        {/* description */}
        <p>
          A high-performance, full-stack web application built with Next.js 16,
          designed for scalability and seamless user experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
