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

      <div className="bg-yellow p-8 lg:p-12">
        <div className="lg:px-2 lg:py-4 lg:pr-60">
          <p className="font-medium  text-xl">{data.description}</p>
        </div>
      </div>
    </>
  );
}

export default WebBanner2;
