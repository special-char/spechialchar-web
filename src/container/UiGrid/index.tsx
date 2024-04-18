import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { uiGrid } from "@/lib/constData";
import { uiSectionType } from "@/utils/types";
import Link from "next/link";
import React from "react";

type Props = {
  title:string,
  text:string,
  button:string,
};

const UiGrid = (props: Props) => {
  return (
    <>
      <section>
        <div className="flex flex-wrap lg:w-[75%]">
          <h2 className="text-heading2">{props.title}</h2>
          <div className=" text-subtitle3 py-10 ">
            {props.text}
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
            href={"#Contact"}
          >
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                {props.button}
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default UiGrid;
