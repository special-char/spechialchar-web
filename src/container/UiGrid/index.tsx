import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { uiGrid } from "@/lib/constData";
import { uiSectionType } from "@/utils/types";
import Link from "next/link";
import React from "react";

type Props = {};

const UiGrid = ({ data }: uiSectionType) => {
  return (
    <>
      <section>
        <div className="flex flex-wrap lg:w-[75%]">
          <div className="text-4xl font-extrabold">{data?.title}</div>
          <div className=" text-2xl max-md:text-lg py-10 font-light">
            {data?.text}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
          {uiGrid.section.map((item) => (
            <GridSection key={item.id} data={item} />
          ))}
        </div>
        <div className="pt-10">
          <Link
            className="py-10"
            href={"https://thespecialcharacter.graphy.com/"}
          >
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Explore our UI/UX
                <span>
                  design <span>&rarr;</span>
                </span>
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default UiGrid;
