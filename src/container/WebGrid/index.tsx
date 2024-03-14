import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { webicon } from "@/lib/constData";
import React from "react";

const WebGrid = (props: Props) => {
  return (
    <section>
      <div className="py-4">
        <h2 className="font-extrabold lg:text-4xl  sm:text-2xl ">
          Our custom web development services help you break away from the
          ordinary
        </h2>
      </div>
      <div className="py-4   md:pr-12 lg:pr-64 ">
        <p className="text-bold text-2xl">
          Building successful web solutions since 2009, we have the expertise to
          build something great for you, too. Whatever your challenge is, there
          would be few things in the web development world that we haven’t
          worked with. Tap our custom web development services to create
          seamless web experiences that captivate. Our ITRex team delivers:
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8  ">
        {webicon.map((x) => (
          <ServiceIcon data={x} />
        ))}
      </div>
      <div className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Request our Custom <span>web Development services</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default WebGrid;
