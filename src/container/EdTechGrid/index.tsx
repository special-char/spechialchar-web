import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { edSection } from "@/lib/constData";
import { uiSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const EdTechGrid = ({ data }: uiSectionType) => {
  return (
    <>
      <section>
        <div className="flex flex-wrap w-[75%]">
          <div className="text-4xl font-extrabold">{data?.title}</div>
          <div className=" text-2xl max-md:text-lg py-10 font-light">
            {data?.text}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {edSection.section.map((item) => (
            <GridSection data={item} />
          ))}
        </div>
        <div className="py-10">
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Otp for custom eLearning <span>development </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default EdTechGrid;
