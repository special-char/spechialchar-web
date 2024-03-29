import OurThinking from "@/components/OurThinking";
import PageBanner from "@/container/PageBanner";
import { caseBanner } from "@/lib/constData";
import React from "react";

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <>
      <PageBanner data={caseBanner} className="bg-skyblue " />
      <OurThinking />
    </>
  );
};

export default CaseStudies;
