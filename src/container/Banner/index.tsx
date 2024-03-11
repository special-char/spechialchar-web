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
      className={cn(
        "h-screen w-full bg-black text-white flex items-center justify-center max-md:pt-20",
        {
          [`${className}`]: className,
        }
      )}
    >
      <div className=" flex flex-wrap lg:flex-1 gap-x-40 md:flex-row items-center justify-center">
        <div className="lg:w-[30rem] gap-y-10 z-20 flex justify-evenly flex-col sm:justify-center">
          <h1 className=" text-heading1 lg:text-7xl font-bold ">
            {data.title}
          </h1>

          <div className="lg:text-subtitle1 md:text-subtitle2 ">
            {data.description}
          </div>

          <div className="grid justify-start">
            <Button
              variant={"secondary"}
              size={"xl"}
              className="flex flex-wrap group text-base"
            >
              {data.button}
              <span className="text-black group-hover:text-white">
                &nbsp;&rarr;
              </span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center object-contain">
          <Image
            src={data.imageurl}
            alt="image"
            height={500}
            width={500}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
