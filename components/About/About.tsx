"use client";
import React from "react";
import { MapPin, Briefcase, GraduationCap, Coffee } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-purple-700">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get to know the developer behind the code
        </p>
      </div>

      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <img
              alt="profile"
              loading="lazy"
              width="700"
              height="700"
              decoding="async"
              className="w-full h-full object-center rounded-xl"
              style={{ color: "transparent" }}
              src="/images/user.jpg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">A passionate developer who loves to create</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm a full-stack developer with over 5 years of experience building web applications. My journey started with curiosity about how websites work, and it has evolved into a passion for creating seamless, user-focused digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I'm dedicated to sharing knowledge. I've taught over 1000 students through online courses and mentorship programs. I believe in continuous learning and staying updated with the latest technologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-muted-foreground">Based in San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-muted-foreground">Open for freelance work</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-muted-foreground">CS Graduate from Stanford</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Coffee className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-muted-foreground">Powered by coffee & curiosity</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Students Taught</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
