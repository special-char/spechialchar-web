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
            <div className="bg-second h-[80vh]">
              <div
                className={cn(
                  item.id % 2 !== 0
                    ? "flex flex-row-reverse max-sm:flex-wrap max-sm:flex-row"
                    : "md:flex md:flex-1 justify-evenly max-sm:flex-wrap max-sm:flex-row"
                )}
              >
                <div className=" w-full sm:text-[30rem] max-sm:text-[20rem] max-md:justify-center flex  relative">
                  {item.number}
                  <Image
                    src={item.url}
                    alt={"image"}
                    width={600}
                    height={600}
                    className="absolute top-[30%]"
                  />
                </div>
                <div className="md:text-3xl text-2xl sm:mt-96 w-full ">
                  {item.title}
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
