import React from "react";
import Image from "next/image";
import { careerBannerType } from "@/utils/types";
type Props = {
  url: string
}
const CareersBanner2 = (props: Props) => {
  return (
    <div className=" md:mb-14 mb-5 ">
      <Image
        src={props.url}
        alt="image"
        title="banner-image"
        height={700}
        width={700}
        className="object-fit  w-full"
      />
    </div>
  );
};

export default CareersBanner2;
