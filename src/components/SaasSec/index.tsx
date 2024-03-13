import { saasSection } from "@/lib/constData";
import { SaasSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const SaasGrid = ({ data }: SaasSectionType) => {
  return (
    <>
      <div className="border-b-2 border-b-second">
        <div className="text-3xl font-extrabold">
          {data?.id}.{data.title}
        </div>
        <div className=" text-2xl max-md:text-lg py-10 text-gray font-light">
          {data.description}
        </div>
      </div>
    </>
  );
};

export default SaasGrid;
