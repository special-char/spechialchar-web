import CloudAccord from "@/components/CloudAccord";
import { Button } from "@/components/ui/button";
import { cloudAccordiandata } from "@/lib/constData";
import React from "react";

type Props = {};

const CloudAccordian = (props: Props) => {
  return (
    <section className="flex flex-col gap-y-16">
      <div className="w-[60vw]">
        <div className="text-heading2 font-bold ">
          All-encompassing cloud computing consulting and implementation
          services
        </div>
        <div className="text-subtitle2">
          We embrace an end-to-end approach — from thinking over the strategic
          aspects of cloud adoption and migration to cloud, security consulting
          and cloud infrastructure management. Our team of cloud consultants,
          business analysts, developers, and DevOps engineers will ensure that
          your cloud environment is efficient, safe, and high-performing.
        </div>
      </div>
      <div>
        <CloudAccord data={cloudAccordiandata} />
      </div>
      <div>
        <Button variant="default" size="sm" className=" py-7 text-base ">
          Let's Talk &rarr;
        </Button>
      </div>
    </section>
  );
};

export default CloudAccordian;
