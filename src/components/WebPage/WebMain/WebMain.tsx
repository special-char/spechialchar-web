import Image from "next/image";
import React from "react";
import Istock from '@/public/iStock-903282826-min.webp'

const WebMain = () => {
  return (
    <section className="h-full w-full bg-[#01142B] text-white overflow-hidden">
      <div className="m-0 mx-4  gap-y-8 grid md:relative md:mb-[-530px] lg:mb-[-600px] lg:mt-[-100px] 2xl:mb-[-230px] 2xl:mt-16">
        <div className="gap-y-8 grid md:relative md:pr-80 md:top-24  lg:top-36 2xl:right-6">

        <h6 className="text-3xl font-bold md:text-5xl lg:pr-96 2xl:text-7xl ">Custom web development services</h6>

        <div className="lg:text-lg 2xl:pr-96 2xl:text-2xl lg:pr-64">
          Make a unique impact online now to grow business with end-to-end
          custom web development services from ITRex
        </div>

        <div>
            <button className="bg-blue p-2 px-8 text-lg  py-4">Get in touch &rarr;</button>
        </div>
        </div>
        <div className="object-cover md:relative md:bottom-[450px] md:left-[320px] lg:left-[409px] 2xl:left-[750px] 2xl:bottom-96  ">
            <Image src={Istock} alt="Istock" className=" md:w-[650px] lg:w-[800px] 2xl:w-[500px]"/>
        </div>
      </div>
    </section>
  );
};

export default WebMain;
