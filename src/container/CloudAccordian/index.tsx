import CloudAccord from "@/components/CloudAccord";
import { Button } from "@/components/ui/button";
import { cloudAccordiandata } from "@/lib/constData";
import { CloudAccordiandataType } from "@/utils/types";
import Link from "next/link";
import React from "react";


const CloudAccordian = ({data}:CloudAccordiandataType) => {
  return (
    <section className="flex flex-col gap-y-16">
      <div className="lg:w-[60vw] flex flex-col gap-y-10">
        <div className="text-heading2 font-bold ">
          {data.title}
        </div>
        <div className="text-subtitle2">
          {data.description}
        </div>
      </div>
      <div>
        <CloudAccord data={cloudAccordiandata} />
      </div>
      <Link href={"https://thespecialcharacter.graphy.com/"}>
        <Button variant="default" size="sm" className=" py-7 text-base ">
          Lets Talk &rarr;
        </Button>
      </Link>
    </section>
  );
};

export default CloudAccordian;
