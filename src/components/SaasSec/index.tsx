import { saasSection } from "@/lib/constData";
import { SaasSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const SaasGrid = ({ data }: SaasSectionType) => {
  return (
    <>
      <div className="">
        <div className="text-2xl font-extrabold">
          {data?.id}
          {data.title}
        </div>
        <div className="text-lg max-md:text-lg py-10 text-gray-500 font-light">
          {data.description}
        </div>
      </div>
    </>
  );
};

export default SaasGrid;
