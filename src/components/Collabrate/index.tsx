import { CollaboratorCard } from "@/lib/constData";
import React from "react";
import CollabrateCard from "@/components/CollabrateCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <CollabrateCard key={x.title} data={x} />
        ))}
      </div>
      <div className="py-10">
        <Link
          className=" max-sm:grid overflow-hidden "
          href={"https://thespecialcharacter.graphy.com/"}
        >

          <Button variant={"default"} size={"md"}>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Start your innovation <span>journey </span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Collabrate;
