import React from "react";
import Image from "next/image";
import { aboutBannerType } from "@/utils/types";

const AboutBanner = ({ data }: aboutBannerType) => {
  return (
    <main className="bg-yellow relative overflow-hidden md:h-screen -z-10">
      <Image
        src={data.url}
        alt="image"
        height={800}
        width={800}
        className="object-fit absolute right-0 sm:right-12 md:right-24 lg:right-24 -top-0 sm:-top-12 md:-top-24 lg:-top-48 -z-10"
      />

      <section className="flex items-center  md:h-screen max-md:h-[calc(100vh-70px)]">
        <div className=" z-10  md:z-30 lg:z-40  ">
          <h1 className="flex flex-col gapy-5 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary">
            <span>{data.title}</span><span>{data.title2}</span>
          </h1>
          <h2 className=" text-xl md:text-subtitle1 lg:text-3xl  text-primary mt-8 sm:mt-8 md:mt-14 lg:mt-32">
            {data.description}
            <br />
            {data.subdescription}
          </h2>
        </div>
      </section>
    </main>
  );
};

export default AboutBanner;
