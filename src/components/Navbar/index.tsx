"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "../../../public/icons/Logo New Website.svg";
import MobileNavbar from "../MobileNavbar";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import HeaderDesktop from "../HeaderDesktop";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={cn(
        "w-full max-w-screen z-20 absolute top-0 py-2 bg-black transition-all ease-in-out duration-500",
        {
          ["max-lg:bg-black"]: visible,
          ["max-lg:-translate-y-full"]: !visible,
        }
      )}
    >
      <div className="flex justify-between items-start">
        <Link href="/">
          <NavbarLogo className="lg:my-2 h-12 w-40" />
        </Link>
        {/* <--webView---> */}
        <div className="hidden lg:block w-full">
          <HeaderDesktop />
        </div>
        {/* <---Mobilview----> */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
