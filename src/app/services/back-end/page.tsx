// import ImageBanner from "@/components/ImageBanner";
// import Swiper3 from "@/components/Swiper3";
// import YellowBanner from "@/components/YellowBanner";
// import BackBox from "@/container/BackBox";
// import BackGrid from "@/container/BackGrid";
// import BackGrid2 from "@/container/BackGrid2";
// import BackGrid3 from "@/container/BackGrid3";
// import Banner from "@/container/Banner";
// import {
//   SwiperServices3,
//   YellowBannerData4,
//   backSection,
//   banner4,
//   imageBanner14,
//   imageBanner15,
//   imageBanner16,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Back-End Development",
//   description: "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// type Props = {};

// const Backend = (props: Props) => {
//   return (
//     <>
//       <Banner
//         data={banner4}
//       />
//       <BackGrid data={backSection} />
//       <ImageBanner data={imageBanner14} />
//       <YellowBanner data={YellowBannerData4} />
//       <BackGrid2 />
//       <ImageBanner data={imageBanner15} />
//       <BackGrid3 />
//       <ImageBanner data={imageBanner16} />
//       <BackBox />
//       <Swiper3 data={SwiperServices3} />
//     </>
//   );
// };

// export default Backend;

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
        urlPath: "/services/back-end",
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
