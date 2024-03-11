import ImageBanner from "@/components/ImageBanner";
import Swiper1 from "@/components/Swiper";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import {
  Bgbanner,
  Card1,
  SwiperServices,
  banner,
  imageBanner,
} from "@/lib/constData";
import React from "react";

const Services = () => {
  return (
    <>
      <Banner data={banner} className="" />
      <ImageBanner data={imageBanner} />
      <YellowBanner data={Bgbanner} />
      <Swiper1 data={SwiperServices} />
    </>
  );
};

export default Services;
