"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Download, SquareCode } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className={`transition-all fixed duration-200 h-[12vh] z-100 fixed w-full ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm" : ""
      }`}>
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-800 dark:bg-blue-400 w-10 h-10 rounded-lg flex items-center justify-center flex-col">
              <SquareCode className="text-white w-6 h-6" />
            </div>
            <h1 className="sm:text-xl hidden sm:block md:text-2xl text-blue-800 dark:text-blue-400 font-bold">
              &lt;Peter/&gt;
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
                href={item.href}
              >
                <p>{item.name}</p>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#_"
              className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            >
              <span className="relative z-20 flex items-center space-x-2 text-sm">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </span>
            </a>

            {/* Mobile Menu Toggle */}
            <Menu
              className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-1050 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <a key={item.name} href={item.href} onClick={toggleMenu}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {item.name}
            </p>
          </a>
        ))}
        <X
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
    </>
  );
};

export default Header;
