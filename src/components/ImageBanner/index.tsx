import { BgBannerType } from "@/utils/types";
import React from "react";


const ImageBanner = ({data}: BgBannerType) => {
  return (
    <section
      className="h-full w-full"
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-4 my-12 md:mx-2 md:my-36">
        <div className="text-white  ">
          <h6 className="text-5xl font-extrabold md:text-5xl lg:text-6xl ">
            {data.title1} <br />
            <span className="text-yellow-500">{data.title2}</span>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;