import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { edSection1 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EdTechGrid2 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-4 gap-8  ">
          {edSection1.map((x) => (
            <ServiceIcon key={x.title} data={x} />
          ))}
        </div>
        <div className="py-10">
          <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Schedule a free <span>discussion </span>
                <span>&rarr;</span>
              </span>
            </Button>
          </Link>
        </div>

      </section>
    </>
  );
};

export default EdTechGrid2;
