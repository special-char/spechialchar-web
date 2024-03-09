"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavbarLogo from "../../../public/Navbar.svg";
import DropdownSection from "../Dropdown/index";
import Navdropdown from "../Navdropdown";
import Close from "@/public.close-icon.svg";
import Humburger from "@/public.three-horizontal-lines-icon.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const [click, setClicked] = useState(false);
  const toggleDropdown = () => {
    setClicked(!click);
  };
  return (
    <header className="h-full w-full bg-black py-4 px-5 ">
      <div className="flex justify-between items-center">
        <div>
          <NavbarLogo />
        </div>
        {/* <--webView---> */}
        <div>
          {/* <DropdownSection/> */}
          <Navdropdown />
          {/* <Dropdown/> */}
        </div>
        {/* <---Mobilview----> */}
        <div className="lg:hidden ">
          <div onClick={toggleDropdown}>
            <Humburger className="fill-white" />
          </div>
          {click && (
            <div className="absolute top-0 left-0 bg-black w-screen h-screen p-4">
              <div className="flex justify-between items-center">
                <div>
                  <NavbarLogo />
                </div>

                <div onClick={toggleDropdown} className="">
                  <Close className="h-6 w-8 fill-white " />
                </div>
              </div>
              <div className="text-white pt-10">
               
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
