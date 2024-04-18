import { CareerManyType } from "@/utils/types";
import React from "react";

type Props = {
  title: string;
  desc1: string;
  desc2: string;
  desc: string;
};

const CareerMany = (props: Props) => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-heading1">
          {props.title}
        </h2>
      </div>
      <div className="lg:py-10 p-4">
        <p className=" text-subtitle1 text-center">
          {props.desc}
        </p>
        <p className="text-subtitle1 text-center">
          {props.desc1}
        </p>
        <p className=" text-subtitle1 text-center">
          {props.desc2}
        </p>
      </div>
    </section>
  );
};

export default CareerMany;
