"use client";
import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/Constant/Data";

const Experience = () => {
  const timelineItems = experiences.map((item, index) => ({
    ...item,
    date: item.period,
    tags: item.technologies,
    position: index % 2 === 0 ? "right" : "left",
  }));

  return (
    <div id="experience" className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience & <span className="text-purple-700">Education</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and academic background
        </p>
      </div>

      <div className="relative px-6 max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-blue-900 md:-translate-x-px"></div>

        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              item.position === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
              {item.type === "work" ? (
                <Briefcase className="w-4 h-4 text-blue-500" />
              ) : (
                <GraduationCap className="w-4 h-4 text-blue-500" />
              )}
            </div>

            <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 text-sm text-blue-500 mb-2">
                  <span className="px-3 py-1 rounded-full bg-blue-600/10 font-medium">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{item.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-indigo-500 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
