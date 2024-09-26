// import ImageBanner from "@/components/ImageBanner";
// import Swiper4 from "@/components/Swiper4";
// import Tab3 from "@/components/Tab/index3";
// import YellowBanner from "@/components/YellowBanner";
// import Banner from "@/container/Banner";
// import UiGrid from "@/container/UiGrid";
// import UiGrid2 from "@/container/UiGrid2";
// import UiUxBox from "@/container/UiUxBox";
// import {
//   SwiperServices4,
//   YellowBannerData8,
//   YellowBannerData9,
//   banner6,
//   imageBanner21,
//   imageBanner22,
//   imageBanner32,
//   uiGrid,
//   uiuxtabdata,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "UI/UX Development | The Special Character",
//   description:
//     "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// const UxDesign = () => {
//   return (
//     <>
//       <Banner data={banner6} />
//       <UiGrid data={uiGrid} />
//       <ImageBanner data={imageBanner21} />
//       <YellowBanner data={YellowBannerData8} />
//       <UiGrid2 />
//       <ImageBanner data={imageBanner22} />
//       <YellowBanner data={YellowBannerData9} />
//       <Tab3 data={uiuxtabdata} />
//       <Swiper4 data={SwiperServices4} />
//       <ImageBanner data={imageBanner32} />
//       <UiUxBox />
//     </>
//   );
// };

// export default UxDesign;
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
        urlPath: "/services/ui-ux-design",
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
