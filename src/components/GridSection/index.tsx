import { uiSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const GridSection = ({ data }: uiSectionType) => {
  return (
    <div key={data.id} className="border-b-2 border-b-second">
      <div className="text-heading3 font-extrabold">
        {data?.title1}
        {data?.title}
      </div>
      <div className=" text-md max-md:text-lg py-10 text-gray-400 font-light">
        {data.description}
      </div>
    </div>
  );
};

export default GridSection;
