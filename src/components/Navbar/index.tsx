"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavbarLogo from "../../../public/Navbar.svg";
import DropdownSection from "../Dropdown/index";
import Navdropdown from "../Navdropdown";
import Close from "@/public.close-icon.svg";
import Humburger from "@/public.three-horizontal-lines-icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { title } from "process";
import DesktopDropdown from "../DesktopDropdown";
import { Button } from "../ui/button";
import MobileNavbar from "../MobileNavbar";


const Navbar = () => {
  return (
    <header className="h-full w-full bg-black py-4 px-5 ">
      <div className="flex justify-between items-center">
        <div>
          <NavbarLogo />
        </div>
        {/* <--webView---> */}
        <div className="hidden lg:block">
          {/* <--- not using Map ---> */}
          <DropdownSection />
          {/* <---using Map ----> */}
          {/* <Navdropdown /> */}
          {/* <DesktopDropdown/> */}
        </div>
        {/* <---Mobilview----> */}
        <div className="lg:hidden ">
         <MobileNavbar/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
