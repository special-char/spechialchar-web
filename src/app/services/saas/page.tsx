import ImageBanner from "@/components/ImageBanner";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import SaasGrid from "@/container/SaasGrid";
import {
  YellowBannerData3,
  imageBanner11,
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
    </>
  );
};

export default Saas;