"use client";
import React, { useEffect, useState } from "react";
import NavbarLogo from "../../../public/icons/TSC-logo.svg";
import MobileNavbar from "../MobileNavbar";
import Link from "next/link";
import HeaderDesktop from "../HeaderDesktop";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Colors from "@/utils/colors";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos == 100);
      setPrevScrollPos(currentScrollPos);
    };

    const handleScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, [prevScrollPos]);

  const isHomepage = window.location.pathname === "/";
  const isservice = window.location.pathname === "/services/software-engineering";

  return (
    <header
      className={cn(
        `w-full fixed max-w-screen z-20 top-0 py-2 transition-all ease-in-out duration-300  ${isHomepage ? Colors?.color : Colors?.color1}  ${isservice ? Colors?.color1 : Colors?.color}`,
        {
          ["max-lg:bg-background"]: visible,
          ["max-lg:-translate-y-full"]: !visible,
        }
      )}

    // style={{
    //   backgroundColor: isHomepage ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 1)"
    // }}
    >
      <div className="flex justify-between items-start">
        <Link title="home-link" href="/">
          <NavbarLogo className="lg:mt-3 h-12 w-40 " />
          {/* <div className="lg:my-2">
            <Image
              className=" lg:h-14 lg:w-40"
              src={"/images/TSC-Logo-1.png"}
              alt={"Tsc-logo"}
              title="TSC_Logo"
              height={100}
              width={100}
            />
          </div> */}
        </Link>
        {/* <--webView---> */}
        <div className="hidden lg:block w-full" >
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
