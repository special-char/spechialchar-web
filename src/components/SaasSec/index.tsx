import { ListSaasSectionType } from "@/utils/types";
import React from "react";

const SaasGrid = ({ data }: ListSaasSectionType) => {
  return (
    <>
      <div className="">
        <div className="text-2xl font-extrabold">
          {data?.id}
          {data.title}
        </div>
        <div className="text-lg max-md:text-lg pt-6  text-gray-500 font-light">
          {data.description}
        </div>
      </div>
    </>
  );
};

export default SaasGrid;
