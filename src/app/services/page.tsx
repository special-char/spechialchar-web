import ImageBanner from "@/components/ImageBanner";
import ServiceBox from "@/components/ServiceBox";
import Swiper1 from "@/components/Swiper";
import Tab from "@/components/Tab";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import Service from "@/container/Service";
import {
  Bgbanner,
  Bgbanner1,
  Card1,
  SwiperServices,
  banner,
  imageBanner,
  imageBanner1,
  imageBanner2,
  tabdata,
} from "@/lib/constData";
import React from "react";

const Services = () => {
  return (
    <>
      <Banner data={banner} className="" />
      <Service />
      <ImageBanner data={imageBanner} />
      <YellowBanner data={Bgbanner} />
      <ImageBanner data={imageBanner1} />
      <YellowBanner data={Bgbanner1} />
      <Tab data={tabdata} />
      <ImageBanner data={imageBanner2} />
      <ServiceBox />
      <Swiper1 data={SwiperServices} />
    </>
  );
};

export default Services;
