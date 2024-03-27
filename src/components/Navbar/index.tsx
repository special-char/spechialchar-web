"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "../../../public/icons/Logo New Website.svg";
import MobileNavbar from "../MobileNavbar";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import HeaderDesktop from "../HeaderDesktop";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        "w-full fixed max-w-screen z-20 top-0 py-2 bg-background transition-all ease-in-out duration-500",
        {
          ["max-lg:bg-background"]: visible,
          ["max-lg:-translate-y-full"]: !visible,
        }
      )}
    >
      <div className="flex justify-between items-start">
        <Link href="/">
          {/* <NavbarLogo className="lg:my-2 h-12 w-40 max-lg:block hidden" /> */}
          <div className="lg:my-2">
            <Image
              className=" h-14 w-40"
              src={"/images/TSC-Logo-1.png"}
              alt={"Tsc-logo"}
              height={100}
              width={100}
            />
          </div>
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
