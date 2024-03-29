import { Button } from "@/components/ui/button";
import { webSection } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";
import WebGrid from "@/components/WebGrid";

const WebGrid2 = ({ data }: ServiceIconType) => {
  return (
    <section className="flex flex-col gap-y-5">
      <div className=" md:pr-12 lg:pr-64 ">
        <p className="text-bold lg:text-2xl md:text-xl">{data.texts}</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8  ">
        {webSection.data.map((x) => (
          <WebGrid key={x.description} data={x} />
        ))}
      </div>
      <div className="pt-3">
        <Link className="" href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {data.button1} <span>{data?.button2}</span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WebGrid2;
