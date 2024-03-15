import AboutAccordian from "@/components/AboutAccordian";
import AboutBanner from "@/components/AboutBanner";
import AboutBanner2 from "@/components/AboutBanner2";
import AboutCount from "@/components/AboutCount";
import ImageBanner from "@/components/ImageBanner";
import LatestThinking from "@/components/LatestThinking";
import OurClients from "@/container/OurClients";
import {
  aboutAccordianData,
  aboutBanner2,
  aboutBannerdata,
  imageBanner2,
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
      <AboutAccordian data={aboutAccordianData} />
      <OurClients />
      <AboutBanner2 data={aboutBanner2} />
      <ImageBanner data={imageBanner2} />
      <LatestThinking data={latestThinkingData} />
    </>
  );
};

export default AboutPage;
