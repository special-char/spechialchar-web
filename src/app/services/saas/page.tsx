import ImageBanner from "@/components/ImageBanner";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import SaasGrid from "@/container/SaasGrid";
import SaasGrid2 from "@/container/SaasGrid2";
import {
  Bgbanner4,
  YellowBannerData3,
  imageBanner11,
  imageBanner12,
  saasBanner,
  saasSection,
} from "@/lib/constData";
import React from "react";

type Props = {};

const Saas = (props: Props) => {
  return (
    <>
      <Banner data={saasBanner} />
      <SaasGrid data={saasSection} />
      <ImageBanner data={imageBanner11} />
      <YellowBanner data={YellowBannerData3} />
      <SaasGrid2/>
      <ImageBanner data={imageBanner12} />
      <YellowBanner data={Bgbanner4} />
    </>
  );
};

export default Saas;
