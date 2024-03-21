import { mobileicon } from "@/lib/constData";
import React from "react";
import ServiceIcon from "../ServiceIcon";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {};

const MobileIcon = ({ data }: ServiceIconType) => {
  return (
    <>
      <section>
        <div className="gap-3">
          <h2 className="font-extrabold lg:text-4xl  sm:text-2xl py-10">
            {data.heading}
          </h2>
        </div>
        <div className=" md:pr-12 lg:pr-64 py-5">
          <p className="text-bold text-2xl">{data.texts}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 py-10">
          {mobileicon.data.map((x) => (
            <ServiceIcon key={x.title} data={x} />
          ))}
        </div>
        <Link
          className="py-10"
          href={"https://thespecialcharacter.graphy.com/"}
        >
          <Button className="">
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {data.button1} <span>{data.button2} </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </section>
    </>
  );
};

export default MobileIcon;
