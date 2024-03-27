import PageBanner from "@/container/PageBanner";
import { pageBanner2 } from "@/lib/constData";
import React from "react";

const Projects = ({ params }: { params: { projectid: string } }) => {
  return (
    <>
      <PageBanner data={pageBanner2} className="bg-second" />
      <h1>This is Product:{params.projectid}</h1>
    </>
  );
};

export default Projects;
