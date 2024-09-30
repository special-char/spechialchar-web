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
