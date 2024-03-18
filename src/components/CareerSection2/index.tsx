import { CareerSection1Type } from "@/utils/types";
import React from "react";

const CareerOP = ({ data }: CareerSection1Type) => {
  return (
    <section className="flex flex-col gap-12 lg:flex-row ">
      <div className="flex ">
        <h2 className="lg:text-6xl font-bold md:text-4xl text-4xl ">
          {data.title1}
        </h2>
      </div>
      <div className="grid grid-row-2 md:flex-row md:flex-1 gap-10 lg:mt-4">
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

export default CareerOP;
