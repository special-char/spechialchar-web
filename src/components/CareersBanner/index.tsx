

import React from "react";
import CareersBannerImg from "@/public/images/CareersBanner.webp";

const CareersBanner = () => {
  return (
  
      <div
        className=" w-full h-screen bg-cover bg-center md:max-w-none    items-center"
        style={{
          backgroundImage: `url(${CareersBannerImg.src})`,
        }}
      >
       
            <h1 className="text-[#f2aa4c] sm:text-5xl md:text-7xl  lg:text-8xl font-extrabold text-center pt-40 md:pt-72  ">
            Build things you’re <br />
            <span className="text-[#f2aa4c] pl-0 md:pl-28  lg:pl-16">proud of</span>
            <div className="text-white text-lg md:text-2xl mt-4 md:mt-12 lg:mt-14 md:pl-6  text-center ">
              Join a crew as motivated as you. Make cool stuff for global brands.
              <br />
              <span className=" md:pl-0 lg:pl-10">Level up, learn and grow.</span>
            </div>
          </h1>
        </div>
      
          
      
    
  );
};

export default CareersBanner;


