import { Button } from "@/components/ui/button";
import { uiuxbox } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const UiUxBox = () => {
  return (
    <>
      <div className="bg-background m-5 px-container py-10 rounded-lg ">
        <ul className="list-square pl-7 grid lg:grid-cols-2  lg:px-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {uiuxbox.map((i) => (
            <li key={i.id} className="text-lg mb-2 ">
              <span className="font-bold text-xl">{i?.title}</span>{" "}
              {i.discription}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-container pt-7 pb-12">
        <Link href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Work with our UI/UX<span>design company</span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default UiUxBox;
