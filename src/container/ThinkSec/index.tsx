import Link from "next/link";
import React from "react";
import Arrow from "@/public.icons/angle-circle-arrow-right-icon.svg";
import { Button } from "@/components/ui/button";
import CardComp from "@/components/ProjectCard";
import { Card1 } from "@/lib/constData";

type Props = {};

const ThinkSec = (props: Props) => {
  return (
    <section className="max-sm:pl-4 pl-8 lg:pl-48 py-10 md:py-5">
      <h1 className="font-bold text-4xl my-10 lg:pl-4 sm:pl-2">
        Latest Thinking
      </h1>

      <CardComp data={Card1} />

      <div className="flex flex-wrap justify-between my-10 gap-y-9 text-xl text-white">
        <div className="flex items-center">
          <Link
            href={"#"}
            className="pt-1 flex gap-x-2 items-center text-black font-bold"
          >
            View all cases <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThinkSec;
