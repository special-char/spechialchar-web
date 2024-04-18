import { backSection } from "@/lib/constData";
import { SaasSectionType } from "@/utils/types";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WebGrid from "@/components/WebGrid";

type Props = {
  title:string,
  description:string,
  button1:string
  button2:string
};

const BackGrid = (props: Props) => {
  return (
    <section>
      <div className="flex flex-wrap lg:w-[75%]">
        <h2 className="text-heading2">{props.title}</h2>
        <div className="text-subtitle3 py-10 ">
          {props.description}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
        {backSection.section.map((item) => (
          <WebGrid key={item.title} data={item} />
        ))}
      </div>
      <div className="pt-10">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            {props.button1}<span>{props.button2}</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BackGrid;
