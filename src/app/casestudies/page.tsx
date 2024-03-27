import OurThinking from "@/components/OurThinking";
import ProjectSection from "@/components/ProjectSection";
import PageBanner from "@/container/PageBanner";
import { caseBanner } from "@/lib/constData";
import React from "react";

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <>
      <PageBanner data={caseBanner} className="bg-second" />
      <OurThinking />
      <ProjectSection />
      <ProjectSection className="bg-button" order="lg:order-1" />
    </>
  );
};

export default CaseStudies;
