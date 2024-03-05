import Image from "next/image";
import React from "react";
import MobileImage from '@/public/mobileapp-header-1.webp'

const MobileMain = () => {
  return (
    <section className="h-full w-full bg-[#E0E0E0] overflow-hidden">
     <div className="m-0 mx-4 md:mx-6 gap-y-8 grid md:relative md:mb-[-340px] md:pt-20 lg:mb-[-500px] lg:mt-[-100px] 2xl:mb-[-500px] 2xl:mt-[-50px]">
        <div className="gap-y-8 grid md:relative md:pr-80 md:top-24  lg:top-36 2xl:right-6">

        <h6 className="text-3xl font-bold md:text-5xl lg:pr-96 2xl:text-7xl ">Mobile app 
development
company </h6>

        <div className="lg:text-lg 2xl:pr-96 2xl:text-2xl md:pr-14 lg:pr-80 font-medium ">
        We create custom mobile Apps that beat business challenges, generate revenue and hit millions of downloads
        </div>

        <div>
            <button className="bg-blue p-2 px-16  text-lg  py-4 text-white">Hire app development &rarr;</button>
        </div>
        </div>
        <div className="object-cover md:relative md:bottom-[400px] md:left-[320px] lg:left-[420px] lg:bottom-[400px] 2xl:left-[500px] 2xl:bottom-[450px]  ">
            <Image src={MobileImage} alt="Mobile" className=" md:w-[680px] lg:w-[850px] 2xl:w-[950px]"/>
        </div>
      </div>
    </section>
  );
};

export default MobileMain;
