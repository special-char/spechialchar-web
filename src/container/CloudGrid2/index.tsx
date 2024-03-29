import { Button } from "@/components/ui/button";
import { cloudgrid } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const CloudGrid2 = () => {
  return (
    <>
      <section>
        {cloudgrid.data.map((i) => {
          return (
            <div
              key={i.id}
              className="flex max-sm:flex-col gap-5 justify-between my-10 pb-10 border-b-2 border-b-gray-200"
            >
              <div className="font-bold md:text-heading6 flex flex-nowrap text-heading3 max-lg:w-60">
                {i.title}
              </div>
              <div className="text-gray-400 text-xl lg:w-[40rem] md:w-[30rem]">
                {i.description}
              </div>
            </div>
          );
        })}
        <div className="py-4">
          <Link href={"https://thespecialcharacter.graphy.com/"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Talk to <span>cloud expert </span>
                <span>&rarr;</span>
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CloudGrid2;
