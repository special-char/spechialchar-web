import { Button } from "@/components/ui/button";
import { cloudBox2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const CloudGrid3 = () => {
  return (
    <>
      <section className="bg-[#fffae3] lg:m-10 md:px-24 lg:  max-sm:py-7 sm:py-20  p-4 rounded-lg flex flex-col gap-y-9">
        <div className="text-subtitle1 font-bold">
          Why work with The Special Char?
        </div>
        <div>
          <ul className="list-image-check pl-7 grid lg:grid-cols-2 lg:px-1 sm:gap-x-20 max-sm:gap-y-8 md:grid-cols-2">
            {cloudBox2.map((i) => (
              <li key={i.id} className="text-lg mb-2 ">
                <span className="font-bold text-xl">{i.title}</span>{" "}
                {i.discription}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-10">
        <Link href={"https://thespecialcharacter.graphy.com/"}>
          <Button size={"lg"}>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Get started with{" "}
              <span>
                cloud computing<span>&rarr;</span>
              </span>
            </span>
          </Button>
        </Link>
      </section>
    </>
  );
};

export default CloudGrid3;
