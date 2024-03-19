"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "../../../public/icons/Navbar.svg";
import DesktopDropdown from "../DesktopDropdown";
import MobileNavbar from "../MobileNavbar";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import HeaderDesktop from "../HeaderDesktop";
import { cn } from "@/lib/utils";

const Navbar = ({ data }: Header) => {
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
    <header
      className={cn(
        " w-full z-20 fixed py-2 bg-black transition-all ease-in-out duration-500",
        {
          ["bg-black"]: scrollPosition > 100,
          // ["bg-transparent hover:bg-black "]: scrollPosition <= 100,
        }
      )}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="lg:hidden">
            <NavbarLogo className="" />
          </div>
        </Link>
        {/* <--webView---> */}
        <div className="hidden lg:block w-full">
          {/* <DesktopDropdown data={accordionItems} /> */}
          <HeaderDesktop data={accordionItems} />
        </div>
        {/* <---Mobilview----> */}
        <div className="lg:hidden ">
          <MobileNavbar data={accordionItems} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
