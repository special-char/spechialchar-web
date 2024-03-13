import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { webSection, webicon } from "@/lib/constData";
import React from "react";

const WebGrid2 = (props: Props) => {
  return (
    <section>
      {/* <div className="py-4">
        <h2 className="font-extrabold lg:text-4xl  sm:text-2xl ">
          Our custom web development services help you break away from the
          ordinary
        </h2>
      </div> */}
      <div className="py-4   md:pr-12 lg:pr-64 ">
        <p className="text-bold text-2xl">
          Our mission is to take business like yours to the top. That’s why
          ITRex is more than just a professional provider of custom web
          development services. Innovators at heart, we help you turn the latest
          tech innovations into exceptional business value. We help you outrun
          the competition.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8  ">
        {webSection.map((x) => (
          <ServiceIcon data={x} />
        ))}
      </div>
      <div className="py-10">
        <Button>
          Contect Us<span>&rarr;</span>
        </Button>
      </div>
    </section>
  );
};

export default WebGrid2;
