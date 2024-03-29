
import { careercity } from "@/lib/constData";
import { CareerCityType } from "@/utils/types";
import React from "react";
import Image from "next/image";

const CareerCity = ({ data }: CareerCityType) => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row-reverse gap-9 lg:py-5  ">
        <div className=" lg:p-3 ">
          <h2 className="lg:text-6xl font-bold md:text-4xl text-3xl ">
            {data.title}
          </h2>
        </div>
        <div className=" lg:text-xl md:text-base text-sm lg:py-12">
          {data.description}
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 py-5">
        {careercity.section.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center mb-4  md:mr-4 gap-4"
          >
            <Image
              src={item.url}
              height={400}
              width={400}
              alt="image"
              className="object-cover aspect-[4/3]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerCity;
