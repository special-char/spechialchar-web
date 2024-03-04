import React from "react";
import Banner from "@/components/AboutBanner";
import Banner2 from "@/components/AboutBanner2";
import WebBanner2 from "@/components/WebBanner2";
interface Props {}

const About = (props: Props) => {
  return (
    <>
      <Banner />
      <Banner2 />
      {/* <WebBanner2 /> */}
    </>
  );
};

export default About;
