import React from "react";
import NavbarLogo from "../../../public/icons/TSC-logo.svg";
import MobileNavbar from "../MobileNavbar";
import Link from "next/link";
import HeaderDesktop from "../HeaderDesktop";
import Header from "../Header";

const Navbar = () => {
  return (
    <Header>
      <div className="flex justify-between items-start">
        <Link title="home-link" href="/">
          <NavbarLogo className="lg:mt-3 h-12 w-40 " />
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
    </Header>
  );
};

export default Navbar;
