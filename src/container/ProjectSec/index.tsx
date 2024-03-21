import Link from "next/link";
import React from "react";
import Arrow from "@/public.icons/angle-circle-arrow-right-icon.svg";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";


type Props = {};

const ProjectSec = (props: Props) => {
  return (
    <section>
      <h1 className="font-bold text-4xl my-10 lg:pl-4 sm:pl-2">
        Latest Project
      </h1>

      <ProjectCard />

      <div className="flex flex-wrap justify-between my-10 pl-4 max-sm:px-5 gap-y-9 text-xl text-white">
        <div className="flex items-center">
          <Link
            href={"https://thespecialcharacter.graphy.com/"}
            className="pt-1 flex gap-x-2 items-center text-black font-bold"
          >
            View all cases <Arrow />
          </Link>
        </div>
        <Link
          className="pr-5 md:pr-16 grid overflow-hidden justify-center"
          href={"https://thespecialcharacter.graphy.com/"}
        >
          <Button variant={"default"} size={"md"} className="">
            Start your innovation journey
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSec;
