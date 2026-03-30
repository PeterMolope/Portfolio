"use client";
import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-12">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="text-xl font-bold text-indigo-700">
            &lt;Dev/&gt;
          </a>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:peter@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            by Peter Molope
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-800 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
