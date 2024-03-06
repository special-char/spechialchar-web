import Image from "next/image";
import React from "react";
import { BannerType } from "@/utils/types";

const Banner = ({ data }: BannerType ) => {
  return (
    <section className="h-full w-full bg-black text-white overflow-hidden ">
    <div className="my-12 mx-4  gap-y-8 grid md:relative md:mt-[-1rem] md:mb-[-34rem] lg:mb-[-36rem]    ">
      <div className="gap-y-8 grid md:relative md:pr-80 md:top-24  lg:top-36 lg:right-6">

      <h1 className="text-4xl font-extrabold md:text-5xl lg:pr-96 lg:text-6xl ">{data.title}</h1>

      <div className="lg:text-xl text-base lg:pr-80 ">{data.description}</div>

      <div>
         
      </div>
      </div>
      <div className="object-cover md:relative md:bottom-[26rem] md:left-[24rem]  lg:left-[34rem] lg:bottom-[30rem]  ">
          <Image src={data.imageurl} alt="image" height={500} width={500} className=" md:w-[38rem] lg:h-full lg:w-[52rem] "/>
      </div>
    </div>
  </section>
  );
};

export default Banner;
