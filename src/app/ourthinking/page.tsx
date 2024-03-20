import Blog from "@/components/Blog";
import OurThinking from "@/components/OurThinking";
import PageBanner from "@/container/PageBanner";
import { ourThinkingData, pageBanner } from "@/lib/constData";
import React from "react";

type Props = {};

const Ourthinking = (props: Props) => {
  return (
    <>
      <PageBanner data={pageBanner} />
      {/* <Blog /> */}
      <OurThinking data={ourThinkingData}/>
    </>
  );
};

export default Ourthinking;
