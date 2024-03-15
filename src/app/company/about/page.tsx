import AboutBanner from "@/components/AboutBanner";
import AboutBanner2 from "@/components/AboutBanner2";
import AboutCount from "@/components/AboutCount";
import ImageBanner from "@/components/ImageBanner";
import LatestThinking from "@/components/LatestThinking";
import MobilePage from "@/components/MobilePage";
import OurClients from "@/container/OurClients";
import {
  aboutBanner2,
  aboutBannerdata,
  imageBanner,
  imageBanner1,
  latestThinkingData,
} from "@/lib/constData";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <AboutBanner data={aboutBannerdata} />
      {/* <MobilePage /> */}
      <AboutCount />
      <OurClients />
      <AboutBanner2 data={aboutBanner2} />
      <ImageBanner data={imageBanner} />
      <LatestThinking data={latestThinkingData} />
    </>
  );
};

export default AboutPage;
