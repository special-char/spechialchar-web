import { backendData } from "@/lib/constData";
import { ProjectSectionType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const ProjectBanner = ({data}:ProjectSectionType) => {
  return (
    <div>
      <section className="h-[50vh] bg-yellow flex flex-col justify-center gap-y-10">
        <div>
          <button>
            <Link href={"/casestudies"}>
              <span className="flex gap-x-[0.22rem]">
                <span className="text-blue text-xl font-bold">&larr;</span>
                <span className="text-xl font-bold">All Projects</span>
              </span>
            </Link>
          </button>
        </div>
        <div className="w-full text-primary font-bold text-5xl">
          {data.description1}
        </div>
      </section>
      <section className="h-[50vh] bg-primary text-background grid grid-cols-2 text-xl gap-x-10">
        {backendData.section1.map((item) => {
          return (
            <>
              <div key={item.id}>
                <h2 className="font-bold">{item.title}</h2>
                <h3>{item.description}</h3>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default ProjectBanner;
