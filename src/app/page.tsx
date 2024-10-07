import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import { Metadata } from "next";
import {
  BASE_URL,
  SITE_NAME,
  TWITTER_CREATER,
  TWITTER_SITE_ID,
} from "@/utils/constant";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();

  // console.log({ home: content });
  // console.log({ home: content?.data?.image });
  // console.log({ openGraph: content?.data?.openGraph });

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
      images: [
        {
          url: content?.data?.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: content?.data?.openGraph?.title,
      description: content?.data?.openGraph?.description,
      site: SITE_NAME,
      siteId: TWITTER_SITE_ID,
      creator: TWITTER_CREATER,
      creatorId: TWITTER_SITE_ID,
      images: [
        {
          url: content?.data?.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Special Character",
  url: "https://it.thespecialcharacter.com",
  description:
    "Next-gen enterprise software development company offering services in web, mobile, SaaS development, and UI/UX design.",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fdbf92adf2ef043c7957411ad39146bdb%2F4b3d91a33b334a809b20929c601f847e",
  publisher: {
    "@type": "Organization",
    name: "The Special Character",
    url: "https://thespecialcharacter.com",
    logo: "https://cdn.builder.io/api/v1/image/assets%2Fdbf92adf2ef043c7957411ad39146bdb%2F4b3d91a33b334a809b20929c601f847e",
    contactPoint: {
      "@type": "ContactPoint",
      email: "mailto:contact@thespecialcharacter.com",
      telephone: "+91 7600096432",
      contactType: "Customer Service",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        postalCode: "382470",
        streetAddress:
          "B-604/605 Ganesh Glory 11 Jagarpur Road, SG Highway Gujarat",
      },
    },

    sameAs: ["https://www.linkedin.com/company/thespecialcharacter"],
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd ? JSON.stringify(jsonLd) : "",
        }}
      />
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
