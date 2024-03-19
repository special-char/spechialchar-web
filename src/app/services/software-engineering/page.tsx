import ImageBanner from "@/components/ImageBanner";
import ServiceBox from "@/components/ServiceBox";
import ServiceIcon2 from "@/components/ServiceIcon2";
import Swiper1 from "@/components/Swiper";
import Tab from "@/components/Tab";
import Testimonial from "@/components/Testimonial";
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
  serviceicon,
  tabdata,
} from "@/lib/constData";
import React from "react";

const Services = () => {
  return (
    <>
      <Banner data={banner} className="" />
      <Service data={serviceicon} />
      <ImageBanner data={imageBanner} />
      <YellowBanner data={Bgbanner} />
      <ServiceIcon2 />
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
