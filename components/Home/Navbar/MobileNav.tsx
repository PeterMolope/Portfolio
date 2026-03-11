import { Navlinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

type MobileNavProps = {
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
};
const MobileNav = ({ isMobileNavOpen, closeMobileNav }: MobileNavProps) => {
  const mobileNavClasses = isMobileNavOpen
    ? "translate-x-0"
    : "translate-x-[100%]";
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${mobileNavClasses} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen `}
      ></div>

      {/* Updated container with increased vertical spacing */}
      <div
        className={`text-white ${mobileNavClasses} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gradient-to-br from-blue-900 to-black rounded-r-3xl z-1050 space-y-10`}
      >
        {Navlinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white hover:text-blue-300 transition-colors duration-200">
                {link.name}
              </p>
            </Link>
          );
        })}
        {/**close icon */}
        <X
          onClick={closeMobileNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
