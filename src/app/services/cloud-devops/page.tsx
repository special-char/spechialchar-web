import { RenderBuilderContent } from "@/components/builder";
import {
  BASE_URL,
  SITE_NAME,
  TWITTER_CREATER,
  TWITTER_SITE_ID,
} from "@/utils/constant";
import { builder } from "@builder.io/sdk";
import { Metadata } from "next";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

type OGProps = {
  url: string;
  width: number;
  height: number;
};

const images: OGProps[] = [
  {
    url: `${BASE_URL}/images/contect-us-logo.jpg`,
    width: 1200,
    height: 630,
  },
];

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  console.log({ content });
  // console.log({ openGraph: content?.data?.openGraph });
  console.log({ twitter: content?.data?.twitter });

  return {
    title: content?.data?.title,
    description: content?.data?.description,

    openGraph: {
      title: content?.data?.openGraph?.title,
      description: content?.data?.openGraph?.description,
      url: BASE_URL,
      siteName: SITE_NAME,
      locale: "en-US",
      type: "website",
      images: [...images],
    },

    twitter: {
      card: content?.data?.twitter?.card,
      title: content?.data?.twitter?.title,
      description: content?.data?.twitter?.description,
      site: SITE_NAME,
      siteId: TWITTER_SITE_ID,
      creator: TWITTER_CREATER,
      creatorId: TWITTER_SITE_ID,
      images: [...images],
    },
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
