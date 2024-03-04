import React from "react";
import Image from "next/image";
// import Styles from "./banner.module.css";
import { EdBannerType } from "@/utils/types";
import Button from "@/components/Button";

const Banner = ({ data }: EdBannerType) => {
  return (
    <div className=" flex flex-row flex-wrap bg-darkblue gap-x-20 justify-evenly items-center px-20">
      <div className="flex flex-col justify-center w-[33rem] max-md:px-container gap-y-10 py-20">
        <div className="flex flex-col max-md:justify-center items-center gap-y-10">
          <div className="flex flex-wrap text-white font-extrabold text-5xl max-sm:text-2xl">
            {data.title}
          </div>
          {data.description && (
            <div className="text-white">&quot;{data.description}&quot;</div>
          )}
        </div>
        <div className="">
          <Button>contect Us</Button>
        </div>
      </div>
      {data.url && (
        <div className="">
          <Image
            src={data.url}
            alt={"Banner Image"}
            width={650}
            height={600}
            style={{ objectFit: "contain" }}
          />

          {/* <div className="absolute bg-yellow rounded-full lg:w-96 lg:h-[30rem] md:w-72 md:h-80 sm:w-9  sm:h-24 lg:right-36 md:right-3 max-sm:inset-0 animate-blob max-sm:animate-none md:px-container"></div> */}
        </div>
      )}
    </div>
  );
};

export default Banner;
