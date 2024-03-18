import ImageBanner from "@/components/ImageBanner";
import Swiper1 from "@/components/Swiper";
import Swiper4 from "@/components/Swiper4";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import UiGrid from "@/container/UiGrid";
import UiGrid2 from "@/container/UiGrid2";
import {
  SwiperServices,
  SwiperServices4,
  YellowBannerData7,
  YellowBannerData8,
  YellowBannerData9,
  banner6,
  imageBanner2,
  imageBanner21,
  imageBanner22,
  imageBanner3,
  uiGrid,
} from "@/lib/constData";
import React from "react";

const UxDesign = () => {
  return (
    <>
      <Banner data={banner6} className="bg-second text-black" />
      <UiGrid data={uiGrid} />
      <ImageBanner data={imageBanner21} />
      <YellowBanner data={YellowBannerData8} />
      <UiGrid2 />
      <ImageBanner data={imageBanner22} />
      <YellowBanner data={YellowBannerData9} />
      <Swiper4 data={SwiperServices4} />
      <ImageBanner data={imageBanner2} />
    </>
  );
};

export default UxDesign;
