import { Button } from "@/components/ui/button";
import { saasSection } from "@/lib/constData";
import { SaasSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const SaasGrid = ({ data }: SaasSectionType) => {
  return (
    <section>
      <div className="flex flex-wrap w-[75%]">
        <div className="text-4xl font-extrabold">{data.title}</div>
        <div className=" text-2xl max-md:text-lg py-10 font-light">
          {data.description}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
        {saasSection.section.map((item) => (
          <div key={item.id} className="border-b-2 border-b-second">
            <div className="text-3xl font-extrabold">{item.title}</div>
            <div className=" text-2xl max-md:text-lg py-10 text-gray font-light">
              {item.description}
            </div>
          </div>
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

export default SaasGrid;
