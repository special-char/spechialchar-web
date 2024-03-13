import ServiceAccordian from "@/components/ServiceAccordian";
import Swiper1 from "@/components/Swiper";
import Tab from "@/components/Tab";
import Tab1 from "@/components/Tab/index1";
import Banner from "@/container/Banner";
import { SwiperServices, banner2, mobiletabdata, serviceAccordiandata } from "@/lib/constData";
import React from "react";

type Props = {};

const Mobile = () => {
  return (
    <>
      <Banner data={banner2} className="bg-[#dfdfdf] text-black" />
      <Swiper1 data={SwiperServices} />
      <Tab1 data={mobiletabdata} />
      <ServiceAccordian data={serviceAccordiandata} />
    </>
  );
};

export default Mobile;
