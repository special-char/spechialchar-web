// import ImageBanner from "@/components/ImageBanner";
// import LatestThinking from "@/components/LatestThinking";
// import MobileSwiper from "@/components/MobileSwiper";
// import YellowBanner from "@/components/YellowBanner";
// import Banner from "@/container/Banner";
// import CloudAccordian from "@/container/CloudAccordian";
// import CloudGrid from "@/container/CloudGrid";
// import CloudGrid2 from "@/container/CloudGrid2";
// import CloudGrid3 from "@/container/CloudGrid3";
// import CloudGrid4 from "@/container/CloudGrid4";
// import CloudSocial from "@/container/CloudSocial";
// import OurClients from "@/container/OurClients";
// import {
//   YellowBannerData5,
//   YellowBannerData6,
//   YellowBannerData7,
//   banner5,
//   cloudAccordiandata,
//   imageBanner17,
//   imageBanner18,
//   imageBanner19,
//   imageBanner20,
//   latestThinkingData,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Cloud Development",
//   description: "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// const CloudDevops = () => {
//   return (
//     <>
//       <Banner data={banner5}/>
//       <CloudAccordian data={cloudAccordiandata}/>
//       <ImageBanner data={imageBanner17} />
//       <YellowBanner data={YellowBannerData5} />
//       <CloudGrid />
//       <ImageBanner data={imageBanner18} />
//       <YellowBanner data={YellowBannerData6} />
//       <CloudGrid2 />
//       <ImageBanner data={imageBanner19} />
//       <YellowBanner data={YellowBannerData7} />
//       <CloudGrid4 />
//       <CloudGrid3 />
//       <ImageBanner data={imageBanner20} />
//       <CloudSocial />
//       <OurClients />
//       <MobileSwiper />
//       <LatestThinking data={latestThinkingData} />
//     </>
//   );
// };

// export default CloudDevops;

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
        urlPath: "/services/cloud-devops",
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
