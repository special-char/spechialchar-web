"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/public/icons/itrex.svg";
import Facebook from "@/public/icons/facebook.svg";
import Instagram from "@/public/icons/instagram.svg";
import Linkedin from "@/public/icons/Linkedin.svg";
import Youtube from "@/public/icons/youtube.svg";
import Twitter from "@/public/icons/twitter.svg";
import Image from "next/image";
import { footerdata, footericon } from "@/lib/constData";
import FooterCirti2 from "../IconFooter";
import { FooterdataType } from "@/utils/types";
import SocialIcon from "../SocialIcon";

const Footer = ({ data }: FooterdataType) => {
  return (
    <footer className="z-10 lg:w-full md:px-container overflow-hidden flex bg-black justify-center items-center lg:pt-24">
      <div className=" text-white w-full grid grid-cols-1 gap-y-20 max-sm:gap-y-12 sm:py-14 py-10">
        <div className="flex flex-wrap lg:gap-x-64 md:gap-24 max-sm:gap-10">
          <div className="">
            <Link href={"#"}><Logo /></Link>
          </div>
          <div className="flex font-semibold">
            <div className="lg:text-5xl md:text-4xl sm:text-lg lg:w-[54rem] flex flex-wrap">
              {data.title}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:text-xl lg:gap-x-[13rem] md:gap-20 max-sm:gap-5">
          <div className="">
            <p>Office:</p>
            <p className="w-40">{data.address}</p>
          </div>
          <div className="flex flex-col justify-between gap-y-10">
            <div className="flex flex-col">
              <div>{data.email}</div>
              <div>{data.mobile}</div>
            </div>
            <div className="flex items-center gap-8">
              <SocialIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-x-[15rem] md:gap-x-32 max-sm:gap-8">
          <div className="flex flex-col text-white">
            <p>
              <Link href={"#"}>{data.privacy}</Link>
            </p>
            <p className="">{data.copyright}</p>
          </div>
          <div className="flex flex-row overflow-x-auto gap-10">
            <FooterCirti2 />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
