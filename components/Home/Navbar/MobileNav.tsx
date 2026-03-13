import { Navlinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

type MobileNavProps = {
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
};

const MobileNav = ({ isMobileNavOpen, closeMobileNav }: MobileNavProps) => {
  // Slide from the left (-100% to 0)
  const mobileNavClasses = isMobileNavOpen
    ? "translate-x-0"
    : "-translate-x-full";

  return (
    <div>
      {/* Overlay: We use opacity and pointer-events instead of translate here */}
      <div
        onClick={closeMobileNav}
        className={`fixed inset-0 z-[10002] bg-black transition-all duration-500 ${
          isMobileNavOpen ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Nav Container */}
      <div
        className={`fixed left-0 top-0 h-full w-[80%] sm:w-[60%] z-[10005] 
        bg-gradient-to-br from-blue-900 to-black rounded-r-3xl 
        flex flex-col justify-center space-y-10 text-white 
        transition-all duration-500 transform ${mobileNavClasses}`}
      >
        {Navlinks.map((link, index) => (
          <Link key={index} href={link.href} onClick={closeMobileNav}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white hover:text-blue-300 transition-colors duration-200">
              {link.name}
            </p>
          </Link>
        ))}

        {/* Close Icon - Positioned absolute to the container */}
        <X
          onClick={closeMobileNav}
          className="absolute top-[1.5rem] right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
    </div>
  );
};

export default MobileNav;
