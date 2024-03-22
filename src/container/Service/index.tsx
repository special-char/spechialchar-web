import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { serviceicon } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const Service = ({ data }: ServiceIconType) => {
  return (
    <section className="flex flex-col gap-y-4 py-10">
      <div className="gap-3">
        <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-2xl p-4">
          {data.heading}
        </h2>
      </div>
      <div className="py-2 md:pr-12 lg:pr-64  p-4">
        <p className=" sm:text-2xl md:text-xl">{data.texts}</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 p-4 ">
        {serviceicon.data.map((x) => (
          <ServiceIcon key={x.url} data={x} />
        ))}
      </div>
      <div className="grid w-full pb-10 pt-4">
        <Link href={"https://thespecialcharacter.graphy.com/"}>
          <Button variant="default" size="lg" className=" py-7 text-base ">
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Discuss your software <span>engineering needs</span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Service;
