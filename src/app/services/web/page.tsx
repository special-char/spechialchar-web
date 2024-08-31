// import { RenderBuilderContent } from "@/components/builder";
// import { builder } from "@builder.io/sdk";
// // Builder Public API Key set in .env file
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// interface PageProps {
//   params: {
//     page: string[];
//   };
// }

// export default async function Page(props: PageProps) {
//   const builderModelName = "page";

//   const content = await builder
//     // Get the page content from Builder with the specified options
//     .get(builderModelName, {
//       userAttributes: {
//         // Use the page path specified in the URL to fetch the content
//         urlPath: "/services/web",
//       },
//     })
//     // Convert the result to a promise
//     .toPromise();

//   return (
//     <>
//       {/* Render the Builder page */}
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </>
//   );
// }

import ImageBanner from "@/components/ImageBanner";
import Swiper2 from "@/components/Swiper2";
import WebGridSection from "@/components/WebGridSection";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import WebGrid from "@/container/WebGrid";
import WebGrid2 from "@/container/WebGrid2";
import WebGrid3 from "@/container/WebGrid3";
import WebGrid4 from "@/container/WebGrid4";
import WebGrid5 from "@/container/WebGrid5";
import {
  Bgbanner2,
  Bgbanner8,
  SwiperServices2,
  banner3,
  imageBanner10,
  imageBanner31,
  imageBanner7,
  imageBanner8,
  imageBanner9,
  webSection,
  webSection2,
  webSection3,
  webicon,
} from "@/lib/constData";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development | The Special Character",
  description:
    "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
};

type Props = {};

const Web = (props: Props) => {
  return (
    <>
      <Banner data={banner3} />
      <WebGrid data={webicon} />
      <ImageBanner data={imageBanner31} />
      <YellowBanner data={Bgbanner8} />
      <WebGridSection />
      <ImageBanner data={imageBanner7} />
      <YellowBanner data={Bgbanner2} />
      <WebGrid5 data={webSection3} />
      <ImageBanner data={imageBanner8} />
      <WebGrid2 data={webSection} />
      <ImageBanner data={imageBanner9} />
      <WebGrid4 data={webSection2} />
      <ImageBanner data={imageBanner10} />
      <WebGrid3 />
      <Swiper2 data={SwiperServices2} />
    </>
  );
};

export default Web;
