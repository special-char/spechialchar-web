// import LatestThinking from "@/components/LatestThinking";
// import MobileSwiper from "@/components/MobileSwiper";
// import ProjectBanner from "@/components/ProjectBanner";
// import ProjectChallanges from "@/components/ProjectChallanges";
// import ProjectSection from "@/components/ProjectSection";
// import ProjectSwiper from "@/components/ProjectSwiper";
// import { backendData, backendData2, latestThinkingData } from "@/lib/constData";
// import React from "react";
// import { Metadata } from "next";
// import Sticky from "@/components/Sticky";

// type Props = {
//   params: {
//     projectid: string;
//   };
// };

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Projects ${params.projectid}`,
//   };
// };

// const Projects = () => {
//   return (
//     <>
//       <ProjectBanner data={backendData} />
//       <ProjectChallanges data={backendData} />
//       <ProjectSection
//         data={backendData2}
//         className="bg-yellow"
//         order="lg:order-1"
//       />
//       <ProjectSwiper />
//       <ProjectSection data={backendData2} className="bg-blue text-background" />
//       <MobileSwiper />
//       <LatestThinking data={latestThinkingData} />
//       <Sticky />
//     </>
//   );
// };

// export default Projects;

import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    projectid: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: `/casestudies/${props?.params?.projectid}`,
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
