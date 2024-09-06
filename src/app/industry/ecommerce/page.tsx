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
        urlPath: "/industry/ecommerce",
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

// import EcommerceServices from "@/components/EcomServices";
// import ImageAccordion from "@/components/ImageAccordian";
// import ImageBanner from "@/components/ImageBanner";
// import LatestThinking2 from "@/components/LatestThinking2";
// import MobileSwiper from "@/components/MobileSwiper";
// import YellowBanner from "@/components/YellowBanner";
// import Banner from "@/container/Banner";
// import EcomGrid from "@/container/EcomGrid";
// import EcomGrid3 from "@/container/EcomGrid3";
// import EcomSocial from "@/container/EcomSocial";
// import OurClients from "@/container/OurClients";
// import {
//   Bgbanner5,
//   Bgbanner6,
//   Bgbanner7,
//   banner8,
//   ecomSocial,
//   imageAccordianData,
//   imageBanner28,
//   imageBanner29,
//   imageBanner30,
//   latestThinkingData2,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Ecommerce Development",
//   description:
//     "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// const Ecommerce = () => {
//   return (
//     <>
//       <Banner data={banner8} />
//       <ImageAccordion data={imageAccordianData} />
//       <EcomSocial data={ecomSocial} />
//       <ImageBanner data={imageBanner28} />
//       <YellowBanner data={Bgbanner5} />
//       <EcomGrid />
//       <ImageBanner data={imageBanner29} />
//       <YellowBanner data={Bgbanner6} />
//       <EcomGrid3 />
//       <ImageBanner data={imageBanner30} />
//       <YellowBanner data={Bgbanner7} />
//       <EcommerceServices />
//       <OurClients />
//       <MobileSwiper />
//       <LatestThinking2 data={latestThinkingData2} />
//     </>
//   );
// };

// export default Ecommerce;
