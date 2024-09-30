import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import { Metadata } from "next";
import {
  BASE_URL,
  SITE_NAME,
  TWITTER_CREATER,
  TWITTER_SITE_ID,
} from "@/utils/constant";

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
    width: 500,
    height: 500,
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

  // console.log({ content });
  // console.log({ openGraph: content?.data?.openGraph });
  // console.log({ twitter: content?.data?.twitter });

  return {
    title: content?.data?.title || "TSC IT-Services",
    description:
      content?.data?.description ||
      "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",

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
      card: content?.data?.twitter?.card || "summary_large_image",
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
        urlPath: "/",
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

// import HomeAccord from "@/container/HomeAccord";
// import ProjectSec from "@/container/ProjectSec";
// import {
//   homeBannerdata,
// } from "@/lib/constData";
// import ThinkSec from "@/container/ThinkSec";
// import Marque from "@/components/Marque";
// import Collabrate from "@/components/Collabrate";
// import HomeBanner from "@/components/HomeBanner";

// export default function Home() {
//   return (
//     <>
//       <HomeBanner data={homeBannerdata} />
//       <Marque />
//       <HomeAccord />
//       <ProjectSec />
//       <Collabrate />
//       <ThinkSec />
//     </>
//   );
// }
