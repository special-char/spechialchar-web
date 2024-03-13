import ImageBanner from "@/components/ImageBanner";
import MobileIcon from "@/components/MobileIcon";
import MobilePage from "@/components/MobilePage";
import MobileServices from "@/components/MobileServices";
import MobileSwiper from "@/components/MobileSwiper";
import Swiper1 from "@/components/Swiper";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import {
  MobileSwiperData,
  SwiperServices,
  YellowBannerData,
  YellowBannerData1,
  YellowBannerData2,
  banner2,
  imageBanner,
  imageBanner3,
  imageBanner4,
  imageBanner5,
  mobileServicesdata,
} from "@/lib/constData";
import React from "react";

type Props = {};

const Mobile = () => {
  return (
    <>
      <Banner data={banner2} className="bg-[#dfdfdf] text-black" />
      <MobileIcon />
      <Swiper1 data={SwiperServices} />
      <ImageBanner data={imageBanner3} />
      <MobileServices data={mobileServicesdata} />
      <ImageBanner data={imageBanner4} />
      <YellowBanner data={YellowBannerData1} />
      <MobilePage />
      <ImageBanner data={imageBanner5} />
      <YellowBanner data={YellowBannerData2} />
      <MobileSwiper data={MobileSwiperData} />
    </>
  );
};

export default Mobile;
