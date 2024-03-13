import ImageBanner from "@/components/ImageBanner";
import MobileIcon from "@/components/MobileIcon";
import MobileServices from "@/components/MobileServices";
import Swiper1 from "@/components/Swiper";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import {
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
      <MobileIcon/>
      <Swiper1 data={SwiperServices} />
      <ImageBanner data={imageBanner3} />
      <MobileServices data={mobileServicesdata} />
      <ImageBanner data={imageBanner4} />
      <YellowBanner data={YellowBannerData1}/>
      <ImageBanner data={imageBanner5} />
      <YellowBanner data={YellowBannerData2}/>
    </>
  );
};

export default Mobile;
