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
