import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { serviceicon } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const Service = (props: Props) => {
  return (
    <section>
      <div className="gap-3">
        <h2 className="font-extrabold lg:text-4xl  sm:text-2xl p-4">
          Custom software engineering services that bring value from day one
        </h2>
      </div>
      <div className="py-2   md:pr-12 lg:pr-64  p-4">
        <p className="text-bold text-2xl">
          We offer a whole gamut of software engineering and consulting services
          to help our clients create technology systems for enterprise resource
          planning, collaboration, customer management, data analysis, and
          process automation. You can turn to our software engineering firm for:
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 p-4 ">
        {serviceicon.map((x) => (
          <ServiceIcon data={x} />
        ))}
      </div>
      <Link className="py-10" href={"https://thespecialcharacter.graphy.com/"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Discuss your software <span>engineering needs </span>
            <span>&rarr;</span>
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default Service;
