"use client";
import React from "react";
import NavbarLogo from "../../../public/Navbar.svg";
import DesktopDropdown from "../DesktopDropdown";
import MobileNavbar from "../MobileNavbar";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";


const Navbar = ({data}:Header) => {
  return (
    <header className="h-full w-full bg-black py-4 px-5 ">
      <div className="flex justify-between items-center">
        <div>
          <NavbarLogo />
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
