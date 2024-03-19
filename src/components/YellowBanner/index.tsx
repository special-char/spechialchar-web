import { BgYellowType } from "@/utils/types";
import React from "react";

function YellowBanner({ data }: BgYellowType) {
  return (
    <section className="bg-second ">
      <div className="w-full py-6">
        {/* leading-5 lg:text-2xl md:leading-6 lg:leading-8 */}
        <p className="font-normal md:max-w-[840px] w-full leading-5 lg:text-2xl md:leading-6 lg:leading-8 ">
          {data.description}
        </p>
      </div>
    </section>
  );
}

export default YellowBanner;
