import ImageBanner from "@/components/ImageBanner";
import Swiper3 from "@/components/Swiper3";
import YellowBanner from "@/components/YellowBanner";
import BackBox from "@/container/BackBox";
import BackGrid from "@/container/BackGrid";
import BackGrid2 from "@/container/BackGrid2";
import BackGrid3 from "@/container/BackGrid3";
import Banner from "@/container/Banner";
import {
  SwiperServices3,
  YellowBannerData4,
  backSection,
  banner4,
  imageBanner14,
  imageBanner15,
  imageBanner16,
} from "@/lib/constData";
import React from "react";

type Props = {};

const Backend = (props: Props) => {
  return (
    <>
      <Banner
        data={banner4}
        className="bg-background3 text-white"
        font="lg:text-5xl"
      />
      <BackGrid data={backSection} />
      <ImageBanner data={imageBanner14} />
      <YellowBanner data={YellowBannerData4} />
      <BackGrid2 />
      <ImageBanner data={imageBanner15} />
      <BackGrid3 />
      <ImageBanner data={imageBanner16} />
      <BackBox />
      <Swiper3 data={SwiperServices3} />
    </>
  );
};

export default Backend;
