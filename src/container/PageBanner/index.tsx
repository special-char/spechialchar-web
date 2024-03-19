import { cn } from "@/lib/utils";
import { PageBanner } from "@/utils/types";
import React from "react";

const PageBanner = ({
  data,
  className,
}: {
  data: PageBanner;
  className?: string;
}) => {
  return (
    <section
      className={cn("py-40 flex bg-white flex-wrap items-center", {
        [`${className}`]: className,
      })}
    >
      <div className="text-black  pl-8 pt-12">
        <h1 className="text-5xl md:text-7xl lg:text-9xl w-[75vw] font-extrabold mb-4 md:mb-12 ">
          {data.title1}
        </h1>
        <div className="text-gray-400 font-bold text-lg md:text-2xl lg:text-4xl">
          {data?.title2}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
