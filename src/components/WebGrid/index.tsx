import React from "react";
import { WebGridType } from "@/utils/types";

const ServiceIcon = ({ data }: WebGridType) => {
  return (
    <div className="">
      <div className=" lg:gap-5 ">
        <div className="flex flex-col gap-y-4 gap-2">
          <div>
            <h2 className="text-heading5">{data.title}</h2>
          </div>
          <div className="text-subtitle2 text-primary md:pr-6 lg:pr-4">
            {data.description}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIcon;
