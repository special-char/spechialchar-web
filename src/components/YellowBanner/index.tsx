import { BgYellowType } from "@/utils/types";
import React from "react";

type Props ={
  description:string
}

function YellowBanner(props:Props) {
  return (
    <section className="bg-yellow ">
      <div className="w-full py-6">
        <p className="text-subtitle3 md:max-w-[840px] w-full  ">
          {props.description}
        </p>
      </div>
    </section>
  );
}

export default YellowBanner;
