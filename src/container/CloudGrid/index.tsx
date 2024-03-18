import { Button } from "@/components/ui/button";
import { cloudBox } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const CloudGrid = (props: Props) => {
  return (
    <>
      <section>
        <div className="bg-blue-100 border-r-2 lg:m-10 lg:px-24 max-sm:px-9 py-20  p-4 rounded-lg ">
          <ul className="list-square pl-7 grid lg:grid-cols-2 lg:px-1 sm:gap-x-10 md:grid-cols-2">
            {cloudBox.map((i) => (
              <li key={i.id} className="text-lg mb-2 ">
                <span className="font-bold text-xl">{i.title}</span>{" "}
                {i.discription}
              </li>
            ))}
          </ul>
        </div>
        <Link className="py-10 max-md:grid" href={"https://thespecialcharacter.graphy.com/"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Discuss my cloud <span>project</span>
              <span>&rarr;</span>
            </span>
          </Button>
        </Link>
      </section>
    </>
  );
};

export default CloudGrid;
