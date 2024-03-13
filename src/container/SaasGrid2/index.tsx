import SaasSec from "@/components/SaasSec";
import { Button } from "@/components/ui/button";
import { saasSection, saasSection2 } from "@/lib/constData";
import React from "react";

type Props = {};

const SaasGrid = (props: Props) => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 max-md:grid-cols-1 gap-10">
        {saasSection2.map((item) => (
          // <ServiceIcon data={item}/>
          <SaasSec data={item} />
        ))}
      </div>
      <div className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Talk to our <span>Saas experts</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default SaasGrid;