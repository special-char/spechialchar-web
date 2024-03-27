import { cn } from "@/lib/utils";
import { pageBannerType } from "@/utils/types";
import React from "react";

const PageBanner = ({
  data,
  className,
  text,
}: {
  data: pageBannerType;
  className?: string;
  text?: string;
}) => {
  return (
    <section
      className={cn("h-screen py-40 flex bg-white flex-wrap items-center", {
        [`${className}`]: className,
      })}
    >
      <div className="text-black  pl-8 pt-12">
        <h1 className="text-5xl md:text-7xl lg:text-9xl w-[75vw] font-extrabold mb-4 md:mb-12 ">
          {data.title1}
        </h1>
        <div
          className={cn(
            "text-gray-800 font-bold text-lg md:text-2xl lg:text-4xl",
            {
              [`${text}`]: text,
            }
          )}
        >
          {data?.title2}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
