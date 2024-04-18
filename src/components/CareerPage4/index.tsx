import React from "react";
import Image from "next/image";
import { CareerPage4dataType } from "@/utils/types";
type Props = {
  title: string;
  title1: string;
  title2: string;
  title3: string;
  desc1: string;
  desc2: string;
  desc3: string;
  src: string;
}
const CareerPage4 = (props: Props) => {
  return (
    <section className="">
      <div className="md:grid grid-cols-2 gap-6 lg:gap-x-16">
        <div className="mt-8">
          <h2 className="text-heading1">{props.title}</h2>
          <div className="mt-8 text-subtitle1 lg:flex  lg:gap-x-6">
            <div className="flex flex-col lg:gap-y-8">
              <h3 className="my-4 text-heading6">
                {props.title1}
              </h3>
              <p className="my-4 text-heading6">
                {props.title2}
              </p>
              <p className="my-4 text-heading6">
                {props.title3}
              </p>
            </div>
            <div className="pl-4 my-4 border-l-2 border-yellow font-medium flex flex-col gap-y-4 ">
              <p>{props.desc1}</p>
              <p>{props.desc2}</p>
              <p>{props.desc3}</p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={props.src}
            title="who-apply"
            alt="image"
            height={600}
            width={600}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerPage4;
