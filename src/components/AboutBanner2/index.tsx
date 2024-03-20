import { aboutBanner2 } from "@/lib/constData";
import { cn } from "@/lib/utils";
import { aboutBanner2Type, aboutBannerType } from "@/utils/types";
import Image from "next/image";
import React from "react";

const AboutBanner2 = ({ data }: aboutBanner2Type) => {
  return (
    <section className="bg-second">
      <div className="sm:text-7xl text-5xl font-bold">{data.heading}</div>
      {aboutBanner2.section.map((item, i) => {
        return (
          <>
            <div className="bg-second max-lg:h-[89vh] px-container overflow-hidden">
              <div
                className={cn(
                  item.id % 2 !== 0
                    ? "flex flex-row-reverse max-sm:flex-wrap max-sm:flex-row"
                    : "md:flex md:flex-1 max-sm:flex-wrap max-sm:flex-row"
                )}
              >
                <div className="h-[70vh] w-full sm:text-[30rem] max-sm:text-[20rem] max-lg:justify-center lg:justify-evenly flex  relative ">
                  {item.number}
                  <Image
                    src={item.url}
                    alt={"image"}
                    width={600}
                    height={600}
                    className="absolute lg:top-[34%] max-sm:top-[36%] max-lg:top-[60%] max-lg:left-[10%] lg:left-[20%] "
                  />
                </div>
                <div className="md:text-3xl text-2xl  sm:mt-72 w-full  gap-x-[0.12rem]">
                  <span className="font-bold">{item.title1}</span>
                  <span>{item.title2}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default AboutBanner2;
