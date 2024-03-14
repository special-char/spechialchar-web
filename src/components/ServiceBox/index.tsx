
import { serviceBox } from "@/lib/constData";
import React from "react";
import { Button } from "../ui/button";

const ServiceBox = () => {
  return (
    <>
      <section className="bg-blue-100 border-r-2 m-10 px-24 lg: py-20  p-4 rounded-lg ">
        <ul className="list-square pl-7 grid lg:grid-cols-2 lg:px-1 gap-4 md:grid-cols-2">
          {serviceBox.map((i) => (
            <li key={i.id} className="text-lg mb-2 ">
              <span className="font-bold text-xl">{i.title}</span>{" "}
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

export default ServiceBox;
