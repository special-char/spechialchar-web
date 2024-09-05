// import AboutAccordian from "@/components/AboutAccordian";
// import AboutBanner from "@/components/AboutBanner";
// import AboutBanner2 from "@/components/AboutBanner2";
// import AboutCount from "@/components/AboutCount";
// import AboutLinks from "@/components/AboutLinks";
// import ImageBanner from "@/components/ImageBanner";
// import LatestThinking3 from "@/components/LatestThinking3";
// import LatestThinking4 from "@/components/LatestThinking4";
// import Sticky from "@/components/Sticky";
// import OurClients from "@/container/OurClients";
// import {
//   aboutAccordianData,
//   aboutBanner2,
//   aboutBannerdata,
//   aboutlinks,
//   imageBanner33,
//   latestThinkingData3,
//   latestThinkingData4,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About",
//   description:
//     "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// type Props = {};

// const AboutPage = (props: Props) => {
//   return (
//     <>
//       <AboutBanner data={aboutBannerdata} />
//       <AboutCount />
//       <OurClients />
//       <AboutAccordian data={aboutAccordianData} />
//       <AboutLinks data={aboutlinks} />
//       <AboutBanner2 data={aboutBanner2} />
//       <ImageBanner data={imageBanner33} />
//       <LatestThinking3 data={latestThinkingData3} />
//       <LatestThinking4 data={latestThinkingData4} />
//       <Sticky />
//     </>
//   );
// };

// export default AboutPage;

import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/company/about",
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
