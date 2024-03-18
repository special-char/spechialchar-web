import { Button } from "@/components/ui/button";
import { serviceBox, serviceBox1 } from "@/lib/constData";
import React from "react";

const SaasBox = () => {
  return (
    <>
      <section className="bg-blue-100 border-r-2 sm:m-10 px-10 lg: py-20 rounded-lg ">
        <ul className="list-square pl-4 grid lg:grid-cols-2 lg:px-1 gap-x-9 md:grid-cols-2">
          {serviceBox1.map((i) => (
            <li key={i.id} className="text-lg mb-2 ">
              <span className="font-bold text-xl">{i?.title}</span>{" "}
              {i.discription}
            </li>
          ))}
        </ul>
      </section>
      <section className="py-10">
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Let's Discuss Our <span>parternship</span>
            <span>&rarr;</span>
          </span>
        </Button>
      </section>
    </>
  );
};

export default SaasBox;
