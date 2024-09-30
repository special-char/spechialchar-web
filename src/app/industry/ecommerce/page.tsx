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
