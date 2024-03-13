"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "../../../public/Navbar.svg";
import DesktopDropdown from "../DesktopDropdown";
import MobileNavbar from "../MobileNavbar";
import { Header } from "@/utils/types";
import { accordionItems } from "@/lib/constData";

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
      className=" w-full z-10 fixed py-2  "
      style={{
        backgroundColor:
          scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <NavbarLogo className="" />
        </div>
        {/* <--webView---> */}
        <div className="hidden lg:block w-full">
          <DesktopDropdown data={accordionItems} />
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
