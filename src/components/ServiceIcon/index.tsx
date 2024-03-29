import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/utils/types";

const ServiceIcon = ({ data }: ServiceItem) => {
  return (
    <div className="">
      <div className=" lg:gap-5 ">
        <div className="flex flex-col gap-y-4 gap-2">
          <div className="lg:pb-4 sm:pb-2">
            {data?.url ? (
              <Image src={data?.url} height={50} width={50} alt="image" />
            ) : (
              <></>
            )}
          </div>
          <div>
            <h2 className="font-bold lg:text-3xl md:text-xl text-lg">
              {data.title}
            </h2>
          </div>
          <div className="lg:text-xl md:text-sm sm:text-sm text-slate-500 md:pr-6 lg:pr-4">
            {data.description}{" "}
          </div>
          <div className="lg:text-xl md:text-sm sm:text-sm font-extrabold md:pr-6 lg:pr-4 gap-3 ">
          {data.languages}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIcon;
