"use client";
import React from "react";
import Link from "next/link";
import FooterLogo from "@/public.icons/Logo New Website.svg";
import { FooterdataType } from "@/utils/types";
import SocialIcon from "./SocialIcon";
import FooterCirti from "./FooterCirti";

const Footer = ({ data }: FooterdataType) => {
  return (
    <footer className="z-20 md:h-[90vh] h-screen overflow-hidden flex bg-specialblue">
      <div className=" text-background w-full grid max-lg:grid-cols-1 py-12 max-sm:gap-y-5 justify-between items-center">
        <div className="flex flex-wrap gap-x-40 max-sm:gap-y-8 sm:gap-y-10">
          <div className="lg:w-64 max-lg:w-48 overflow-hidden">
            <Link title="home-link" href={"/"}>
              <FooterLogo className="lg:-ml-4" />
            </Link>
          </div>
          <div className="flex font-bold  lg:text-heading2  max-lg:text-heading5 lg:w-[50rem] max-lg:w-96">
            <div className=" flex flex-wrap">{data.title}</div>
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-x-40 max-md:gap-x-24 md:gap-x-24 sm:gap-x-[5.9rem] max-sm:gap-y-8">
          <div className="md:w-64 ">
            <p className="text-subtitle1">Office:</p>
            <p className="md:w-60 text-background ">{data.address}</p>
          </div>
          <div className="flex flex-col max-md:justify-between gap-y-8">
            <div className="flex flex-col lg:text-subtitle1">
              <div>
                <Link title="email" href={"#"}>
                  {data.email}
                </Link>
              </div>
              <div>
                <Link title="mobile" href={"#"}>
                  {data.mobile}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-8 max-sm:justify-between">
              <SocialIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-x-40 max-md:gap-x-16 sm:gap-x-20  max-sm:gap-y-8">
          <div className="flex flex-col md:w-64 text-background">
            <p>
              <Link
                title="privacy"
                href={"#"}
                className=" text-background lg:text-subtitle1"
              >
                {data.privacy}
              </Link>
            </p>
            <p className="text-background">&copy;{data.copyright}</p>
          </div>
          <div className="flex flex-row overflow-x-auto gap-10">
            <FooterCirti />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
