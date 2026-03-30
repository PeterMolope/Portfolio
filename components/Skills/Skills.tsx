"use client";
import React from "react";
import { skillCategories } from "@/Constant/Data";

const Skills = () => {
  return (
    <div id="skills" className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical <span className="text-purple-700">Skills</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies I've been working with recently
        </p>
      </div>

      <div className="space-y-12 w-[80%] mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group relative bg-white dark:bg-purple-950 shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center group-hover:from-purple-300 group-hover:to-blue-800 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
