import LatestThinking from "@/components/LatestThinking";
import MobileSwiper from "@/components/MobileSwiper";
import ProjectBanner from "@/components/ProjectBanner";
import ProjectChallanges from "@/components/ProjectChallanges";
import ProjectSection from "@/components/ProjectSection";
import ProjectSwiper from "@/components/ProjectSwiper";
import { backendData, backendData2, latestThinkingData } from "@/lib/constData";
import React from "react";

const Projects = ({ params }: { params: { projectid: string } }) => {
  return (
    <>
      <h1>This is Product:{params.projectid}</h1>
      <ProjectBanner data={backendData} />
      <ProjectChallanges data={backendData} />
      <ProjectSection
        data={backendData2}
        className="bg-yellow"
        order="lg:order-1"
      />
      <ProjectSwiper/>
      <ProjectSection data={backendData2} className="bg-blue text-background" />
      <MobileSwiper />
      <LatestThinking data={latestThinkingData} />
    </>
  );
};

export default Projects;
