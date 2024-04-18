import CloudAccord from "@/components/CloudAccord";
import { Button } from "@/components/ui/button";
import { cloudAccordiandata } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {
  title:string,
  description:string
  button:string
}

const CloudAccordian = (props : Props) => {
  return (
    <section className="flex flex-col gap-y-16">
      <div className="lg:w-[60vw] flex flex-col gap-y-10">
        <h2 className="text-heading2 font-bold ">
          {props.title}
        </h2>
        <p className="text-subtitle3">
          {props.description}
        </p>
      </div>
      <div>
        <CloudAccord data={cloudAccordiandata} />
      </div>
      <div>
        <Link title="cloud-late-talk" href={"#Contact"}>
          <Button variant="default" size="sm" className=" py-7 text-base ">
            {props.button}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CloudAccordian;
