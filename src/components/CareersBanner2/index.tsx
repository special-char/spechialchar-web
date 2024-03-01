
import React from "react";
import Image from "next/image";
import Banner2 from "@/public/images/CareersBanner2.webp";

const CareersBanner2 = () => {
  return (
    <div className="relative    md:mb-14 mb-5 ">
      <Image
        src={Banner2}
        alt="image"
            height={200}
            width={200}
        className="object-fit  w-full"
       
      />
    </div>
  );
};

export default CareersBanner2;

