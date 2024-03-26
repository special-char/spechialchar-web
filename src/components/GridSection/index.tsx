import { gridsectiontype, uiSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const GridSection = ({ data }: gridsectiontype) => {
  return (
    <div key={data.id} className="border-b-2 border-b-second ">
      <div className="text-2xl font-bold">{data?.title1}</div>
      <div className=" sm:text-xl max-md:py-4 lg:py-5 py-10 text-gray-400 font-medium">
        {data.description}
      </div>
    </div>
  );
};

export default GridSection;
