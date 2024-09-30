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
        urlPath: "/hiring",
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

// import HiringSectionHeading from "@/components/hiring/HiringSectionHeading";
// import ImageWithCards from "@/components/hiring/ImagewithCards";
// import Titlecards from "@/components/hiring/TitleCards";
// import HiringFrequrntlyAskedQuestions from "@/container/HiringFaq";
// import HiringFeatureSection from "@/container/HiringFeatureSection";
// import HiringKnow from "@/container/HiringKnow";
// import HiringSectionBanner from "@/container/HiringSectionBanner";
// import WorkWithUs from "@/container/HiringWorkWithUs";
// import JobMatch from "@/container/JobMatch";
// import MeetingHiring from "@/container/Meeting-Hiring";
// import { title } from "process";
// import React from "react";

// type Props = {};
// const titledata = [
//   {
//     title: "Candidate Search and Vetting",
//     dec: "We find and vet the best candidates to fit your business needs.",
//   },
//   {
//     title: "Payroll Management",
//     dec: "We handle payroll, ensuring your employees are paid accurately and on time.",
//   },
//   {
//     title: "Logistics Management",
//     dec: "We handle all logistics, including equipment delivery, to ensure smooth operations.",
//   },
//   // {
//   //   title: "Compliance Management",
//   //   dec: "We ensure your business is always in compliance with all regulations.",
//   // },
//   // {
//   //   title: "Employee Benefits Management",
//   //   dec: "As your partner, we assist in managing gifts, bonuses, and other employee benefits.",
//   // },
// ];
// const page = (props: Props) => {
//   {
//     /* <div className="px-container">
//        <div className="h-dvh w-dvw flex justify-center items-center gap-10">
//       <ImageWithCards />
//     </div>

//       <div className="flex flex-col gap-4">
//         <HiringSectionHeading
//           title="Employee-as-a-Service"
//           decription="We not only identify the ideal candidates, but also handle all formalities, from hiring to managing their payment. In this way, we become your strategic ally, simplifying your business growth."
//         />
//         <div
//           className="columns-3  overflow-hidden gap-5
//        max-sm:flex-col"
//         >
//           {titledata.map((item, index) => (
//             <div
//               className="border rounded-lg p-5  w-full bg-white h-full max-w-[380px] line-clamp-3"
//               key={index}
//             >
//               <Titlecards titledata={item} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col gap-4">
//         <HiringSectionHeading
//           title="360 Solution for Your Business"
//           decription="Our comprehensive solution includes candidate search and vetting, payroll management, logistics handling, compliance management, and partnership in employee benefits such as gifts and bonuses."
//         />
//         <div
//           className="columns-3  overflow-hidden gap-5
//        max-sm:flex-col"
//         >
//           {titledata.map((item, index) => (
//             <div
//               className="border rounded-lg p-5  w-full bg-white h-full max-w-[380px] line-clamp-3"
//               key={index}
//             >
//               <Titlecards titledata={item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div> */
//   }
//   return (
//     <div className="flex flex-col gap-10 max-sm:gap-4">
//       <HiringSectionBanner />
//       <HiringFeatureSection />
//       <HiringKnow />
//       <JobMatch />
//       <WorkWithUs />
//       {/* <MeetingHiring /> */}
//       <HiringFrequrntlyAskedQuestions />
//     </div>
//   );
// };

// export default page;
