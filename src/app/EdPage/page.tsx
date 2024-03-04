import EdSection2 from "@/components/EdSection2";
import EdSection from "@/components/EdTechSection";
import EdTechBanner from "@/containers/EdTechBanner";
import BgBanner from "@/components/common/BgBanner";
import {
  BgBanner2,
  BgBanner3,
  BgBanner4,
  BgBanner5,
  BgBanner8,
  Ed,
  EdSection3,
} from "@/lib/constData";
import React from "react";
import BgY from "@/components/common/BgYellowB";

interface Props {}

const EdPage = (props: Props) => {
  return (
    <>
      <EdTechBanner />
      <EdSection data={EdSection} />
      <BgY data={BgBanner2} />
      <EdSection2 data={Ed} />
      <BgY data={BgBanner3} />
      <EdSection data={EdSection3} />
      <BgY data={BgBanner4} />
      <BgY data={BgBanner5} />
      <BgBanner data={BgBanner8} />
    </>
  );
};

export default EdPage;
