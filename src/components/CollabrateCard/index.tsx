import React from "react";
import Image from "next/image";
import { ColllabrateCardType } from "@/utils/types";

const CollabrateCard = ({ data }: ColllabrateCardType) => {
  return (
    <div>
      <div className="md:flex-row flex justify-start flex-col lg:gap-8 m-4 md:gap-3 text-background ">
        <div className="md:justify-center flex-1/2 items-center">
          <Image
            src={data.url}
            alt="collaborate Image"
            height={150}
            width={150}
          />
        </div>
        <div className="mt-4 md:mt-0 mb-1 flex-1  ">
          <h3 className="lg:text-3xl md:text-subtitle1 font-extrabold">
            {data.title}
          </h3>
          <div className="mt-1.5 lg:text-base md:text-sm  text-textgray">
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollabrateCard;
