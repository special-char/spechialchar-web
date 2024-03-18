import { backSection } from "@/lib/constData";
import { SaasSectionType } from "@/utils/types";
import React from "react";
import SaasService from "../SaasService";
import SaasSec from "@/components/SaasSec";
import { Button } from "@/components/ui/button";

type Props = {};

const BackGrid = ({ data }: SaasSectionType) => {
  return (
    <section>
      <div className="flex flex-wrap lg:w-[75%]">
        <div className="text-4xl font-extrabold">{data?.title}</div>
        <div className=" text-2xl max-md:text-lg py-10 font-light">
          {data?.description}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
        {backSection.section.map((item) => (
          // <ServiceIcon data={item}/>
          <SaasSec data={item} />
        ))}
      </div>
      {/* <div className="my-8 font-bold text-2xl">
        <Button>Otp for custom eLearning development</Button>
      </div> */}
      <div className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Tell us your saas software <span>development needs</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default BackGrid;
