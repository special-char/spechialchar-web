import { CollaboratorCard } from "@/lib/constData";
import React from "react";
import CollabrateCard from "@/components/CollabrateCard";
import { Button } from "@/components/ui/button";

const Collabrate = () => {
  return (
    <section className="bg-black text-white gap-y-10">
      <div className=" py-10  ">
        <h1 className=" font-extrabold lg:text-5xl sm:text-3xl text-3xl">
          How we collaborate with you
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
        {CollaboratorCard.map((x) => (
          <CollabrateCard data={x} />
        ))}
      </div>
    </section>
  );
};

export default Collabrate;
