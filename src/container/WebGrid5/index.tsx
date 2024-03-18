import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { webSection, webSection3 } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const WebGrid2 = ({ data }: ServiceIconType) => {
  return (
    <section className="flex flex-col gap-y-5">
      <div className="py-4   md:pr-12 lg:pr-64 ">
        <p className="text-bold text-2xl">{data?.texts}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8  ">
        {webSection3.data.map((x) => (
          <ServiceIcon data={x} />
        ))}
      </div>
      <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            {data.button1} <span>{data?.button2}</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default WebGrid2;