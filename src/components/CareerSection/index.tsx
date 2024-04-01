import React from "react";
import { CareerSectionType } from "@/utils/types";

const CareerSection = ({ data }: CareerSectionType) => {
  return (
    <section className="  flex flex-col gap-10 lg:flex-row  ">
      <div className="flex-1 ">
        <h2 className="lg:text-6xl font-bold md:text-4xl text-3xl">
          {data.title1}
        </h2>
        <h3 className="lg:text-xl md:text-base text-base font-bold lg:py-10 py-4">
          {data.title2}
        </h3>
      </div>
      <div className="grid grid-cols-2 lg:flex-row lg:flex-1 gap-10 lg:mt-4">
        <div className="flex-1 lg:text-xl md:text-base text-sm">
          {data.desc1}
        </div>
        <div className="flex-1 lg:text-xl md:text-base text-sm">
          {data.desc2}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
