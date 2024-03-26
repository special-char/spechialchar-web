import { Button } from "@/components/ui/button";
import { cloudBox } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const CloudGrid = () => {
  return (
    <>
      <div className="">
        <div className="bg-blue-100 md:mx-5 md:my-10 px-container rounded-lg py-10 ">
          <ul className="list-square  grid lg:grid-cols-2 lg:px-1 sm:gap-x-10 sm:gap-y-8 md:grid-cols-2">
            {cloudBox.map((i) => (
              <li key={i.id} className="text-lg mb-2 text-button">
                <span className="font-bold text-xl text-black">{i.title}</span>{" "}
                <span className="text-black">{i.discription}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-container max-md:grid pb-10">
          <Link href={"https://thespecialcharacter.graphy.com/"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Discuss my cloud <span>project</span>
                <span>&rarr;</span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CloudGrid;
