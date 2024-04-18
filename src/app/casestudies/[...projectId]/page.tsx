import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { BuilderComponent, BuilderContent, useIsPreviewing } from "@builder.io/react";
import ProjectBanner from "@/components/ProjectBanner";

// Builder Public API Key set in .env file
builder.init('5e55b9e0e69248dc91a497bd3f7bd56d');


interface PageProps {
  params: {
    page: string[];
    projectId:string[];
  };
  // content?: BuilderContent;
}

export default async function Page(props: PageProps) {
  const builderModelName = "projects";

  
  const content = await builder
  // Get the page content from Builder with the specified options
  .get(builderModelName, {
    userAttributes: {
      // Use the page path specified in the URL to fetch the content
      urlPath: `/` + (props?.params?.projectId?.join("/") || ""),
    },
  })
  // Convert the result to a promise
  .toPromise();
  
  return (
    <>
      {/* Render the Builder page */}
      {/* <RenderBuilderContent content={content} model="page"/> */}
      <h2 className="mt-96">the {props.params.projectId}</h2>
      {/* <ProjectBanner description1={""} description2={""}/> */}
      {/* <ProjectChallanges data={backendData} />
      <ProjectSection
        data={backendData2}
        className="bg-yellow"
        order="lg:order-1"
      />
      <ProjectSwiper />
      <ProjectSection data={backendData2} className="bg-blue text-background" />
      <MobileSwiper />
      <LatestThinking data={latestThinkingData} />
      <Sticky /> */}
    </>
    
  );
}
