import AboutBanner from "@/components/AboutBanner";
import AboutCount from "@/components/AboutCount";
import MobilePage from "@/components/MobilePage";
import { aboutBannerdata } from "@/lib/constData";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <AboutBanner data={aboutBannerdata} />
      {/* <MobilePage /> */}
      <AboutCount />
    </>
  );
};

export default AboutPage;
