import SaasSec from "@/components/SaasSec";
import { Button } from "@/components/ui/button";
import { saasSection } from "@/lib/constData";
import { SaasSectionType } from "@/utils/types";
import Link from "next/link";
import React from "react";

type Props = {};

const SaasGrid = ({ data }: SaasSectionType) => {
  return (
    <section>
      <div className="flex flex-wrap lg:w-[75%]">
        <div className="text-4xl font-extrabold">{data?.title}</div>
        <div className=" text-2xl max-md:text-lg py-10 font-light">
          {data?.description}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
        {saasSection.section.map((item) => (
          <SaasSec key={item.title} data={item} />
        ))}
      </div>
      <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Tell us your saas software <span>development needs</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default SaasGrid;
