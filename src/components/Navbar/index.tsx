"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "../../../public/Navbar.svg";
import DesktopDropdown from "../DesktopDropdown";
import MobileNavbar from "../MobileNavbar";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";


const Navbar = ({data}:Header) => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="h-full w-full  py-2 px-5 lg:px-container "     >
      <div className="flex justify-between items-center" >
        <div>
          <NavbarLogo className="" />
        </div>
        {/* <--webView---> */}
        <div className="hidden lg:block">
          <DesktopDropdown data={accordionItems}/>
        </div>
        {/* <---Mobilview----> */}
        <div className="lg:hidden ">
         <MobileNavbar data={accordionItems}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
