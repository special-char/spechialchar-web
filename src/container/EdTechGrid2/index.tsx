import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { edSection1, webSection } from "@/lib/constData";
import React from "react";

type Props = {};

const EdTechGrid2 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid md:grid-cols-4 gap-8  ">
          {edSection1.map((x) => (
            <ServiceIcon data={x} />
          ))}
        </div>
        <div className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Schedule a free <span>discussion </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </div>
      </section>
    </>
  );
};

export default EdTechGrid2;
