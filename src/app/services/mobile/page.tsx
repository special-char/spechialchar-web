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
        urlPath: "/services/mobile",
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
// import MobileIcon from "@/components/MobileIcon";
// import MobilePage from "@/components/MobilePage";
// import MobileServices from "@/components/MobileServices";
// import MobileSwiper from "@/components/MobileSwiper";
// import ServiceAccordian from "@/components/ServiceAccordian";
// import Swiper from "@/components/Swiper1";
// import Tab from "@/components/Tab/index1";
// import YellowBanner from "@/components/YellowBanner";
// import Banner from "@/container/Banner";
// import {
//   SwiperServices1,
//   YellowBannerData1,
//   YellowBannerData2,
//   banner2,
//   imageBanner3,
//   imageBanner4,
//   imageBanner5,
//   latestThinkingData,
//   mobileicon,
//   mobiletabdata,
//   serviceAccordiandata,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Mobile Development",
//   description:
//     "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// const Mobile = () => {
//   return (
//     <>
//       <Banner data={banner2} />
//       <MobileIcon data={mobileicon} />
//       <Swiper data={SwiperServices1} />
//       <ImageBanner data={imageBanner3} />
//       <MobileServices />
//       <ImageBanner data={imageBanner4} />
//       <YellowBanner data={YellowBannerData1} />
//       <ServiceAccordian data={serviceAccordiandata} />
//       <ImageBanner data={imageBanner5} />
//       <YellowBanner data={YellowBannerData2} />
//       <Tab data={mobiletabdata} />
//       {/* <MobileSwiper /> */}
//       <MobilePage />
//       <LatestThinking data={latestThinkingData} />
//     </>
//   );
// };

// export default Mobile;
