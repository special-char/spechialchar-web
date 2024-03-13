import Swiper1 from "@/components/Swiper";
import Banner from "@/container/Banner";
import { SwiperServices, banner2 } from "@/lib/constData";
import React from "react";

type Props = {};

const Mobile = () => {
  return (
    <>
      <Banner data={banner2} className="bg-[#dfdfdf] text-black" />
      <Swiper1 data={SwiperServices} />
    </>
  );
};

export default Mobile;
