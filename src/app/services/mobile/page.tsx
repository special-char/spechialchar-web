import ImageBanner from "@/components/ImageBanner";
import LatestThinking from "@/components/LatestThinking";
import MobileIcon from "@/components/MobileIcon";
import MobilePage from "@/components/MobilePage";
import MobileServices from "@/components/MobileServices";
import MobileSwiper from "@/components/MobileSwiper";
import ServiceAccordian from "@/components/ServiceAccordian";
import Swiper from "@/components/Swiper1";
import Tab1 from "@/components/Tab/index1";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import {
  SwiperServices1,
  YellowBannerData1,
  YellowBannerData2,
  banner2,
  imageBanner3,
  imageBanner4,
  imageBanner5,
  latestThinkingData,
  mobileicon,
  mobiletabdata,
  serviceAccordiandata,
} from "@/lib/constData";
import React from "react";


const Mobile = () => {
  return (
    <>
      <Banner data={banner2} className="bg-gray text-primary" />
      <MobileIcon data={mobileicon} />
      <Swiper data={SwiperServices1} />
      <ImageBanner data={imageBanner3} />
      <MobileServices />
      <ImageBanner data={imageBanner4} />
      <YellowBanner data={YellowBannerData1} />
      <ServiceAccordian data={serviceAccordiandata} />
      <ImageBanner data={imageBanner5} />
      <YellowBanner data={YellowBannerData2} />
      <Tab1 data={mobiletabdata} />
      <MobileSwiper />
      <MobilePage />
      <LatestThinking data={latestThinkingData} />
    </>
  );
};

export default Mobile;
