import OurThinking from "@/components/OurThinking";
import PageBanner from "@/container/PageBanner";
import { pageBanner } from "@/lib/constData";
import React from "react";

type Props = {};

const Ourthinking = (props: Props) => {
  return (
    <>
      <PageBanner data={pageBanner} />
      <OurThinking />
    </>
  );
};

export default Ourthinking;
