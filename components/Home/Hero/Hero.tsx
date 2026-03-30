"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FolderOpen, Download } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]">
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-purple-800 dark:text-yellow-300">Peter Molope</span>
        </h1>

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

        <p className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
          Crafting exceptional digital experiences with modern technologies. Passionate about building scalable applications and teaching others.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-fit mx-auto sm:mx-0"
          >
            <FolderOpen className="w-5 h-5 mr-2" />
            View Projects
          </a>
          <a
            href="#_"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-fit mx-auto sm:mx-0"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
