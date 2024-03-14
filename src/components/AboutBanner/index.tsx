import React from "react";
import Image from "next/image";
import { aboutBannerType } from "@/utils/types";


const AboutBanner = ({data}:aboutBannerType ) => {
  return (
    <main className="bg-yellow-400 relative overflow-hidden h-screen -z-10">
      <Image
        src={data.url}
        alt="image"
        height={800}
        width={800}
        className="object-fit absolute right-0 sm:right-12 md:right-24 lg:right-24 -top-0 sm:-top-12 md:-top-24 lg:-top-48 -z-10"
      />

      <section className="flex  justify-start items-center mt-11 h-screen sm:h-auto ">
        <div className=" z-10  md:z-30 lg:z-40  ">
         <div className=" text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black  sm:mt-1 md:mt-32 lg:mt-36  ">
        {data.title}
          </div> 
          
          <div className=" font-bold  text-5xl sm:text-7xl md:text-8xl lg:text-9xl  text-black mt-2 sm:mt-1 md:mt-4 ">
            {data.title2}
          </div>
      <div className=" text-base sm:text-lg md:text-xl lg:text-3xl  text-black mt-8 sm:mt-8 md:mt-14 lg:mt-32">
        {data.description}
        <br />
            {data.subdescription}
      </div>
        </div>
      </section>
    </main>
  );
};

export default AboutBanner;