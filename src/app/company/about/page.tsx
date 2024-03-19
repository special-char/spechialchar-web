import AboutAccordian from "@/components/AboutAccordian";
import AboutBanner from "@/components/AboutBanner";
import AboutBanner2 from "@/components/AboutBanner2";
import AboutCount from "@/components/AboutCount";
import AboutLinks from "@/components/AboutLinks";
import ImageBanner from "@/components/ImageBanner";
import LatestThinking from "@/components/LatestThinking";
import LatestThinking3 from "@/components/LatestThinking3";
import LatestThinking4 from "@/components/LatestThinking4";
import MobilePage from "@/components/MobilePage";
import Sticky from "@/components/Sticky";
import OurClients from "@/container/OurClients";
import {
  aboutAccordianData,
  aboutBanner2,
  aboutBannerdata,
  aboutlinks,
  imageBanner2,
  latestThinkingData,
  latestThinkingData3,
  latestThinkingData4,
} from "@/lib/constData";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <AboutBanner data={aboutBannerdata} />
      <AboutCount />
      <OurClients />
      <AboutAccordian data={aboutAccordianData} />
      <AboutLinks data={aboutlinks} />
      <AboutBanner2 data={aboutBanner2} />
      <ImageBanner data={imageBanner2} />
      <LatestThinking3 data={latestThinkingData3} />
      <LatestThinking4 data={latestThinkingData4} />
      <Sticky/>
    </>
  );
};

export default AboutPage;
