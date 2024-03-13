import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BannerType } from "@/utils/types";
import Image from "next/image";
import React from "react";

const Banner = ({
  data,
  className,
}: {
  data: BannerType;
  className?: string;
}) => {
  console.log(className);

  return (
    <section
      className={cn("h-screen w-full bg-black text-white flex items-center", {
        [`${className}`]: className,
      })}
    >
      <div className=" grid md:grid-cols-[40%_1fr] grid-cols-1 items-center lg:gap-x-40 sm:pt-20 max-sm:pt-10 max-sm:gap-y-7  justify-center">
        <div className="lg:w-[30rem] md:gap-y-10 max-sm:gap-y-4 flex justify-evenly flex-col sm:justify-center">
          <h1 className=" text-heading1 lg:text-7xl md:text-4xl sm:text-2xl max-sm:text-2xl font-bold ">
            {data.title}
          </h1>

          <div className="lg:text-subtitle1 md:text-subtitle2 ">
            {data.description}
          </div>

          <div>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                {data?.button1} <span>{data.button2}</span>
                <span>&rarr;</span>
              </span>
            </Button>
          </div>
        </div>
        <div className="lg:relative flex justify-center items-center ">
          <Image
            src={data.imageurl}
            alt="image"
            height={500}
            width={500}
            className="flex flex-wrap object-scale-down"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
