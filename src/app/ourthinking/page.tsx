import Blog from "@/components/Blog";
import PageBanner from "@/container/PageBanner";
import { pageBanner } from "@/lib/constData";
import React from "react";

type Props = {};

const OurThinking = (props: Props) => {
  return (
    <>
      <PageBanner data={pageBanner} />
      <Blog />
    </>
  );
};

export default OurThinking;
