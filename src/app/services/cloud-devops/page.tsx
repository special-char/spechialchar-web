import ImageBanner from "@/components/ImageBanner";
import MobilePage from "@/components/MobilePage";
import MobileSwiper from "@/components/MobileSwiper";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import CloudAccordian from "@/container/CloudAccordian";
import CloudGrid from "@/container/CloudGrid";
import CloudGrid2 from "@/container/CloudGrid2";
import CloudGrid3 from "@/container/CloudGrid3";
import CloudSocial from "@/container/CloudSocial";
import OurClients from "@/container/OurClients";
import {
  MobileSwiperData,
  YellowBannerData5,
  YellowBannerData6,
  YellowBannerData7,
  banner5,
  imageBanner17,
  imageBanner18,
  imageBanner19,
  imageBanner20,
} from "@/lib/constData";
import React from "react";

type Props = {};

const CloudDevops = (props: Props) => {
  return (
    <>
      <Banner data={banner5} />
      <CloudAccordian />
      <ImageBanner data={imageBanner17} />
      <YellowBanner data={YellowBannerData5} />
      <CloudGrid />
      <ImageBanner data={imageBanner18} />
      <YellowBanner data={YellowBannerData6} />
      <CloudGrid2 />
      <ImageBanner data={imageBanner19} />
      <YellowBanner data={YellowBannerData7} />
      <CloudGrid3 />
      <ImageBanner data={imageBanner20} />
      <CloudSocial />
      <OurClients/>
      <MobileSwiper data={MobileSwiperData} />
    </>
  );
};

export default CloudDevops;
