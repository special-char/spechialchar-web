import React from "react";
// import Banner from "@/components/AboutBanner";
import Banner2 from "@/components/AboutBanner2";
import WebBanner2 from "@/components/WebBanner2";
import AccCards from "@/containers/AccCard";
import ServiceBanner from "@/components/Banner";
import { banner } from "@/lib/constData";
import Banner from "@/components/Banner";
interface Props { }

const About = (props: Props) => {
  return (
    <>
      {/* <Banner />
      <Banner2 />
      <AccCards /> */}
      {/* <WebBanner2 /> */}
   < Banner data = {banner}/>
    </>
  );
};

export default About;