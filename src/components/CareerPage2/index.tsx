"use client";
import { CareerPage2dataType } from "@/utils/types";
import Image from "next/image";
import React from "react";

const CareerPage2 = ({ data }: CareerPage2dataType) => {
  return (
    <section className="">
      <div className="md:grid grid-cols-2 gap-6 lg:gap-x-16">
        <div className="">
          <Image src={data.src} alt="image" height={600} width={600} />
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-3xl lg:text-6xl">{data.title}</h2>
          <div className="mt-8 leading-6 flex flex-col gap-8 lg:text-subtitle1">
            <p>{data.des1}</p>
            <p>{data.des2}</p>
            <p>{data?.des3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPage2;
