import ImageBanner from "@/components/ImageBanner";
import Swiper1 from "@/components/Swiper";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import WebGrid from "@/container/WebGrid";
import WebGrid2 from "@/container/WebGrid2";
import WebGrid3 from "@/container/WebGrid3";
import {
  Bgbanner2,
  SwiperServices,
  banner3,
  imageBanner10,
  imageBanner7,
  imageBanner8,
  imageBanner9,
} from "@/lib/constData";
import React from "react";

type Props = {};

const Web = (props: Props) => {
  return (
    <>
      <Banner data={banner3} className="bg-[#02142c] text-white" />
      <WebGrid />
      <ImageBanner data={imageBanner7} />
      <YellowBanner data={Bgbanner2} />
      <ImageBanner data={imageBanner8} />
      <WebGrid2 />
      <ImageBanner data={imageBanner9} />
      <ImageBanner data={imageBanner10} />
      <WebGrid3 />
      <Swiper1 data={SwiperServices} />
    </>
  );
};

export default Web;
