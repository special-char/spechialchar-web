import React from "react";
import { CareerSectionType } from "@/utils/types";
type Props = {
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
}
const CareerSection = (props: Props) => {
  return (
    <section className="  flex flex-col gap-10 lg:flex-row  ">
      <div className="flex-1 ">
        <h2 className="text-heading1">
          {props.title1}
        </h2>
        <p className="text-subtitle1 lg:pt-24 py-4">
          {props.title2}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:flex-row lg:flex-1 gap-10 lg:mt-4">
        <div className="flex-1 text-subtitle1">
          {props.desc1}
        </div>
        <div className="flex-1 text-subtitle1">
          {props.desc2}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
