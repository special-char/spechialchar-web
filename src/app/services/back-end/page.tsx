import ImageBanner from "@/components/ImageBanner";
import ServiceBox from "@/components/ServiceBox";
import YellowBanner from "@/components/YellowBanner";
import BackGrid from "@/container/BackGrid";
import BackGrid2 from "@/container/BackGrid2";
import BackGrid3 from "@/container/BackGrid3";
import Banner from "@/container/Banner";
import {
  YellowBannerData4,
  backSection,
  banner4,
  imageBanner14,
  imageBanner15,
  imageBanner16,
  imageBanner4,
} from "@/lib/constData";
import React from "react";

type Props = {};

const Backend = (props: Props) => {
  return (
    <>
      <Banner data={banner4} className="bg-[#170f1b] text-white" />
      <BackGrid data={backSection} />
      <ImageBanner data={imageBanner14} />
      <YellowBanner data={YellowBannerData4} />
      <BackGrid2 />
      <ImageBanner data={imageBanner15} />
      <BackGrid3 />
      <ImageBanner data={imageBanner16} />
      <ServiceBox/>
    </>
  );
};

export default Backend;
