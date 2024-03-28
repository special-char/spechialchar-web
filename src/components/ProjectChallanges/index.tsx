import { ProjectSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const ProjectChallanges = ({ data }: ProjectSectionType) => {
  return (
    <>
      <section className="flex flex-col gap-y-10">
        <div>
          <h2 className="font-bold lg:text-8xl text-4xl">Challanges</h2>
        </div>
        <div className="lg:text-2xl text-lg">{data.description2}</div>
      </section>
    </>
  );
};

export default ProjectChallanges;
