// import { cn } from "@/lib/utils";
// import { pageBannerType } from "@/utils/types";
import React from "react";

const PageBanner = ({ title1, title2 }: { title1: string, title2: string }) => {
  return (
    <section
      className=
      "h-[75vh] py-40 flex bg-specialblue flex-wrap items-center"
    >
      <div className="text-background  pl-8 pt-12">
        <h1 className="text-heading1 w-[75vw] font-extrabold mb-4 md:mb-12 ">
          {title1}
        </h1>
        <h2
          className="text-subtitle3"
        >
          {title2}
        </h2>
      </div>
    </section>
  );
};

export default PageBanner;
