import { BgYellowType } from "@/utils/types";
import React from "react";

function WebBanner2({ data }: BgYellowType) {
  return (
    <>
      <section
        className="h-full w-full"
        style={{
          backgroundImage: `url(${data.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-4  my-12 md:mx-6 md:my-36">
          <div className="text-white  ">
            <h6 className="text-4xl font-bold md:text-5xl 2xl:text-6xl">
              {data.title1} <br />
              <span className="text-yellow">{data.title2}</span>
            </h6>
          </div>
        </div>
      </section>

      <div className="bg-yellow py-8 px-4 lg:py-12 lg:pr-[30rem]">
        <div className="px-container">
          <p className="font-medium  text-2xl leading-9">{data.description}</p>
        </div>
      </div>
    </>
  );
}

export default WebBanner2;
