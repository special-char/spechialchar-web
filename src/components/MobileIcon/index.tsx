import { mobileicon } from "@/lib/constData";
import React from "react";
import ServiceIcon from "../ServiceIcon";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  heading:string 
  texts:string 
  button:string
};

const MobileIcon = (props:Props) => {
  return (
    <>
      <section>
        <div className="gap-3">
          <h2 className="text-heading1 py-7">{props.heading}</h2>
        </div>
        <div className=" md:pr-12 lg:pr-64 py-2">
          <p className="text-bold text-subtitle3">{props.texts}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 py-10">
          {mobileicon.data.map((x) => (
            <ServiceIcon key={x.title} data={x} />
          ))}
        </div>
        <Link
          className="py-10"
          href={"#Contact"}
        >
          <Button className="">
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {props.button}

            </span>
          </Button>
        </Link>
      </section>
    </>
  );
};

export default MobileIcon;
