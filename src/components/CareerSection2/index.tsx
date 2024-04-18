import { CareerSection1Type } from "@/utils/types";
import React from "react";
type Props = {
  title1: string;
  desc1: string;
  desc2: string;
}
const CareerOP = (props: Props) => {
  return (
    <section className="flex flex-col gap-12 lg:flex-row ">
      <div className="flex ">
        <h2 className="text-heading1">
          {props.title1}
        </h2>
      </div>
      <div className="grid grid-row-2 md:flex-row md:flex-1 gap-10 lg:mt-4">
        <p className="flex-1 text-subtitle1">{props.desc1}</p>
        <p className="flex-1 text-subtitle1">{props.desc2}</p>
      </div>
    </section>
  );
};

export default CareerOP;
