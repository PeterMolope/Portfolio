"use client";
import React, { use, useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div>
      <Nav openMobileNav={openMobileNav} />
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        closeMobileNav={closeMobileNav}
      />
    </div>
  );
};

export default ResponsiveNav;
