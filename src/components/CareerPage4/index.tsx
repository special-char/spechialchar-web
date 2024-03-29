"use client";
import React from "react";
import Image from "next/image";
import { CareerPage4dataType } from "@/utils/types";

const CareerPage4 = ({ data }: CareerPage4dataType) => {
  return (
    <section className="">
      <div className="md:grid grid-cols-2 gap-6 lg:gap-x-16">
        <div className="mt-8">
          <h2 className="font-bold text-3xl lg:text-6xl">{data.title}</h2>
          <div className="mt-8 text-xs leading-5 lg:text-subtitle1 lg:flex  lg:gap-x-6">
            <div className="flex flex-col lg:gap-y-8">
              <h3 className="font-bold my-4 text-xl lg:text-2xl">
                {data.title1}

              </h3>
              <h3 className="font-bold my-4 text-xl  lg:text-2xl">
                {data?.title2}

              </h3>
              <h3 className="font-bold my-4 text-xl lg:text-2xl">
                {data.title3}

              </h3>
            </div>
            <div className="pl-4 my-4 border-l-2 border-yellow font-medium flex flex-col gap-y-4 ">
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <p>{data?.desc3}</p>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={data.src} alt="image" height={600} width={600} />
        </div>
      </div>
    </section>
  );
};

export default CareerPage4;
