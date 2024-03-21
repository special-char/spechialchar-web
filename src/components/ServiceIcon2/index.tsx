import { serviceicon2 } from "@/lib/constData";
import React from "react";
import ServiceIcon from "../ServiceIcon";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const ServiceIcon2 = (props: Props) => {
  return (
    <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-20 md:grid-cols-3">
      {serviceicon2.data.map((x) => (
        <ServiceIcon key={x.title} data={x} />
      ))}
      <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
        <Button className="">
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            get return on tech <span>investments </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default ServiceIcon2;
