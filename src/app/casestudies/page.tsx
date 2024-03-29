import OurThinking from "@/components/OurThinking";
import PageBanner from "@/container/PageBanner";
import { caseBanner, ourThinkingData } from "@/lib/constData";
import React from "react";

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <>
      <PageBanner data={caseBanner} className="bg-second" />
      <OurThinking />
    </>
  );
};

export default CaseStudies;
