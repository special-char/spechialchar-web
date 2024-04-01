import { CareerManyType } from "@/utils/types";
import React from "react";

type Props = {};

const CareerMany = ({ data }: CareerManyType) => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-heading1">
          {data.title}
        </h2>
      </div>
      <div className="lg:py-10 p-4">
        <h3 className=" text-subtitle1 text-center">
          {data.desc}
        </h3>
        <h3 className="text-subtitle1 text-center">
          {data.desc1}
        </h3>
        <h3 className=" text-subtitle1 text-center">
          {data.desc2}
        </h3>
      </div>
    </section>
  );
};

export default CareerMany;
