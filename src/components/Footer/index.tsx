"use client";
import React from "react";
import Link from "next/link";
import FooterLogo from "@/public.icons/Logo New Website.svg";
import { FooterdataType } from "@/utils/types";
import SocialIcon from "./SocialIcon";
import FooterCirti from "./FooterCirti";

const Footer = ({ data }: FooterdataType) => {
  return (
    <footer className="z-20 md:h-[90vh] max-sm:h-screen sm:h-screen overflow-hidden flex bg-primary">
      <div className=" text-background w-full grid max-lg:grid-cols-1 py-12 justify-between items-center">
        <div className="flex flex-wrap gap-x-40 max-sm:gap-y-9 sm:gap-y-10">
          <div className="w-64 overflow-hidden">
            <Link href={"#"}>
              <FooterLogo className="-ml-4" />
            </Link>
          </div>
          <div className="flex font-bold lg:text-5xl md:text-4xl sm:text-4xl max-sm:4xl w-[50rem]">
            <div className=" flex flex-wrap">{data.title}</div>
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-x-40 max-md:gap-x-24 md:gap-x-24 sm:gap-x-[5.9rem] max-sm:gap-y-10">
          <div className="md:w-64 ">
            <p className="text-subtitle1">Office:</p>
            <p className="md:w-80 text-textgray text-md">{data.address}</p>
          </div>
          <div className="flex flex-col max-md:justify-between gap-y-8">
            <div className="flex flex-col sm:text-subtitle1 max-sm:text-md">
              <div>
                <Link href={"#"}>{data.email}</Link>
              </div>
              <div>
                <Link href={"#"}>{data.mobile}</Link>
              </div>
            </div>
            <div className="flex items-center gap-8 max-sm:justify-between">
              <SocialIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-x-40 max-md:gap-x-16 sm:gap-x-20  max-sm:gap-y-10">
          <div className="flex flex-col md:w-64 text-background">
            <p>
              <Link href={"#"} className=" text-textgray text-sm">
                {data.privacy}
              </Link>
            </p>
            <p className="text-textgray ">&copy;{data.copyright}</p>
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
