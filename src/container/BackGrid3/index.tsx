import SaasSec from "@/components/SaasSec";
import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { backicon2 } from "@/lib/constData";
import React from "react";

type Props = {};

const BackGrid3 = (props: Props) => {
  return (
    <section>
      <div className="grid md:grid-cols-4 gap-8 ">
        {backicon2.map((x) => (
          <SaasSec data={x} />
        ))}
      </div>
      <div className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Build Custom back-end<span>Solution </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default BackGrid3;
