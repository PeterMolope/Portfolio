import { Navlinks } from "@/Constant/Constant";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen"></div>

      {/* Navlinks with Gradient and Rounded Edges */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gradient-to-br from-blue-900 to-black rounded-r-3xl z-1050">
        {Navlinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white hover:text-blue-300 transition-colors duration-200">
                {link.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
