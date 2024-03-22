"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "../../../public/icons/Logo New Website.svg";
import MobileNavbar from "../MobileNavbar";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import HeaderDesktop from "../HeaderDesktop";
import { cn } from "@/lib/utils";

const Navbar = () => {
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
        }
      )}
    >
      <div className="flex justify-between items-start">
        <Link href="/">
          <div className="">
            <NavbarLogo className="lg:mt-3 h-12 w-40" />
          </div>
        </Link>
        {/* <--webView---> */}
        <div className="hidden lg:block w-full">
          <HeaderDesktop />
        </div>
        {/* <---Mobilview----> */}
        <div className="lg:hidden ">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
