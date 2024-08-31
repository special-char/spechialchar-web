// import ImageBanner from "@/components/ImageBanner";
// import YellowBanner from "@/components/YellowBanner";
// import Banner from "@/container/Banner";
// import SaasBox from "@/container/SaasBox";
// import SaasGrid from "@/container/SaasGrid";
// import SaasGrid2 from "@/container/SaasGrid2";
// import SaasService from "@/container/SaasService";
// import {
//   Bgbanner4,
//   YellowBannerData3,
//   imageBanner11,
//   imageBanner12,
//   imageBanner13,
//   saasBanner,
//   saasSection,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Saas Development",
//   description:
//     "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// type Props = {};

// const Saas = (props: Props) => {
//   return (
//     <>
//       <Banner data={saasBanner} />
//       <SaasGrid data={saasSection} />
//       <ImageBanner data={imageBanner11} />
//       <YellowBanner data={YellowBannerData3} />
//       <SaasGrid2 />
//       <ImageBanner data={imageBanner12} />
//       <YellowBanner data={Bgbanner4} />
//       <SaasService />
//       <ImageBanner data={imageBanner13} />
//       <SaasBox />
//     </>
//   );
// };

// export default Saas;

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
        urlPath: "/services/saas",
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
