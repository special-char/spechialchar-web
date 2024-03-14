import Blog from "@/components/Blog";
import PageBanner from "@/container/PageBanner";
import { caseBanner } from "@/lib/constData";
import React from "react";

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <>
      <PageBanner data={caseBanner} className="bg-second" />
      <Blog/>
    </>
  );
};

export default CaseStudies;
