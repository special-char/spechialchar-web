

import React from "react";
import Image from "next/image";
import AboutBannerImg from "@/public/images/AboutBanner1.webp";

const CaseBanner = () => {
  return (
    <main className="bg-orange relative overflow-hidden ">
      <Image
        src={AboutBannerImg}
        alt="image"
        height={800}
        width={800}
        className="object-fit absolute right-0 sm:right-12 md:right-24 lg:right-48 -top-0 sm:-top-12 md:-top-24 lg:-top-48 "
      />

      <div className="p-4 sm:p-4 md:p-16 lg:p-20 xl:p-32 2xl:p-40 flex items-center mt-11 h-screen sm:h-auto ">
        <div className=" z-10  md:z-30 lg:z-40 xl:z-50 2xl:z-60 ">
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black">
          Your innovation
          </h1> 
          
          <div className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-black mt-2 sm:mt-1 md:mt-6 lg:mt-10 xl:mt-12 2xl:mt-14 ">
            partner
          </div>
      <h1 className=" text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black mt-8 sm:mt-8 md:mt-14 lg:mt-16 xl:mt-16 2xl:mt-20">
        We get a buzz out of unlocking the power of emerging tech for both
        <br />
        big-name enterprises and ambitious startups.
      </h1>
        </div>
      </div>

    </main>
  );
};

export default CaseBanner;
