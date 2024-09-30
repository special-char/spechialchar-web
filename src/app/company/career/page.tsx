import { RenderBuilderContent } from "@/components/builder";
import {
  BASE_URL,
  SITE_NAME,
  TWITTER_CREATER,
  TWITTER_SITE_ID,
} from "@/utils/constant";
import { builder } from "@builder.io/sdk";
import { Metadata } from "next";
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
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/company/career",
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}

// import CareerBanner from "@/components/CareerBanner";
// import CareerBanner2 from "@/components/CareerBanner2";
// import CareerCV from "@/components/CareerCV";
// import CareerCap from "@/components/CareerCap";
// import CareerCity from "@/components/CareerCity";
// import CareerMany from "@/components/CareerMany";
// import CareerPage2 from "@/components/CareerPage2";
// import CareerPage4 from "@/components/CareerPage4";
// import CareerPage5 from "@/components/CareerPage5";
// import CareerSection from "@/components/CareerSection";
// import CareerSection2 from "@/components/CareerSection2";
// import {
//   career,
//   career2,
//   careerBanner2,
//   careerbannerdata,
//   careercap,
//   careercity,
//   careercv,
//   careermany,
//   careerpage2data,
//   careerpage4data,
//   careerpage5data,
//   careerpage6data,
//   careerpage7data,
// } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Career Oppertunity",
//   description:
//     "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// type Props = {};

// const AboutPage = (props: Props) => {
//   return (
//     <>
//       <CareerBanner data={careerbannerdata} />
//       <CareerPage2 data={careerpage2data} />
//       <CareerCap data={careercap} />
//       <CareerPage4 data={careerpage4data} />
//       <CareerPage5 data={careerpage5data} />
//       <CareerPage2 data={careerpage6data} />
//       <CareerPage4 data={careerpage7data} />
//       <CareerSection data={career} />
//       <CareerBanner2 data={careerBanner2} />
//       <CareerSection2 data={career2} />
//       <CareerCity data={careercity} />
//       <CareerMany data={careermany} />
//       <CareerCV data={careercv} />
//     </>
//   );
// };

// export default AboutPage;
