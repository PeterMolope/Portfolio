"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/Constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full `}
    >
      <div className="h-full flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
        {/**Logo**/}
        <Logo />
        {/**Navlinks**/}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>
        {/**CV Button**/}
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-300 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
        </div>

        {/**theme Button**/}
        <ThemeToggler />
        {/**Mobile Menu Button**/}

        <MenuIcon className="w-8 h-8 text-black dark:text-white lg:hidden cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
