// import { BgBannerType } from "@/utils/types";
import React from "react";

type Props = {
  url:string,
  title1:string,
  title2:string,
}

const ImageBanner = (props:Props) => {
  return (
    <section
      className="h-full w-full"
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" my-12 md:my-36">
        <div className="text-background  ">
          <h2 className="text-heading1 font-extrabold md:text-5xl lg:text-6xl max-sm:text-3xl">
            {props.title1} <br />
            <span className="text-yellow"><p>{props.title2}</p></span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
