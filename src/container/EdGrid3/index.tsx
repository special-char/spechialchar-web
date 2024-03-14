import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { edSection1, edSection2 } from "@/lib/constData";
import React from "react";

type Props = {};

const EdGrid3 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {edSection2.map((x) => (
            <ServiceIcon data={x} />
          ))}
        </div>
        <div className="py-10">
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              get your <span>educational app </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default EdGrid3;
