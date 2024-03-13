import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { webgrid } from "@/lib/constData";
import React from "react";

const WebGrid3 = (props: Props) => {
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-8  ">
        {webgrid.map((x) => (
          <ServiceIcon data={x} />
        ))}
      </div>
      <div className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Discuss your web <span>app development project </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default WebGrid3;
